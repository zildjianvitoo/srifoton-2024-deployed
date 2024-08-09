import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import useToastErrorNoUser from "@/hooks/useToastErrorNoUser";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function WebDevtRegistration() {
  return (
    <>
      <CompetitionRegistration branch="web development" guideBookLink="" />
    </>
  );
}
