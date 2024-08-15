import React from "react";
import SectionContent from "../SectionContent";
import Image from "next/image";

export default function Categories() {
  return (
    <section id="categories">
      <figure className="">
        <Image
          src={"/img/dangerline1.png"}
          alt="dangerline"
          width={1000}
          height={1000}
          className="absolute left-0 z-0 mt-[120px] w-[120vw]"
        />
      </figure>
      <figure className="">
        <Image
          src={"/img/dangerline2.png"}
          alt="dangerline"
          width={1000}
          height={1000}
          className="absolute left-0 z-0 mt-[420px] w-[100vw]"
        />
      </figure>
      <figure className="">
        <Image
          src={"/img/dangerline1.png"}
          alt="dangerline"
          width={1000}
          height={1000}
          className="absolute left-0 z-0 mt-[980px] w-[110vw]"
        />
      </figure>
      <div className="flex flex-col gap-8 text-primary md:gap-16">
        <h3 className="font-monument text-lg uppercase md:text-xl lg:text-3xl xl:text-4xl">
          WHAT WE PRESENT
        </h3>
        <div className="flex flex-col items-center gap-[5%] md:flex-row">
          <div className="z-10 aspect-[585/518] w-2/5 min-w-[40%] content-center">
            <Image
              src={"/img/competition-logo-2.JPG"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className=""
            />
          </div>
          <SectionContent
            header="competititon"
            className="bg-black-300"
            href="/competition"
          >
            Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
            para peserta yang memiliki minat dan bakat pada bidang teknologi
            khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
            acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
            sama, dan unjuk kemampuan peserta.
          </SectionContent>
        </div>
        <div className="flex flex-col items-center gap-[5%] md:flex-row">
          <SectionContent
            header="workshop"
            className="bg-black-300"
            href="/workshop"
          >
            Workshop SRIFOTON, yang menghadirkan instruktur berkompeten di
            bidangnya, bertema &quot;Kickstart Your Web Development
            Journey&quot; dengan pembekalan materi pemrograman dan live coding
            untuk pengembangan situs web dasar.
          </SectionContent>
          <div className="z-10 order-first aspect-[585/518] w-2/5 min-w-[40%] md:order-last">
            <Image
              src={"/img/workshop-logo-2.png"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[5%] md:flex-row">
          <div className="z-10 aspect-[585/518] w-2/5 min-w-[40%] content-center">
            <Image
              src={"/img/talkshow-logo-2.png"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className=""
            />
          </div>
          <SectionContent
            header="talkshow"
            className="bg-black-300"
            href="/talkshow"
          >
            Talkshow SRIFOTON mengangkat tema &quot;Effective Ways to Build and
            Maintain a Personal Brand in the Digital Era,&quot; dengan fokus
            pada membangun personal branding digital, membentuk citra positif di
            media sosial, dan pengaruh personal branding terhadap kehidupan
            profesional.
          </SectionContent>
        </div>
      </div>
    </section>
  );
}
