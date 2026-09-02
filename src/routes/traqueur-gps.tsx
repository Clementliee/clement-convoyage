import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/traqueur-gps")({
  head: () =>
    pageHead({
      title: "Traceur GPS 4G | Deux produits | Convoyage BZH",
      description:
        "Deux produits GPS : suivi le temps de la mission, retiré à la remise. Ou traceur 4G cédé à l’acquéreur, douze mois inclus. Montant au devis. Convoyage BZH, Quimper.",
      path: "/traqueur-gps",
      image: "/images/balise-gps-4g-vehicule.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Quelle est la différence entre les deux produits ?",
    a: "Le suivi de mission est posé au départ et retiré à la remise. Le donneur d’ordre voit le véhicule pendant le trajet. Le traceur cédé reste dans la voiture de l’acquéreur, avec douze mois de suivi. Ce n’est pas pour suivre le convoyeur.",
  },
  {
    q: "Quel matériel ?",
    a: "Un traceur GPS 4G magnétique, sans perçage. Type PAJ ou Salind. Application sur le téléphone. Autonomie plusieurs jours à plusieurs semaines selon l’usage.",
  },
  {
    q: "Quel est le montant ?",
    a: "Il figure sur le devis. Les deux produits peuvent se cumuler. Ensuite l’acquéreur paie l’abonnement s’il conserve le boîtier cédé.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Deux produits"
        title="Suivi de mission, ou traceur cédé"
        text="Deux usages distincts. Le premier suit le véhicule le temps du trajet, puis est retiré. Le second reste chez l’acquéreur. Montant au devis."
        image="/images/balise-gps-4g-vehicule.jpg"
        alt="Traceur GPS 4G magnétique"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <article className="rounded-[1.8rem] border border-line bg-surface p-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Produit 1</p>
          <h2 className="mt-3 font-display text-2xl text-navy">Suivi GPS le temps de la mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Balise posée au départ, retirée à la remise. Un lien de suivi est adressé au donneur d’ordre. Inclus au Pack
            Sécurisé et au Pack Signature réseau. Sinon, ajouté au devis.
          </p>
        </article>
        <article className="rounded-[1.8rem] border border-line bg-surface p-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Produit 2</p>
          <h2 className="mt-3 font-display text-2xl text-navy">Traceur GPS 4G cédé, 12 mois</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Le boîtier reste dans le véhicule. L’acquéreur l’utilise depuis son téléphone. Douze mois de réseau 4G
            inclus. Inclus au Pack Sécurisé. Sinon, ajouté au devis.
          </p>
        </article>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Les deux produits peuvent se cumuler. Un suivi de mission n’empêche pas de laisser un traceur à l’acquéreur.
          </p>
          <p>
            Boîtier 4G magnétique, sans perçage de la carrosserie. Ce n’est pas une activité de sécurité privée. C’est un
            outil de localisation, pour un véhicule de valeur ou un acheteur qui le demande.
          </p>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Demander un devis
          </Link>
        </div>
        <img src="/images/balise-gps-4g-vehicule.jpg" alt="Traceur GPS 4G" className="h-80 w-full rounded-[1.8rem] object-cover" />
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar />
    </main>
  );
}
