import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects as allProjects } from '../data/projects'


// 3 projets en homepage
const featured = allProjects.slice(0, 3)

function ProjectCard({ project, index, onViewAll }) {
  const { title, year, type, desc, tags, accent, demo, image, mockupType, featured: isFeatured } = project

  // Layout alterné : grand à gauche / droite
  const isLarge = index === 0

  return (
    <article
      className="group relative animate-fadeInUp"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div
        className={`
          grid gap-0 rounded-2xl overflow-hidden border border-[#1a1a1a]
          hover:border-[#FF2D78]/25 transition-all duration-300
          ${isLarge ? 'md:grid-cols-[1.4fr_1fr]' : 'grid-cols-1'}
        `}
        style={{ background: '#0e0e0e' }}
      >
        {/* ── Image / Mockup ── */}
        <div
          className="relative overflow-hidden"
          style={{
            height: isLarge ? 'auto' : 220,
            minHeight: isLarge ? 340 : 'auto',
            background: '#0d0d0d',
            borderRight: isLarge ? '1px solid #1a1a1a' : 'none',
            borderBottom: isLarge ? 'none' : '1px solid #1a1a1a',
          }}
        >
          {/* Actual image or CSS mockup */}
          {image &&
             <img src={image} alt={title} className="w-full h-full object-cover object-top" />
          
          }

          {/* Gradient fade bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0e0e0e, transparent)' }}
          />

          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <span className="font-mono text-[9px] font-bold px-2 py-1 rounded bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/25 tracking-widest uppercase">
                récent
              </span>
            </div>
          )}

          {/* Hover — voir le projet */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={onViewAll}
          >
            <span
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-white px-4 py-2 rounded-full"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
            >
              Voir le projet <ArrowUpRight size={13} />
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className={`flex flex-col justify-between p-7 ${isLarge ? '' : ''}`}>
          <div>
            {/* Type + year */}
            <p className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-4">
              {type} · {year}
            </p>

            {/* Title */}
            <h3
              className="font-display font-extrabold text-white mb-3 leading-tight group-hover:text-[#FF2D78] transition-colors duration-200"
              style={{ fontSize: isLarge ? 28 : 22 }}
            >
              {title}
            </h3>

            {/* Desc */}
            <p className="text-[#aaa] text-sm leading-relaxed mb-6">
              {desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2.5 py-1 rounded border"
                  style={{ borderColor: accent + '28', color: accent, background: accent + '0a' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 mt-8 pt-6 border-t border-[#1a1a1a]">
            <a
              href={demo !== '#' ? demo : undefined}
              onClick={demo === '#' ? (e) => { e.preventDefault(); onViewAll() } : undefined}
              target={demo !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-display text-sm font-bold text-white hover:text-[#FF2D78] transition-colors duration-150"
            >
              <ExternalLink size={13} />
              Voir la démo
              <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={onViewAll}
              className="font-mono text-[11px] text-[#555] hover:text-[#aaa] transition-colors cursor-pointer"
            >
              + de détails
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects({ onViewAll }) {
  return (
    <section id="projects" className="relative py-32" style={{ overflowX: 'clip' }}>

      {/* Section marker */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#555] tracking-[4px] uppercase">03 — travaux</span>
          <div className="flex-1 h-px bg-[#1c1c1c]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-[clamp(28px,5vw,42px)] font-extrabold text-white leading-tight animate-fadeInUp">
            Projets récents.
          </h2>
          <button
            onClick={onViewAll}
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] text-[#aaa] hover:text-white transition-colors duration-150 cursor-pointer"
          >
            tout voir
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Cards layout :
            - projet 0 : full-width, image à gauche, texte à droite
            - projets 1 & 2 : 2 colonnes côte à côte
        */}
        <div className="flex flex-col gap-5">

          {/* Premier projet — grande carte */}
          <ProjectCard project={featured[0]} index={0} onViewAll={onViewAll} />

          {/* Deux autres — grille 2 col */}
          <div className="grid md:grid-cols-2 gap-5">
            {featured.slice(1).map((p, i) => (
              <ProjectCard key={p.num} project={p} index={i + 1} onViewAll={onViewAll} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-8">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#aaa] hover:text-white transition-colors cursor-pointer"
          >
            voir tous les projets ({allProjects.length})
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex justify-center mt-12 animate-fadeInUp delay-400">
          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 font-mono text-[11px] text-[#555] hover:text-white transition-colors duration-150 cursor-pointer"
          >
            voir les {allProjects.length} projets
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative number */}
      <div className="pointer-events-none absolute bottom-0 right-6 font-display font-extrabold text-[clamp(100px,18vw,200px)] leading-none text-white/[0.02] select-none" aria-hidden>
        03
      </div>
    </section>
  )
}