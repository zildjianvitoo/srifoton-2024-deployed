export default function Time({ value, desc }: { value: any; desc: any }) {
  return (
    <div>
      <div
        className="text-center
                   text-[1rem] mt-2 mb-1
                   md:text-[2rem] md:mt-4 md:mb-2
                   lg:text-[3rem] lg:mt-5 lg:mb-8
                   xl:text-[4rem] xl:mt-7 xl:mb-6"
      >
        {value}
      </div>
      <p className="text-center text-[.5rem] md:text-lg lg:text-xl xl:text-2xl">{desc}</p>
    </div>
  );
}
