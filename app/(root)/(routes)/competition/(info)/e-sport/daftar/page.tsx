import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function EsportRegistration() {
  if (auth.currentUser === null) {
    toast.error("Anda harus login terlebih dahulu untuk bisa mendaftar!");
  }

  return (
    <>
      <CompetitionRegistration branch="e-sport" guideBookLink="https://docs.google.com/document/d/1W9Ssq5NhIlpO5IaseLF7_DdYmDS7p-gQ3YXagITSzwc/edit?usp=sharing" />
    </>
  );
}
