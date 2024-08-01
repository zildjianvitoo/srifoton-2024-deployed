import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="xxs:mb-10 flex flex-col items-center justify-center bg-center text-center font-monument text-primary">
        <figure>
          <Image
            src="/img/dangerline.png"
            alt="danger-line"
            className="object-contain"
            quality={100}
            loading="eager"
            fill
          />
        </figure>
        <figure>
          <Image
            src="/img/dangerline1.png"
            alt="danger-line"
            className="object-contain -mt-[10vw]"
            quality={100}
            loading="eager"
            fill
          />
        </figure>
        <div className="translate-y-[10%]">
          <h1 className="
            text-stroke-5 relative text-text-300
            text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[200px]">
            <strong>SRIFOTON</strong>
          </h1>
          <Image src="/img/gallery1.png" alt="srifoton 2024" width={534} height={467} className="
            relative aspect-[460/456] flex self-end mx-auto w-[23.95vw] object-contain
            bottom-[7rem] md:bottom-[11rem] lg:bottom-[16rem] 2xl:bottom-[23rem]"></Image>
          <h1 className="
          text-stroke-5 relative z-10 text-text-300
          text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[200px]
          bottom-[8.5rem] md:bottom-[14rem] lg:bottom-[20rem] 2xl:bottom-[31rem]">
            <strong>2024</strong>
          </h1>
        </div>
      </div>
    </section>
  );
}
