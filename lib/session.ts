// lib/session.ts

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import cookieSignature from "cookie-signature";

const USER_SESSION_NAME = process.env.USER_SESSION_NAME!;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME!;
const AUTH_COOKIE_SIGNATURE_KEY_CURRENT = process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!;
const AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!;

const ADMIN_SESSION_NAME = process.env.ADMIN_SESSION_NAME!;
const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME!;
const ADMIN_COOKIE_SIGNATURE_KEY_CURRENT = process.env.ADMIN_COOKIE_SIGNATURE_KEY_CURRENT!;
const ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS!;

export async function createSession(uid: string, token: string, isAdmin: boolean) {
    const signedUid = isAdmin ? cookieSignature.sign(uid, ADMIN_COOKIE_SIGNATURE_KEY_CURRENT) : cookieSignature.sign(uid, AUTH_COOKIE_SIGNATURE_KEY_CURRENT);

    const signedToken = isAdmin
        ? cookieSignature.sign(token, ADMIN_COOKIE_SIGNATURE_KEY_CURRENT)
        : cookieSignature.sign(token, AUTH_COOKIE_SIGNATURE_KEY_CURRENT);

    if (isAdmin) {
        cookies().set(ADMIN_SESSION_NAME, signedUid, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });

        cookies().set(AUTH_COOKIE_NAME, signedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
    } else {
        cookies().set(USER_SESSION_NAME, signedUid, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });

        cookies().set(ADMIN_COOKIE_NAME, signedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
    }

    redirect(isAdmin ? "/admin-dashboard" : "/account-data");
}

export async function removeSession(isAdmin: boolean) {
    if (isAdmin) {
        cookies().delete(ADMIN_SESSION_NAME);
        cookies().delete(AUTH_COOKIE_NAME);
    } else {
        cookies().delete(USER_SESSION_NAME);
        cookies().delete(ADMIN_COOKIE_NAME);
    }

    redirect(isAdmin ? "/admin-dashboard/login" : "/login");
}