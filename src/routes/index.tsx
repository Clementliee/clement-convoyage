import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { QuoteCta } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { SecteurPoles } from "@/components/SecteurSection";
import { pageHead } from "@/lib/seo";
import { CONVOYAGE_STEPS } from "@/lib/convoyage";
import { featuredCases } from "@/lib/cases";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage BZH | Convoyage automobile à Quimper | France, Europe",
      description:
        "Convoyeur professionnel à Quimper. France et Europe. Conciergerie en Bretagne. Devis en une minute, à signer en ligne.",
      path: "/",
      image: "/images/convoyage-berline-bretagne.jpg",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Le quotidien se joue en Bretagne : Quimper, Brest, Lorient, Vannes, Rennes, Nantes. Le convoyage continue ensuite en France et en Europe. La conciergerie s’arrête à cette zone. Quimper est la base, pas un départ obligatoire.",
  },
  {
    q: "Quelle est la différence entre convoyage et conciergerie ?",
    a: "Le convoyage consiste à acheminer un véhicule d’un point à un autre, en France ou en Europe. La conciergerie couvre les déplacements locaux en Bretagne : gare, atelier, flotte, véhicules de prestige.",
  },
  {
    q: "Qui conduit le véhicule ?",
    a: "Un chauffeur professionnel, assuré en tous risques. Un état des lieux photographique est établi. La mise en main à la remise est offerte.",
  },
  {
    q: "Combien de temps pour le devis ?",
    a: "Une minute. Trajet, coordonnées, le montant s’affiche et part par e-mail. Vous signez. Nous confirmons le créneau, pas le prix.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Sur le simulateur. Trajet, vos coordonnées, le montant s’affiche. Un e-mail part tout de suite. Vous signez en ligne. Pas d’attente.",
  },
];

