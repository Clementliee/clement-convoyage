import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Clément, Quimper. Expérience DS Automobiles, Renault, Mercedes-Benz. Gestion de crise, 7j/7." },
    ],
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
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,380px)_1fr]">
        <div className="perspective-scene">
          <img
            src="/images/05_fondateur.jpg"
            alt="Clément — CLÉMENT CONVOYAGE, Quimper"
            className="tilt-hover aspect-[3/4] w-full rounded-[1.8rem] object-cover object-[50%_18%] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)]"
          />
        </div>
        <div className="space-y-5 text-muted leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Direction — Quimper</p>
          <h2 className="font-display text-3xl tracking-tight text-navy">Clément</h2>
          <p>
            Clément a travaillé au contact des grandes marques : DS Automobiles, Renault, Mercedes-Benz.
            Il y a appris le niveau d’exigence d’une remise client en concession : véhicule propre, état
            des lieux, horaires tenus, zéro improvisation.
          </p>
          <p>
            Il est formé à la gestion de crise : incident de parcours, véhicule immobilisé, client
            absent, météo, document manquant. Protocoles, escalade, communication factuelle.
          </p>
          <p>
            Aujourd’hui il pilote CLÉMENT CONVOYAGE depuis Quimper : une équipe dédiée, réactive,
            disponible 7 j/7. Astreinte 24 h pour les professionnels. Livraison de qualité, notes
            clients suivies, sécurité du véhicule et des documents, France et Europe.
          </p>
          <p>On parle de tenue. Pas de « passion de l’automobile ».</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
