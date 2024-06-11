import { Project } from "@/services/notion/list-projects";
import Image from "next/image";
import Link from "next/link";
import { Techs } from "./techs";

interface ProjectCardProps {
  project: Project;
  as?: keyof JSX.IntrinsicElements;
}

export function ProjectCard({ project, as = "li" }: ProjectCardProps) {
  const Container = as;

  return (
    <Link href={`/projects/${project.slug}`}>
      <Container className="bg-zinc-950 p-4 rounded-md border border-neutral-800">
        <div className="flex justify-between mb-2">
          <Image
            src={project.icon}
            alt={`Imagem do projeto ${project.name}`}
            className="w-16 h-16 rounded-md"
            width={64}
            height={64}
          />
          <ul className="flex gap-1">
            {project.techs.map((tech) => (
              <li
                className="text-sm text-stone-300"
                key={`${project.id}-${tech}`}
              >
                <Image
                  src={Techs[tech]}
                  alt={tech}
                  className="w-8 h-8"
                  width={40}
                  height={40}
                />
              </li>
            ))}
          </ul>
        </div>

        <h3 className="font-medium">{project.name}</h3>
        <p className="text-stone-300">{project.short_description}</p>
      </Container>
    </Link>
  );
}
