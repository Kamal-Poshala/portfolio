import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

const RESUME_PATH = "/Kamal-Poshala-Resume.pdf";

export const metadata: Metadata = {
  title: "Résumé — Kamal Poshala",
  description: "Résumé of Kamal Poshala, Software Engineer.",
};

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:pt-36 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">Résumé</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">Kamal Poshala — Software Engineer</p>
        </div>
        <a
          href={RESUME_PATH}
          download="Kamal-Poshala-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" /> Download PDF
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--surface-2)]">
        <iframe src={RESUME_PATH} title="Kamal Poshala résumé" className="h-[70vh] min-h-[560px] w-full border-0" />
      </div>
    </section>
  );
}
