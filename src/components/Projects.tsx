"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, FileText, Github, Lock, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Reveal from "./Reveal";

type Filter = "all" | Project["kind"];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "Applied AI / ML" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
];

const linkCls =
  "inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]";

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {p.repoLink && (
        <a href={p.repoLink} target="_blank" rel="noopener noreferrer" className={linkCls}>
          <Github className="h-4 w-4" /> Code
        </a>
      )}
      {p.demoLink && (
        <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className={linkCls}>
          <ArrowUpRight className="h-4 w-4" /> Live demo
        </a>
      )}
      {p.paperLink && (
        <a href={p.paperLink} target="_blank" rel="noopener noreferrer" className={linkCls}>
          <FileText className="h-4 w-4" /> Paper
        </a>
      )}
      {p.private && (
        <span className="inline-flex items-center gap-1.5 text-sm text-[var(--faint)]">
          <Lock className="h-4 w-4" /> Private repository
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Project | null>(null);
  const [changed, setChanged] = useState(false); // animate cards only after a filter change
  const dialogRef = useRef<HTMLDialogElement>(null);

  const shown = projects.filter((p) => filter === "all" || p.kind === filter);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => {
          const count = f.id === "all" ? projects.length : projects.filter((p) => p.kind === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              className="chip-btn"
              aria-pressed={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                setChanged(true);
              }}
            >
              {f.label} <span className="opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <div key={filter} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {shown.map((p, i) => {
          const featured = filter === "all" && i === 0;
          return (
            <Reveal key={p.title} className={featured ? "sm:col-span-2" : ""}>
              <div
                className={`h-full ${changed ? "rise" : ""}`}
                style={{ "--i": i } as CSSProperties}
              >
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className={`group card card-hover spot flex h-full w-full overflow-hidden text-left ${
                    featured ? "flex-col md:flex-row" : "flex-col"
                  }`}
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden border-b border-[var(--hairline)] bg-[var(--surface-2)] ${
                      featured ? "md:w-[55%] md:shrink-0 md:border-b-0 md:border-r" : ""
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.tagline}`}
                      fill
                      sizes={featured ? "(min-width: 768px) 520px, 100vw" : "(min-width: 640px) 470px, 100vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="label text-[var(--accent)]">{p.category}</span>
                      <span className="label">{p.year}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{p.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{p.tagline}</p>
                    <p className="mt-3 line-clamp-3 border-l-2 border-[var(--accent)] pl-3 text-sm text-[var(--ink-soft)]">
                      {p.highlight}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && <span className="tag">+{p.tech.length - 4}</span>}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-[var(--accent-ink)]">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        aria-label={open ? `${open.title} details` : undefined}
        className="m-auto max-h-[88vh] w-[min(920px,calc(100vw-2rem))] overflow-auto rounded-xl border border-[var(--hairline)] bg-[var(--surface)] p-0 text-[var(--ink)] shadow-[var(--shadow)]"
      >
        {open && (
          <div className="dialog-in relative">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[16/10] bg-[var(--surface-2)]">
              <Image
                src={open.image}
                alt={`${open.title} — ${open.tagline}`}
                fill
                sizes="920px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="label text-[var(--accent)]">{open.category}</span>
                <span className="label">{open.year}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{open.title}</h3>
              <p className="text-[var(--muted)]">{open.tagline}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">{open.description}</p>
              <p className="mt-5 border-l-2 border-[var(--accent)] pl-3 text-sm font-medium">{open.highlight}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {open.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-[var(--hairline)] pt-5">
                <Links p={open} />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
