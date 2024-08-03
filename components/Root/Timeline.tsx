import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import SectionHeader from "./SectionHeader";
import CardCrook from "./CardCrook";
import { Children } from "react";
import { Triangle } from "@/lib/icon";

type Props = {
  className?: string;
  children: ReactNode;
  span?: string;
  index?: number;
  title?: string
};

function  Timeline({ className, children, title="timeline", ...props } : Props) {
  return (
    <section
      id="timeline"
    >
      <div className="mx-[9.55vw]">
        <SectionHeader text={title} />
      </div>
      <section className="custom-scrollbar mt-8 md:mt-20 flex flex-col justify-center overflow-x-auto scroll-smooth border-2 px-20 py-8 md:py-0 h-auto md:h-[512px] lg:h-[700px]">
        <div className="relative flex flex-row w-fit items-center">
          <ul className="flex inline-flex flex-row list-none items-start gap-4 lg:gap-0">
            {Children.map(children, (child, index) => (
              <li className="-mx-[2vw]">
                {
                  cloneElement(child as ReactElement, {
                    index: index,
                  })
                }
              </li>
            ))}
            <li>
              <div className="w-12"></div>
            </li>
          </ul>
          <div className="block -mr-5 mb-0 rotate-0 scale-50 opacity-100 lg:-mt-2.5 lg:scale-100">
            <Triangle />
          </div>
          <div className="absolute z-0 inline-block w-2.5 rounded-full bg-white left-0 top-[163px] md:top-[200px] h-1 w-full opacity-100 lg:top-[304px] lg:h-2.5"></div>
        </div>
      </section>
    </section>
  );
}

function TimelineCard({
  className,
  children,
  span,
  index = 0,
  ...props
}: Props) {
  return (
    <>
      <div className="flex">
        <div
          className={`z-10 grid grid-cols-1 justify-items-center w-[235px] md:w-[310px] lg:w-[444px]
            ${index % 2 === 0 ? "" : "pt-[160px] md:pt-[196px] lg:pt-[300px]"}`}
        >
          {index % 2 === 0 ? (
            <>
              <p className="mb-3 lg:mb-6 justify-self-start font-monument text-white text-[10px] md:text-sm lg:text-xl">
                {span}
              </p>
              <CardCrook className="aspect-[397/165] !w-full text-center h-28 lg:h-40 text-sm md:text-lg lg:text-2xl scale-x-[-1]">
                <div className="flex h-full items-center justify-center scale-x-[-1]">
                  {children}
                </div>
              </CardCrook>
              <div className="my-auto h-8 md:h-16 border-l-4 block lg:h-24 lg:border-l-[10px]"></div>
              <div className="-mt-3 h-3 w-3 rounded-full bg-white block lg:h-6 lg:w-6"></div>
            </>
          ) : (
            <>
              <div className="-mb-3 h-3 w-3 rounded-full bg-white block lg:h-6 lg:w-6"></div>
              <div className="my-auto h-8 md:h-16 border-l-4 block lg:h-24 lg:border-l-[10px]"></div>
              <CardCrook className="aspect-[228/112] !w-full text-center h-28 lg:h-40 text-sm md:text-lg lg:text-2xl">
                <div className="flex h-full items-center justify-center">
                  {children}
                </div>
              </CardCrook>
              <p className="mt-3 lg:mt-6 justify-self-start font-monument text-white text-nowrap text-[10px] md:text-sm lg:text-xl">
                {span}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { Timeline, TimelineCard };
