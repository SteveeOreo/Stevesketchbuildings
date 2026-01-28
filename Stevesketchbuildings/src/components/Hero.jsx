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
            Architectural Drawing & Drafting
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Professional Building Drawings
            <span className="block text-slate-300">
              ready for construction, approvals, and execution.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            I prepare clear, accurate architectural drawings for residential and commercial
            projects – from planning and approvals to on-site construction. Every drawing is
            produced to standard scales, coordinated, and ready for your builder or contractor.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium tracking-wide text-slate-950 shadow-sm hover:bg-accent/90 transition-colors"
            >
              Request a Drawing
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-slate-100 hover:border-accent hover:text-accent transition-colors"
            >
              View Services
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-md text-xs text-slate-400">
            <div>
              <p className="font-semibold text-slate-200">Residential & Commercial</p>
              <p className="mt-1">
                Single homes, multi-unit buildings, offices, retail, and light commercial projects.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Construction-Ready Output</p>
              <p className="mt-1">
                Drawings suitable for contractors, approvals, and regulatory submissions.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.85)]">
            <div className="flex items-center justify-between text-[0.65rem] text-slate-500 mb-4">
              <span className="uppercase tracking-[0.24em]">
                Plan • Section • Elevation
              </span>
              <span>Scale 1:100</span>
            </div>
            <div className="aspect-[4/3] rounded-lg border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-[92%] h-[78%]">
                <div className="border border-slate-700/80 rounded-sm relative">
                  <span className="absolute top-1 left-1 text-[0.55rem] text-slate-500 uppercase tracking-[0.2em]">
                    Floor Plan
                  </span>
                  <div className="absolute inset-3 border border-slate-600/60" />
                  <div className="absolute inset-x-4 bottom-4 h-1 bg-slate-700/70" />
                </div>
                <div className="border border-slate-700/80 rounded-sm relative">
                  <span className="absolute top-1 left-1 text-[0.55rem] text-slate-500 uppercase tracking-[0.2em]">
                    Elevation
                  </span>
                  <div className="absolute inset-x-3 bottom-4 h-8 border border-slate-600/60" />
                  <div className="absolute inset-x-5 bottom-10 h-4 border border-slate-700/70" />
                </div>
                <div className="border border-slate-700/80 rounded-sm relative">
                  <span className="absolute top-1 left-1 text-[0.55rem] text-slate-500 uppercase tracking-[0.2em]">
                    Section
                  </span>
                  <div className="absolute inset-4 border-l border-slate-600/60" />
                  <div className="absolute inset-y-5 right-5 w-6 border border-slate-700/70" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-[0.65rem] text-slate-500">
              <p>Prepared for: Private client project</p>
              <p>Issued for: Design & Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

