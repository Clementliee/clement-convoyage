import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";

export const Route = createFileRoute("/pack-mise-a-la-route")({
  head: () =>
    pageHead({
      title: "Formules de livraison | Particuliers et professionnels | Convoyage BZH",
      description:
        "Trois formules particuliers : Route, Sérénité, Sécurisé. Trois formules professionnelles : Atelier, Livraison client, Signature réseau. Devis sur dossier.",
      path: "/pack-mise-a-la-route",
      image: "/images/preparation-esthetique-vehicule.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Formules de livraison"
        title="Formules de livraison"
        text="Trois formules pour les particuliers, trois pour les professionnels. Le montant figure sur le devis."
        image="/images/preparation-esthetique-vehicule.jpg"
        alt="Préparation d’un véhicule avant livraison"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Particulier</p>
        <h2 className="mt-3 font-display text-3xl text-navy">Route, Sérénité, Sécurisé.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PACKS_PART.map((p) => (
            <article key={p.id} className="flex flex-col rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.name}</h3>
              <p className="mt-2 text-muted">Inclus au devis, selon la formule.</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-16 text-xs font-semibold tracking-[0.18em] text-coral uppercase">Professionnel</p>
        <h2 className="mt-3 font-display text-3xl text-navy">Atelier, Livraison client, Signature.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PACKS_PRO.map((p) => (
            <article key={p.id} className="flex flex-col rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.name}</h3>
              <p className="mt-2 text-muted">Inclus au devis, selon la formule.</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          Le kilomètre est identique. La formule détermine les prestations de remise. Le montant figure sur le devis.
        </p>
        <Link to="/simulateur" className="mt-8 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface">
          Demander un devis
        </Link>
      </section>
      <CtaBar title="Choisir une formule" text="Le devis est établi après étude du trajet." />
    </main>
  );
}
