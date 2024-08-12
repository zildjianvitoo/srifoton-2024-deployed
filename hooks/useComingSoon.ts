import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useComingSoon = (isComingSoon: boolean) => {
  const router = useRouter();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (isComingSoon && !hasShownToast.current) {
      toast.error(
        "Mohon maaf. Halaman pendaftaran talkshow dan workshop belum dibuka untuk sekarang."
      );
      hasShownToast.current = true; 
      router.push("/");
    } else {
      return;
    }
  }, [isComingSoon, router]);
};

export default useComingSoon;