import SectionHeader from "../SectionHeader";
import CardCrook from "./CardCrook";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SquareCheckBig } from "lucide-react";

type FlashcardsProps = {
  id?: string,
  title: string,
  name: string,
  children: ReactNode
};

type FlashcardProps = {
  id?: string,
  title: string,
  children: ReactNode,
  href: string,
  price: string,
};

type BenefitsProps = {
  children: ReactNode,
  className?: string
};

function Flashcards({id, title, name, children}: FlashcardsProps) {
  return(
    <section>
      <SectionHeader text={title} />
      <div className="flex gap-[102px]"></div>
      {children}
      <div className="flex flex-col items-center gap-13">
        {/* {Children.forEach(children, element => {
          if (!React.isValidElement(element)) return

          const { source } = element.props;
        }) */}
      </div>
    </section>
  )
}

function Flashcard({id, title, href, price, children}: FlashcardProps) {
  return(
    <section>
      <CardCrook outerClassName="" innerClassName="">
        <h1 className="uppercase text-[42px] font-monument mb-5">{title}</h1>
        <hr className="border-2 rounded-full border-black mb-[50px]" />
        {children}
        <Link href={"/register"} className="mt-[50px]">
          <Button
            variant={"outline"}
            className="border-[3px] text-sm lg:text-base"
          >
            Register
          </Button>
        </Link>
        <div className="absolute flex w-fit right-0 bottom-0 font-monument">
          <p className="text-3xl">RP</p>
          <p className="text-6xl">{price}</p>
          <p className="text-3xl self-end mb-2">/Person</p>
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