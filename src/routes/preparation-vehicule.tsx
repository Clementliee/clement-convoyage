import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/preparation-vehicule")({
  head: () =>
    pageHead({
      title: "Préparation de véhicule avant livraison. Quimper.",
      description:
        "Lavage, intérieur, vitres, jantes, désodorisation, contrôle visuel, carburant ou recharge. Préparation de remise, pas un centre de detailing.",
      path: "/preparation-vehicule",
      image: "/images/03_nettoyage.jpg",
    }),
  component: Page,
});

const ITEMS = [
  { t: "Lavage extérieur", d: "Carrosserie, jantes, vitres." },
  { t: "Nettoyage intérieur", d: "Aspiration, plastiques, habitacle." },
  { t: "Désodorisation légère", d: "Habitacle net, sans chimie agressive." },
  { t: "Contrôle visuel", d: "Vingt points, photos. Pas une expertise." },
  { t: "Pression, niveaux", d: "Pneus, lave-glace, fluides visibles." },
  { t: "Carburant ou recharge", d: "Plein au réel, ou niveau de batterie convenu." },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Préparation"
        title="Le véhicule arrive propre, contrôlé, prêt."
        text="Une préparation de remise. Pas une promesse de detailing haut de gamme."
        image="/images/03_nettoyage.jpg"
        alt="Nettoyage d’une berline avant livraison"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.t} className="rounded-[1.5rem] border border-line bg-surface p-6">
              <h2 className="font-display text-xl text-navy">{it.t}</h2>
              <p className="mt-2 text-sm text-muted">{it.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted">
          Pour les concessions : le client récupère un véhicule présentable. Pour les particuliers : la remise n’a pas l’air d’un parking.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/pack-mise-a-la-route" className="rounded-full border border-line px-5 py-2.5 text-sm">
            Packs mise à la route
          </Link>
          <Link to="/nettoyage-vehicule" className="rounded-full border border-line px-5 py-2.5 text-sm">
            Nettoyage
          </Link>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
