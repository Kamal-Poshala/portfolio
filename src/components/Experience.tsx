import { experiences } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <div className="flex flex-col">
      {experiences.map((exp) => (
        <Reveal key={exp.company}>
          <div className="grid grid-cols-1 gap-2 border-t border-[var(--hairline)] py-8 first:border-t-0 first:pt-0 sm:grid-cols-[180px_1fr] sm:gap-8">
            <p className="label pt-1">{exp.period}</p>
            <div>
              <h3 className="text-base font-semibold text-[var(--ink)]">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-[var(--muted)]">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {exp.description.map((d, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
