import { useState, useMemo } from 'react'
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, X } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectMockup } from '../components/ProjectMockup'

const allTags  = [...new Set(projects.flatMap(p => p.tags))].sort()
const allTypes = [...new Set(projects.map(p => p.type))].sort()

const statusStyle = {
  'En ligne': { text: '#4ade80' },
  'Livré':    { text: '#94a3b8' },
  'Archivé':  { text: '#444'    },
}

function StatusBadge({ status }) {
  const s = statusStyle[status] || statusStyle['Archivé']
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded border"
      style={{
        color: s.text,
        borderColor: s.text + '30',
        background: s.text + '0a',
      }}
    >
      {status === 'En ligne' && (
        <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: s.text }} />
      )}
      {status}
    </span>
  )
}

// ── Full-screen lightbox ──────────────────────────────────────────
function Lightbox({ project, onClose }) {
  if (!project) return null
  const { title, year, type, longDesc, tags, accent, demo, repo, status, image, mockupType } = project

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden animate-fadeInUp"
        style={{ background: '#111', border: '1px solid #222', maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-[#bbb] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <X size={15} />
        </button>

        <div className="flex flex-col md:flex-row" style={{ maxHeight: '90vh' }}>
          {/* Preview pane */}
          <div
            className="md:w-[55%] shrink-0"
            style={{ height: 280, background: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}
          >
            <div className="w-full h-full">
              {image
                ? <img src={image} alt={title} className="w-full h-full object-cover" />
                : <ProjectMockup type={mockupType} accent={accent} />
              }
            </div>
          </div>

          {/* Info pane */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="font-display text-2xl font-extrabold text-white">{title}</h2>
                <StatusBadge status={status} />
              </div>
              <p className="font-mono text-[11px] text-[#bbb] tracking-wide">{type} · {year}</p>
            </div>

            <p className="text-[#aaa] text-sm leading-relaxed">{longDesc}</p>

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

            {/* Actions */}
            <div className="flex gap-4 pt-2 border-t border-[#1a1a1a] mt-auto">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-display font-bold text-white hover:text-[#FF2D78] transition-colors"
              >
                <ExternalLink size={13} />
                Voir la démo
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-[#bbb] hover:text-white transition-colors"
              >
                <Github size={12} />
                Code source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Project card ──────────────────────────────────────────────────
function ProjectCard({ project, index, onOpen }) {
  const { num, title, year, type, desc, tags, accent, featured, status, image, mockupType } = project

  return (
    <article
      className="group relative border border-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF2D78]/30 transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={() => onOpen(project)}
    >
      {/* Preview */}
      <div className="relative overflow-hidden" style={{ height: 200, background: '#0d0d0d' }}>
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover" />
          : <ProjectMockup type={mockupType} accent={accent} />
        }

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(0,0,0,.55)' }}>
          <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Voir le projet
            <ArrowUpRight size={11} />
          </span>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/25 tracking-widest uppercase">
              récent
            </span>
          </div>
        )}

        {/* Accent bar bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h2 className="font-display text-lg font-extrabold text-white group-hover:text-[#FF2D78] transition-colors duration-200">
            {title}
          </h2>
          <StatusBadge status={status} />
        </div>
        <p className="font-mono text-[10px] text-[#b0b0b0] mb-3 tracking-wide">{type} · {year}</p>
        <p className="text-[#bbb] text-sm leading-relaxed mb-4 line-clamp-2">{desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded border"
              style={{ borderColor: accent + '25', color: accent, background: accent + '08' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export default function AllProjects({ onBack }) {
  const [activeTag,  setActiveTag]  = useState(null)
  const [activeType, setActiveType] = useState(null)
  const [lightbox,   setLightbox]   = useState(null)

  const filtered = useMemo(() => projects.filter(p => {
    const tagOk  = !activeTag  || p.tags.includes(activeTag)
    const typeOk = !activeType || p.type === activeType
    return tagOk && typeOk
  }), [activeTag, activeType])

  const hasFilter = activeTag || activeType

  return (
    <>
      <Lightbox project={lightbox} onClose={() => setLightbox(null)} />

      <div className="min-h-screen bg-[#0A0A0A]" style={{ overflowX: 'clip' }}>

        {/* Sticky top bar */}
        <div className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#141414]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 font-mono text-[11px] text-[#bbb] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft size={13} />
              retour
            </button>
            <span className="font-display font-extrabold text-white text-sm">
              fali<span className="text-[#FF2D78]">.</span>
            </span>
            <span className="font-mono text-[10px] text-[#aaa] tracking-widest uppercase">
              {filtered.length} projet{filtered.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">

          {/* Page header */}
          <div className="mb-16 animate-fadeInUp">
            <p className="font-mono text-[10px] text-[#b0b0b0] tracking-[4px] uppercase mb-5">tous les projets</p>
            <h1 className="font-display text-[clamp(36px,7vw,64px)] font-extrabold text-white leading-tight">
              Tout ce que<br />
              j'ai construit<span className="text-[#FF2D78]">.</span>
            </h1>
            <p className="text-[#bbb] text-sm mt-4 max-w-sm leading-relaxed">
              Du side-project du dimanche soir au projet client livré en prod. Tout est là.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 animate-fadeInUp delay-100">
            <div className="flex flex-wrap gap-6 items-start">
              <div>
                <p className="font-mono text-[9px] text-[#aaa] tracking-[3px] uppercase mb-3">Type</p>
                <div className="flex flex-wrap gap-2">
                  {allTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setActiveType(activeType === type ? null : type)}
                      className="font-mono text-[10px] px-2.5 py-1 rounded border transition-all duration-150 cursor-pointer"
                      style={activeType === type
                        ? { background: '#FF2D78', borderColor: '#FF2D78', color: '#fff' }
                        : { background: 'transparent', borderColor: '#222', color: '#aaa' }
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[9px] text-[#aaa] tracking-[3px] uppercase mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                      className="font-mono text-[10px] px-2.5 py-1 rounded border transition-all duration-150 cursor-pointer"
                      style={activeTag === tag
                        ? { background: '#FF2D78', borderColor: '#FF2D78', color: '#fff' }
                        : { background: 'transparent', borderColor: '#222', color: '#aaa' }
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilter && (
                <button
                  onClick={() => { setActiveTag(null); setActiveType(null) }}
                  className="self-end font-mono text-[10px] text-[#FF2D78] hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-[#FF2D78]/40 mb-1"
                >
                  reset
                </button>
              )}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <ProjectCard key={p.num} project={p} index={i} onOpen={setLightbox} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-display text-2xl font-bold text-white/10 mb-3">aucun résultat</p>
              <button
                onClick={() => { setActiveTag(null); setActiveType(null) }}
                className="font-mono text-[11px] text-[#FF2D78] hover:text-white transition-colors cursor-pointer"
              >
                reset les filtres
              </button>
            </div>
          )}

          <p className="mt-16 font-mono text-[10px] text-[#bbb] italic text-center">
            D'autres projets arrivent. Je code en ce moment.
          </p>
        </div>
      </div>
    </>
  )
}
