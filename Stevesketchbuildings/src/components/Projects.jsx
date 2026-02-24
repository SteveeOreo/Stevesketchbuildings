import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Residential Architectural Floor Plan",
    type: "Architectural",
    description:
      "Detailed architectural floor plan showing complete building layout with rooms, dimensions, structural elements, and finishes. Includes bedrooms, living spaces, kitchen, toilets, and all architectural details.",
    image: "/images/samples/sample1.JPG",
    category: "Architectural Building Drawings",
    placeholder: (
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="260" stroke="#475569" strokeWidth="2" fill="#0f172a" />
        <rect x="40" y="40" width="120" height="100" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
        <rect x="180" y="40" width="180" height="100" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
        <rect x="40" y="160" width="160" height="100" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
        <rect x="220" y="160" width="140" height="100" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
        <line x1="200" y1="40" x2="200" y2="140" stroke="#64748b" strokeWidth="1" />
        <line x1="40" y1="140" x2="360" y2="140" stroke="#64748b" strokeWidth="1" />
        <circle cx="100" cy="90" r="3" fill="#64748b" />
        <circle cx="250" cy="90" r="3" fill="#64748b" />
        <text x="200" y="15" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">FLOOR PLAN</text>
      </svg>
    ),
  },
  {
    title: "Wastewater Treatment P&ID",
    type: "Process Engineering",
    description:
      "Comprehensive Piping and Instrumentation Diagram for wastewater treatment facility showing process flow, tanks, pumps, dosing systems, and instrumentation from influent to final effluent discharge.",
    image: "/images/samples/sample2.JPG",
    category: "P&IDs",
    placeholder: (
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="260" stroke="#475569" strokeWidth="2" fill="#0f172a" />
        <rect x="50" y="80" width="80" height="60" stroke="#10b981" strokeWidth="2" fill="#064e3b" rx="4" />
        <rect x="160" y="80" width="80" height="60" stroke="#10b981" strokeWidth="2" fill="#064e3b" rx="4" />
        <rect x="270" y="80" width="80" height="60" stroke="#10b981" strokeWidth="2" fill="#064e3b" rx="4" />
        <circle cx="90" cy="200" r="20" stroke="#10b981" strokeWidth="2" fill="#064e3b" />
        <circle cx="200" cy="200" r="20" stroke="#10b981" strokeWidth="2" fill="#064e3b" />
        <circle cx="310" cy="200" r="20" stroke="#10b981" strokeWidth="2" fill="#064e3b" />
        <path d="M50 110 L160 110" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <path d="M240 110 L270 110" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <path d="M90 180 L90 200" stroke="#10b981" strokeWidth="2" />
        <path d="M200 180 L200 200" stroke="#10b981" strokeWidth="2" />
        <path d="M310 180 L310 200" stroke="#10b981" strokeWidth="2" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
        </defs>
        <text x="200" y="15" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">P&ID DIAGRAM</text>
      </svg>
    ),
  },
  {
    title: "Industrial Process Flow Diagram",
    type: "Process Engineering",
    description:
      "Complex multi-stage industrial process diagram with interconnected equipment, piping systems, control valves, instrumentation, and process flow paths for industrial manufacturing operations.",
    image: "/images/samples/sample3.JPG",
    category: "Process and Engineering Drawings",
    placeholder: (
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="260" stroke="#475569" strokeWidth="2" fill="#0f172a" />
        <rect x="40" y="60" width="100" height="80" stroke="#8b5cf6" strokeWidth="2" fill="#3b0764" rx="4" />
        <rect x="160" y="60" width="100" height="80" stroke="#8b5cf6" strokeWidth="2" fill="#3b0764" rx="4" />
        <rect x="280" y="60" width="100" height="80" stroke="#8b5cf6" strokeWidth="2" fill="#3b0764" rx="4" />
        <rect x="100" y="180" width="120" height="60" stroke="#8b5cf6" strokeWidth="2" fill="#3b0764" rx="4" />
        <rect x="240" y="180" width="120" height="60" stroke="#8b5cf6" strokeWidth="2" fill="#3b0764" rx="4" />
        <path d="M140 100 L160 100" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#arrow2)" />
        <path d="M260 100 L280 100" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#arrow2)" />
        <path d="M160 140 L160 180" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M280 140 L280 180" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M220 210 L240 210" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#arrow2)" />
        <circle cx="90" cy="100" r="8" stroke="#8b5cf6" strokeWidth="1.5" fill="#3b0764" />
        <circle cx="210" cy="100" r="8" stroke="#8b5cf6" strokeWidth="1.5" fill="#3b0764" />
        <circle cx="330" cy="100" r="8" stroke="#8b5cf6" strokeWidth="1.5" fill="#3b0764" />
        <defs>
          <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
          </marker>
        </defs>
        <text x="200" y="15" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">PROCESS FLOW</text>
      </svg>
    ),
  },
  {
    title: "Building Cross-Sections & Details",
    type: "Civil/Structural",
    description:
      "Detailed cross-sectional drawings showing building structure, roof systems, internal layouts, and structural elements. Includes multiple section views at different scales for comprehensive documentation.",
    image: "/images/samples/sample4.JPG",
    category: "Civil Drawings",
    placeholder: (
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="260" stroke="#475569" strokeWidth="2" fill="#0f172a" />
        <path d="M60 240 L60 100 L340 100 L340 240 Z" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
        <path d="M60 100 L200 40 L340 100" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
        <line x1="200" y1="40" x2="200" y2="240" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />
        <rect x="100" y="140" width="60" height="100" stroke="#64748b" strokeWidth="1.5" fill="#0f172a" />
        <rect x="240" y="140" width="60" height="100" stroke="#64748b" strokeWidth="1.5" fill="#0f172a" />
        <line x1="80" y1="180" x2="80" y2="200" stroke="#64748b" strokeWidth="1" />
        <line x1="320" y1="180" x2="320" y2="200" stroke="#64748b" strokeWidth="1" />
        <circle cx="200" cy="60" r="3" fill="#64748b" />
        <text x="200" y="15" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">CROSS-SECTION</text>
      </svg>
    ),
  },
  {
    title: "Complex Industrial P&ID",
    type: "Process Engineering",
    description:
      "Detailed P&ID showing existing, future, and replacement systems with color-coded piping, equipment, instrumentation, and control loops. Includes pump data tables and comprehensive process documentation.",
    image: "/images/samples/sample5.JPG",
    category: "P&IDs",
    placeholder: (
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="260" stroke="#475569" strokeWidth="2" fill="#0f172a" />
        <circle cx="100" cy="100" r="30" stroke="#ef4444" strokeWidth="2" fill="#7f1d1d" />
        <circle cx="200" cy="100" r="30" stroke="#3b82f6" strokeWidth="2" fill="#1e3a8a" />
        <circle cx="300" cy="100" r="30" stroke="#10b981" strokeWidth="2" fill="#064e3b" />
        <rect x="70" y="180" width="60" height="40" stroke="#ef4444" strokeWidth="2" fill="#7f1d1d" rx="4" />
        <rect x="170" y="180" width="60" height="40" stroke="#3b82f6" strokeWidth="2" fill="#1e3a8a" rx="4" />
        <rect x="270" y="180" width="60" height="40" stroke="#10b981" strokeWidth="2" fill="#064e3b" rx="4" />
        <path d="M100 130 L100 180" stroke="#ef4444" strokeWidth="2" />
        <path d="M200 130 L200 180" stroke="#3b82f6" strokeWidth="2" />
        <path d="M300 130 L300 180" stroke="#10b981" strokeWidth="2" />
        <path d="M130 100 L170 100" stroke="#64748b" strokeWidth="2" />
        <path d="M230 100 L270 100" stroke="#64748b" strokeWidth="2" />
        <circle cx="150" cy="100" r="5" fill="#64748b" />
        <circle cx="250" cy="100" r="5" fill="#64748b" />
        <text x="200" y="15" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="monospace">COMPLEX P&ID</text>
      </svg>
    ),
  },
];

