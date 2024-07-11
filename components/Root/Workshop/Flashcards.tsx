"use client";

import SectionHeader from "../SectionHeader";
import CardCrook from "./CardCrook";
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
  href: string,
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
    <section id={id} className="grid justify-items-center relative gap-[86px] w-full">
      <div className="w-3/4 h-fit">
        <SectionHeader text={title} />
      </div>
      <section className="flex flex-col md:flex-row gap-0 md:gap-[102px] w-full justify-between">
        <div className="flex align-center relative w-fit h-fit my-14 mx-6">
          {Children.map(children, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return cloneElement(content as ReactElement, {
              visible: isHighlighted,
            })
          })}
        </div>
        <div className="flex justify-center items-center h-full min-w-[15.1%] overflow-y-auto overflow-x-hidden">
          <div className="flex md:grid min-w-fit justify-items-center items-center gap-[50px]">
            {Children.map(children as ReactElement, (content, index) =>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`${index === selectedIndex ?
                "aspect-[290/168] w-3/4 bg-[#B7B38C] md:text-[0.93vw] text-[1.25vw] px-[45px] py-[25px]" :
                "aspect-[290/168] bg-primary-100 md:text-[1.25vw] text-[2.25vw] px-[45px] py-[60px]"}
                align-middle items-center font-monument uppercase`}>
                {content.props.previewTitle}
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
        innerClassName="sm:text-sm lg:text-lg 2xl:text-xl px-[110px] py-[90px]">
        <h1 className="font-monument uppercase sm:text-xl lg:text-[30px] 2xl:text-[42px] sm:leading-[120%] mb-[30px]">{title}</h1>
        <hr className="border-2 rounded-full border-black mb-[50px]" />
        {content}
        {children}
        <div className="flex justify-between mt-[50px]">
          <Link href={href} className="">
            <Button
              variant="outline2"
              size="default2"
            >
              Register
            </Button>
          </Link>
          <div className="flex w-fit font-monument">
            <p className="2xl:text-3xl lg:text-xl text-sm">RP</p>
            <p className="2xl:text-6xl lg:text-4xl text-2xl">{price}</p>
            <p className="2xl:text-3xl lg:text-xl text-sm self-end mb-7 capitalize">{`/${per}`}</p>
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