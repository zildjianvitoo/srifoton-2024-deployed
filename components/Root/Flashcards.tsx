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
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id={id}
      className="relative grid w-full justify-items-center gap-14 lg:gap-[86px]"
    >
      <div className="h-fit w-3/4">
        <SectionHeader text={title} />
      </div>
      <section className="flex w-full flex-col justify-between gap-5 xl:flex-row xl:gap-[102px]">
        <div className="relative mx-6 my-14 flex h-fit self-center">
          {Children.map(children, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return cloneElement(content as ReactElement, {
              visible: isHighlighted,
            });
          })}
        </div>
        <div className="order-first flex h-full min-w-[15.1%] items-center justify-center xl:order-none">
          <div className="relative flex max-w-full flex-row items-center justify-items-center gap-6 xl:max-w-[290px] xl:flex-col xl:gap-[50px]">
            {Children.map(children as ReactElement, (content, index) => (
              <button
                onClick={() => setSelectedIndex(index)}
                className={`${
                  index === selectedIndex
                    ? "aspect-[290/168] w-3/4 bg-[#B7B38C] px-[10px] text-[1vw] lg:text-[0.93vw] 2xl:px-[17px]"
                    : "aspect-[290/168] w-full bg-primary-100 px-[10px] text-[1.5vw] lg:text-[1.25vw] 2xl:px-[25px]"
                } self-center align-middle font-monument uppercase`}
              >
                {content.props.previewTitle}
              </button>
            ))}
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
          sm:text-sm lg:text-lg 2xl:text-xl
          px-14 md:px-16 2xl:px-[90px] py-12 md:py-14 2xl:py-[110px]
          text-justify"
      >
        <div className="flex flex-col">
          <h1 className="mb-5 font-monument uppercase sm:text-xl sm:leading-[120%] md:mb-[30px] lg:text-[30px] 2xl:text-[42px]">
            {title}
          </h1>
          <hr className="mb-8 rounded-full border-2 border-black lg:mb-[50px]" />
          {content}
          {children}
          <div className="mt-6 flex justify-between gap-5 lg:mt-[50px]">
            <div className="flex flex-col gap-5 md:flex-row">
              {href && (
                <Link href={href} className="">
                  <Button
                    variant="outline"
                    size="default2"
                    className="w-full !px-2 !py-1 md:w-fit lg:!px-5 lg:!py-3 min-[1920px]:!px-[35px] min-[1920px]:!py-[25px]"
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
                    className="!px-2 !py-1 lg:!px-5 lg:!py-3 min-[1920px]:!px-[35px] min-[1920px]:!py-[25px]"
                  >
                    More Info
                  </Button>
                </Link>
              )}
            </div>
            <div className="flex w-fit flex-col self-end font-monument 2xl:flex-row">
              <div className="flex">
                <p className="text-sm lg:text-xl min-[1920px]:text-3xl">RP</p>
                <p className="text-3xl lg:text-4xl min-[1920px]:text-6xl">
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
