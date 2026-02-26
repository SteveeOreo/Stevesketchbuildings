import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { services } from "../data/services";

const ServiceDetailModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="absolute inset-0 bg-stone-900/60" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-h-[85vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-xl shadow-xl max-w-lg sm:max-h-[80vh] animate-slide-up">
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-neutral-border bg-white">
          <h3 id="service-modal-title" className="font-display text-lg font-semibold text-stone-900 pr-10">
            {service.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-neutral-paper focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="p-4 text-sm leading-relaxed text-stone-600">{service.description}</p>
      </div>
    </div>
  );
};

const SCROLL_STEP = 2;
const SCROLL_INTERVAL_MS = 40;
const PAUSE_AFTER_INTERACTION_MS = 2500;
const MOBILE_MAX_WIDTH = 767;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const pausedRef = useRef(false);
  const pauseTimeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const pauseAutoScroll = () => {
    pausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
      pauseTimeoutRef.current = null;
    }, PAUSE_AFTER_INTERACTION_MS);
  };

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

    const startAutoScroll = () => {
      if (intervalRef.current) return;
      if (!mediaQuery.matches) return;

      intervalRef.current = setInterval(() => {
        const el = scrollRef.current;
        if (!el || !mediaQuery.matches) return;
        if (el.clientWidth === 0) return;
        if (pausedRef.current) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) return;
        el.scrollLeft += SCROLL_STEP;
        if (el.scrollLeft >= maxScroll - SCROLL_STEP) el.scrollLeft = 0;
      }, SCROLL_INTERVAL_MS);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && mediaQuery.matches) {
          requestAnimationFrame(() => requestAnimationFrame(startAutoScroll));
        } else {
          stopAutoScroll();
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(section);

    if (mediaQuery.matches) {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) requestAnimationFrame(() => requestAnimationFrame(startAutoScroll));
    }

    const onMediaChange = () => {
      if (!mediaQuery.matches) {
        stopAutoScroll();
      } else {
        const r = section.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          requestAnimationFrame(() => requestAnimationFrame(startAutoScroll));
        }
      }
    };
    mediaQuery.addEventListener("change", onMediaChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", onMediaChange);
      stopAutoScroll();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-8 md:mb-16">
          <h2 className="section-heading">Services</h2>
          <p className="mt-3 md:mt-4 max-w-2xl text-stone-600 text-sm md:text-base">
            Construction-ready documentation for industrial and architectural projects.
          </p>
        </div>

        {/* Mobile: horizontal scroll strip with auto-scroll */}
        <div className="md:hidden w-full overflow-hidden min-w-0">
          <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Swipe to explore</p>
          <div
            ref={scrollRef}
            onTouchStart={pauseAutoScroll}
            onPointerDown={pauseAutoScroll}
            onWheel={pauseAutoScroll}
            className="overflow-x-scroll overflow-y-hidden pb-2 -mx-1 snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch", width: "100%" }}
            role="region"
            aria-label="Services list"
          >
            <div className="flex gap-3 w-max min-h-0">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="flex-shrink-0 w-[72vw] max-w-[320px] snap-center rounded-xl border border-neutral-border bg-white p-4 text-left shadow-sm hover:shadow-md hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-sm font-semibold tracking-tight text-stone-900 mt-1 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-accent">View details</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-border">
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

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
