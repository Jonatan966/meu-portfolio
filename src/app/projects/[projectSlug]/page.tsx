import { ComingSoon } from "@/components/coming-soon";
import { SocialCTA } from "@/components/social-cta";
import { Techs } from "@/components/techs";
import { VideoPlayer } from "@/components/video-player";
import { notionService } from "@/services/notion";
import clsx from "clsx";
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

  return (
    <main>
      <section
        className={clsx("bg-zinc-950", {
          "md:h-96": !!projectInfo.demonstration,
          "h-96": !projectInfo.demonstration,
        })}
      >
        <div className="max-w-[1050px] mx-auto flex flex-col gap-4 h-full py-4 justify-center px-4 md:flex-row">
          {projectInfo.demonstration && (
            <div className="md:w-[50%] h-full flex items-center justify-center">
              <VideoPlayer
                className="my-auto h-full w-full rounded-md aspect-video md:aspect-auto border border-neutral-800 overflow-hidden"
                options={{
                  controls: true,
                  sources: [
                    {
                      src: projectInfo.demonstration,
                      type: "video/mp4",
                    },
                  ],
                }}
              />
            </div>
          )}

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
                    className="text-sm text-stone-300"
                    key={`${projectInfo.id}-${tech}`}
                  >
                    <Image
                      src={Techs[tech]}
                      alt={tech}
                      title={tech}
                      className="w-10 h-10"
                      width={40}
                      height={40}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p className="leading-relaxed text-stone-300">
              {projectInfo?.description}
            </p>

            <div className="flex flex-col gap-2 mt-auto">
              {projectInfo.prototype && (
                <a
                  href={projectInfo.prototype}
                  target="_blank"
                  className="bg-zinc-800 p-2 rounded-md flex items-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaFigma size={24} />
                  <strong className="w-full text-center">Design</strong>
                </a>
              )}
              <div className="flex gap-2">
                <a
                  href={projectInfo.repository}
                  target="_blank"
                  className="bg-gray-900 p-2 rounded-md flex items-center gap-2 w-full"
                >
                  <FaGithub size={24} />
                  <strong className="w-full text-center">Repositório</strong>
                </a>

                <a
                  href={projectInfo.site}
                  target="_blank"
                  aria-disabled={!projectInfo.site || undefined}
                  className="p-2 rounded-md font-bold bg-orange-500 w-full text-center aria-[disabled]:opacity-50 aria-[disabled]:cursor-not-allowed"
                >
                  Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1050px] mx-auto p-4">
        <h2 className="text-xl font-medium mb-2">Diário de bordo</h2>

        <ComingSoon />
      </section>

      <SocialCTA />
    </main>
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
