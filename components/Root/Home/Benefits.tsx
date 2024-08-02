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
        <div className="hidden gap-[5%] lg:flex text-2xl">
          <div className="w-full content-center bg-primary py-10 md:w-1/3">
            <Image
              src={"/img/benefit1.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-2/3"
            />
            <h3 className="mt-5 text-center font-monument text-background">
              Pengembangan <br /> Keterampilan
            </h3>
          </div>
          <div className="w-full content-center bg-primary py-10 md:w-1/3">
            <Image
              src={"/img/benefit2.png"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className="mx-auto w-3/4"
            />
            <h3 className="mt-5 pt-5 text-center font-monument text-background">
              Jaringan dan <br /> Kolaborasi
            </h3>
          </div>
          <div className="w-full bg-primary py-10 md:w-1/3">
            <Image
              src={"/img/benefit3.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-1/2"
            />
            <h3 className="mt-5 text-center font-monument text-background">
              Motivasi dan <br /> Inspirasi
            </h3>
          </div>
        </div>
        <Image
          src={"/img/dog-footprints.png"}
          alt="dog-footprints"
          width={1000}
          height={1000}
          className="absolute left-[-9%] w-[80%] top-[82%] lg:top-[90%] md:w-[40%]"
        />
      </div>
    </section>
  );
}
