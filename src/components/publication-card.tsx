import { Publication } from "@/services/notion/list-publications";
import { getRelativeTime } from "@/utils/get-relative-time";
import Link from "next/link";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const relativeTime = getRelativeTime(publication.created_at);

  return (
    <Link href={`/publications/${publication.slug}`}>
      <li className="bg-zinc-950 p-4 rounded-md border border-neutral-800 flex flex-col justify-between gap-2 h-full">
        <span className="text-xs bg-neutral-800 text-white rounded-xl px-2 py-1 font-bold mx-auto">
          {publication.tag}
        </span>

        <p className="text-lg max-w-[75%] mx-auto text-center leading-tight">
          {publication.title}
        </p>

        <span className="text-sm text-neutral-400">{relativeTime}</span>
      </li>
    </Link>
  );
}
