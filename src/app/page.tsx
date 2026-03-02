import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="space-y-0 bg-[#0f0f14]">
      <Hero />

      <Section id="about" title="System Architecture Overview">
        <About />
      </Section>

      <Section id="projects" title="Deployment Modules" subtitle="Recent implementations in Distributed Systems & Scale.">
        <Projects />
      </Section>

      <Section id="experience" title="Enterprise Observability">
        <Experience />
      </Section>

      <Section id="research" title="Research Labs">
        <Research />
      </Section>

      <Section id="skills" title="Technical Blueprints">
        <Skills />
      </Section>
    </div>
  );
}
