// data/portfolio.ts

export const siteConfig = {
  name: "Davina Anandia",
  shortName: "davinand",
  title: "Davina Anandia — Portfolio",
  description:
    "Portfolio of Davina Anandia — Undergraduate Bachelor of Information System at Telkom University Jakarta. Tech enthusiast, Web Developer, and continuous learner.",
  url: "https://davinand.vercel.app",
  ogImage: "/og-image.png",
  locale: "en_US",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experiences" },
  { label: "Education", href: "#education" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  name: "Davina Anandia",
  headline: "Undergraduate Bachelor of Information System at",
  institution: "Telkom University Jakarta",
  tags: ["Tech Enthusiast", "Web Developer", "Continuous Learner"],
  bio: "Passionate about crafting fast, accessible, and structured digital experiences. Focusing on modern frontend ecosystems with Next.js, clean interface architecture, and practical web solutions.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: {
    label: "Featured Project",
    href: "https://raporagit.vercel.app/",
    external: true,
  },
} as const;

export type Experience = {
  role: string;
  company?: string;
  period: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Freelancer Web Developer",
    period: "June 2026 – Present",
    description: "Independent Web Development & Implementation",
    tags: ["Next.js", "Web Development", "Frontend Architecture"],
  },
  {
    role: "Operator Gaming Space",
    company: "EbisuPlaystation",
    period: "May 2026 – July 2026",
    description:
      "Operational management, guest relations, front cashier, and space upkeep.",
    tags: ["Customer Services", "Cashier & POS", "Kitchen Operations"],
  },
  {
    role: "Student Intern",
    company: "Exatama Mitra Inovasi",
    period: "July 2025 – December 2025",
    description:
      "Collaborated on digital product interfaces, user flow design, and responsive fullstack web features.",
    tags: ["Figma", "UI/UX", "Next.js", "PostgreSQL"],
  },
];

export type Organization = {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export const organizations: Organization[] = [
  {
    role: "Project & Competition Secretary",
    organization: "ICT Club Orens Solution",
    period: "May 2024 – May 2025",
    description:
      "Managed administrative documentation, coordinated tech competitions, and streamlined inter-divisional communication for extracurricular initiatives.",
    tags: ["Microsoft Office", "Event Planning", "Leadership"],
  },
  {
    role: "Division Secretary (Academic & Entrepreneurship)",
    organization: "Student Council (OSIS)",
    period: "Nov 2023 – Nov 2024",
    description:
      "Assisted Division 4 in fostering student academic achievement and student-led entrepreneurial programs, handling event timelines and official correspondence.",
    tags: ["Time Management", "Leadership", "Event Planning"],
  },
];

export type Education = {
  institution: string;
  degree: string;
  description: string;
  period: string;
  grade?: string;
};

export const educations: Education[] = [
  {
    institution: "Telkom University Jakarta",
    degree: "Bachelor of Information Systems (S1 Sistem Informasi)",
    description:
      "Focusing on enterprise information architecture, software development, and systems analysis.",
    period: "2026 – Present",
  },
  {
    institution: "SMK Prestasi Prima Jakarta",
    degree: "Software & Game Development Major (PPLG)",
    description:
      "Curriculum highlights: Web Development, Android Mobile Development, and Game Programming (Roblox Dev).",
    period: "2023 – 2026",
    grade: "Grade 89.19",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Junior Web Programmer Competence Certificate",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    issued: "Jun 2026",
    expires: "Jun 2029",
  },
];

export type Project = {
  title: string;
  url: string;
  domain: string;
  status: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Website RaporAgit",
    url: "https://raporagit.vercel.app/",
    domain: "raporagit.vercel.app",
    status: "Live",
    description:
      "A dedicated web application designed to track and monitor student academic report cards (Semester 1–5), serving as a motivating tool for students to visualize progress and maintain steady academic momentum.",
    tags: ["Next.js", "Vercel Deployment", "Data Visualization"],
  },
];

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "instagram";
};

export const contacts: Contact[] = [
  {
    label: "Email",
    value: "anandiadavv@gmail.com",
    href: "mailto:anandiadavv@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "davina-anandia",
    href: "https://www.linkedin.com/in/davina-anandia-34bab5329",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    value: "@davinannd",
    href: "https://instagram.com/davinannd",
    icon: "instagram",
  },
];

export const sectionMeta = {
  experiences: { number: "01", title: "Experiences", meta: "Timeline" },
  organizations: {
    number: "02",
    title: "Organizational Leadership",
    meta: "Activities",
  },
  education: {
    number: "03",
    title: "Education",
    meta: "Academic Background",
  },
  certifications: {
    number: "04",
    title: "Certifications",
    meta: "Verified Credentials",
  },
  projects: {
    number: "05",
    title: "Featured Project",
    meta: "Live Production",
  },
  contact: { number: "06", title: "Contact Me", meta: "" },
} as const;