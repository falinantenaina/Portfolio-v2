export const Lightbox = ({ project, onClose }) => {
  if (!project) return null;
  const {
    title,
    year,
    type,
    longDesc,
    tags,
    accent,
    url,
    repo,
    status,
    image,
    mockupType,
  } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden animate-fadeInUp"
        style={{
          background: "#111",
          border: "1px solid #222",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-[#bbb] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <X size={15} />
        </button>

        <div
          className="flex flex-col md:flex-row"
          style={{ maxHeight: "90vh" }}
        >
          {/* Preview pane */}
          <div
            className="md:w-[55%] shrink-0"
            style={{
              height: 280,
              background: "#0d0d0d",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            <div className="w-full h-full">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-center"
                />
              ) : (
                <ProjectMockup type={mockupType} accent={accent} />
              )}
            </div>
          </div>

          {/* Info pane */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="font-display text-2xl font-extrabold text-white">
                  {title}
                </h2>
                <StatusBadge status={status} />
              </div>
              <p className="font-mono text-[11px] text-[#bbb] tracking-wide">
                {type} · {year}
              </p>
            </div>

            <p className="text-[#aaa] text-sm leading-relaxed">{longDesc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2.5 py-1 rounded border"
                  style={{
                    borderColor: accent + "28",
                    color: accent,
                    background: accent + "0a",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-2 border-t border-[#1a1a1a] mt-auto">
              <Link
                to={url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-display font-bold text-white hover:text-pink transition-colors"
              >
                <ExternalLink size={13} />
                Voir la démo
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
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
  );
};
