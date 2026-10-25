import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/types/project";

/**
 * Renders real, approved screenshots only. With no images, production renders nothing;
 * development shows where to add them so missing assets are easy to spot.
 */
export function ProjectGallery({ project }: { project: Project }) {
  if (project.images.length === 0) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div className="grid place-items-center gap-3 rounded-2xl border border-dashed border-line p-10 text-center text-sm text-ink-3">
        <ImageIcon aria-hidden className="size-6" />
        <p>
          Screenshot slot (visible in development only). Add real images to{" "}
          <code className="font-mono">/public/images/projects/{project.slug}/</code> and list them in{" "}
          <code className="font-mono">lib/projects.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {project.images.map((image) => (
        <li key={image.src} className="overflow-hidden rounded-2xl border border-line bg-surface">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </li>
      ))}
    </ul>
  );
}
