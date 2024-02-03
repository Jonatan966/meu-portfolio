import { ComponentProps } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

type SocialLinksProps = ComponentProps<"ul">;

const SOCIAL_MEDIAS = [
  {
    icon: FaLinkedin,
    url: "https://curr.to/jonatan-linkedin-portfolio",
  },
  {
    icon: FaGithub,
    url: "https://curr.to/jonatan-github-portfolio",
  },
  {
    icon: FaTwitter,
    url: "https://curr.to/jonatan-twitter-portfolio",
  },
  {
    icon: FaInstagram,
    url: "https://curr.to/jonatan-instagram-portfolio",
  },
];

export function SocialLinks(props: SocialLinksProps) {
  return (
    <ul {...props} className={`flex gap-2 ${props.className || ""}`}>
      {SOCIAL_MEDIAS.map(({ url, icon: SocialIcon }) => (
        <li key={url}>
          <a href={url} target="_blank">
            <SocialIcon size={30} className="bg-[#202024] p-1 rounded-md" />
          </a>
        </li>
      ))}
    </ul>
  );
}
