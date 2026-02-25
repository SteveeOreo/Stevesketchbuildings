import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-neutral-paper section-padding">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="section-heading">
              Engineering drawings with precision and clarity.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              We deliver engineering and architectural drawings that meet industry standards
              and support successful project execution—with technical accuracy and attention to detail.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="border-l-2 border-accent pl-8">
              <p className="font-display text-xl font-semibold tracking-tight text-stone-900">
                Our mission is to deliver construction-ready documentation that helps 
                clients, contractors, and consultants build with confidence—from first 
                concept to final issue.
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="label-muted">Expertise</h3>
                <p className="mt-3 text-stone-700">
                  Process engineering, P&IDs, industrial layouts, HMECs, architectural 
                  plans, and civil drawings for manufacturing and construction.
                </p>
              </div>
              <div>
                <h3 className="label-muted">Standards</h3>
                <p className="mt-3 text-stone-700">
                  Drawings prepared to relevant engineering standards, with proper 
                  instrumentation and technical details ready for construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
