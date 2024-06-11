import { CertificateCard } from "@/components/certificate-card";
import { CurrentJobCard } from "@/components/current-job-card";
import { PreviousJobCard } from "@/components/previous-job-card";
import { ProjectCard } from "@/components/project-card";
import { PublicationsSection } from "@/components/publications-section";
import { Skeleton } from "@/components/skeleton";
import { SocialCTA } from "@/components/social-cta";
import { notionService } from "@/services/notion";
import { Suspense } from "react";

export default async function Home() {
  const [projects, certificates, jobs] = await Promise.all([
    notionService.listProjects(),
    notionService.listCertificates(),
    notionService.listJobs(),
  ]);

  return (
    <main>
      <section className="flex flex-col items-center justify-center h-96 relative border-b-2 border-neutral-800">
        <h2 className="text-3xl font-bold z-20">Olá 👋</h2>
        <p className="text-stone-300 z-20">
          É muito bom te ver em meu portfólio
        </p>
        <div className="absolute inset-0 blur-[5px] opacity-50 z-10 bg-home-tilemap bg-[length:150px]" />
      </section>

      <section className="max-w-[1050px] mx-auto p-4 mt-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium">Sobre mim</h2>
        </div>

        <p className="mt-2 leading-relaxed text-stone-300">
          Sou <b>Desenvolvedor Fullstack</b>, estudando programação desde 2019 e
          possuindo formação técnica em{" "}
          <b>Análise e Desenvolvimento de Sistemas</b>. Atualmente minha
          especialidade é no desenvolvimento de sites e APIs utilizando muito{" "}
          <b>Javascript/Typescript</b>. Sou um entusiasta, frequentemente estou
          criando projetos ou experimentando ferramentas.
        </p>
      </section>

      <section className="max-w-[1050px] mx-auto p-4 mt-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium">Projetos</h2>
          <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold">
            {projects.length} no total
          </span>
        </div>

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

        <ul className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
          {jobs.map((job, index) =>
            index === 0 ? (
              <CurrentJobCard job={job} key={job.id} />
            ) : (
              <PreviousJobCard job={job} key={job.id} />
            )
          )}
        </ul>
      </section>

      <Suspense fallback={<Skeleton className="h-24" />}>
        <PublicationsSection title="Publicações" />
      </Suspense>

      <SocialCTA />
    </main>
  );
}
