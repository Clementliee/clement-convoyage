import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/securite-vehicule")({
  head: () => ({
    meta: [
      { title: "Sécurité du véhicule convoyé · CLÉMENT CONVOYAGE" },
      {
        name: "description",
        content:
          "Protocole sécurité : EDL photo, clés sous scellé, traqueur GPS, gestion de crise. Standard DS, Renault, Mercedes-Benz. Base Quimper.",
      },
    ],
  }),
  component: Page,
});

const FAQ = [
  {
    q: "Qu’est-ce qui est toujours inclus ?",
    a: "L’état des lieux photo horodaté, un interlocuteur unique, un compte-rendu. Le scellé et le GPS se cochent.",
  },
  {
    q: "Que se passe-t-il en cas d’incident ?",
    a: "Ordre fixe : sécuriser, documenter, prévenir, décider. Issu de la gestion de crise en réseau premium. Pas d’improvisation au bord de l’autoroute.",
  },
  {
    q: "Le protocole a-t-il un tarif affiché ?",
    a: "Non. Il entre dans la fourchette après vos coordonnées, à confirmer avec un professionnel.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Sécurité"
        title="Le véhicule n’est pas"
        accent="un colis."
        text="Clés, documents, carrosserie, trajet : un protocole. Pas une promesse."
        image="/images/08_securite.jpg"
        alt="Clés sous scellé et état des lieux photo lors d’une remise"
      />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Preuve",
              d: "État des lieux photo horodaté au départ et à l’arrivée. Compteur, carrosserie, intérieur, documents. Le client reçoit le jeu.",
            },
            {
              t: "Scellé",
              d: "Clés sous pochette numérotée quand la mission le justifie. Double des documents sous pli. Rien ne « circule ».",
            },
            {
              t: "Suivi",
              d: "Option traqueur GPS. Points de contrôle. Un interlocuteur unique, joignable 7 j/7, astreinte 24 h pour les professionnels.",
            },
          ].map((b) => (
            <div key={b.t} className="rounded-[1.6rem] border border-line bg-surface p-6">
              <p className="font-display text-xl text-navy">{b.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/08_securite.jpg"
            alt="Protocole de remise sécurisé"
            className="tilt-hover rounded-[1.6rem] object-cover"
          />
          <div className="space-y-4 text-muted leading-relaxed">
            <h2 className="font-display text-2xl tracking-tight text-navy">Gestion de crise</h2>
            <p>
              Incident de parcours, véhicule immobilisé, client absent, météo, document manquant,
              contrôle : il y a un ordre. On n’invente pas au bord de l’autoroute.
            </p>
            <p>
              C’est le même réflexe qu’en réseau DS, Renault ou Mercedes-Benz : escalade, faits,
              photos, prochaine action. Le prestige n’excuse pas le flou. Il l’interdit.
            </p>
            <p>
              Le protocole sécurité se coche au simulateur. Il entre dans la fourchette, jamais en
              vitrine tarifaire.
            </p>
            <Link to="/traqueur-gps" className="inline-flex font-semibold text-coral">
              Voir le traqueur GPS →
            </Link>
          </div>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Avant", "Documents, assurance, niveau, pneus. Refus si non-roulant."],
            ["02", "Prise", "EDL photo, scellé si coché, GPS si coché, départ horodaté."],
            ["03", "Route", "Conduite, points de contrôle, un seul interlocuteur."],
            ["04", "Remise", "Photos, clés, compte-rendu. Fin de mission, pas un parking."],
          ].map(([n, t, d]) => (
            <li key={n} className="rounded-[1.4rem] bg-sand p-5">
              <p className="font-display text-sm text-coral">{n}</p>
              <p className="mt-1 font-display text-lg text-navy">{t}</p>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="mb-4 font-display text-2xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar />
    </main>
  );
}
