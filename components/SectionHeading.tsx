import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`text-center mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <p
          className={`text-xs md:text-sm uppercase tracking-[0.2em] mb-3 ${
            light ? "text-rose-gold-light" : "text-rose-gold"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight ${
          light ? "text-cream" : "text-charcoal"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-px mx-auto mt-5 ${light ? "bg-rose-gold-light" : "bg-rose-gold"}`}
      />
    </AnimatedSection>
  );
}
