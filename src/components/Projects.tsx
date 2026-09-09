import Image from "next/image";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((p) => (
        <Reveal key={p.title}>
          <article className="card card-hover grid grid-cols-1 overflow-hidden md:grid-cols-[1fr_1.4fr]">
            <div className="relative aspect-[16/10] border-b border-[var(--hairline)] bg-[var(--surface-2)] md:aspect-auto md:border-b-0 md:border-r">
              <Image
                src={p.image}
                alt={`${p.title} — ${p.tagline}`}
                fill
                sizes="(min-width: 768px) 440px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="label text-[var(--accent)]">{p.category}</span>
                <span className="label">{p.year}</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{p.title}</h3>
              <p className="text-sm text-[var(--muted)]">{p.tagline}</p>

              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{p.description}</p>

              <p className="mt-4 border-l-2 border-[var(--accent)] pl-3 text-sm font-medium text-[var(--ink)]">
                {p.highlight}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 pt-1">
                {p.repoLink && (
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
                {p.demoLink && (
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    <ArrowUpRight className="h-4 w-4" /> Live demo
                  </a>
                )}
                {p.paperLink && (
                  <a
                    href={p.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    <FileText className="h-4 w-4" /> Paper
                  </a>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
