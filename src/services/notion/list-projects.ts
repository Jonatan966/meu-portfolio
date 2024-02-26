import { slugify } from "@/utils/slugify";
import { notionApi } from "./api";
import { environments } from "@/utils/environments";
import { Tech } from "@/components/techs";
import { RawProject } from "./types";

export interface Project {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  prototype?: string;
  site?: string;
  short_description: string;
  repository: string;
  techs: Tech[];
  demonstration?: string;
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
    icon: icon.external.url,
    // description: properties.description.rich_text?.[0]?.plain_text,
    short_description: properties.short_description.rich_text?.[0]?.plain_text,
    repository: properties.repository.url,
    techs: properties.techs.multi_select.map((option) => option.name),
  }));

  return parsedProjects;
}
