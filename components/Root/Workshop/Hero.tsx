import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section id="hero-competition">
      <div className="flex flex-col items-center gap-16 sm:min-h-[90vh] md:gap-20 lg:flex-row lg:gap-28">
        <div className="flex flex-col gap-7 text-center md:gap-10 lg:gap-14">
          <h1 className="text-stroke-5 relative font-monument text-4xl font-normal md:text-[4.5rem]">
            <strong className="uppercase">WORKSHOP</strong>
          </h1>
          <h1 className="relative font-monument text-2xl font-normal text-primary-200 md:text-4xl">
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

        <figure className="w-3/4 lg:w-full">
          <Image
            src={"/img/gallery1.png"}
            alt="Hero Competition Image"
            width={600}
            height={850}
          />
        </figure>
      </div>
    </section>
  );
}
