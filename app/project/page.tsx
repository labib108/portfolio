import type { Metadata } from "next";
import Projects from "@/app/components/projectCard";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Projects — Microservices, NestJS & Full-Stack Work",
  description: `Professional projects by ${siteConfig.name} (Labib, KUET): multi-tenant commerce microservices, NestJS, Laravel, React dashboards, and more.`,
  alternates: {
    canonical: `${siteConfig.url}/project`,
  },
};

export default function ProjectPage() {
  return <Projects />;
}
