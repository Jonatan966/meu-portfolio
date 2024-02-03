import { environments } from "@/utils/environments";
import { Client } from "@notionhq/client";

export const notionApi = new Client({
  auth: environments.notion.API_KEY,
  fetch: (url, init) =>
    fetch(url, {
      ...init,
      next: { revalidate: 3600 },
    }),
});
