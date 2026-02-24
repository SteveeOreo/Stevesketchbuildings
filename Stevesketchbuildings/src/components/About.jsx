import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Engineering drawings with precision, clarity, and technical excellence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            We specialize in producing comprehensive engineering and architectural drawings that
            meet industry standards and support successful project execution. From complex P&IDs
            and process flow diagrams to detailed architectural plans and civil drawings – every
            document is prepared with technical accuracy and attention to detail.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            Our work spans process engineering, industrial layouts, architectural documentation,
            and civil engineering drawings. We ensure all drawings are coordinated, compliant with
            relevant standards, and ready for construction, approvals, and operational use.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-400">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
              Expertise
            </p>
            <p className="mt-3 text-base text-slate-200">
              Process Engineering & Industrial Projects
            </p>
            <p className="mt-1">
              P&IDs, process flows, industrial layouts, HMECs, and engineering documentation for
              manufacturing, processing, and industrial facilities.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
              Standards & Quality
            </p>
            <p className="mt-3 text-base text-slate-200">
              Industry-standard documentation
            </p>
            <p className="mt-1">
              All drawings prepared to relevant engineering standards, with proper instrumentation,
              piping specifications, and technical details ready for construction and operations.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5 sm:col-span-2">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
              Comprehensive Services
            </p>
            <p className="mt-3 text-base text-slate-200">
              From concept to construction-ready documentation.
            </p>
            <p className="mt-1">
              We provide end-to-end drawing services covering process engineering, architectural
              plans, civil drawings, and technical documentation. Every project is handled with
              precision and delivered in formats suitable for your team, contractors, and
              regulatory submissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

