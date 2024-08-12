import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useComingSoon = (isComingSoon: boolean) => {
  const router = useRouter();

  useEffect(() => {
    if (isComingSoon) {
      toast.error(
        "Mohon maaf page pendaftaran talkshow dan workshop belum dibuka untuk sekarang",
      );
      router.push("/");
    } else {
      return;
    }
  }, []);
};

export default useComingSoon;
