import React from "react";
import SectionContent from "../SectionContent";
import Image from "next/image";

export default function Categories() {
  return (
    <section id="categories">
      <figure className="flex">
      <Image
        src={"/img/dangerline1.png"}
        alt="dangerline"
        width={1000}
        height={1000}
        className="absolute w-[120vw] order-last left-0 mt-[120px]"
      />
      </figure>
      <figure className="flex">
      <Image
        src={"/img/dangerline.png"}
        alt="dangerline"
        width={1000}
        height={1000}
        className="absolute w-[115vw] order-last left-0 -ml-[6vw] mt-[780px] !max-w-[200%]"
        style={{transform: "rotate(14deg)"}}
      />
      </figure>
      <figure className="flex">
      <Image
        src={"/img/dangerline1.png"}
        alt="dangerline"
        width={1000}
        height={1000}
        className="absolute w-[110vw] order-last left-0 mt-[980px]"
      />
      </figure>
      <div className="text-primary flex flex-col gap-8 md:gap-16">
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
    </section>
  );
}
