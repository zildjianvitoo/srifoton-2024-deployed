"use client";

import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils';

type Props = {className?: string}

export default function BenefitCarousel({className} : Props) {
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
    <div className={cn("embla", [className])} ref={emblaRef} style={{transform: "rotate(0deg)"}}>
      <div className="embla__container for_benefit text-xs md:text-sm text-center h-[43vw] md:h-[30vw]">
        <div className="embla__slide h-full">
          <div className="aspect-square h-full content-center bg-primary py-2 px-2">
            <Image
              src={"/img/benefit1.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-2/3"
            />
            <h3 className="mt-5 text-center font-monument text-background">
              Pengembangan <br /> Keterampilan
            </h3>
          </div>
        </div>
        <div className="embla__slide h-full">
          <div className="aspect-square content-center h-full bg-primary py-2 px-2">
            <Image
              src={"/img/benefit2.png"}
              alt="benefit-2"
              width={1000}
              height={1000}
              className="mx-auto w-3/4"
            />
            <h3 className="mt-5 text-center font-monument text-background">
              Jaringan dan <br /> Kolaborasi
            </h3>
          </div>
        </div>
        <div className="embla__slide h-full">
          <div className="aspect-square content-center h-full bg-primary py-2 px-2">
            <Image
              src={"/img/benefit3.png"}
              alt="benefit-1"
              width={1000}
              height={1000}
              className="mx-auto w-1/2"
            />
            <h3 className="mt-5 text-center font-monument text-background">
              Motivasi dan <br /> Inspirasi
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
