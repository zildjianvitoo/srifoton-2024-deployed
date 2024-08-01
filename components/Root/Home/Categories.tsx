import React from "react";
import SectionContent from "../SectionContent";

export default function Categories() {
  return (
    <section id="categories">
      <div className="mt-40 px-8 text-primary md:px-12 lg:px-20 xl:px-[7rem]">
        <h3 className="font-monument text-lg uppercase md:text-xl lg:text-3xl xl:text-4xl">
          WHAT WE PRESENT
        </h3>
        <div className="mt-32 flex flex-col items-center md:flex-row">
          <div className="h-[25rem] w-full bg-primary md:w-2/5"></div>
          <SectionContent header="competititon" className="mt-10 h-[20rem]">
            Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
            para peserta yang memiliki minat dan bakat pada bidang teknologi
            khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
            acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
            sama, dan unjuk kemampuan peserta.
          </SectionContent>
        </div>
        <div className="mt-32 flex flex-col-reverse items-center md:flex-row">
          <SectionContent header="workshop" className="mt-10 h-[20rem]">
            Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi
            para peserta yang memiliki minat dan bakat pada bidang teknologi
            khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu,
            acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja
            sama, dan unjuk kemampuan peserta.
          </SectionContent>
          <div className="h-[25rem] w-full bg-primary md:w-2/5"></div>
        </div>
        <div className="mt-32 flex flex-col items-center md:flex-row">
          <div className="h-[25rem] w-full bg-primary md:w-2/5"></div>
          <SectionContent header="talkshow" className="mt-10 h-[20rem]">
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
