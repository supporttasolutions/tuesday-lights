"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Film,
  Video,
  Baby,
  Sparkles,
  Star,
} from "lucide-react";
import type { Service } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Heart,
  Film,
  Video,
  Baby,
  Sparkles,
  Star,
};

// Map service IDs to gallery filter categories
const SERVICE_TO_GALLERY: Record<string, string> = {
  wedding: "wedding",
  "pre-wedding": "pre-wedding",
  "wedding-films": "wedding",
  maternity: "maternity",
  fashion: "fashion",
  kids: "kids",
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] || Heart;
  const galleryCategory = SERVICE_TO_GALLERY[service.id] || "all";

  return (
    <Link href={`/gallery?filter=${galleryCategory}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-shadow duration-500 cursor-pointer h-full"
      >
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 flex items-center justify-center bg-rose-gold/90 backdrop-blur-sm rounded-xl">
              <Icon size={18} className="text-white" />
            </div>
          </div>
          {/* "View Samples" overlay */}
          <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/40 transition-colors duration-500 flex items-center justify-center">
            <span
              className="text-white text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-rose-gold/80 backdrop-blur-sm px-4 py-2 rounded-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Samples
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3
            className="text-lg md:text-xl text-charcoal mb-2 font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm text-charcoal/60 leading-relaxed font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {service.description}
          </p>
        </div>

        {/* Rose-gold bottom border on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
      </motion.div>
    </Link>
  );
}
