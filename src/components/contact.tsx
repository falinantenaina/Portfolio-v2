"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Clock, Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [ref, isVisible] = useScrollReveal(0.1);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current?.reset();
          setStatus("sent");
        },
        () => {
          setStatus("error");
        },
      );
  };

  return (
    <section id="contact" className="relative py-20 lg:py-36 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            04
          </span>
          <div className="w-12 h-px bg-border-light" />
          <span className="font-mono text-[10px] text-slate tracking-[5px] uppercase">
            contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(32px,5vw,48px)] font-extrabold text-ink leading-tight mb-6">
              Travaillons
              <br />
              ensemble <span className="text-muted">?</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-12 max-w-md">
              Un projet en tête, une collaboration à explorer, ou simplement
              envie d&apos;échanger ? Envoyez-moi un message.
            </p>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:contact@falinantenaina.com"
                className="group flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-xl border border-border bg-navy-light/50 hover:border-accent/25 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border bg-navy group-hover:border-accent/30 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] text-slate tracking-[3px] uppercase mb-1">
                    Email
                  </p>
                  <p className="text-ink text-sm font-medium truncate group-hover:text-soft transition-colors">
                    contact@falinantenaina.com
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate group-hover:text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </a>

              <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-xl border border-border bg-navy-light/50">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border bg-navy">
                  <MapPin size={18} className="text-muted" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate tracking-[3px] uppercase mb-1">
                    Localisation
                  </p>
                  <p className="text-ink text-sm font-medium">Madagascar</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-xl border border-border bg-navy-light/50">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border bg-navy">
                  <Clock size={18} className="text-muted" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate tracking-[3px] uppercase mb-1">
                    Disponibilité
                  </p>
                  <p className="text-ink text-sm font-medium">
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/falinantenaina",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b",
                },
                { label: "WhatsApp", href: "https://wa.me/261343243730" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-accent transition-all duration-200 px-4 py-2 rounded-lg border border-border hover:border-accent/25"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-border bg-navy-light/30">
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
                placeholder="votre@email.com"
                name="email"
              />

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] text-slate uppercase tracking-[3px] mb-3"
                >
                  message
                </label>
                <textarea
                  id="message"
                  placeholder="Parlez-moi de votre projet..."
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-navy border border-border rounded-lg px-5 py-4 text-ink text-sm placeholder-slate focus:border-border-light transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ink text-navy font-display text-sm font-bold px-8 py-4 rounded-lg overflow-hidden hover:bg-accent hover:text-navy transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  {status === "sending" && (
                    <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                  )}
                  {status === "sent" && <span>✓</span>}
                  {status === "error" && (
                    <span className="text-red-500">✕</span>
                  )}
                  {status === "idle" && (
                    <Send
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  )}
                  {status === "idle" && "Envoyer le message"}
                  {status === "sending" && "Envoi en cours…"}
                  {status === "sent" && "Message envoyé !"}
                  {status === "error" && "Erreur — réessayer"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 font-display font-extrabold text-[clamp(80px,20vw,280px)] leading-none text-border/30 select-none"
        aria-hidden
      >
        04
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  name,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] text-slate uppercase tracking-[3px] mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-navy border border-border rounded-lg px-5 py-4 text-ink text-sm placeholder-slate focus:border-border-light transition-all duration-300"
      />
    </div>
  );
}
