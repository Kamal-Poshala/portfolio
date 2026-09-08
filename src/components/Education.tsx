import { education } from "@/data/experience";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {education.map((edu) => (
        <Reveal key={edu.institution}>
          <div className="card h-full p-6">
            <p className="label">{edu.period}</p>
            <h3 className="mt-2 text-base font-semibold text-[var(--ink)]">{edu.degree}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {edu.institution} · {edu.location}
            </p>
            {edu.detail && (
              <p className="mt-3 text-sm font-medium text-[var(--ink-soft)]">{edu.detail}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
