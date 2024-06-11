import { environments } from "@/utils/environments";
import { notionApi } from "./api";

export interface Publication {
  id: string;
  slug: string;
  title: string;
  tag: string;
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
    tag: {
      select: {
        name: string;
      };
    };
    related_project?: {
      relation: {
        id: string;
      }[];
    };
  };
}

interface ListPublicationsProps {
  publicationToSkip?: string;
  relatedProjectId?: string;
  maxPublicationsCount?: number;
}

export async function listPublications(
  props?: ListPublicationsProps
): Promise<Publication[]> {
  const andFilters: any[] = [
    {
      property: "public",
      checkbox: {
        equals: true,
      },
    },
  ];

  if (props?.publicationToSkip) {
    andFilters.push({
      property: "slug",
      rich_text: {
        does_not_equal: props.publicationToSkip,
      },
    });
  }

  if (props?.relatedProjectId) {
    andFilters.push({
      property: "related_project",
      relation: {
        contains: props.relatedProjectId,
      },
    });
  }

  const publicationsResponse = await notionApi.databases.query({
    database_id: environments.notion.PUBLICATIONS_DATABASE_ID,
    filter: {
      and: andFilters,
    },
    page_size: props?.maxPublicationsCount,
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  });

  const rawPublications =
    publicationsResponse.results as unknown as RawPublication[];

  const parsedPublications = rawPublications.map(
    ({ id, properties, created_time }) => ({
      id,
      slug: properties.slug.rich_text?.[0]?.plain_text,
      title: properties.title.title?.[0]?.plain_text,
      tag: properties.tag.select.name,
      related_project_id: properties.related_project?.relation?.[0].id,
      created_at: created_time,
    })
  );

  return parsedPublications;
}
