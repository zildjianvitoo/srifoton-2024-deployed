import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook.v2";
import SectionHeader from "../SectionHeader";

export default function Sponsor() {
  return (
    <section id="sponsor">
      <div className="mt-20 flex w-full flex-col 2xl:mt-[10vw]">
        <div className="mx-auto mb-[3vw] w-[70%]">
          <SectionHeader text="sponsor" />
        </div>
        <CardCrook outerClassName="mt-20 !w-full" innerClassName="h-96">
          <figure>
            <Image
              src={"/img/magnifying-glass.png"}
              alt="dangerline"
              width={1000}
              height={1000}
              className="absolute left-0 top-[-5vw] w-[17%] md:w-[12%] xl:top-[-60px] xl:w-[8%]"
            />
          </figure>
        </CardCrook>
      </div>
    </section>
  );
}
