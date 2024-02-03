import { notionToMarkdownApi } from "./api";

export async function createMarkdownByPageId(pageId: string): Promise<string> {
  const markdownBlocks = await notionToMarkdownApi.pageToMarkdown(pageId);

  const markdownResult = notionToMarkdownApi.toMarkdownString(markdownBlocks);

  return markdownResult.parent;
}
