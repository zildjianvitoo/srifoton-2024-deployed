// lib/network/competitions/uiUxDesignQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { UiUxDesign } from "../../types/competitions/uiUxDesignTypes";

export const fetchUiUxDesign = async (): Promise<UiUxDesign[]> => {
  const querySnapshot = await getDocs(collection(db, "ui_ux_designs"));
  const competitions: UiUxDesign[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: UiUxDesign = {
      id: doc.id,
      user_id: data.user_id,
      team_name: data.team_name,
      email: data.email,
      college: data.college,
      name_1: data.name_1,
      nim_1: data.nim_1,
      phone_number_1: data.phone_number_1,
      instagram_1: data.instagram_1,
      idcard_1: data.idcard_1,
      name_2: data.name_2,
      nim_2: data.nim_2,
      phone_number_2: data.phone_number_2,
      instagram_2: data.instagram_2,
      idcard_2: data.idcard_2,
      name_3: data.name_3,
      nim_3: data.nim_3,
      phone_number_3: data.phone_number_3,
      instagram_3: data.instagram_3,
      idcard_3: data.idcard_3,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      submission: data.submission,
      date: data.date,
    };
    competitions.push(competition);
  });
  return competitions;
};

// Fetch by user_id
export const getUiUxDesignByUserId = async (userId: string): Promise<UiUxDesign[]> => {
  const q = query(collection(db, "ui_ux_designs"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const competitions: UiUxDesign[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: UiUxDesign = {
      id: doc.id,
      user_id: data.user_id,
      team_name: data.team_name,
      email: data.email,
      college: data.college,
      name_1: data.name_1,
      nim_1: data.nim_1,
      phone_number_1: data.phone_number_1,
      instagram_1: data.instagram_1,
      idcard_1: data.idcard_1,
      name_2: data.name_2,
      nim_2: data.nim_2,
      phone_number_2: data.phone_number_2,
      instagram_2: data.instagram_2,
      idcard_2: data.idcard_2,
      name_3: data.name_3,
      nim_3: data.nim_3,
      phone_number_3: data.phone_number_3,
      instagram_3: data.instagram_3,
      idcard_3: data.idcard_3,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      submission: data.submission,
      date: data.date,
    };
    competitions.push(competition);
  });
  return competitions;
};

// Fetch by document id (id)
export const getMobileLegendById = async (id: string): Promise<UiUxDesign | null> => {
  const docRef = doc(db, "ui_ux_designs", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const competition: UiUxDesign = {
      id: docSnap.id,
      user_id: data.user_id,
      team_name: data.team_name,
      email: data.email,
      college: data.college,
      name_1: data.name_1,
      nim_1: data.nim_1,
      phone_number_1: data.phone_number_1,
      instagram_1: data.instagram_1,
      idcard_1: data.idcard_1,
      name_2: data.name_2,
      nim_2: data.nim_2,
      phone_number_2: data.phone_number_2,
      instagram_2: data.instagram_2,
      idcard_2: data.idcard_2,
      name_3: data.name_3,
      nim_3: data.nim_3,
      phone_number_3: data.phone_number_3,
      instagram_3: data.instagram_3,
      idcard_3: data.idcard_3,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      submission: data.submission,
      date: data.date,
    };
    return competition;
  } else {
    // console.log("No such document!");
    return null;
  }
};

// Add new document
export const addNewUiUxDesign = async (competition: UiUxDesign): Promise<void> => {
  try {
    const newDocRef = doc(collection(db, "ui_ux_designs"));
    await setDoc(newDocRef, competition);
    // console.log('New competition added successfully');
  } catch (error) {
    // console.error('Error adding new competition: ', error);
  }
};

// Update document
export const updateUiUxDesign = async (id: string, updatedDetails: Partial<UiUxDesign>): Promise<void> => {
  try {
    const docRef = doc(db, "ui_ux_designs", id);
    await updateDoc(docRef, updatedDetails);
    // console.log('Competition updated successfully');
  } catch (error) {
    // console.error('Error updating competition: ', error);
  }
};
