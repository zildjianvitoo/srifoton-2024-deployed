import { collection, doc, serverTimestamp, setDoc, deleteDoc, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase"; 

const generateDummyData = (collectionName: string, teamName: string) => {
  const baseData = {
    user_id: "dummy_user",
    team_name: teamName,
    email: `${teamName}@example.com`,
    college: "Dummy College",
    proof: "dummy_proof_url",
    payment_method: "dummy_payment",
    is_verified: false,
    date: serverTimestamp(),
  };

  switch (collectionName) {
    case "competitive_programmings":
      return { ...baseData, name_1: "Name 1", nim_1: "NIM 1", phone_number_1: "Phone 1", instagram_1: "Insta 1", idcard_1: "ID 1", name_2: "Name 2", nim_2: "NIM 2", phone_number_2: "Phone 2", instagram_2: "Insta 2", idcard_2: "ID 2", name_3: "Name 3", nim_3: "NIM 3", phone_number_3: "Phone 3", instagram_3: "Insta 3", idcard_3: "ID 3" };
    case "mobile_legends":
      return { ...baseData, name_1: "Name 1", nim_1: "NIM 1", phone_number_1: "Phone 1", instagram_1: "Insta 1", idcard_1: "ID 1", name_2: "Name 2", nim_2: "NIM 2", phone_number_2: "Phone 2", instagram_2: "Insta 2", idcard_2: "ID 2", name_3: "Name 3", nim_3: "NIM 3", phone_number_3: "Phone 3", instagram_3: "Insta 3", idcard_3: "ID 3", name_4: "Name 4", nim_4: "NIM 4", phone_number_4: "Phone 4", instagram_4: "Insta 4", idcard_4: "ID 4", name_5: "Name 5", nim_5: "NIM 5", phone_number_5: "Phone 5", instagram_5: "Insta 5", idcard_5: "ID 5" };
    case "ui_ux_designs":
      return { ...baseData, name_1: "Name 1", nim_1: "NIM 1", phone_number_1: "Phone 1", instagram_1: "Insta 1", idcard_1: "ID 1", name_2: "Name 2", nim_2: "NIM 2", phone_number_2: "Phone 2", instagram_2: "Insta 2", idcard_2: "ID 2", name_3: "Name 3", nim_3: "NIM 3", phone_number_3: "Phone 3", instagram_3: "Insta 3", idcard_3: "ID 3", submission: "dummy_submission" };
    case "web_developments":
      return { ...baseData, name_1: "Name 1", nim_1: "NIM 1", phone_number_1: "Phone 1", instagram_1: "Insta 1", idcard_1: "ID 1", name_2: "Name 2", nim_2: "NIM 2", phone_number_2: "Phone 2", instagram_2: "Insta 2", idcard_2: "ID 2", name_3: "Name 3", nim_3: "NIM 3", phone_number_3: "Phone 3", instagram_3: "Insta 3", idcard_3: "ID 3", submission: "dummy_submission" };
    case "talkshows":
      return { ...baseData, name: "Dummy Name", phone_number: "Dummy Phone", type: "Dummy Type" };
    case "workshops":
      return { ...baseData, name: "Dummy Name", phone_number: "Dummy Phone", type: "Dummy Type" };
    default:
      return baseData;
  }
};

export const addDummyData = async () => {
  const collections = ["competitive_programmings", "ui_ux_designs", "web_developments", "mobile_legends", "talkshows", "workshops"];
  const dummyTeams = Array.from({ length: 10 }, (_, i) => `dummy${i + 1}`);

  for (const col of collections) {
    for (const teamName of dummyTeams) {
      const docRef = doc(collection(db, col));
      const data = generateDummyData(col, teamName);
      await setDoc(docRef, data);
    }
  }
};

export const deleteAllDummyData = async () => {
  const collections = ["competitive_programmings", "ui_ux_designs", "web_developments", "mobile_legends", "talkshows", "workshops"];

  for (const col of collections) {
    const q = query(collection(db, col), where("college", "==", "Dummy College"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }
};

