import CompetitionOption from "@/components/Root/Competition/CompetitionOption";
import Hero from "@/components/Root/Competition/Hero";
import React from "react";

type Props = {};

export default function Competition({}: Props) {
  return (
    <div className="px-8 md:px-12 lg:px-20 xl:px-[7rem]">
      <Hero />
      <CompetitionOption />
    </div>
  );
}
