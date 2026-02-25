import React, { useState, useEffect } from "react";

const projects = [
  { title: "Residential Architectural Floor Plan", type: "Architectural", image: "/images/samples/sample1.JPG", category: "Architectural Building Drawings" },
  { title: "Wastewater Treatment P&ID", type: "Process Engineering", image: "/images/samples/sample2.JPG", category: "P&IDs" },
  { title: "Industrial Process Flow Diagram", type: "Process Engineering", image: "/images/samples/sample3.JPG", category: "Process and Engineering Drawings" },
  { title: "Building Cross-Sections & Details", type: "Civil/Structural", image: "/images/samples/sample4.JPG", category: "Civil Drawings" },
  { title: "Complex Industrial P&ID", type: "Process Engineering", image: "/images/samples/sample5.JPG", category: "P&IDs" },
];

const ImageModal = ({ image, title, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 p-4" onClick={onClose}>
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm uppercase tracking-wider" aria-label="Close">Close</button>
        <img src={image} alt={title} className="w-full h-auto max-h-[85vh] object-contain" />
        <p className="mt-4 text-center text-sm text-white/70">{title}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="section-padding bg-neutral-paper">
        <div className="section-container">
          <div className="mb-16">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="mt-4 max-w-2xl text-stone-600">
              Sample drawing packages across engineering and architectural disciplines.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                className="group text-left"
                onClick={() => openModal(project)}
              >
                <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-widest text-stone-400">{project.category}</p>
                  <h3 className="mt-1 font-display font-semibold text-stone-900">{project.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ImageModal
          image={selectedProject.image}
          title={selectedProject.title}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Projects;
