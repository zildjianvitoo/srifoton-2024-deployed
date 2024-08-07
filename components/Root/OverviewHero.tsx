import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {id: string,
  header: string,
  subheader: string,
  src: string,
  children?: ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

export default function OverviewHero({id, header, subheader, src, onClick, children}: Props) {
  return (
    <section id={id} className="flex mx-auto">
      <div className="
        flex flex-col lg:flex-row justify-center w-full items-center
        md:min-h-fit
        gap-16 md:gap-20 lg:gap-28 2xl:gap-[165px]">

        <figure className="
          flex lg:hidden -mb-28
          w-3/4 lg:w-full min-[1920px]:w-[680px] min-[1920px]:min-w-[680px]">
          <Image
            src={src}
            alt={`${id}-image`}
            width={680}
            height={725}
            className=""
          />
        </figure>

        <div className="
          flex flex-col text-center
          gap-7 md:gap-10 xl:gap-[60px]
        ">
          <h1 className="
            text-stroke-5 leading-[120%] relative font-monument font-normal 2xl:w-[795px]
            text-3xl md:text-[4.5rem] lg:text-6xl 2xl:text-[90px]">
            <strong className="uppercase">{header}</strong>
          </h1>
          <h1 className="
            uppercase relative font-monument font-normal text-primary-200 !leading-[120%]
            text-2xl md:text-4xl lg:text-4xl 2xl:text-[50px]">
            {subheader}
          </h1>
          { children && (
            <p className="
              font-ponnala font-normal text-primary-200
              text-lg xl:text-xl 2xl:text-2xl">
              {children}
            </p>
          )}
          <div className="mx-auto">
            <Button
              variant="srifoton2"
              size="default2"
              onClick={onClick}
            >
              Register Now
            </Button>
          </div>
        </div>

        <figure className="hidden w-3/4 lg:w-full min-[1920px]:w-[680px] min-[1920px]:min-w-[680px] lg:flex">
          <Image
            src={src}
            alt={`${id}-image`}
            width={680}
            height={725}
            className=""
          />
        </figure>
      </div>
    </section>
  );
}