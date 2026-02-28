import React, { useState, useRef, useCallback, useEffect } from "react";

const IMAGE_BEFORE = "/images/DragToRevealPics/DragtorevealhalfBefore.png";
const IMAGE_AFTER = "/images/DragToRevealPics/DragtorevealhalfAfter.png";

const BeforeAfterSlider = ({ embedded = false }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !e.touches[0]) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "ew-resize";
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const sliderContent = (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden select-none border border-neutral-border bg-stone-100 ring-1 ring-stone-200/50 ring-offset-2 ring-offset-neutral-paper"
        style={{
        aspectRatio: "16/9",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06), 0 10px 28px rgba(0,0,0,0.08)",
      }}
    >
          {/* Base layer: Before (left side) */}
          <div className="absolute inset-0">
            <img
              src={IMAGE_BEFORE}
              alt="Before"
              className="absolute inset-0 h-full w-full object-cover object-center"
              draggable={false}
            />
          </div>

          {/* Clipped layer: After (right side) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 0 0 ${position}%)`,
              WebkitClipPath: `inset(0 0 0 ${position}%)`,
            }}
          >
            <img
              src={IMAGE_AFTER}
              alt="After"
              className="absolute inset-0 h-full w-full object-cover object-center"
              draggable={false}
            />
          </div>

          {/* Slider track and handle */}
          <div
            className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-10 flex items-center justify-center"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsDragging(true);
              if (e.touches[0]) updatePosition(e.touches[0].clientX);
            }}
            role="slider"
            aria-label="Compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={(e) => {
              const step = e.shiftKey ? 10 : 5;
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - step));
              if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + step));
            }}
          >
            <div className="absolute inset-y-0 left-0 right-0 w-14 -translate-x-1/2 pointer-events-auto" style={{ left: `${position}%` }} aria-hidden />
            <div className="h-full w-0.5 bg-white/90 shadow-lg" aria-hidden />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl border-2 border-stone-200 flex items-center justify-center flex-shrink-0 ring-2 ring-stone-300/50"
              aria-hidden
            >
              <svg
                className="w-4 h-4 text-stone-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </div>
  );

  if (embedded) {
    return sliderContent;
  }

  return (
    <section
      id="compare"
      className="section-padding border-t border-neutral-border bg-neutral-paper"
      aria-label="Before and after comparison"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl">
          {sliderContent}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
