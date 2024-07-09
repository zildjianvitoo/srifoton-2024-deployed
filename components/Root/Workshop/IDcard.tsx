import "./IDcard.css";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {id?: string, title: string, name: string, src1: string, src2: string, children: ReactNode};

export default function IDcard({id, title, name, src1, src2, children}: Props) {

  return(
    <section className="flex flex-col justify-center w-[63%] mx-auto gap-[3.44vw]">
      <SectionHeader text={title} />
      <section
        id={id} className="flip-card aspect-[1208/615]"
      >
        <div className="flip-card-inner font-monument text-black">
          <div className="flip-card-front flex rounded-[1.5625vw] bg-[#fff9f1] uppercase">
            <Image src={src2} alt="Avatar" width={276} height={244} className="aspect-[276/244] object-cover !max-w-[22.848%] !right-[3.642%] !top-[7.8%] absolute z-10"/>
            <div className="aspect-[1208/198] w-full absolute top-0 left-0 bg-[#868365] rounded-t-[1.5625vw]"></div>
            <div className="aspect-[1208/20] w-full absolute top-[34.15%] left-0 bg-[#868365]"></div>
            <div className="absolute grid text-white justify-items-center top-[4.39%] left-[3.973%]">
              <p className="text-[4.5vw] -my-[1.16%]">it speaker</p>
              <p className="text-[1.3vw] capitalize">Sriwijaya Informatics Exhibition</p>
            </div>
            <div className="aspect-[1208/385] relative self-end flex w-full pt-[2.5%] pb-[3%] px-[4.139%] gap-9">
              <Image src={src1} alt="Avatar" width={309} height={309} className="!w-[25.58%] object-cover bottom-0"/>
              <div className="grid grid-cols-1 relative w-full max-h-full place-content-start place-items-start">
                <p className="text-[1.05vw] !mb-[0.82%]">NAME</p>
                <p className="text-[2vw] !mb-[2.48%]">{name}</p>
                <p className="text-[1.05vw] !mb-[0.82%]">LICENSE ID</p>
                <p className="text-[2vw]">SRIFOTON2024</p>
                <Image src="/img/barcode1.png" alt="Avatar" width={735} height={83} className="aspect-[735/83] !w-[94.11%] absolute bottom-0"/>
              </div>
            </div>
          </div>
          <div className="flip-card-back rounded-[1.5625vw] !pt-[3.887%] !pb-[10.53%] bg-[#fff9f1] grid justify-items-center">
            <Image src={src1} alt="Avatar" width={200} height={200} className="!w-[16.55%] mb-[1.5%]"/>
            <p className="uppercase text-[1.822vw] mb-[1.5%]">{name}</p>
            <p className="font-ponnala mx-[3.64%] text-[1.3vw] leading-[120%] text-center mb-[1.5%]">{children}</p>
            <div className="absolute bg-[#1D1C19] h-[11.38%] w-full bottom-[3.311%]"></div>
          </div>
        </div>
      </section>
    </section>
  )
}