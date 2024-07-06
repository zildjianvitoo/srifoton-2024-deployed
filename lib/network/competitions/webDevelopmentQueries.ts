// lib/network/competitions/webDevelopmentQueries.ts

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
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
