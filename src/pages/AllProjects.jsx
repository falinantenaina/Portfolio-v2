import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Lightbox } from "../components/projects/Lightbox";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
const allTypes = [...new Set(projects.map((p) => p.type))].sort();

export default function AllProjects() {
  const [activeTag, setActiveTag] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const tagOk = !activeTag || p.tags.includes(activeTag);
        const typeOk = !activeType || p.type === activeType;
        return tagOk && typeOk;
      }),
    [activeTag, activeType],
  );

  const hasFilter = activeTag || activeType;

  return (
    <>
      <Lightbox project={lightbox} onClose={() => setLightbox(null)} />

      <div className="min-h-screen bg-dark" style={{ overflowX: "clip" }}>
        {/* Sticky top bar */}
        <div className="sticky top-0 z-40 bg-dark/95 backdrop-blur-xl border-b border-[#141414]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <Link
              to={"/"}
              className="inline-flex items-center gap-2 font-mono text-[11px] text-[#bbb] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft size={13} />
              retour
            </Link>
            <span className="font-display font-extrabold text-white text-sm">
              falinantenaina<span className="text-pink">.</span>
            </span>
            <span className="font-mono text-[10px] text-[#aaa] tracking-widest uppercase">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
          {/* Page header */}
          <div className="mb-16 animate-fadeInUp">
            <p className="font-mono text-[10px] text-[#b0b0b0] tracking-[4px] uppercase mb-5">
              tous les projets
            </p>
            <h1 className="font-display text-[clamp(36px,7vw,64px)] font-extrabold text-white leading-tight">
              Tout ce que
              <br />
              j'ai construit<span className="text-pink">.</span>
            </h1>
            <p className="text-[#bbb] text-sm mt-4 max-w-sm leading-relaxed">
              Du side-project du dimanche soir au projet client livré en prod.
              Tout est là.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 animate-fadeInUp delay-100">
            <div className="flex flex-wrap gap-6 items-start">
              <div>
                <p className="font-mono text-[9px] text-[#aaa] tracking-[3px] uppercase mb-3">
                  Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {allTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setActiveType(activeType === type ? null : type)
                      }
                      className="font-mono text-[10px] px-2.5 py-1 rounded border transition-all duration-150 cursor-pointer"
                      style={
                        activeType === type
                          ? {
                              background: "#FF2D78",
                              borderColor: "#FF2D78",
                              color: "#fff",
                            }
                          : {
                              background: "transparent",
                              borderColor: "#222",
                              color: "#aaa",
                            }
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[9px] text-[#aaa] tracking-[3px] uppercase mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setActiveTag(activeTag === tag ? null : tag)
                      }
                      className="font-mono text-[10px] px-2.5 py-1 rounded border transition-all duration-150 cursor-pointer"
                      style={
                        activeTag === tag
                          ? {
                              background: "#FF2D78",
                              borderColor: "#FF2D78",
                              color: "#fff",
                            }
                          : {
                              background: "transparent",
                              borderColor: "#222",
                              color: "#aaa",
                            }
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilter && (
                <button
                  onClick={() => {
                    setActiveTag(null);
                    setActiveType(null);
                  }}
                  className="self-end font-mono text-[10px] text-pink hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-pink/40 mb-1"
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
                <ProjectCard
                  key={p.num}
                  project={p}
                  index={i}
                  onOpen={setLightbox}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-display text-2xl font-bold text-white/10 mb-3">
                aucun résultat
              </p>
              <button
                onClick={() => {
                  setActiveTag(null);
                  setActiveType(null);
                }}
                className="font-mono text-[11px] text-pink hover:text-white transition-colors cursor-pointer"
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
  );
}
