/** Single source of truth for services – used by Header (nav) and Services (grid). */

export const services = [
  { title: "Process and Engineering Drawings", description: "Process flows, equipment specifications, and engineering requirements for industrial and manufacturing facilities." },
  { title: "Industrial Layouts", description: "Equipment placement, material flow, safety zones, and operational efficiency for manufacturing and processing plants." },
  { title: "P&IDs", description: "Piping and instrumentation diagrams with process flow, control loops, and equipment interconnections." },
  { title: "HMECs", description: "Hazardous material emergency control systems, safety protocols, and emergency response documentation." },
  { title: "Civil Drawings", description: "Site plans, grading, drainage, utilities, roads, foundations, and infrastructure layouts." },
  { title: "Architectural Building Drawings", description: "Plans, elevations, sections, and schedules to standard scales for construction and approvals." },
  { title: "Floor Plans & Space Layouts", description: "Space planning for new builds, extensions, and reconfigurations across residential and commercial." },
  { title: "Structural & Construction Drawings", description: "Structural elements, wall build-ups, openings, and critical dimensions for engineers and contractors." },
  { title: "Drafting & Design Revisions", description: "Redrawing and refining existing sketches or mark-ups into accurate CAD drawings." },
  { title: "Planning & Approval Documentation", description: "Plans and supporting drawings aligned with submission requirements for planning or regulatory applications." },
  { title: "Consultation & Design Guidance", description: "Support to review your brief, discuss options, and define the level of drawings you need." },
];

export const servicesNavItems = services.map((s) => ({ title: s.title, href: "#services" }));
