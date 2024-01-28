import { Markdown } from "@/components/markdown";
import { NavigationHeader } from "@/components/navigation-header";
import { SocialCTA } from "@/components/social-cta";
import { notionService } from "@/services/notion";
import { notionToMarkdownService } from "@/services/notion-to-markdown";
import Image from "next/image";
import { notFound } from "next/navigation";

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
                  className="w-14 h-14 rounded-md"
                />

                <h1 className="text-2xl">{projectInfo?.name}</h1>
              </div>

              <p className="leading-relaxed text-[#C4C4CC]">
                {projectInfo?.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-2 mt-auto">
                <button className="bg-orange-500 p-1 rounded-md font-bold">
                  Acessar Repositório
                </button>
                <button className="p-1 rounded-md border-[#232327] border-2">
                  Acessar Site
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
          <h2 className="text-xl font-medium">Diário de bordo</h2>

          <ul className="grid md:grid-cols-3 gap-4 mt-2">
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
          </ul>
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
