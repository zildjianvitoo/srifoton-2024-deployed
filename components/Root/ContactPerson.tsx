"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { FaWhatsapp } from "react-icons/fa";
import { RiLineLine } from "react-icons/ri";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

type ContactPersonProps = {
  id?: string;
  className?: string;
  contactPerson1?: string | ReactNode;
  WA1?: string;
  Line1?: string;
  WaHref1?: string;
  LineHref1?: string;
  contactPerson2?: string | ReactNode;
  WA2?: string;
  Line2?: string;
  WaHref2?: string;
  LineHref2?: string;
};

export default function ContactPerson({
  contactPerson1,
  contactPerson2,
  WA1,
  WA2,
  Line1,
  Line2,
  WaHref1,
  WaHref2,
  LineHref1,
  LineHref2,
}: ContactPersonProps) {
  return (
    <section className="mx-auto grid w-full justify-items-center gap-20">
      <div className="mx-auto w-[78%]">
        <SectionHeader text="CONTACT PERSON" />
      </div>

      <div className="flex flex-col gap-[4.17vw] sm:flex-row">
        {contactPerson1 && (
          <div className="justify-items-between grid h-full w-full gap-3 border-4 border-primary-100 bg-background !px-[25px] !py-5 font-monument text-[] text-primary-100 hover:bg-primary-100 hover:text-text-300 sm:w-[31vw] lg:gap-6 lg:!px-[50px] lg:!py-10">
            <p className="text-center text-base capitalize !leading-[120%] sm:text-[2.1875vw]">
              {contactPerson1}
            </p>
            <div className="mx-auto flex justify-between gap-2 hover:border-b-2 hover:border-background">
              <FaWhatsapp className="text-lg sm:text-xl lg:text-2xl" />
              <a
                href={WaHref1}
                target="_blank"
                rel="noopener noreferrer"
                className={`${poppins.className} pb-2 text-start text-sm hover:border-b-2 sm:text-[1.823vw] lg:pt-[0.3125vw]`}
              >
                {WA1}
              </a>
            </div>
            <div className="mx-auto flex items-center justify-between gap-2 hover:border-b-2 hover:border-background">
              <RiLineLine className="text-lg sm:text-xl lg:text-2xl" />
              <a
                href={LineHref1}
                target="_blank"
                rel="noopener noreferrer"
                className={`${poppins.className} pb-2 text-start text-sm hover:border-b-2 sm:text-[1.823vw] lg:pt-[0.3125vw]`}
              >
                {Line1}
              </a>
            </div>
          </div>
        )}
        {contactPerson2 && (
          <div className="justify-items-between grid h-full w-full gap-3 border-4 border-primary-100 bg-background !px-[25px] !py-5 font-monument text-[] text-primary-100 hover:bg-primary-100 hover:text-text-300 sm:w-[31vw] lg:gap-6 lg:!px-[50px] lg:!py-10">
            <p className="text-center text-base capitalize !leading-[120%] sm:text-[2.1875vw]">
              {contactPerson2}
            </p>
            <div className="mx-auto flex justify-between gap-2 hover:border-b-2 hover:border-background">
              <FaWhatsapp className="text-lg sm:text-xl lg:text-2xl" />
              <a
                href={WaHref2}
                target="_blank"
                rel="noopener noreferrer"
                className={`${poppins.className} pb-2 text-start text-sm hover:border-b-2 sm:text-[1.823vw] lg:pt-[0.3125vw]`}
              >
                {WA2}
              </a>
            </div>
            <div className="mx-auto flex items-center justify-between gap-2 hover:border-b-2 hover:border-background">
              <RiLineLine className="text-lg sm:text-xl lg:text-2xl" />
              <a
                href={LineHref2}
                target="_blank"
                rel="noopener noreferrer"
                className={`${poppins.className} pb-2 text-start text-sm hover:border-b-2 sm:text-[1.823vw] lg:pt-[0.3125vw]`}
              >
                {Line2}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
