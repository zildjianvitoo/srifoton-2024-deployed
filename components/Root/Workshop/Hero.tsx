import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {id: string, header: string, subheader: string, type?: "dashboard" | "overview" | "info", src: string, href: string, children: ReactNode};

export default function Hero({id, header, subheader, type, src, href, children}: Props) {
  return (
    <section id={id} className="flex">
      <div className="flex flex-col w-full items-center gap-16 sm:min-h-[90vh] md:min-h-fit md:gap-20 lg:flex-row lg:gap-28 2xl:gap-[165px]">
        <div className="flex flex-col gap-7 text-center md:gap-10 lg:gap-[60px]">
          <h1 className="text-stroke-5 leading-[120%] relative font-monument text-4xl md:text-[4.5rem] 2xl:text-[90px] font-normal">
            <strong className="uppercase">{header}</strong>
          </h1>
          <h1 className="uppercase relative font-monument text-2xl md:text-4xl 2xl:text-[50px] font-normal text-primary-200 !leading-[120%]">
            {subheader}
          </h1>
          <p className="font-ponnala font-normal xl:text-2xl text-primary-200">
            {children}
          </p>
          <Link href={href} className="w-fit mx-auto">
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
            className="w-full"
          />
        </figure>
      </div>
    </section>
  );
}