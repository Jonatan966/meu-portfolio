import { environments } from "@/utils/environments";
import { notionApi } from "./api";
import { translatePeriod } from "@/utils/translate-period";
import { Tech } from "@/components/techs";

interface RawJob {
  id: string;
  properties: {
    period: {
      date: {
        start: string;
        end: string;
      };
    };
    role: {
      rich_text: {
        plain_text: string;
      }[];
    };
    techs: {
      multi_select: {
        id: string;
        name: Tech;
      }[];
    };
    businessName: {
      title: {
        plain_text: string;
      }[];
    };
  };
  icon: {
    external: {
      url: string;
    };
  };
}

export interface Job {
  id: string;
  imageUrl: string;
  businessName: string;
  period: string;
  role: string;
  techs: Tech[];
}

export async function listJobs(): Promise<Job[]> {
  const jobsResponse = await notionApi.databases.query({
    database_id: environments.notion.JOBS_DATABASE_ID,
  });

  const rawJobs = jobsResponse.results as unknown as RawJob[];

  const parsedJobs = rawJobs.map((job) => ({
    id: job.id,
    imageUrl: job.icon?.external.url,
    period: translatePeriod(
      job.properties.period.date?.start,
      job.properties.period.date?.end
    ),
    role: job.properties.role.rich_text[0]?.plain_text,
    techs: job.properties.techs.multi_select.map((tech) => tech.name),
    businessName: job.properties.businessName.title[0]?.plain_text,
  }));

  return parsedJobs;
}
