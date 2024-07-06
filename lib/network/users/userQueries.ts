// lib/network/users/userQueries.ts

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { User } from "../../types/userTypes";

export const fetchUsers = async (): Promise<User[]> => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users: User[] = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() } as User);
  });
  return users;
};
