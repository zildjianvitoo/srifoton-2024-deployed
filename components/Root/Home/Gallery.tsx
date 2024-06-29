import SectionHeader from "../SectionHeader";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mt-40 flex flex-col items-center justify-center px-8 text-primary md:px-12 lg:flex-row lg:ps-20 xl:ps-[7rem]"
    >
      <div className="relative mx-auto border-4 border-[#868365] p-6 pt-8 md:p-8 md:pt-12 lg:w-[60%] xl:p-10 xl:pt-16">
        {/* maaf kak di bagian ini masih bingung carony kek mano */}
        {/* <figure>
          <Image
            src="/img/footprints.png"
            alt="footprints"
            width={500}
            height={500}
            className="absolute left-[28rem] z-0 w-56"
          />
        </figure> */}
        <div className="font-monument text-sm uppercase md:text-2xl xl:text-3xl">
          <h3 className="inline">What is SRI</h3>
          <h3 className="inline text-[#868365]">FOTON</h3>
          <h3 className="inline">?</h3>
        </div>

        <p className="xl:text-md mt-4 text-justify text-xs md:mt-6 md:text-sm xl:mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo
        </p>
      </div>
      <div className="lg:ms-20 lg:w-[40%]">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-1/2">
              <figure>
                <Image
                  src={"/img/gallery1.png"}
                  alt="galllery-1"
                  width={100}
                  height={100}
                  className="w-full border-4 border-[#868365]"
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <figure>
                <Image
                  src={"/img/gallery2.png"}
                  alt="galllery-2"
                  width={100}
                  height={100}
                  className="w-full border-2 border-[#868365]"
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <figure>
                <Image
                  src={"/img/gallery1.png"}
                  alt="galllery-1"
                  width={100}
                  height={100}
                  className="w-full border-4 border-[#868365]"
                />
              </figure>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="mx-auto lg:w-4/5">
          <SectionHeader text={"our Gallery"} />
        </div>
      </div>
    </section>
  );
}
