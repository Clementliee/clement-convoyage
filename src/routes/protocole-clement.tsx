import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { PRESTIGE_PROTOCOL, PROTOCOL } from "@/lib/offers";

export const Route = createFileRoute("/protocole-clement")({
  head: () =>
    pageHead({
      title: "Protocole de mission | Traçabilité du convoyage | Convoyage BZH",
      description:
        "Avant, pendant, après. Photos, kilométrage, carburant, documents, compte-rendu. Traçabilité d’un véhicule convoyé depuis Quimper.",
      path: "/protocole-clement",
      image: "/images/etat-des-lieux-vehicule.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker={PROTOCOL.name}
        title="Protocole de mission"
        text="Identification, photographies, kilométrage, documents et compte rendu. Chaque étape est tracée."
        image="/images/etat-des-lieux-vehicule.jpg"
        alt="État des lieux photographique d’un véhicule"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 sm:px-8 md:grid-cols-3">
        <article className="rounded-[1.8rem] border border-line bg-surface p-8">
          <h2 className="font-display text-2xl text-navy">Avant</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li>Identification du véhicule</li>
            <li>Kilométrage</li>
            <li>Carburant ou autonomie</li>
            <li>Photos : carrosserie, jantes, vitrages, intérieur</li>
            <li>Équipements visibles</li>
            <li>Documents nécessaires</li>
          </ul>
        </article>
        <article className="rounded-[1.8rem] border border-line bg-surface p-8">
          <h2 className="font-display text-2xl text-navy">Pendant</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li>Suivi de mission</li>
            <li>Communication client</li>
            <li>Signalement des incidents</li>
            <li>Respect des consignes</li>
            <li>GPS temporaire si demandé, le temps de la mission</li>
          </ul>
        </article>
        <article className="rounded-[1.8rem] border border-line bg-surface p-8">
          <h2 className="font-display text-2xl text-navy">Après</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li>Kilométrage</li>
            <li>Carburant ou autonomie</li>
            <li>Photos d’arrivée</li>
            <li>Remise des clés</li>
            <li>Compte-rendu</li>
          </ul>
        </article>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <p className="text-lg leading-relaxed text-muted">
          Le GPS n’est pas de la surveillance, ni de la sécurité privée. C’est un suivi temporaire du véhicule, avec consentement lorsque nécessaire, retiré à la remise. Les photos et données servent la mission, pas autre chose.
        </p>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <p className="rounded-[1.8rem] border border-line bg-surface p-6 text-base leading-relaxed text-muted">
          Pour une sportive, un prestige ou un import :{" "}
          <AppLink to={PRESTIGE_PROTOCOL.href} className="font-semibold text-coral">
            {PRESTIGE_PROTOCOL.name}
          </AppLink>
          . Même méthode, un cadre renforcé. Montant au devis.
        </p>
      </section>
      <CtaBar title="Demander un devis" text="Le devis est établi après étude du trajet." />
    </main>
  );
}
