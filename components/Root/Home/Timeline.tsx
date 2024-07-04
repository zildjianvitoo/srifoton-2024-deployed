import React, { ReactNode, cloneElement } from "react";
import SectionHeader from "../SectionHeader";
import CardCrook from "../CardCrook";
import { Children } from "react";

type Props = { className?: string; children: ReactNode; span?: string; index?: number };

function Timeline({ className, children, ...props } : Props) {

  return (
    <section
      id="event-timeline"
      className="mt-40 px-8 md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <div className="mx-[9.55vw]">
        <SectionHeader text="event timeline" />
      </div>
      <section className="flex flex-col h-[512px] xl:h-[768px] border-2 px-14 justify-center scroll-smooth overflow-x-auto mt-20 no-scrollbar">

      <div className="inline-block relative w-fit">
        <ul className="list-none inline-flex items-start gap-4 lg:gap-0">
          {Children.map(children, (child, index) =>
            <li>
              {cloneElement(child, {index: index}) /* gtw gimana bisa begini, tapi jalan */}
            </li>
          )}
          <li><div className="w-12"></div></li>
        </ul>
        <div className={`inline-block w-full h-1 bg-white absolute top-[200px] left-0 rounded-full`}></div>
      </div>

      </section>
    </section>
  )
}

function TimelineCard({ className, children, span, index = 0, ...props } : Props) {
  return(
    <>
      <div className="flex -mr-20">
        <div className={`grid min-w-[228px] grid-cols-1 justify-items-center ${(index % 2 === 0) ? "" : "pt-[192px]"}`}>
          {(index % 2 === 0) ? (
            <>
              <p className="text-white font-monument justify-self-end text-sm mb-2">{span}</p>
              <CardCrook className="text-center text-md !w-full h-28"><div className="flex h-full justify-center items-center">{children}</div></CardCrook>
              <div className="h-16 border-l-4 my-auto"></div>
              <div className="w-3 h-3 -mt-3 rounded-full bg-white"></div>
            </>
          ) : (
            <>
              <div className="w-3 h-3 -mb-3 rounded-full bg-white"></div>
              <div className="h-16 border-l-4 my-auto"></div>
              <CardCrook className="text-center !w-full h-28 text-md"><div className="flex h-full text-center items-center">{children}</div></CardCrook>
              <p className="text-white font-monument justify-self-start text-sm mt-2">{span}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export { Timeline, TimelineCard }