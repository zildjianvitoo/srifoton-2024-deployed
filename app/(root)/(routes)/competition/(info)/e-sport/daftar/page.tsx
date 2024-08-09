"use client"

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EsportRegistration() {
  return (
    <>
      <CompetitionRegistration branch="e-sport" guideBookLink="" />
    </>
  );
}
