import { siteConfig } from "@/app/lib/site";

export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.image}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.alumniOf,
      sameAs: "https://www.kuet.ac.bd/",
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.worksFor,
    },
    knowsAbout: [
      "Microservices",
      "Distributed Systems",
      "NestJS",
      "TypeScript",
      "Node.js",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "System Design",
      "Backend Engineering",
      "Cloud Infrastructure",
      "Docker",
    ],
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    alternateName: ["Labib Portfolio", "Labib KUET Portfolio"],
    url: siteConfig.url,
    description: siteConfig.description,
    author: { "@type": "Person", name: siteConfig.name },
    inLanguage: "en",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.url,
    name: siteConfig.title,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
