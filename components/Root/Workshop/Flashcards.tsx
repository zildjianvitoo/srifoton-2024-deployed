"use client";

import SectionHeader from "../SectionHeader";
import CardCrook from "./CardCrook";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SquareCheckBig } from "lucide-react";

type FlashcardsProps = {
  id?: string,
  title: string,
  contents: Array<FlashcardProps>,
  renderFlashcards?: (content: FlashcardProps, event: boolean) => ReactNode
};

type FlashcardProps = {
  id?: string,
  title: string,
  previewTitle: string,
  content?: ReactNode,
  children?: ReactNode,
  href: string,
  price: string,
  per: string,
  visible?: boolean,
};

type BenefitsProps = {
  children: ReactNode,
  className?: string
};

function Flashcards({id, title, contents,
  renderFlashcards = (content, isHighlighted) => (
    <Flashcard
      title={content.title}
      previewTitle={content.previewTitle}
      href={content.href}
      price={content.price}
      per={content.per}
      content={content.content}
      visible={isHighlighted}>
    </Flashcard>
  )}: FlashcardsProps) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return(
    <section id={id} className="grid justify-items-center relative gap-[86px] w-[75vw] md:w-[90vw] mx-auto">
      <div className="w-3/4 h-fit">
        <SectionHeader text={title} />
      </div>
      <section className="flex flex-col md:flex-row md:gap-[102px] gap-0 w-full justify-center">
        <div className="flex align-center relative w-fit h-fit my-14">
          {contents.map((content, index) => {
            const isHighlighted = index === selectedIndex;
            return renderFlashcards(content, isHighlighted);
          })}
        </div>
        <div className="flex justify-center items-center h-full min-w-[15.1%] overflow-y-auto overflow-x-hidden">
          <div className="flex md:grid justify-items-center items-center gap-[50px]">
            {contents.map((content, index) =>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`${index === selectedIndex ? "aspect-[210/128] w-[72.41%] bg-[#B7B38C] md:text-[0.93vw] text-[1.25vw] px-6" : "aspect-[290/168] w-full bg-primary-100 md:text-[1.25vw] text-[2.25vw] px-[45px]"} align-middle items-center font-monument uppercase`}>
                {content.previewTitle}
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

function Flashcard({id, title, href, price, per, visible=false, content, children}: FlashcardProps) {
  return(
    <section id={id} className={`${visible ? "block" : "hidden"}`}>
      <CardCrook
        outerClassName="max-w-[1193px]"
        innerClassName="sm:text-sm lg:text-lg 2xl:text-xl px-[4.7%] pt-[5.3%] pb-[4.4%]">
        <h1 className="uppercase sm:text-xl lg:text-[30px] 2xl:text-[42px] font-monument leading-[120%] mb-[1.68%]">{title}</h1>
        <hr className="border-2 rounded-full border-black mb-[4.19%]" />
        {content}
        {children}
        <Link href={href} className="mt-[4.19%] w-[15.84%]">
          <Button
            variant={"outline"}
            className="!aspect-[189/74] w-full h-[11.25%] border-4 text-[1vw] items-center font-monument !py-[2.1%] !px-[5.32%]"
          >
            Register
          </Button>
        </Link>
        <div className="absolute flex w-fit font-monument bottom-[5%] lg:bottom-[12.63%] right-[4.25%]">
          <p className="2xl:text-3xl lg:text-xl text-sm">RP</p>
          <p className="2xl:text-6xl lg:text-4xl text-2xl">{price}</p>
          <p className="2xl:text-3xl lg:text-xl text-sm self-end 2xl:mb-2 xl:mb-1 capitalize">{`/${per}`}</p>
        </div>
      </CardCrook>
    </section>
  )
}

function Benefits({children, className} : BenefitsProps) {
  return(
    <ul className={`${className} gap-4 flex flex-col mt-5`}>

      {Children.map(children, (child, index) =>
        <li key={`benefit${index}`} className="flex inline-flex gap-3 lg:gap-5 items-start">
          <SquareCheckBig size={window.innerWidth >= 1024 ? 24 : 16} strokeWidth={3}/>
          {child}
        </li>
      )}
    </ul>
  )
}

export { Flashcards, Flashcard, Benefits };