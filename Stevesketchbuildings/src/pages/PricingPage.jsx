import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const initialState = {
  name: "",
  email: "",
  serviceType: "",
  description: "",
};

const PricingPage = () => {
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
    <div className="min-h-screen bg-stone-100">
      {/* Black header with organic shapes – same black as homepage hero */}
      <header className="relative h-64 sm:h-72 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-stone-800/90" />
          <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-stone-900/80" />
          <div className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-stone-800/70" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get Pricings
          </h1>
          <p className="mt-3 text-white/90 text-base sm:text-lg">
            Request prices for our services.
          </p>
        </div>
        <Link
          to="/"
          className="absolute top-4 left-4 sm:left-6 text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </header>

      {/* White form container overlapping header */}
      <div className="relative z-10 mx-4 sm:mx-6 lg:mx-auto lg:max-w-2xl -mt-16 sm:-mt-20">
        <div className="rounded-xl sm:rounded-2xl bg-white shadow-xl border border-stone-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            <p className="text-stone-600 text-sm italic mb-6">
              Your privacy is our priority. We take every step to protect your personal information.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="pricing-name" className="sr-only">Full Name</label>
                <input
                  id="pricing-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Full Name *"
                />
              </div>
              <div>
                <label htmlFor="pricing-email" className="sr-only">E-mail</label>
                <input
                  id="pricing-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="E-mail *"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="pricing-service" className="sr-only">Service</label>
              <select
                id="pricing-service"
                name="serviceType"
                required
                value={form.serviceType}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent appearance-none pr-10 bg-no-repeat bg-[length:1.25rem] bg-[right_0.75rem_center]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / not listed</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="pricing-description" className="sr-only">Details or questions</label>
              <textarea
                id="pricing-description"
                name="description"
                required
                rows={5}
                value={form.description}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y min-h-[120px]"
                placeholder="Any details or questions?"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Submit
              </button>
            </div>

            {submitted && (
              <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <p className="font-medium">Thank you.</p>
                <p className="mt-1 text-green-700">
                  Your request has been received. We’ll get back to you with pricing and next steps.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default PricingPage;
