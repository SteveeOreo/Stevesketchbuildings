import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // In a real implementation, send message to a contact inbox or CRM.
  };

  return (
    <section
      id="contact"
      className="section-container py-12 md:py-16 lg:py-20 border-t border-slate-900/60"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Contact & next steps.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            Use the form to share a short message or follow-up question. You can also reach out
            directly by email or phone using the details provided.
          </p>
          <dl className="mt-6 space-y-3 text-xs text-slate-300">
            <div>
              <dt className="font-semibold text-slate-200">Email</dt>
              <dd className="mt-0.5 text-slate-400">
                stevesketchbuildings@example.com
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-200">
                Phone <span className="font-normal text-slate-500">(optional)</span>
              </dt>
              <dd className="mt-0.5 text-slate-400">+234 000 000 0000</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4"
        >
          <div className="space-y-1.5 text-xs">
            <label htmlFor="contact-name" className="block font-medium text-slate-200">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5 text-xs">
            <label htmlFor="contact-email" className="block font-medium text-slate-200">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1.5 text-xs">
            <label htmlFor="contact-message" className="block font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="Share a brief message or question."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-slate-950 hover:bg-accent/90 transition-colors"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-[0.7rem] text-emerald-400">
              Your message has been recorded. In a live site this form would deliver your query
              directly to the architect.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

