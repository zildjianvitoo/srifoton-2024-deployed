import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import FormAccountData from "@/components/Root/Dashboard/FormAccountData";

export default function page() {
  return (
    <section className="mt-16 md:mt-40 lg:absolute lg:right-0 lg:top-24 lg:mt-0 lg:w-4/5 xl:top-40">
      <CardCrook className="mx-auto !w-full font-monument lg:!w-1/2">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl">Account Data</h3>
        <FormAccountData />
      </CardCrook>
    </section>
  );
}
