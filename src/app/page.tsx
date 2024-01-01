import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b-2 border-[#232327] sticky top-0 bg-[#121214]">
        <div className="max-w-[1050px] mx-auto p-4 flex items-center">
          <img
            src="https://github.com/Jonatan966.png"
            alt="Foto de perfil de Jonatan Frederico"
            className="w-8 h-8 rounded-full mr-2"
          />
          <h1 className="font-semibold">Jonatan Frederico</h1>

          <nav className="ml-auto flex items-center gap-2">
            <ul className="hidden gap-2 px-2 border-r-2 border-[#232327] md:flex">
              <li className="font-semibold">
                <Link href="/">Projetos</Link>
              </li>
              <li className="text-[#C4C4CC]">
                <Link href="/about">Publicações</Link>
              </li>
              <li className="text-[#C4C4CC]">
                <Link href="/contact">Certificados</Link>
              </li>
            </ul>

            <ul className="flex gap-2">
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="flex flex-col items-center justify-center h-96 bg-[#09090A]">
          <h2 className="text-3xl font-bold">Olá 👋</h2>
          <p className="text-[#C4C4CC]">É muito bom te ver em meu portfólio</p>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Projetos</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Certificados</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col">
              <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto ml-auto">
                nov 2022 - set 2023
              </span>
              <h3 className="font-medium">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-[#C4C4CC]">ETEC Jaraguá</p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col">
              <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto ml-auto">
                nov 2022 - set 2023
              </span>
              <h3 className="font-medium">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-[#C4C4CC]">ETEC Jaraguá</p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col">
              <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto ml-auto">
                nov 2022 - set 2023
              </span>
              <h3 className="font-medium">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-[#C4C4CC]">ETEC Jaraguá</p>
            </li>
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Jornada</h2>

          <div className="bg-[#09090A] p-4 rounded-md mt-4 flex gap-4 border border-[#232327] md:flex-row flex-col">
            <div className="flex gap-2">
              <img
                src="https://github.com/Jonatan966.png"
                alt="Jonatan"
                className="w-20 h-20 rounded-md"
              />

              <div className="flex flex-col justify-between h-auto items-start md:items-stretch">
                <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto">
                  nov 2022 - set 2023
                </span>
                <h3 className="font-semibold">Empresa Tal</h3>
                <p className="text-sm text-[#C4C4CC]">Cargo tal</p>
              </div>
            </div>

            <ul className="flex my-auto md:ml-auto gap-2">
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>{" "}
              <li className="text-sm text-[#C4C4CC]">
                <img
                  src="https://github.com/NodeJS.png"
                  alt=""
                  className="w-10 h-10"
                />
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Publicações</h2>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col md:col-start-1 md:col-end-3 border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[40%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto md:max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <div className="bg-orange-500 p-4 rounded-md flex flex-col md:items-center gap-4 md:flex-row">
            <span className="text-4xl">👀</span>

            <div>
              <h3 className="font-bold text-lg">Quer saber mais?</h3>
              <p>Me acompanhe ou entre em contato em várias redes!</p>
            </div>

            <ul className="flex gap-2 md:ml-auto">
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img
                    src="https://github.com/Github.png"
                    alt="github"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-center bg-[#09090A] py-4 mt-4 text-sm">
        <span>
          Feito com 💝 por <b>Jonatan Frederico</b>
        </span>
      </footer>
    </>
  );
}
