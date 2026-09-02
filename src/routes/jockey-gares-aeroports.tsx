import { createFileRoute } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { SecteurSection } from "@/components/SecteurSection";
import { ServiceBlock } from "@/components/ServiceBlock";
import {
  CONCIERGE_CATALOGUE,
  CONCIERGE_EXTRAS,
  CONCIERGE_GROUPS,
  CONCIERGE_LIMITS,
  CONCIERGE_PREPARE,
  CONCIERGE_STEPS,
} from "@/lib/conciergerie";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/jockey-gares-aeroports")({
  head: () =>
    pageHead({
      title: "Conciergerie automobile en Bretagne | Convoyage BZH",
      description:
        "Conciergerie de véhicules en Bretagne. Gare, aéroport, atelier, flotte, roulage prestige, achat accompagné. Devis immédiat. Pas de gardiennage.",
      path: "/jockey-gares-aeroports",
      image: "/images/mission-tiguan-gare.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Vous me conduisez jusqu’à la gare ?",
    a: "Non. Vous prenez le train ou l’avion. Nous déplaçons uniquement le véhicule. Pas de transport de passagers. Ce n’est pas un VTC.",
  },
  {
    q: "Vous gardez la voiture pendant mon absence ?",
    a: "Non. Pas de gardiennage. Dépose, rapatriement, ou les deux. Un double des clés peut rester chez nous pour le prochain départ, sur consigne.",
  },
  {
    q: "Qui prend le rendez-vous à l’atelier ?",
    a: "Nous. Entretien, carrosserie, contrôle technique. Nous appelons, nous bloquons le créneau, nous déposons le véhicule, nous le reprenons. La facture de l’atelier reste la vôtre.",
  },
  {
    q: "Le roulage, c’est quoi ?",
    a: "Une mise en température pour un véhicule qui reste trop longtemps à l’arrêt. Ordre écrit, kilométrage limité, itinéraire défini. Compteur, photos, compte rendu. Mensuel si vous le souhaitez. Prestige compris.",
  },
  {
    q: "Vous gérez une flotte ?",
    a: "Oui. Entreprises, professions libérales, petites flottes. Planning, rendez-vous, déplacements, nettoyage, compte rendu. Un interlocuteur. Ce n’est pas un logiciel. C’est une exécution.",
  },
  {
    q: "Que dois-je fournir pour le devis ?",
    a: "Le créneau, l’adresse, le véhicule, et vos coordonnées : prénom, nom, téléphone ou e-mail. Le montant s’affiche tout de suite. Vous signez.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "En Bretagne, à Rennes et à Nantes. Gares de Quimper, Lorient, Brest, Vannes, Rennes, Nantes. Aéroports de Brest-Bretagne, Lorient, Rennes-Saint-Jacques et Nantes-Atlantique. Au-delà, c’est du convoyage.",
  },
  {
    q: "Pourquoi aucun tarif n’est-il affiché ?",
    a: "Chaque mission est chiffrée tout de suite : ville, créneau, atelier, flotte. Le montant figure sur le devis, après communication de vos coordonnées. Vous l’acceptez ensuite.",
  },
];

