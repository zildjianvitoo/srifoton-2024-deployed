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
import Image from "next/image";
import { Button } from "../ui/button";

function NavSided() {
  const pathname = usePathname();

  return (
    <section
      id="nav-sided"
      className="font-poppins text-[#868365] lg:text-base xl:text-lg"
    >
      <div className="fixed bottom-0 top-0 hidden w-1/5 bg-[#24221E] px-4 pt-6 text-center lg:block lg:text-base xl:text-lg">
        <Image
          src={"/img/logo-srifoton.png"}
          width={100}
          height={100}
          alt="logo-srifoton"
          className="mx-auto"
        />
        <ul className="mt-10 flex flex-col gap-10 xl:text-xl">
          {dashboardRoutes.map((routes) => (
            <li
              key={routes.linkTo}
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
        <Link href="/dashboard/logout" className="text-xl text-white">
          <Button className="absolute bottom-6 left-4 right-4 rounded-md bg-red-500 hover:bg-red-700">
            <strong className="uppercase">Log Out</strong>
          </Button>
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="absolute top-6 mx-[7.2917vw]">
            <Menu className="size-8" />
          </SheetTrigger>
          <SheetContent className="flex h-full flex-col">
            <SheetHeader>
              <ul className="py-2 text-lg font-medium">
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
              <h3 className="text-xl font-bold">Dashboard</h3>
              <ul className="text-lg font-medium">
                <li className="my-5 text-left" key={1}>
                  <SheetClose asChild>
                    <Link href="/dashboard/account-data">Account-Data</Link>
                  </SheetClose>
                </li>
                <li className="my-5 text-left" key={2}>
                  <SheetClose asChild>
                    <Link href="/dashboard/personal-data">Personal-Data</Link>
                  </SheetClose>
                </li>
                <li className="my-5 text-left" key={3}>
                  <SheetClose asChild>
                    <Link href="/dashboard/activities">Activities</Link>
                  </SheetClose>
                </li>
              </ul>
              <SheetClose asChild>
                <Button className="mt-auto rounded-md bg-red-500">
                  <Link href="/dashboard/logout" className="text-xl text-white">
                    <strong className="uppercase tracking-wide">Log Out</strong>
                  </Link>
                </Button>
              </SheetClose>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

export default NavSided;
