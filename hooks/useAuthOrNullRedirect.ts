// hooks/useAuthOrNullRedirect.ts

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';

const useAuthOrNullRedirect = () => {
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        toast.error('Anda tidak login!');
        router.push('/dashboard/logout');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return user;
};

export default useAuthOrNullRedirect;

