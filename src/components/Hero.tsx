import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import RotatingWords from "./RotatingWords";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  return (
    <section data-hero className="relative w-full overflow-hidden pt-28 sm:pt-32">
      <div className="hero-glow" aria-hidden />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pb-16 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:pb-24">
        <div className="flex flex-col gap-5">
          <p className="label rise flex items-center gap-2" style={step(0)}>
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            Norman, OK · Open to relocation
          </p>

          <h1
            className="rise text-gradient pb-1 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
            style={step(1)}
          >
            Kamal Poshala
          </h1>

          <p className="rise text-lg font-medium text-[var(--ink-soft)] sm:text-xl" style={step(2)}>
            Software Engineer <span className="text-[var(--faint)]">·</span>{" "}
            <RotatingWords
              words={["Full-stack systems", "Backend services", "Applied AI", "LLM applications"]}
            />
          </p>

          <p className="rise max-w-xl text-base leading-relaxed text-[var(--muted)]" style={step(3)}>
            I build full-stack and backend systems — real-time collaborative platforms, distributed
            REST services, and applied-AI pipelines for multilingual NLP and multimodal media. I like
            turning research-grade techniques into software that holds up in production.
          </p>

          <div className="rise flex flex-wrap items-center gap-3 pt-2" style={step(4)}>
            <Link
              href="/#projects"
              className="btn-primary group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--hairline)] bg-white/[0.03] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            >
              Résumé
            </Link>
            <a
              href="https://github.com/Kamal-Poshala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-poshala-6431611a7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-[280px]" style={step(3)}>
          <div
            className="float absolute inset-0 rounded-xl border border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--surface-2)]">
            <Image
              src="/profile.jpg"
              alt="Kamal Poshala"
              fill
              sizes="280px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] shadow-[var(--shadow)]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
            Open to full-time roles
          </div>
        </div>
      </div>
    </section>
  );
}
