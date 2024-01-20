import { CertificateCard } from "@/components/certificate-card";
import { NavigationHeader } from "@/components/navigation-header";
import { ProjectCard } from "@/components/project-card";
import { SocialCTA } from "@/components/social-cta";
import { notionService } from "@/services/notion";

export default async function Home() {
  const [projects, certificates] = await Promise.all([
    notionService.listProjects(),
    notionService.listCertificates(),
  ]);

  return (
    <>
      <NavigationHeader />

      <main>
        <section className="flex flex-col items-center justify-center h-96 bg-[#09090A]">
          <h2 className="text-3xl font-bold">Olá 👋</h2>
          <p className="text-[#C4C4CC]">É muito bom te ver em meu portfólio</p>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Projetos</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...{ project }} />
            ))}
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Certificados</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Jornada</h2>

          <div className="bg-[#09090A] p-4 rounded-md mt-4 flex gap-4 border border-[#232327] md:flex-row flex-col">
            <div className="flex gap-2">
              <img
                src="https://github.com/Jonatan966.png"
                alt="Jonatan"
                className="w-20 h-20 rounded-md"
              />

              <div className="flex flex-col justify-between h-auto items-start md:items-stretch">
                <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto">
                  nov 2022 - set 2023
                </span>
                <h3 className="font-semibold">Empresa Tal</h3>
                <p className="text-sm text-[#C4C4CC]">Cargo tal</p>
              </div>
            </div>

            <ul className="flex my-auto md:ml-auto gap-2">
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>{" "}
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Publicações</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col md:col-start-1 md:col-end-3 border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[40%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
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
