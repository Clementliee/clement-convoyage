import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { PACKS } from "@/lib/offers";

export const Route = createFileRoute("/pack-mise-a-la-route")({
  head: () =>
    pageHead({
      title: "Pack mise à la route. Essentiel, Confort, Premium.",
      description:
        "Trois packs de mise à la route pour un véhicule convoyé. Contrôle, nettoyage, kit. Prix indicatifs à partir de 89 €, à confirmer.",
      path: "/pack-mise-a-la-route",
      image: "/images/03_nettoyage.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Packs"
        title="Le véhicule arrive prêt à prendre la route."
        text="Contrôle, nettoyage, carburant ou recharge. Trois niveaux. Prix indicatifs, à confirmer avec le convoyage."
        image="/images/03_nettoyage.jpg"
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
          Ces montants sont indicatifs. Ils s’ajoutent au convoyage. Le GPS temporaire, les coffrets et le plein au réel restent des options. Pas une grille figée : confirmation sous 2 heures ouvrées.
        </p>
        <Link to="/simulateur" className="mt-8 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface">
          Composer au simulateur
        </Link>
      </section>
      <CtaBar title="Ajouter un pack à votre convoyage" />
    </main>
  );
}
