import { ProjectCard } from "@/components/project-card";
import { notionService } from "@/services/notion";

export default async function ProjectsPage() {
  const projects = await notionService.listProjects();

  return (
    <main>
      <section className="max-w-[1050px] mx-auto p-4 mt-2">
        <h2 className="text-xl font-medium">Projetos</h2>
        <ul className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...{ project }} />
          ))}
        </ul>
      </section>
    </main>
  );
}
