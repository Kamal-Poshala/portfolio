import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0 bg-white/50">
      <Hero />

      <Section id="about" title="Professional Summary" subtitle="System Architecture & AI Overview">
        <About />
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="Recent implementations in Distributed Systems & Scale.">
        <Projects />
      </Section>

      <Section id="experience" title="Professional Experience" subtitle="Enterprise Observation & Engineering">
        <Experience />
      </Section>

      <Section id="education" title="Education & Certifications" subtitle="Academic Milestones and Cloud Native Credentials">
        <Education />
      </Section>

      <Section id="research" title="Academic Highlights" subtitle="Advanced Implementations and Research Labs">
        <Research />
      </Section>

      <Section id="skills" title="Technical Toolkit" subtitle="Languages, Frameworks, and Infrastructure">
        <Skills />
      </Section>

      <Section id="contact" title="Get in Touch" subtitle="Let's build scalable systems together.">
        <ContactSection />
      </Section>
    </div>
  );
}
