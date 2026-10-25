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
      title: "PulseFlow - Modern Workspace & Team Collaboration SaaS",
      tagline: "Real-time task synchronization, analytics dashboard, and workspace management.",
      description:
        "A full-fledged collaborative workspace platform featuring real-time document collaboration, Kanban workflows, responsive dark/light mode, and role-based access control.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example.com/pulseflow",
      githubUrl: "https://github.com/example/pulseflow",
      stars: 124,
      featured: true,
    },
    {
      id: "proj-2",
      title: "OmniCart - Headless E-Commerce Platform",
      tagline: "Blazing-fast modern store with Stripe checkout and dynamic inventory.",
      description:
        "Engineered with Next.js App Router and server actions. Achieved 99+ Lighthouse performance score with ISR, edge caching, and seamless Stripe integration.",
      technologies: ["Next.js", "React 19", "Tailwind CSS", "Stripe API", "Zustand"],
      liveUrl: "https://example.com/omnicart",
      githubUrl: "https://github.com/example/omnicart",
      stars: 89,
      featured: true,
    },
    {
      id: "proj-3",
      title: "AI Canvas Studio - Generative Design & Asset Builder",
      tagline: "AI-assisted design studio with responsive canvas manipulation.",
      description:
        "An interactive canvas application using WebGL and AI prompt pipelines to generate high-fidelity vector assets, palettes, and design mockups for developers.",
      technologies: ["TypeScript", "Canvas API", "Next.js", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://example.com/aicanvas",
      githubUrl: "https://github.com/example/aicanvas",
      stars: 215,
      featured: true,
    },
    {
      id: "proj-4",
      title: "DevMetrics - Cloud Telemetry & Error Tracking",
      tagline: "Lightweight APM and error aggregation dashboard for microservices.",
      description:
        "Interactive analytics charts using Recharts, live logging streams, alert routing, and custom webhook dispatchers for engineering teams.",
      technologies: ["React", "Next.js", "Recharts", "Node.js", "Redis"],
      liveUrl: "https://example.com/devmetrics",
      githubUrl: "https://github.com/example/devmetrics",
      stars: 76,
      featured: false,
    },
  ] as ProjectItem[],
  education: [
    {
      id: "edu-1",
      school: "University of Engineering & Technology",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science & Engineering",
      period: "2018 - 2022",
      grade: "First Class with Distinction",
      activities: "ACM Programming Club President, Hackathon Lead Organizer",
      logoText: "CSE",
    },
    {
      id: "edu-2",
      school: "National College",
      degree: "Higher Secondary Certificate (HSC)",
      fieldOfStudy: "Science",
      period: "2016 - 2018",
      grade: "GPA 5.0 / 5.0",
      activities: "Science Olympiad Winner, Debate Club Vice Chair",
      logoText: "NC",
    },
  ] as EducationItem[],
};