function Page() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        kicker="Conciergerie · Bretagne"
        title="Conciergerie automobile en Bretagne"
        text="Gares, ateliers, flottes et véhicules de prestige. Nous déplaçons le véhicule à votre place. Vous prenez le train, vous restez au bureau, vous décidez d’un achat à distance. Chaque prestation est détaillée ci-dessous. Le devis est immédiat. Vous signez en ligne."
        image="/images/mission-tiguan-gare.jpg"
        alt="Volkswagen Tiguan sur le parvis d’une gare en Bretagne"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <QuoteCta search={{ mission: "jockey" }} className="h-14 px-8">
          Chiffrer une conciergerie
        </QuoteCta>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Cadre</p>
        <RiseWords text="Ce que nous faisons. Ce que nous ne faisons pas." className="mt-4 max-w-2xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          La conciergerie est un déplacement local, en Bretagne. Elle n’est pas un parking, ni un VTC. Chaque mission a
          un début, une exécution, une restitution. Le bouton ouvre le devis, déjà orienté.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line lg:grid-cols-3">
          {CONCIERGE_LIMITS.map((item) => (
            <div key={item.t} className="bg-surface p-7">
              <p className="font-display text-xl text-navy">{item.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <QuoteCta search={{ mission: "jockey" }} className="mt-8">
          Chiffrer une conciergerie
        </QuoteCta>
      </section>

      <SecteurSection mode="concierge" showTrajets={false} />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Prestations</p>
        <RiseWords text="Prestations de conciergerie" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Six prestations, trois familles. Chaque bloc décrit le cadre, le public, ce qui est inclus. Le bouton ouvre le
          devis, déjà orienté vers la mission correspondante. Le montant n’apparaît qu’après vos coordonnées.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2">
          {CONCIERGE_GROUPS.map((group) => (
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
          {CONCIERGE_GROUPS.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{group.title}</p>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{group.text}</p>
              <div className="mt-8 space-y-10">
                {CONCIERGE_CATALOGUE.filter((item) => (group.ids as readonly string[]).includes(item.id)).map(
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
          ensuite. Le créneau est confirmé par nos soins.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2">
          {CONCIERGE_PREPARE.map((item) => (
            <div key={item.t} className="bg-surface p-7 sm:p-8">
              <p className="font-display text-xl text-navy">{item.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <QuoteCta search={{ mission: "jockey" }} className="mt-8">
          Commencer le devis
        </QuoteCta>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Déroulement</p>
        <RiseWords
          text="Déroulement de la prestation"
          className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl"
        />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Cinq temps. Ordre de mission, prise en charge, exécution, restitution, suivi. Si le créneau glisse, vous êtes
          prévenu avant.
        </p>
        <ol className="mt-12">
          {CONCIERGE_STEPS.map((s) => (
            <li key={s.n} className="grid gap-4 border-t border-line py-10 sm:grid-cols-[5.5rem_1fr] sm:gap-10">
              <p className="font-display text-2xl text-coral">{s.n}</p>
              <Reveal>
                <h3 className="font-display text-2xl text-navy sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <QuoteCta search={{ mission: "jockey" }} className="mt-4">
          Lancer un ordre de mission
        </QuoteCta>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Compléments</p>
            <RiseWords text="Prestations complémentaires" className="mt-4 font-display text-3xl text-navy sm:text-4xl" />
            <p className="mt-4 max-w-md text-muted">
              Nettoyage, plein, attente sur place, prise de rendez-vous, coffret. Ajoutés au devis, jamais affichés en
              tarif. Chaque complément a son bouton.
            </p>
            <QuoteCta search={{ mission: "jockey" }} className="mt-8">
              Composer une mission
            </QuoteCta>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CONCIERGE_EXTRAS.map((x) => (
              <article key={x.title} className="flex h-full flex-col rounded-[1.4rem] border border-line bg-surface p-6 sm:p-7">
                <p className="font-display text-xl text-navy">{x.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{x.text}</p>
                <QuoteCta search={x.search} variant="ghost" className="mt-6">
                  {x.cta}
                </QuoteCta>
              </article>
            ))}
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
            La conciergerie est limitée à la Bretagne, à Rennes et à Nantes. Le convoyage, lui, s’étend à la France et à
            l’Europe. Pas de gardiennage, ni de transport de passagers. Chaque mission est chiffrée depuis Quimper.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteCta search={{ mission: "jockey" }}>Chiffrer une conciergerie</QuoteCta>
            <QuoteCta search={{ mission: "convoyage" }} variant="inverse">
              Chiffrer un convoyage
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
        title="Un véhicule à déposer, à entretenir ou à faire rouler ?"
        text="Le devis est immédiat, pour un particulier, un professionnel ou une flotte."
        primaryLabel="Chiffrer une conciergerie"
        primarySearch={{ mission: "jockey" }}
        secondaryTo="/contact"
        secondaryLabel="Nous écrire"
      />
    </main>
  );
}
