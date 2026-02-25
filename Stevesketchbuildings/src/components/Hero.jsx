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
    subtitle: "From concept to construction with industry-standard drafting.",
  },
  {
    image: "/images/samples/dark%20mode.JPEG",
    title: "Engineering & Design Excellence",
    subtitle: "P&IDs, layouts, and structural documentation for clear, buildable outcomes.",
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
      className="relative min-h-[90vh] flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Backgrounds */}
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === index ? 1 : 0,
            zIndex: 0,
          }}
          aria-hidden={i !== index}
        />
      ))}
      {/* Overlay: gradient for legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(28,25,23,0.4) 0%, rgba(28,25,23,0.75) 100%)",
        }}
      />

      {/* Content: consistent grid, positioned at 30% from top */}
      <div className="section-container relative z-10 w-full pt-[30vh] lg:pt-[32vh] pl-4 pr-4 lg:pl-6 lg:pr-8">
        <div className="max-w-xl">
          <div key={index} className="animate-fade-in">
            <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.2]">
              {slide.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-stone-200 sm:text-base max-w-lg">
              {slide.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100 hover:border-stone-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
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
    </section>
  );
};

export default Hero;
