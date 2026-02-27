"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const FILTERS = ["all", "wedding", "pre-wedding", "maternity", "fashion", "kids"] as const;

export default function Gallery({ showHeading = true, initialFilter = "all" }: { showHeading?: boolean; initialFilter?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const openLightbox = useCallback((id: number) => setLightbox(id), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      const currentIdx = filtered.findIndex((img) => img.id === lightbox);
      const nextIdx = (currentIdx + dir + filtered.length) % filtered.length;
      setLightbox(filtered[nextIdx].id);
    },
    [lightbox, filtered]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    },
    [closeLightbox, navigateLightbox]
  );

  const lightboxImage = filtered.find((img) => img.id === lightbox);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {showHeading && (
        <SectionHeading title="Our Portfolio" subtitle="Moments we've captured" />
      )}

      {/* Filter Tabs — Pill Shape */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.12em] rounded-full transition-all duration-300 ${
              activeFilter === filter
                ? "bg-sage text-cream"
                : "bg-transparent text-charcoal/60 hover:text-charcoal border border-charcoal/10 hover:border-charcoal/30"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {filter === "pre-wedding" ? "Pre-Wedding" : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="masonry-item group cursor-pointer"
              onClick={() => openLightbox(img.id)}
            >
              <div className="gallery-img-wrap relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center rounded-xl">
                  <span className="text-white text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src.replace("w=800", "w=1400")}
                alt={lightboxImage.alt}
                width={lightboxImage.width}
                height={lightboxImage.height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
