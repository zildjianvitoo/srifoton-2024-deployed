import AddDummyDataButton from "@/components/Admin-Dashboard/AddDummyDataButton";
import Nav from "@/components/Admin-Dashboard/Nav";
import Footer from "@/components/Root/Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="bg-background">
      {children}
    </div>
  );
}
