import { getProjectBySlug } from "./get-project-by-slug";
import { listCertificates } from "./list-certificates";
import { listJobs } from "./list-jobs";
import { listProjects } from "./list-projects";

export const notionService = {
  listProjects,
  listCertificates,
  listJobs,
  getProjectBySlug,
};
