import Nav from "@/components/Root/Home/Nav";
import Footer from "@/components/Root/Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-background overflow-x-hidden">
      <Nav />
      <main className="mt-12 flex flex-col gap-[120px] px-[6.2917vw] md:gap-[150px] lg:mt-[75px] lg:gap-[200px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
