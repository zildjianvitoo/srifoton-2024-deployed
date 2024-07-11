"use client";

import React, { Children, cloneElement, ReactElement, ReactNode, useState } from "react";
import SectionHeader from "../SectionHeader";
import CardCrook from "../CardCrook";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type QNAProps = {
  title: string,
  id?: string,
  children: ReactNode
};

type SpeechBubbleProps = {
  id ?: string,
  question: string,
  children: string,
  highlighted?: boolean,
  src?: string
}

function QNA({title, id, children}: QNAProps) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id={id} className="flex flex-col gap-[35px] w-[85%] mx-auto relative">
      <div className="w-[78%] mx-auto">
        <SectionHeader text={title} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[30px]">
          {Children.map(children as ReactElement, (content, index) => {
            const isHighlighted = index === selectedIndex;
            return(
              <div onMouseEnter={() => setSelectedIndex(index)} id={content.props.id}>
                {cloneElement(content, {
                  highlighted: isHighlighted,
                })}
              </div>
            )
          })}
        </div>
        {Children.map(children as ReactElement, (content, index) => {
          const isHighlighted = index === selectedIndex;
          return(
            <div className={`flex flex-col ${isHighlighted ? "block" : "hidden"}`}>
              <div className="w-[666px] bg-[#D9D9D9] relative text-2xl p-11 rounded-3xl">
                <p>
                  {content.props.children}
                </p>
              </div>
              <div className="ml-[105px] mb-11 h-0 w-0 border-l-[2rem] border-r-[2rem] border-t-[2rem] border-l-transparent border-r-transparent border-t-[#D9D9D9]"></div>
              <Image src="/img/gallery1.png" alt="reviewer" width={534} height={467} className="flex self-end mx-auto max-h-[467px] object-contain"></Image>
            </div>
          )
        })}
      </div>
    </section>
  );
}

function SpeechBubble({id, question, highlighted = false} : SpeechBubbleProps) {

  var [ contentState, svgState ] = highlighted ?
    ["w-[686px] h-[123px] bg-[#D9D9D9] text-2xl", {width:"48", height:"22", fill:"#d9d9d9"}] :
    ["w-[591px] h-[100px] bg-[#b7b38c] text-xl", {width:"41", height:"18.8", fill:"hsl(54.42, 22.99%, 63.33%)"}];

  return(
    <>
      <div className={cn("flex rounded-t-3xl rounded-br-3xl rounded-bl-0 text-ponnala px-11 items-center", contentState)}>
        {question}
      </div>
      <svg width={svgState.width} height={svgState.height} viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-0.5">
        <path d="M48 0.472656L0 21.4727V0.472656H48Z" fill={svgState.fill}/>
      </svg>
    </>
  )
}

export { QNA, SpeechBubble };