// All the type definitions provided in the assessment, structured for clarity.

export interface Seo {
  title: string;
  description: string;
  image: string;
}

export interface Medium {
  type: 'video' | 'image';
  url: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  text: string;
}

export interface CtaText {
  name: unknown;
  primary: string;
  secondary: string;
}

export interface Instructor {
  name: string;
  image: string;
  details: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Pointer {
  title: string;
  details: string;
}

export interface About {
  details: string;
}

// Union type for different section data structures
export type SectionData = Instructor[] | Feature[] | Pointer[] | About;

export interface Section {
  type: 'instructor' | 'features' | 'pointers' | 'about';
  title: string;
  data: SectionData;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string; // This is an HTML string
  media: Medium[];
  checklist: ChecklistItem[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}