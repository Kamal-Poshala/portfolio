import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-8">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Kamal Poshala · Built with Next.js &amp; Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Kamal-Poshala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-poshala-6431611a7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:kamalposhala.cs@gmail.com"
            aria-label="Email"
            className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
