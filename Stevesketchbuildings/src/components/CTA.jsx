import React from "react";

const CTA = () => {
  return (
    <section className="section-container py-16 md:py-20 lg:py-24 border-t border-slate-900/60 bg-gradient-to-br from-slate-900/50 to-slate-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
          End-to-end engineering and architectural drawing services backed by relevant experience
          and the latest tools. Let's bring your project to life.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#request"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all"
          >
            Get a Free Quote
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 px-8 py-3 text-sm font-medium tracking-wide text-slate-100 hover:border-accent hover:text-accent transition-colors"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
