import { Bug, Gauge, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import Stats from "./Stats";
import StackExplorer from "./StackExplorer";

const principles = [
  {
    icon: Bug,
    title: "Debug first",
    body: "Diagnosing concurrency and performance bottlenecks is where I do my best work.",
  },
  {
    icon: Gauge,
    title: "Measure it",
    body: "Latency, F1, write load — I benchmark before I claim anything.",
  },
  {
    icon: Rocket,
    title: "Ship it",
    body: "I turn ambiguous requirements into shipped features, working closely with faculty and teams.",
  },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
      <Reveal className="lg:col-span-4">
        <div className="card spot h-full p-7 sm:p-8">
          <p className="text-xl font-medium leading-snug tracking-tight text-[var(--ink)] sm:text-2xl">
            I like systems that stay <span className="text-gradient-accent">fast and honest under load</span>
            {" "}— and AI features that are measured, not hand-waved.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            I&apos;m a software engineer with an M.S. in Computer Science from the University of
            Oklahoma. My work spans full-stack web development, backend systems, and applied machine
            learning — scalable REST APIs and React/TypeScript front ends alongside
            production-oriented ML pipelines. I pick up new frameworks quickly and I&apos;m happiest
            when a vague requirement turns into something people can actually use.
          </p>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-2" delay={90}>
        <div className="card spot h-full p-6">
          <p className="label flex items-center gap-2">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
            Currently
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            <li>
              <span className="font-medium text-[var(--ink)]">Research Assistant</span>, University of
              Oklahoma — building an academic lineage data platform.
            </li>
            <li>
              <span className="font-medium text-[var(--ink)]">Building</span> DocMind (agentic RAG)
              and StockSense (forecasting with an LLM agent).
            </li>
            <li>
              <span className="font-medium text-[var(--ink)]">Open</span> to full-time roles · Norman,
              OK · relocation OK.
            </li>
          </ul>
        </div>
      </Reveal>

      <Stats className="lg:col-span-6" />

      <Reveal className="lg:col-span-4">
        <div className="card spot h-full p-6 sm:p-7">
          <p className="label mb-4">Stack explorer</p>
          <StackExplorer />
        </div>
      </Reveal>

      <Reveal className="lg:col-span-2" delay={90}>
        <div className="card spot h-full p-6">
          <p className="label mb-4">How I work</p>
          <ul className="space-y-4">
            {principles.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
