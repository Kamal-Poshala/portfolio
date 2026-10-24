import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <div className="band-hero dark-scope">
        <div className="blob -right-24 top-10 h-80 w-80" aria-hidden />
        <Hero />
        <TechMarquee />
      </div>

      <Section
        id="about"
        index="01"
        title="About"
        subtitle="A software engineer who bridges full-stack product work and applied machine learning."
      >
        <About />
      </Section>

      <Section
        id="experience"
        index="02"
        title="Experience"
        tone="tint"
        subtitle="Research and industry roles in systems engineering and data pipelines."
      >
        <Experience />
      </Section>

      <Section
        id="projects"
        index="03"
        title="Projects"
        subtitle="Selected work across LLM applications, real-time systems, retrieval, and ML pipelines. Click any card for the details."
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        index="04"
        title="Skills"
        tone="tint"
        subtitle="Languages, frameworks, and infrastructure I work with regularly."
      >
        <Skills />
      </Section>

      <Section id="education" index="05" title="Education">
        <Education />
      </Section>

      <Section
        id="contact"
        index="06"
        title="Contact"
        tone="dark"
        subtitle="Open to full-time software engineering roles."
      >
        <ContactSection />
      </Section>
    </>
  );
}
