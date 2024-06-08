export const environments = {
  notion: {
    API_KEY: process.env.NOTION_API_KEY!,
    PROJECTS_DATABASE_ID: process.env.NOTION_PROJECTS_DATABASE_ID!,
    CERTIFICATES_DATABASE_ID: process.env.NOTION_CERTIFICATES_DATABASE_ID!,
    JOBS_DATABASE_ID: process.env.NOTION_JOBS_DATABASE_ID!,
    PUBLICATIONS_DATABASE_ID: process.env.NOTION_PUBLICATIONS_DATABASE_ID!,
  },
  isDevelopment: process.env.NODE_ENV === "development",
};
