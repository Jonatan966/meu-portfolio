import { environments } from "@/utils/environments";
import { notionApi } from "./api";
import { RawPublication } from "./list-publications";

export async function getPublicationBySlug(publicationSlug: string) {
  const publicationsResponse = await notionApi.databases.query({
    database_id: environments.notion.PUBLICATIONS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "slug",
          rich_text: {
            equals: publicationSlug,
          },
        },
        {
          property: "public",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  const [rawPublication] =
    publicationsResponse.results as unknown as RawPublication[];

  if (!rawPublication) {
    return;
  }

  const parsedPublication = {
    id: rawPublication.id,
    slug: rawPublication.properties.slug.rich_text?.[0]?.plain_text,
    title: rawPublication.properties.title.title?.[0]?.plain_text,
    related_project_id:
      rawPublication.properties.related_project?.relation?.[0].id,
    created_at: rawPublication.created_time,
  };

  return parsedPublication;
}
