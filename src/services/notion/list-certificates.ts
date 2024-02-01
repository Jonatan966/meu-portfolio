import { translatePeriod } from "@/utils/translate-period";
import { notionApi } from "./api";
import { environments } from "@/utils/environments";

interface RawCertificate {
  id: string;
  properties: {
    name: {
      title: {
        plain_text: string;
      }[];
    };
    instituition: {
      select: {
        name: string;
      };
    };
    period: {
      date: {
        start: string;
        end: string;
      };
    };
    file: {
      url: string;
    };
  };
}

export interface Certificate {
  id: string;
  name: string;
  instituition: string;
  period: string;
  file: string;
}

export async function listCertificates(): Promise<Certificate[]> {
  const certificatesResponse = await notionApi.databases.query({
    database_id: environments.notion.CERTIFICATES_DATABASE_ID,
  });

  const rawCertificates =
    certificatesResponse.results as unknown as RawCertificate[];

  const parsedCertificates = rawCertificates.map<Certificate>(
    ({ id, properties }) => ({
      id,
      name: properties.name.title?.[0]?.plain_text,
      instituition: properties.instituition.select.name,
      period: translatePeriod(
        properties.period.date.start,
        properties.period.date.end
      ),
      file: properties.file.url,
    })
  );

  return parsedCertificates;
}
