import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-cream/20 mb-4">
              <Image
                src="/tuesday lights.jpg"
                alt="Tuesday Lights"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="text-cream/50 text-sm font-light leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Illuminating emotions,
              <br />
              brightening memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-rose-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/60 text-sm hover:text-cream transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-rose-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:text-rose-gold hover:border-rose-gold rounded-full transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p
            className="text-center text-cream/40 text-xs tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 Tuesday Lights. All Rights Reserved. Kerala, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
