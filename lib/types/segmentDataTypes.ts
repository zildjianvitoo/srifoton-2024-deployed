// lib/types/segmentDataTypes.ts
import { CompetitiveProgramming } from "./competitions/competitiveProgrammingTypes";
import { MobileLegends } from "./competitions/mobileLegendsTypes";
import { UiUxDesign } from "./competitions/uiUxDesignTypes";
import { WebDevelopment } from "./competitions/webDevelopmentTypes";
import { Talkshow } from "./talkshowTypes";
import { Workshop } from "./workshopTypes";

export type SegmentData = {
  competition: {
    competitiveProgramming: {
      verified: number;
      nonVerified: number;
    };
    uiUxDesign: {
      verified: number;
      nonVerified: number;
    };
    webDevelopment: {
      verified: number;
      nonVerified: number;
    };
    mobileLegends: {
      verified: number;
      nonVerified: number;
    };
  };
  talkshow: {
    verified: number;
    nonVerified: number;
  };
  workshop: {
    verified: number;
    nonVerified: number;
  };
};