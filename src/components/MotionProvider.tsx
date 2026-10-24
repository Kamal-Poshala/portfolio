"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const motionOn = () => document.documentElement.classList.contains("motion-ready");

export default function MotionProvider() {
  const pathname = usePathname();

  // Scroll progress bar (writes --p on <html>).
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Card spotlight + hero glow follow a fine pointer. No-op on touch devices.
  useEffect(() => {
    if (!motionOn() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const target = { x: 72, y: 28 };
    const cur = { x: 72, y: 28 };
    let raf = 0;

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.12;
      cur.y += (target.y - cur.y) * 0.12;
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      hero?.style.setProperty("--gx", `${cur.x.toFixed(2)}%`);
      hero?.style.setProperty("--gy", `${cur.y.toFixed(2)}%`);
      raf =
        Math.abs(target.x - cur.x) > 0.05 || Math.abs(target.y - cur.y) > 0.05
          ? requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      const card = el?.closest<HTMLElement>(".spot");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (e.clientY >= r.top && e.clientY <= r.bottom) {
          target.x = ((e.clientX - r.left) / r.width) * 100;
          target.y = ((e.clientY - r.top) / r.height) * 100;
          if (!raf) raf = requestAnimationFrame(tick);
        }
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll reveals. Only elements that start below the fold are ever hidden, and
  // two independent triggers (IntersectionObserver + a scroll check) reveal them.
  useEffect(() => {
    if (!motionOn()) return;

    const pending = new Set<HTMLElement>();
    const initialLimit = window.innerHeight * 0.9;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > initialLimit) {
        el.classList.add("reveal-hidden");
        pending.add(el);
      }
    });
    if (pending.size === 0) return;

    let io: IntersectionObserver | null = null;
    const show = (el: HTMLElement) => {
      el.classList.add("reveal-in");
      pending.delete(el);
      io?.unobserve(el);
    };
    const check = () => {
      const limit = window.innerHeight * 0.92;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) show(el);
      });
    };

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) show(e.target as HTMLElement);
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      pending.forEach((el) => io!.observe(el));
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    window.addEventListener("load", check);
    // Third, event-independent trigger: poll geometry while anything is pending, so
    // content can never stay hidden in environments that drop scroll/IO events.
    const poll = window.setInterval(() => {
      if (pending.size === 0) window.clearInterval(poll);
      else check();
    }, 250);
    check();

    return () => {
      window.clearInterval(poll);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.removeEventListener("load", check);
      io?.disconnect();
      // Restore the pristine (visible) state so a re-run starts clean.
      pending.forEach((el) => el.classList.remove("reveal-hidden"));
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden />;
}
