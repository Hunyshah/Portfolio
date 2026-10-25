export type ProjectStatus =
  | "Published"
  | "In development"
  | "In progress"
  | "Client collaboration";

export type ProjectCategory = "Mobile app" | "Website" | "Web platform";

export type CoverTone = "ink" | "accent" | "sand" | "slate";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface TechReason {
  name: string;
  reason: string;
}

export interface Challenge {
  title: string;
  challenge: string;
  approach: string;
}

/** A node in a simple left-to-right architecture flow. Only used for systems whose architecture is documented. */
export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface ArchitectureDiagram {
  caption: string;
  nodes: ArchitectureNode[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  platform: string;
  featured: boolean;
  /** Lower numbers render first. */
  order: number;
  technologies: string[];
  highlights: string[];
  cover: { tone: CoverTone; mark: string };
  overview: string[];
  problem: string[];
  audience?: string[];
  contribution: string[];
  techReasons: TechReason[];
  architecture?: ArchitectureDiagram;
  sections: CaseStudySection[];
  features: string[];
  challenges: Challenge[];
  outcomes: string[];
  /** Real screenshots only. Leave empty until approved images exist in /public/images/projects/<slug>/. */
  images: ProjectImage[];
  links: ProjectLink[];
  /** Internal notes for content review. Never rendered. */
  reviewNotes?: string[];
}

export interface ArchiveProject {
  name: string;
  platform: string;
  technologies: string[];
}
