import { useEffect, useState } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-dark/95 backdrop-blur-xl border-b border-white/4" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go("#hero")}
          className="font-display font-extrabold text-white text-lg tracking-tight cursor-pointer leading-none"
        >
          falinantenaina<span className="text-pink">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-5 lg:gap-10">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => go(href)}
                className="text-[#bbb] text-sm font-body hover:text-white transition-colors duration-150 cursor-pointer tracking-wide"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@falinantenaina.dev"
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono font-medium text-pink border border-pink/30 px-4 py-2 rounded hover:bg-pink/8 transition-colors duration-150"
        >
          contact@falinantenaina.com
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.25 cursor-pointer p-1"
          aria-label="menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block h-px w-4 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-56" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 pt-4 pb-6 gap-5 border-t border-white/4 mt-3">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => go(href)}
                className="text-[#bbb] text-sm cursor-pointer hover:text-white transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
