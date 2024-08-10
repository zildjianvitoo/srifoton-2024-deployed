import SectionHeader from "../SectionHeader";
import Image from "next/image";
import BenefitCarousel from "./BenefitCarousel";

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="relative text-primary">
        <div className="mx-[20%] mb-8 lg:mb-20">
          <SectionHeader text="benefits" />
        </div>
        <BenefitCarousel className="lg:hidden" />
        <div className="hidden gap-[5%] text-2xl lg:flex">
          <div className="group relative w-full content-center bg-primary py-10 hover:content-start md:w-1/3">
            <Image
              src={"/img/benefit1.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-2/3 duration-300 ease-out hover:ease-in group-hover:w-1/4"
            />
            <h3 className="mt-5 text-center font-monument text-2xl text-background duration-700 ease-out hover:ease-in group-hover:text-base">
              Pengembangan <br /> Keterampilan
            </h3>
            <p className="absolute top-[100%] px-6 text-center text-sm text-background duration-1000 ease-out hover:ease-in group-hover:top-[50%] xl:text-xl">
              Melalui kompetisi dan workshop, peserta dapat mengasah
              keterampilan mereka dalam berbagai bidang, memperoleh pengetahuan
              praktis, dan belajar langsung dari para ahli.
            </p>
          </div>
          <div className="group relative w-full content-center bg-primary py-10 hover:content-start md:w-1/3">
            <Image
              src={"/img/benefit2.png"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className="mx-auto w-3/4 duration-300 ease-out hover:ease-in group-hover:w-1/3"
            />
            <h3 className="mt-5 text-center font-monument text-2xl text-background duration-700 ease-out hover:ease-in group-hover:mt-1 group-hover:text-base">
              Jaringan dan <br /> Kolaborasi
            </h3>
            <p className="absolute top-[100%] px-6 text-center text-sm text-background duration-1000 ease-out hover:ease-in group-hover:top-[50%] xl:text-xl">
              Talkshow dan kesempatan networking selama acara memungkinkan
              peserta untuk memperluas jaringan profesional, bertukar ide, dan
              menemukan peluang kolaborasi di masa depan.
            </p>
          </div>
          <div className="group relative w-full content-center bg-primary py-10 hover:content-start md:w-1/3">
            <Image
              src={"/img/benefit3.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-1/2 duration-300 ease-out hover:ease-in group-hover:w-1/5"
            />
            <h3 className="mt-5 text-center font-monument text-2xl text-background duration-700 ease-out hover:ease-in group-hover:mt-1 group-hover:text-base">
              Motivasi dan <br /> Inspirasi
            </h3>
            <p className="absolute top-[100%] px-6 text-center text-sm text-background duration-1000 ease-out hover:ease-in group-hover:top-[50%] xl:text-xl">
              Mendengarkan kisah sukses dan tantangan yang dihadapi oleh para
              pembicara memberikan inspirasi dan motivasi, sementara lingkungan
              kompetitif dan edukatif mendorong peserta untuk terus meningkatkan
              diri.
            </p>
          </div>
        </div>
        <Image
          src={"/img/dog-footprints.png"}
          alt="dog-footprints"
          width={1000}
          height={1000}
          className="absolute left-[-9%] top-[82%] w-[80%] md:w-[40%] lg:top-[90%]"
        />
      </div>
    </section>
  );
}
