export interface Project {
  num: string;
  title: string;
  year: string;
  type: string;
  desc: string;
  longDesc: string;
  tags: string[];
  accent: string;
  repo?: string;
  image?: string;
  featured: boolean;
  status: "En ligne" | "Livré" | "Archivé";
  url?: string;
}
