"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/link";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 flex items-center justify-between bg-background px-8 py-5 text-primary shadow-sm shadow-[#868365] md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <Link href="/" className="flex items-center">
        <span className="md:text-md me-2 border-2 border-[#D9D9D9] px-2 py-[.3rem] text-sm md:me-3 md:px-3 md:py-1 lg:me-5 lg:px-4 lg:py-1 lg:text-lg xl:me-7 xl:px-5 xl:py-2 xl:text-xl">
          Logo
        </span>
        <h4 className="xxs:text-2xl font-monument text-xl text-primary md:text-2xl lg:text-2xl xl:text-3xl">
          SRI
        </h4>
        <h4 className="xxs:text-2xl font-monument text-xl text-[#868365] md:text-2xl lg:text-2xl xl:text-3xl">
          FOTON
        </h4>
      </Link>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu color="#868365" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <ul className="py-2 font-ponnala text-lg">
                <li className="my-5 text-left" key={1}>
                  <SheetClose asChild>
                    <Link href="/">Home</Link>
                  </SheetClose>
                </li>
                <li className="my-5 text-left" key={2}>
                  <SheetClose asChild>
                    <Link href="/competition">Competition</Link>
                  </SheetClose>
                </li>
                <li className="my-5 text-left" key={3}>
                  <SheetClose asChild>
                    <Link href="/workshop">Workshop</Link>
                  </SheetClose>
                </li>
                <li className="my-5 text-left" key={4}>
                  <SheetClose asChild>
                    <Link href="/talkshow">Talkshow</Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden text-[#868365] md:block">
        <ul className="lg:text-md flex items-center py-2 font-ponnala xl:text-xl">
          {routes.map((routes) => (
            <li
              className={cn("mt-2", {
                "border-b border-white text-white": pathname === routes.address,
              })}
            >
              <Link href={routes.address}>{routes.linkTo}</Link>
            </li>
          ))}
          <li className="me-0 pe-0 font-monument">
            <Link href="/login">
              <Button size={"sm"} variant={"srifoton"}>
                Login
              </Button>
            </Link>
          </li>
        </ul>

        {/* <ul className="lg:text-md flex items-center py-2 font-ponnala xl:text-xl">
          <li
            className={cn("mt-2", {
              "border-b border-white text-white": pathname === "/",
            })}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={cn("mt-2", {
              "border-b border-white text-white": pathname === "/competition",
            })}
          >
            <Link href="/competition">Competition</Link>
          </li>
          <li
            className={cn("mt-2", {
              "border-b border-white text-white": pathname === "/workshop",
            })}
          >
            <Link href="/workshop">Workshop</Link>
          </li>
          <li
            className={cn("mt-2", {
              "border-b border-white text-white": pathname === "/talkshow",
            })}
          >
            <Link href="/talkshow">Talkshow</Link>
          </li>
          <li className="me-0 pe-0 font-monument">
            <Link href="/login">
              <Button size={"sm"} variant={"srifoton"}>
                Login
              </Button>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
