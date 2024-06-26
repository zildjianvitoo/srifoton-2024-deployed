"use client";

import Jam from "./Time";
import { useState, useEffect } from "react";

function kasihNol(value: any) {
  if (value / 10 <= 1) {
    return "0" + value;
  }
  return value;
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

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-30 text-center font-monument text-[#24221E]">
      <div className="absolute left-[23rem] z-0 h-[28rem] w-[50rem] rotate-[5deg] bg-[#919C9D]"></div>
      <div className="absolute left-[23rem] z-10 h-[28rem] w-[50rem] bg-[#FFF9F1]"></div>
      <h3 className="text-md relative z-10 mb-5 inline-block border-b-4 border-[#7E8889] py-8 align-top text-[#24221E] md:mb-10 md:text-3xl lg:mb-10 lg:text-[2rem] xl:mb-[5rem]">
        <strong>OPENING CEREMONY</strong>
      </h3>
      <div className="relative z-20 mx-auto mb-20 flex w-[13rem] items-center justify-evenly py-2 text-sm md:w-[23rem] md:text-2xl lg:mb-20 lg:w-[40rem] lg:text-2xl">
        <Jam value={kasihNol(days)} desc={"Hari"} />
        <span className="text-[4rem]">:</span>
        <Jam value={kasihNol(hours)} desc={"Jam"} />
        <span className="text-[4rem]">:</span>
        <Jam value={kasihNol(minutes)} desc={"Menit"} />
        <span className="text-[4rem]">:</span>
        <Jam value={kasihNol(seconds)} desc={"Detik"} />
      </div>
    </div>
  );
}
