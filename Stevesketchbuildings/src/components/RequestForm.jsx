import React, { useState } from "react";
import { services } from "../data/services";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section id="pricing" className="section-padding bg-neutral-paper border-t border-neutral-border">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="section-heading">Get Pricing</h2>
            <p className="mt-4 text-stone-600 text-base md:text-lg leading-relaxed max-w-xl">
              Tell us which service you need and a bit about your project. We’ll get back to you with a clear quote and next steps—no obligation.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-semibold">1</span>
                <span>Choose the type of drawing or service you need.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-semibold">2</span>
                <span>Share your project details so we can tailor the quote.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-semibold">3</span>
                <span>We’ll respond with pricing and any follow-up questions.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:p-8 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="pricing-name" className="block text-sm font-medium text-stone-700">
                    Name
                  </label>
                  <input
                    id="pricing-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="pricing-email" className="block text-sm font-medium text-stone-700">
                    Email
                  </label>
                  <input
                    id="pricing-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="pricing-phone" className="block text-sm font-medium text-stone-700">
                  Phone <span className="font-normal text-stone-400">(optional)</span>
                </label>
                <input
                  id="pricing-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+234 700 000 0000"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="pricing-service" className="block text-sm font-medium text-stone-700">
                  Service you need pricing for
                </label>
                <select
                  id="pricing-service"
                  name="serviceType"
                  required
                  value={form.serviceType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / not listed</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="pricing-description" className="block text-sm font-medium text-stone-700">
                  Project description
                </label>
                <textarea
                  id="pricing-description"
                  name="description"
                  required
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  className="input-field resize-y min-h-[120px]"
                  placeholder="e.g. Facility type, process or scope, project stage, and any specific drawing requirements. The more detail you share, the more accurate we can make the quote."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Request quote
                </button>
              </div>

              {submitted && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <p className="font-medium">Thank you.</p>
                  <p className="mt-1 text-green-700">
                    Your request has been received. We’ll review it and get back to you with pricing and next steps.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
