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
          className="absolute w-[30vw] md:w-[20vw] lg:w-[20vw] right-0 mt-[5vw]"
          // style={{transform: "rotate(35deg)"}}
        />
      </figure>
      <div className="flex flex-col w-full mt-16 md:mt-20 2xl:mt-[10vw]">
        <div className="w-[70%] mx-auto mb-[3vw]">
          <SectionHeader text="media partner" />
        </div>
        <CardCrook outerClassName="mt-20 !w-full">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            quasi quod cumque eius a ea commodi sint, quis temporibus alias
            possimus hic iure quas accusantium consequuntur nisi at
            reprehenderit sed?
          </p>
        </CardCrook>
      </div>
    </section>
  );
}
