import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function UIUXtRegistration() {
  return (
    <>
      <CompetitionRegistration branch="ui/ux design" guideBookLink="" />
    </>
  );
}
