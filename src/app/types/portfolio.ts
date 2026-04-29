export interface ContactItem {
  type: string;
  label: string;
  icon: string;
  link: string;
}

export interface SocialItem {
  platform: string;
  icon: string;
  link: string;
}

export interface ContactBarData {
  contactItems: ContactItem[];
  socialItems: SocialItem[];
}

export interface EducationEntry {
  title: string;
  description: string;
}

export interface SkillEntry {
  name: string;
  icon: string;
  rating: number;
}

export interface EducationData {
  education: EducationEntry[];
  skills: SkillEntry[];
}

export interface SocialLink {
  title: string;
  href: string;
}

export interface ContactInfo {
  type: string;
  label: string;
  link: string;
}

export interface ContactLinksData {
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
}

export interface PageData {
  contactBar: ContactBarData;
  educationData: EducationData;
  contactLinks: ContactLinksData;
}

export interface WorkEntry {
  image: string;
  title: string;
  client: string;
  slug: string;
  link?: string;
  tags?: string[];
  description?: string;
}

export interface WorkData {
  workData: WorkEntry[];
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  type: string;
  description: string;
  isCurrent?: boolean;
}

export interface Stat {
  count: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
}
