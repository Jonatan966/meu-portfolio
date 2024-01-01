import Link from "next/link";

export default function ProjectPage() {
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
            <ul className="flex gap-2 px-2 border-r-2 border-[#232327]">
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
        <section className="h-96 bg-[#09090A]">
          <div className="max-w-[1050px] mx-auto flex h-full py-4 justify-center">
            <div className="w-[50%] h-full flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://github.com/Jonatan966.png"
                  alt=""
                  className="w-14 h-14 rounded-md"
                />
                <h1 className="text-2xl">Gepeto</h1>
              </div>

              <p className="leading-relaxed text-[#C4C4CC]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                rem praesentium nulla ullam placeat ad asperiores aliquam enim
                mollitia explicabo, doloremque inventore dignissimos. A omnis
                corrupti neque praesentium eius repellendus.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button className="bg-orange-500 p-1 rounded-md font-bold">
                  Acessar Repositório
                </button>
                <button className="p-1 rounded-md border-[#232327] border-2">
                  Acessar Site
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Detalhes do projeto</h2>
          <p className="leading-relaxed text-[#C4C4CC] mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            cum omnis ad esse? Nihil, voluptatibus. Eos placeat voluptate odit
            aspernatur nesciunt distinctio et consequatur neque, accusamus,
            culpa voluptatem vero eius.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptatem corporis nemo nobis velit enim maxime repudiandae nulla
            non asperiores doloremque molestiae dolorem eveniet, omnis molestias
            officia magnam sequi assumenda!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            excepturi dignissimos doloribus quidem odit minus sit a cumque
            eveniet obcaecati maxime blanditiis illo dolorem! Architecto
            obcaecati consequuntur cumque numquam voluptatem.
          </p>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <h2 className="text-xl font-medium">Diário de bordo</h2>

          <ul className="grid grid-cols-3 gap-4 mt-2">
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
            <li className="bg-[#09090A] p-4 rounded-md h-40 flex flex-col border border-[#232327]">
              <h3 className="font-medium text-md my-auto max-w-[75%]">
                Callback, Promises e Async/Await: Tudo o que você precisa saber
              </h3>
              <p className="text-[#C4C4CC] text-xs">
                Há 2 dias - 4 min de leitura
              </p>
            </li>
          </ul>
        </section>

        <section className="max-w-[1050px] mx-auto p-4">
          <div className="bg-orange-500 p-4 rounded-md flex items-center gap-4">
            <span className="text-4xl">👀</span>

            <div>
              <h3 className="font-bold text-lg">Quer saber mais?</h3>
              <p>Me acompanhe ou entre em contato em várias redes!</p>
            </div>

            <ul className="flex gap-2 ml-auto">
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
