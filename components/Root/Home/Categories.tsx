import React from "react";
import SectionContent from "../SectionContent";
import Image from "next/image";

export default function Categories() {
  return (
    <section id="categories">
      <div className="flex">
        <figure className="order-2">
          <Image
            src={"/img/dangerline1.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[120vw] left-0 mt-[120px]"
          />
        </figure>
        <figure className="order-3">
          <Image
            src={"/img/dangerline2.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[100vw] left-0 mt-[420px]"
          />
        </figure>
        <figure className="order-4">
          <Image
            src={"/img/dangerline1.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[110vw] left-0 mt-[980px]"
          />
        </figure>
        <div className="text-primary flex flex-col gap-8 md:gap-16 order-1">
          <h3 className="font-monument text-lg uppercase md:text-xl lg:text-3xl xl:text-4xl">
            WHAT WE PRESENT
          </h3>
          <div className="gap-[5%] flex flex-col items-center md:flex-row">
            <div className="aspect-[585/518] min-w-[40%] w-2/5 bg-primary"></div>
            <SectionContent header="competititon" className="bg-black-300">
              Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
              para peserta yang memiliki minat dan bakat pada bidang teknologi
              khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
              acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
              sama, dan unjuk kemampuan peserta.
            </SectionContent>
          </div>
          <div className="gap-[5%] flex flex-col items-center md:flex-row">
            <SectionContent header="workshop" className="bg-black-300">
              Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
              para peserta yang memiliki minat dan bakat pada bidang teknologi
              khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
              acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
              sama, dan unjuk kemampuan peserta.
            </SectionContent>
            <div className="aspect-[585/518] order-first md:order-1 min-w-[40%] w-2/5">
              <Image
                src={"/img/workshop-logo-2.png"}
                alt="benefit-2"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>
          <div className="gap-[5%] flex flex-col items-center md:flex-row">
            <div className="aspect-[585/518] min-w-[40%] w-2/5 bg-primary"></div>
            <SectionContent header="talkshow" className="bg-black-300">
              Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
              para peserta yang memiliki minat dan bakat pada bidang teknologi
              khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
              acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
              sama, dan unjuk kemampuan peserta.
            </SectionContent>
          </div>
        </div>
      </div>
    </section>
  );
}
