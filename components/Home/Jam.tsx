export default function Jam({ value, desc }: { value: any; desc: any }) {
  return (
    <div>
      <div
        className="text-center 
                          text-2xl mt-1 mb-4
                          md:text-[3rem] md:mt-4 md:mb-10
                          lg:text-[4rem] lg:mt-7 lg:mb-16"
      >
        {value}
      </div>
      <p className="text-center">{desc}</p>
    </div>
  );
}
