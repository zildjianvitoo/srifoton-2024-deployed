"use client";

import { useState, useEffect } from "react";
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
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-background px-8 py-5 text-primary md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <Link href="/" className="flex items-center">
        <div className="me-2 aspect-[90/56] w-[50px] md:me-3 md:w-[70px] lg:me-5 xl:me-7 xl:w-[90px]">
          <Image
            src="/img/logo-srifoton.png"
            alt="logo"
            width={90}
            height={56}
            className="w-full"
          />
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
                <li className="my-5 text-left" key={5}>
                  <SheetClose asChild>
                    <Link href={user ? "/dashboard/account-data" : "/login"}>
                      {user ? "Dashboard" : "Login"}
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden text-[#868365] md:block">
        <ul className="lg:text-md flex items-center py-2 font-ponnala xl:text-xl">
          {routes.map((route) => (
            <li
              key={route.address}
              className={cn("mt-2", {
                "border-b-2 border-whtc-200 text-whtc-200":
                  pathname === route.address,
              })}
            >
              <Link href={route.address}>{route.linkTo}</Link>
            </li>
          ))}
          <li className="me-0 pe-0 font-monument">
            <Link href={user ? "/dashboard/account-data" : "/login"}>
              <Button size={"sm"} variant={"srifoton"}>
                {user ? "Dashboard" : "Login"}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
