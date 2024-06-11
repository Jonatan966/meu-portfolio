import { getProjectById } from "./get-project-by-id";
import { getProjectBySlug } from "./get-project-by-slug";
import { getPublicationBySlug } from "./get-publication-by-slug";
import { listCertificates } from "./list-certificates";
import { listJobs } from "./list-jobs";
import { listProjects } from "./list-projects";
import { listPublications } from "./list-publications";

export const notionService = {
  listProjects,
  listCertificates,
  listJobs,
  getProjectBySlug,
  getProjectById,
  getPublicationBySlug,
  listPublications,
};
