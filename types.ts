
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  date: string;
  description: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}
