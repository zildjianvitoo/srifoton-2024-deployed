// lib/network/admins/adminQueries.ts

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Admin } from "../../types/adminTypes";

export const fetchAdmins = async (): Promise<Admin[]> => {
  const querySnapshot = await getDocs(collection(db, "admins"));
  const admins: Admin[] = [];
  querySnapshot.forEach((doc) => {
    admins.push({ id: doc.id, ...doc.data() } as Admin);
  });
  return admins;
};
