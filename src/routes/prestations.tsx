import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { SERVICES } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/prestations")({
  head: () =>
    pageHead({
      title: "Prestations. Livraison de véhicule et jockey | Convoyage BZH",
      description:
        "Livraison de véhicule en France et en Europe. Jockey gares et aéroports. Deux délais : standard 5 jours, urgent 72 h. Même tarif pour tous. Mise en main offerte.",
      path: "/prestations",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Prestations"
        title="Livraison de véhicule."
        accent="Jockey."
        text="Deux délais. Un seul tarif, particulier ou professionnel."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-2">
        <article className="flex flex-col rounded-[1.8rem] bg-navy p-8 text-surface sm:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-surface/50 uppercase">Principal</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Livraison France et Europe</h2>
          <p className="mt-4 flex-1 text-surface/70">
            On récupère le véhicule où il se trouve. On le remet au destinataire. Mise en main offerte.
          </p>
          <Link
            to="/simulateur"
            className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold"
          >
            Obtenir un devis
          </Link>
        </article>
        <article className="flex flex-col rounded-[1.8rem] border border-line bg-surface p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Nouveau</p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">Jockey gares et aéroports</h2>
          <p className="mt-4 flex-1 text-muted">
            Bretagne, Rennes, Nantes. Dépose à la gare ou à l’aéroport, ou rapatriement à domicile. Photos. Pas de gardiennage.
          </p>
          <Link
            to="/jockey-gares-aeroports"
            className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-navy px-6 text-sm font-semibold text-white"
          >
            Réserver un créneau
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Deux délais.</h2>
        <p className="mt-3 max-w-xl text-muted">Le même prix de base, que vous soyez particulier ou professionnel. Week-ends et jours fériés inclus. Sous réserve de disponibilité des équipes.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Standard</p>
            <p className="mt-3 font-display text-3xl text-navy">5 jours</p>
            <p className="mt-3 text-muted">Prise en charge sous cinq jours. Tarif de base.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Urgent</p>
            <p className="mt-3 font-display text-3xl text-navy">72 heures</p>
            <p className="mt-3 text-muted">Majoration 25 %. Pour un besoin serré.</p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-muted">
          Sportive, prestige ou import :{" "}
          <AppLink to="/convoyage-prestige" className="font-semibold text-coral">
            Protocole Prestige
          </AppLink>
          . Même convoyage conduit, plus de cadre.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 md:grid-cols-2">
        {SERVICES.map((s) => (
          <Link key={s.to} to={s.to} className="group overflow-hidden rounded-[1.6rem] border border-line bg-surface">
            <img src={s.image} alt={s.alt} className="h-48 w-full object-cover" />
            <div className="p-6">
              {"badge" in s && s.badge ? (
                <p className="mb-2 text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{s.badge}</p>
              ) : null}
              <h2 className="font-display text-2xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              <p className="mt-5 text-sm font-semibold text-coral group-hover:underline">
                {"cta" in s ? s.cta : "Voir"}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <CtaBar title="Un véhicule à livrer ?" text="Le simulateur prépare le devis. Même tarif pour tous." secondaryTo="/contact" secondaryLabel="Nous écrire" />
    </main>
  );
}
