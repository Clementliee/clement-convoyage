import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { INCLUDED } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/livraison-vehicule")({
  head: () =>
    pageHead({
      title: "Livraison de véhicule en France | Convoyage BZH",
      description:
        "Convoyage de véhicules en France. Prise en charge à l’adresse du véhicule, remise au destinataire. Particuliers et utilitaires jusqu’à 3,5 t. Devis sur dossier.",
      path: "/livraison-vehicule",
      image: "/images/mission-bmw-x3.jpg",
    }),
  component: Page,
});

const CITIES = [
  ["/convoyage-quimper", "Quimper"],
  ["/convoyage-brest", "Brest"],
  ["/convoyage-rennes", "Rennes"],
  ["/convoyage-nantes", "Nantes"],
  ["/convoyage-paris", "Paris"],
  ["/convoyage-lyon", "Lyon"],
  ["/convoyage-bordeaux", "Bordeaux"],
  ["/convoyage-toulouse", "Toulouse"],
  ["/convoyage-marseille", "Marseille"],
  ["/convoyage-nice", "Nice"],
  ["/convoyage-lille", "Lille"],
  ["/convoyage-strasbourg", "Strasbourg"],
] as const;

function Page() {
  return (
    <main>
      <PageHero
        kicker="Livraison France"
        title="Livraison de véhicule en France"
        text="Véhicules légers et utilitaires jusqu’à 3,5 t, en état de marche. Prise en charge à l’adresse indiquée. Remise au destinataire. Le devis est établi sur dossier."
        image="/images/mission-bmw-x3.jpg"
        alt="Remise des clés d’un véhicule convoyé"
      />
      <section className="mx-auto grid max-w-6xl gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl text-navy">Toujours inclus</h2>
          <ul className="mt-8 space-y-6">
            {INCLUDED.map((item) => (
              <li key={item.t}>
                <p className="font-display text-xl text-navy">{item.t}</p>
                <p className="mt-1 text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-3xl text-navy">Hors champ</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Plateau, non-roulant, poids lourd. Pour l’international, voir l’Europe.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
            <p className="font-display text-2xl text-navy">Pas de grille publique</p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Chaque trajet a un retour à vide, un créneau et un véhicule différents. La fourchette
              s’affiche après vos coordonnées, à confirmer avec un professionnel.
            </p>
            <Link to="/simulateur" className="mt-6 inline-flex text-sm font-semibold text-coral">
              Composer ma livraison
            </Link>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Villes desservies</h2>
        <p className="mt-3 text-muted">Chaque ville a sa page. Aucun tarif n’y figure.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {CITIES.map(([to, label]) => (
            <AppLink
              key={to}
              to={to}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-navy hover:border-coral"
            >
              {label}
            </AppLink>
          ))}
          <AppLink
            to="/destinations"
            className="rounded-full border border-navy bg-navy px-5 py-2.5 text-sm text-surface"
          >
            Toutes les destinations
          </AppLink>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
