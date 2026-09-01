import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import { PILLARS, PROCESS } from "@/lib/offers";
import { OPTIONS } from "@/lib/tarifs";
import { SITE } from "@/lib/site";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage de voiture à Quimper. Livraison France et Europe.",
      description:
        "Convoyage BZH, basé à Quimper. Prise en charge partout en France et en Europe, remise chez le client. Particuliers et professionnels. Devis sous 2 h.",
      path: "/",
      image: "/images/convoyage-berline-bretagne.jpg",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Qui êtes-vous ?",
    a: "Convoyage BZH, basé à Quimper. Clément pilote les missions. Convoyage, préparation, remise.",
  },
  {
    q: "Quels véhicules ?",
    a: "Particuliers et utilitaires jusqu’à 3,5 t, en état de marche, permis B.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Prise en charge et remise partout en France, et en Europe. Quimper est la base, pas un départ obligatoire.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Selon la distance, le véhicule et les options. La fourchette s’affiche après nom, téléphone et e-mail. Prix indicatif, à confirmer.",
  },
  {
    q: "La mise en main ?",
    a: "Offerte, à chaque remise.",
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
          <p className="text-xs font-semibold tracking-[0.28em] text-coral uppercase">Convoyage BZH</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-navy sm:text-7xl">
            Prendre. Conduire. Remettre.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-16 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <Reveal key={p.k}>
              <p className="font-display text-4xl text-navy">{p.t}</p>
              <p className="mt-3 text-lg text-muted">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-5xl text-navy sm:text-6xl">L’offre.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
            Le convoyage. Puis, si vous voulez, une option. Mise en main offerte.
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
            <p className="text-xs font-semibold tracking-[0.22em] text-surface/45 uppercase">Professionnels</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Concessions. Garages. Flottes.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-surface/70">
              Navettes atelier. Transferts inter-sites. Remise client final.
            </p>
            <Link
              to="/professionnels"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold"
            >
              Compte professionnel
            </Link>
          </div>
          <img
            src="/images/atelier-garage-professionnel.jpg"
            alt="Véhicule en atelier, convoyage professionnel"
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
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Jockey</p>
            <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">Gare. Aéroport.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Quimper, Brest, Lorient, Rennes. Le véhicule vous attend.
            </p>
            <Link to="/jockey-gares-aeroports" className="mt-10 inline-flex text-sm font-semibold text-coral">
              Voir le jockey
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-5xl text-navy sm:text-6xl">France. Europe.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
            Base Quimper. Prise en charge partout.
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
          <h2 className="font-display text-5xl text-navy">Quatre étapes.</h2>
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
