import AddDummyDataButton from "@/components/Admin-Dashboard/AddDummyDataButton";
import Nav from "@/components/Admin-Dashboard/Nav";
import Footer from "@/components/Root/Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return <div className="bg-background">
  <Nav />
  <main className="text- mx-[7.3vw] mt-12 flex flex-col gap-24 lg:mt-[75px] lg:gap-[200px]">
    {children}
  </main>
  <Footer />
</div>
}
