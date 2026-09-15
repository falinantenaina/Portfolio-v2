"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        <button
          onClick={() => go("#hero")}
          className="relative font-display font-extrabold text-ink text-xl tracking-tight cursor-pointer leading-none group"
        >
          Nantenaina
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => go(href)}
                className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 cursor-pointer tracking-wide rounded-lg ${
                  activeSection === href
                    ? "text-ink"
                    : "text-muted hover:text-soft"
                }`}
              >
                {label}
                {activeSection === href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:contact@falinantenaina.com"
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono font-medium text-navy bg-accent px-5 py-2.5 rounded-lg hover:bg-ink transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse-dot" />
          Me contacter
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          aria-label="menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink rounded-full transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-1.75" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-muted rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink rounded-full transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-1.75" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 sm:px-6 pt-4 pb-6 glass-strong mx-4 mt-3 rounded-2xl border border-border">
          <ul className="flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => go(href)}
                  className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer rounded-lg transition-all ${
                    activeSection === href
                      ? "text-ink bg-white/5"
                      : "text-muted hover:text-soft hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
