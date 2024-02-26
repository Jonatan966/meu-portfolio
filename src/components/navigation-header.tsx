import Link from "next/link";
import { SocialLinks } from "./social-links";
import Image from "next/image";

export function NavigationHeader() {
  return (
    <header className="border-b-2 border-neutral-800 sticky top-0 bg-neutral-900 z-30">
      <div className="max-w-[1050px] mx-auto p-4 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://github.com/Jonatan966.png"
            alt="Foto de perfil de Jonatan Frederico"
            className="w-8 h-8 rounded-full mr-2"
            width={32}
            height={32}
          />
          <h1 className="font-semibold">Jonatan Frederico</h1>
        </Link>

        <nav className="ml-auto flex items-center gap-2">
          <ul className="hidden gap-2 px-2 border-r-2 border-neutral-800 md:flex">
            <li className="text-stone-300" /* className="font-semibold" */>
              <Link href="/projects">Projetos</Link>
            </li>
            <li className="text-stone-300">
              <Link href="/publications">Publicações</Link>
            </li>
          </ul>

          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}
