import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { JOCKEY_POINTS, JOCKEY_SENS, OPTIONS } from "@/lib/tarifs";
import { SITE } from "@/lib/site";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/jockey-gares-aeroports")({
  head: () =>
    pageHead({
      title: "Jockey gares et aéroports en Bretagne | Convoyage BZH",
      description:
        "Dépose ou rapatriement de véhicule. Gares et aéroports de Bretagne, Rennes et Nantes. Domicile renseigné, devis selon le trajet. Photos. Pas de gardiennage.",
      path: "/jockey-gares-aeroports",
      image: "/images/jockey-gare-quimper.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Vous me conduisez jusqu’à la gare ?",
    a: "Non. Vous prenez le train ou l’avion. Nous déplaçons uniquement le véhicule. Pas de transport de passagers.",
  },
  {
    q: "Vous gardez la voiture pendant mon absence ?",
    a: "Non. Pas de gardiennage. Soit nous déposons le véhicule à la gare ou à l’aéroport, soit nous le ramenons à votre domicile, soit les deux. Un double des clés peut rester chez nous pour le prochain départ.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "En Bretagne, à Rennes et à Nantes. Gares de Quimper, Lorient, Brest, Vannes, Rennes, Nantes. Aéroports de Brest-Bretagne, Lorient, Rennes-Saint-Jacques et Nantes-Atlantique.",
  },
  {
    q: "Le nettoyage est-il possible sans jockey ?",
    a: "Non. Le nettoyage n’est proposé qu’avec une livraison ou un jockey. 90 €, 125 € pour un véhicule prestige.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Bretagne"
        title="Jockey gares et aéroports."
        accent=""
        text="Nous déposons votre véhicule, ou nous le ramenons à domicile. Gares et aéroports de Bretagne, Rennes et Nantes. Photos. Pas de gardiennage."
        image="/images/jockey-gare-quimper.jpg"
        alt="Berline sur le parvis d’une gare en Bretagne"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-12 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
          search={{ mission: "jockey" }}
          className="inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white"
        >
          Obtenir un devis jockey
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Trois possibilités.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {JOCKEY_SENS.map((s) => (
            <div key={s.id} className="rounded-[1.6rem] border border-line bg-surface p-7">
              <h3 className="font-display text-2xl text-navy">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Gares et aéroports.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Le tarif se calcule entre votre domicile et le point choisi. Prix indicatifs, à confirmer. Photos incluses.
        </p>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {JOCKEY_POINTS.map((p) => (
            <div key={p.id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-lg text-navy">{p.name}</p>
              <p className="text-sm text-muted">
                À partir de {formatEuro(p.forfait)} · aller et retour {formatEuro(p.allerRetour)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Options, uniquement avec le jockey.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Nettoyage</p>
            <p className="mt-2 text-sm text-muted">Intérieur et extérieur. {formatEuro(OPTIONS.jockeyLavage)}. Prestige {formatEuro(OPTIONS.jockeyLavagePrestige)}.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Entretien ou CT</p>
            <p className="mt-2 text-sm text-muted">Nous emmenons le véhicule. {formatEuro(OPTIONS.jockeyCt)}, hors facture du garage.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Double des clés</p>
            <p className="mt-2 text-sm text-muted">Possible, pour les prochains départs. Inclus.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar
        title="Un véhicule à déposer ou à ramener ?"
        text="Domicile, gare ou aéroport, aller, retour ou les deux. Devis en quelques minutes."
        secondaryTo="/simulateur"
        secondaryLabel="Devis jockey"
      />
    </main>
  );
}
