// lib/network/workshops/workshopQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Workshop } from "../../types/workshopTypes";
import { generateTicketNumber } from "../utils/utils";

// Fetch all workshops
export const fetchWorkshops = async (): Promise<Workshop[]> => {
  const querySnapshot = await getDocs(collection(db, "workshops"));
  const workshops: Workshop[] = [];
  
  querySnapshot.forEach((doc) => {
    workshops.push({ id: doc.id, ...doc.data() } as Workshop);
  });
  return workshops;
};

// Fetch workshops by user ID
export const getWorkshopsByUserId = async (userId: string): Promise<Workshop[]> => {
  const q = query(collection(db, "workshops"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const workshops: Workshop[] = [];
  
  querySnapshot.forEach((doc) => {
    workshops.push({ id: doc.id, ...doc.data() } as Workshop);
  });
  return workshops;
};

// Fetch workshop by document ID
export const getWorkshopById = async (id: string): Promise<Workshop | null> => {
  const docRef = doc(db, "workshops", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Workshop;
  } else {
    // console.log("No such document!");
    return null;
  }
};

// Add new workshop
export const addNewWorkshop = async (workshop: Workshop): Promise<void> => {
  try {
    // workshop.ticket_number = await generateTicketNumber("workshop");, refactor to admin
    const newDocRef = doc(collection(db, "workshops"));
    await setDoc(newDocRef, workshop);
    // console.log('New workshop added successfully');
  } catch (error) {
    // console.error('Error adding new workshop: ', error);
  }
};

// Generate workshop ticket number by ID and must be done by admin or else will be blocked by firestore rules
export const generateWorkshopTicketNumberAndVerifyById = async (id: string): Promise<string> => {
  try {
    const generatedTicketNumber = await generateTicketNumber('workshop');
    const docRef = doc(db, 'workshops', id);
    await updateDoc(docRef, { ticket_number: generatedTicketNumber, is_verified: true });
    return generatedTicketNumber;
  } catch (error) {
    console.error('Error generating ticket number by ID: ', error);
    return 'error';
  }
}

// Update workshop
export const updateWorkshop = async (id: string, updatedDetails: Partial<Workshop>): Promise<void> => {
  try {
    const docRef = doc(db, "workshops", id);
    await updateDoc(docRef, updatedDetails);
    // console.log('Workshop updated successfully');
  } catch (error) {
    // console.error('Error updating workshop: ', error);
  }
};