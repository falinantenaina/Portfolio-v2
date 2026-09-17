"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-extrabold text-ink text-lg cursor-pointer group"
          >
            Nantenaina
          </button>

          <div className="flex items-center gap-8">
            {[
              {
                label: "GitHub",
                href: "https://github.com/falinantenaina",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b",
              },
              { label: "Email", href: "mailto:contact@falinantenaina.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] text-slate hover:text-accent transition-colors tracking-[2px] uppercase"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] text-slate flex items-center gap-1.5">
            &copy; {year}
            <Heart size={10} className="text-muted/50" />
          </p>
        </div>
      </div>
    </footer>
  );
}
