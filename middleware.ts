// lib/middleware.ts

import { type NextRequest, NextResponse } from "next/server";
import cookieSignature from "cookie-signature";

const publicRoutes = [
  "/login",
  "/registration",
  "/forgot-password",
  "/admin-login",
  "/competition",
  "/workshop",
  "/talkshow",
];
const allowedRedirectionPaths = ["/login", "/admin-dashboard", "/admin-login"];

const USER_SESSION_NAME = process.env.USER_SESSION_NAME!;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME!;
const AUTH_COOKIE_SIGNATURE_KEY_CURRENT =
  process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!;
const AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS =
  process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!;

const ADMIN_SESSION_NAME = process.env.ADMIN_SESSION_NAME!;
const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME!;
const ADMIN_COOKIE_SIGNATURE_KEY_CURRENT =
  process.env.ADMIN_COOKIE_SIGNATURE_KEY_CURRENT!;
const ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS =
  process.env.ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS!;

function verifyCookie(
  value: string | undefined,
  currentKey: string,
  previousKey: string,
) {
  if (!value) return "";
  const unsignedValue =
    cookieSignature.unsign(value, currentKey) ||
    cookieSignature.unsign(value, previousKey);
  return unsignedValue || "";
}

function isValidRedirectionPath(path: string): boolean {
  return allowedRedirectionPaths.includes(path);
}

export default function middleware(request: NextRequest) {
  const userSession = verifyCookie(
    request.cookies.get(USER_SESSION_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const adminSession = verifyCookie(
    request.cookies.get(ADMIN_SESSION_NAME)?.value,
    ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
    ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const userToken = verifyCookie(
    request.cookies.get(AUTH_COOKIE_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const adminToken = verifyCookie(
    request.cookies.get(ADMIN_COOKIE_NAME)?.value,
    ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
    ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );

  console.log("Masuk middleware");

  // Redirect to login if no session and not on a public route
  if (
    !userSession &&
    !adminSession &&
    !publicRoutes.includes(request.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // Redirect to account-data if user session is set and user is on the login page
  if (userSession && request.nextUrl.pathname === "/login") {
    const absoluteURL = new URL("/account-data", request.nextUrl.origin);
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // Redirect to admin dashboard if admin session is set and admin is on the login page
  if (adminSession && request.nextUrl.pathname === "/admin-login") {
    const absoluteURL = new URL("/admin-dashboard", request.nextUrl.origin);
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // Add custom validation for admin and user tokens if needed
  if (
    request.nextUrl.pathname.startsWith("/admin-dashboard") &&
    request.nextUrl.pathname !== "/admin-login" &&
    !adminToken
  ) {
    const absoluteURL = new URL("/admin-login", request.nextUrl.origin);
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // if (
  //   request.nextUrl.pathname.startsWith("/account-data") ||
  //   request.nextUrl.pathname.startsWith("/personal-data") ||
  //   (request.nextUrl.pathname.startsWith("/activities") && !userToken)
  // ) {
  //   const absoluteURL = new URL("/login", request.nextUrl.origin);
  //   if (isValidRedirectionPath(absoluteURL.pathname)) {
  //     return NextResponse.redirect(absoluteURL.toString());
  //   }
  // }
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).)",
    "/(api|trpc)(.)",
    "/admin-dashboard",
    "/admin-dashboard/(.*)",
    "/account-data",
    "/personal-data",
    "/activities",
  ],
};
