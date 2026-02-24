import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechnologyPlatforms from "./components/TechnologyPlatforms";
import Projects from "./components/Projects";
import Advantages from "./components/Advantages";
import CTA from "./components/CTA";
import RequestForm from "./components/RequestForm";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <TechnologyPlatforms />
        <Projects />
        <Advantages />
        <CTA />
        <RequestForm />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-10 mt-10 bg-slate-950/50">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-sm bg-accent/90" />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                  Steve Dynamic Sketches
                </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Professional engineering and architectural drawings prepared for construction, approvals, and execution.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-slate-300 mb-4 uppercase tracking-[0.18em]">Services</h3>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#services" className="hover:text-accent transition-colors">Process Engineering</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">P&IDs</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Industrial Layouts</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Civil Drawings</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-slate-300 mb-4 uppercase tracking-[0.18em]">Technology</h3>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#technology" className="hover:text-accent transition-colors">AutoCAD</a></li>
                <li><a href="#technology" className="hover:text-accent transition-colors">Revit</a></li>
                <li><a href="#technology" className="hover:text-accent transition-colors">SolidWorks</a></li>
                <li><a href="#technology" className="hover:text-accent transition-colors">SketchUp</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-slate-300 mb-4 uppercase tracking-[0.18em]">Contact</h3>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#contact" className="hover:text-accent transition-colors">Get Quote</a></li>
                <li><a href="#request" className="hover:text-accent transition-colors">Request Drawing</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Book Meeting</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Steve Dynamic Sketches and Frameworks. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-accent transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

