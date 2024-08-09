import React, { ReactElement, ReactNode, cloneElement } from "react";
import SectionHeader from "./SectionHeader";
import CardCrook from "./CardCrook";
import { Children } from "react";
import { Triangle } from "lucide-react";

type Props = {
  className?: string;
  children: ReactNode;
  span?: string;
  index?: number;
  title?: string;
};

function Timeline({
  className,
  children,
  title = "timeline",
  ...props
}: Props) {
  return (
    <section id="timeline">
      <div className="mx-[9.55vw]">
        <SectionHeader text={title} />
      </div>
      <section className="custom-scrollbar mt-8 flex h-auto flex-col justify-center overflow-x-auto scroll-smooth border-2 px-16 py-8 md:mt-20 md:h-[512px] md:py-0 lg:h-[700px]">
        <div className="relative flex w-fit flex-row items-center">
          <ul className="inline-flex list-none flex-row items-start gap-4 lg:gap-0">
            {Children.map(children, (child, index) => (
              <li className="-mx-[20px]">
                {cloneElement(child as ReactElement, {
                  index: index,
                })}
              </li>
            ))}
            <li>
              <div className="w-12"></div>
            </li>
          </ul>
          <div className="-mr-5 mb-0 block rotate-0 scale-50 opacity-100 lg:-mt-2.5 lg:scale-100">
            <Triangle />
          </div>
          <div className="absolute left-0 top-[160px] z-0 inline-block h-1 w-2.5 w-full rounded-full bg-white opacity-100 md:top-[197px] lg:top-[295px] lg:h-2.5"></div>
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
          className={`z-10 grid w-[200px] grid-cols-1 justify-items-center md:w-[310px] lg:w-[397px] ${index % 2 === 0 ? "" : "pt-[157px] md:pt-[193px] lg:pt-[289px]"}`}
        >
          {index % 2 === 0 ? (
            <>
              <p className="mb-2 justify-self-start font-monument text-xs text-white md:text-sm lg:mb-4 lg:text-xl">
                {span}
              </p>
              <CardCrook className="aspect-[397/165] h-28 !w-full scale-x-[-1] text-center text-sm md:text-lg lg:h-40 lg:text-2xl">
                <div className="flex h-full scale-x-[-1] items-center justify-center">
                  {children}
                </div>
              </CardCrook>
              <div className="my-auto block h-8 border-l-4 md:h-16 lg:h-24 lg:border-l-[10px]"></div>
              <div className="-mt-3 block h-3 w-3 rounded-full bg-white lg:h-6 lg:w-6"></div>
            </>
          ) : (
            <>
              <div className="-mb-3 block h-3 w-3 rounded-full bg-white lg:h-6 lg:w-6"></div>
              <div className="my-auto block h-8 border-l-4 md:h-16 lg:h-24 lg:border-l-[10px]"></div>
              <CardCrook className="aspect-[228/112] h-28 !w-full text-center text-sm md:text-lg lg:h-40 lg:text-2xl">
                <div className="flex h-full items-center justify-center">
                  {children}
                </div>
              </CardCrook>
              <p className="mt-2 justify-self-start font-monument text-xs text-white md:text-sm lg:mb-4 lg:text-xl">
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
