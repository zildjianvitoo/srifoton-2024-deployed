import CardCrook from "../CardCrook.v2";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";

const h1 = "text-xl lg:text-[2vw] !leading-normal font-monument";
const text = "text-sm lg:text-[1vw] !leading-normal font-ponnala";
const div = "flex flex-col gap-6 w-full lg:w-[25.3vw]";
const innerDiv = "flex"

export default function Mascot() {
  return (
    <section id="mascot">
      <div className="text-whtc-100">
        <SectionHeader text="Mascot Introduction"/>
        <figure className="relative z-0 left-[25%] md:left-[37%] top-[7vw] lg:top-[12vw]">
          <Image src="/img/mascot2.png" alt="mascot" width={893} height={1339} className="absolute w-1/2 md:w-[27.5%]"/>
        </figure>
        <section className="flex md:grid flex-col md:grid-rows-4 lg:grid-rows-3 grid-flow-col md:justify-stretch lg:justify-between z-10 relative gap-12 lg:gap-y-0 mt-[80vw] md:mt-[33vw] lg:mt-20">
          <CardCrook outerClassName="w-[50vw] md:w-[18.2vw] h-fit scale-x-[-1] md:justify-self-center lg:justify-self-end self-center md:self-center lg:self-start lg:-mr-[25%] md:col-span-2 lg:col-span-1" innerClassName="text-[5vw] md:text-[2.6vw] py-[2vw] !font-monument h-fit leading-10">
            <div className="scale-x-[-1] text-black-200 mx-auto">CLUENO</div>
          </CardCrook>
          <div id="filosofi1" className={cn(text, div)}>
            <div className={innerDiv}>
              <h1 className={h1}>Keahlian dan <br/> Ketelitian</h1>
              <figure className="hidden lg:block relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="319" height="22" viewBox="0 0 319 22" fill="none" className="absolute left-0 bottom-[4vw] w-[20vw]">
                  <path d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333334 11 0.333333C5.10896 0.333333 0.333334 5.10896 0.333333 11ZM297.333 11C297.333 16.8911 302.109 21.6667 308 21.6667C313.891 21.6667 318.667 16.8911 318.667 11C318.667 5.10899 313.891 0.333359 308 0.333359C302.109 0.333358 297.333 5.10899 297.333 11ZM11 13L18.425 13L18.425 9L11 9L11 13ZM33.275 13L48.125 13L48.125 9L33.275 9L33.275 13ZM62.975 13L77.825 13L77.825 9.00001L62.975 9L62.975 13ZM92.675 13L107.525 13L107.525 9.00001L92.675 9.00001L92.675 13ZM122.375 13L137.225 13L137.225 9.00001L122.375 9.00001L122.375 13ZM152.075 13L166.925 13L166.925 9.00001L152.075 9.00001L152.075 13ZM181.775 13L196.625 13L196.625 9.00002L181.775 9.00001L181.775 13ZM211.475 13L226.325 13L226.325 9.00002L211.475 9.00002L211.475 13ZM241.175 13L256.025 13L256.025 9.00002L241.175 9.00002L241.175 13ZM270.875 13L285.725 13L285.725 9.00002L270.875 9.00002L270.875 13ZM300.575 13L308 13L308 9.00003L300.575 9.00003L300.575 13Z" fill="#FFF9F1"/>
                </svg>
              </figure>
            </div>
            Kucing memiliki naluri pengamatan yang tajam, memungkinkan mereka mendeteksi gerakan dan suara halus dengan ketelitian dan kehati-hatian yang tinggi.
          </div>
          <div id="filosofi2" className={cn(text, div, "md:row-span-2 lg:row-span-1")}>
            <div className={innerDiv}>
              <h1 className={h1}>Filosofi Warna</h1>
              <figure className="hidden lg:block relative">
                <svg width="453" height="114" viewBox="0 0 453 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[0.5vw] bottom-[1vw] w-[25vw]">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M442 21.6666C436.109 21.6666 431.333 16.891 431.333 11C431.333 5.10895 436.109 0.333315 442 0.333315C447.891 0.333314 452.667 5.10894 452.667 11C452.667 16.891 447.891 21.6666 442 21.6666ZM234 9H236L241.429 9V13L236 13V16.8333H232V9H234ZM271.143 13L256.286 13L256.286 9L271.143 9V13ZM300.857 13L286 13V9L300.857 8.99999V13ZM330.571 13L315.714 13L315.714 8.99999L330.571 8.99999V13ZM360.286 13L345.429 13V8.99999L360.286 8.99999V13ZM390 13L375.143 13L375.143 8.99999L390 8.99999L390 13ZM419.714 13L404.857 13L404.857 8.99998L419.714 8.99998L419.714 13ZM11 113.667C5.10899 113.667 0.333364 108.891 0.333364 103C0.333364 97.109 5.10899 92.3333 11 92.3333C16.8911 92.3333 21.6667 97.109 21.6667 103C21.6667 108.891 16.8911 113.667 11 113.667ZM46.1563 105H32.0938V101H46.1563V105ZM74.2813 105H60.2188V101H74.2813V105ZM102.406 105H88.3438V101H102.406V105ZM130.531 105H116.469V101H130.531V105ZM158.656 105H144.594V101H158.656V105ZM186.781 105H172.719V101H186.781V105ZM214.906 105H200.844V101H214.906V105ZM236 105H228.969V101H232V95.1667H236V101V103V105ZM232 32.5V48.1667H236V32.5H232ZM232 63.8333V79.5H236V63.8333H232Z" fill="#FFF9F1"/>
                </svg>
              </figure>
            </div>
            <ul className="list-disc gap-2 grid list-inside">
              <li>Morning Blue: Ketenangan dan kepercayaan diri dalam mengatasi masalah.</li>
              <li>Shadow: Kemampuan bekerja di balik layar, menangani tantangan tersembunyi.</li>
              <li>Raisin Black: Ketegasan dan keandalan dalam situasi kompleks.</li>
              <li>White Chocolate: Kemurnian niat dan kejujuran dalam pekerjaan.</li>
            </ul>
          </div>
          <div id="filosofi3" className={cn(text, div)}>
            <div className={innerDiv}>
              <h1 className={h1}>Kucing Detektif</h1>
              <figure className="hidden lg:block relative order-first">
                <svg xmlns="http://www.w3.org/2000/svg" width="178" height="146" viewBox="0 0 178 146" fill="none" className="absolute left-[-11vw] top-[1vw] w-[10vw]">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M177.667 11C177.667 5.10896 172.891 0.333333 167 0.333333C161.109 0.333333 156.333 5.10896 156.333 11C156.333 16.891 161.109 21.6667 167 21.6667C172.891 21.6667 177.667 16.891 177.667 11ZM143.3 9H127.5V13H143.3V9ZM111.7 9H95.9V13H111.7V9ZM80.1 9H64.3V13H80.1V9ZM48.5 9H32.7V13H48.5V9ZM16.9 9H9V11V13V18.75H13V13H16.9V9ZM11 124.333C5.10897 124.333 0.333338 129.109 0.333338 135C0.333339 140.891 5.10897 145.667 11 145.667C16.891 145.667 21.6667 140.891 21.6667 135C21.6667 129.109 16.891 124.333 11 124.333ZM9 34.25L9 49.75H13L13 34.25H9ZM9 65.25L9 80.75H13L13 65.25H9ZM9 96.25L9 111.75H13L13 96.25H9Z" fill="#FFF9F1"/>
                </svg>
              </figure>
            </div>
            Kucing memiliki naluri pengamatan yang tajam, memungkinkan mereka mendeteksi gerakan dan suara halus dengan ketelitian dan kehati-hatian yang tinggi.
          </div>
          <div id="filosofi4" className={cn(text, div)}>
            <div className={innerDiv}>
              <h1 className={h1}>Kecerdikan dan Kelincahan</h1>
              <figure className="hidden lg:block relative order-first">
                <svg xmlns="http://www.w3.org/2000/svg" width="255" height="185" viewBox="0 0 255 185" fill="none" className="absolute left-[-15.5vw] top-[1vw] w-[15vw]">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M254.667 11C254.667 5.10896 249.891 0.333333 244 0.333333C238.109 0.333333 233.333 5.10896 233.333 11C233.333 16.891 238.109 21.6667 244 21.6667C249.891 21.6667 254.667 16.891 254.667 11ZM218.875 9H202.125V13H218.875V9ZM185.375 9H181H177V13V15.9583L181 15.9583V13H185.375V9ZM177 43.7917V29.875H181V43.7917H177ZM177 71.625V57.7083H181V71.625L177 71.625ZM177 99.4583V85.5417H181V99.4583H177ZM177 127.292V113.375H181V127.292H177ZM177 155.125V141.208H181V155.125H177ZM177 172V169.042H181V176H179H177H172V172H177ZM11 184.667C5.10896 184.667 0.333333 179.891 0.333333 174C0.333333 168.109 5.10896 163.333 11 163.333C16.891 163.333 21.6667 168.109 21.6667 174C21.6667 179.891 16.891 184.667 11 184.667ZM46 176H32V172H46V176ZM74 176H60V172H74V176ZM102 176H88V172H102V176ZM130 176H116V172H130V176ZM158 176H144V172H158V176Z" fill="#FFF9F1"/>
                </svg>
              </figure>
            </div>
            Kucing cerdas dan lincah, cocok sebagai "detektif" dalam mengamati dan menganalisis lingkungan, serta unggul dalam berburu dan berinteraksi dengan dunia.
          </div>
          <div id="filosofi5" className={cn(text, div)}>
            <div className={innerDiv}>
              <h1 className={h1}>Filosofi Nama</h1>
              <figure className="hidden lg:block relative order-first">
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="22" viewBox="0 0 250 22" fill="none" className="absolute left-[-15.5vw] top-[1vw] w-[15vw]">
                  <path d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333334 11 0.333333C5.10896 0.333333 0.333334 5.10896 0.333333 11ZM228.333 11C228.333 16.8911 233.109 21.6667 239 21.6667C244.891 21.6667 249.667 16.8911 249.667 11C249.667 5.10898 244.891 0.333353 239 0.333353C233.109 0.333352 228.333 5.10898 228.333 11ZM11 13L18.125 13L18.125 9L11 9L11 13ZM32.375 13L46.625 13L46.625 9L32.375 9L32.375 13ZM60.875 13L75.125 13L75.125 9.00001L60.875 9L60.875 13ZM89.375 13L103.625 13L103.625 9.00001L89.375 9.00001L89.375 13ZM117.875 13L132.125 13L132.125 9.00001L117.875 9.00001L117.875 13ZM146.375 13L160.625 13L160.625 9.00001L146.375 9.00001L146.375 13ZM174.875 13L189.125 13L189.125 9.00002L174.875 9.00001L174.875 13ZM203.375 13L217.625 13L217.625 9.00002L203.375 9.00002L203.375 13ZM231.875 13L239 13L239 9.00002L231.875 9.00002L231.875 13Z" fill="#FFF9F1"/>
                </svg>
              </figure>
            </div>
            Kombinasi dari "Clue" (Inggris) dan akhiran "no" (Jepang untuk menambah sentuhan eksotis).
          </div>
        </section>
      </div>
    </section>
  );
}
