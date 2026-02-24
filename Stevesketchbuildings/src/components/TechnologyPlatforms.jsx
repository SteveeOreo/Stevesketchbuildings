import React from "react";

const platforms = [
  {
    name: "AutoCAD",
    description: "Precise 2D drafting and detailed technical drawings for engineering and architectural projects.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
  },
  {
    name: "Revit",
    description: "BIM modeling and coordinated construction documentation for comprehensive project delivery.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
  },
  {
    name: "SolidWorks",
    description: "3D CAD modeling for custom components and fabrication-ready engineering drawings.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
  },
  {
    name: "SketchUp",
    description: "3D modeling and visualization for architectural projects and design presentations.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
  },
];

const TechnologyPlatforms = () => {
  return (
    <section
      id="technology"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-4">
          Technology Platforms
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Industry-standard software and expert craftsmanship combine to deliver technically superior,
          accurate, and construction-ready deliverables.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-accent/50 transition-all group"
          >
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
              {platform.icon}
            </div>
            <h3 className="text-base font-semibold text-slate-50 mb-2">{platform.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyPlatforms;
