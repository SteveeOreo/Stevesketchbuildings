import React, { useState, useEffect } from "react";

const SLIDES = [
  {
    image: "/images/samples/drawing.JPEG",
    title: "Precision in Architectural Design",
    subtitle: "Construction-ready documentation and technical drawings.",
  },
  {
    image: "/images/samples/light%20mode.JPEG",
    title: "Clear, Buildable Documentation",
    subtitle: "Rendered visualizations and light-mode drawings for construction and approvals.",
  },
  {
    image: "/images/samples/dark%20mode.JPEG",
    title: "Technical & Blueprint Views",
    subtitle: "Blueprint and dark-mode drafting for engineering and architectural projects.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col overflow-hidden pt-0 mt-0 bg-black"
      aria-label="Hero"
    >
      {/* Slide images with fade */}
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 bg-black transition-opacity duration-700 ease-out bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === index ? 1 : 0,
            zIndex: 0,
          }}
          aria-hidden={i !== index}
        />
      ))}

      {/* Black gradient: keeps write-up readable while slides change */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.92) 85%, rgba(0,0,0,0.98) 100%)",
        }}
        aria-hidden
      />

      {/* Write-up strip: overlaid at bottom, updates with each slide */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full border-t border-white/10 bg-black/90 backdrop-blur-sm">
        <div className="section-container py-6 lg:py-8 pl-4 pr-4 lg:pl-6 lg:pr-8">
          <div className="max-w-3xl flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div key={index} className="animate-fade-in min-w-0">
              <h1 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl lg:leading-[1.25]">
                {slide.title}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-stone-300 sm:text-base max-w-xl">
                {slide.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-4 lg:hidden">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100 hover:border-stone-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
                >
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/80 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
                >
                  View Services
                </a>
              </div>
            </div>
            <div
              className="flex shrink-0 gap-2 sm:pb-0.5"
              role="tablist"
              aria-label="Slides"
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900 ${
                    i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
