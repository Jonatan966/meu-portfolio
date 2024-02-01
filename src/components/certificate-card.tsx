import { Certificate } from "@/services/notion/list-certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const fileThumb = certificate.file?.replace(".pdf", ".png");

  return (
    <a href={certificate.file} target="_blank">
      <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col relative border border-[#232327]">
        <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto ml-auto">
          {certificate.period}
        </span>
        <h3 className="font-medium">{certificate.name}</h3>
        <p className="text-[#C4C4CC]">{certificate.instituition}</p>
        <div
          className="absolute inset-0 blur-[5px] opacity-20 z-10 bg-cover"
          style={{
            backgroundImage: fileThumb ? `url("${fileThumb}")` : "",
          }}
        />
      </li>
    </a>
  );
}
