import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook.v2";
import SectionHeader from "../SectionHeader";

export default function MediaPartner() {
  return (
    <section id="media-partner">
      <figure className="">
        <Image
          src={"/img/footprints3.png"}
          alt="footprints"
          width={1000}
          height={1000}
          className="absolute right-0 mt-[5vw] w-[30vw] md:w-[20vw] lg:w-[20vw]"
          // style={{transform: "rotate(35deg)"}}
        />
      </figure>
      <div className="mt-16 flex w-full flex-col md:mt-20 2xl:mt-[10vw]">
        <div className="mx-auto mb-[3vw] w-[70%]">
          <SectionHeader text="media partner" />
        </div>
        <CardCrook outerClassName="mt-20 !w-full" innerClassName="h-96">
          <figure></figure>
        </CardCrook>
      </div>
    </section>
  );
}
