import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 pb-16 sm:gap-12 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:pb-24">
        <div className="flex flex-col gap-5">
          <p className="label flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            Norman, OK · Open to relocation
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-6xl">
            Kamal Poshala
          </h1>

          <p className="text-lg font-medium text-[var(--ink-soft)] sm:text-xl">
            Software Engineer
          </p>

          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
            I build full-stack and backend systems — real-time collaborative platforms, distributed
            REST services, and applied-AI pipelines for multilingual NLP and multimodal media. I like
            turning research-grade techniques into software that holds up in production.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--hairline)] px-4 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            >
              Résumé
            </Link>
            <a
              href="https://github.com/Kamal-Poshala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-poshala-6431611a7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px]">
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
        </div>
      </div>
    </section>
  );
}
