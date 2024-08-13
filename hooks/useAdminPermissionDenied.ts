// hooks/useAdminPermissionDenied.ts

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const useAdminPermissionDenied = (isDenied: boolean) => {
    const router = useRouter();

    useEffect(() => {
        if (isDenied) {
            toast.error("Pencurian cookies terdeteksi! Tidak semudah itu, Kawan. Akses ditolak.");
            router.push("/admin-dashboard/logout");
        } else {
            return;
        }
        
    }, [isDenied, router]);
};

export default useAdminPermissionDenied;
