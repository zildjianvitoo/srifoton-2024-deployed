import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = { className?: string; children: ReactNode; header: string; href: string };

export default function SectionContent({
  className,
  children,
  header,
  href,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full mt-10 h-fit border-4 border-[#B7B38C] px-4 py-6 text-primary md:w-1/2 lg:w-auto md:px-6 md:py-8 lg:px-12 lg:py-20",
        className,
      )}
    >
      <h3 className="absolute bottom-[95%] z-30 bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text-3xl">
        {header}
      </h3>
      <p className="lg:text-md font-ponnala text-sm xl:text-lg text-justify">{children}</p>
      <Link href={href}>
        <Button className="mt-8 md:mt-[50px] font-monument" size={"sm"} variant={"srifoton"}>
          Register Now
        </Button>
      </Link>
    </div>
  );
}
