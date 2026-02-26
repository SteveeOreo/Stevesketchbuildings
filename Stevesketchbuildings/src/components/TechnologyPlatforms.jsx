import React, { useRef, useLayoutEffect } from "react";

const TECH_PLATFORMS = [
  {
    name: "AutoCAD",
    description: "Precise 2D drafting and detailed technical drawings.",
    image: "/images/Techtoolpics/Autocad.png",
  },
  {
    name: "Revit",
    description: "BIM modeling and coordinated construction documentation.",
    image: "/images/Techtoolpics/Revit.png",
  },
  {
    name: "SolidWorks",
    description: "3D CAD modeling for fabrication-ready engineering drawings.",
    image: "/images/Techtoolpics/Solidworks.png",
  },
  {
    name: "SketchUp",
    description: "3D modeling and visualization for architectural projects.",
    image: "/images/Techtoolpics/Sketchup.png",
  },
];

const SCROLL_STEP = 2;
const SCROLL_INTERVAL_MS = 50;

const TechnologyPlatforms = () => {
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      el.scrollLeft += SCROLL_STEP;
      if (el.scrollLeft >= maxScroll - SCROLL_STEP) el.scrollLeft = 0;
    }, SCROLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const Card = ({ platform, isDuplicate }) => (
    <div
      className="flex-shrink-0 flex flex-col items-center text-center group w-[25%] min-w-[25%] px-2 md:px-4"
    >
      <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-neutral-border bg-white shadow-sm group-hover:shadow-md group-hover:border-accent/30 transition-all p-2">
        <img
          src={platform.image}
          alt=""
          className="w-full h-full object-contain"
          loading={isDuplicate ? "lazy" : undefined}
        />
      </div>
      <h3 className="mt-2 font-display text-xs md:text-sm font-semibold text-stone-900">
        {platform.name}
      </h3>
      <p className="mt-0.5 text-[10px] md:text-xs text-stone-500 leading-snug line-clamp-2">
        {platform.description}
      </p>
    </div>
  );

  return (
    <section
      id="technology"
      className="section-padding border-t border-neutral-border bg-neutral-paper"
    >
      <div className="section-container">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="section-heading">Technology Platforms</h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-stone-600 text-sm md:text-base leading-relaxed">
            Industry-standard software and expert craftsmanship for technically accurate,
            construction-ready deliverables.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide flex"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="region"
            aria-label="Technology tools"
          >
            {TECH_PLATFORMS.map((p) => <Card key={p.name} platform={p} isDuplicate={false} />)}
            {TECH_PLATFORMS.map((p) => <Card key={`${p.name}-dup`} platform={p} isDuplicate />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatforms;
