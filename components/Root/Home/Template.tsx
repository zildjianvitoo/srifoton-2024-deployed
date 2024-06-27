import { cva } from "class-variance-authority"

type Props = {className?: string; children: any}

export default function Template({className, children, ...props} : Props) {
  return (
    <div className="font-monument mb-30 text-[#24221E] mx-auto relative w-2/3 h-32 md:h-72 lg:h-96 xl:h-[30rem]">
      <div className="bg-[#868365] w-full h-full rotate-[5deg] absolute mx-auto z-0"></div>
      <div className={`bg-[#FFF9F1] w-full h-full relative z-10 mx-auto ${className} ${props}`}>
        {children}
      </div>
    </div>
  )
}
