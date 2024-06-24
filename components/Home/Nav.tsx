"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const [states, useStates] = useState(true);

  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 bg-[#1D1C19] text-white pt-5 pb-8 mb-5 lg:mb-20 px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem]">
      <div className="flex items-center">
        <span
          className="border-[#D9D9D9] border-2
                         text-sm px-2 py-[.3rem] me-2
                         md:text-md md:px-3 md:py-1 md:me-3
                         lg:text-lg lg:px-4 lg:py-1 lg:me-5
                         xl:text-xl xl:px-5 xl:py-2 xl:me-7"
        >
          Logo
        </span>
        <h4 className="font-monument text-xl samsung:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-white">SRI</h4>
        <h4 className="font-monument text-xl samsung:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#868365]">FOTON</h4>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu color="#868365" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <ul className="font-ponnala py-2 text-lg">
                <li className="">
                  <Link href="/">Home</Link>
                </li>
                <li className="">
                  <Link href="/competition">Competition</Link>
                </li>
                <li className="">
                  <Link href="/workshop">Workshop</Link>
                </li>
                <li className="">
                  <Link href="/talkshow">Talkshow</Link>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden text-[#868365]">
        <ul className="font-ponnala flex items-center py-2 lg:text-md xl:text-xl ">
          <li className="border-b-2 border-white text-white">Home</li>
          <li className="">
            <Link href="/competition">Competition</Link>
          </li>
          <li className="">
            <Link href="/workshop">Workshop</Link>
          </li>
          <li className="">
            <Link href="/talkshow">Talkshow</Link>
          </li>
          <li className="font-monument pb-2 me-0 pe-0">
            <Button className={``} size={"sm"} variant={"srifoton"}>
              <Link href="/login">Login</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
