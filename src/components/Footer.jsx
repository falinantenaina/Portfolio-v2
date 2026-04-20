export default function Footer() {
  return (
    <footer className="border-t border-[#141414] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-extrabold text-white text-sm">
          falinantenaina<span className="text-pink">.</span>
        </span>
        <p className="font-mono text-[10px] text-[#b0b0b0] tracking-wide text-center">
          © {new Date().getFullYear()} — Falinantenaina
        </p>
      </div>
    </footer>
  );
}
