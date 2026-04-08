export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  imageUrl: string;
  figmaUrl: string;
  caseStudy?: {
    role: string;
    tools: string[];
    fullDescription: string;
    externalLinks: { name: string; url: string }[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
