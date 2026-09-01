import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { AppLink } from "@/components/AppLink";
import { SERVICES } from "@/lib/site";
import { B2B_OFFERS } from "@/lib/offers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/prestations")({
  head: () =>
    pageHead({
      title: "Prestations convoyage automobile. Convoyage BZH",
      description:
        "Livraison France et Europe, nettoyage, plein, coffrets, contrôle visuel, traqueur GPS. Prise en charge partout, base Quimper.",
      path: "/prestations",
    }),
  component: Page,
});

const MORE = [
  {
    to: "/jockey-gares-aeroports",
    title: "Jockey gares et aéroports",
    text: "Le véhicule vous attend sur le parvis.",
    image: "/images/jockey-gare-quimper.jpg",
  },
  {
    to: "/professionnels",
    title: "Professionnels",
    text: "Concessions, garages, flottes.",
    image: "/images/atelier-garage-professionnel.jpg?v=propre",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffrets",
    text: "Terroir Breton ou Prestige Champagne.",
    image: "/images/coffret-terroir-breton.jpg",
  },
  {
    to: "/traqueur-gps",
    title: "Balise GPS 4G",
    text: "Cédée à l’acquéreur. 199 €.",
    image: "/images/balise-gps-4g-vehicule.jpg",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Prestations"
        title="Particuliers et professionnels."
        accent=""
        text="Le même niveau de remise. Convoyage, jockey, préparation, menus de livraison."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 md:grid-cols-2">
        <Link to="/simulateur" className="rounded-[1.8rem] border border-line bg-surface p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Particuliers</p>
          <h2 className="mt-3 font-display text-3xl text-navy">Achat, import, remise à domicile.</h2>
          <p className="mt-4 text-muted">Convoyage, jockey, préparation esthétique, coffret. Mise en main offerte.</p>
        </Link>
        <Link to="/professionnels" className="rounded-[1.8rem] bg-navy p-8 text-surface">
          <p className="text-xs font-semibold tracking-[0.18em] text-surface/50 uppercase">Professionnels</p>
          <h2 className="mt-3 font-display text-3xl">Concessions, garages, flottes.</h2>
          <p className="mt-4 text-surface/70">Navettes atelier, rotations de stocks, livraison client final.</p>
        </Link>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 sm:px-8 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link key={s.to} to={s.to} className="tilt-hover overflow-hidden rounded-2xl border border-line bg-surface">
            <img src={s.image} alt={s.alt} className="h-44 w-full object-cover" />
            <div className="p-5">
              {"badge" in s && s.badge ? (
                <p className="mb-2 text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{s.badge}</p>
              ) : null}
              <h2 className="font-display text-xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Partenaires B2B et concessions</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Navettes atelier, transferts inter-sites, livraison client final. Une grille partenaire, pas une plateforme anonyme.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {B2B_OFFERS.map((c) => (
            <div key={c.t} className="rounded-[1.5rem] bg-sand p-6">
              <h3 className="font-display text-xl text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
        <Link to="/professionnels" className="mt-8 inline-flex h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-surface">
          Demander une grille tarifaire partenaire Pro
        </Link>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight text-navy">Compléments</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MORE.map((s) => (
            <AppLink key={s.to} to={s.to} className="tilt-hover overflow-hidden rounded-2xl border border-line bg-surface">
              <img src={s.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </AppLink>
          ))}
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
