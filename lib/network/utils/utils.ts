// lib/network/utils/utils.ts

import { db } from "@/lib/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export const generateTicketNumber = async (type: string): Promise<string> => {
    try {
        const collectionName = type === "workshop" ? "workshops" : "talkshows";
        const prefix = type === "workshop" ? "SRIFOTON-WS" : "SRIFOTON-TS";

        const q = query(collection(db, collectionName), orderBy("ticket_number", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        let lastTicketNumber = 0;
        querySnapshot.forEach((doc) => {
            const ticketNumber = doc.data().ticket_number;
            const numberPart = parseInt(ticketNumber.split('-')[1].substring(2));
            if (numberPart > lastTicketNumber) {
                lastTicketNumber = numberPart;
            }
        });

        const newTicketNumber = lastTicketNumber + 1;
        return `${prefix}${newTicketNumber.toString().padStart(3, '0')}`;
    } catch (error) {
        console.error('Error generating ticket number: ', error);
        // return 'error';
        throw new Error('Failed to generate ticket number');
    }
};