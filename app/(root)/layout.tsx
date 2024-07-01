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
      <main className="mt-12 lg:mt-0">{children}</main>
      <Footer />
    </div>
  );
}
