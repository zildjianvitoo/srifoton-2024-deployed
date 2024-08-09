"use client";

import React, { Children, cloneElement, ReactElement, ReactNode, useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import CardCrook from "./CardCrook";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QNAProps = {
  title: string,
  id?: string,
  children: ReactNode
};

type SpeechBubbleProps = {
  id ?: string,
  question: string,
  children: ReactNode,
  highlighted?: boolean,
  src?: string
}

function QNA({title, id, children}: QNAProps) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id={id} className="flex flex-col gap-[35px] relative">
      <div className="w-[78%] mx-auto">
        <SectionHeader text={title} />
      </div>

      <div className="flex justify-between gap-24">
        <div className="flex lg:hidden flex-col relative w-full gap-[30px]">
          <Accordion type="single" collapsible className="text-white text-sm font-normal">
            {Children.map(children as ReactElement, (content, index) => {
              const isHighlighted = index === selectedIndex;
              return(
                <AccordionItem value={"accord-" + index}>
                  <AccordionTrigger>{content.props.question}</AccordionTrigger>
                  <AccordionContent>
                    {content.props.children}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
        <div className="hidden lg:flex flex-col relative min-w-[36vw] max-w-[36vw] gap-[30px]">
          {Children.map(children as ReactElement, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return(
              <div onMouseEnter={() => setSelectedIndex(index)} id={content.props.id} className="">
                {cloneElement(content, {
                  highlighted: isHighlighted,
                })}
              </div>
            )
          })}
        </div>
        <div className="hidden lg:flex self-end">
          {Children.map(children as ReactElement, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return(
              <div className={`flex flex-col ${isHighlighted ? "block" : "hidden"}`}>
                <div className="max-w-[666px] bg-whtc-100 relative xl:text-xl 2xl:text-2xl p-6 xl:p-11 rounded-3xl">
                  <p>
                    {content.props.children}
                  </p>
                </div>
                <div className="ml-[105px] mb-11 h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-[#D9D9D9]"></div>
                <Image src="/img/mascot1.png" alt="mascot" width={534} height={467} className="aspect-[534/467] flex self-end mx-auto min-w-[67.4%] object-contain"></Image>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function SpeechBubble({id, question, highlighted = false} : SpeechBubbleProps) {

  const [[ contentState, svgState ], setSpeechBubble] = useState(
    ["w-[85%] min-h-[70px] xl:min-h-[100px] bg-whtc-100 text-sm xl:text-lg 2xl:text-xl py-4",
    {width:"41", height:"18.8", fill:"hsl(54.42, 22.99%, 63.33%)"}]
  );

  useEffect(() => {
    highlighted ? setSpeechBubble(
    ["w-full min-h-[80px] xl:min-h-[123px] bg-whtc-100 xl:text-xl 2xl:text-2xl py-4",
      {width:"48", height:"22", fill:"#d9d9d9"}]) : setSpeechBubble(
    ["w-[85%] min-h-[70px] xl:min-h-[100px] bg-shadow-100 text-sm xl:text-lg 2xl:text-xl py-4",
      {width:"41", height:"18.8", fill:"hsl(54.55 14.04% 46.08%)"}])
  }, [highlighted])



  return(
    <>
      <div className={cn("flex rounded-t-3xl rounded-br-3xl rounded-bl-0 text-ponnala px-11 items-center qna_animate", contentState)}>
        {question}
      </div>
      <svg width={svgState.width} height={svgState.height} viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-0.5 qna_animate">
        <path d="M48 0.472656L0 21.4727V0.472656H48Z" fill={svgState.fill}/>
      </svg>
    </>
  )
}

export { QNA, SpeechBubble };