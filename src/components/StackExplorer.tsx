"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";

const tabs = [
  { id: "backend", label: "Backend", groups: ["Languages", "Backend & Systems"] },
  { id: "frontend", label: "Frontend", groups: ["Frontend"] },
  { id: "data", label: "Data", groups: ["Databases & Data Engineering"] },
  { id: "ai", label: "AI / ML", groups: ["Machine Learning & AI", "Speech & Vision AI"] },
];

export default function StackExplorer() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const items = Array.from(
    new Set(skillGroups.filter((g) => tab.groups.includes(g.label)).flatMap((g) => g.items)),
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill areas">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            className="chip-btn"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={active} className="mt-5 flex min-h-[92px] flex-wrap content-start gap-1.5" role="tabpanel">
        {items.map((item, i) => (
          <span key={item} className="tag chip-in" style={{ "--i": i } as React.CSSProperties}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
