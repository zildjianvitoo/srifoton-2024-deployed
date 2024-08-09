import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  outerClassName?: string;
  innerClassName?: string;
  children: ReactNode;
};

export default function CardCrook({
  outerClassName,
  innerClassName,
  children,
  ...props
}: Props) {
  return (
    <div className={cn("relative font-monument text-black", outerClassName)}>
      <div className="absolute z-0 mx-auto h-full w-full bg-[#868365] md:rotate-2 lg:rotate-[5deg]"></div>
      <div
        className={`relative z-10 flex w-full bg-primary-100 font-ponnala text-xl ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
