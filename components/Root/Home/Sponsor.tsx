import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook.v2";
import SectionHeader from "../SectionHeader";

export default function Sponsor() {
  return (
    <section id="sponsor">
      <div className="flex flex-col w-full mt-20 2xl:mt-[10vw]">
        <div className="w-[70%] mx-auto mb-[3vw]">
          <SectionHeader text="sponsor" />
        </div>
        <CardCrook outerClassName="mt-20 !w-full">
          <figure>
            <Image
              src={"/img/magnifying-glass.png"}
              alt="dangerline"
              width={1000}
              height={1000}
              className="absolute left-0 w-[17%] md:w-[12%] xl:w-[8%] top-[-5vw] xl:top-[-60px]"
            />
          </figure>
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
