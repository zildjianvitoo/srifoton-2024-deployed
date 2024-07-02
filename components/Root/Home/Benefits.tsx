import SectionHeader from "../SectionHeader";
import Image from "next/image";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative mt-40 px-8 text-primary md:px-12 lg:px-20 xl:px-[7rem]"
    >
      <SectionHeader text="benefits" />
      <div className="mt-20 flex flex-col gap-6 md:flex-row">
        <div className="w-full content-center bg-primary py-10 md:w-1/3">
          <Image
            src={"/img/benefit1.png"}
            alt="benefit-1"
            width={1000}
            height={1000}
            className="mx-auto w-2/3"
          />
          <h3 className="mt-5 text-center font-monument text-lg text-background">
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
          <h3 className="mt-5 text-center font-monument text-lg text-background">
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
          <h3 className="mt-5 text-center font-monument text-lg text-background">
            Motivasi dan <br /> Inspirasi
          </h3>
        </div>
      </div>
      <Image
        src={"/img/dog-footprints.png"}
        alt="dog-footprints"
        width={1000}
        height={1000}
        className="absolute right-[25%] top-[96%] w-[80%] md:right-[60%] md:top-[85%] md:w-[40%]"
      />
    </section>
  );
}
