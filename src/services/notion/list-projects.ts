import { slugify } from "@/utils/slugify";
import { notionApi } from "./api";
import { environments } from "@/utils/environments";

interface RawProject {
  id: string;
  icon: {
    file: {
      url: string;
    };
  };
  properties: {
    description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    short_description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    repository: {
      url: string;
    };
    name: {
      title: {
        plain_text: string;
      }[];
    };
  };
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  short_description: string;
  repository: string;
}

export async function listProjects(): Promise<Project[]> {
  const projectsResponse = await notionApi.databases.query({
    database_id: environments.notion.PROJECTS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "portfolio",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  const rawProjects = projectsResponse.results as unknown as RawProject[];

  const parsedProjects = rawProjects.map(({ id, properties, icon }) => ({
    id,
    name: properties.name.title?.[0]?.plain_text,
    slug: slugify(properties.name.title?.[0]?.plain_text),
    icon: icon.file.url,
    description: properties.description.rich_text?.[0]?.plain_text,
    short_description: properties.short_description.rich_text?.[0]?.plain_text,
    repository: properties.repository.url,
  }));

  return parsedProjects;
}
