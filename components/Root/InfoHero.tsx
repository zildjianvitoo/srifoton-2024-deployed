import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  id: string,
  header: string,
  subheader: string,
  src: string,
  href: string,
  guideHref: string,
  card1title?: string,
  card1content?: string,
  card2title?: string,
  card2content?: string,
  children?: ReactNode};

export default function InfoHero({id, header, subheader, src, href, guideHref, card1title, card1content, card2title, card2content, children}: Props) {
  return (
    <section id={id} className="
      flex flex-col lg:flex-row justify-between w-full items-center
      sm:min-h-[90vh] md:min-h-fit
      gap-8 md:gap-12 lg:gap-16 2xl:gap-[85px]">

        <div className="aspect-[745/705] lg:min-w-[400px] min-[1920px]:min-w-[745px] flex items-center relative">
          <figure className="
            flex mx-auto
            w-[65%] lg:w-[230px] min-[1920px]:w-[500px]">
            <Image
              src={src}
              alt={`${id}-image`}
              width={500}
              height={500}
              className="aspect-square flex object-content"
            />
          </figure>
          { card1title &&
            <div className="flex flex-col absolute p-3 xl:p-6 gap-2 xl:gap-4 left-0 bottom-0 max-w-[200px] min-[1920px]:max-w-[353px] bg-[#fff9f1]">
              <h1 className="font-monument font-normal lg:text-sm min-[1920px]:text-2xl">{card1title}</h1>
              <p className="font-ponnala font-normal lg:text-xs min-[1920px]:text-xl">{card1content}</p>
            </div>
          }
          { card2title &&
            <div className="flex flex-col absolute p-3 xl:p-6 gap-2 xl:gap-4 right-0 top-0 max-w-[200px] min-[1920px]:max-w-[353px] bg-[#fff9f1]">
              <h1 className="font-monument font-normal lg:text-sm min-[1920px]:text-2xl">{card2title}</h1>
              <p className="font-ponnala font-normal lg:text-xs min-[1920px]:text-xl">{card2content}</p>
            </div>
          }
        </div>

        <div className="
          flex flex-col text-center lg:text-start
          gap-7 lg:gap-6 min-[1920px]:gap-[50px]
        ">
          <div className="flex flex-col gap-4 min-[1920px]:gap-8">
            <h1 className="
              text-stroke-5 leading-[120%] relative font-monument font-normal min-[1920px]:text-nowrap
              text-4xl lg:text-xl xl:text-4xl min-[1920px]:text-[42px]">
              <strong className="uppercase">{header}</strong>
            </h1>
            <h2 className="
              uppercase relative font-monument font-normal text-primary-200 !leading-[120%]
              text-2xl lg:text-lg xl:text-xl min-[1920px]:text-[29px]">
              {subheader}
            </h2>
          </div>
          { children && (
            <p className="
              font-ponnala font-normal text-primary-200 text-justify
              text-sm xl:text-xl min-[1920px]:text-2xl">
              {children}
            </p>
          )}
          <div className="flex gap-6 mx-auto lg:mx-0 w-fit">
            <Link href={href} className="mx-auto">
              <Button
                variant="srifoton2"
                size="default2"
              >
                Register
              </Button>
            </Link>
            <Link href={guideHref} className="mx-auto">
              <Button
                variant="srifoton2"
                size="default2"
              >
                GUIDEBOOK
              </Button>
            </Link>
          </div>
        </div>

    </section>
  );
}