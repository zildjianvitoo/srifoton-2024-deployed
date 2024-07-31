import Nav from "@/components/Root/Home/Nav";
import Footer from "@/components/Root/Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-background">
      <Nav />
      <main className="flex flex-col mt-12 lg:mt-[75px] mx-[7.2917vw] gap-[120px] md:gap-[150px] lg:gap-[200px]">{children}</main>
      <Footer />
    </div>
  );
}
