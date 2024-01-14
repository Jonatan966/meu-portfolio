import libSlugify from "slugify";

export function slugify(text: string) {
  return libSlugify(text, { lower: true, trim: true });
}
