"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
  contactPerson2?: string | ReactNode;
  WA2?: string;
  Line2?: string;
};

export default function ContactPerson({
  id,
  className,
  contactPerson1,
  contactPerson2,
  WA1,
  WA2,
  Line1,
  Line2,
}: ContactPersonProps) {
  return (
    <section className="mx-auto grid w-full justify-items-center gap-20">
      <div className="mx-auto w-[78%]">
        <SectionHeader text="CONTACT PERSON" />
      </div>
      <div className="flex flex-col gap-[4.17vw] sm:flex-row">
        {contactPerson1 && (
          <Link href="#">
            <Button
              variant="outline2"
              size="default2"
              className="justify-items-between grid h-full w-full gap-3 !px-[25px] !py-5 sm:w-[31vw] lg:gap-6 lg:!px-[50px] lg:!py-10"
            >
              <p className="text-base capitalize !leading-[120%] sm:text-[2.1875vw]">
                {contactPerson1}
              </p>
              <div className="mx-auto flex justify-between gap-2">
                <FaWhatsapp className="text-lg sm:text-xl lg:text-2xl" />
                <p
                  className={`${poppins.className} text-start text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}
                >
                  {WA1}
                </p>
              </div>
              <div className="mx-auto flex items-center justify-between gap-2">
                <RiLineLine className="text-lg sm:text-xl lg:text-2xl" />
                <p
                  className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}
                >
                  {Line1}
                </p>
              </div>
            </Button>
          </Link>
        )}
        {contactPerson2 && (
          <Link href="#">
            <Button
              variant="outline2"
              size="default2"
              className="justify-items-between grid h-full w-full gap-3 !px-[25px] !py-5 sm:w-[31vw] lg:gap-6 lg:!px-[50px] lg:!py-10"
            >
              <p className="text-base capitalize !leading-[120%] sm:text-[2.1875vw]">
                {contactPerson2}
              </p>
              <div className="mx-auto flex justify-between gap-2">
                <FaWhatsapp className="text-lg sm:text-xl lg:text-2xl" />
                <p
                  className={`${poppins.className} text-start text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}
                >
                  {WA2}
                </p>
              </div>
              <div className="mx-auto flex items-center justify-between gap-2">
                <RiLineLine className="text-lg sm:text-xl lg:text-2xl" />
                <p
                  className={`${poppins.className} text-sm sm:text-[1.823vw] lg:pt-[0.3125vw]`}
                >
                  {Line2}
                </p>
              </div>
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
