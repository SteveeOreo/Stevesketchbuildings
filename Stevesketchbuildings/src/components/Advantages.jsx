import React from "react";

const advantages = [
  {
    title: "Industry Standards",
    description: "All drawings prepared to relevant engineering and architectural standards",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quick Turnaround",
    description: "Efficient workflows ensuring timely delivery of your project documentation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks ensuring accuracy and completeness of all deliverables",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Experienced professionals with deep knowledge in engineering and architectural drafting",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Services",
    description: "End-to-end support from concept to construction-ready documentation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Client-Focused",
    description: "Dedicated support and clear communication throughout your project",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const Advantages = () => {
  return (
    <section className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60 bg-slate-900/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-4">
          Why Choose Us
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          We combine technical expertise, industry-standard tools, and a commitment to excellence
          to deliver drawings that meet your project requirements.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-accent/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-50 mb-2">{advantage.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
