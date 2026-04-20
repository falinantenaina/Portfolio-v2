import emailjs from "@emailjs/browser";
import { ArrowUpRight, Send } from "lucide-react";
import { useRef, useState } from "react";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current?.reset();
          setStatus("sent");
        },
        () => {
          setStatus(error);
        },
      );
  };

  /*   const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }; */

  return (
    <section
      id="contact"
      className="relative py-32"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#b0b0b0] tracking-[4px] uppercase">
            04 — contact
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* Left */}
        <div className="animate-fadeInUp">
          <h2 className="font-display text-4xl font-extrabold text-white leading-tight mb-6">
            On travaille
            <br />
            ensemble ?
          </h2>
          <p className="text-[#bbb] text-sm leading-relaxed mb-10 max-w-xs">
            Un projet, une collab, ou juste une question — envoyez-moi un
            message. Je réponds vite.
          </p>

          <a
            href="mailto:contact@falinantenaina.com"
            className="group inline-flex items-center gap-2 text-white font-display font-bold text-lg hover:text-pink transition-colors duration-200"
          >
            contact@falinantenaina.com
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <div className="flex items-center gap-6 mt-10">
            {[
              { label: "GitHub", href: "https://github.com/falinantenaina" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b",
              },
              { label: "Whatsapp", href: "https://wa.me/261343243730" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] text-[#bbb] hover:text-white transition-colors duration-150 tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse-dot" />
            <span className="font-mono text-[10px] text-[#b0b0b0] tracking-widest uppercase">
              disponible — réponse sous 24h
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div className="animate-fadeInUp delay-200">
          <form onSubmit={sendEmail} ref={form} className="space-y-6">
            <Field
              label="nom"
              id="name"
              type="text"
              placeholder="Votre nom"
              name="name"
            />
            <Field
              label="email"
              id="email"
              type="email"
              placeholder="Votre adresse email"
              name="email"
            />

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[10px] text-[#b0b0b0] uppercase tracking-[3px] mb-2.5"
              >
                message
              </label>
              <textarea
                id="message"
                placeholder="Parlez-moi de votre projet..."
                name="message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-[#383838] py-3 text-white text-sm placeholder-[#888] resize-none focus:border-pink/50 transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group mt-2 inline-flex items-center gap-2.5 font-display text-sm font-bold text-white hover:text-pink transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" && (
                <span className="w-3.5 h-3.5 border border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {status === "sent" && <span className="text-[#4ade80]">✓</span>}
              {status === "error" && <span className="text-[#de4f4a]">X</span>}
              {status === "idle" && (
                <Send
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              )}
              {status === "idle" && "Envoyer"}
              {status === "sending" && "Envoi…"}
              {status === "sent" && "Message envoyé !"}
              {status === "error" && "Veuillez réessayer"}
            </button>
          </form>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-6 font-display font-extrabold text-[clamp(100px,18vw,200px)] leading-none text-white/2 select-none"
        aria-hidden
      >
        04
      </div>
    </section>
  );
}

function Field({ label, id, type, placeholder, value, onChange, name }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] text-[#b0b0b0] uppercase tracking-[3px] mb-2.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-b border-[#383838] py-3 text-white text-sm placeholder-[#888] focus:border-pink/50 transition-colors duration-200"
      />
    </div>
  );
}
