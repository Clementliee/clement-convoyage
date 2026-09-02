import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { CONVOYAGE_CATALOGUE, CONVOYAGE_CLIENTS, CONVOYAGE_STEPS } from "@/lib/convoyage";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/prestations")({
  head: () =>
    pageHead({
      title: "Convoyage automobile France et Europe | Convoyage BZH",
      description:
        "Convoyage de véhicules. France et Europe. Particuliers et professionnels. Photos, mise en main offerte. Devis sur dossier. Base Quimper.",
      path: "/prestations",
      image: "/images/mission-audi-a4.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Vous convoyez partout ?",
    a: "Oui. Prise en charge où se trouve le véhicule. Remise chez le destinataire. France. Europe selon mission. Quimper est la base, pas un départ obligatoire.",
  },
  {
    q: "Qui conduit ?",
    a: "Un chauffeur professionnel. Pas un particulier. Assurance tous risques. Photos au départ et à l’arrivée.",
  },
  {
    q: "Quelle est la différence entre les packs ?",
    a: "Le kilomètre ne change pas. Le pack change la remise : nettoyage, plein, GPS, coffret. Particulier et professionnel n’ont pas le même menu.",
  },
  {
    q: "C’est urgent ?",
    a: "Standard : cinq jours. Urgent : soixante-douze heures, sous réserve. Le devis le dit.",
  },
  {
    q: "Et la conciergerie ?",
    a: "Autre métier. Gare, atelier, flotte, prestige, en Bretagne. Page dédiée.",
  },
  {
    q: "Pourquoi aucun tarif ici ?",
    a: "Chaque trajet est chiffré sur dossier. Ville, pack, créneau. Le montant apparaît après vos coordonnées.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Convoyage · France et Europe"
        title="Nous prenons le véhicule. Nous le remettons."
        text="A vers B. Particulier ou professionnel. Photos. Mise en main offerte. Le devis se fait sur dossier."
        image="/images/mission-audi-a4.jpg"
        alt="Audi A4 Avant en convoyage sur autoroute"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
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
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Qui commande</p>
        <RiseWords text="Deux clientèles. Deux menus." className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONVOYAGE_CLIENTS.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <article className="flex h-full flex-col rounded-[1.6rem] border border-line bg-surface p-8 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{c.kicker}</p>
                <h2 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{c.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{c.text}</p>
                <Link
                  to={c.to}
                  className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-navy px-6 text-sm font-semibold text-white"
                >
                  {c.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Déroulement</p>
        <RiseWords text="Cinq étapes. Une mission." className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <ol className="mt-12">
          {CONVOYAGE_STEPS.map((s) => (
            <li key={s.n} className="grid gap-4 border-t border-line py-10 sm:grid-cols-[5.5rem_1fr] sm:gap-10">
              <p className="font-display text-2xl text-coral">{s.n}</p>
              <Reveal>
                <h3 className="font-display text-2xl text-navy sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Missions</p>
        <RiseWords text="Ce que nous convoyons." className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONVOYAGE_CATALOGUE.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 80}>
              <article className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
                <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
                <div className="p-8">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{item.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.text}</p>
                  <ul className="mt-5 space-y-2">
                    {item.items.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Packs</p>
        <RiseWords text="Le trajet. Puis la remise." className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-xl text-muted">
          Le kilomètre ne change pas. Le pack change ce qui se passe à l’arrivée. Inclus au devis. Jamais affiché ici.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Particulier</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PART.map((p) => (
                <div key={p.id} className="py-6">
                  <p className="font-display text-xl text-navy">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.items.join(". ")}.</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Professionnel</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PRO.map((p) => (
                <div key={p.id} className="py-6">
                  <p className="font-display text-xl text-navy">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.items.join(". ")}.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Standard</p>
            <p className="mt-3 font-display text-3xl text-navy">Cinq jours</p>
            <p className="mt-3 text-muted">Prise en charge sous cinq jours. Sous réserve.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Urgent</p>
            <p className="mt-3 font-display text-3xl text-navy">72 heures</p>
            <p className="mt-3 text-muted">Pour un besoin serré. Sous réserve. Le devis le dit.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="rounded-[2rem] bg-navy px-8 py-12 text-surface sm:px-14 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">Périmètre</p>
          <RiseWords
            text="France. Europe. Base Quimper."
            className="mt-4 max-w-xl font-display text-3xl text-white sm:text-4xl"
          />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Nous allons chercher le véhicule où il se trouve. La conciergerie, elle, reste en Bretagne.
          </p>
          <Link
            to="/jockey-gares-aeroports"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-navy"
          >
            Voir la conciergerie
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <CtaBar
        title="Un véhicule à faire venir, ou à faire partir ?"
        text="Le devis se fait sur dossier. Particulier ou professionnel."
        secondaryTo="/contact"
        secondaryLabel="Nous écrire"
      />
    </main>
  );
}