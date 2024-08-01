"use client";

import CardCrook from "./CardCrook";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement, useState, useRef, cloneElement, ReactElement, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { Whatsapp } from "@/lib/icon";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500']});

export default function ContactPerson() {
  var [colorState1, setColorState1] = useState("white");
  var [onHover1, setHoverState1] = useState(false);
  var [colorState2, setColorState2] = useState("white");
  var [onHover2, setHoverState2] = useState(false);

  useEffect(() => {onHover1 ? setColorState1("black") : setColorState1("white")}, [onHover1]);
  useEffect(() => {onHover2 ? setColorState2("black") : setColorState2("white")}, [onHover2]);

  return(
    <section className="grid justify-items-center gap-20 w-full mx-auto">
      <div className="w-[78%] mx-auto">
        <SectionHeader text="CONTACT PERSON"/>
      </div>
      <div className="gap-[4.17vw] flex">
        <Link href="/">
          <Button
            onMouseEnter={() => setHoverState1(true)}
            onMouseLeave={() => setHoverState1(false)}
            variant="outline2"
            size="default2"
            className="!px-[50px] !py-5 lg:!px-[100px] lg:!py-10 grid justify-items-between gap-3 lg:gap-6"
          >
            <p className="text-[2.1875vw] !leading-[120%]">PUTRI<br />VALENCIA</p>
            <div className="flex justify-between gap-2 mx-auto">
              <Whatsapp fill={colorState1} strokeFill={colorState1} width="2vw" height="2vw"/>
              <p className={`${poppins.className} text-[1.823vw] lg:pt-[0.3125vw]`}>0800-0000-0000</p>
            </div>
          </Button>
        </Link>
        <Link href="/">
          <Button
            onMouseEnter={() => setHoverState2(true)}
            onMouseLeave={() => setHoverState2(false)}
            variant="outline2"
            size="default2"
            className="!px-[50px] !py-5 lg:!px-[100px] lg:!py-10 grid justify-items-between gap-3 lg:gap-6"
          >
            <p className="text-[2.1875vw] !leading-[120%]">PUTRI<br />VALENCIA</p>
            <div className="flex justify-between gap-2 mx-auto">
              <Whatsapp fill={colorState2} strokeFill={colorState2} width="2vw" height="2vw"/>
              <p className={`${poppins.className} text-[1.823vw] lg:pt-[0.3125vw]`}>0800-0000-0000</p>
            </div>
          </Button>
        </Link>
      </div>
    </section>
  )
}