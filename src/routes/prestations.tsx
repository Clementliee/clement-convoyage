import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { SERVICES } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/prestations")({
  head: () =>
    pageHead({
      title: "Prestations. Livraison de véhicule et conciergerie | Convoyage BZH",
      description:
        "Livraison de véhicule en France et en Europe. Conciergerie gares et aéroports en Bretagne. Packs particuliers et professionnels. Mise en main offerte.",
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
        accent="Conciergerie."
        text="Convoyage France et Europe. Conciergerie en Bretagne : gare, atelier, flotte, prestige."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-3">
        <article className="flex flex-col overflow-hidden rounded-[1.8rem] bg-navy text-surface">
          <img src="/images/mission-audi-a4.jpg" alt="Audi A4 Avant en convoyage France" className="h-44 w-full object-cover" />
          <div className="flex flex-1 flex-col p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-surface/50 uppercase">Convoyage</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">France et Europe</h2>
            <p className="mt-4 flex-1 text-surface/70">
              On récupère le véhicule où il se trouve. On le remet au destinataire. Bretagne, Paris, Lyon, Nice, Monaco, Bruxelles, Varsovie.
            </p>
            <Link
              to="/simulateur"
              className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold"
            >
              Obtenir un devis
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
          <img src="/images/mission-tiguan-gare.jpg" alt="Volkswagen Tiguan à la gare" className="h-44 w-full object-cover" />
          <div className="flex flex-1 flex-col p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Conciergerie</p>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">Gare, atelier, flotte</h2>
            <p className="mt-4 flex-1 text-muted">
              Dépose, entretien, carrosserie, roulage, achat accompagné. Le devis se fait sur dossier. Pas de gardiennage.
            </p>
            <Link
              to="/jockey-gares-aeroports"
              className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-navy px-6 text-sm font-semibold text-white"
            >
              Voir la conciergerie
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
          <img src="/images/mission-bmw-controle.jpg" alt="Contrôle visuel d’une BMW Série 3" className="h-44 w-full object-cover" />
          <div className="flex flex-1 flex-col p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Conciergerie</p>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">Achat accompagné</h2>
            <p className="mt-4 flex-1 text-muted">
              On y va à deux voitures. Contrôle visuel sur place. Vous repartez au volant de l’achat, on ramène l’autre.
            </p>
            <Link
              to="/jockey-gares-aeroports"
              className="mt-8 inline-flex h-12 w-fit items-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
            >
              Comment ça se passe
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Deux délais.</h2>
        <p className="mt-3 max-w-xl text-muted">
          Pack Route ou Pack Atelier : le même trajet. Les packs au-dessus changent la remise, pas le kilomètre. Week-ends
          et jours fériés inclus. Sous réserve de disponibilité.
        </p>
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

      <CtaBar title="Un véhicule à livrer ?" text="Le simulateur prépare le devis. Packs particuliers ou professionnels." secondaryTo="/contact" secondaryLabel="Nous écrire" />
    </main>
  );
}
