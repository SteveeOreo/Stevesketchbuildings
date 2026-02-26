import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { servicesNavItems } from "../data/services";

const Dropdown = ({ items, isOpen, setIsOpen, buttonRef, closeTimeoutRef }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target))
        setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, buttonRef, setIsOpen]);
  const onLeave = () => closeTimeoutRef?.current && (closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 250));
  const onEnter = () => closeTimeoutRef?.current && clearTimeout(closeTimeoutRef.current);

  return (
    <div className="relative" ref={dropdownRef}>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 max-h-[70vh] overflow-y-auto border border-neutral-border bg-white py-1 z-50 shadow-lg" onMouseLeave={onLeave} onMouseEnter={onEnter}>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block px-5 py-3 text-sm font-medium text-stone-800 hover:bg-accent hover:text-white hover:pl-6 transition-all duration-150 border-l-2 border-transparent hover:border-accent-dark"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose, items }) => {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!mounted) return null;
  const menuContent = (
    <>
      <div className={`fixed inset-0 bg-stone-900/50 z-[9998] md:hidden transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={onClose} />
      <div className={`fixed top-0 right-0 h-full w-[min(320px,88vw)] max-w-full bg-white shadow-xl z-[9999] md:hidden flex flex-col transition-transform duration-200 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between shrink-0 px-5 py-4 border-b border-neutral-border bg-white">
          <span className="font-display font-semibold text-stone-900 text-lg">Menu</span>
          <button onClick={onClose} className="p-2 -mr-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Close menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-5 space-y-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left text-stone-800 font-medium hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
              aria-expanded={expanded}
            >
              <span>Services</span>
              <svg className={`w-4 h-4 text-stone-400 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {expanded && (
              <div className="pl-3 pr-2 pb-2 max-h-[28vh] overflow-y-auto scrollbar-hide border-l-2 border-accent/20 ml-3 space-y-0.5">
                {items.map((item, i) => (
                  <a key={i} href={item.href} onClick={onClose} className="block py-2 pl-3 text-xs text-stone-600 hover:text-accent hover:pl-4 transition-all rounded-r-md hover:bg-stone-50">
                    {item.title}
                  </a>
                ))}
              </div>
            )}
            <a href="#projects" onClick={onClose} className="block py-3 px-3 rounded-lg text-stone-800 font-medium hover:bg-stone-50 transition-colors">
              Projects
            </a>
            <a href="#contact" onClick={onClose} className="block py-3 px-3 rounded-lg text-stone-800 font-medium hover:bg-stone-50 transition-colors">
              Contact
            </a>
          </div>
        </nav>

        <div className="shrink-0 p-5 pt-2 border-t border-neutral-border bg-stone-50/80">
          <Link to="/pricing" onClick={onClose} className="block w-full text-center rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Get Pricing
          </Link>
        </div>
      </div>
    </>
  );
  return createPortal(menuContent, document.body);
};

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const btnRef = useRef(null);
  const timeoutRef = useRef(null);
  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-border bg-white/95 backdrop-blur-sm">
      <div className="section-container flex items-center justify-between h-20 lg:h-24">
        <a href="#home" className="flex items-center gap-4 shrink-0 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm">
          <img
            src="/images/Logos/SD%20logo.PNG"
            alt="Steve Dynamic Sketches and Frameworks"
            width={88}
            height={88}
            className="h-20 w-20 flex-shrink-0 object-contain object-center sm:h-[5rem] sm:w-[5rem] lg:h-24 lg:w-24"
            decoding="async"
            fetchpriority="high"
          />
          <span className="flex flex-col justify-center leading-tight">
            <span className="font-display font-semibold text-stone-900 text-base tracking-tight lg:text-lg">
              Steve Dynamic
            </span>
            <span className="text-xs font-normal text-stone-500 tracking-wide lg:text-sm">
              sketches and frameworks
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div className="relative" onMouseLeave={() => { timeoutRef.current = setTimeout(() => setServicesOpen(false), 250); }} onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}>
            <button
              ref={btnRef}
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 text-stone-700 hover:text-accent"
            >
              Services
              <svg className={`w-4 h-4 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Dropdown items={servicesNavItems} isOpen={servicesOpen} setIsOpen={setServicesOpen} buttonRef={btnRef} closeTimeoutRef={timeoutRef} />
          </div>
          <a href="#projects" className="text-stone-700 hover:text-accent">Projects</a>
          <a href="#contact" className="text-stone-700 hover:text-accent">Contact</a>
          <Link to="/pricing" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Get Pricing
          </Link>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-stone-700" aria-label="Menu">
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} items={servicesNavItems} />
    </header>
  );
};

export default Header;
