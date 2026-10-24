"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders the final value in the markup (so it is correct with no JS). If the
 * element starts below the fold, it counts up from zero when scrolled into view;
 * a failsafe always restores the final value.
 */
export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<number | null>(null); // null = show final

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion-ready")) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return; // already visible: no animation

    let raf = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    let started = false;
    let io: IntersectionObserver | null = null;
    // Reset to zero on the next frame (the element is offscreen, so this is unseen).
    raf = requestAnimationFrame(() => setValue(0));

    const cleanup = () => {
      window.removeEventListener("scroll", check);
      io?.disconnect();
      clearTimeout(failsafe);
      clearInterval(poll);
    };
    const run = () => {
      if (started) return;
      started = true;
      cleanup();
      // Guarantee the final value even if animation frames are throttled.
      settle = setTimeout(() => setValue(null), 1800);
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1100);
        setValue(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(step);
        else setValue(null);
      };
      raf = requestAnimationFrame(step);
    };
    function check() {
      if (el!.getBoundingClientRect().top < window.innerHeight * 0.88) run();
    }

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && run(), {
        threshold: 0.6,
      });
      io.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    const poll = window.setInterval(check, 250); // event-independent trigger
    const failsafe = setTimeout(() => {
      started = true;
      cleanup();
      setValue(null);
    }, 15000);

    return () => {
      cleanup();
      clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to]);

  const shown = value ?? to;
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
