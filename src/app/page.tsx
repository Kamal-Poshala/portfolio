import Hero from "@/components/Hero";
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
      <Hero />

      <Section
        id="about"
        index="01"
        title="About"
        subtitle="Software engineer bridging full-stack product work and applied machine learning."
      >
        <About />
      </Section>

      <Section
        id="experience"
        index="02"
        title="Experience"
        subtitle="Research and industry roles in systems engineering and data pipelines."
      >
        <Experience />
      </Section>

      <Section
        id="projects"
        index="03"
        title="Projects"
        subtitle="Selected work across real-time systems, retrieval, and applied-AI pipelines."
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        index="04"
        title="Skills"
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
        subtitle="Open to full-time software engineering roles starting in 2026."
      >
        <ContactSection />
      </Section>
    </>
  );
}
