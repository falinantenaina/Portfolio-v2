"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center noise-overlay px-6">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" />

      <div className="relative text-center">
        <span className="font-display text-[clamp(100px,25vw,200px)] font-extrabold text-border/30 leading-none select-none">
          404
        </span>

        <div className="mt-6 mb-8">
          <p className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-3">
            Page introuvable
          </p>
          <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
            La page que tu cherches n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-accent hover:text-ink transition-colors duration-200 px-5 py-2.5 rounded-lg border border-accent/25 hover:border-border"
        >
          ← retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
