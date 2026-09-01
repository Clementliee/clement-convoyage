import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/coffrets-livraison")({
  head: () =>
    pageHead({
      title: "Coffret cadeau à la livraison de véhicule. Quimper.",
      description:
        "Deux coffrets maison remis avec les clés. Armor, galettes et cidre. Champagne, brut et chocolats. Composés à Quimper.",
      path: "/coffrets-livraison",
      image: "/images/09_coffret_armor.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Combien de coffrets proposez-vous ?",
    a: "Deux. Le coffret Armor, gourmand et breton. Le coffret Champagne, brut et chocolats. Un seul par mission, coché au simulateur.",
  },
  {
    q: "Achetez-vous une boîte toute faite ?",
    a: "Non. Clément compose les coffrets : produits de grande surface ou Amazon, emballage maison, carte Convoyage BZH. On va chercher, on remet en main propre.",
  },
  {
    q: "Le prix est-il affiché ?",
    a: "Non. Il entre dans la fourchette après vos coordonnées, à confirmer.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Cadeau de remise"
        title="Les clés."
        accent="Et un coffret."
        text="Deux compositions maison, pas trois. On les prépare à Quimper, on les apporte à la livraison."
        image="/images/09_coffret_armor.jpg"
        alt="Coffret Armor Convoyage BZH : galettes, caramels, cidre"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img
            src="/images/09_coffret_armor.jpg"
            alt="Coffret Armor"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Coffret Armor</p>
            <h2 className="mt-2 font-display text-2xl text-navy">Le geste breton</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Galettes ou palets, caramels au beurre salé, cidre 75 cl, boîte kraft, ruban, carte.
              Simple, lisible, à poser sur la table à la remise.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
          <img
            src="/images/10_coffret_champagne.jpg"
            alt="Coffret Champagne"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Coffret Champagne</p>
            <h2 className="mt-2 font-display text-2xl text-navy">Le geste concession</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Champagne brut 75 cl, ballotin de chocolats, écrin. Pour une livraison prestige, un
              particulier, une clé de mandataire.
            </p>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-3xl space-y-4 px-4 pb-16 sm:px-6">
        <h2 className="font-display text-2xl text-navy">On compose. On n’étiquette pas une boîte Amazon.</h2>
        <p className="text-muted leading-relaxed">
          Les produits sont achetés en grande surface ou en ligne, puis assemblés à Quimper. Un
          coffret par mission, pas un catalogue. Le montant n’est pas en vitrine : il entre dans la
          fourchette, à confirmer.
        </p>
        <Link to="/simulateur" className="inline-flex font-semibold text-coral">
          Ajouter un coffret à l’estimation
        </Link>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="mb-4 font-display text-2xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar title="Une remise, pas un colis" text="Cochez Armor ou Champagne au simulateur." />
    </main>
  );
}
