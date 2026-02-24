import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-container pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36"
    >
      <div className="grid gap-12 lg:gap-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.28em] uppercase text-accent">
              Engineering Drawing & Drafting Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-50 leading-tight">
              Precision Engineering Drawings
              <span className="block text-slate-300 mt-2">
                That Drive Project Success
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Transform your industrial and architectural projects with comprehensive engineering drawings. 
              From complex P&IDs and process flows to detailed architectural plans and civil documentation – 
              we deliver construction-ready drawings that meet industry standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold tracking-wide text-slate-950 shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all"
            >
              Get a Free Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 px-7 py-4 text-base font-medium tracking-wide text-slate-100 hover:border-accent hover:text-accent hover:bg-slate-800/50 transition-all"
            >
              Book a Meeting
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-base font-medium text-slate-400 hover:text-accent transition-colors group"
            >
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-accent/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-200 mb-1">Process & Industrial</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Comprehensive P&IDs, process flows, industrial layouts, HMECs, and engineering documentation 
                  for manufacturing and processing facilities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-accent/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-200 mb-1">Architectural & Civil</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Building plans, civil drawings, structural documentation, and construction-ready 
                  technical drawings for residential and commercial projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Engineering Drawing
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">v2.0</span>
              </div>
              
              <div className="aspect-[4/3] rounded-xl border border-slate-700/50 bg-slate-950/80 backdrop-blur-sm overflow-hidden">
                <div className="h-full p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 ml-3 h-2 bg-slate-800 rounded" />
                  </div>
                  
                  <div className="flex-1 relative bg-slate-900/50 rounded-lg border border-slate-700/30 p-4">
                    <div className="absolute top-2 left-3 text-[0.6rem] font-mono text-slate-500 uppercase tracking-wider">
                      Process Flow Diagram
                    </div>
                    <svg
                      className="w-full h-full opacity-40"
                      viewBox="0 0 200 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M20 75 L60 75 M60 75 L60 40 M60 40 L140 40 M140 40 L140 75 M140 75 L180 75"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-accent"
                        strokeLinecap="round"
                      />
                      <circle cx="60" cy="75" r="10" className="fill-accent/30 stroke-accent/60" strokeWidth="1.5" />
                      <circle cx="140" cy="40" r="10" className="fill-accent/30 stroke-accent/60" strokeWidth="1.5" />
                      <rect x="75" y="25" width="50" height="30" rx="2" className="fill-slate-800/50 stroke-accent/40" strokeWidth="1.5" />
                      <path d="M130 75 L140 75" stroke="currentColor" strokeWidth="2" className="text-accent" markerEnd="url(#arrow)" />
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="currentColor" className="text-accent" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Industry Standard</span>
                </div>
                <span className="font-mono">Ready for Construction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

