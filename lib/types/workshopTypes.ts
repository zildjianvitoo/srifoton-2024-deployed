// lib/types/workshopTypes.ts

export type Workshop = {
  id?: string;
  ticket_number?: string;
  user_id: string;
  name: string;
  email: string;
  type: string;
  proof?: string;
  payment_method: string;
  is_verified: boolean;
  date?: Date;
};
