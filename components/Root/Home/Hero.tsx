import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="xxs:mb-10 relative flex flex-col items-center justify-center bg-center text-center font-monument text-primary"
    >
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
          className="object-contain"
          quality={100}
          loading="eager"
          fill
        />
      </figure>
      <div className="translate-y-[15%]">
        <h1 className="text-stroke-5 xxs:text-[3rem] relative text-[2.5rem] text-text-300 md:text-[5rem] lg:text-[7rem] xl:text-[10rem]">
          <strong>SRIFOTON</strong>
        </h1>
        <div className="xxs:w-[6rem] xxs:h-[7rem] xxs:bottom-15 relative bottom-20 z-0 mx-auto h-[8rem] w-[7rem] border-2 border-primary bg-white sm:bottom-[6rem] sm:h-[10rem] sm:w-[9rem] md:bottom-[10rem] md:h-[16rem] md:w-[15rem] lg:bottom-[12rem] lg:h-[20rem] lg:w-[18rem]"></div>
        <h1 className="text-stroke-5 xxs:text-[3rem] xxs:bottom-[7rem] relative bottom-[8rem] z-10 text-[2.5rem] text-text-300 sm:bottom-[10rem] md:bottom-[14rem] md:text-[5rem] lg:bottom-[18rem] lg:text-[7rem] xl:bottom-[20rem] xl:text-[10rem]">
          <strong>2024</strong>
        </h1>
      </div>
    </section>
  );
}
