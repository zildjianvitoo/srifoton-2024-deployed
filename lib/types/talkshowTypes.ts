// lib/types/talkshowTypes.ts

export type Talkshow = {
  id?: string;
  user_id: string;
  name: string;
  email: string;
  type: string;
  proof?: string;
  payment_method: string;
  is_verified: boolean;
  date: Date;
};
