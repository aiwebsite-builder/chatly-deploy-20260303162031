import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[var(--font-sans)] text-[var(--foreground)] antialiased relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
