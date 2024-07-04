import CompetitionOption from "@/components/Root/Competition/CompetitionOption";
import Hero from "@/components/Root/Competition/Hero";
import React, { Suspense } from "react";

type Props = {};

export default function Workshop({}: Props) {
  return (
    <div>
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <CompetitionOption />
      </Suspense>
    </div>

  );
}
