import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-container pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent mb-4">
            Engineering Drawing & Drafting Services
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Professional Engineering Drawings
            <span className="block text-slate-300">
              P&IDs, process flows, industrial layouts, and technical documentation.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            We deliver precise engineering and architectural drawings for industrial facilities,
            process plants, and construction projects. From P&IDs and process engineering to
            architectural plans and civil drawings – every document is prepared to industry
            standards and ready for execution.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all"
            >
              Get a Free Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 px-6 py-3 text-sm font-medium tracking-wide text-slate-100 hover:border-accent hover:text-accent transition-colors"
            >
              Book a Meeting
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center text-sm font-medium text-slate-400 hover:text-accent transition-colors"
            >
              View Services →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-md text-sm text-slate-400">
            <div>
              <p className="font-semibold text-base text-slate-200">Process & Industrial</p>
              <p className="mt-1">
                P&IDs, process flows, industrial layouts, HMECs, and engineering documentation for
                manufacturing and processing facilities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-base text-slate-200">Architectural & Civil</p>
              <p className="mt-1">
                Building plans, civil drawings, structural documentation, and construction-ready
                technical drawings.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.85)]">
            <div className="flex items-center justify-between text-[0.65rem] text-slate-500 mb-4">
              <span className="uppercase tracking-[0.24em]">
                P&ID • Process Flow • Layout
              </span>
              <span>Engineering Standard</span>
            </div>
            <div className="aspect-[4/3] rounded-lg border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center p-3">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 border border-slate-700/60 rounded" />
                <div className="absolute top-2 left-2 right-2 h-8 border-b border-slate-700/50 flex items-center">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent/60" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                  </div>
                </div>
                <div className="absolute inset-x-3 top-12 bottom-3">
                  <div className="h-full border border-slate-700/40 rounded relative">
                    <div className="absolute top-2 left-2 text-[0.5rem] text-slate-600 uppercase tracking-[0.2em]">
                      Process Flow
                    </div>
                    <svg
                      className="w-full h-full opacity-30"
                      viewBox="0 0 200 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 75 L60 75 M60 75 L60 40 M60 40 L140 40 M140 40 L140 75 M140 75 L180 75"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-600"
                      />
                      <circle cx="60" cy="75" r="8" className="fill-slate-700" />
                      <circle cx="140" cy="40" r="8" className="fill-slate-700" />
                      <rect x="80" y="30" width="40" height="20" className="fill-slate-800 stroke-slate-600" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-[0.65rem] text-slate-500">
              <p>Prepared for: Industrial client</p>
              <p>Issued for: Engineering & Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

