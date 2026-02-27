import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import DomeGallery from "@/components/DomeGallery";
import Link from "next/link";
import { SERVICES, STATS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="What We Do" subtitle="Our services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 border border-sage text-sage text-xs uppercase tracking-[0.12em] rounded-full hover:bg-sage hover:text-cream transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View All Services
          </Link>
        </AnimatedSection>
      </section>

      {/* Dome Gallery */}
      <section className="w-full pb-8 md:pb-24" style={{ background: "#FBF8F3" }}>
        <div className="w-full h-[35vh] md:h-[60vh]">
          <DomeGallery
            fit={1.5}
            minRadius={200}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            overlayBlurColor="#FBF8F3"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-sage py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 0.1}
              className="text-center"
            >
              <p
                className="text-3xl md:text-4xl text-white font-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-white/70 text-xs uppercase tracking-[0.15em] mt-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="crystal-gradient-soft">
        <Gallery showHeading />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 md:py-28 text-center px-4 bg-cream">
        <AnimatedSection>
          <p
            className="text-rose-gold text-xs uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ready to begin?
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-charcoal font-light max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Create Something Beautiful Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="px-10 py-3.5 bg-rose-gold text-white text-xs uppercase tracking-[0.15em] rounded-full hover:bg-rose-gold-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book Your Date
            </Link>
            <a
              href="https://wa.me/917010085577"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 border border-sage text-sage text-xs uppercase tracking-[0.15em] rounded-full hover:bg-sage hover:text-cream transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
