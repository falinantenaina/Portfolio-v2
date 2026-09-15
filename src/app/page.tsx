"use client";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Particles from "@/components/particles";
import ProjectsSection from "@/components/projects-section";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden noise-overlay">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
