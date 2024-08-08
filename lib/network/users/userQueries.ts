// lib/network/users/userQueries.ts

import { collection, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase";
import { User } from "../../types/userTypes";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";

export const registerUser = async (user: User, email: string, password: string): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      id: userCredential.user.uid,
      name: user.name
    });
    console.log('User registered successfully');
    return true;
  } catch (error) {
    console.error('Error registering user: ', error);
    return false;
  }
};

export const signInWithGoogle = async (): Promise<boolean> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      id: user.uid,
      name: user.displayName,
    });
    console.log('User signed in with Google successfully');
    return true;
  } catch (error) {
    console.error('Error signing in with Google: ', error);
    return false;
  }
};

export const updateUser = async (userId: string, updatedDetails: Partial<User>): Promise<void> => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, updatedDetails);
    console.log('User details updated successfully');
  } catch (error) {
    console.error('Error updating user details: ', error);
  }
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      console.log('No such user!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user details: ', error);
    return null;
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users: User[] = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as User);
    });
    return users;
  } catch (error) {
    console.error('Error fetching users: ', error);
    return [];
  }
};
