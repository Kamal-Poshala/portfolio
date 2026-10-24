"use client";

import { useEffect, useState } from "react";

export default function RotatingWords({ words }: { words: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!document.documentElement.classList.contains("motion-ready")) return;
    const id = setInterval(() => {
      if (!document.hidden) setI((n) => (n + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span key={i} className="word-in inline-block text-[var(--accent)]">
      {words[i]}
    </span>
  );
}
