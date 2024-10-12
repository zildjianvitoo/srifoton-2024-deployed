// lib/network/talkshows/talkshowQueries.ts

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Talkshow } from "../../types/talkshowTypes";
import { generateTicketNumber } from "../utils/utils";

// Fetch all talkshows
export const fetchTalkshows = async (): Promise<Talkshow[]> => {
  const querySnapshot = await getDocs(collection(db, "talkshows"));
  const talkshows: Talkshow[] = [];

  querySnapshot.forEach((doc) => {
    talkshows.push({ id: doc.id, ...doc.data() } as Talkshow);
  });
  return talkshows;
};

// Fetch talkshow by user ID
export const getTalkshowsByUserId = async (
  userId: string,
): Promise<Talkshow[]> => {
  const q = query(collection(db, "talkshows"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const talkshows: Talkshow[] = [];

  querySnapshot.forEach((doc) => {
    talkshows.push({ id: doc.id, ...doc.data() } as Talkshow);
  });
  return talkshows;
};

// Fetch talkshow by document ID
export const getTalkshowById = async (id: string): Promise<Talkshow | null> => {
  const docRef = doc(db, "talkshows", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Talkshow;
  } else {
    // console.log("No such document!");
    return null;
  }
};

// Add new talkshow
export const addNewTalkshow = async (talkshow: Talkshow): Promise<void> => {
  try {
    // talkshow.ticket_number = await generateTicketNumber("talkshow"); refactor to admin

    const newDocRef = doc(collection(db, "talkshows"));
    await setDoc(newDocRef, talkshow);
    await fetch("http://139.99.89.108:3005/event-srifoton", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: talkshow.name,
        eventName: "Talkshow",
        paymentType: talkshow.payment_method,
      }),
    });
    // console.log('New talkshow added successfully');
  } catch (error) {
    // console.error('Error adding new talkshow: ', error);
  }
};

// Generate talkshow ticket number by ID and must be done by admin or else will be blocked by firestore rules
export const generateTalkshowTicketNumberAndVerifyById = async (
  id: string,
): Promise<string> => {
  try {
    const generatedTicketNumber = await generateTicketNumber("talkshow");
    const docRef = doc(db, "talkshows", id);
    await updateDoc(docRef, {
      ticket_number: generatedTicketNumber,
      is_verified: true,
    });
    return generatedTicketNumber;
  } catch (error) {
    console.error("Error generating ticket number by ID: ", error);
    return "error";
  }
};

// Update talkshow
export const updateTalkshow = async (
  id: string,
  updatedDetails: Partial<Talkshow>,
): Promise<void> => {
  try {
    const docRef = doc(db, "talkshows", id);
    await updateDoc(docRef, updatedDetails);
    // console.log('Talkshow updated successfully');
  } catch (error) {
    // console.error('Error updating talkshow: ', error);
  }
};
