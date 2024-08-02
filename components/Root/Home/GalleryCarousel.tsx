"use client";

import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 2500})])
  // const [slidesInView, setSlidesInView] = useState([0, 1, 2])

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(slidesInView) // Access API
  //   }
  // }, [slidesInView])

  // const logEmblaEvent = useCallback(
  //   (emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
  //     emblaApi.slidesInView(true).length == 3 && setSlidesInView(emblaApi.slidesInView(true))
  //   },
  //   []
  // )

  // useEffect(() => {
  //   if (emblaApi) emblaApi.on('slidesInView', logEmblaEvent)
  // }, [emblaApi, logEmblaEvent])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery1.png"}
              alt="gallery-1"
              width={100}
              height={100}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide" style={{flex: "0 0 25%"}}>
          <figure>
            <Image
              src={"/img/gallery2.png"}
              alt="gallery-2"
              width={100}
              height={100}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery3.png"}
              alt="gallery-3"
              width={100}
              height={100}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery4.png"}
              alt="gallery-4"
              width={100}
              height={100}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
        <div className="embla__slide">
          <figure>
            <Image
              src={"/img/gallery5.png"}
              alt="gallery-5"
              width={100}
              height={100}
              className="w-full border-2 border-shadow-200"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
