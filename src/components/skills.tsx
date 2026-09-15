"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Layers, Server } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    num: "01",
    title: "Frontend",
    icon: Code2,
    desc: "Interfaces modernes et réactives qui captent l'attention et optimisent l'expérience utilisateur.",
  },
  {
    num: "02",
    title: "Backend",
    icon: Server,
    desc: "Systèmes robustes et performants pour supporter vos applications en production.",
  },
  {
    num: "03",
    title: "Full Stack",
    icon: Layers,
    desc: "Gestion complète du projet, du concept initial jusqu'au déploiement en production.",
  },
];

const orbitTechs = [
  { name: "React", img: "/icons/react.svg" },
  { name: "Next.js", img: "/icons/nextdotjs.svg" },
  { name: "Tailwind", img: "/icons/tailwindcss.svg" },
  { name: "Node", img: "/icons/nodedotjs.svg" },
  { name: "Express", img: "/icons/express.svg" },
  { name: "Git", img: "/icons/git.svg" },
  { name: "Figma", img: "/icons/figma.svg" },
  { name: "ShadcnUI", img: "/icons/shadcnui.svg" },
  { name: "MongoDB", img: "/icons/mongodb.svg" },
  { name: "PostgreSQL", img: "/icons/postgresql.svg" },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Figma",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative py-20 lg:py-36 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            02
          </span>
          <div className="w-12 h-px bg-border-light" />
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            expertise
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <h2 className="font-display text-[clamp(28px,5vw,44px)] font-extrabold text-ink leading-tight mb-10 lg:mb-16">
              Ce que je fais
              <br />
              <span className="scratchy">concrètement.</span>
            </h2>

            <div className="space-y-4">
              {services.map(({ num, title, desc, icon: Icon }, i) => (
                <div
                  key={num}
                  className="group relative rounded-xl p-6 border border-border bg-navy-light/50 card-interactive cursor-default"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 border border-border bg-navy transition-all duration-300 group-hover:border-border-light">
                      <Icon size={20} className="text-muted transition-colors duration-300 group-hover:text-soft" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] text-slate">
                          {num}
                        </span>
                        <h3 className="font-display text-lg font-bold text-ink transition-colors duration-200">
                          {title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="font-mono text-[10px] text-slate tracking-[4px] uppercase mb-8">
                stack technique
              </p>

              {mounted && (
                <div className="relative w-full aspect-square max-w-80 mx-auto mb-8">
                  {/* Orbit ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-border/40" />

                  {/* Spinning icons */}
                  <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                    {orbitTechs.map(({ name, img }, i) => {
                      const angle = (i / orbitTechs.length) * 360;
                      const radius = 112;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      return (
                        <div
                          key={name}
                          className="absolute top-1/2 left-1/2 -ml-[22px] -mt-[22px]"
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                          <div
                            className="w-11 h-11 rounded-lg glass flex items-center justify-center border border-border hover:scale-110 hover:border-border-light hover:z-10 cursor-default animate-[spin_30s_linear_infinite_reverse]"
                            title={name}
                          >
                            <img src={img} alt={name} className="w-5 h-5 invert" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Center logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-xl glass flex items-center justify-center border border-border z-10">
                    <img src="/icons/nextdotjs.svg" alt="Next.js" className="w-10 h-10 invert" />
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 justify-center">
                {stack.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium border border-border text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-light cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "8+", label: "Projets" },
                { value: "3+", label: "Années" },
                { value: "15+", label: "Technos" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-3 sm:p-5 text-center border border-border bg-navy-light/50 card-interactive"
                >
                  <p className="font-display font-extrabold text-2xl sm:text-3xl mb-1 text-ink">
                    {value}
                  </p>
                  <p className="font-mono text-[8px] sm:text-[9px] text-slate tracking-[2px] sm:tracking-[3px] uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-slate text-xs font-body leading-relaxed italic text-center">
              &quot;J&apos;apprends en permanence. Ce que tu vois là n&apos;est
              qu&apos;un snapshot.&quot;
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 font-display font-extrabold text-[clamp(80px,20vw,280px)] leading-none text-border/30 select-none"
        aria-hidden
      >
        02
      </div>
    </section>
  );
}
