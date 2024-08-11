"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery1.png"}
              alt="gallery-1"
              width={1000}
              height={1000}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery2.png"}
              alt="gallery-2"
              width={1000}
              height={1000}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery3-hd.png"}
              alt="gallery-3"
              width={1000}
              height={1000}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery4-hd.png"}
              alt="gallery-4"
              width={1000}
              height={1000}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery5-hd.png"}
              alt="gallery-5"
              width={1000}
              height={1000}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
