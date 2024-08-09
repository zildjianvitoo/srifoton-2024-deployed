// lib/network/competitions/mobileLegendsQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { MobileLegends } from "../../types/competitions/mobileLegendsTypes";

export const fetchMobileLegends = async (): Promise<MobileLegends[]> => {
  const querySnapshot = await getDocs(collection(db, "mobile_legends"));
  const competitions: MobileLegends[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: MobileLegends = {
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
      name_4: data.name_4,
      nim_4: data.nim_4,
      phone_number_4: data.phone_number_4,
      instagram_4: data.instagram_4,
      idcard_4: data.idcard_4,
      name_5: data.name_5,
      nim_5: data.nim_5,
      phone_number_5: data.phone_number_5,
      instagram_5: data.instagram_5,
      idcard_5: data.idcard_5,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      date: data.date,
    };
    competitions.push(competition);
  });
  return competitions;
};


// Fetch by user_id
export const getMobileLegendsByUserId = async (userId: string): Promise<MobileLegends[]> => {
  const q = query(collection(db, "mobile_legends"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const competitions: MobileLegends[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: MobileLegends = {
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
      name_4: data.name_4,
      nim_4: data.nim_4,
      phone_number_4: data.phone_number_4,
      instagram_4: data.instagram_4,
      idcard_4: data.idcard_4,
      name_5: data.name_5,
      nim_5: data.nim_5,
      phone_number_5: data.phone_number_5,
      instagram_5: data.instagram_5,
      idcard_5: data.idcard_5,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      date: data.date,
    };
    competitions.push(competition);
  });
  return competitions;
};

// Fetch by document id (id)
export const getMobileLegendById = async (id: string): Promise<MobileLegends | null> => {
  const docRef = doc(db, "mobile_legends", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const competition: MobileLegends = {
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
      name_4: data.name_4,
      nim_4: data.nim_4,
      phone_number_4: data.phone_number_4,
      instagram_4: data.instagram_4,
      idcard_4: data.idcard_4,
      name_5: data.name_5,
      nim_5: data.nim_5,
      phone_number_5: data.phone_number_5,
      instagram_5: data.instagram_5,
      idcard_5: data.idcard_5,
      proof: data.proof,
      payment_method: data.payment_method,
      is_verified: data.is_verified,
      date: data.date,
    };
    return competition;
  } else {
    console.log("No such document!");
    return null;
  }
};

// Add new document
export const addNewMobileLegends = async (competition: MobileLegends): Promise<void> => {
  try {
    const newDocRef = doc(collection(db, "mobile_legends"));
    await setDoc(newDocRef, competition);
    console.log('New competition added successfully');
  } catch (error) {
    console.error('Error adding new competition: ', error);
  }
};

// Update document
export const updateMobileLegends = async (id: string, updatedDetails: Partial<MobileLegends>): Promise<void> => {
  try {
    const docRef = doc(db, "mobile_legends", id);
    await updateDoc(docRef, updatedDetails);
    console.log('Competition updated successfully');
  } catch (error) {
    console.error('Error updating competition: ', error);
  }
};