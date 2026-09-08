import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Purely CSS (scroll-driven animations) — content is
 * always rendered visible; the fade-up is layered on only where supported.
 * No JavaScript, so it can never leave content hidden.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal${className ? ` ${className}` : ""}`}>{children}</div>;
}
