import React from "react";
import CardCrook from "../CardCrook";
import SectionHeader from "../SectionHeader";

export default function Sponsor() {
  return (
    <section id="sponsor">
      <div className="mt-96 px-8 md:px-12 lg:px-20 xl:px-[7rem]">
        <SectionHeader text="sponsor" />
        <CardCrook className="mx-auto mt-20 xl:w-full">
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
