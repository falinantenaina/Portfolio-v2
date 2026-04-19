const stack = [
  { name: "React", cat: "ui" },
  { name: "Next.js", cat: "ui" },
  { name: "TypeScript", cat: "lang" },
  { name: "Tailwind CSS", cat: "style" },
  { name: "Framer Motion", cat: "anim" },
  { name: "Zustand", cat: "state" },
  { name: "ShadcnUI", cat: "ui" },
  { name: "Figma", cat: "design" },
  { name: "REST APIs", cat: "backend" },
  { name: "Node", cat: "backend" },
  { name: "Express", cat: "backend" },
  { name: "Git", cat: "tools" },
  { name: "Vite", cat: "tools" },
];

const catColor = {
  ui: "#FF2D78",
  lang: "#00E5FF",
  style: "#a78bfa",
  anim: "#fb923c",
  state: "#4ade80",
  design: "#f472b6",
  backend: "#94a3b8",
  tools: "#fbbf24",
};

const services = [
  {
    num: "01",
    title: "Frontend",
    desc: "Je conçois des interfaces modernes qui captent l’attention et améliorent l’expérience de vos utilisateurs.",
  },
  {
    num: "02",
    title: "Backend",
    desc: "Je développe des systèmes fiables et performants pour assurer le bon fonctionnement de votre projet.",
  },
  {
    num: "03",
    title: "Full Stack",
    desc: "Je prends en charge votre projet de A à Z, de l’idée jusqu’à la mise en ligne.",
  },
];

export default function Skills() {
  return (
    <section
      id="about"
      className="relative py-32"
      style={{ overflowX: "clip" }}
    >
      {/* Section marker */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#777] tracking-[4px] uppercase">
            02 — expertise
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        {/* Left — services, plain list style */}
        <div>
          <h2 className="font-display text-[clamp(26px,6vw,36px)] font-extrabold text-white leading-tight mb-12 animate-fadeInUp">
            Ce que je fais,
            <br />
            <span className="scratchy">concrètement.</span>
          </h2>

          <ul className="space-y-0">
            {services.map(({ num, title, desc }, i) => (
              <li
                key={num}
                className="group py-7 border-t border-[#1a1a1a] last:border-b animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-[10px] text-[#777] mt-1.5 shrink-0">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1.5 group-hover:text-pink transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-[#999] text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — stack, scattered tags not a grid */}
        <div className="animate-fadeInUp delay-200">
          <p className="font-mono text-[10px] text-[#777] tracking-[3px] uppercase mb-8">
            stack & outils
          </p>

          {/* Tags in a natural wrap — not a perfect grid */}
          <div className="flex flex-wrap gap-2.5">
            {stack.map(({ name, cat }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: catColor[cat] + "30",
                  color: catColor[cat],
                  background: catColor[cat] + "08",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: catColor[cat] }}
                />
                {name}
              </span>
            ))}
          </div>

          {/* Small note — personal touch */}
          <p className="mt-10 text-[#777] text-xs font-body leading-relaxed italic">
            "J'apprends en permanence. Ce que tu vois là n'est qu'un snapshot."
          </p>
        </div>
      </div>

      {/* Big decorative number */}
      <div
        className="pointer-events-none absolute bottom-0 right-6 font-display font-extrabold text-[clamp(100px,18vw,200px)] leading-none text-white/2 select-none"
        aria-hidden
      >
        02
      </div>
    </section>
  );
}
