import * as React from 'react';
import Link from 'next/link';
import LocalFont from "next/font/local";
import { socials, contacts, routes } from '@/lib/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400']});

export default function Footer() {

  return(
    <>
      <footer className='flex-col space-y-57 text-white px-[7.29vw] py-8 space-y-[74px] bg-[#24221E] mt-[200px]'>

        <div className="flex lg:flex-row flex-col xl:justify-between xl:gap-x-0 sm:gap-x-[10.6vw] gap-y-12">

          <div className='flex flex-col sm:flex-row gap-x-[10.6vw] gap-y-12'>
            <img src="#" alt="Logo" className='max-w-[250px] min-w-28'/>
            <div className='text-wrap xl:w-[17vw] space-y-6'>
              <p className='font-monument xl:text-2xl lg:text-lg'>
                Address
              </p>
              <p className='font-ponnala !leading-6 xl:text-xl lg:text-sm'>
                Jl. Raya Palembang - Prabumulih No. Km. <span className={`${poppins.className}`}>32</span>, Indralaya Indah, Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan <span className={`${poppins.className}`}>30862</span>
              </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-x-[10.6vw] gap-y-12'>
            <div className='w-fit space-y-6'>
              <p className='font-monument xl:text-2xl lg:text-lg'>
                Contacts
              </p>
                {contacts.map((contacts, index) => (
                  <ul className='list-none xl:text-xl lg:text-sm font-ponnala'>
                    <li key={`${contacts.linkTo}${index}`} className='flex space-x-3 m-0 p-0'>
                      <contacts.icon />
                      <p className='self-center'>{contacts.linkTo}</p>
                    </li>
                    {contacts.contact.map((address, index) => (
                      <li key={index} className={`m-0 p-0 ${poppins.className}`}>
                        {address}
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
            <div className='w-fit space-y-6'>
              <p className='font-monument xl:text-2xl lg:text-lg'>
                Navigations
              </p>
              <ul className='space-y-3.5 xl:text-xl lg:text-sm font-ponnala'>
                {routes.map((routes, index) => (
                  <li key={`${routes.linkTo}${index}`} className='flex gap-2 m-0 p-0'>
                    <Link href={routes.address}>{routes.linkTo}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <hr />

        <div className="flex justify-between">
          <div className={`font-ponnala text-white text-[13px]`}>
            <p>© SRIFOTON <span className={`${poppins.className}`}>2024</span></p>
          </div>
          <div className="">
            <ul className="list-none inline-flex items-center gap-4 lg:gap-0">
              {socials.map((socials) => (
                <li key={socials.linkTo} className='p-0'>
                  <Link href={socials.address}><socials.icon /></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </footer>
    </>
  );
}