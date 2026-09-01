import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";

export const Route = createFileRoute("/nettoyage-vehicule")({
  head: () => ({
    meta: [
      { title: "Nettoyage véhicule avant livraison · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Lavage extérieur 25 €, complet 45 €, mise en main 35 €, recharge VE. Préparation avant remise." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Nettoyage"
        title="Remis comme en"
        accent="concession."
        text="Le véhicule arrive propre. Pas « à peu près »."
        image="/images/03_nettoyage.jpg"
        alt="Nettoyage professionnel d’une berline blanche"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[
          ["Lavage extérieur", "25 €"],
          ["Intérieur + extérieur", "45 €"],
          ["Mise en main 20–30 min", "35 €"],
          ["Recharge VE 80 %", "25 € + borne"],
        ].map(([t, p]) => (
          <div key={t} className="rounded-2xl border border-line bg-surface p-5">
            <p className="text-sm text-muted">{t}</p>
            <p className="mt-2 font-display text-2xl text-navy">{p}</p>
          </div>
        ))}
      </section>
      <CtaBar title="Ajouter le nettoyage à une livraison" />
    </main>
  );
}
