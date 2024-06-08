import { environments } from "@/utils/environments";
import { notionApi } from "./api";

export interface Publication {
  id: string;
  slug: string;
  title: string;
  related_project_id?: string;
  created_at: string;
}

export interface RawPublication {
  id: string;
  created_time: string;
  properties: {
    title: {
      title: {
        plain_text: string;
      }[];
    };
    slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
    related_project?: {
      relation: {
        id: string;
      }[];
    };
  };
}

export async function listPublications(): Promise<Publication[]> {
  const publicationsResponse = await notionApi.databases.query({
    database_id: environments.notion.PUBLICATIONS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "public",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  const rawPublications =
    publicationsResponse.results as unknown as RawPublication[];

  const parsedPublications = rawPublications.map(
    ({ id, properties, created_time }) => ({
      id,
      slug: properties.slug.rich_text?.[0]?.plain_text,
      title: properties.title.title?.[0]?.plain_text,
      related_project_id: properties.related_project?.relation?.[0].id,
      created_at: created_time,
    })
  );

  return parsedPublications;
}
