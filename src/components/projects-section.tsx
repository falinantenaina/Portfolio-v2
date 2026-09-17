"use client";

import { projects as allProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Project } from "@/lib/types";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const featured = allProjects.filter((p) => p.featured).slice(0, 3);
const rest = allProjects.filter((p) => !p.featured);

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index === 0;
  const href = project.url || project.repo || undefined;

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden border border-border/40 bg-navy-light/40 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_60px_rgba(0,229,255,0.06)] ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div
        className={`grid gap-0 h-full ${
          isLarge ? "md:grid-cols-[1.2fr_1fr]" : "grid-rows-[1fr_auto]"
        }`}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden group/img"
          style={{
            minHeight: isLarge ? 400 : 240,
            background: "#0a0e1a",
          }}
        >
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">Voir le projet</span>
            </Link>
          ) : null}

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl border-2 border-border/40 flex items-center justify-center">
                  <span className="font-display text-3xl font-extrabold text-border/40">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute -inset-4 rounded-3xl border border-border/20 animate-pulse" />
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold px-3 py-1.5 rounded-lg bg-accent/15 text-accent border border-accent/25 tracking-widest uppercase backdrop-blur-md">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse-dot" />
                récent
              </span>
            </div>
          )}

          {/* Hover overlay */}
          {href && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-navy/60 backdrop-blur-sm pointer-events-none">
              <span className="inline-flex items-center gap-2 font-display text-sm font-bold text-white px-6 py-3 rounded-xl bg-accent/15 border border-accent/30 backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Voir le projet <ArrowUpRight size={14} />
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                {project.type}
              </span>
              <span className="w-1 h-1 rounded-full bg-border-light" />
              <span className="font-mono text-[10px] text-slate tracking-widest uppercase">
                {project.year}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted text-sm leading-relaxed mb-5">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, isLarge ? 6 : 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor: project.accent + "25",
                    color: project.accent,
                    background: project.accent + "08",
                  }}
                >
                  {t}
                </span>
              ))}
              {project.tags.length > (isLarge ? 6 : 4) && (
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-md border border-border text-slate">
                  +{project.tags.length - (isLarge ? 6 : 4)}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-6 pt-5 border-t border-border/40">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-display font-bold text-accent hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                Démo live
                <ArrowUpRight
                  size={12}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-slate hover:text-ink transition-colors"
              >
                <Github size={12} />
                Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  const href = project.url || project.repo || "/projects";

  return (
    <Link
      href={href}
      target={project.url || project.repo ? "_blank" : undefined}
      rel={project.url || project.repo ? "noreferrer" : undefined}
      className="group relative block rounded-xl overflow-hidden border border-border/40 bg-navy-light/40 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,229,255,0.04)]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div
          className="relative overflow-hidden shrink-0"
          style={{ width: "100%", height: 180, background: "#0a0e1a" }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-4xl font-extrabold text-border/30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-navy/50 sm:bg-linear-to-r sm:from-transparent sm:to-navy/80" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] text-accent tracking-widest uppercase">
                {project.type}
              </span>
              <span className="w-1 h-1 rounded-full bg-border-light" />
              <span className="font-mono text-[9px] text-slate tracking-widest uppercase">
                {project.year}
              </span>
            </div>
            <h3 className="font-display text-lg font-extrabold text-ink mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-3">
              {project.desc}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] px-2 py-0.5 rounded border"
                  style={{
                    borderColor: project.accent + "20",
                    color: project.accent,
                    background: project.accent + "06",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate group-hover:text-accent transition-colors">
              Voir
              <ArrowUpRight
                size={10}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section id="projects" className="relative py-20 lg:py-36 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            03
          </span>
          <div className="w-12 h-px bg-border-light" />
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            travaux
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <h2 className="font-display text-[clamp(28px,5vw,44px)] font-extrabold text-ink leading-tight">
            Projets récents<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Featured bento grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {featured.map((p, i) => (
            <FeaturedCard key={p.num} project={p} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-border-light" />
              <span className="font-mono text-[9px] text-slate tracking-[4px] uppercase">
                autres projets
              </span>
              <div className="flex-1 h-px bg-border/30" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((p, i) => (
                <CompactCard key={p.num} project={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative number */}
      <div
        className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 font-display font-extrabold text-[clamp(80px,20vw,280px)] leading-none text-border/20 select-none"
        aria-hidden
      >
        03
      </div>
    </section>
  );
}
