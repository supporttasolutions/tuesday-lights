"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setScrolled(!isHome || window.scrollY > 50);
    const onScroll = () => setScrolled(!isHome || window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-90 backdrop-blur-xl shadow-warm border-b border-white-10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-all duration-500 ${scrolled || mobileOpen ? 'ring-2 ring-sage/30' : 'ring-2 ring-white/30'}`}>
                <Image
                  src="/tuesday lights.jpg"
                  alt="Tuesday Lights"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-[0.08em] uppercase transition-colors duration-300 hover:text-rose-gold ${
                    pathname === link.href
                      ? "text-rose-gold"
                      : scrolled
                        ? "text-charcoal"
                        : "text-white-80"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center px-6 py-2 text-xs uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-rose-gold hover:text-white hover:border-rose-gold ${
                  scrolled
                    ? "border border-sage text-sage"
                    : "border border-white-60 text-white-80"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book Now
              </Link>

              <button
                className={`lg:hidden z-50 p-2 transition-colors duration-300 ${
                  scrolled || mobileOpen ? "text-charcoal" : "text-cream"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl tracking-wide transition-colors duration-300 hover:text-rose-gold ${
                      pathname === link.href ? "text-rose-gold" : "text-charcoal"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center px-8 py-3 bg-rose-gold text-white text-sm uppercase tracking-[0.12em] rounded-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
