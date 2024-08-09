"use client";

import { Inter } from "next/font/google";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      id="navbar" //shadow-sm shadow-[#868365]
      className="sticky top-0 z-50 flex items-center justify-between bg-background px-8 py-5 text-primary md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <Link href="/" className="flex items-center">
        <div className="me-2 aspect-[90/56] w-[50px] md:me-3 md:w-[70px] lg:me-5 xl:me-7 xl:w-[90px]">
          <Image
            src="/img/logo-srifoton.png"
            alt="logo"
            width={90}
            height={56}
            className="w-full"
          ></Image>
        </div>
        <h4 className="xxs:text-2xl font-monument text-xl text-whtc-100 md:text-2xl lg:text-2xl xl:text-3xl">
          SRIFOTON
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
              key={routes.address}
              className={cn("mt-2", {
                "border-b-2 border-whtc-200 text-whtc-200":
                  pathname === routes.address,
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
