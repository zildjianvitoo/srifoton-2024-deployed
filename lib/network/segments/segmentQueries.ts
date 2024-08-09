import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchSegmentData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(db, collectionName));

  let verifiedCount = 0;
  let nonVerifiedCount = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.is_verified) {
      verifiedCount++;
    } else {
      nonVerifiedCount++;
    }
  });

  return {
    verified: verifiedCount,
    nonVerified: nonVerifiedCount,
  };
};

// Fetch data for all segments
export const fetchAllSegmentsData = async () => {
  const [
    competitiveProgrammingData,
    uiUxDesignData,
    webDevelopmentData,
    mobileLegendsData,
    talkshowData,
    workshopData
  ] = await Promise.all([
    fetchSegmentData("competitive_programmings"),
    fetchSegmentData("ui_ux_designs"),
    fetchSegmentData("web_developments"),
    fetchSegmentData("mobile_legends"),
    fetchSegmentData("talkshows"),
    fetchSegmentData("workshops"),
  ]);

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
