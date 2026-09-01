import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";

export const Route = createFileRoute("/nettoyage-vehicule")({
  head: () => ({
    meta: [
      { title: "Nettoyage véhicule avant livraison · CLÉMENT CONVOYAGE" },
      {
        name: "description",
        content:
          "Préparation avant remise : lavage extérieur ou complet, mise en main, recharge VE. Standard concession, depuis Quimper.",
      },
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
        text="Le véhicule arrive propre. Pas « à peu près ». Tarif intégré à la fourchette, jamais en vitrine."
        image="/images/03_nettoyage.jpg"
        alt="Nettoyage professionnel d’une berline blanche"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[
          ["Lavage extérieur", "Carrosserie, jantes, vitres. Pour une remise nette."],
          ["Intérieur + extérieur", "Habitacle, plastiques, tapis. Standard concession."],
          ["Mise en main", "20 à 30 min avec le client. Commandes, options, charge VE."],
          ["Recharge VE", "Niveau convenu, plan de bornes sur le trajet."],
        ].map(([t, p]) => (
          <div key={t} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-display text-lg text-navy">{t}</p>
            <p className="mt-2 text-sm text-muted">{p}</p>
          </div>
        ))}
      </section>
      <CtaBar title="Ajouter la préparation à une livraison" />
    </main>
  );
}
