import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";

import Image from "next/image";
import FormLogin from "@/components/Admin-Dashboard/FormLogin";

export default function page() {
  return (
    <section
      id="login"
      className="flex flex-col justify-end space-x-8 space-y-10 lg:flex-row"
    >
      <div className="left-[6.2917vw] flex flex-col space-y-8 text-center text-white lg:fixed">
        <h3 className="font-monument text-xl xl:text-2xl">
          Login Admin Account
        </h3>
        <p className="font-ponnala text-lg xl:text-xl">
          Hai, silakan masuk ke akun admin terlebih dahulu!
        </p>
        <Image
          src={"/img/maskot.png"}
          width={300}
          height={300}
          alt="maskot"
          className="mx-auto size-96"
        ></Image>
      </div>
      <CardCrook className="mx-auto !w-full bg-red-500 font-monument lg:!w-1/2">
        <img
          src="/img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl">Admin Login</h3>
        <FormLogin />
      </CardCrook>
    </section>
  );
}
