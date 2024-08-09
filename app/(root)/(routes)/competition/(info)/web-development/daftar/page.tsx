import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function WebDevtRegistration() {
  if (auth.currentUser === null) {
    toast.error("Anda harus login terlebih dahulu untuk bisa mendaftar!");
  }

  return (
    <>
      <CompetitionRegistration branch="web development" guideBookLink="https://docs.google.com/document/d/1swBabXBRs5eXkvFAOq0wNT9opBVur_4-A4BgigDt-90/edit?usp=sharing" />
    </>
  );
}
