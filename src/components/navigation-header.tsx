import Link from "next/link";
import { SocialLinks } from "./social-links";

export function NavigationHeader() {
  return (
    <header className="border-b-2 border-[#232327] sticky top-0 bg-[#121214] z-30">
      <div className="max-w-[1050px] mx-auto p-4 flex items-center">
        <img
          src="https://github.com/Jonatan966.png"
          alt="Foto de perfil de Jonatan Frederico"
          className="w-8 h-8 rounded-full mr-2"
        />
        <h1 className="font-semibold">Jonatan Frederico</h1>

        <nav className="ml-auto flex items-center gap-2">
          <ul className="hidden gap-2 px-2 border-r-2 border-[#232327] md:flex">
            <li className="text-[#C4C4CC]" /* className="font-semibold" */>
              <Link href="/projects">Projetos</Link>
            </li>
            <li className="text-[#C4C4CC]">
              <Link href="/publications">Publicações</Link>
            </li>
          </ul>

          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}
