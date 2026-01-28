import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import RequestForm from "./components/RequestForm";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-accent/90" />
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-400">
                Steve Sketch Buildings
              </p>
              <p className="text-xs text-slate-500">
                Architectural Drawing & Drafting Services
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#request" className="hover:text-accent transition-colors">
              Request Drawing
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium tracking-wide uppercase hover:border-accent hover:text-accent transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <RequestForm />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-6 mt-10">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Steve Sketch Buildings. All rights reserved.</p>
          <p className="text-[0.7rem]">
            Professional architectural drawings prepared for construction, approvals, and execution.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

