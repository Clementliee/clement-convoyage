import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { PriceExamples } from "@/components/PriceExamples";
import { pageHead } from "@/lib/seo";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";
import { ECONOMICS, MINIMUM_LOCAL } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/tarifs")({
  head: () =>
    pageHead({
      title: "Tarifs convoyage automobile depuis Quimper | Convoyage BZH",
      description:
        "Exemples de tarifs Pack Route depuis Quimper : Brest, Lorient, Rennes, Paris. Approche 0,25 €/km hors base. Chauffeur professionnel, mise en main offerte.",
      path: "/tarifs",
      image: "/images/convoyage-berline-bretagne.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Tarifs"
        title="Des prix lisibles."
        accent="Depuis Quimper."
        text="Pack Route, aller simple. Le retour du chauffeur est dans le prix. Approche 0,25 €/km si le départ n’est pas à Quimper. Indicatifs, à confirmer."
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Cinq exemples.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Quimper → Rennes : le tarif d’un chauffeur professionnel, pas d’un particulier. Cliquez pour ouvrir le
          simulateur.
        </p>
        <div className="mt-10">
          <PriceExamples />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Comment c’est calculé.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-[1.6rem] border border-line bg-surface p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Trajet</p>
            <p className="mt-3 font-display text-2xl text-navy">A vers B</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Barème dégressif selon la distance. Minimum local {formatEuro(MINIMUM_LOCAL)}. Carburant du véhicule convoyé et péages
              inclus.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-line bg-surface p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Approche</p>
            <p className="mt-3 font-display text-2xl text-navy">
              {ECONOMICS.approcheEurKm.toFixed(2).replace(".", ",")} € / km
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Si le départ n’est pas Quimper. Exemple : Vannes → Rennes, l’approche Quimper → Vannes est facturée. Moins
              de 20 km : offerte.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-line bg-surface p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Retour</p>
            <p className="mt-3 font-display text-2xl text-navy">Chauffeur ou véhicule</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Aller simple : retour du chauffeur à Quimper, train ou rapatriement, inclus. Véhicule à reprendre : le
              second trajet à 78 %.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Les packs s’ajoutent.</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Particulier</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PART.map((p) => (
                <li key={p.id} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-navy">{p.name}</span>
                  <span className="text-sm text-muted">{p.from === 0 ? "Inclus" : `+ ${formatEuro(p.from)}`}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Professionnel</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PRO.map((p) => (
                <li key={p.id} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-navy">{p.name}</span>
                  <span className="text-sm text-muted">{p.from === 0 ? "Inclus" : `+ ${formatEuro(p.from)}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/pack-mise-a-la-route"
          className="mt-8 inline-flex text-sm font-semibold text-coral hover:underline"
        >
          Détail des packs
        </Link>
      </section>

      <CtaBar title="Chiffrer votre trajet" text="Le simulateur applique le même barème. Devis ferme sous 2 heures." />
    </main>
  );
}
