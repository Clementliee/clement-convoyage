import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/nettoyage-vehicule")({
  head: () =>
    pageHead({
      title: "Nettoyage véhicule avant livraison. Convoyage BZH",
      description:
        "Lavage, plein, recharge VE avant remise. Mise en main offerte. Préparation de véhicule convoyé depuis Quimper.",
      path: "/nettoyage-vehicule",
      image: "/images/03_nettoyage.jpg",
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
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {[
          ["Lavage extérieur", "Carrosserie, jantes, vitres. Pour une remise nette."],
          ["Intérieur + extérieur", "Habitacle, plastiques, tapis. Standard concession."],
          ["Plein à la remise", "Le client reçoit un véhicule avec du carburant. Facturé au réel, forfait dans la fourchette."],
          ["Mise en main", "Offerte à chaque remise. 20 à 30 min : commandes, options, charge VE."],
          ["Recharge VE", "Niveau convenu, plan de bornes sur le trajet."],
          ["Contrôle visuel", "20 points. Ce n’est pas une expertise. Photos sur l’EDL."],
        ].map(([t, p]) => (
          <div key={t} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-display text-lg text-navy">{t}</p>
            <p className="mt-2 text-sm text-muted">{p}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mb-16 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface lg:grid lg:grid-cols-2">
        <img src="/images/11_plein.jpg" alt="Plein de carburant avant remise" className="h-56 w-full object-cover lg:h-full" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Plein</p>
          <h2 className="mt-2 font-display text-2xl text-navy">Le réservoir n’est pas un détail.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Une remise avec la réserve allumée, ce n’est pas une concession. On fait le plein à
            l’arrivée. Le carburant est repris au réel ; un forfait entre dans la fourchette.
          </p>
        </div>
        </div>
      </section>
      <CtaBar title="Ajouter la préparation à une livraison" />
    </main>
  );
}
