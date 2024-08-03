import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook";
import SectionHeader from "../SectionHeader";

export default function MediaPartner() {
  return (
    <section id="media-partner">
      <figure>
        <Image
          src={"/img/footprints2.png"}
          alt="dangerline"
          width={1000}
          height={1000}
          className="absolute w-[25vw] xl:w-[14.5vw] right-0 mt-[5vw]"
        />
      </figure>
      <div className="flex flex-col w-full mt-20 2xl:mt-[10vw]">
        <div className="w-[70%] mx-auto mb-[3vw]">
          <SectionHeader text="media partner" />
        </div>
        <CardCrook className="mt-20 !w-full">
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
