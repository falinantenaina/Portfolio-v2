import cotram from "../assets/cotram.webp";
import elegant from "../assets/elegant.webp";
import estatein from "../assets/estatein.webp";
import movie from "../assets/movie.webp";
import portfolio from "../assets/portfolio.webp";
import swrnym from "../assets/swrnym.webp";
export const projects = [
  {
    num: "001",
    title: "Cotram Plus",
    year: "2026",
    type: "Transport / SaaS",
    desc: "Plateforme de réservation de transport premium entre Antananarivo, Ambatolampy et Antsirabe.",
    longDesc:
      "Application complète de transport en ligne pour Madagascar — réservation de billets, gestion des horaires, dashboard admin avec planification des voyages et assignation des chauffeurs. Design noir/jaune très marqué, pensé pour inspirer confiance et modernité dans un contexte local.",
    tags: ["React", "Express", "Tailwind", "Axios", "Zustand"],
    accent: "#fb923c",
    repo: "#",
    image: cotram,
    featured: false,
    status: "Livré",
    url: "https://cotram-plus.vercel.app/",
  },
  {
    num: "002",
    title: "3legant",
    year: "2025",
    type: "E-commerce",
    desc: "Plateforme e-commerce minimaliste. Design épuré, tunnel d'achat fluide, DX soignée.",
    longDesc:
      "Un projet e-commerce de A à Z — catalogue produits, panier, tunnel d'achat, et interface admin. Le défi : garder un design ultra-minimaliste sans sacrifier l'UX. Chaque interaction a été pensée pour réduire la friction et guider l'utilisateur naturellement vers la conversion.",
    tags: ["React", "Express", "TypeScript", "Tailwind", "Axios", "Zustand"],
    accent: "#FF2D78",
    repo: "#",
    image: elegant,
    featured: false,
    status: "Livré",
    url: "https://3legant-roan.vercel.app/",
  },
  {
    num: "003",
    title: "movie-mg",
    year: "2024",
    type: "App web",
    desc: "Explorer des milliers de films avec filtres avancés et recommandations. Données TMDb.",
    longDesc:
      "Une app de découverte cinéma qui interroge l'API TMDb en temps réel. Recherche instantanée, filtres par genre/année/note, pages de détail avec casting et bande-annonce. Optimisé pour une navigation rapide même sur mobile 3G.",
    tags: ["Next.js", "TypeScript", "Axios"],
    accent: "#00E5FF",
    repo: "#",
    image: movie,
    featured: false,
    status: "En ligne",
    url: "https://movie-mg.vercel.app/",
  },
  {
    num: "004",
    title: "Estatein",
    year: "2023",
    type: "Immobilier",
    desc: "Application de découverte immobilière. Recherche, filtres géo, fiches propriétés.",
    longDesc:
      "Interface de recherche immobilière avec filtres géographiques, vue carte et liste, fiches propriétés détaillées. Le challenge : gérer une grande quantité de données sans alourdir le rendu. Solution : virtualisation de liste et lazy loading agressif.",
    tags: ["React", "ShadcnUI", "Tailwind"],
    accent: "#a78bfa",
    repo: "#",
    image: estatein,
    featured: false,
    status: "Livré",
    url: "https://estatein-mg.netlify.app/",
  },

  {
    num: "005",
    title: "Swrnym",
    year: "2023",
    type: "App mobile-first",
    desc: "App de gestion de listes de courses collaborative et en temps réel.",
    longDesc:
      "Une app mobile-first de listes partagées avec sync en temps réel via WebSocket. Interface pensée pour être utilisable d'une seule main, avec des gestes swipe natifs et une offline-first architecture.",
    tags: ["Next.js", "Zustand", "Tailwind"],
    accent: "#4ade80",
    repo: "#",
    image: swrnym,
    featured: false,
    status: "En ligne",
  },
  {
    num: "006",
    title: "Portfolio v1",
    year: "2022",
    type: "Portfolio",
    desc: "Ma première version de portfolio. Plus sage. Maintenant archivée.",
    longDesc:
      "La première version de mon portfolio — design plus classique, animations CSS pures, aucune librairie externe. Un bon exercice de discipline. Je la garde en ligne parce qu'elle rappelle d'où je viens.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    accent: "#94a3b8",
    repo: "#",
    image: portfolio,
    featured: false,
    status: "Archivé",
    url: "https://falinantenaina.vercel.app/",
  },
];
