import { Tech } from "@/components/techs";

export interface RawProject {
  id: string;
  icon: {
    external: {
      url: string;
    };
  };
  properties: {
    description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    short_description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    repository: {
      url: string;
    };
    name: {
      title: {
        plain_text: string;
      }[];
    };
    techs: {
      multi_select: {
        id: string;
        name: Tech;
      }[];
    };
    prototype: {
      url?: string;
    };
    site: {
      url?: string;
    };
    demonstration?: {
      files: {
        name: string;
        external: {
          url: string;
        };
      }[];
    };
  };
}
