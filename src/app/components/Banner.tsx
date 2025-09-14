"use client";
import React, { useState, useCallback } from "react";
import EmblaCarousel from "./EmblaCarousel";
import "./../css/embla.css";
import "./../css/sandbox.css";
import { EmblaOptionsType } from "embla-carousel";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    img: "/images/slide1.jpg",
    align: "left",
    title: "Freshly baked, daily",
    desc: "From our signature to seasonal berry tarts, every creation is handcrafted with love.",
  },
  {
    img: "/images/slide2.jpg",
    align: "right",
    title: "Sweet moments, delivered",
    desc: "Same-day delivery available for orders before 2PM. Treat yourself today!",
  },
  {
    img: "/images/slide3.jpg",
    align: "center",
    title: "Natural goodness",
    desc: "100% natural ingredients. No preservatives, just pure flavor.",
  },
];

export const Banner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Callback to sync Embla current slide
  const onSlideChange = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <EmblaCarousel
        slides={SLIDES.map((s) => s.img)}
        options={OPTIONS}
        onSelect={onSlideChange} // pass callback to update index
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>

      {/* Slide Content (syncs with current slide) */}
      <div className="absolute inset-0 flex items-center z-20">
        <Container className="w-full">
          <AnimatePresence mode="wait">
            {SLIDES.map(
              (slide, idx) =>
                idx === selectedIndex && (
                  <motion.div
                    key={idx}
                    className={`flex flex-col w-full ${
                      slide.align === "left"
                        ? "items-start text-left"
                        : slide.align === "right"
                        ? "items-end text-right"
                        : "items-center text-center"
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    {/* Title */}
                    <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-white drop-shadow-lg">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
                      {slide.desc}
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className={`mt-8 flex gap-5 ${
                        slide.align === "right"
                          ? "justify-end"
                          : slide.align === "left"
                          ? "justify-start"
                          : "justify-center"
                      }`}
                    >
                      <a
                        href=""
                        className="bg-primary hover:bg-secondary text-white hover:text-black font-semibold rounded-xl shadow-lg px-6 py-3 sm:px-8 sm:py-4 transition transform hover:scale-105"
                      >
                        Order Now
                      </a>
                      <a
                        href=""
                        className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:text-black text-white font-semibold rounded-xl shadow-lg px-6 py-3 sm:px-8 sm:py-4 transition transform hover:scale-105"
                      >
                        View Menu
                      </a>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </Container>
      </div>
    </div>
  );
};
