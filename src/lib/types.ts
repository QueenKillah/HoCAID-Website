export interface Pillar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  /** Longer narrative for the pillar sub-page */
  fullDescription: string;
  icon: string;
  /** Tailwind colour token: sky | green | navy | orange | gold */
  color: string;
  href: string;
  /** Key programme activities listed on the pillar page */
  activities: string[];
  /** Impact statistics shown on the pillar page */
  stats: { value: string; label: string }[];
  /** Short focus-area labels shown as chips */
  keyFocus: string[];
}

export interface Project {
  slug: string;
  title: string;
  pillar: string;
  location: string;
  status: "active" | "completed";
  startDate: string;
  endDate?: string;
  description: string;
  outcomes?: string[];
  imageUrl?: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl?: string;
  content?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}
