import Nav from "@/components/Admin-Dashboard/Nav";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="bg-background">
      <Nav />
      <main className="mt-6 flex flex-col gap-[60px] px-[4vw] md:gap-[75px] lg:mt-[37.5px] lg:gap-[100px] lg:px-[6.2917vw]">
        {children}
      </main>
    </div>
  );
}
