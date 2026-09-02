import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import { PILLARS, PROCESS, B2B_OFFERS, PACKS_PART, PACKS_PRO, PRESTIGE_PROTOCOL, WHY_PRO_DRIVER } from "@/lib/offers";
import { formatEuro } from "@/lib/utils";
import { featuredCases } from "@/lib/cases";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage BZH | Convoyage automobile à Quimper, Cornouaille | Bretagne, France, Europe",
      description:
        "Convoyeur professionnel à Quimper. Packs particuliers et professionnels, conciergerie de véhicules en Bretagne 7j/7. Mise en main offerte. Devis après coordonnées.",
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
    a: "Base Quimper. Trajet, approche si le départ n’est pas à Quimper, retour du chauffeur en aller simple. Packs particuliers et professionnels. Fourchette après nom, téléphone et e-mail. Devis ferme sous 2 heures.",
  },
  {
    q: "Pourquoi pas un particulier à 60 € ?",
    a: "Un particulier n’est pas assuré comme un professionnel, ne fait pas d’état des lieux photo, ne fait pas la mise en main. Nous facturons un chauffeur, des photos, un créneau tenu.",
  },
  {
    q: "La mise en main est-elle facturée ?",
    a: "Non. Le protocole de mise en main est offert à chaque remise.",
  },
];

function Home() {
  return (
    <main>
      <HeroStage />

      <section className="mx-auto max-w-5xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-coral uppercase">Prestations</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-navy sm:text-5xl">
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

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Trois packs. Deux clientèles.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Plus d’à la carte sur le convoyage. Un particulier n’a pas besoin d’un coffret terroir. Un concessionnaire n’a pas besoin d’un plein pour la route. Mise en main offerte.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Particulier</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PART.map((p) => (
                <div key={p.id} className="flex items-baseline justify-between gap-6 py-6">
                  <div>
                    <p className="text-lg text-navy">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.items.slice(1).join(". ")}.</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{p.from === 0 ? "Trajet" : `+ ${formatEuro(p.from)}`}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Professionnel</p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {PACKS_PRO.map((p) => (
                <div key={p.id} className="flex items-baseline justify-between gap-6 py-6">
                  <div>
                    <p className="text-lg text-navy">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.items.slice(1).join(". ")}.</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{p.from === 0 ? "Trajet" : `+ ${formatEuro(p.from)}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
          to="/simulateur"
          className="mt-12 inline-flex h-12 items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
        >
          Obtenir un devis
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-coral uppercase">Missions</p>
          <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">Ce qu’on fait, concrètement.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Achat à distance, Paris, Nice, Varsovie, location, accompagnement à l’achat. Le prix se calcule au simulateur.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredCases().map((c) => (
            <Link
              key={c.id}
              to="/missions"
              className="group overflow-hidden rounded-[1.8rem] border border-line bg-surface"
            >
              <img src={c.image} alt={c.alt} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">
                  {c.tag} · {c.pack}
                </p>
                <p className="mt-3 font-display text-xl text-navy">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.lead}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/missions" className="mt-8 inline-flex text-sm font-semibold text-coral hover:underline">
          Toutes les missions
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Un professionnel. Pas un particulier.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Les plateformes à 60 € mettent un conducteur amateur au volant. Nous non.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PRO_DRIVER.map((w) => (
            <div key={w.t}>
              <p className="font-display text-2xl text-navy">{w.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
        <div className="overflow-hidden rounded-[2.4rem] bg-navy text-surface lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-surface/50 uppercase">Réseaux automobiles</p>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Concessions, garages, flottes.
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-white/70">
              {B2B_OFFERS.map((o) => (
                <li key={o.t}>
                  <span className="font-semibold text-white">{o.t}.</span> {o.d}
                </li>
              ))}
            </ul>
            <Link
              to="/simulateur"
              className="mt-2 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
            >
              Obtenir un devis
            </Link>
          </div>
          <img
            src="/images/atelier-garage-professionnel.jpg?v=propre"
            alt="Berline propre dans un atelier automobile professionnel"
            className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[22rem]"
          />
        </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
        <div className="overflow-hidden rounded-[2.4rem] bg-sand lg:grid lg:grid-cols-2">
          <img
            src="/images/jockey-gare-quimper.jpg"
            alt="Berline sur le parvis d’une gare"
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="flex flex-col justify-center p-12 sm:p-16">
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Conciergerie</p>
            <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">Conciergerie de véhicules.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Bretagne. Gare, atelier, flotte, prestige. Le devis se fait sur dossier.
            </p>
            <Link
              to="/jockey-gares-aeroports"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
            >
              Réserver une conciergerie
            </Link>
          </div>
        </div>
        </Reveal>
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
              ["/convoyage-concarneau", "Concarneau"],
              ["/convoyage-brest", "Brest"],
              ["/convoyage-lorient", "Lorient"],
              ["/convoyage-vannes", "Vannes"],
              ["/convoyage-rennes", "Rennes"],
              ["/convoyage-nantes", "Nantes"],
              ["/convoyage-paris", "Paris"],
              ["/convoyage-lyon", "Lyon"],
              ["/convoyage-bordeaux", "Bordeaux"],
              ["/convoyage-pologne", "Pologne"],
              ["/convoyage-monaco", "Monaco"],
              ["/convoyage-belgique", "Belgique"],
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

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-coral uppercase">{PRESTIGE_PROTOCOL.kicker}</p>
          <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">{PRESTIGE_PROTOCOL.name}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{PRESTIGE_PROTOCOL.promise}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRESTIGE_PROTOCOL.items.map((item) => (
            <div key={item.t} className="rounded-[1.8rem] border border-line bg-surface p-7">
              <p className="font-display text-2xl text-navy">{item.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{PRESTIGE_PROTOCOL.disclaimer}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <AppLink to={PRESTIGE_PROTOCOL.href} className="text-sm font-semibold text-coral hover:underline">
            En savoir plus
          </AppLink>
          <Link
            to="/simulateur"
            className="inline-flex h-12 items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
          >
            {PRESTIGE_PROTOCOL.cta}
          </Link>
        </div>
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
