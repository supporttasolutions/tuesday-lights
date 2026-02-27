import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import { ABOUT_STORY, STATS } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-sage py-16 md:py-20 text-center px-4">
        <AnimatedSection>
          <p
            className="text-rose-gold-light text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ABOUT_STORY.subtitle}
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-cream font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {ABOUT_STORY.title}
          </h1>
        </AnimatedSection>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <AnimatedSection className="relative">
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={ABOUT_STORY.images.main}
                  alt="Tuesday Lights photographer at work"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover shadow-warm rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-2/3 z-20">
                <Image
                  src={ABOUT_STORY.images.accent}
                  alt="Behind the scenes photography"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover shadow-warm border-4 border-cream rounded-xl"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
              {/* Rose-gold accent block */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-gold/15 -z-10 rounded-2xl" />
            </div>
          </AnimatedSection>

          {/* Story Text */}
          <AnimatedSection delay={0.2}>
            <p
              className="text-rose-gold text-xs uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Who we are
            </p>
            <h2
              className="text-2xl md:text-3xl text-charcoal font-light mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More Than Photographers —<br />
              <span className="italic">We&apos;re Storytellers</span>
            </h2>
            <div className="space-y-4">
              {ABOUT_STORY.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-charcoal/70 text-sm leading-relaxed font-light"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Row */}
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

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
