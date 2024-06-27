"use client";

import Time from "./Time";
import Template from "./Template";
import  countdown  from "@/lib/countdown";

function DoubleDot() {
  return <span className="text-xl md:text-3xl lg:text-5xl xl:text-6xl mx-1 md:mx-3 lg:mx-4 xl:mx-5">:</span>
}


export default function Countdown() {

  let {days, hours, minutes, seconds} = countdown();

  return (
    <Template className="flex flex-col items-center justify-center text-center">
        <h3 className=" text-background align-top text-[.6rem] md:text-lg lg:text-2xl xl:text-4xl">
          OPENING CEREMONY
          <div className="border-2 md:h-1 bg-[#868365] border-[#868365] rounded-md mt-1 md:mt-3 lg:mt-4 xl:mt-5"></div>
        </h3>
        <div
          className="mx-auto flex justify-center items-center mt-5 md:mt-10 lg:mt-16 xl:mt-20"
        >
          <Time value={days} desc={"Hari"} />
          <DoubleDot />
          <Time value={hours} desc={"Jam"} />
          <DoubleDot />
          <Time value={minutes} desc={"Menit"} />
          <DoubleDot />
          <Time value={seconds} desc={"Detik"} />
        </div>
          
    </Template>
  );
}
