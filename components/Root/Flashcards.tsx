"use client";

import SectionHeader from "./SectionHeader";
import CardCrook from "./CardCrook.v2";
import Image from "next/image";
import React, {
  ReactNode,
  Children,
  isValidElement,
  useState,
  useRef,
  cloneElement,
  ReactElement,
} from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SquareCheckBig } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type FlashcardsProps = {
  id?: string;
  title: string;
  children?: ReactNode;
};

type FlashcardProps = {
  id?: string;
  title: string;
  previewTitle: string;
  content?: ReactNode;
  children?: ReactNode;
  href?: string;
  infoHref?: string;
  price: string;
  per: string;
  visible?: boolean;
};

type BenefitsProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

function Flashcards({ id, title, children }: FlashcardsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id={id}
      className="relative grid justify-items-center gap-14 lg:gap-[86px]"
    >
      <div className="h-fit sm:w-3/4 !text-wrap">
        <SectionHeader text={title} />
      </div>
      <section className="flex w-full flex-col justify-between gap-5 lg:flex-row lg:gap-[102px]">
        <div className="relative lg:mx-6 lg:my-14 flex h-fit self-center w-full">
          {Children.map(children, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return cloneElement(content as ReactElement, {
              visible: isHighlighted,
            });
          })}
        </div>
        <div className="order-first flex h-full min-w-[15.1%] items-center justify-center lg:order-none">
          <div className="relative flex py-2 border-x-2 lg:border-x-0 lg:py-0 max-w-full w-full flex-row items-center justify-items-center gap-6 lg:max-w-[290px] lg:flex-col lg:gap-[50px]">
            {}
            <div className="embla h-full" ref={emblaRef} style={{transform: "rotate(0deg)"}}>
              <div className="embla__container for_flashcard h-full">
                {Children.map(children as ReactElement, (content, index) => (
                  <div className={cn("embla__slide flex justify-center", index === selectedIndex ? "slide_is_selected" : "")}>
                    <button
                      onClick={() => setSelectedIndex(index)}
                      className={`${
                        index === selectedIndex
                          ? "aspect-[290/168] w-3/4 bg-[#B7B38C] px-[10px] text-[1.5vw] md:text-[0.93vw] 2xl:px-[17px]"
                          : "aspect-[290/168] w-3/4 lg:w-full bg-primary-100 px-[10px] text-[2.5vw] md:text-[1.25vw] 2xl:px-[25px]"
                      } self-center align-middle font-monument uppercase`}
                    >
                      {content.props.previewTitle}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}

function Flashcard({
  id,
  title,
  href = "/",
  infoHref = "/",
  price,
  per,
  visible = false,
  content,
  children,
}: FlashcardProps) {
  return (
    <section id={id} className={`${visible ? "block" : "hidden"}`}>
      <CardCrook
        outerClassName="max-w-[1193px]"
        innerClassName="
          text-xs lg:text-lg 2xl:text-xl
          px-8 sm:px-14 md:px-16 2xl:px-[90px] py-6 sm:py-12 md:py-14 2xl:py-[110px]
          text-justify"
      >
        <div className="flex flex-col">
          <h1 className="mb-5 font-monument uppercase text-lg sm:text-xl leading-[120%] md:mb-[30px] lg:text-[30px] 2xl:text-[42px]">
            {title}
          </h1>
          <hr className="mb-8 rounded-full border-2 border-black lg:mb-[50px]" />
          {content}
          {children}
          <div className="mt-6 flex justify-between gap-1 lg:mt-[50px]">
            <div className="flex flex-col gap-5 md:flex-row">
              {href && (
                <Link href={href} className="">
                  <Button
                    variant="outline"
                    size="default2"
                    className="
                    w-full !px-2 !py-1 md:w-fit lg:!px-5 lg:!py-3 min-[1920px]:!px-[35px] min-[1920px]:!py-[25px]
                    !border-2 lg:border-4"
                  >
                    Register
                  </Button>
                </Link>
              )}
              {infoHref && (
                <Link href={infoHref} className="">
                  <Button
                    variant="outline"
                    size="default2"
                    className="!px-2 !py-1 lg:!px-5 lg:!py-3 min-[1920px]:!px-[35px] min-[1920px]:!py-[25px]
                    !border-2 lg:border-4"
                  >
                    More Info
                  </Button>
                </Link>
              )}
            </div>
            <div className="flex w-fit flex-col self-end font-monument 2xl:flex-row">
              <div className="flex">
                <p className="text-sm lg:text-xl min-[1920px]:text-3xl">RP</p>
                <p className="text-xl sm:text-3xl lg:text-4xl min-[1920px]:text-6xl">
                  {price}
                </p>
              </div>
              <p className="mb-7 self-end text-sm capitalize lg:text-xl min-[1920px]:text-3xl">{`/${per}`}</p>
            </div>
          </div>
        </div>
      </CardCrook>
    </section>
  );
}

function Benefits({ id = "0", children, className }: BenefitsProps) {
  return (
    <ul className={`${className} mt-5 flex flex-col gap-4`}>
      {Children.map(children, (child, index) => (
        <li
          key={`benefit${id + index}`}
          className="flex inline-flex h-fit items-center gap-5"
        >
          <SquareCheckBig size={24} strokeWidth={3} />
          <span className="pt-3 leading-[1%]">{child}</span>
        </li>
      ))}
    </ul>
  );
}

export { Flashcards, Flashcard, Benefits };
