"use client"

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { use, useEffect } from "react";
import { toast } from "sonner";

export default function CPRegistration() {
  return (
    <>
      <CompetitionRegistration
        branch="competitive programming"
        guideBookLink=""
      />
    </>
  );
}
