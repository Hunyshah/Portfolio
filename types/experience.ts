export interface Experience {
  company: string;
  position: string;
  start: string;
  end: string;
  responsibilities: string[];
  technologies: string[];
  /** Internal notes for content review. Never rendered. */
  reviewNotes?: string[];
}

export interface Education {
  qualification: string;
  institution: string;
}
