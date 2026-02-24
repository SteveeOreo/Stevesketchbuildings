import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const servicesList = [
  { title: "Process and Engineering Drawings", href: "#services" },
  { title: "Industrial Layouts", href: "#services" },
  { title: "P&IDs (Piping and Instrumentation Diagrams)", href: "#services" },
  { title: "HMECs (Hazardous Material Emergency Control)", href: "#services" },
  { title: "Civil Drawings", href: "#services" },
  { title: "Architectural Building Drawings", href: "#services" },
  { title: "Floor Plans & Space Layouts", href: "#services" },
  { title: "Structural & Construction Drawings", href: "#services" },
  { title: "Drafting & Design Revisions", href: "#services" },
  { title: "Planning & Approval Documentation", href: "#services" },
  { title: "Consultation & Design Guidance", href: "#services" },
];

const technologyList = [
  { title: "AutoCAD", href: "#technology" },
  { title: "Revit", href: "#technology" },
  { title: "SolidWorks", href: "#technology" },
  { title: "SketchUp", href: "#technology" },
];

const Dropdown = ({ title, items, isOpen, setIsOpen, buttonRef, closeTimeoutRef }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, buttonRef, setIsOpen]);

  const handleMouseLeave = () => {
    if (closeTimeoutRef) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 250);
    } else {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef && closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-72 rounded-lg border border-slate-800 bg-slate-950 shadow-xl z-50 overflow-hidden"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className="max-h-96 overflow-y-auto">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-900 hover:text-accent transition-colors border-b border-slate-800 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose, servicesList, technologyList }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [technologyExpanded, setTechnologyExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const menuContent = (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-950 border-l border-slate-800 z-[9999] overflow-y-auto md:hidden shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/90 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-50">SDSF</p>
                <p className="text-xs text-slate-400">Engineering Services</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            <div>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-accent transition-colors"
              >
                <span className="font-medium">Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    servicesExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesExpanded && (
                <div className="mt-2 ml-4 space-y-1">
                  {servicesList.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-accent transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setTechnologyExpanded(!technologyExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-accent transition-colors"
              >
                <span className="font-medium">Technology</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    technologyExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {technologyExpanded && (
                <div className="mt-2 ml-4 space-y-1">
                  {technologyList.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-accent transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#projects"
              onClick={onClose}
              className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#request"
              onClick={onClose}
              className="block px-4 py-3 rounded-lg bg-accent text-slate-950 font-semibold text-center hover:bg-accent/90 transition-colors"
            >
              Get Quote
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="block px-4 py-3 rounded-lg border border-slate-700 text-slate-300 text-center hover:border-accent hover:text-accent transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );

  return createPortal(menuContent, document.body);
};

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesButtonRef = useRef(null);
  const technologyButtonRef = useRef(null);
  const servicesCloseTimeoutRef = useRef(null);
  const technologyCloseTimeoutRef = useRef(null);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current);
      }
      if (technologyCloseTimeoutRef.current) {
        clearTimeout(technologyCloseTimeoutRef.current);
      }
    };
  }, []);

  const handleServicesMouseLeave = () => {
    servicesCloseTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  const handleServicesMouseEnter = () => {
    if (servicesCloseTimeoutRef.current) {
      clearTimeout(servicesCloseTimeoutRef.current);
    }
  };

  const handleTechnologyMouseLeave = () => {
    technologyCloseTimeoutRef.current = setTimeout(() => {
      setTechnologyOpen(false);
    }, 250);
  };

  const handleTechnologyMouseEnter = () => {
    if (technologyCloseTimeoutRef.current) {
      clearTimeout(technologyCloseTimeoutRef.current);
    }
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="section-container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold text-slate-50 group-hover:text-accent transition-colors">
              Steve Dynamic Sketches
            </p>
            <p className="text-xs md:text-sm text-slate-400 hidden sm:block">
              Engineering Drawing & Drafting Services
            </p>
            <p className="text-xs text-slate-400 sm:hidden">
              Engineering Services
            </p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-base">
          <div
            className="relative"
            onMouseLeave={handleServicesMouseLeave}
            onMouseEnter={handleServicesMouseEnter}
          >
            <button
              ref={servicesButtonRef}
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setTechnologyOpen(false);
              }}
              onMouseEnter={() => {
                if (servicesCloseTimeoutRef.current) {
                  clearTimeout(servicesCloseTimeoutRef.current);
                }
                setServicesOpen(true);
              }}
              className="flex items-center gap-1 text-slate-300 hover:text-accent transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Dropdown
              title="Services"
              items={servicesList}
              isOpen={servicesOpen}
              setIsOpen={setServicesOpen}
              buttonRef={servicesButtonRef}
              closeTimeoutRef={servicesCloseTimeoutRef}
            />
          </div>

          <div
            className="relative"
            onMouseLeave={handleTechnologyMouseLeave}
            onMouseEnter={handleTechnologyMouseEnter}
          >
            <button
              ref={technologyButtonRef}
              onClick={() => {
                setTechnologyOpen(!technologyOpen);
                setServicesOpen(false);
              }}
              onMouseEnter={() => {
                if (technologyCloseTimeoutRef.current) {
                  clearTimeout(technologyCloseTimeoutRef.current);
                }
                setTechnologyOpen(true);
              }}
              className="flex items-center gap-1 text-slate-300 hover:text-accent transition-colors"
            >
              Technology
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  technologyOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Dropdown
              title="Technology"
              items={technologyList}
              isOpen={technologyOpen}
              setIsOpen={setTechnologyOpen}
              buttonRef={technologyButtonRef}
              closeTimeoutRef={technologyCloseTimeoutRef}
            />
          </div>

          <a
            href="#projects"
            className="text-slate-300 hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a
            href="#request"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold tracking-wide text-slate-950 hover:bg-accent/90 transition-colors"
          >
            Get Quote
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        servicesList={servicesList}
        technologyList={technologyList}
      />
    </header>
  );
};

export default Header;