const ImageModal = ({ image, title, isOpen, onClose }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setImageLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-slate-50 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-slate-600 border-t-accent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={image}
            alt={title}
            className={`max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl ${
              imageLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
            }`}
            onLoad={() => setImageLoading(false)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 px-6 py-3 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-50 text-center">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onImageClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <article className="group h-full rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden hover:border-accent/80 transition-all">
      <div
        className="relative aspect-[4/3] bg-slate-900/80 overflow-hidden cursor-pointer"
        onClick={() => !imageError && onImageClick(project)}
      >
        {!imageError ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                <div className="w-8 h-8 border-2 border-slate-600 border-t-accent rounded-full animate-spin" />
              </div>
            )}
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-slate-700/50">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  <span className="text-xs text-slate-300 font-medium">Click to view</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            {project.placeholder}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-base font-semibold text-slate-50">{project.title}</h3>
          <span className="inline-flex items-center rounded-full border border-slate-700 px-2.5 py-1 text-xs uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap">
            {project.type}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-2">{project.category}</p>
        <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </article>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <section
        id="projects"
        className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Sample projects and completed drawing packages.
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            These examples showcase our range of engineering and architectural drawing services – from
            process engineering and P&IDs to architectural plans and civil drawings. Click on any image to view in full size.
          </p>
        </div>
        <p className="text-sm text-slate-500 max-w-sm">
          Sample drawings are presented for illustration. Actual client projects and documentation
          are treated with strict confidentiality.
        </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Projects;

