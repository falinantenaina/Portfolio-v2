import { ArrowUpRight, Github, Linkedin, Phone } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/falinantenaina",
    label: "gh",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b/",
    label: "li",
  },
  { icon: Phone, href: "https://wa.me/261343243730", label: "wh" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20"
      style={{ overflowX: "clip" }}
    >
      <div className="pointer-events-none absolute top-1/4 right-[-10%] w-125 h-125 rounded-full bg-pink/6 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-5%] w-75 h-75 rounded-full bg-pink/4 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <div className="flex items-center gap-2.5 mb-10 animate-fadeInUp">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse-dot" />
          <span className="font-mono text-[11px] text-[#888] tracking-widest uppercase">
            disponible — open to work
          </span>
        </div>

        {/* Main heading */}
        <div className="animate-fadeInUp delay-100">
          <p className="font-body text-[#999] text-base mb-4 italic">
            Salut 👋, je suis
          </p>
          <h1 className="font-display font-extrabold leading-[0.92] text-white mb-0">
            <span className="block text-[clamp(28px,5.5vw,82px)] tracking-tighter">
              <span className="gradient-text">F</span>alinantenaina
              <span className="text-pink">.</span>
            </span>
            <span className="block text-[clamp(13px,3.2vw,28px)] tracking-tight text-[#888] font-medium mt-2">
              Développeur Web
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mt-6 animate-fadeInUp delay-200">
          <p className="text-[#888] text-sm leading-relaxed max-w-sm md:max-w-md">
            Spécialisé en création d’applications modernes et performantes.{" "}
            <br />
            Je transforme vos idées en solutions digitales concrètes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end gap-6 mt-12 animate-fadeInUp delay-300">
          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 bg-pink text-white text-sm font-display font-bold px-5 py-3 rounded hover:bg-[#e02468] transition-colors duration-150 cursor-pointer"
            >
              Mes projets
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[#999] text-sm font-body hover:text-white transition-colors duration-150 cursor-pointer underline underline-offset-4 decoration-[#333]"
            >
              me contacter
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 sm:ml-auto">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[#888] hover:text-white transition-colors duration-150"
                aria-label={label}
              >
                <Icon size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-3 mt-20 animate-fadeIn delay-500">
          <div className="w-px h-12 bg-linear-to-b from-transparent to-pink/60" />
          <span className="font-mono text-[10px] text-[#777] tracking-widest uppercase rotate-0">
            scroll
          </span>
        </div>
      </div>

      {/* Big decorative number — purely editorial */}
      <div
        className="pointer-events-none absolute bottom-0 right-6 font-display font-extrabold text-[clamp(100px,18vw,200px)] leading-none text-white/2 select-none"
        aria-hidden
      >
        01
      </div>
    </section>
  );
}
