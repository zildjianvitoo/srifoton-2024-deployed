import "./IDcard.css";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {id?: string, title: string, name: string, src1: string, src2: string, children: ReactNode};

export default function IDcard({id, title, name, src1, src2, children}: Props) {

  return(
    <section className="flex flex-col justify-center w-min mx-auto gap-16">
      <SectionHeader text={title} />
      <section
        id={id} className="flip-card w-[1208px] h-[615px]"
      >
        <div className="flip-card-inner font-monument text-black">
          <div className="flip-card-front rounded-[30px] bg-[#fff9f1] uppercase">
            <Image src={src2} alt="Avatar" width={276} height={244} className="min-w-[276px] min-h-[244px] right-12 top-11 absolute z-10"/>
            <div className="w-full h-[198px] absolute top-0 left-0 bg-[#868365] rounded-t-[30px]"></div>
            <div className="w-full h-5 absolute top-[210px] left-0 bg-[#868365]"></div>
            <div className="absolute grid justify-items-center top-7 left-12">
              <p className="text-[90px] text-white -my-3.5">it speaker</p>
              <p className="text-white text-3xl capitalize">Sriwijaya Informatics Exhibition</p>
            </div>
            <div className="absolute flex w-full h-[385px] bottom-0 pt-8 pb-11 px-[50px] gap-9">
              <Image src={src1} alt="Avatar" width={309} height={309} className="min-w-[309px] min-h-[309px]"/>
              <div className="grid grid-cols-1 w-full h-full place-content-start place-items-start">
                <p className="text-xl mb-2.5">NAME</p>
                <p className="text-4xl mb-[35px]">{name}</p>
                <p className="text-xl mb-2.5">LICENSE ID</p>
                <p className="text-4xl mb-[35px]">SRIFOTON2024</p>
                <Image src="/img/barcode1.png" alt="Avatar" style={{width:"735px", height:"83px"}} width={735} height={83} className=""/>
              </div>
            </div>
          </div>
          <div className="flip-card-back rounded-[30px] pt-12 pb-10 bg-[#fff9f1] grid justify-items-center">
            <Image src={src1} alt="Avatar" width={200} height={200} className="min-w-[200px] min-h-[200px] mb-8"/>
            <p className="uppercase text-4xl mb-4">{name}</p>
            <p className="font-ponnala mx-11 text-2xl text-justify mb-4">{children}</p>
            <div className="bg-[#1D1C19] h-[70px] w-full"></div>
          </div>
        </div>
      </section>
    </section>
  )
}