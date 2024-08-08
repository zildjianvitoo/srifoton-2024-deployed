import React from "react";
import CardCrook from "@/components/Root/CardCrook";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessResetPassword() {
  return (
    <section id="forgot-password">
      <CardCrook className="mx-auto !w-full bg-red-500 font-monument lg:!w-1/2">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl lg:mt-16">
          Successfull Password Reset
        </h3>
        <p className="mt-6 text-center">
          Kamu sekarang dapat menggunakan kata sandi baru untuk masuk ke akun
          kembali
        </p>
        <Button
          type="submit"
          className="mt-6 w-full bg-background text-sm text-white"
        >
          <Link href={"/login"}>Log In</Link>
        </Button>
      </CardCrook>
    </section>
  );
}
