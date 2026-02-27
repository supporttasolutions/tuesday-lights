import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="relative bg-sage py-16 md:py-20 text-center px-4 overflow-hidden">
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
          <div className="absolute inset-0 bg-sage/70" />
        </div>

        <AnimatedSection className="relative z-10">
          <p
            className="text-rose-gold-light text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What we offer
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-cream font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h1>
          <p
            className="text-cream/60 text-sm font-light mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From intimate weddings to grand celebrations, we bring artistry and
            emotion to every frame.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24 text-center px-4">
        <AnimatedSection>
          <h2
            className="text-2xl md:text-3xl text-charcoal font-light mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a project in mind?
          </h2>
          <p
            className="text-charcoal/60 text-sm font-light mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s discuss your vision and create something extraordinary.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-3.5 bg-rose-gold text-white text-xs uppercase tracking-[0.15em] rounded-full hover:bg-rose-gold-light transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get In Touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
