import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  /** plain (default), tint (subtle green wash), or dark (full dark band) */
  tone?: "plain" | "tint" | "dark";
  children: ReactNode;
}

const tones = {
  plain: "",
  tint: "band-tint",
  dark: "band-dark dark-scope",
} as const;

export default function Section({ id, index, title, subtitle, tone = "plain", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 border-t border-[var(--hairline)] ${tones[tone]}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <div className="flex items-baseline gap-3">
            <span className="label text-[var(--accent)]">{index}</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)]">{subtitle}</p>
          )}
          <div className="draw mt-5 h-0.5 w-14 rounded-full bg-gradient-to-r from-[var(--accent)] to-teal-400" aria-hidden />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
