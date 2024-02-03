import { NotionToMarkdown } from "notion-to-md";
import { notionApi } from "../notion/api";

export const notionToMarkdownApi = new NotionToMarkdown({
  notionClient: notionApi,
});
