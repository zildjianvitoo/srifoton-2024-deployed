"use client";

import Jam from "./Jam";
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
    <div className="font-monument text-center mb-30 text-[#24221E]">
      <div className="bg-[#919C9D] w-[50rem] h-[28rem] rotate-[5deg] absolute left-[23rem] z-0"></div>
      <div className="bg-[#FFF9F1] w-[50rem] h-[28rem] absolute left-[23rem] z-10"></div>
      <h3 className=" text-[#24221E] border-b-4 border-[#7E8889] inline-block align-top py-8 text-md mb-5 md:text-3xl md:mb-10 lg:text-[2rem] lg:mb-10 xl:mb-[5rem] relative z-10">
        <strong>OPENING CEREMONY</strong>
      </h3>
      <div
        className="mx-auto flex justify-evenly items-center py-2 relative z-20
                      text-sm w-[13rem] mb-20
                      md:text-2xl md:w-[23rem] 
                      lg:text-2xl lg:w-[40rem] lg:mb-20"
      >
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
