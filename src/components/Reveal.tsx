import type { CSSProperties, ReactNode } from "react";

/**
 * Scroll-reveal wrapper. It renders visible markup; `MotionProvider` decides at
 * runtime whether to hide-then-reveal it (only when it starts below the fold).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      className={className}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
