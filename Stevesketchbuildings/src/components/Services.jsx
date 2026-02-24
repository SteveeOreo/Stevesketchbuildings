import React from "react";

const services = [
  {
    title: "Process and Engineering Drawings",
    description:
      "Comprehensive process and engineering drawings prepared to industry standards, detailing process flows, equipment specifications, and engineering requirements for industrial and manufacturing facilities.",
  },
  {
    title: "Industrial Layouts",
    description:
      "Detailed industrial facility layouts including equipment placement, material flow, safety zones, and operational efficiency optimization for manufacturing and processing plants.",
  },
  {
    title: "P&IDs (Piping and Instrumentation Diagrams)",
    description:
      "Accurate P&IDs showing process flow, piping systems, instrumentation, control loops, and equipment interconnections essential for process engineering and plant operations.",
  },
  {
    title: "HMECs (Hazardous Material Emergency Control)",
    description:
      "Specialized drawings for hazardous material emergency control systems, safety protocols, containment measures, and emergency response planning documentation.",
  },
  {
    title: "Civil Drawings",
    description:
      "Complete civil engineering drawings including site plans, grading, drainage, utilities, roads, foundations, and infrastructure layouts for construction and development projects.",
  },
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
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-4">
          What We Do
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Bringing engineering and architectural designs to life with construction-ready documents
          and technical documentation that drive project success.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="h-full rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-accent/80 hover:bg-slate-950/80 transition-all group"
          >
            <h3 className="text-base font-semibold text-slate-50 mb-3 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          Drawings are typically provided in PDF format for sharing and printing, with digital
          CAD files available on request depending on scope.
        </p>
      </div>
    </section>
  );
};

export default Services;

