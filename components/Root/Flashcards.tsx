"use client";

import SectionHeader from "./SectionHeader";
import CardCrook from "./CardCrook.v2";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement, useState, useRef, cloneElement, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SquareCheckBig } from "lucide-react";

type FlashcardsProps = {
  id?: string,
  title: string,
  children?: ReactNode
};

type FlashcardProps = {
  id?: string,
  title: string,
  previewTitle: string,
  content?: ReactNode,
  children?: ReactNode,
  href?: string,
  infoHref?: string,
  price: string,
  per: string,
  visible?: boolean,
};

type BenefitsProps = {
  children: ReactNode,
  id?: string,
  className?: string
};

function Flashcards({id, title, children}: FlashcardsProps) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return(
    <section id={id} className="grid justify-items-center relative gap-14 lg:gap-[86px] w-full">
      <div className="w-3/4 h-fit">
        <SectionHeader text={title} />
      </div>
      <section className="
        w-full justify-between
        flex flex-col xl:flex-row
        gap-5 xl:gap-[102px]">
        <div className="flex self-center relative h-fit my-14 mx-6">
          {Children.map(children, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return cloneElement(content as ReactElement, {
              visible: isHighlighted,
            })
          })}
        </div>
        <div className="flex justify-center items-center h-full min-w-[15.1%] order-first xl:order-none">
          <div className="flex flex-row xl:flex-col relative max-w-full xl:max-w-[290px] justify-items-center items-center gap-6 xl:gap-[50px]">
            {Children.map(children as ReactElement, (content, index) =>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`${index === selectedIndex ?
                "aspect-[290/168] w-3/4 bg-[#B7B38C] lg:text-[0.93vw] text-[1vw] px-[10px] 2xl:px-[17px]" :
                "aspect-[290/168] w-full bg-primary-100 lg:text-[1.25vw] text-[1.5vw] px-[10px] 2xl:px-[25px]"}
                align-middle self-center font-monument uppercase`}>
                {content.props.previewTitle}
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

function Flashcard({id, title, href = "/", infoHref = "/", price, per, visible=false, content, children}: FlashcardProps) {
  return(
    <section id={id} className={`${visible ? "block" : "hidden"}`}>
      <CardCrook
        outerClassName="max-w-[1193px]"
        innerClassName="
          sm:text-sm lg:text-lg 2xl:text-xl
          px-14 md:px-16 2xl:px-[90px] py-12 md:py-14 2xl:py-[110px]
          text-justify">
        <h1 className="
          font-monument uppercase sm:leading-[120%]
          sm:text-xl lg:text-[30px] 2xl:text-[42px]
          mb-5 md:mb-[30px]">{title}</h1>
        <hr className="border-2 rounded-full border-black mb-8 lg:mb-[50px]" />
        {content}
        {children}
        <div className="flex justify-between mt-6 lg:mt-[50px] gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            {href && (
              <Link href={href} className="">
                <Button
                  variant="outline"
                  size="default2"
                  className="!px-2 lg:!px-5 min-[1920px]:!px-[35px] !py-1 lg:!py-3 min-[1920px]:!py-[25px] w-full md:w-fit"
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
                  className="!px-2 lg:!px-5 min-[1920px]:!px-[35px] !py-1 lg:!py-3 min-[1920px]:!py-[25px]"
                >
                  More Info
                </Button>
              </Link>
            )}
          </div>
          <div className="flex self-end flex-col 2xl:flex-row w-fit font-monument">
            <div className="flex">
              <p className="text-sm lg:text-xl min-[1920px]:text-3xl">RP</p>
              <p className="text-3xl lg:text-4xl min-[1920px]:text-6xl">{price}</p>
            </div>
            <p className="text-sm lg:text-xl min-[1920px]:text-3xl self-end mb-7 capitalize">{`/${per}`}</p>
          </div>
        </div>
      </CardCrook>
    </section>
  )
}

function Benefits({id="0", children, className} : BenefitsProps) {

  return(
    <ul className={`${className} gap-4 flex flex-col mt-5`}>
      {Children.map(children, (child, index) =>
        <li key={`benefit${id + index}`} className="flex inline-flex gap-5 items-center h-fit">
          <SquareCheckBig size={24} strokeWidth={3}/>
          <span className="pt-3 leading-[1%]">{child}</span>
        </li>
      )}
    </ul>
  )
}

export { Flashcards, Flashcard, Benefits };