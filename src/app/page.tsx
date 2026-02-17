import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />

      <Section id="skills" title="Technical Skills" className="bg-secondary/20">
        <Skills />
      </Section>

      <Section id="experience" title="Work Experience">
        <Experience />
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work in distributed systems and ML.">
        <Projects />
      </Section>

      <Section id="education" title="Education" className="bg-secondary/20">
        <Education />
      </Section>
    </div>
  );
}
