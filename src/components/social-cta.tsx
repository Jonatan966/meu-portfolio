import { SocialLinks } from "./social-links";

export function SocialCTA() {
  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div className="bg-emerald-900 p-4 rounded-md flex flex-col md:items-center gap-4 md:flex-row">
        <span className="text-4xl">👀</span>

        <div>
          <h3 className="font-bold text-lg">Quer saber mais?</h3>
          <p>Me acompanhe ou entre em contato em várias redes!</p>
        </div>

        <SocialLinks className="md:ml-auto" />
      </div>
    </section>
  );
}
