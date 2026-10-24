const items = [
  "Python",
  "Java",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "PyTorch",
  "Hugging Face",
  "Socket.IO",
  "Celery",
  "pgvector",
  "scikit-learn",
  "GitHub Actions",
];

function Row({ dup = false }: { dup?: boolean }) {
  return (
    <div
      className={`flex shrink-0 gap-2 ${dup ? "marquee-dup" : ""}`}
      aria-hidden={dup || undefined}
    >
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="border-y border-[var(--hairline)] py-4">
      <div className="marquee mx-auto max-w-5xl">
        <div className="marquee-track">
          <Row />
          <Row dup />
        </div>
      </div>
    </div>
  );
}
