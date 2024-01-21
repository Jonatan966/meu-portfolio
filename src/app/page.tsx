import { CertificateCard } from "@/components/certificate-card";
import { ComingSoon } from "@/components/coming-soon";
import { CurrentJobCard } from "@/components/current-job-card";
import { NavigationHeader } from "@/components/navigation-header";
import { ProjectCard } from "@/components/project-card";
import { SocialCTA } from "@/components/social-cta";
import { notionService } from "@/services/notion";
import Image from "next/image";

export default async function Home() {
  const [projects, certificates, jobs] = await Promise.all([
    notionService.listProjects(),
    notionService.listCertificates(),
    notionService.listJobs(),
  ]);

  return (
    <>
      <NavigationHeader />

      <main>
        <section className="flex flex-col items-center justify-center h-96 relative">
          <h2 className="text-3xl font-bold z-20">Olá 👋</h2>
          <p className="text-[#C4C4CC] z-20">
            É muito bom te ver em meu portfólio
          </p>
          <div className="absolute inset-0 blur-[5px] opacity-50 z-10 bg-home-tilemap bg-[length:150px]" />
        </section>

        <section className="max-w-[1050px] mx-auto p-4 mt-2">
          <h2 className="text-xl font-medium">Projetos</h2>

          <ul className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...{ project }} />
            ))}
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Certificados</h2>

          <ul className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Jornada</h2>

          <CurrentJobCard job={jobs[0]} />
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Publicações</h2>

          <ComingSoon className="mt-2" />
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
