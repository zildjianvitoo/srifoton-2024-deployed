import * as React from 'react';
import { X, Facebook, Instagram, Tiktok, Whatsapp, Email } from '../../../lib/icon';
import Link from 'next/link';
import LocalFont from "next/font/local";

const ponnala = LocalFont({
  src: "../../../public/fonts/Ponnala Regular.woff2",
  variable: "--font-ponnala",
});

const social = [
  {linkTo: 'x', address: '#', 'icon': X},
  {linkTo: 'facebook', address: '#', 'icon': Facebook},
  {linkTo: 'instagram', address: '#', 'icon': Instagram},
  {linkTo: 'tiktok', address: '#', 'icon': Tiktok},
];

const contact = [
  {linkTo: 'whatsapp', address: '#', 'icon': Whatsapp},
  {linkTo: 'email', address: '#', 'icon': Email}
];

export default function Footer() {

  return(
    <>
      <footer className="w-screen space-y-57">

        <div className="">
          <span className="w-224 h-198 bg-purple-700">
            <img src="#" alt="Logo" />
          </span>
        </div>

        <hr />

        <div className="inline-flex w-screen justify-between">
          <div className={`${ponnala.variable} text-white`} style={{fontSize: '13px'}}>
            <p>© SRIFOTON 2024</p>
          </div>
          <div className="">
            <ul className="list-none inline-flex">
              {social.map((link) => (
                <li key={link.linkTo} className='m-13 p-0'>
                  <Link href={link.address}><link.icon /></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </footer>
    </>
  );
}