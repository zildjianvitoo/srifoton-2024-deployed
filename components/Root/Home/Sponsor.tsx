import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook";
import SectionHeader from "../SectionHeader";

export default function Sponsor() {
  return (
    <section id="sponsor">
      <div className="flex flex-col w-full mt-20 2xl:mt-[10vw]">
        <div className="w-[70%] mx-auto mb-[3vw]">
          <SectionHeader text="sponsor" />
        </div>
        <CardCrook className="mt-20 !w-full">
          <figure>
            <Image
              src={"/img/magnifying-glass.png"}
              alt="dangerline"
              width={1000}
              height={1000}
              className="absolute w-[8%] left-0 top-[-60px]"
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
