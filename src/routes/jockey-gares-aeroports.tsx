import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { CONCIERGE_CATALOGUE, CONCIERGE_EXTRAS, CONCIERGE_STEPS } from "@/lib/conciergerie";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/jockey-gares-aeroports")({
  head: () =>
    pageHead({
      title: "Conciergerie automobile en Bretagne | Convoyage BZH",
      description:
        "Conciergerie de véhicules en Bretagne. Gare, aéroport, atelier, flotte, roulage prestige, achat accompagné. Devis sur dossier. Pas de gardiennage.",
      path: "/jockey-gares-aeroports",
      image: "/images/mission-tiguan-gare.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Vous me conduisez jusqu’à la gare ?",
    a: "Non. Vous prenez le train ou l’avion. Nous déplaçons uniquement le véhicule. Pas de transport de passagers.",
  },
  {
    q: "Vous gardez la voiture pendant mon absence ?",
    a: "Non. Pas de gardiennage. Dépose, rapatriement, ou les deux. Un double des clés peut rester chez nous pour le prochain départ.",
  },
  {
    q: "Qui prend le rendez-vous à l’atelier ?",
    a: "Nous. Entretien, carrosserie, contrôle technique. Nous appelons, nous bloquons le créneau, nous déposons le véhicule, nous le reprenons. La facture de l’atelier reste la vôtre.",
  },
  {
    q: "Le roulage, c’est quoi ?",
    a: "Une mise en température pour un véhicule qui reste trop longtemps à l’arrêt. Compteur, photos, compte rendu. Mensuel si vous le souhaitez. Prestige compris.",
  },
  {
    q: "Vous gérez une flotte ?",
    a: "Oui. Entreprises, professions libérales, petites flottes. Planning, rendez-vous, déplacements, nettoyage, compte rendu. Un interlocuteur.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "En Bretagne, à Rennes et à Nantes. Gares de Quimper, Lorient, Brest, Vannes, Rennes, Nantes. Aéroports de Brest-Bretagne, Lorient, Rennes-Saint-Jacques et Nantes-Atlantique.",
  },
  {
    q: "Pourquoi aucun tarif sur cette page ?",
    a: "Chaque mission est chiffrée sur dossier. Ville, créneau, atelier, flotte. Le montant apparaît sur le devis, après vos coordonnées.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Conciergerie · Bretagne"
        title="Le véhicule. Sans vous."
        text="Gare, atelier, flotte, prestige. Nous prenons les clés. Nous rendons le véhicule. Le devis se fait sur dossier."
        image="/images/mission-tiguan-gare.jpg"
        alt="Volkswagen Tiguan sur le parvis d’une gare en Bretagne"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
          search={{ mission: "jockey" }}
          className="inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white"
        >
          Établir un devis
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Déroulement</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl">Cinq étapes. Une mission.</h2>
        <ol className="mt-12">
          {CONCIERGE_STEPS.map((s) => (
            <li key={s.n} className="grid gap-4 border-t border-line py-10 sm:grid-cols-[5.5rem_1fr] sm:gap-10">
              <p className="font-display text-2xl text-coral">{s.n}</p>
              <div>
                <h3 className="font-display text-2xl text-navy sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Prestations</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl">Ce que nous faisons.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONCIERGE_CATALOGUE.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
              <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
              <div className="p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{item.kicker}</p>
                <h3 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Compléments</p>
            <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">Autour de la mission.</h2>
            <p className="mt-4 max-w-md text-muted">
              Nettoyage, plein, attente, prise de rendez-vous. Ajoutés au devis. Jamais affichés ici.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2">
            {CONCIERGE_EXTRAS.map((x) => (
              <div key={x.title} className="bg-surface p-7">
                <p className="font-display text-xl text-navy">{x.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="rounded-[2rem] bg-navy px-8 py-12 text-surface sm:px-14 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">Périmètre</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-white sm:text-4xl">Bretagne. Rennes. Nantes.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            La conciergerie reste locale. Le convoyage, lui, va en France et en Europe. Pas de gardiennage. Pas de
            transport de passagers. Chaque mission est chiffrée depuis Quimper.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar
        title="Un véhicule à déposer, entretenir, faire rouler ?"
        text="Le devis se fait sur dossier. Particulier, professionnel, flotte."
        secondaryTo="/simulateur"
        secondaryLabel="Établir un devis"
      />
    </main>
  );
}