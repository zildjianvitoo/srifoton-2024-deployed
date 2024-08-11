import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  id: string;
  header: string;
  subheader: string;
  src: string;
  href: string;
  guideHref: string;
  card1title?: string;
  card1content?: string;
  card2title?: string;
  card2content?: string;
  children?: ReactNode;
};

export default function InfoHero({
  id,
  header,
  subheader,
  src,
  href,
  guideHref,
  card1title,
  card1content,
  card2title,
  card2content,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="flex w-full flex-col items-center justify-between gap-8 md:min-h-fit md:gap-12 lg:flex-row lg:gap-16 2xl:gap-[85px]"
    >
      <div className="relative flex aspect-[745/705] items-center lg:min-w-[400px] 2xl:min-w-[550px] min-[1920px]:min-w-[745px]">
        <figure className="mx-auto flex w-[65%] lg:w-[230px] 2xl:w-[500px]">
          <Image
            src={src}
            alt={`${id}-image`}
            width={500}
            height={500}
            className="flex aspect-square object-contain"
          />
        </figure>
        {card1title && (
          <div className="absolute bottom-0 left-0 flex max-w-[200px] flex-col gap-2 bg-[#fff9f1] p-3 xl:gap-4 xl:p-6 min-[1920px]:max-w-[353px]">
            <h1 className="font-monument text-sm font-normal sm:text-base lg:text-sm min-[1920px]:text-2xl">
              {card1title}
            </h1>
            <p className="font-ponnala text-xs font-normal sm:text-sm lg:text-xs min-[1920px]:text-xl">
              {card1content}
            </p>
          </div>
        )}
        {card2title && (
          <div className="absolute right-0 top-0 flex max-w-[200px] flex-col gap-2 bg-[#fff9f1] p-3 xl:gap-4 xl:p-6 min-[1920px]:max-w-[353px]">
            <h1 className="font-monument text-sm font-normal sm:text-base lg:text-sm min-[1920px]:text-2xl">
              {card2title}
            </h1>
            <p className="font-ponnala text-xs font-normal sm:text-sm lg:text-xs min-[1920px]:text-xl">
              {card2content}
            </p>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-7 text-center sm:w-auto lg:gap-6 lg:text-start min-[1920px]:gap-[50px]">
        <div className="flex flex-col gap-4 min-[1920px]:gap-8">
          <h1 className="text-stroke-5 srifoton-header relative font-monument font-normal leading-[120%] min-[1920px]:text-nowrap">
            <strong className="uppercase">{header}</strong>
          </h1>
          <h2 className="relative font-monument text-2xl font-normal uppercase !leading-[120%] text-primary-200 lg:text-lg xl:text-xl min-[1920px]:text-[29px]">
            {subheader}
          </h2>
        </div>
        {children && (
          <p className="srifoton-text text-justify font-poppins font-normal text-primary-200">
            {children}
          </p>
        )}
        <div className="mx-auto flex w-fit gap-6 lg:mx-0">
          <Link href={href} className="mx-auto">
            <Button variant="srifoton2" size="default2">
              Register
            </Button>
          </Link>
          <Link href={guideHref} className="mx-auto">
            <Button variant="srifoton2" size="default2">
              GUIDEBOOK
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
