import { Tag } from "@/components/ui/tag";

export function TechnologyList({
  technologies,
  limit,
  tone,
  label = "Technologies",
}: {
  technologies: string[];
  limit?: number;
  tone?: "default" | "inverse";
  label?: string;
}) {
  const shown = limit ? technologies.slice(0, limit) : technologies;
  const hidden = technologies.length - shown.length;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {shown.map((tech) => (
        <li key={tech}>
          <Tag tone={tone}>{tech}</Tag>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Tag tone={tone}>+{hidden}</Tag>
        </li>
      )}
    </ul>
  );
}
