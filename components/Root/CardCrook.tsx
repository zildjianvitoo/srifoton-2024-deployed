import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = { className?: string; children: ReactNode };

export default function CardCrook({ className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "mb-30 text-text-200 relative w-2/3 font-monument md:w-3/5",
        className,
      )}
    >
      <div className="absolute z-0 mx-auto h-full w-full rotate-[5deg] bg-[#868365]"></div>
      <div
        className={
          "relative z-10 mx-auto flex h-full w-full flex-col bg-primary-100 p-8 lg:py-14"
        }
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
