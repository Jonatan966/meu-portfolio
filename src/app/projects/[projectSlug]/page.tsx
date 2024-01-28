import { ComingSoon } from "@/components/coming-soon";
import { Markdown } from "@/components/markdown";
import { NavigationHeader } from "@/components/navigation-header";
import { SocialCTA } from "@/components/social-cta";
import { Techs } from "@/components/techs";
import { notionService } from "@/services/notion";
import { notionToMarkdownService } from "@/services/notion-to-markdown";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaFigma, FaGithub } from "react-icons/fa";

interface ProjectPageProps {
  params: {
    projectSlug: string;
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const projectInfo = await notionService.getProjectBySlug(
    props.params.projectSlug
  );

  if (!projectInfo) {
    return notFound();
  }

  const projectDetails = await notionToMarkdownService.createMarkdownByPageId(
    projectInfo.id
  );

  return (
    <>
      <NavigationHeader />

      <main>
        <section className="h-96 bg-[#09090A]">
          <div className="max-w-[1050px] mx-auto flex h-full py-4 justify-center px-4">
            <div className="md:w-[50%] h-full flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={projectInfo?.icon!}
                  alt="Ícone do projeto"
                  width={56}
                  height={56}
                  className="w-10 h-10 rounded-md"
                />

                <h1 className="text-1xl md:text-2xl font-bold flex-1">
                  {projectInfo?.name}
                </h1>

                <ul className="flex gap-2">
                  {projectInfo.techs.map((tech) => (
                    <li
                      className="text-sm text-[#C4C4CC]"
                      key={`${projectInfo.id}-${tech}`}
                    >
                      <Image
                        src={Techs[tech]}
                        alt={tech}
                        className="w-10 h-10"
                        width={40}
                        height={40}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <p className="leading-relaxed text-[#C4C4CC]">
                {projectInfo?.description}
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <div className="flex gap-2">
                  {projectInfo.repository && (
                    <a
                      href={projectInfo.repository}
                      target="_blank"
                      className="bg-[#161b22] p-2 rounded-md flex items-center gap-2 w-full"
                    >
                      <FaGithub size={24} />
                      <strong className="w-full text-center">
                        Repositório
                      </strong>
                    </a>
                  )}

                  <button className="bg-[#2c2c2c] p-2 rounded-md flex items-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaFigma size={24} />
                    <strong className="w-full text-center">Design</strong>
                  </button>
                </div>
                <button className="p-2 rounded-md font-bold bg-orange-500 w-full disabled:opacity-50 disabled:cursor-not-allowed">
                  Site
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium mb-2">Detalhes do projeto</h2>

          <Markdown>{projectDetails}</Markdown>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium mb-2">Diário de bordo</h2>

          <ComingSoon />
        </section>

        <SocialCTA />
      </main>

      <footer className="text-center bg-[#09090A] py-4 mt-4 text-sm">
        <span>
          Feito com 💝 por <b>Jonatan Frederico</b>
        </span>
      </footer>
    </>
  );
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  const projects = await notionService.listProjects();

  return projects.map((project) => ({
    projectSlug: project.slug,
  }));
}
