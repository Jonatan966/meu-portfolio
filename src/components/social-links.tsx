import { ComponentProps } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

type SocialLinksProps = ComponentProps<"ul">;

const SOCIAL_MEDIAS = [
  {
    icon: FaLinkedin,
    url: "/linkedin",
  },
  {
    icon: FaGithub,
    url: "/github",
  },
  {
    icon: FaInstagram,
    url: "/instagram",
  },
];

export function SocialLinks(props: SocialLinksProps) {
  return (
    <ul {...props} className={`flex gap-2 ${props.className || ""}`}>
      {SOCIAL_MEDIAS.map(({ url, icon: SocialIcon }) => (
        <li key={url}>
          <a href={url} target="_blank">
            <SocialIcon size={30} className="bg-neutral-800 p-1 rounded-md" />
          </a>
        </li>
      ))}
    </ul>
  );
}
