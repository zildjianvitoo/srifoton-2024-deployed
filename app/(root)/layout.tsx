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
      <main className="flex flex-col mt-12 lg:mt-[75px] mx-[7.3vw] gap-24 lg:gap-[200px]">{children}</main>
      <Footer />
    </div>
  );
}
