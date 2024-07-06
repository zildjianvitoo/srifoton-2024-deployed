import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode };

export default function CompetitionChat({ children, ...props }: Props) {
  return (
    <div className="relative mb-10 w-4/5 rounded-md bg-primary-100 p-5 text-left font-ponnala text-lg">
      <div className="absolute left-0 top-[90%] h-0 w-0 border-r-[4rem] border-t-[1.5rem] border-l-transparent border-r-transparent border-t-primary-100"></div>
      {children}
    </div>
  );
}
