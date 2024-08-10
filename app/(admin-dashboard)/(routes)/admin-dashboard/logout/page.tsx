"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logoutAdmin } from "@/lib/network/admins/adminQueries";

export default function Page() {
    const router = useRouter();

    const handleLogout = useCallback(async () => {
        try {
            const loggedOut = await logoutAdmin();

            if (loggedOut) {
                toast.success("Berhasil logout!");
                router.push("/");
            } else {
                toast.error("Gagal logout. Mohon coba lagi.");
                router.push("/admin-dashboard");
            }
        } catch (error) {
            toast.error("Terjadi kesalahan saat logout. Mohon coba lagi.");
            router.push("/admin-dashboard");
        }
    }, [router]);

    useEffect(() => {
        handleLogout();
    }, [handleLogout]);

    return null;
}
