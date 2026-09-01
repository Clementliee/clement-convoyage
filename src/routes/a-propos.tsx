import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead({
      title: "À propos. Convoyage BZH, Quimper.",
      description:
        "Clément, convoyeur à Quimper. Expérience DS Automobiles, Renault, Mercedes-Benz. Gestion de crise. Livraison tous les jours.",
      path: "/a-propos",
      image: "/images/05_fondateur.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="À propos"
        title="Une remise."
        accent="Pas un trajet."
        text="Base Quimper. Standard issu des réseaux premium."
      />
      <section className="mx-auto grid max-w-6xl items-start gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[minmax(0,400px)_1fr]">
        <Reveal>
          <div className="perspective-scene">
            <img
              src="/images/05_fondateur.jpg"
              alt="Clément, Convoyage BZH, Quimper"
              className="tilt-hover aspect-[3/4] w-full rounded-[2rem] object-cover object-[50%_18%] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)]"
            />
          </div>
        </Reveal>
        <Reveal delay={80} className="space-y-6 text-lg leading-relaxed text-muted">
          <p className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Direction, Quimper</p>
          <h2 className="font-display text-4xl text-navy">Clément</h2>
          <p>
            Clément a travaillé au contact des grandes marques : DS Automobiles, Renault, Mercedes-Benz.
            Il y a appris le niveau d’exigence d’une remise client en concession. Véhicule propre, état
            des lieux, horaires tenus, zéro improvisation.
          </p>
          <p>
            Avant l’automobile, il a servi dans l’armée française. La procédure, la ponctualité, la
            gestion des imprévus : ça reste. Ce n’est pas un argument de force. C’est une façon de travailler.
          </p>
          <p>
            Il est formé à la gestion de crise. Incident de parcours, véhicule immobilisé, client
            absent, météo, document manquant. Protocoles, escalade, communication factuelle.
          </p>
          <p>
            Aujourd’hui il pilote Convoyage BZH depuis Quimper. Une équipe dédiée, réactive, disponible
            tous les jours. Astreinte 24 h pour les professionnels. Livraison de qualité, notes clients
            suivies, sécurité du véhicule et des documents. France et Europe.
          </p>
          <p>On parle de tenue. Pas de « passion de l’automobile ».</p>
        </Reveal>
      </section>
      <CtaBar />
    </main>
  );
}
