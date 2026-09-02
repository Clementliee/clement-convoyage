import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { ServiceBlock } from "@/components/ServiceBlock";
import {
  CONVOYAGE_CATALOGUE,
  CONVOYAGE_CLIENTS,
  CONVOYAGE_COMPLEMENTS,
  CONVOYAGE_GROUPS,
  CONVOYAGE_PREPARE,
  CONVOYAGE_STEPS,
} from "@/lib/convoyage";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";
import { pageHead } from "@/lib/seo";
import { INCLUDED, SITE } from "@/lib/site";

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
    a: "Un chauffeur professionnel, assuré en tous risques. Un état des lieux photographique est établi au départ et à l’arrivée. Un seul chauffeur, de bout en bout. Pas de sous-traitance.",
  },
  {
    q: "En quoi les formules diffèrent-elles ?",
    a: "Le kilomètre est identique. La formule détermine les prestations de remise : nettoyage, plein, traceur GPS, coffret. Particuliers et professionnels disposent de formules distinctes. Le montant figure sur le devis.",
  },
  {
    q: "Quel est le délai ?",
    a: "Cinq jours en délai standard. Soixante-douze heures en urgence, sous réserve de disponibilité. Vous proposez une date. Nous la confirmons, ou nous vous contactons. Le devis le précise.",
  },
  {
    q: "Que dois-je fournir pour le devis ?",
    a: "Les deux adresses, le véhicule, la date souhaitée, et vos coordonnées : prénom, nom, téléphone ou e-mail. Le montant n’apparaît qu’après. Vous l’acceptez ensuite.",
  },
  {
    q: "Et la conciergerie ?",
    a: "Il s’agit d’une prestation distincte, limitée à la Bretagne, à Rennes et à Nantes : gares, ateliers, flottes et véhicules de prestige. Une page lui est consacrée. Les deux se chiffrent séparément.",
  },
  {
    q: "Pourquoi aucun tarif n’est-il affiché ?",
    a: "Chaque trajet est chiffré sur dossier : ville, formule, créneau, véhicule. Le montant figure sur le devis, après communication de vos coordonnées. Vous l’acceptez ensuite. La date est confirmée par nos soins.",
  },
  {
    q: "Qu’est-ce que la livraison vidéo ?",
    a: "Un film court, tourné à la remise du véhicule. Il est transmis à la concession, qui l’envoie à son client. Utile lorsque le destinataire n’est pas sur place, ou pour garder une trace de la mise en main. Prestation supplémentaire, au devis.",
  },
];

