// lib/network/seminars/seminarQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Seminar } from "../../types/seminarTypes";

// Fetch all seminars
export const fetchSeminars = async (): Promise<Seminar[]> => {
  const querySnapshot = await getDocs(collection(db, "seminars"));
  const seminars: Seminar[] = [];
  
  querySnapshot.forEach((doc) => {
    seminars.push({ id: doc.id, ...doc.data() } as Seminar);
  });
  return seminars;
};

// Fetch seminars by user ID
export const getSeminarsByUserId = async (userId: string): Promise<Seminar[]> => {
  const q = query(collection(db, "seminars"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const seminars: Seminar[] = [];
  
  querySnapshot.forEach((doc) => {
    seminars.push({ id: doc.id, ...doc.data() } as Seminar);
  });
  return seminars;
};

// Fetch seminar by document ID
export const getSeminarById = async (id: string): Promise<Seminar | null> => {
  const docRef = doc(db, "seminars", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Seminar;
  } else {
    console.log("No such document!");
    return null;
  }
};

// Add new seminar
export const addNewSeminar = async (seminar: Seminar): Promise<void> => {
  try {
    const newDocRef = doc(collection(db, "seminars"));
    await setDoc(newDocRef, seminar);
    console.log('New seminar added successfully');
  } catch (error) {
    console.error('Error adding new seminar: ', error);
  }
};

// Update seminar
export const updateSeminar = async (id: string, updatedDetails: Partial<Seminar>): Promise<void> => {
  try {
    const docRef = doc(db, "seminars", id);
    await updateDoc(docRef, updatedDetails);
    console.log('Seminar updated successfully');
  } catch (error) {
    console.error('Error updating seminar: ', error);
  }
};