import Hero from "./components/hero";
import AboutMe from "./components/about";
import Skill from "./components/skills";
import Project from "./components/projectCard";
import Exprience from "./components/exprience";
import Blog from "./components/blogCard";
import Contact from "./components/contact";

export default function Page() {
  return (
    <>
      {/* Crawlable name & keyword summary for search engines */}
      <header className="sr-only">
        <h1>
          Sheikh Abu Bakkar Siddiq (Labib) — Backend Software Engineer | KUET
          CSE Graduate
        </h1>
        <p>
          Labib KUET portfolio. Backend engineer specializing in microservices,
          distributed systems, NestJS, TypeScript, gRPC, PostgreSQL, Redis, and
          cloud infrastructure. Experience at Nagorik Technologies Limited and
          BAE Innovation. Also known as Abu Bakkar Siddiq, Abu Bakkar Siddikh
          Labib.
        </p>
      </header>

      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Exprience />
      <Blog />
      <Contact />
    </>
  );
}
