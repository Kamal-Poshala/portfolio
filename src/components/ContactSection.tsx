"use client";

import { useState } from "react";
import { Check, Copy, FileText, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "kamalposhala.cs@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = [
    { icon: Linkedin, label: "LinkedIn", value: "kamal-poshala", href: "https://www.linkedin.com/in/kamal-poshala-6431611a7/" },
    { icon: Github, label: "GitHub", value: "Kamal-Poshala", href: "https://github.com/Kamal-Poshala" },
    { icon: FileText, label: "Résumé", value: "Download PDF", href: "/resume" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
        <p>
          I&apos;m looking for full-time software engineering roles starting in 2026 — full-stack,
          backend, or applied-AI teams. Based in Norman, OK and open to relocation.
        </p>
        <p>The fastest way to reach me is email.</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[var(--accent)]" />
            <a href={`mailto:${EMAIL}`} className="link-underline text-sm text-[var(--ink)]">
              {EMAIL}
            </a>
          </div>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy email address"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[var(--accent)]" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>

        <ul className="mt-2">
          {links.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("/") ? undefined : "_blank"}
                rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between gap-3 rounded-md px-1 py-3 text-sm transition-colors hover:text-[var(--ink)]"
              >
                <span className="flex items-center gap-3 text-[var(--ink)]">
                  <Icon className="h-4 w-4 text-[var(--muted)]" />
                  {label}
                </span>
                <span className="text-[var(--muted)]">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
