"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const [states, useStates] = useState(true);

  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 bg-[#1D1C19] text-white pt-5 pb-8 mb-5 lg:mb-20 px-[2rem] xl:px-[6rem]">
      <div className="flex items-center">
        <span
          className="border-white border-2 px-2 py-1 me-3 text-md
                         samsung:text-sm samsung:px-3 samsung:py-1.5
                         md:text-lg md:px-4 md:py-2
                         lg:text-xl"
        >
          Logo
        </span>
        <h4 className="font-monument text-xl samsung:text-2xl md:text-2xl lg:text-3xl text-white">SRI</h4>
        <h4 className="font-monument text-xl samsung:text-2xl md:text-2xl lg:text-3xl text-[#B3C5C6]">FOTON</h4>
      </div>
      <div className="lg:hidden"></div>
      <div className="lg:block hidden text-[#B3C5C6]">
        <ul className="font-ponnala flex text-lg xl:text-2xl items-center">
          <li className="p-5 border-b-2 border-white text-white">Home</li>
          <li className="p-5 ">Competition</li>
          <li className="p-5">Workshop</li>
          <li className="p-5">Seminar</li>
          <li className="font-monument ms -5">
            {/* <Button className={`text-[#1D1C19] bg-white text-lg xl:text-2xl`} size={"lg"}>
              Login
            </Button> */}
            <button className="text-[#1D1C19] bg-white text-lg xl:text-2xl">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
