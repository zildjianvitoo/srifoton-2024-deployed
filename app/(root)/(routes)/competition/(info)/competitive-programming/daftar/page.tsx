"use client"

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { use, useEffect } from "react";
import { toast } from "sonner";

export default function CPRegistration() {

  useEffect(() => {
    // if (auth.currentUser === null) {
      toast.error("Anda harus login terlebih dahulu untuk bisa mendaftar!");
  // }
  }, []);

  return (
    <>
      <CompetitionRegistration
        branch="competitive programming"
        guideBookLink="https://docs.google.com/document/d/1_odNXIS6g42Yr0fOoukeNUAao60_5BwS/edit?usp=drivesdk&ouid=110295558965393092953&rtpof=true&sd=true"
      />
    </>
  );
}
