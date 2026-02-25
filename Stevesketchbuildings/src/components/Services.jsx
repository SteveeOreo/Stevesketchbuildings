import React, { useState } from "react";
import { services } from "../data/services";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-heading">Services</h2>
          <p className="mt-4 max-w-2xl text-stone-600">
            Construction-ready documentation for industrial and architectural projects.
          </p>
        </div>

        {/* Mobile: expandable cards */}
        <div className="md:hidden space-y-3">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                className="rounded-lg border border-neutral-border bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                  aria-expanded={isExpanded}
                  aria-controls={`service-detail-${index}`}
                  id={`service-trigger-${index}`}
                >
                  <h3 className="font-display text-base font-semibold tracking-tight text-stone-900 pr-2">
                    {service.title}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-paper text-stone-600 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`service-detail-${index}`}
                  role="region"
                  aria-labelledby={`service-trigger-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-sm leading-relaxed text-stone-600 border-t border-neutral-border pt-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: grid as before */}
        <div className="hidden md:grid gap-px bg-neutral-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bg-white p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-stone-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
