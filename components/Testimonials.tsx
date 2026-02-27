"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-16 md:py-24 bg-sage-900 overflow-hidden">
      {/* Silk Video Background */}
      <div className="video-bg-wrap">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/silk-1772203506809.webm" type="video/webm" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/80 via-sage-900/70 to-sage-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Love Letters"
          subtitle="What our couples say"
          light
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
                >
                  <div className="bg-white-10 backdrop-blur-sm border border-white-10 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-rose-gold text-rose-gold"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="text-cream/90 text-sm leading-relaxed flex-1 font-light italic"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-6 pt-4 border-t border-white-10">
                      <p
                        className="text-cream text-sm font-normal"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-cream/50 text-xs mt-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {t.location} · {t.source}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center border border-white-20 text-white-60 hover:text-cream hover:border-cream rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center border border-white-20 text-white-60 hover:text-cream hover:border-cream rounded-full transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
