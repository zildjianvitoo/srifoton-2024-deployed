"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/link";
import { CircleUser } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="absolute right-0 w-4/5 bg-background text-[#868365] lg:pt-10"
    >
      <Link
        href="/"
        className="absolute right-[7.2917vw] mt-6 inline-block lg:hidden"
      >
        <h3 className="border-b-2 border-[#868365] text-xl">Back to Home</h3>
      </Link>
      <ul className="me-20 hidden items-center justify-end font-ponnala text-[#868365] lg:flex lg:text-base xl:text-xl">
        {routes.map((routes) => (
          <li
            className={cn("self-center", {
              "border-white text-white": pathname === routes.address,
            })}
          >
            <Link href={routes.address}>{routes.linkTo}</Link>
          </li>
        ))}
        <li className="">
          <Link href="/login">
            <CircleUser className="size-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
