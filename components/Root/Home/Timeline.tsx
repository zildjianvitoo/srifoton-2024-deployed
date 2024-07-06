import React, { ReactNode, cloneElement, createContext, useContext, useState } from "react";
import SectionHeader from "../SectionHeader";
import CardCrook from "../CardCrook";
import { Children } from "react";
import { Triangle } from "@/lib/icon";

type Props = {
  className?: string;
  children: ReactNode;
  span?: string;
  index?: number;
  title?: string
};

function Timeline({ className, children, title="timeline", ...props } : Props) {

  return (
    <section
      id="timeline"
      className="mt-40 px-8 md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <div className="mx-[9.55vw]">
        <SectionHeader text={title} />
      </div>
      <section className="grid justify-items-center md:flex flex-col h-auto md:h-[512px] lg:h-[700px] border-2 px-16 py-16 md:py-0 justify-center scroll-smooth overflow-x-auto mt-20 custom-scrollbar">
        <div className="flex md:flex-row flex-col items-center relative w-fit">
          <ul className="list-none grid justify-items-center md:flex flex-col md:inline-flex md:flex-row items-start gap-24 md:gap-4 lg:gap-0">
            {Children.map(children, (child, index) =>
              <li>
                {cloneElement(child, {index: index}) /* gtw gimana bisa begini, tapi jalan */}
              </li>
            )}
            <li><div className="w-12"></div></li>
          </ul>
          <div className="scale-100 md:scale-50 -mb-5 md:mb-0 md:-mr-5 lg:-mt-2.5 lg:scale-100 block rotate-90 md:rotate-0 opacity-25 md:opacity-100"><Triangle /></div>
          <div className="inline-block w-2.5 h-full md:w-full md:h-1 lg:h-2.5 bg-white absolute left-[157px] md:top-[197px] lg:top-[295px] md:left-0 rounded-full z-0 opacity-25 md:opacity-100"></div>
        </div>
      </section>
    </section>
  )
}

function TimelineCard({ className, children, span, index = 0, ...props } : Props) {
  return(
    <>
      <div className="flex">
        <div className={`grid w-full md:w-[228px] lg:w-[397px] grid-cols-1 justify-items-center z-10 ${(index % 2 === 0) ? "" : "pt-0 md:pt-[193px] lg:pt-[289px]"}`}>
          {(index % 2 === 0) ? (
            <>
              <p className="text-white font-monument justify-self-start text-lg md:text-sm lg:text-xl lg:mb-4 mb-2">{span}</p>
              <CardCrook className={`aspect-[228/112] text-center text-xl md:text-md lg:text-2xl !w-full h-40 md:h-28 lg:h-40
                ${(index % 2 === 0) ? "scale-x-[-1]" : ""}`}>
                  <div className={`flex h-full justify-center items-center
                  ${(index % 2 === 0) ? "scale-x-[-1]" : ""}`}>
                    {children}
                </div>
              </CardCrook>
              <div className="h-16 lg:h-24 lg:border-l-[10px] border-l-4 my-auto hidden md:block"></div>
              <div className="w-3 h-3 lg:w-6 lg:h-6 -mt-3 rounded-full bg-white hidden md:block"></div>
            </>
          ) : (
            <>
              <div className="w-3 h-3 lg:w-6 lg:h-6 -mb-3 rounded-full bg-white hidden md:block"></div>
              <div className="h-16 border-l-4 lg:h-24 lg:border-l-[10px] my-auto hidden md:block"></div>
              <CardCrook className="aspect-[228/112] text-center !w-full h-40 md:h-28 text-xl md:ext-md lg:text-2xl lg:h-40"><div className="flex h-full text-center items-center">{children}</div></CardCrook>
              <p className="text-white font-monument justify-self-start text-lg md:text-sm lg:text-xl lg:mb-4 mt-2">{span}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export { Timeline, TimelineCard }