import React from "react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";

const CompareSection = () => {
  return (
    <section
      id="compare"
      className="section-padding border-t border-neutral-border bg-neutral-paper"
      aria-label="Portfolio"
    >
      <div className="mx-auto max-w-[96rem] px-[70px]">
        {/* Portfolio card: write-up left, before/after slider right */}
        <div
          id="portfolio-card"
          className="relative w-full mx-auto rounded-3xl overflow-hidden border border-neutral-border bg-white shadow-lg py-10 sm:py-12 lg:py-16 xl:py-20"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.04), 0 4px 6px -1px rgba(0,0,0,0.04), 0 16px 32px -12px rgba(0,0,0,0.08)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-6 xl:gap-8 items-center px-[50px]">
            {/* Left column: heading, text, CTA */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10 lg:w-[280px] lg:min-w-[280px] lg:max-w-[280px]">
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Portfolio</h2>
              <span className="mt-2.5 block h-0.5 w-12 bg-accent rounded-full" aria-hidden />
              <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
                See how we turn ideas into clear, build-ready drawings. From first sketch to final
                issue, each project delivers precise engineering and architectural documentation.
                If something here fits what you need, we’d be glad to do similar work for you.
              </p>
              <div className="mt-8">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  View our gallery
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right column: before/after slider inside portfolio card */}
            <div className="min-w-0 p-4 lg:p-4">
              <div className="w-full min-w-[360px] max-w-[90rem] mx-auto lg:mx-0 lg:mr-0 lg:ml-auto">
                <BeforeAfterSlider embedded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
