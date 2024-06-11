/* eslint-disable @next/next/no-img-element */
import { Certificate } from "@/services/notion/list-certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const fileThumb = certificate.file?.replace(".pdf", ".png");

  return (
    <a href={certificate.file} target="_blank">
      <li className="bg-zinc-950 p-4 rounded-md h-40 flex flex-col relative border border-neutral-800 overflow-hidden">
        <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto ml-auto">
          {certificate.period}
        </span>
        <h3 className="font-medium">{certificate.name}</h3>
        <p className="text-stone-300">{certificate.instituition}</p>
        {fileThumb && (
          <img
            src={fileThumb}
            alt="Preview do certificado"
            className="absolute inset-0 blur-[5px] opacity-20 z-10 w-full h-full"
            loading="lazy"
          />
        )}
      </li>
    </a>
  );
}
