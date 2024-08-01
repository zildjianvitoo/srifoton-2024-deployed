"use client";

import React from "react";
import { Menu } from "lucide-react";
import { dashboardRoutes } from "@/lib/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavSided() {
  const pathname = usePathname();

  return (
    <section id="nav-sided" className="text-[#868365] lg:text-base xl:text-lg">
      <div className="hidden h-screen w-1/5 bg-[#24221E] px-4 pt-10 text-center lg:block lg:text-base xl:text-lg">
        <div className="inline border-2 border-white px-4 py-2 text-white">
          Logo
        </div>
        <ul className="mt-10 flex flex-col gap-10 xl:text-xl">
          {dashboardRoutes.map((routes) => (
            <li
              className={cn("flex gap-4 px-0 pb-2", {
                "flex border-b border-white text-white":
                  pathname === routes.address,
              })}
            >
              <Link href={routes.address}>{routes.icon}</Link>
              <Link href={routes.address}>{routes.linkTo}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="size-14" />
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
    </section>
  );
}

export default NavSided;
