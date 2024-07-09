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
    <section id={id} className="grid justify-items-center relative gap-[86px] w-[90vw] mx-auto">
      <div className="w-3/4 h-fit">
        <SectionHeader text={title} />
      </div>
      <section className="flex gap-[102px] w-full justify-center">
        <div className="flex align-center relative w-fit h-fit my-14">
          {contents.map((content, index) => {
            const isHighlighted = index === selectedIndex;
            return renderFlashcards(content, isHighlighted);
          })}
        </div>
        <div className="flex items-center h-full overflow-y-auto">
          <div className="grid justify-items-center gap-[50px]">
            {contents.map((content, index) =>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`${index === selectedIndex ? "w-[210px] h-[128px] bg-[#B7B38C] text-lg px-6 align-middle" : "w-[290px] h-[168px] bg-primary-100 text-xl px-[45px] py-15"} items-center font-monument uppercase`}>
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
      <CardCrook outerClassName="" innerClassName="">
        <h1 className="uppercase text-[42px] font-monument mb-5">{title}</h1>
        <hr className="border-2 rounded-full border-black mb-[50px]" />
        {content}
        {children}
        <Link href={href} className="mt-[50px]">
          <Button
            variant={"outline"}
            className="border-4 text-xl items-center font-monument !py-[25px] !px-[35px]"
          >
            Register
          </Button>
        </Link>
        <div className="absolute flex w-fit right-0 bottom-0 font-monument bottom-24 right-[90px]">
          <p className="text-3xl">RP</p>
          <p className="text-6xl">{price}</p>
          <p className="text-3xl self-end mb-2 capitalize">{`/${per}`}</p>
        </div>
      </CardCrook>
    </section>
  )
}

function Benefits({children, className} : BenefitsProps) {
  return(
    <ul className={`${className} gap-4 flex flex-col mt-5`}>

      {Children.map(children, (child, index) =>
        <li key={`benefit${index}`} className="flex inline-flex gap-5 items-start">
          <SquareCheckBig size={24} strokeWidth={3}/>
          {child}
        </li>
      )}
    </ul>
  )
}

export { Flashcards, Flashcard, Benefits };