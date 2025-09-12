"use client";
import React, { useCallback, useEffect } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  onSelect?: (emblaApi: EmblaCarouselType) => void; // ✅ new optional prop
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, onSelect }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  // ✅ Hook into embla's `select` event
  useEffect(() => {
    if (!emblaApi || !onSelect) return;
    emblaApi.on("select", () => onSelect(emblaApi));
    onSelect(emblaApi); // run once on mount
  }, [emblaApi, onSelect]);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide relative" key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover w-full h-full"
              />

              {/* Overlay tint */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots (optional, uncomment if you want visible indicators) */}
      {/* <div className="embla__controls absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot" +
                (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default EmblaCarousel;
