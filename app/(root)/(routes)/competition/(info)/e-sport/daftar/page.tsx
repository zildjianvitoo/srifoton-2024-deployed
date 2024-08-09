import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function EsportRegistration() {
  if (auth.currentUser === null) {
    toast.error("Anda harus login terlebih dahulu untuk bisa mendaftar!");
  }

  return (
    <>
      <CompetitionRegistration branch="e-sport" guideBookLink="" />
    </>
  );
}
