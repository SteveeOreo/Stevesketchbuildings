import React from "react";

const projects = [
  {
    title: "Compact Urban Duplex",
    type: "Residential",
    description:
      "Full set of architectural drawings for a two-unit city infill project, including coordinated floor plans, elevations, sections, and stair details.",
  },
  {
    title: "Ground Floor Extension & Remodel",
    type: "Residential",
    description:
      "Layout options and final construction drawings for a rear extension, open-plan living space, and improved connection to the garden.",
  },
  {
    title: "Street-Facing Retail Fit-Out",
    type: "Commercial",
    description:
      "Plans, reflected ceiling layouts, and internal elevations for a small retail unit, coordinated with lighting, signage, and shopfront design.",
  },
  {
    title: "Office Floor Reconfiguration",
    type: "Commercial",
    description:
      "Test-fit layouts and final drawings for a flexible open-plan office floor, meeting rooms, and support spaces within an existing shell.",
  },
  {
    title: "Multi-Family Conversion Study",
    type: "Residential",
    description:
      "Study drawings and refined layouts exploring conversion of an existing building into multiple self-contained residential units.",
  },
  {
    title: "Light Industrial Workshop Upgrade",
    type: "Commercial",
    description:
      "Plans and elevations for internal upgrades, new openings, and improved circulation in a small light industrial workshop.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Selected projects and typical drawing packages.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            These example projects illustrate the range of residential and commercial work covered
            – from single dwellings to multi-unit and small commercial interiors.
          </p>
        </div>
        <p className="text-xs text-slate-500 max-w-sm">
          Project information is presented in a simplified form for illustration. Actual client
          details and documentation are treated confidentially.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full rounded-xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
              <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                {project.type}
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="mt-4 text-[0.7rem] text-slate-500">
              Typical outputs: plans, elevations, sections and key details in PDF format.
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

