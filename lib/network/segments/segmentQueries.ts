import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const fetchSegmentData = async (collectionName: string) => {
  const verifiedQuery = query(collection(db, collectionName), where("is_verified", "==", true));
  const nonVerifiedQuery = query(collection(db, collectionName), where("is_verified", "==", false));
  
  const [verifiedSnapshot, nonVerifiedSnapshot] = await Promise.all([getDocs(verifiedQuery), getDocs(nonVerifiedQuery)]);
  
  return {
    verified: verifiedSnapshot.size,
    nonVerified: nonVerifiedSnapshot.size,
  };
};

// Fetch data for all segments
export const fetchAllSegmentsData = async () => {
  const competitiveProgrammingData = await fetchSegmentData("competitive_programmings");
  const uiUxDesignData = await fetchSegmentData("ui_ux_designs");
  const webDevelopmentData = await fetchSegmentData("web_developments");
  const mobileLegendsData = await fetchSegmentData("mobile_legends");
  const talkshowData = await fetchSegmentData("talkshows");
  const workshopData = await fetchSegmentData("workshops");

  return {
    competition: {
      competitiveProgramming: competitiveProgrammingData,
      uiUxDesign: uiUxDesignData,
      webDevelopment: webDevelopmentData,
      mobileLegends: mobileLegendsData,
    },
    talkshow: talkshowData,
    workshop: workshopData,
  };
};
