// lib/network/seminars/seminarQueries.ts

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Seminar } from "../../types/seminarTypes";

export const fetchSeminars = async (): Promise<Seminar[]> => {
  const querySnapshot = await getDocs(collection(db, "seminars"));
  const seminars: Seminar[] = [];
  querySnapshot.forEach((doc) => {
    seminars.push({ id: doc.id, ...doc.data() } as Seminar);
  });
  return seminars;
};
