// hooks/useAuthNullRedirect.ts

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';

const useAuthNullRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        toast.error('Anda tidak login!');
        router.push('/dashboard/logout');
      }
    });

    return () => unsubscribe();
  }, [router]);
};

export default useAuthNullRedirect;
