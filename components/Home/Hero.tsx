import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cover bg-center font-monument text-center samsung:mb-10 lg:mb-[15rem] samsung:h-[12rem] md:h-[30rem] text-[#1D1C19]">
      <img src="/img/dangerline.png" alt="danger-line" className="object-fit absolute" />
      <img src="/img/dangerline1.png" alt="danger-line" className="object-fit absolute" />
      <h1 className="text-stroke relative  text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem] ">
        <strong>SRIFOTON</strong>
      </h1>
      <div
        className="border-2 border-primary mx-auto relative bg-white z-0 
                   w-[7rem] h-[8rem] bottom-20
                   samsung:w-[6rem] samsung:h-[7rem] samsung:bottom-15 
                   sm:w-[9rem] sm:h-[10rem] sm:bottom-[6rem] 
                   md:w-[15rem] md:h-[16rem] md:bottom-[10rem] 
                   lg:w-[18rem] lg:h-[20rem] lg:bottom-[12rem]"
      ></div>
      <h1
        className="relative z-10 text-stroke
                   text-[3rem] bottom-[8rem] 
                   samsung:bottom-[7rem]
                   sm:text-[4rem] sm:bottom-[10rem]
                   md:text-[6rem] md:bottom-[16rem]
                   lg:text-[8rem] lg:bottom-[20rem]
                   xl:text-[12rem] xl:bottom-[22rem]"
      >
        <strong>2024</strong>
      </h1>
    </section>
  );
}
