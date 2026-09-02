import { createFileRoute } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/coffrets-livraison")({
  head: () =>
    pageHead({
      title: "Coffrets de livraison | Convoyage BZH",
      description:
        "Coffrets remis avec les clés lors d’une livraison professionnelle. Terroir Breton ou Prestige Champagne. Composés à Quimper. Inclus au devis.",
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
        title="Coffrets de livraison"
        text="Remis avec les clés. Terroir Breton ou Prestige Champagne. Composés à Quimper. Un coffret, pas les deux. Inclus au devis, jamais vendu séparément."
        image="/images/coffret-terroir-breton.jpg"
        alt="Coffret Terroir Breton : galettes, caramels, cidre"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <article className="flex flex-col overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img src="/images/coffret-terroir-breton.jpg" alt="Coffret Armor" className="h-56 w-full object-cover" />
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Coffret Terroir Breton</p>
            <h2 className="mt-2 font-display text-2xl text-navy">Terroir Breton</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pour une livraison concession, lorsque le réseau n’a pas préparé de cadeau. Remis avec les clés, au moment
              de la mise en main. Composé à Quimper.
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
              <li>Galettes ou palets bretons</li>
              <li>Caramels au beurre salé, 200 g</li>
              <li>Cidre breton, 75 cl</li>
              <li>Boîte kraft, ruban, carte Convoyage BZH</li>
            </ul>
            <QuoteCta search={{ mission: "convoyage", client: "pro" }} className="mt-6">
              Joindre le coffret terroir
            </QuoteCta>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img src="/images/coffret-prestige-champagne.jpg" alt="Coffret Champagne" className="h-56 w-full object-cover" />
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Coffret Prestige Champagne</p>
            <h2 className="mt-2 font-display text-2xl text-navy">Prestige Champagne</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Inclus au Pack Signature réseau. Utile aussi en conciergerie, si vous allez chercher quelqu’un à la gare ou
              à l’aéroport : la personne retrouve le véhicule avec le coffret.
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
              <li>Champagne brut, 75 cl</li>
              <li>Ballotin de chocolats, 200 g</li>
              <li>Écrin, papier de soie, ruban</li>
              <li>Carte Convoyage BZH</li>
            </ul>
            <QuoteCta search={{ mission: "convoyage", client: "pro" }} className="mt-6">
              Joindre le coffret champagne
            </QuoteCta>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <p className="text-muted">
          Un coffret, pas les deux. Utile en livraison concession, si le réseau n’a pas préparé de cadeau. Utile aussi
          en conciergerie, si vous allez chercher quelqu’un à la gare ou à l’aéroport. La mise en main est offerte,
          coffret ou non.
        </p>
        <QuoteCta search={{ mission: "jockey" }} variant="ghost" className="mt-6">
          Ajouter un coffret à une conciergerie
        </QuoteCta>
      </section>
      <CtaBar
        title="Joindre un coffret au devis"
        text="Le coffret est intégré à la formule, ou ajouté. Le montant figure sur le devis."
        primaryLabel="Chiffrer une livraison"
        primarySearch={{ mission: "convoyage", client: "pro" }}
      />
    </main>
  );
}
