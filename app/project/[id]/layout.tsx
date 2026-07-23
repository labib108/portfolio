import type { Metadata } from "next";
import { projects } from "./data";
import { siteConfig } from "@/app/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} — ${project.role}`;
  const description = `${project.description} Tech: ${project.technologies.join(", ")}. By ${siteConfig.name} (Labib), KUET CSE.`;

  return {
    title,
    description,
    keywords: [
      siteConfig.name,
      "Labib",
      "Labib KUET",
      project.title,
      project.role,
      ...project.technologies,
      "microservices",
      "portfolio",
    ],
    alternates: {
      canonical: `${siteConfig.url}/project/${project.id}`,
    },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url: `${siteConfig.url}/project/${project.id}`,
      type: "article",
      images: [{ url: siteConfig.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: [siteConfig.image],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
