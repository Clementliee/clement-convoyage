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
    q: "Intervenez-vous partout en France ?",
    a: "Oui. Le véhicule est pris en charge à l’adresse où il se trouve et remis au destinataire. France, et Europe selon la mission. Quimper est la base opérationnelle, pas un départ obligatoire.",
  },
  {
    q: "Qui conduit le véhicule ?",
    a: "Un chauffeur professionnel, assuré en tous risques. Un état des lieux photographique est établi au départ et à l’arrivée.",
  },
  {
    q: "En quoi les formules diffèrent-elles ?",
    a: "Le kilomètre est identique. La formule détermine les prestations de remise : nettoyage, plein, traceur GPS, coffret. Particuliers et professionnels disposent de formules distinctes.",
  },
  {
    q: "Quel est le délai ?",
    a: "Cinq jours en délai standard. Soixante-douze heures en urgence, sous réserve de disponibilité. Le devis le précise.",
  },
  {
    q: "Et la conciergerie ?",
    a: "Il s’agit d’une prestation distincte, limitée à la Bretagne : gares, ateliers, flottes et véhicules de prestige. Une page lui est consacrée.",
  },
  {
    q: "Pourquoi aucun tarif n’est-il affiché ?",
    a: "Chaque trajet est chiffré sur dossier : ville, formule, créneau. Le montant figure sur le devis, après communication de vos coordonnées.",
  },
  {
    q: "Qu’est-ce que la livraison vidéo ?",
    a: "Un film court, tourné à la remise du véhicule. Il est transmis à la concession, qui l’envoie à son client. Utile lorsque le destinataire n’est pas sur place, ou pour garder une trace de la mise en main. Prestation supplémentaire, au devis.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Convoyage · France et Europe"
        title="Acheminement de votre véhicule"
        text="Prise en charge à l’adresse du véhicule, remise au destinataire. Particuliers et professionnels. Le devis est établi sur dossier."
        image="/images/mission-audi-a4.jpg"
        alt="Audi A4 Avant en convoyage sur autoroute"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
          className="inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white"
        >
          Demander un devis
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Clientèle</p>
        <RiseWords text="Particuliers et professionnels" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
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
        <RiseWords text="Déroulement de la mission" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
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
        <RiseWords text="Nature des missions" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
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
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Formules</p>
        <RiseWords text="Trois formules, deux clientèles" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-xl text-muted">
          Le kilomètre est identique. La formule détermine les prestations de remise. Le montant figure sur le devis, jamais sur cette page.
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
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Compléments</p>
        <RiseWords text="Prestige, vidéo, coffrets" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Haute valeur</p>
            <h3 className="mt-3 font-display text-2xl text-navy">Protocole prestige</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Sportives, collection, imports, véhicules atypiques. Scellés, suivi GPS le temps de la mission, conduite
              adaptée, remise à la personne désignée. Ce n’est pas de la sécurité privée. C’est un cadre de prise en
              charge, pour un chauffeur formé.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Concession</p>
            <h3 className="mt-3 font-display text-2xl text-navy">Livraison vidéo</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Un film court, tourné à la remise : accueil, clés, mise en main. Transmis au donneur d’ordre. La concession
              l’envoie au client qui n’était pas sur place. Prestation supplémentaire, au devis.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Remise</p>
            <h3 className="mt-3 font-display text-2xl text-navy">Coffrets</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Champagne et chocolats, ou terroir breton. Pour une concession qui n’a pas préparé de cadeau, ou pour
              aller chercher quelqu’un à la gare. Remis avec les clés.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Standard</p>
            <p className="mt-3 font-display text-3xl text-navy">Cinq jours</p>
            <p className="mt-3 text-muted">Prise en charge sous cinq jours, sous réserve de disponibilité.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Urgent</p>
            <p className="mt-3 font-display text-3xl text-navy">72 heures</p>
            <p className="mt-3 text-muted">Pour un besoin serré, sous réserve de disponibilité. Le devis le précise.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="rounded-[2rem] bg-navy px-8 py-12 text-surface sm:px-14 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">Périmètre</p>
          <RiseWords
            text="Zone d’intervention"
            className="mt-4 max-w-xl font-display text-3xl text-white sm:text-4xl"
          />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Le véhicule est pris en charge à l’adresse où il se trouve, en France ou en Europe. La conciergerie demeure limitée à la Bretagne.
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
        title="Un véhicule à acheminer ?"
        text="Le devis est établi après étude du trajet, pour un particulier ou un professionnel."
        secondaryTo="/contact"
        secondaryLabel="Nous écrire"
      />
    </main>
  );
}