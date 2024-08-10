// lib/network/admins/adminQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Admin } from "../../types/adminTypes";
import { createSession, removeSession } from "@/lib/session";
import { signInWithEmailAndPassword } from "firebase/auth";

// Fetch all admins
export const fetchAdmins = async (): Promise<Admin[]> => {
  const querySnapshot = await getDocs(collection(db, "admins"));
  const admins: Admin[] = [];
  
  querySnapshot.forEach((doc) => {
    admins.push({ id: doc.id, ...doc.data() } as Admin);
  });
  return admins;
};

// Fetch admins by user_id
export const getAdminsByUserId = async (userId: string): Promise<Admin[]> => {
  const q = query(collection(db, "admins"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const admins: Admin[] = [];
  
  querySnapshot.forEach((doc) => {
    admins.push({ id: doc.id, ...doc.data() } as Admin);
  });
  return admins;
};

// Fetch admin by document id (id)
export const getAdminById = async (id: string): Promise<Admin | null> => {
  const docRef = doc(db, "admins", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Admin;
  } else {
    // console.log("No such document!");
    return null;
  }
};

// Add new admin
export const addNewAdmin = async (admin: Admin): Promise<void> => {
  try {
    const newDocRef = doc(collection(db, "admins"));
    await setDoc(newDocRef, admin);
    // console.log('New admin added successfully');
  } catch (error) {
    // console.error('Error adding new admin: ', error);
  }
};

// Update admin
export const updateAdmin = async (id: string, updatedDetails: Partial<Admin>): Promise<void> => {
  try {
    const docRef = doc(db, "admins", id);
    await updateDoc(docRef, updatedDetails);
    // console.log('Admin updated successfully');
  } catch (error) {
    // console.error('Error updating admin: ', error);
  }
};

export const loginAdmin = async (email: string, password: string): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    const adminDocRef = doc(db, "admins", user.uid);
    const adminDocSnap = await getDoc(adminDocRef);

    if (!adminDocSnap.exists()) {
      // console.log('Admin not found');
      return false;
    }

    // if (!user.emailVerified) {
    //   // console.log('Email not verified');
    //   return false;
    // }

    const customToken = await user.getIdToken();

    await createSession(user.uid, customToken, true);
    // console.log('User logged in successfully');
    return true;
  } catch (error) {
    // console.error('Error logging in user: ', error);
    return false;
  }
}

// Logout Admin
export const logoutAdmin = async (): Promise<boolean> => {
  try {
    await auth.signOut();
    await removeSession(true);
    // console.log('User logged out successfully');
    return true;
  } catch (error) {
    // console.error('Error logging out user: ', error);
    return false;
  }
}
