// lib/network/users/userQueries.ts

import { collection, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { User } from "../../types/userTypes";

export const registerUser = async (user: User): Promise<void> => {
  try {
    const userRef = doc(db, 'users', user.id);
    await setDoc(userRef, user);
    console.log('User registered successfully');
  } catch (error) {
    console.error('Error registering user: ', error);
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
