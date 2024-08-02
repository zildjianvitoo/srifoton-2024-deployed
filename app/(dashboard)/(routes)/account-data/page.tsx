import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import FormDashboard from "@/components/Root/Dashboard/FormDashboard";

export default function page() {
  return (
    <section className="mt-16 md:mt-40 lg:absolute lg:right-0 lg:top-40 lg:mt-0 lg:w-4/5">
      <CardCrook className="mx-auto !w-full font-monument lg:!w-fit">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 size-20 md:right-12 md:top-4 lg:right-0 lg:top-0 lg:size-32"
        />
        <h3 className="text-center text-xl">Account Data</h3>
        <FormDashboard />
      </CardCrook>
    </section>
  );
}
