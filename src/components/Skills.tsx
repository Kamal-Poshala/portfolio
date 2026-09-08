import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="flex flex-col">
      {skillGroups.map((group) => (
        <Reveal key={group.label}>
          <div className="grid grid-cols-1 gap-3 border-t border-[var(--hairline)] py-6 first:border-t-0 first:pt-0 sm:grid-cols-[220px_1fr] sm:gap-8">
            <h3 className="label pt-1">{group.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
