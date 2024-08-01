export default function Time({ value, desc }: { value: any; desc: any }) {
  return (
    <div>
      <div
        className="text-center
                   text-md
                   md:text-2xl md:mb-1
                   lg:text-4xl lg:mb-3
                   xl:text-6xl xl:mb-4"
      >
        {value}
      </div>
      <p className="text-center text-[.5rem] md:text-lg lg:text-xl xl:text-3xl">{desc}</p>
    </div>
  );
}