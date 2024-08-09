import * as React from "react";
import Link from "next/link";
import LocalFont from "next/font/local";
import { socials, contacts, routes } from "@/lib/link";

export default function Footer() {
  return (
    <>
      <footer className="space-y-57 mt-[200px] flex-col space-y-[74px] bg-[#24221E] px-[7.29vw] py-8 text-white">
        <div className="flex flex-col gap-y-12 sm:gap-x-[10.6vw] lg:flex-row lg:gap-x-[5vw] xl:justify-between">
          <div className="flex flex-col gap-x-[5vw] gap-y-12 sm:flex-row 2xl:gap-x-[6.18vw]">
            <img
              src="/img/logo-srifoton.png"
              alt="Logo"
              className="mx-auto aspect-[320/200] w-1/4 max-w-[320px] object-contain sm:w-1/2 sm:min-w-[212px]"
            />
            <div className="space-y-6 text-wrap xl:w-[17vw]">
              <p className="font-monument lg:text-lg xl:text-2xl">Address</p>
              <p className="font-ponnala !leading-6 lg:text-sm xl:text-xl">
                Jl. Raya Palembang - Prabumulih No. Km.{" "}
                <span className="font-poppins">32</span>, Indralaya Indah, Kec.
                Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan{" "}
                <span className="font-poppins">30862</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-x-[5vw] gap-y-12 sm:flex-row 2xl:gap-x-[6.18vw]">
            <div className="w-fit space-y-6">
              <p className="font-monument lg:text-lg xl:text-2xl">Contacts</p>
              {contacts.map((contact, index) => (
                <ul
                  key={`${contact.linkTo}${index}`}
                  className="list-none font-ponnala lg:text-sm xl:text-xl"
                >
                  <li className="m-0 flex space-x-3 p-0">
                    {contact.icon}
                    <p className="mt-0.5">{contact.linkTo}</p>
                  </li>
                  {contact.contacts.map((person, index) => (
                    <li key={index} className="m-0 p-0 font-poppins">
                      <a
                        href={person.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {person.phoneNumber || person.email} ({person.name})
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="w-fit space-y-6">
              <p className="font-monument lg:text-lg xl:text-2xl">
                Navigations
              </p>
              <ul className="space-y-3.5 font-ponnala lg:text-sm xl:text-xl">
                {routes.map((routes, index) => (
                  <li
                    key={`${routes.linkTo}${index}`}
                    className="m-0 flex gap-2 p-0"
                  >
                    <Link href={routes.address}>{routes.linkTo}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between">
          <div className={`font-ponnala text-[13px] text-white`}>
            <p>
              © SRIFOTON <span className="font-poppins">2024</span>
            </p>
          </div>
          <div className="">
            <ul className="inline-flex list-none items-center gap-4 lg:gap-0">
              {socials.map((socials) => (
                <li key={socials.linkTo} className="p-0">
                  <Link href={socials.address}>{socials.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
