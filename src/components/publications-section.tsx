import { notionService } from "@/services/notion";
import { PublicationCard } from "./publication-card";
import { ComingSoon } from "./coming-soon";

interface PublicationsSectionProps {
  title: string;
  publicationToSkip?: string;
  relatedProjectId?: string;
  tag?: string;
}

export async function PublicationsSection(props: PublicationsSectionProps) {
  const publications = await notionService.listPublications({
    publicationToSkip: props.publicationToSkip,
    relatedProjectId: props.relatedProjectId,
  });

  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-medium">{props.title}</h2>
        {!!publications.length && (
          <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold">
            {publications.length} no total
          </span>
        )}
      </div>
      {publications.length ? (
        <ul className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </ul>
      ) : (
        <ComingSoon className="mt-2" />
      )}
    </section>
  );
}
