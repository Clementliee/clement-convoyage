import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { PILLARS, PROCESS } from "@/lib/offers";

export const Route = createFileRoute("/convoyage")({
  head: () =>
    pageHead({
      title: "Convoyage automobile. Préparation, contrôle, remise.",
      description:
        "Convoyage de véhicules, base Quimper. Prise en charge partout en France et en Europe. Transfert, préparation, contrôle, remise. Particuliers et professionnels.",
      path: "/convoyage",
      image: "/images/mission-golf-brest.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Convoyage"
        title="Plus qu’un A vers B."
        text="Prise en charge complète : convoyage, contrôle, préparation, remise. Base Quimper."
        image="/images/mission-golf-brest.jpg"
        alt="Véhicule convoyé en Bretagne"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.k} className="rounded-[1.5rem] border border-line bg-surface p-6">
              <h2 className="font-display text-xl text-navy">{p.k}</h2>
              <p className="mt-2 text-sm text-muted">{p.d}</p>
            </div>
          ))}
        </div>
        <ol className="mt-16 grid gap-6 sm:grid-cols-2">
          {PROCESS.map((s) => (
            <li key={s.n} className="rounded-[1.4rem] bg-sand p-6">
              <p className="text-sm text-coral">{s.n}</p>
              <h3 className="mt-1 font-display text-xl text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/livraison-vehicule" className="rounded-full border border-line px-5 py-2.5 text-sm">
            France
          </Link>
          <Link to="/livraison-europe" className="rounded-full border border-line px-5 py-2.5 text-sm">
            Europe
          </Link>
          <Link to="/professionnels" className="rounded-full border border-line px-5 py-2.5 text-sm">
            Professionnels
          </Link>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
