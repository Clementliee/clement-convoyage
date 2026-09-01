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
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[280px_1fr]">
        <img
          src="/images/05_fondateur.jpg"
          alt="Direction — Quimper"
          className="w-full rounded-2xl object-cover"
        />
        <div className="space-y-4 text-muted leading-relaxed">
          <p className="text-xs uppercase tracking-wider text-coral">Direction — Quimper</p>
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
