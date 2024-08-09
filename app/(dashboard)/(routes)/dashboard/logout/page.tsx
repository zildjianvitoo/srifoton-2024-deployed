"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/network/users/userQueries";
import { toast } from "sonner";

export default function Page() {
    const router = useRouter();

    const handleLogout = useCallback(async () => {
        try {
            const loggedOut = await logoutUser();

            if (loggedOut) {
                toast.success("Berhasil logout!");
                router.push("/");
            } else {
                toast.error("Gagal logout. Mohon coba lagi.");
                router.push("/dashboard");
            }
        } catch (error) {
            toast.error("Terjadi kesalahan saat logout. Mohon coba lagi.");
            router.push("/dashboard");
        }
    }, [router]);

    useEffect(() => {
        handleLogout();
    }, [handleLogout]);

    return null;
}
