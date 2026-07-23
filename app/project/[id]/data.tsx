export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  badge?: string;
  banner?: string;
  technologies: string[];
  features: {
    title: string;
    items?: string[];
  }[];
  images?: string[];
  liveUrl?: string;
  note?: string;
  contactEmail: string;
}

const CONFIDENTIAL_NOTE =
  "Source code is private and cannot be shared due to company confidentiality.";

export const projects: ProjectData[] = [
  {
    id: "enterprise-commerce",
    title: "Global Multi-Tenant Commerce Platform",
    description:
      "Large-scale multi-tenant commerce platform supporting thousands of merchants and millions of users.",
    longDescription:
      "Working on a large-scale multi-tenant commerce platform designed to support thousands of merchants and millions of users. Built within a microservice architecture focused on scalability, reliability, and production-grade backend engineering.",
    role: "Backend Engineer",
    badge: "Professional Experience",
    technologies: [
      "TypeScript",
      "NestJS",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Microservices",
    ],
    features: [
      {
        title: "Contributions",
        items: [
          "Developed and maintained backend services within a microservice architecture.",
          "Worked with API gateways, BFF layers, and service-to-service communication.",
          "Built production features involving business workflows, authentication, and data management.",
          "Collaborated on scalable backend solutions using modern engineering practices.",
        ],
      },
    ],
    note: CONFIDENTIAL_NOTE,
    contactEmail: "abubuckkersiddikh@gmail.com",
  },
  {
    id: "baecard",
    title: "Baecard — Digital NFC Business Card Platform",
    description:
      "A complete digital NFC card platform for creating, managing, and sharing digital profiles.",
    longDescription:
      "A complete digital NFC card platform that allows users and businesses to create, manage, and share digital profiles through a full-stack web application.",
    role: "Full-Stack Developer",
    badge: "Professional Experience",
    technologies: [
      "Laravel",
      "React",
      "Inertia.js",
      "MySQL",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Features",
        items: [
          "User portal and dashboard",
          "Profile management",
          "Digital card customization",
          "Authentication system",
          "Dashboard-based management experience",
        ],
      },
    ],
    liveUrl: "https://sogaimpact.com/",
    note: CONFIDENTIAL_NOTE,
    contactEmail: "abubuckkersiddikh@gmail.com",
  },
  {
    id: "romoni-admin",
    title: "Romoni Admin Dashboard",
    description:
      "Administrative dashboard features for a beauty service platform.",
    longDescription:
      "Built and maintained administrative dashboard features for a beauty service platform, focusing on responsive interfaces, business workflows, and API-integrated management tools.",
    role: "Frontend Developer",
    badge: "Professional Experience",
    technologies: ["React", "Vue.js", "JavaScript", "Tailwind CSS"],
    features: [
      {
        title: "Contributions",
        items: [
          "Developed responsive dashboard interfaces.",
          "Implemented business workflows and management tools.",
          "Collaborated with backend teams to integrate APIs and improve user experience.",
        ],
      },
    ],
    note: "Source code and screenshots are private and cannot be shared due to company confidentiality.",
    contactEmail: "abubuckkersiddikh@gmail.com",
  },
  {
    id: "lexicon",
    title: "Lexicon - IELTS Mock Test System",
    description:
      "An online platform providing authentic IELTS mock tests with instant scoring and analytics.",
    longDescription:
      "Lexicon is a web-based platform designed to provide educational, immigration and testing services. It includes a modern frontend, CMS-driven backend, user dashboards, and integrated testing modules. MockTest is a dedicated module within Lexicon that allows administrators to create mock tests, manage questions, evaluate answers, and generate scores for students.",
    role: "Full-Stack Developer",
    badge: "Professional Experience",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Eloquent ORM",
      "JavaScript",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Lexicon Platform",
        items: [
          "Modern frontend with brand-consistent UI",
          "Education consultancy pages",
          "Immigration services content management",
          "Responsive mobile-first design",
          "Authentication system with branded layout",
          "Admin dashboard for complete management",
          "Role-based access for Admin vs Users",
        ],
      },
      {
        title: "MockTest Module",
        items: [
          "Create/edit/delete mock tests",
          "Create / Edit appointments",
          "Add sections (Reading, Writing, Listening, etc.)",
          "Add question groups for structured test creation",
          "Evaluate student answers and generate scores",
          "View user score history",
          "Email notifications",
        ],
      },
    ],
    note: CONFIDENTIAL_NOTE,
    contactEmail: "abubuckkersiddikh@gmail.com",
  },
];
