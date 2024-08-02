import SectionHeader from "../SectionHeader";
import Image from "next/image";
import EmblaCarousel from "@/components/Root/Home/GalleryCarousel";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="-mt-8 lg:mt-8 flex flex-col lg:flex-row items-center justify-center text-primary">
        <div className="relative mx-auto border-4 border-shadow-200 p-6 pt-8 md:p-8 md:pt-12 lg:w-[60%] xl:p-10 xl:pt-16 order-last lg:order-first">
          <figure>
            <Image
              src="/img/footprints.png"
              alt="footprints"
              width={500}
              height={500}
              className="absolute bottom-[85%] left-[50%] z-0 hidden lg:block md:w-36 lg:bottom-[90%] lg:left-[60%] lg:w-36 xl:bottom-[80%] xl:w-56"
            />
          </figure>
          <div className="relative font-monument text-sm uppercase md:text-2xl lg:text-xl xl:text-2xl">
            <h3 className="inline">What is SRI</h3>
            <h3 className="inline text-shadow-200">FOTON</h3>
            <h3 className="inline">?</h3>
          </div>

          <p className="xl:text-md mt-4 text-justify text-xs md:mt-6 md:text-sm xl:mt-8">
            SRIFOTON (Sriwijaya Informatics Exhibition) 2024 adalah sebuah
            kompetisi nasional tahunan di bidang IT yang mewadahi mahasiswa IT
            seluruh Indonesia untuk mengembangkan serta menyalurkan minat dan
            bakat mereka dalam dunia IT. SRIFOTON 2024 mengusung tema “Digital
            Innovation for a Sustainable Future”. SRIFOTON 2024 mengadakan
            kompetisi serta workshop dan talkshow yang akan membahas mengenai
            Web Development dan Personal Branding di era digital.
          </p>
        </div>
        <div className="-mb-6 lg:-mb-0 mt-10 lg:ms-20 lg:mt-0 lg:w-[40%]">
          <EmblaCarousel />
          <div className="mx-auto lg:w-4/5 hidden lg:flex">
            <SectionHeader text={"our Gallery"} />
          </div>
        </div>
      </div>
    </section>
  );
}
