export interface ProfileData {
  name: string;
  headline: string;
  currentRole: string;
  company: string;
  location: string;
  connections?: string;
  avatar: string;
  coverImage: string;
  bio: string;
  openToWork: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features?: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  grade?: string;
  activities?: string;
  logoText: string;
}

export const portfolioData = {
  profile: {
    name: "Nasif Mustufa Khan",
    headline: "Full-Stack Software Engineer | Next.js, React, JavaScript, Express.js, MongoDB | Better Auth",
    currentRole: "Full-Stack Developer",
    company: "Self Employed",
    location: "Dhaka, Bangladesh · Remote Available",
    avatar: "/nasif-logo.png",
    coverImage: "/banner03.png",
    bio: "Passionate engineer crafting high-performance, accessible, and delightful digital experiences. Experienced in React, Next.js, TypeScript, Tailwind CSS, Node.js, Better Auth.",
    openToWork: true,
    socials: {
      github: "https://github.com/nasifmustufakhan7220",
      linkedin: "https://www.linkedin.com/in/nasifkmustufakhan/",
      email: "nasifk7220@gmail.com",
    },
  },
  about: {
    summary:
      "Im an AI-Driven Full-Stack Software Developer passionate about building modern, user-friendly, and functional web applications.",
    highlights: [
      "6 months of programming experience with modern JavaScript / TypeScript ecosystems.",
      "Technical Expertise: Im learning and working with JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS to develop full-stack web applications. Im also exploring AI-assisted coding and modern software engineering practices to improve my development workflow..",
      "Project Experience: Ive built web development projects as part of my learning journey, including responsive user interfaces and interactive web applications. I enjoy applying what I learn to practical projects and improving my code step by step.",
      "Personal Engagement: I enjoy solving programming problems, exploring new technologies, and continuously improving my development skills through hands-on practice and projects.",
    ],
  },
  skills: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React 19" },
        { name: "Next.js" },
        { name: "Better Auth" },
        { name: "TypeScript" },
        { name: "Tailwind CSS & shadcn/ui" },
        { name: "HTML5 & Modern CSS" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js & Express" },
        { name: "MongoDB & Mongoose" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub Actions" },
        { name: "Vercel & AWS Deployments" },
        { name: "Figma UI/UX Implementation" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "proj-1",
      title: "Bazar Dor",
      tagline: "Real-time price checking and market price monitoring based on differnt location's market prices.",
      description:
        "Bazar Dor is a real-time price monitoring and market analytics web application that tracks commodity prices across diverse regional markets, helping consumers and vendors compare fair prices.",
      longDescription:
        "Bazar Dor was engineered to bring market transparency to daily commodity and groceries pricing. Users can compare fluctuating prices across different local bazaars and supermarkets, analyze price trends, view verified community price contributions, and make informed purchasing decisions with up-to-date data.",
      features: [
        "Real-time commodity price checking across multiple regional markets",
        "Interactive price comparison cards and localized daily price indices",
        "Secure user authentication and profile management powered by Better Auth",
        "Crowdsourced price update pipeline with community moderation",
        "Responsive, mobile-optimized interface with dark and light theme adaptability",
      ],
      architecture: [
        "Next.js App Router with server components for blazing fast server-rendered price catalog",
        "MongoDB with Mongoose schemas for flexible commodity indexing and regional categorizations",
        "Better Auth integration for modern, session-based secure authentication workflows",
        "Tailwind CSS with clean shadcn/ui primitives for accessible, high-performance UI",
      ],
      metrics: [
        { label: "Price Update Frequency", value: "Real-time" },
        { label: "Authentication", value: "Better Auth" },
        { label: "Database", value: "MongoDB" },
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React.js", "Better Auth"],
      liveUrl: "https://bazar-dor-web-app-isix.vercel.app/",
      githubUrl: "https://github.com/nasifmustufakhan7220/Bazar-Dor-Web-App",
      stars: 1,
      featured: true,
    },

  ] as ProjectItem[],
  education: [
    {
      id: "edu-1",
      school: "World University of Bangaldesh",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science & Engineering",
      period: "2025- 2026 (Running)",
      grade: "3th SEMESTER(Ongoing)",
      activities: "",
      logoText: "WUB",
    },
  ] as EducationItem[],
};

export function getProjectById(id: string): ProjectItem | undefined {
  return portfolioData.projects.find((p) => p.id === id);
}

