import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section id="hero-competition">
      <div className="flex min-h-screen flex-col items-center lg:flex-row">
        <div className="flex flex-col gap-7 text-center md:gap-10 lg:gap-14">
          <h1 className="text-stroke relative font-monument text-4xl font-normal md:text-[4.5rem]">
            <strong className="uppercase">COMPETITION</strong>
          </h1>
          <h1 className="text-primary-200 relative font-monument text-2xl font-normal md:text-4xl">
            SRIFOTON 2024
          </h1>
          <Link href="/register">
            <Button
              variant={"srifoton"}
              className="font-monument text-sm md:text-base lg:text-lg"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
