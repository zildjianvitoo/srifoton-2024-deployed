// hooks/useToastErrorNoUser.ts

import { useEffect } from 'react';
import { toast } from 'sonner';
import { auth } from '../lib/firebase';

const useToastErrorNoUser = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        toast.error('Anda harus login sebelum bisa mendaftar kompetisi, workshop, atau talkshow!');
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useToastErrorNoUser;
