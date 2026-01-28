import React from "react";

const services = [
  {
    title: "Architectural Building Drawings",
    description:
      "Complete drawing sets including plans, elevations, sections, and schedules prepared to standard scales and suitable for construction teams and approvals.",
  },
  {
    title: "Floor Plans & Space Layouts",
    description:
      "Clear, efficient space planning for new builds, extensions, and internal reconfigurations across residential and commercial properties.",
  },
  {
    title: "Structural & Construction Drawings",
    description:
      "Coordinated drawings that show key structural elements, wall build-ups, openings, and critical dimensions to support engineers and contractors.",
  },
  {
    title: "Drafting & Design Revisions",
    description:
      "Redrawing, updating, or refining existing sketches, PDFs, or mark-ups into clean, accurate CAD drawings aligned with your latest design decisions.",
  },
  {
    title: "Planning & Approval Documentation",
    description:
      "Plans, elevations, and supporting drawings prepared in line with typical submission requirements to support planning or regulatory applications.",
  },
  {
    title: "Consultation & Design Guidance",
    description:
      "One-to-one support to review your brief, discuss options, and define the level of drawings you need for your stage of project.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Services tailored to your project stage and level of detail.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            Whether you are exploring layout options, preparing for approvals, or issuing final
            drawings to site, services can be scaled to match the information you need.
          </p>
        </div>
        <p className="text-xs text-slate-500 max-w-sm">
          Drawings are typically provided in PDF format for sharing and printing, with digital
          CAD files available on request depending on scope.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="h-full rounded-xl border border-slate-800 bg-slate-950/60 p-5 hover:border-accent/80 transition-colors"
          >
            <h3 className="text-sm font-semibold text-slate-50">{service.title}</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

