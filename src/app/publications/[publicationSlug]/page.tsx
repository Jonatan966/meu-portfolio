import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "@/components/markdown";
import { SocialCTA } from "@/components/social-cta";
import { notionService } from "@/services/notion";
import { notionToMarkdownService } from "@/services/notion-to-markdown";
import { ReferencedProject } from "./components/referenced-project";
import { PublicationsSection } from "@/components/publications-section";
import { getDescritiveDate } from "@/utils/get-descritive-date";
import { Skeleton } from "@/components/skeleton";

interface PublicationPageProps {
  params: {
    publicationSlug: string;
  };
}

export default async function PublicationPage(props: PublicationPageProps) {
  const publicationInfo = await notionService.getPublicationBySlug(
    props.params.publicationSlug
  );

  if (!publicationInfo) {
    return notFound();
  }

  const creationDate = getDescritiveDate(publicationInfo.created_at);
  const publicationDetails =
    await notionToMarkdownService.createMarkdownByPageId(publicationInfo.id);

  return (
    <main>
      <section className="flex flex-col gap-2 items-center justify-center h-48 relative border-b-2 border-neutral-800 bg-zinc-950">
        <span className="text-xs bg-neutral-800 text-white rounded-xl px-2 py-1 font-bold mx-auto">
          {publicationInfo.tag}
        </span>

        <h1 className="text-xl md:max-w-[30%] lg:max-w-[15%] mx-4 text-center leading-tight">
          {publicationInfo.title}
        </h1>

        <time className="text-sm text-neutral-400">{creationDate}</time>
      </section>

      {publicationInfo.related_project_id && (
        <Suspense fallback={<Skeleton className="h-32" />}>
          <ReferencedProject
            projectPageId={publicationInfo.related_project_id}
          />
        </Suspense>
      )}

      <section className="max-w-[1050px] mx-auto p-4">
        <Markdown>{publicationDetails}</Markdown>
      </section>

      <Suspense fallback={<Skeleton className="h-24" />}>
        <PublicationsSection
          title="Publicações relacionadas"
          publicationToSkip={props.params.publicationSlug}
        />
      </Suspense>

      <SocialCTA />
    </main>
  );
}

export async function generateStaticParams(): Promise<
  PublicationPageProps["params"][]
> {
  const publications = await notionService.listPublications();

  return publications.map((publication) => ({
    publicationSlug: publication.slug,
  }));
}
