"use client";

import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import FlashCard from "@/components/Dashboard/FlashCard";

export default function page() {
  return (
    <section className="mt-16 md:mt-40 lg:absolute lg:right-0 lg:top-28 lg:mt-0 lg:w-4/5 xl:top-40">
      <CardCrook className="mx-auto !w-full font-monument lg:!w-2/3">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-10 hidden size-20 font-monument md:right-12 md:top-4 md:block lg:right-6 lg:top-2 lg:size-32"
        />
        <h3 className="text-center text-xl">Activities</h3>
        <div className="mt-10 flex flex-col space-y-8">
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Competition</h3>
            <FlashCard
              title="Competitive Programming"
              name="TIM NOBITA"
              date="12/09/2024"
              message="waiting"
            />
            <FlashCard
              title="Competitive Programming"
              name="TIM NOBITA"
              date="12/09/2024"
              message="verified"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Talkshow</h3>
            <FlashCard
              title="Talkshow"
              name="sandhika galih"
              date="12/09/2024"
              message=""
            />
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="text-xl">Workshop</h3>
            <FlashCard
              title="Workshop"
              name="sandhika galih"
              date="12/09/2024"
              message=""
            />
          </div>
        </div>
      </CardCrook>
    </section>
  );
}
