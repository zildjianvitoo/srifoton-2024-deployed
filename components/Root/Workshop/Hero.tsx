import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {id: string, header: string, subheader: string, type?: "dashboard" | "overview" | "info", src: string, href: string, children: ReactNode};

export default function Hero({id, header, subheader, type, src, href, children}: Props) {
  return (
    <section id={id} className="flex justify-center px-8 md:px-12 lg:px-20 xl:px-[7rem]">
      <div className="flex flex-col items-center gap-16 sm:min-h-[90vh] md:gap-20 lg:flex-row lg:gap-28">
        <div className="flex flex-col gap-7 text-center md:gap-10 lg:gap-14">
          <h1 className="text-stroke-5 relative font-monument text-4xl font-normal md:text-[4.5rem]">
            <strong className="uppercase">{header}</strong>
          </h1>
          <h1 className="relative font-monument text-2xl font-normal text-primary-200 md:text-4xl">
            {subheader}
          </h1>
          <p className="font-ponnala font-normal text-primary-200">
            {children}
          </p>
          <Link href={href}>
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
            src={src}
            alt={`${id}-image`}
            width={600}
            height={850}
          />
        </figure>
      </div>
    </section>
  );
}