import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { JOCKEY_POINTS, JOCKEY_SENS, OPTIONS } from "@/lib/tarifs";
import { SITE } from "@/lib/site";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/jockey-gares-aeroports")({
  head: () =>
    pageHead({
      title: "Conciergerie de véhicules en Bretagne | Convoyage BZH",
      description:
        "Conciergerie automobile en Bretagne. Gare, aéroport, location, accompagnement à l’achat, CT, attente. À la carte. Pas de gardiennage.",
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
    a: "Non. Pas de gardiennage. Soit nous déposons le véhicule à la gare ou à l’aéroport, soit nous le ramenons à votre domicile, soit les deux. Un double des clés peut rester chez nous pour le prochain départ.",
  },
  {
    q: "Vous récupérez une location ?",
    a: "Oui. Agence ou aéroport. On prend le véhicule, photos, on le ramène chez vous. On peut aussi le restituer à l’agence pendant que vous prenez l’avion.",
  },
  {
    q: "Vous m’accompagnez pour un achat ?",
    a: "Oui. On y va à deux voitures. Contrôle visuel sur place : carrosserie, compteur, intérieur, documents, photos. Si vous achetez, vous repartez au volant. On ramène l’autre véhicule.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "En Bretagne, à Rennes et à Nantes. Gares de Quimper, Lorient, Brest, Vannes, Rennes, Nantes. Aéroports de Brest-Bretagne, Lorient, Rennes-Saint-Jacques et Nantes-Atlantique.",
  },
  {
    q: "Pourquoi à la carte ici, et pas sur le convoyage ?",
    a: "La conciergerie est une prestation locale, souvent courte. On compose : lavage, CT, plein, attente d’une personne. Le convoyage A vers B se vend en packs, particulier ou professionnel.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Conciergerie Bretagne"
        title="Le véhicule, sans vous."
        accent=""
        text="Gare, aéroport, location, achat accompagné, contrôle technique. Nous déplaçons la voiture. Vous prenez le train. Photos. Pas de gardiennage."
        image="/images/mission-tiguan-gare.jpg"
        alt="Volkswagen Tiguan sur le parvis d’une gare en Bretagne"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-12 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
          search={{ mission: "jockey" }}
          className="inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white"
        >
          Devis conciergerie
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Trois possibilités.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {JOCKEY_SENS.map((s) => (
            <div key={s.id} className="rounded-[1.6rem] border border-line bg-surface p-7">
              <h3 className="font-display text-2xl text-navy">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Aussi, à la carte.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
            <img src="/images/mission-golf-aeroport.jpg" alt="Volkswagen Golf de location sur un aéroport breton" className="h-44 w-full object-cover" />
            <div className="p-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Location</p>
              <h3 className="mt-3 font-display text-2xl text-navy">Récupérer ou restituer.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                On va chercher la location à l’agence ou à l’aéroport. On la ramène chez vous. Ou l’inverse : on restitue pendant que vous prenez l’avion. Photos. Ticket carburant si le contrat l’exige.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
            <img src="/images/mission-bmw-controle.jpg" alt="Contrôle visuel d’une BMW Série 3 avant achat" className="h-44 w-full object-cover" />
            <div className="p-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Achat</p>
              <h3 className="mt-3 font-display text-2xl text-navy">Deux voitures. Contrôle visuel.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Vous allez voir un véhicule. On vous y rejoint. Contrôle visuel : carrosserie, compteur, intérieur, documents, photos. Si vous achetez, vous repartez au volant. On ramène l’autre.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
            <img src="/images/mission-golf-atelier.jpg" alt="Volkswagen Golf dans un atelier de garage" className="h-44 w-full object-cover" />
            <div className="p-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Atelier</p>
              <h3 className="mt-3 font-display text-2xl text-navy">CT, carrosserie, concession.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                On dépose le véhicule au centre, au garage, chez le mandataire. On le reprend. Vous n’immobilisez pas votre journée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Gares et aéroports.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Le tarif se calcule entre votre domicile et le point choisi. Prix indicatifs, à confirmer. Photos incluses.
        </p>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {JOCKEY_POINTS.map((p) => (
            <div key={p.id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-lg text-navy">{p.name}</p>
              <p className="text-sm text-muted">
                À partir de {formatEuro(p.forfait)} · aller et retour {formatEuro(p.allerRetour)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">À la carte, uniquement en conciergerie.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Nettoyage</p>
            <p className="mt-2 text-sm text-muted">Intérieur et extérieur. {formatEuro(OPTIONS.jockeyLavage)}. Prestige {formatEuro(OPTIONS.jockeyLavagePrestige)}.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Contrôle technique</p>
            <p className="mt-2 text-sm text-muted">Nous emmenons le véhicule. {formatEuro(OPTIONS.jockeyCt)}, hors facture du centre.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Plein carburant</p>
            <p className="mt-2 text-sm text-muted">Passage à la pompe {formatEuro(OPTIONS.pleinService)} + {OPTIONS.carburantLitre} €/L. Environ {formatEuro(OPTIONS.plein)} pour 50 L.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Attente</p>
            <p className="mt-2 text-sm text-muted">Quelqu’un vient chercher le véhicule. Nous restons. {formatEuro(OPTIONS.jockeyAttente)}.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Contrôle visuel d’achat</p>
            <p className="mt-2 text-sm text-muted">Carrosserie, compteur, intérieur, documents, photos. {formatEuro(OPTIONS.controleVisuel)}.</p>
          </div>
          <div className="rounded-[1.6rem] bg-sand p-7">
            <p className="font-display text-xl text-navy">Double des clés</p>
            <p className="mt-2 text-sm text-muted">Possible, pour les prochains départs. Inclus.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar
        title="Un véhicule à déposer, ramener, inspecter ?"
        text="Gare, aéroport, location, achat accompagné. Devis en quelques minutes."
        secondaryTo="/simulateur"
        secondaryLabel="Devis conciergerie"
      />
    </main>
  );
}
