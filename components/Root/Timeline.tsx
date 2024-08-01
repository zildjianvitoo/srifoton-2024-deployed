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

function Timeline({ className, children, title="timeline", ...props } : Props) {
  return (
    <section
      id="timeline"
      className="px-8 md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <div className="mx-[9.55vw]">
        <SectionHeader text={title} />
      </div>
      <section className="custom-scrollbar mt-20 grid h-auto flex-col justify-center justify-items-center overflow-x-auto scroll-smooth border-2 px-16 py-16 md:flex md:h-[512px] md:py-0 lg:h-[700px]">
        <div className="relative flex w-fit flex-col items-center md:flex-row">
          <ul className="grid list-none flex-col items-start justify-items-center gap-24 md:flex md:inline-flex md:flex-row md:gap-4 lg:gap-0">
            {Children.map(children, (child, index) => (
              <li>
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
          <div className="-mb-5 block rotate-90 scale-100 opacity-25 md:-mr-5 md:mb-0 md:rotate-0 md:scale-50 md:opacity-100 lg:-mt-2.5 lg:scale-100">
            <Triangle />
          </div>
          <div className="absolute left-[157px] z-0 inline-block h-full w-2.5 rounded-full bg-white opacity-25 md:left-0 md:top-[197px] md:h-1 md:w-full md:opacity-100 lg:top-[295px] lg:h-2.5"></div>
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
          className={`z-10 grid w-full grid-cols-1 justify-items-center md:w-[228px] lg:w-[397px] ${index % 2 === 0 ? "" : "pt-0 md:pt-[193px] lg:pt-[289px]"}`}
        >
          {index % 2 === 0 ? (
            <>
              <p className="mb-2 justify-self-start font-monument text-lg text-white md:text-sm lg:mb-4 lg:text-xl">
                {span}
              </p>
              <CardCrook
                className={`md:text-md aspect-[228/112] h-40 !w-full text-center text-xl md:h-28 lg:h-40 lg:text-2xl ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
              >
                <div
                  className={`flex h-full items-center justify-center ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
                >
                  {children}
                </div>
              </CardCrook>
              <div className="my-auto hidden h-16 border-l-4 md:block lg:h-24 lg:border-l-[10px]"></div>
              <div className="-mt-3 hidden h-3 w-3 rounded-full bg-white md:block lg:h-6 lg:w-6"></div>
            </>
          ) : (
            <>
              <div className="-mb-3 hidden h-3 w-3 rounded-full bg-white md:block lg:h-6 lg:w-6"></div>
              <div className="my-auto hidden h-16 border-l-4 md:block lg:h-24 lg:border-l-[10px]"></div>
              <CardCrook className="md:ext-md aspect-[228/112] h-40 !w-full text-center text-xl md:h-28 lg:h-40 lg:text-2xl">
                <div className="flex h-full items-center text-center">
                  {children}
                </div>
              </CardCrook>
              <p className="mt-2 justify-self-start font-monument text-lg text-white md:text-sm lg:mb-4 lg:text-xl">
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
