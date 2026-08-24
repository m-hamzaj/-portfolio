import { Check, GitBranch } from "lucide-react";
import type { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-accent/40 dark:border-white/[.1] ${
        project.featured ? "bg-black/[.02] dark:bg-white/[.03] sm:col-span-2" : ""
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
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/[.1] px-3 py-1.5 text-xs font-medium transition-colors group-hover:border-accent/40 group-hover:text-accent dark:border-white/[.15]"
        >
          <GitBranch size={13} />
          GitHub
        </a>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm leading-6">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.5} />
            <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-zinc-700 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
