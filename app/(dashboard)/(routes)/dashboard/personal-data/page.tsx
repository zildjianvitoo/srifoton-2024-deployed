import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import FormPersonalData from "@/components/Dashboard/FormPersonalData";

export default function page() {
  return (
    <section className="mt-16 overflow-hidden md:mt-28 lg:absolute lg:right-0 lg:top-28 lg:mt-0 lg:w-4/5 xl:top-40">
      <CardCrook className="mx-auto !w-full font-monument lg:!w-2/3">
        <img
          src="/img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-10 hidden size-20 md:right-12 md:top-4 md:block lg:right-6 lg:top-2 lg:size-32"
        />
        <h3 className="text-center text-xl">Personal Data</h3>
        <FormPersonalData />
      </CardCrook>
    </section>
  );
}
