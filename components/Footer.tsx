"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, ChevronUp } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { useCallback } from "react";

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  Youtube,
};

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative border-t border-sage-900/5">
      {/* Main footer */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#ffffff",
        }}
      >
        {/* Soft frosted white glow - very subtle for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(240, 250, 248, 1) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 pt-10 pb-8 md:pt-14 md:pb-10">
          <span className="block w-16 md:w-24 h-[1.5px] bg-sage-900/15" />
          <span className="block w-2 h-2 rounded-full bg-sage-900/25" />
          <span className="block w-16 md:w-24 h-[1.5px] bg-sage-900/15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-sage-900/5 shadow-xl shadow-sage-900/5">
                  <Image
                    src="/tuesday lights.jpg"
                    alt="Tuesday Lights"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-3xl text-sage-900 font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tuesday Lights
                </h3>
              </div>
              <p
                className="text-sage-900 text-lg md:text-xl lg:text-2xl leading-snug tracking-normal max-w-sm mx-auto md:mx-0 font-bold"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Where every frame tells
                <br />
                a love story worth remembering.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4
                className="text-sm uppercase tracking-[0.25em] text-sage-900 mb-6 font-bold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Quick Links
              </h4>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sage-900/90 text-[15px] font-semibold hover:text-sage transition-all duration-300 hover:translate-x-1 inline-block md:w-fit"
                    style={{
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h4
                className="text-sm uppercase tracking-[0.25em] text-sage-900 mb-6 font-bold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-5 justify-center md:justify-start mb-8">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICON_MAP[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 flex items-center justify-center border-2 border-sage-900/15 text-sage-900/80 rounded-full transition-all duration-300 hover:text-white hover:bg-sage-900 hover:border-sage-900 hover:shadow-lg hover:scale-110"
                      aria-label={social.label}
                    >
                      {Icon && (
                        <Icon
                          size={22}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
              <p
                className="text-sage-900/75 text-[13px] leading-relaxed font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Based in Kerala, India
                <br />
                Available worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-sage-900/10 bg-sage-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className="text-sage-900/70 text-[13px] font-semibold tracking-wide text-center md:text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2026 Tuesday Lights. All Rights Reserved.
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2.5 text-sage-900/70 text-[13px] font-bold tracking-wider hover:text-sage-900 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
              aria-label="Scroll to top"
            >
              <span className="uppercase">Back to top</span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-sage-900/15 group-hover:border-sage-900 group-hover:bg-sage-900 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
                <ChevronUp size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
