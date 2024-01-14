import { Project } from "@/services/notion/list-projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <li className="bg-[#09090A] p-4 rounded-md">
        <Image
          src={project.icon}
          alt={`Imagem do projeto ${project.name}`}
          className="w-16 h-16 rounded-md mb-2"
          width={64}
          height={64}
        />
        <h3 className="font-medium">{project.name}</h3>
        <p className="text-[#C4C4CC]">{project.short_description}</p>
      </li>
    </Link>
  );
}
