"use client";

import Time from "./Time";
import CardCrook from "../CardCrook";
import useCountdown from "@/hooks/useCountdown";
import Image from "next/image";

function DoubleDot() {
  return (
    <span className="mx-1 text-xl md:mx-3 md:text-3xl lg:mx-4 lg:text-5xl xl:mx-5 xl:text-6xl">
      :
    </span>
  );
}

export default function Countdown() {
  let { days, hours, minutes, seconds } = useCountdown({
    targetTime: "08/05/2024 23:59:59",
  });

  return (
    <section id="countdown">
      <div className="flex w-full justify-center">
        <CardCrook className="relative w-full mx-[7.5vw] !w-full md:!w-full">
          <Image
          src="/img/gear.png"
          alt="gear"
          className="!w-[15%] object-contain absolute top-[8%] left-[2.8%]"
          quality={100}
          width={216}
          height={171}
          loading="eager"
          />
          <Image
          src="/img/hourglass.png"
          alt="hourglass"
          className="!w-[15%] object-contain absolute right-0 bottom-0"
          quality={100}
          width={144}
          height={232}
          loading="eager"
          />
          <div className="mx-auto mt-[10%] mb-[12%] flex flex-col items-center justify-center text-center">
            <h3 className="align-top text-xs text-text-300 sm:text-xl md:text-2xl xl:text-4xl">
              OPENING CEREMONY
              <div className="mt-1 rounded-md border-2 border-[#868365] bg-[#868365] md:mt-3 md:h-1 lg:mt-4 xl:mt-5"></div>
            </h3>
            <div className="mx-auto mt-5 flex items-center justify-center md:mt-10 lg:mt-16 xl:mt-20">
              <Time value={days} desc={"Hari"} />
              <DoubleDot />
              <Time value={hours} desc={"Jam"} />
              <DoubleDot />
              <Time value={minutes} desc={"Menit"} />
              <DoubleDot />
              <Time value={seconds} desc={"Detik"} />
            </div>
          </div>
        </CardCrook>
      </div>
    </section>
  );
}
