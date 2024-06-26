"use client";

import Jam from "./Jam";
import { useState, useEffect } from "react";

function kasihNol(value: any) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

function TitikDua() {
  return <span className="text-[1rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">:</span>;
}

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("07/01/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-monument text-center mb-30 text-[#24221E] w-[17rem] md:w-[35rem] lg:w-[45rem] xl:w-[65rem] mx-auto">
      <div
        className="bg-[#868365] rotate-[5deg] absolute z-0
                    w-[17rem] h-[8rem]
                    md:w-[35rem] md:h-[17rem] 
                    lg:w-[45rem] lg:h-[25rem] 
                    xl:w-[65rem] xl:h-[35rem]"
      ></div>
      <div
        className="bg-[#FFF9F1] relative
                    w-[17rem] h-[8rem] pt-[.5rem]
                    md:w-[35rem] md:h-[17rem] md:pt-[2rem]
                    lg:w-[45rem] lg:h-[25rem] lg:pt-[3rem]
                    xl:w-[65rem] xl:h-[35rem] xl:pt-[6rem]"
      >
        <h3
          className="border-b-2 md:border-b-4 border-[#7E8889] inline-block align-top relative z-10
                       text-[.6rem] py-2 mb-1
                       md:text-[1.2rem] md:mb-7 md:py-4
                       lg:text-[1.5rem] lg:mb-10 lg:py-6
                       xl:text-[2rem] xl:mb-[3rem] xl:py-4"
        >
          <strong>OPENING CEREMONY</strong>
        </h3>
        <img
          src="img/gear.png"
          alt="gear"
          className="absolute 
                     w-[3rem] top-4 left-3
                     md:w-[6rem] md:top-7 md:left-5
                     lg:w-[8rem] lg:top-10 lg:left-8
                     xl:w-[12rem] xl:top-10 xl:left-10"
        />
        <img
          src="img/hourglass.png"
          alt="gear"
          className="absolute bottom-0
                     w-[3rem] left-[14rem]
                     md:w-[6rem] md:left-[30rem]
                     lg:w-[8rem] lg:left-[37rem]
                     xl:w-[12rem] xl:left-[53rem]"
        />
        <div
          className="mx-auto flex justify-evenly items-center py-2 relative z-20
                      w-[11rem]
                      md:w-[23rem] 
                      lg:w-[30rem] 
                      xl:w-[40rem]"
        >
          <Jam value={kasihNol(days)} desc={"Hari"} />
          <TitikDua />
          <Jam value={kasihNol(hours)} desc={"Jam"} />
          <TitikDua />
          <Jam value={kasihNol(minutes)} desc={"Menit"} />
          <TitikDua />
          <Jam value={kasihNol(seconds)} desc={"Detik"} />
        </div>
      </div>
    </div>
  );
}
