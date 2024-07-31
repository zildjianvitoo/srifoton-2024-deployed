"use client";

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
import { CircleUser } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="absolute right-0 w-4/5 bg-background pt-10 text-[#868365]"
    >
      <div className="lg:hidden">
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
      <ul className="me-20 flex items-center justify-end font-ponnala text-[#868365] lg:text-base xl:text-xl">
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
