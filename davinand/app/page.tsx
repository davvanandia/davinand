import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experiences } from "@/components/sections/Experiences";
import { Organizations } from "@/components/sections/Organizations";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { siteConfig, experiences, organizations, educations, projects, contacts } from "@/data/portfolio";

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: educations.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    sameAs: contacts
      .filter((c) => c.icon !== "email")
      .map((c) => c.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="max-w-content mx-auto px-6 py-14 md:py-20 space-y-24">
        <Hero />
        <div id="experiences" className="space-y-16">
          <Experiences />
          <Organizations />
          <Education />
          <Certifications />
          <Projects />
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}