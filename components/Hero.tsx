"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0 hero-zoom">
        <Image
          // src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
          src="/hero image.jpg"
          alt="Beautiful Kerala wedding couple"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Clean Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-rose-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Kerala&apos;s Premier Wedding Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] max-w-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We Tell Your Story
          <br />
          <span className="italic">In Light</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white-60 text-sm md:text-base font-light tracking-[0.15em] mt-4 md:mt-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Wedding &nbsp;•&nbsp; Pre-Wedding &nbsp;•&nbsp; Maternity
          &nbsp;•&nbsp; Fashion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
        >
          <Link
            href="/gallery"
            className="px-10 py-3.5 bg-rose-gold text-white text-xs uppercase tracking-[0.15em] rounded-full hover:bg-rose-gold-light transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="px-10 py-3.5 border border-white-60 text-white-80 text-xs uppercase tracking-[0.15em] rounded-full hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book A Session
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <ChevronDown className="text-white-60" size={24} />
      </div>
    </section>
  );
}
