import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Architectural drawings with clarity, precision, and buildability.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            I am an architectural professional focused on producing clear, coordinated drawings
            that help clients, contractors, and consultants build with confidence. Every line on
            a drawing serves a purpose – from the first concept layout to detailed construction
            documentation.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            My work balances creative design with technical accuracy and regulatory compliance so
            your project can progress smoothly through planning, approvals, and on-site execution.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 text-xs text-slate-400">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-slate-500">
              Experience
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Residential & light commercial projects
            </p>
            <p className="mt-1">
              New builds, extensions, renovations, and internal reconfigurations across a range
              of project scales.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-slate-500">
              Detail & Standards
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Drawings aligned with construction practice
            </p>
            <p className="mt-1">
              Coordinated plans, sections, elevations, and details prepared to standard scales
              and ready for site use.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 sm:col-span-2">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-slate-500">
              Client-Focused Approach
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Clear communication from first sketch to final issue.
            </p>
            <p className="mt-1">
              I take time to understand how you intend to use your space, coordinate design
              options, and translate decisions into precise drawings that your builder can rely
              on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

