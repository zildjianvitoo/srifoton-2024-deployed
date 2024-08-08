"use client";

import CardCrook from "./CardCrook";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement, useState, useRef, cloneElement, ReactElement, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { FaWhatsapp } from "react-icons/fa";
import { RiLineLine } from "react-icons/ri";
import { Poppins } from "next/font/google";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const poppins = Poppins({ subsets: ['latin'], weight: ['500']});

type ContactPersonProps = {
  id ?: string,
  className ?: string,
  contactPerson1 ?: string | ReactNode,
  WA1 ?: string,
  Line1 ?: string,
  contactPerson2 ?: string | ReactNode,
  WA2 ?: string,
  Line2 ?: string,
}

export default function ContactPerson({id, className, contactPerson1, contactPerson2, WA1, WA2, Line1, Line2} : ContactPersonProps) {
  const [colorState1, setColorState1] = useState("white");
  const [onHover1, setHoverState1] = useState(false);
  const [colorState2, setColorState2] = useState("white");
  const [onHover2, setHoverState2] = useState(false);
  const [logoSize, setLogoSize] = useState("2vw");
  const {width} = useWindowDimensions();

  useEffect(() => {onHover1 ? setColorState1("black") : setColorState1("white")}, [onHover1]);
  useEffect(() => {onHover2 ? setColorState2("black") : setColorState2("white")}, [onHover2]);
  useEffect(() => {width >= 640 ? setLogoSize("2vw") : width >= 440 ? setLogoSize("20px") : setLogoSize("5vw")}, []);

  return(
    <section className="grid justify-items-center gap-20 w-full mx-auto">
      <div className="w-[78%] mx-auto">
        <SectionHeader text="CONTACT PERSON"/>
      </div>
      <div className="gap-[4.17vw] flex flex-col sm:flex-row">
        {contactPerson1 &&
          <Link href="#">
            <Button
              onMouseEnter={() => setHoverState1(true)}
              onMouseLeave={() => setHoverState1(false)}
              variant="outline2"
              size="default2"
              className="w-full sm:w-[31vw] h-full !px-[25px] !py-5 lg:!px-[50px] lg:!py-10 grid justify-items-between gap-3 lg:gap-6"
            >
              <p className="text-base sm:text-[2.1875vw] !leading-[120%] capitalize">{contactPerson1}</p>
              <div className="flex justify-between gap-2 mx-auto">
                <FaWhatsapp  fill={colorState1} size={logoSize}/>
                <p className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw] text-start`}>{WA1}</p>
              </div>
              <div className="flex justify-between gap-2 mx-auto">
                <RiLineLine fill={colorState1} size={logoSize}/>
                <p className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}>{Line1}</p>
              </div>
            </Button>
          </Link>
        }
        {contactPerson2 &&
          <Link href="#">
            <Button
              onMouseEnter={() => setHoverState2(true)}
              onMouseLeave={() => setHoverState2(false)}
              variant="outline2"
              size="default2"
              className="w-full sm:w-[31vw] h-full !px-[25px] !py-5 lg:!px-[50px] lg:!py-10 grid justify-items-between gap-3 lg:gap-6"
            >
              <p className="text-base sm:text-[2.1875vw] !leading-[120%] capitalize">{contactPerson2}</p>
              <div className="flex justify-between gap-2 mx-auto">
                  <FaWhatsapp  fill={colorState2} size={logoSize}/>
                  <p className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw] text-start`}>{WA2}</p>
                </div>
                <div className="flex justify-between gap-2 mx-auto">
                  <RiLineLine fill={colorState2} size={logoSize}/>
                  <p className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}>{Line2}</p>
                </div>
            </Button>
          </Link>
        }
      </div>
    </section>
  )
}