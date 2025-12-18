export interface Experience {
  id: string;
  role: string;
  projectName?: string;
  company: string;
  location?: string;
  period: string;
  details: string[];
  url?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  certificateUrl?: string;
  institutionUrl?: string;
}

export interface Skill {
  category: 'Technical' | 'Soft';
  items: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  location: string;
  portfolioUrl?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  fullBio: string;
  avatarUrl?: string;
  logoUrl?: string;
  cvUrl?: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
}