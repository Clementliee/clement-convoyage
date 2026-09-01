import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import { PILLARS, PROCESS, B2B_OFFERS } from "@/lib/offers";
import { OPTIONS } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage BZH | Convoyage automobile premium et conciergerie | Bretagne, France, Europe",
      description:
        "Société de convoyage automobile professionnel et conciergerie VIP, basée à Quimper. Transfert VN et VO, mise à la route, préparation esthétique, livraison sécurisée 7j/7.",
      path: "/",
      image: "/images/convoyage-berline-bretagne.jpg",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Qui opère les missions ?",
    a: "Convoyage BZH, base opérationnelle à Quimper. Clément Leliège conduit les missions. Convoyage, préparation esthétique, remise protocolaire.",
  },
  {
    q: "Quels véhicules sont éligibles ?",
    a: "Véhicules légers et utilitaires jusqu’à 3,5 t, en état de marche, permis B. Hors champ : plateau, non-roulant, poids lourd.",
  },
  {
    q: "Quelle est la zone d’intervention ?",
    a: "Prise en charge et remise partout en France, et en Europe selon mission. Quimper est la base, pas un départ obligatoire.",
  },
  {
    q: "Comment est établie la cotation ?",
    a: "Selon l’itinéraire, le segment du véhicule, le délai et les prestations associées. La fourchette s’affiche après nom, téléphone et e-mail. Prix indicatif, à confirmer sous 2 heures ouvrées.",
  },
  {
    q: "La mise en main est-elle facturée ?",
    a: "Non. Le protocole de mise en main est offert à chaque remise.",
  },
];

const OPTIONS_HOME = [
  { t: "Préparation esthétique", p: OPTIONS.lavageComplet },
  { t: "Balise GPS 4G", p: OPTIONS.gps },
  { t: "Plein ou charge 90 %", p: OPTIONS.plein },
  { t: "Coffret Terroir Breton", p: OPTIONS.coffretArmor },
  { t: "Coffret Prestige Champagne", p: OPTIONS.coffretChampagne },
];

function Home() {
  return (
    <main>
      <HeroStage />

      <section className="mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-coral uppercase">Prestations</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-navy sm:text-6xl">
            Acheminement, préparation, liaisons européennes.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-12 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <Reveal key={p.k}>
              <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">{p.k}</p>
              <p className="mt-3 font-display text-2xl text-navy">{p.t}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Prestations associées.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Le convoyage. Puis, au choix, un menu de livraison ou une option à la carte. Mise en main offerte.
          </p>
        </Reveal>
        <div className="mt-16 divide-y divide-line border-y border-line">
          <div className="flex items-baseline justify-between gap-6 py-8">
            <p className="font-display text-3xl text-navy">Convoyage</p>
            <p className="text-sm text-muted">Sur devis</p>
          </div>
          {OPTIONS_HOME.map((o) => (
            <div key={o.t} className="flex items-baseline justify-between gap-6 py-6">
              <p className="text-lg text-navy">{o.t}</p>
              <p className="text-sm text-muted">{formatEuro(o.p)}</p>
            </div>
          ))}
        </div>
        <Link to="/simulateur" className="mt-12 inline-flex text-sm font-semibold text-coral">
          Obtenir une estimation
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="overflow-hidden rounded-[2.4rem] bg-navy text-surface lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-12 sm:p-16">
            <p className="text-xs font-semibold tracking-[0.22em] text-surface/45 uppercase">Réseaux automobiles</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Partenaire logistique des concessions, marchands et carrosseries.</h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-surface/75">
              {B2B_OFFERS.map((o) => (
                <li key={o.t}>
                  <span className="font-semibold text-surface">{o.t}.</span> {o.d}
                </li>
              ))}
            </ul>
            <Link
              to="/professionnels"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold"
            >
              Grille tarifaire partenaire
            </Link>
          </div>
          <img
            src="/images/atelier-garage-professionnel.jpg?v=propre"
            alt="Berline propre dans un atelier automobile professionnel"
            className="h-72 w-full object-cover lg:h-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="overflow-hidden rounded-[2.4rem] bg-sand lg:grid lg:grid-cols-2">
          <img
            src="/images/jockey-gare-quimper.jpg"
            alt="Berline sur le parvis d’une gare"
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="flex flex-col justify-center p-12 sm:p-16">
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Conciergerie</p>
            <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">Voiturier gares et aéroports.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Gare de Quimper, aéroports de Brest-Bretagne et Lorient. Prise en charge au dépose-minute, restitution sur le parvis.
            </p>
            <Link to="/jockey-gares-aeroports" className="mt-10 inline-flex text-sm font-semibold text-coral">
              Service jockey
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">France et Europe.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Base opérationnelle à Quimper. Prise en charge sur le lieu où se trouve le véhicule.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              ["/convoyage-quimper", "Quimper"],
              ["/convoyage-brest", "Brest"],
              ["/convoyage-paris", "Paris"],
              ["/convoyage-pologne", "Pologne"],
              ["/convoyage-monaco", "Monaco"],
              ["/destinations", "Toutes les destinations"],
            ].map(([to, label]) => (
              <AppLink
                key={to}
                to={to}
                className="rounded-full border border-line px-5 py-2.5 text-sm text-navy hover:border-coral"
              >
                {label}
              </AppLink>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-20 px-5 pb-28 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Un processus d’acheminement en 4 phases.</h2>
          <ol className="mt-14 space-y-10">
            {PROCESS.map((s) => (
              <li key={s.n}>
                <p className="text-xs tracking-[0.2em] text-coral uppercase">{s.n}</p>
                <p className="mt-2 font-display text-3xl text-navy">{s.t}</p>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={80}>
          <HomeEstimator />
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl text-navy sm:text-5xl">
            Un véhicule confié n’est pas une marchandise. C’est un capital.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Assurance professionnelle tous risques, gestion des imprévus, clés remises en main propre, confidentialité. Le niveau d’exigence des réseaux de distribution premium.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-28 sm:px-8">
        <h2 className="mb-10 font-display text-5xl text-navy">Questions.</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <div className="mb-10">
        <CtaBar />
      </div>
    </main>
  );
}
