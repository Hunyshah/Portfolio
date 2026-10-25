import { experience } from "@/lib/experience";
import { TechnologyList } from "@/components/projects/technology-list";

export function ExperienceTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="border-t border-line">
      {experience.map((role) => (
        <li key={role.company} className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
          <div className="md:col-span-3">
            <p className="font-mono text-sm text-ink-2">
              <time>{role.start}</time> — <time>{role.end}</time>
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl font-semibold tracking-tight">{role.company}</h3>
            <p className="mt-1 text-ink-2">{role.position}</p>
          </div>
          <div className="md:col-span-5">
            <ul className="space-y-2 text-sm leading-relaxed text-ink-2">
              {(detailed ? role.responsibilities : role.responsibilities.slice(0, 3)).map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            {detailed && (
              <div className="mt-5">
                <TechnologyList technologies={role.technologies} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
