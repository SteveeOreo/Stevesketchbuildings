import React from "react";
import { services } from "../data/services";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-heading">Services</h2>
          <p className="mt-4 max-w-2xl text-stone-600">
            Construction-ready documentation for industrial and architectural projects.
          </p>
        </div>
        <div className="grid gap-px bg-neutral-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-8"
            >
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
