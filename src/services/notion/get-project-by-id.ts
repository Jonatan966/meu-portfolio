import { notionApi } from "./api";
import { Project } from "./list-projects";
import { RawProject } from "./types";
import { slugify } from "@/utils/slugify";

export async function getProjectById(
  projectId: string
): Promise<Project | undefined> {
  const rawProject = (await notionApi.pages.retrieve({
    page_id: projectId,
  })) as unknown as RawProject;

  if (!rawProject) {
    return;
  }

  const parsedProject = {
    id: rawProject.id,
    slug: slugify(rawProject.properties.name.title?.[0]?.plain_text),
    name: rawProject.properties.name.title?.[0]?.plain_text,
    icon: rawProject.icon.external.url,
    description: rawProject.properties.description.rich_text?.[0]?.plain_text,
    short_description:
      rawProject.properties.short_description.rich_text?.[0]?.plain_text,
    repository: rawProject.properties.repository.url,
    techs: rawProject.properties.techs.multi_select.map(
      (option) => option.name
    ),
    prototype: rawProject.properties.prototype?.url,
    site: rawProject.properties.site?.url,
    demonstration: rawProject.properties.demonstration?.files[0]?.external.url,
  };

  return parsedProject;
}
