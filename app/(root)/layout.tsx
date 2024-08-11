import Nav from "@/components/Root/Home/Nav";
import Footer from "@/components/Root/Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <Nav />
      <main className="mt-28 flex flex-col gap-[120px] px-[6.2917vw] md:mt-40 md:gap-[150px] lg:mt-44 lg:gap-[200px] xl:mt-48">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// mt-28 md:mt-40 lg:mt-44 xl:mt-48