function Home() {
  const featured = featuredCases().slice(0, 3);

  return (
    <main>
      <HeroStage />

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Vous êtes</p>
        <RiseWords text="Particulier ou professionnel" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-5xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-navy text-surface">
              <img src="/images/mission-308.jpg" alt="Peugeot 308 en convoyage" className="h-28 w-full object-cover sm:h-48" />
              <div className="flex flex-1 flex-col p-5 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">Particulier</p>
                <h2 className="mt-3 font-display text-3xl text-white">Faire livrer mon véhicule</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/70 sm:mt-4 sm:line-clamp-none">
                  Achat à distance, mutation, import. Prise en charge à l’adresse du véhicule, remise à domicile. État des
                  lieux photographique. Mise en main offerte.
                </p>
                <QuoteCta search={{ mission: "convoyage", client: "part" }} className="mt-8">
                  Chiffrer une livraison particulière
                </QuoteCta>
              </div>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
              <img src="/images/mission-bmw-x3.jpg" alt="Livraison concession" className="h-28 w-full object-cover sm:h-48" />
              <div className="flex flex-1 flex-col p-5 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Professionnel</p>
                <h2 className="mt-3 font-display text-3xl text-navy">Externaliser mes convoyages</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted sm:mt-4 sm:line-clamp-none">
                  Concessions, garages, mandataires, loueurs. Votre vendeur vend. Votre mécanicien reste au banc. Nous
                  déplaçons le véhicule.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <QuoteCta search={{ mission: "convoyage", client: "pro" }} variant="navy">
                    Chiffrer une mission professionnelle
                  </QuoteCta>
                  <Link
                    to="/professionnels"
                    className="inline-flex h-12 items-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
                  >
                    Offre professionnelle
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Trois offres</p>
        <RiseWords text="Convoyage, livraison, conciergerie" className="mt-4 max-w-2xl font-display text-3xl text-navy sm:text-5xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              k: "Convoyage",
              t: "D’un point à un autre",
              d: "Prise en charge, conduite, péages, carburant, retour du chauffeur, état des lieux, remise des clés. Bretagne d’abord, puis la France et l’Europe.",
              to: "/prestations" as const,
              link: "Détail des convoyages",
              cta: "Chiffrer un trajet",
              search: { mission: "convoyage" },
            },
            {
              k: "Livraison",
              t: "L’expérience client",
              d: "Tout le convoyage, plus nettoyage, plein ou recharge, mise en main, compte rendu. Coffret et vidéo sur demande.",
              to: "/prestations" as const,
              link: "Voir les formules",
              cta: "Déléguer une livraison",
              search: { mission: "convoyage", client: "pro" },
            },
            {
              k: "Conciergerie",
              t: "Le véhicule, sans vous",
              d: "Gares, ateliers, location, flotte, inspection avant achat. Bretagne. Pas de gardiennage.",
              to: "/jockey-gares-aeroports" as const,
              link: "Détail de la conciergerie",
              cta: "Chiffrer une conciergerie",
              search: { mission: "jockey" },
            },
          ].map((o) => (
            <Reveal key={o.k}>
              <article className="flex h-full flex-col rounded-[1.6rem] border border-line bg-surface p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{o.k}</p>
                <h3 className="mt-3 font-display text-2xl text-navy">{o.t}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{o.d}</p>
                <QuoteCta search={o.search} className="mt-6">
                  {o.cta}
                </QuoteCta>
                <Link to={o.to} className="mt-4 text-sm font-semibold text-navy hover:underline">
                  {o.link}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Secteur</p>
        <RiseWords text="Bretagne, Rennes, Nantes" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-5xl" />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Quimper est la base. Cornouaille, Finistère, Morbihan, jusqu’à Rennes et Nantes. Le convoyage continue ensuite
          en France et en Europe. La conciergerie, elle, s’arrête ici. Chaque ville ouvre le devis, déjà orienté.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {[
            { from: "Quimper", to: "Brest", d: "N165. Jour même possible. VO, SAV, achat entre particuliers.", cta: "Chiffrer Quimper – Brest" },
            { from: "Quimper", to: "Lorient", d: "Est du Finistère. Utilitaires, concessions, ateliers.", cta: "Chiffrer Quimper – Lorient" },
            { from: "Quimper", to: "Rennes", d: "Mandataires, Leboncoin. Le client n’a pas à prendre le TGV.", cta: "Chiffrer Quimper – Rennes" },
            { from: "Quimper", to: "Nantes", d: "Grand Ouest. Même protocole. Conciergerie possible à l’arrivée.", cta: "Chiffrer Quimper – Nantes" },
            { from: "Brest", to: "Rennes", d: "Guipavas, Cesson. Approche depuis Quimper intégrée au devis.", cta: "Chiffrer Brest – Rennes" },
            { from: "Vannes", to: "Nantes", d: "Golfe vers Loire-Atlantique. Particuliers et stocks inter-sites.", cta: "Chiffrer Vannes – Nantes" },
          ].map((t) => (
            <article key={`${t.from}-${t.to}`} className="flex flex-col bg-surface p-7">
              <p className="font-display text-xl text-navy">
                {t.from}
                <span className="text-coral"> → </span>
                {t.to}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.d}</p>
              <QuoteCta search={{ mission: "convoyage", from: t.from, to: t.to }} variant="ghost" className="mt-6">
                {t.cta}
              </QuoteCta>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <QuoteCta search={{ mission: "convoyage", from: "Quimper" }}>Chiffrer un trajet du secteur</QuoteCta>
          <Link to="/destinations" className="inline-flex h-12 items-center text-sm font-semibold text-navy hover:underline">
            Voir le secteur en détail
          </Link>
        </div>
        <SecteurPoles className="mt-10" />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <div className="grid gap-10 rounded-[2rem] bg-sand p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Haute valeur</p>
            <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">Véhicules de prestige et atypiques</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Sportives, collection, imports, véhicules de haute valeur. Protocole renforcé : scellés, suivi GPS le temps
              de la mission, remise à la personne désignée, conduite adaptée. Ce n’est pas de la sécurité privée. C’est un
              cadre de prise en charge, pour que le véhicule n’ait pas n’importe qui au volant.
            </p>
            <QuoteCta search={{ mission: "convoyage", vehicle: "prestige" }} variant="navy" className="mt-8">
              Encadrer un véhicule de valeur
            </QuoteCta>
          </div>
          <img
            src="/images/mission-ds7-vauban.jpg"
            alt="DS 7 Vauban, véhicule de haute valeur en convoyage"
            className="h-64 w-full rounded-[1.4rem] object-cover sm:h-80"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Preuves</p>
        <RiseWords text="Ce que vous voyez, c’est ce que nous faisons" className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { src: "/images/mission-achat-inspection.jpg", alt: "Inspection photographique avant achat" },
            { src: "/images/remise-cles-vehicule.jpg", alt: "Remise des clés en main propre" },
            { src: "/images/etat-des-lieux-vehicule.jpg", alt: "État des lieux du véhicule" },
            {
              src: "/images/fondateur-clement-quimper.jpg",
              alt: "Clément, Convoyage BZH, Quimper",
              fit: "object-[50%_10%]",
            },
          ].map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className={`h-32 w-full rounded-[1.2rem] object-cover sm:h-44 sm:rounded-[1.4rem] ${"fit" in p ? p.fit : ""}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Méthode</p>
          <RiseWords text="Déroulement de la mission" className="mt-4 font-display text-3xl text-navy sm:text-5xl" />
          <ol className="mt-10">
            {CONVOYAGE_STEPS.map((s) => (
              <li key={s.n} className="grid gap-2 border-t border-line py-7 sm:grid-cols-[4.5rem_1fr]">
                <p className="font-display text-xl text-coral">{s.n}</p>
                <div>
                  <p className="font-display text-2xl text-navy">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Reveal>
          <HomeEstimator />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Missions</p>
        <RiseWords text="Missions réalisées" className="mt-4 font-display text-3xl text-navy sm:text-5xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((c) => (
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

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-24">
        <div className="flex flex-col gap-4 rounded-[2rem] bg-navy px-8 py-12 text-surface sm:flex-row sm:items-center sm:justify-between sm:px-14 sm:py-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">Prise de contact</p>
            <p className="mt-3 max-w-lg font-display text-3xl text-white sm:text-4xl">Un appel, ou une demande de devis</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-navy"
            >
              {SITE.phone}
            </a>
            <QuoteCta search={{ mission: "convoyage" }}>Chiffrer un trajet</QuoteCta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 font-display text-4xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <div className="mb-10">
        <CtaBar
          title="Un véhicule à acheminer ?"
          text="Le devis est établi après étude du trajet. Vous pouvez également nous appeler."
          primaryLabel="Chiffrer un trajet"
          primarySearch={{ mission: "convoyage" }}
        />
      </div>
    </main>
  );
}