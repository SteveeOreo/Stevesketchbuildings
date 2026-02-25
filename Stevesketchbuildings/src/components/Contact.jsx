import React, { useState } from "react";

const initialState = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="section-heading">Contact</h2>
            <p className="mt-4 text-stone-600">
              Send an enquiry or contact us directly.
            </p>
            <dl className="mt-10 space-y-4">
              <div>
                <dt className="label-muted">Email</dt>
                <dd className="mt-1"><a href="mailto:Chukwusteve1@gmail.com" className="text-stone-900 hover:text-accent">Chukwusteve1@gmail.com</a></dd>
              </div>
              <div>
                <dt className="label-muted">Phone</dt>
                <dd className="mt-1"><a href="tel:07025389146" className="text-stone-900 hover:text-accent">07025389146</a></dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-sm text-stone-600">Thank you. Your message has been sent.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
