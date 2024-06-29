import React from "react";

type Props = {
  text: string;
};

export default function SectionHeader({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="ml-auto flex w-full items-center justify-end gap-5">
        <h1 className="relative text-nowrap font-monument text-xl font-normal uppercase text-primary-200 max-sm:mx-auto sm:text-2xl md:text-3xl">
          {text}
        </h1>
        <hr className="hidden h-2 w-1/3 rounded-full bg-primary-200 sm:block" />
      </div>
      <div className="ml-auto flex w-full items-center justify-start gap-5">
        <hr className="hidden h-2 w-1/3 rounded-full border border-primary-200 bg-background sm:block" />
        <h1 className="text-stroke relative text-nowrap font-monument text-xl font-normal uppercase text-text-300 max-sm:mx-auto sm:text-2xl md:text-3xl">
          {text}
        </h1>
      </div>
    </div>
  );
}
