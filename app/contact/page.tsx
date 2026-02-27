"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_INFO } from "@/lib/data";

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent(CONTACT_INFO.whatsappMessage);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `📸 *New Inquiry — Tuesday Lights*`,
      ``,
      `👤 *Name:* ${form.name || "Not provided"}`,
      `📧 *Email:* ${form.email || "Not provided"}`,
      `📞 *Phone:* ${form.phone || "Not provided"}`,
      `📅 *Wedding Date:* ${form.date || "Not decided yet"}`,
      ``,
      `💬 *Message:*`,
      form.message || "No message",
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${CONTACT_INFO.whatsapp}?text=${text}`, "_blank");
  };

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
            Get in touch
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-cream font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h1>
          <p
            className="text-cream/60 text-sm font-light mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We&apos;d love to hear about your special day. Let&apos;s start a
            conversation.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl text-charcoal font-light mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Send Us a Message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.12em] text-charcoal/60 mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm rounded-xl focus:border-sage focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="John & Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.12em] text-charcoal/60 mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm rounded-xl focus:border-sage focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.12em] text-charcoal/60 mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm rounded-xl focus:border-sage focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs uppercase tracking-[0.12em] text-charcoal/60 mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Wedding Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm rounded-xl focus:border-sage focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.12em] text-charcoal/60 mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm rounded-xl focus:border-sage focus:outline-none transition-colors duration-300 resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Tell us about your wedding plans, preferred dates, and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-rose-gold text-white text-xs uppercase tracking-[0.15em] rounded-full hover:bg-rose-gold-light transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Info + Map */}
          <AnimatedSection delay={0.2}>
            <h2
              className="text-2xl md:text-3xl text-charcoal font-light mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visit Us
            </h2>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start p-4 bg-white shadow-warm rounded-xl">
                <MapPin size={18} className="text-sage mt-0.5 shrink-0" />
                <p
                  className="text-charcoal text-sm font-normal"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white shadow-warm rounded-xl">
                <Phone size={18} className="text-sage mt-0.5 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="text-charcoal text-sm hover:text-sage transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white shadow-warm rounded-xl">
                <Mail size={18} className="text-sage mt-0.5 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-charcoal text-sm hover:text-sage transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white shadow-warm rounded-xl">
                <Clock size={18} className="text-sage mt-0.5 shrink-0" />
                <p
                  className="text-charcoal text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Mon – Sat: 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`${CONTACT_INFO.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white text-xs uppercase tracking-[0.12em] rounded-full hover:bg-[#20bd5a] transition-colors duration-300 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="w-full h-64 md:h-80 overflow-hidden shadow-warm rounded-2xl">
              <iframe
                src={CONTACT_INFO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tuesday Lights Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
