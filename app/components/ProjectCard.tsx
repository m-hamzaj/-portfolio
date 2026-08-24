import type { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1] ${
        project.featured ? "sm:col-span-2 bg-black/[.02] dark:bg-white/[.03]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-black/[.1] px-3 py-1.5 text-xs font-medium transition-colors hover:bg-black/[.03] dark:border-white/[.15] dark:hover:bg-white/[.05]"
        >
          GitHub &rarr;
        </a>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm leading-6">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-black/[.05] px-2.5 py-1 font-mono text-xs text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
