"use client";

import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/falinantenaina", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b/",
    label: "LinkedIn",
  },
  { icon: Phone, href: "https://wa.me/261343243730", label: "WhatsApp" },
];

const roles = [
  "Développeur Frontend",
  "Développeur Backend",
  "Full Stack Dev",
  "Freelance",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />

      <div className="pointer-events-none absolute top-[20%] left-0 right-0 h-px bg-border/40" />
      <div className="pointer-events-none absolute top-[50%] left-0 right-0 h-px bg-border/30" />
      <div className="pointer-events-none absolute top-[80%] left-0 right-0 h-px bg-border/40" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 w-full pt-20 sm:pt-24 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8 animate-fadeInDown glass rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[11px] text-muted tracking-wider">
              Disponible pour missions
            </span>
          </div>

          <div className="animate-fadeInUp delay-100">
            <p className="font-body text-muted text-base sm:text-lg mb-3">
              Salut, je suis
            </p>
            <h1 className="font-display font-extrabold leading-[0.9] text-ink">
              <span className="block text-[clamp(32px,8vw,80px)] tracking-tight">
                Nantenaina
              </span>
              <span className="block text-[clamp(32px,8vw,80px)] tracking-tight gradient-text">
                Ranaivojaona
              </span>
            </h1>
          </div>

          <div className="mt-6 animate-fadeInUp delay-200">
            <div className="inline-flex items-center gap-2 font-mono text-accent text-[clamp(13px,2vw,18px)]">
              <span className="text-slate">&gt;</span>
              <span>{text}</span>
              <span className="animate-[blink_1s_step-end_infinite] text-accent">
                |
              </span>
            </div>
          </div>

          <div className="mt-6 animate-fadeInUp delay-300">
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Je crée des applications web modernes, performantes et
              élégantes. De l&apos;idée au déploiement, je transforme vos
              visions en réalité digitale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-10 animate-fadeInUp delay-400">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center gap-2 bg-ink text-navy text-sm font-display font-bold px-7 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent hover:text-navy cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 text-muted text-sm font-body hover:text-ink transition-colors duration-200 cursor-pointer px-5 py-4 rounded-lg border border-border-light hover:border-slate"
            >
              Me contacter
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10 animate-fadeInUp delay-500">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-11 h-11 rounded-lg border border-border text-soft hover:text-ink hover:border-border-light transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fadeIn delay-700">
          <span className="font-mono text-[9px] text-slate tracking-[4px] uppercase">
            scroll
          </span>
          <ChevronDown size={16} className="text-muted/50 animate-float" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 font-display font-extrabold text-[clamp(80px,20vw,280px)] leading-none text-border/30 select-none"
        aria-hidden
      >
        01
      </div>
    </section>
  );
}
