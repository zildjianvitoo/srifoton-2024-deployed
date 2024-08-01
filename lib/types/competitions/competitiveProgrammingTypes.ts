// lib/types/competitions/competitiveProgrammingTypes.ts
import { Timestamp } from "firebase/firestore";

export type CompetitiveProgramming = {
    id: string;
    user_id: string;
    team_name: string;
    email: string;
    college: string;
    name_1: string;
    nim_1: string;
    phone_number_1: string;
    instagram_1: string;
    idcard_1: string;
    name_2: string;
    nim_2: string;
    phone_number_2: string;
    instagram_2: string;
    idcard_2: string;
    name_3: string;
    nim_3: string;
    phone_number_3: string;
    instagram_3: string;
    idcard_3: string;
    proof: string;
    payment_method: string;
    isVerified: boolean;
    date: Timestamp;
  };
  