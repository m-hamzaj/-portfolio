import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm font-mono font-medium text-zinc-500 dark:text-zinc-400">01 / Projects</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
