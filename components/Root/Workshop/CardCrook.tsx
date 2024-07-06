import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = { outerClassName?: string; innerClassName?: string; children: ReactNode };

export default function CardCrook({ outerClassName, innerClassName, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative font-monument text-black w-[1193px]",
        outerClassName,
      )}
    >
      <div className="absolute z-0 mx-auto h-full w-full rotate-[5deg] bg-[#868365]"></div>
      <div
        className={
          `relative z-10 flex w-fit px-[90px] pt-28 pb-[85px] flex-col text-xl font-ponnala bg-primary-100 ${innerClassName}`
        }
      >
        {children}
      </div>
    </div>
  );
}
