import { Boxes, Layers, Sparkles } from "lucide-react";

const focus = [
  {
    icon: Layers,
    title: "Backend & Distributed Systems",
    body: "REST APIs, event-driven services, real-time sync, and the debugging discipline to keep them stable under load.",
  },
  {
    icon: Boxes,
    title: "Full-Stack Product",
    body: "React / TypeScript front ends wired to Node and FastAPI back ends, shipped end to end on Vercel and Koyeb.",
  },
  {
    icon: Sparkles,
    title: "Applied Machine Learning",
    body: "Multilingual NLP with parameter-efficient fine-tuning, and multimodal media pipelines built for fault isolation.",
  },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
        <p>
          I&apos;m a software engineer finishing an M.S. in Computer Science at the University of
          Oklahoma. My work spans full-stack web development, backend systems, and applied machine
          learning — scalable REST APIs and React/TypeScript front ends alongside production-oriented
          ML pipelines.
        </p>
        <p>
          A lot of my strength comes from debugging: diagnosing and fixing concurrency and
          performance bottlenecks in production-style systems. I&apos;m comfortable across SQL and
          NoSQL databases, Git-based workflows, CI/CD, and PyTorch / Hugging Face tooling, and I pick
          up new frameworks quickly.
        </p>
        <p>
          I work well with faculty, researchers, and cross-functional teams, turning ambiguous
          requirements into shipped features.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {focus.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card p-5">
            <Icon className="h-5 w-5 text-[var(--accent)]" />
            <h3 className="mt-3 text-sm font-semibold text-[var(--ink)]">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
