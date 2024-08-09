"use client";

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CPRegistration() {
  useEffect(() => {
    // if (auth.currentUser === null) {
    toast("tests");
    // }
  }, []);

  return (
    <>
      <CompetitionRegistration
        branch="competitive programming"
        guideBookLink=""
      />
    </>
  );
}
