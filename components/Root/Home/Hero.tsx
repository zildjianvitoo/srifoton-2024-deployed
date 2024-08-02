import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="2xl:translate-y-[10%] mt-0 md:mt-10">
      <div className="flex flex-col items-center justify-center bg-center text-center font-monument text-primary">
        <figure className="absolute w-[100vw] -mt-[20%]">
          <Image
            src="/img/dangerline.png"
            alt="danger-line"
            className="!h-auto object-contain"
            quality={100}
            loading="eager"
            fill
          />
        </figure>
        <figure className="absolute w-[100vw] -mt-[45%]">
          <Image
            src="/img/dangerline1.png"
            alt="danger-line"
            className="!h-auto object-contain"
            quality={100}
            loading="eager"
            fill
          />
        </figure>
        <div className="relative">
          <h1 className="
            flex text-text-300
            srifoton-header-main">
            <strong>SRIFOTON</strong>
          </h1>
          <Image src="/img/gallery1.png" alt="srifoton 2024" width={534} height={467} className="
            relative aspect-[460/456] flex self-end mx-auto w-[23.95vw] object-contain
            -mt-[25%] md:-mt-[30%]"></Image>
          <h1 className="
          relative z-10 text-text-300 srifoton-header-main -mt-[10%]">
            <strong>2024</strong>
          </h1>
        </div>
      </div>
    </section>
  );
}
