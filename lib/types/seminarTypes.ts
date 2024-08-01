// lib/types/seminarTypes.ts

export type Seminar = {
    id: string;
    user_id: string;
    name: string;
    email: string;
    phone_number: string;
    type: string;
    proof: string;
    payment_method: string;
    isVerified: boolean;
  };
  