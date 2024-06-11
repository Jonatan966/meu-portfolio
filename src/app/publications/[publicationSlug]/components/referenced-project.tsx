import { ProjectCard } from "@/components/project-card";
import { notionService } from "@/services/notion";

interface ReferencedProjectProps {
  projectPageId: string;
}

export async function ReferencedProject(props: ReferencedProjectProps) {
  const projectInfo = await notionService.getProjectById(props.projectPageId);

  if (!projectInfo) {
    return <></>;
  }

  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <h2 className="text-xl font-medium mb-2">Projeto referenciado</h2>
      <ProjectCard as="div" project={projectInfo} />
    </section>
  );
}
