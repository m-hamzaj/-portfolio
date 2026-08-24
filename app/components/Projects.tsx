import { Layers } from "lucide-react";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="flex items-center gap-2 font-mono text-sm font-medium text-accent">
        <Layers size={15} />
        01 / Projects
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
