import React from "react";
import SectionContent from "../SectionContent";
import Image from "next/image";

export default function  Categories() {
  return (
    <section id="categories">
        <figure className="">
          <Image
            src={"/img/dangerline1.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[120vw] left-0 mt-[120px] z-0"
          />
        </figure>
        <figure className="">
          <Image
            src={"/img/dangerline2.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[100vw] left-0 mt-[420px] z-0"
          />
        </figure>
        <figure className="">
          <Image
            src={"/img/dangerline1.png"}
            alt="dangerline"
            width={1000}
            height={1000}
            className="absolute w-[110vw] left-0 mt-[980px] z-0"
          />
        </figure>
        <div className="text-primary flex flex-col gap-8 md:gap-16">
          <h3 className="font-monument text-lg uppercase md:text-xl lg:text-3xl xl:text-4xl">
            WHAT WE PRESENT
          </h3>
          <div className="gap-[5%] flex flex-col items-center md:flex-row">
            <div className="aspect-[585/518] min-w-[40%] w-2/5 bg-primary z-10"></div>
            <SectionContent header="competititon" className="bg-black-300" href="/competition">
              Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi para peserta yang memiliki minat dan bakat pada bidang teknologi khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu, acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja sama, dan unjuk kemampuan peserta.
            </SectionContent>
          </div>
          <div className="gap-[5%] flex flex-col items-center md:flex-row">
            <SectionContent header="workshop" className="bg-black-300" href="/workshop">
              Workshop SRIFOTON, yang menghadirkan instruktur berkompeten di bidangnya, bertema "Kickstart Your Web Development Journey" dengan pembekalan materi pemrograman dan live coding untuk pengembangan situs web dasar.
            </SectionContent>
            <div className="aspect-[585/518] order-first md:order-last min-w-[40%] w-2/5 z-10">
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
            <div className="aspect-[585/518] min-w-[40%] w-2/5 bg-primary z-10"></div>
            <SectionContent header="talkshow" className="bg-black-300" href="/talkshow">
              Talkshow SRIFOTON mengangkat tema "Effective Ways to Build and Maintain a Personal Brand in the Digital Era," dengan fokus pada membangun personal branding digital, membentuk citra positif di media sosial, dan pengaruh personal branding terhadap kehidupan profesional.
            </SectionContent>
          </div>
        </div>
    </section>
  );
}
