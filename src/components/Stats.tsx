import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { to: 22, label: "languages in the SemEval 2026 polarization task" },
  { to: 0.87, decimals: 2, label: "Macro F1 with ~60% fewer trainable parameters" },
  { to: 60, prefix: "~", suffix: "%", label: "lower MongoDB write load in SyncSpace" },
  { to: 25, suffix: "%", label: "faster Java module at Persistent Systems" },
];

export default function Stats({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--surface)] p-5">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-[var(--ink)]">
              <CountUp to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
            </dd>
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]" aria-hidden>
              {s.label}
            </p>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
