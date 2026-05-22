import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export const ProjectCard = ({ project, index, onOpen }) => {
  const {
    num,
    title,
    year,
    type,
    desc,
    tags,
    accent,
    featured,
    status,
    image,
    mockupType,
  } = project;

  return (
    <article
      className="group relative border border-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer hover:border-pink/30 transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={() => onOpen(project)}
    >
      {/* Preview */}
      <div
        className="relative overflow-hidden"
        style={{ height: 200, background: "#0d0d0d" }}
      >
        {image && 
          <img src={image} alt={title} className="w-full h-full object-fill" />
}


        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(0,0,0,.55)" }}
        >
          <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Voir le projet
            <ArrowUpRight size={11} />
          </span>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-cyan/15 text-cyan border border-cyan/25 tracking-widest uppercase">
              récent
            </span>
          </div>
        )}

        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h2 className="font-display text-lg font-extrabold text-white group-hover:text-pink transition-colors duration-200">
            {title}
          </h2>
          <StatusBadge status={status} />
        </div>
        <p className="font-mono text-[10px] text-[#b0b0b0] mb-3 tracking-wide">
          {type} · {year}
        </p>
        <p className="text-[#bbb] text-sm leading-relaxed mb-4 line-clamp-2">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
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
      </div>
    </article>
  );
};
