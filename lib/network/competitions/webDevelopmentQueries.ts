// lib/network/competitions/webDevelopmentQueries.ts

import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { WebDevelopment } from "../../types/competitions/webDevelopmentTypes";

export const fetchWebDevelopment = async (): Promise<WebDevelopment[]> => {
  const querySnapshot = await getDocs(collection(db, "web_developments"));
  const competitions: WebDevelopment[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: WebDevelopment = {
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
      isVerified: data.isVerified
    };
    competitions.push(competition);
  });
  return competitions;
};

// Fetch by user_id
export const getWebDevelopmentByUserId = async (userId: string): Promise<WebDevelopment[]> => {
  const q = query(collection(db, "web_developments"), where("user_id", "==", userId));
  const querySnapshot = await getDocs(q);
  const competitions: WebDevelopment[] = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const competition: WebDevelopment = {
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
      isVerified: data.isVerified
    };
    competitions.push(competition);
  });
  return competitions;
};

// Fetch by document id (id)
export const getMobileLegendById = async (id: string): Promise<WebDevelopment | null> => {
  const docRef = doc(db, "web_developments", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const competition: WebDevelopment = {
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
      isVerified: data.isVerified
    };
    return competition;
  } else {
    console.log("No such document!");
    return null;
  }
};

// Add new document
export const addNewWebDevelopment = async (competition: WebDevelopment): Promise<void> => {
  try {
    const newDocRef = doc(collection(db, "web_developments"));
    await setDoc(newDocRef, competition);
    console.log('New competition added successfully');
  } catch (error) {
    console.error('Error adding new competition: ', error);
  }
};

// Update document
export const updateWebDevelopment = async (id: string, updatedDetails: Partial<WebDevelopment>): Promise<void> => {
  try {
    const docRef = doc(db, "web_developments", id);
    await updateDoc(docRef, updatedDetails);
    console.log('Competition updated successfully');
  } catch (error) {
    console.error('Error updating competition: ', error);
  }
};
