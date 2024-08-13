import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <main className="mt-12 flex flex-col gap-[120px] px-[6.2917vw] md:gap-[150px] lg:mt-[100px] lg:gap-[200px]">
      {children}
    </main>
  );
}
