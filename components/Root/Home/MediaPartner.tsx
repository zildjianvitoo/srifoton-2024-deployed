import React from "react";
import Image from "next/image";
import CardCrook from "../CardCrook.v2";
import SectionHeader from "../SectionHeader";

export default function MediaPartner() {
  return (
    <section id="media-partner">
      <figure className="">
        <Image
          src={"/img/footprints3.png"}
          alt="footprints"
          width={1000}
          height={1000}
          className="absolute right-0 mt-[5vw] w-[30vw] md:w-[20vw] lg:w-[20vw]"
          // style={{transform: "rotate(35deg)"}}
        />
      </figure>
      <div className="mt-16 flex w-full flex-col md:mt-20 2xl:mt-[10vw]">
        <div className="mx-auto mb-[3vw] w-[70%]">
          <SectionHeader text="media partner" />
        </div>
        <CardCrook outerClassName="mt-20 !w-full" innerClassName="h-80 p-6">
          <figure className="flex flex-col justify-between">
            <div className="flex items-center gap-4 overflow-x-auto">
              <Image
                src={"/img/Medpar/Aiesec blue .png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Aiesec white blue.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Edaran Event.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/GDSC UNSRI.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/HIMATIK LOGO.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/HMDTIF.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/HMP-TI.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Ikut Event Transparent.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/LOGO BEM.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/LOGO HIMATIF.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/LOGO HIMDIKO.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/logo hmifunsoed.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/LOGO IMATEK.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
            </div>
            <div className="flex items-center gap-4 overflow-x-auto">
              <Image
                src={"/img/Medpar/logo imkom .png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/logo nac.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Logo New Himtika.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Logo SEESPA UNSRI.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Logo WIFI Fasilkom Unsri.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Lomba Nasional.jpg"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/MAIN-LOGO.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/NAC.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/BEM FKIP.jpg"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/Satarupa Mada.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
              <Image
                src={"/img/Medpar/USM.png"}
                alt="dangerline"
                width={1000}
                height={1000}
                className="w-20"
              />
            </div>
          </figure>
        </CardCrook>
      </div>
    </section>
  );
}
