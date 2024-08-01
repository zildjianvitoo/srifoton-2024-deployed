import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";

type Props = { className?: string; children: ReactNode; header: string };

export default function SectionContent({
  className,
  children,
  header,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full border-4 border-[#B7B38C] px-4 py-6 text-primary md:w-1/2 lg:px-6 lg:py-8 xl:px-8 xl:py-12",
        className,
      )}
    >
      <h3 className="absolute bottom-[95%] z-30 bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text-3xl">
        {header}
      </h3>
      <p className="lg:text-md font-ponnala text-sm xl:text-lg">{children}</p>
      <Button className="mt-6 font-monument" size={"sm"} variant={"srifoton"}>
        Register Now
      </Button>
    </div>
  );
}
