import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/coffrets-livraison")({
  head: () =>
    pageHead({
      title: "Coffrets cadeau à la livraison. 45 € et 89 €.",
      description:
        "Deux coffrets composés à Quimper, remis avec les clés. Armor 45 € : galettes, caramels, cidre. Champagne 89 € : brut et chocolats.",
      path: "/coffrets-livraison",
      image: "/images/coffret-terroir-breton.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Remise privilège"
        title="Deux coffrets."
        accent="Un geste de concession."
        text="Composés à Quimper. Un seul par mission. Terroir Breton ou Prestige Champagne."
        image="/images/coffret-terroir-breton.jpg"
        alt="Coffret Terroir Breton : galettes, caramels, cidre"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img src="/images/coffret-terroir-breton.jpg" alt="Coffret Armor" className="h-56 w-full object-cover" />
          <div className="p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Coffret Terroir Breton</p>
            <h2 className="mt-2 font-display text-2xl text-navy">45 €</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Galettes ou palets bretons</li>
              <li>Caramels au beurre salé, 200 g</li>
              <li>Cidre breton, 75 cl</li>
              <li>Boîte kraft, ruban, carte Convoyage BZH</li>
            </ul>
          </div>
        </article>
        <article className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img src="/images/coffret-prestige-champagne.jpg" alt="Coffret Champagne" className="h-56 w-full object-cover" />
          <div className="p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Coffret Prestige Champagne</p>
            <h2 className="mt-2 font-display text-2xl text-navy">89 €</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Champagne brut, 75 cl</li>
              <li>Ballotin de chocolats, 200 g</li>
              <li>Écrin, papier de soie, ruban</li>
              <li>Carte Convoyage BZH</li>
            </ul>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <p className="text-muted">
          Un coffret, pas les deux. La mise en main est offerte, coffret ou non.
        </p>
        <Link to="/simulateur" className="mt-6 inline-flex font-semibold text-coral">
          Ajouter un coffret
        </Link>
      </section>
      <CtaBar />
    </main>
  );
}
