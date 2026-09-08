import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, index, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-20 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:px-8">
        <Reveal className="mb-12">
          <div className="flex items-baseline gap-3">
            <span className="label text-[var(--accent)]">{index}</span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{subtitle}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
