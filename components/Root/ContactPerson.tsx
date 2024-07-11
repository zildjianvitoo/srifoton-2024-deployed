import CardCrook from "./CardCrook";
import Image from "next/image";
import React, { ReactNode, Children, isValidElement, useState, useRef, cloneElement, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SquareCheckBig } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Whatsapp } from "@/lib/icon";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500']});

export default function ContactPerson() {
  return(
    <section className="grid justify-items-center gap-20 w-[83.3vw] mx-auto">
      <SectionHeader text="contact person"></SectionHeader>
      <div className="gap-20 flex">
        <Link href="/">
          <Button
            variant="outline2"
            size="default2"
            className="!px-[100px] !py-10 grid justify-items-between gap-6"
          >
            <p className="text-[42px] !leading-[120%]">PUTRI<br />VALENCIA</p>
            <div className="flex gap-6 mx-auto">
              <Whatsapp fill="black" strokeFill="black" width="49" height="49"/>
              <p className={`${poppins.className} text-[35px] pt-3`}>0800-0000-0000</p>
            </div>
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline2"
            size="default2"
            className="!px-[100px] !py-10 grid justify-items-between gap-6"
          >
            <p className="text-[42px] !leading-[120%]">PUTRI<br />VALENCIA</p>
            <div className="flex gap-6 mx-auto">
              <Whatsapp fill="black" strokeFill="black" width="49" height="49"/>
              <p className={`${poppins.className} text-[35px] pt-3`}>0800-0000-0000</p>
            </div>
          </Button>
        </Link>
      </div>
    </section>
  )
}