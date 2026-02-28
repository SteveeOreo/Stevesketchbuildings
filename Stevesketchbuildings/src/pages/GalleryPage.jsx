import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <Header />
      <main className="flex-1">
        <section className="section-padding border-t border-neutral-border bg-neutral-paper">
          <div className="section-container">
            <h1 className="section-heading">Our Gallery</h1>
            <p className="mt-4 max-w-2xl text-stone-600">
              A collection of our work. More projects will be added here as we complete them.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder for future gallery items */}
              <div className="rounded-xl border border-neutral-border bg-stone-50 p-8 text-center text-stone-500">
                <p className="text-sm">Gallery content coming soon.</p>
              </div>
              <div className="rounded-xl border border-neutral-border bg-stone-50 p-8 text-center text-stone-500">
                <p className="text-sm">Gallery content coming soon.</p>
              </div>
              <div className="rounded-xl border border-neutral-border bg-stone-50 p-8 text-center text-stone-500">
                <p className="text-sm">Gallery content coming soon.</p>
              </div>
            </div>
            <p className="mt-8">
              <Link to="/" className="text-accent hover:underline font-medium">
                ← Back to home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
