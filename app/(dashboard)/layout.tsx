import React, { ReactNode } from "react";
import NavSided from "@/components/Root/Dashboard/NavSided";
import Nav from "@/components/Root/Dashboard/Nav";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="bg-background">
      <Nav />
      <NavSided />
      <main className="text- mx-[7.3vw] mt-12 flex flex-col gap-24 lg:mt-[75px] lg:gap-[200px]">
        {children}
      </main>
    </div>
  );
}
