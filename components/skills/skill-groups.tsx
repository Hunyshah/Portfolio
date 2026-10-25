import { engineeringAreas, skillGroups } from "@/lib/skills";

export function SkillGroups() {
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.title} aria-labelledby={`skills-${group.title}`} className="bg-paper p-6">
            <h3 id={`skills-${group.title}`} className="text-lg font-semibold tracking-tight">
              {group.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{group.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${group.title}: primary`}>
              {group.core.map((item) => (
                <li key={item} className="rounded-full bg-ink px-2.5 py-1 text-xs font-medium text-paper">
                  {item}
                </li>
              ))}
            </ul>
            {group.familiar.length > 0 && (
              <>
                <p className="eyebrow mt-4">Also worked with</p>
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`${group.title}: also worked with`}>
                  {group.familiar.map((item) => (
                    <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
        <p className="eyebrow shrink-0">Engineering areas</p>
        <p className="text-sm leading-relaxed text-ink-2">{engineeringAreas.join(" · ")}</p>
      </div>
    </div>
  );
}