function Page() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        kicker="Convoyage · France et Europe"
        title="Acheminement de votre véhicule"
        text="Prise en charge à l’adresse du véhicule, remise au destinataire. Particuliers et professionnels. Un chauffeur dédié, un état des lieux photographique, une mise en main offerte. Chaque prestation est détaillée ci-dessous. Le devis est établi sur dossier."
        image="/images/mission-audi-a4.jpg"
        alt="Audi A4 Avant en convoyage sur autoroute"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <QuoteCta search={{ mission: "convoyage" }} className="h-14 px-8">
          Chiffrer un trajet
        </QuoteCta>
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
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Deux clientèles, six formules. Le kilomètre est le même. Ce qui change, c’est la remise : nettoyage, plein,
          coffret, suivi. Chaque mission est chiffrée après étude du trajet. Le bouton ouvre le devis, déjà orienté.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONVOYAGE_CLIENTS.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <article className="flex h-full flex-col rounded-[1.6rem] border border-line bg-surface p-8 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{c.kicker}</p>
                <h2 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{c.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">{c.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <QuoteCta search={c.search} variant="navy">
                    {c.cta}
                  </QuoteCta>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Missions</p>
        <RiseWords text="Nature des missions" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Du trajet local au convoyage européen, de l’achat Leboncoin à la livraison concession. Chaque bloc décrit le
          cadre, le public, ce qui est inclus. Le bouton ouvre le devis, déjà orienté vers la mission. Le montant
          n’apparaît qu’après vos coordonnées.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2">
          {CONVOYAGE_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm text-navy hover:border-navy"
            >
              {group.title}
            </a>
          ))}
        </nav>
        <div className="mt-14 space-y-16">
          {CONVOYAGE_GROUPS.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{group.title}</p>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{group.text}</p>
              <div className="mt-8 space-y-10">
                {CONVOYAGE_CATALOGUE.filter((item) => (group.ids as readonly string[]).includes(item.id)).map(
                  (item, i) => (
                    <ServiceBlock key={item.id} item={item} reverse={i % 2 === 1} delay={(i % 2) * 80} />
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Pour le devis</p>
        <RiseWords text="Ce dont nous avons besoin" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Quatre éléments suffisent pour chiffrer. Le montant n’apparaît qu’après vos coordonnées. Vous l’acceptez
          ensuite. La date de prise en charge est confirmée par nos soins.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2">
          {CONVOYAGE_PREPARE.map((item) => (
            <div key={item.t} className="bg-surface p-7 sm:p-8">
              <p className="font-display text-xl text-navy">{item.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <QuoteCta search={{ mission: "convoyage" }} className="mt-8">
          Commencer le devis
        </QuoteCta>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Inclus</p>
        <RiseWords text="Toujours inclus" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Quelle que soit la formule. Ces postes ne se cochent pas. Ils font partie de la mission. Ils figurent sur le
          devis, ils ne s’ajoutent pas après.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <div key={item.t} className="bg-surface p-7">
              <p className="font-display text-xl text-navy">{item.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Déroulement</p>
        <RiseWords text="Déroulement de la mission" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Cinq temps. Ordre de mission, prise en charge, acheminement, remise, compte rendu. Rien n’est laissé en
          suspens.
        </p>
        <ol className="mt-12">
          {CONVOYAGE_STEPS.map((s) => (
            <li key={s.n} className="grid gap-4 border-t border-line py-10 sm:grid-cols-[5.5rem_1fr] sm:gap-10">
              <p className="font-display text-2xl text-coral">{s.n}</p>
              <Reveal>
                <h3 className="font-display text-2xl text-navy sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <QuoteCta search={{ mission: "convoyage" }} className="mt-4">
          Lancer un ordre de mission
        </QuoteCta>
      </section>

      <section id="formules" className="mx-auto max-w-6xl scroll-mt-28 px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Formules</p>
        <RiseWords text="Trois formules, deux clientèles" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-xl text-muted">
          Le kilomètre est identique. La formule détermine les prestations de remise. Le montant figure sur le devis,
          jamais sur cette page. Chaque formule a son bouton.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Particulier</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PART.map((p) => (
                <div key={p.id} className="py-8">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">{p.tag}</p>
                  <p className="mt-2 font-display text-xl text-navy">{p.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                  <ul className="mt-4 space-y-2">
                    {p.items.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <QuoteCta search={p.search} variant="ghost" className="mt-6">
                    {p.cta}
                  </QuoteCta>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Professionnel</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PRO.map((p) => (
                <div key={p.id} className="py-8">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">{p.tag}</p>
                  <p className="mt-2 font-display text-xl text-navy">{p.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                  <ul className="mt-4 space-y-2">
                    {p.items.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <QuoteCta search={p.search} variant="ghost" className="mt-6">
                    {p.cta}
                  </QuoteCta>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Compléments</p>
        <RiseWords text="Prestige, vidéo, coffrets" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-xl text-muted">
          Ajoutés au devis, jamais facturés à la dérobée. Le protocole prestige n’est pas de la sécurité privée. Chaque
          complément a son bouton.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CONVOYAGE_COMPLEMENTS.map((item) => (
            <article key={item.id} className="flex h-full flex-col rounded-[1.6rem] border border-line bg-surface p-8">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{item.kicker}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
              <QuoteCta search={item.search} variant="ghost" className="mt-8">
                {item.cta}
              </QuoteCta>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Standard</p>
            <p className="mt-3 font-display text-3xl text-navy">Cinq jours</p>
            <p className="mt-3 text-muted">
              Prise en charge sous cinq jours, sous réserve de disponibilité. Vous proposez une date. Nous confirmons le
              créneau, ou nous vous contactons. Le devis le précise.
            </p>
            <QuoteCta search={{ mission: "convoyage" }} variant="ghost" className="mt-6">
              Proposer une date
            </QuoteCta>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">Urgent</p>
            <p className="mt-3 font-display text-3xl text-navy">72 heures</p>
            <p className="mt-3 text-muted">
              Pour un besoin serré, sous réserve de disponibilité. Le devis le précise. Si le créneau ne tient pas, nous
              le disons avant. Rien n’est promis sans confirmation.
            </p>
            <QuoteCta search={{ mission: "convoyage" }} variant="navy" className="mt-6">
              Demander un créneau serré
            </QuoteCta>
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
            Le véhicule est pris en charge à l’adresse où il se trouve, en France ou en Europe. La conciergerie demeure
            limitée à la Bretagne, à Rennes et à Nantes : gares, ateliers, flottes, prestige. Les deux se chiffrent
            distinctement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/jockey-gares-aeroports"
              className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-navy"
            >
              Voir la conciergerie
            </Link>
            <QuoteCta search={{ mission: "jockey" }} variant="inverse">
              Chiffrer une conciergerie
            </QuoteCta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <CtaBar
        title="Un véhicule à acheminer ?"
        text="Indiquez le départ et l’arrivée. Le devis est établi après étude du trajet, pour un particulier ou un professionnel."
        primaryLabel="Chiffrer un trajet"
        primarySearch={{ mission: "convoyage" }}
        secondaryTo="/contact"
        secondaryLabel="Nous écrire"
      />
    </main>
  );
}
