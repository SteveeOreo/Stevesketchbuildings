import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  description: "",
};

const RequestForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // In a real implementation, send data to a backend or email service.
  };

  return (
    <section
      id="request"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Request a drawing or project proposal.
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Share a brief outline of your project, the type of drawings you need, and any key
            information such as facility type, process requirements, or project stage. You will
            receive a response with next steps and any clarifying questions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <label htmlFor="name" className="block font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label htmlFor="email" className="block font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="phone" className="block font-medium text-slate-200">
              Phone <span className="text-slate-500 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="+234..."
            />
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="serviceType" className="block font-medium text-slate-200">
              Type of service needed
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={form.serviceType}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
            >
              <option value="">Select a service</option>
              <option value="process-engineering">Process and Engineering Drawings</option>
              <option value="industrial-layouts">Industrial Layouts</option>
              <option value="pids">P&IDs (Piping and Instrumentation Diagrams)</option>
              <option value="hmecs">HMECs (Hazardous Material Emergency Control)</option>
              <option value="civil-drawings">Civil Drawings</option>
              <option value="architectural">Architectural Building Drawings</option>
              <option value="floor-plans">Floor Plans & Space Layouts</option>
              <option value="structural">Structural & Construction Drawings</option>
              <option value="drafting-revisions">Drafting & Design Revisions</option>
              <option value="planning-approval">Planning & Approval Documentation</option>
              <option value="consultation">Consultation & Design Guidance</option>
              <option value="other">Other / not listed</option>
            </select>
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="description" className="block font-medium text-slate-200">
              Project description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="Briefly describe your project, facility type, process requirements, and the drawings or support you need."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-slate-950 hover:bg-accent/90 transition-colors"
          >
            Submit Project Request
          </button>

          {submitted && (
            <p className="text-sm text-emerald-400">
              Thank you. Your project request has been captured. In a real deployment this form
              would send your details directly for review.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default RequestForm;

