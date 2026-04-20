import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects as allProjects } from "../data/projects";

const featured = allProjects.slice(0, 3);

function ProjectRow({ project, index }) {
  const { num, title, year, type, desc, tags, accent, featured } = project;

  return (
    <Link
      to={project.url}
      target="_blank"
      className="group block border-t border-[#1a1a1a] py-8 hover:bg-white/1.5 transition-colors duration-200 px-2 -mx-2 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
        <span className="font-mono text-[10px] text-[#b0b0b0] md:w-16 shrink-0">
          {num}
        </span>

        <div className="md:flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-display text-xl font-bold text-white group-hover:text-pink transition-colors duration-200">
              {title}
            </h3>
            {featured && (
              <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20 tracking-widest uppercase">
                récent
              </span>
            )}
          </div>
          <p className="text-[#bbb] text-xs font-mono">
            {type} · {year}
          </p>
        </div>

        <p className="md:w-70 text-[#bbb] text-sm leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 shrink-0">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 md:w-45 md:justify-end shrink-0">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded border"
              style={{
                borderColor: accent + "25",
                color: accent,
                background: accent + "08",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="md:ml-6 shrink-0">
          <ArrowUpRight
            size={16}
            className="text-[#b0b0b0] group-hover:text-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#b0b0b0] tracking-[4px] uppercase">
            03 — travaux
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-4xl font-extrabold text-white leading-tight animate-fadeInUp">
            Projets récents.
          </h2>
          <Link
            to={"/projects"}
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] text-[#bbb] hover:text-white transition-colors duration-150 cursor-pointer"
          >
            tout voir
            <ArrowUpRight size={12} />
          </Link>
        </div>

        <div>
          {featured.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
          <div className="h-px bg-[#1a1a1a]" />
        </div>

        <div className="md:hidden mt-8">
          <Link
            to={"/projects"}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#bbb] hover:text-white transition-colors cursor-pointer"
          >
            voir tous les projets ({allProjects.length})
            <ArrowUpRight size={12} />
          </Link>
        </div>

        <div className="hidden md:flex justify-center mt-10 animate-fadeInUp delay-400">
          <Link
            to={"/projects"}
            className="group inline-flex items-center gap-2 font-mono text-[11px] text-[#b0b0b0] hover:text-white transition-colors duration-150 cursor-pointer"
          >
            voir les {allProjects.length} projets
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-6 font-display font-extrabold text-[clamp(100px,18vw,200px)] leading-none text-white/2 select-none"
        aria-hidden
      >
        03
      </div>
    </section>
  );
}
