import type { ReactNode } from "react";

/**
 * Passthrough wrapper. Entrance animations were removed after scroll/time-driven
 * reveals were found to leave content invisible in throttled tabs; kept as a
 * thin component so call sites don't churn, and in case a safe reveal returns.
 */
export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return className ? <div className={className}>{children}</div> : <>{children}</>;
}
