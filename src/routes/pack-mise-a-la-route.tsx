import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { PACKS } from "@/lib/offers";

export const Route = createFileRoute("/pack-mise-a-la-route")({
  head: () =>
    pageHead({
      title: "Packs de livraison. Standard, Confort, Signature.",
      description:
        "Trois menus de livraison : Standard 89 €, Confort dès 129 €, Signature 329 €. Moins cher qu’à la carte. Mise en main offerte.",
      path: "/pack-mise-a-la-route",
      image: "/images/preparation-esthetique-vehicule.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Menus de livraison"
        title="Le véhicule arrive prêt."
        text="Trois menus, moins chers qu’à la carte. Ou rien, mise en main offerte. Prix indicatifs, à confirmer."
        image="/images/preparation-esthetique-vehicule.jpg"
        alt="Préparation d’un véhicule avant livraison"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKS.map((p) => (
            <article key={p.id} className="flex flex-col rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{p.tag}</p>
              <h2 className="mt-3 font-display text-2xl text-navy">{p.name}</h2>
              <p className="mt-2 text-muted">À partir de {p.from} €</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          Ces montants sont indicatifs. Ils s’ajoutent au convoyage. Moins cher qu’à la carte. Confirmation sous 2 heures ouvrées.
        </p>
        <Link to="/simulateur" className="mt-8 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface">
          Composer au simulateur
        </Link>
      </section>
      <CtaBar title="Ajouter un pack à votre convoyage" />
    </main>
  );
}
