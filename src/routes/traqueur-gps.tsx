import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/traqueur-gps")({
  head: () => ({
    meta: [
      { title: "Traqueur GPS convoyage · CLÉMENT CONVOYAGE" },
      {
        name: "description",
        content:
          "Pose de traqueur GPS sur le véhicule convoyé. Suivi discret pendant la mission, retrait à la remise. Prestige, import, Europe. Devis après coordonnées.",
      },
    ],
  }),
  component: Page,
});

const FAQ = [
  {
    q: "Le GPS est-il obligatoire ?",
    a: "Non. Fortement recommandé sur prestige, import, Pologne, Serbie, Royaume-Uni, Monaco. Cochez l’option au simulateur.",
  },
  {
    q: "Le chauffeur est-il surveillé ?",
    a: "Non. Le boîtier suit le véhicule, pas une personne. C’est une tenue de concession, pas un flicage.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le montant n’est pas affiché. Il entre dans la fourchette après vos coordonnées, à confirmer avec un professionnel.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Complément"
        title="Savoir où il est."
        accent="Sans en faire un spectacle."
        text="Un boîtier discret, le temps de la mission. Pas un gadget. Une tenue."
        image="/images/07_gps.jpg"
        alt="Pose discrète d’un traqueur GPS sous un véhicule premium"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Sur un véhicule de valeur, un import, un trajet Europe, le client ne devrait pas
            attendre un SMS « on est arrivés ». Le traqueur GPS est une option : pose au départ,
            suivi pendant le convoyage, retrait à la remise — ou conservation si vous le souhaitez.
          </p>
          <p>
            Ce n’est pas de la surveillance de chauffeur. C’est la même exigence qu’une concession
            qui sait où est sa démonstration. Clément vient des réseaux DS Automobiles, Renault et
            Mercedes-Benz : on documente, on ne raconte pas.
          </p>
          <ul className="space-y-2">
            {[
              "Pose discrète, sans percer, sans laisser de trace",
              "Activation le temps de la mission",
              "Retrait à la remise, avec l’EDL photo",
              "Recommandé : prestige, import, Pologne, Serbie, Royaume-Uni, Monaco",
            ].map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
          <p className="text-sm">
            Le montant n’est pas affiché ici. Cochez l’option dans le simulateur : elle entre dans
            la fourchette, à confirmer.
          </p>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Ajouter le GPS à une estimation →
          </Link>
        </div>
        <img
          src="/images/07_gps.jpg"
          alt="Installation d’un traqueur GPS"
          className="tilt-hover rounded-[1.6rem] object-cover"
        />
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-3 sm:px-6">
        {[
          ["01", "Pose", "Au départ, avec l’état des lieux. Emplacement discret, test de signal."],
          ["02", "Mission", "Le véhicule est localisable. Points de contrôle si le protocole sécurité est coché."],
          ["03", "Retrait", "À la remise, mentionné sur le compte-rendu. Sauf demande écrite de conservation."],
        ].map(([n, t, d]) => (
          <div key={n} className="rounded-[1.6rem] border border-line bg-surface p-6">
            <p className="font-display text-sm text-coral">{n}</p>
            <p className="mt-2 font-display text-xl text-navy">{t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="mb-4 font-display text-2xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar title="Mission sensible ?" text="GPS + protocole sécurité. Fourchette après vos coordonnées." />
    </main>
  );
}
