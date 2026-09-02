import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { pageHead } from "@/lib/seo";
import { CONVOYAGE_STEPS } from "@/lib/convoyage";
import { featuredCases } from "@/lib/cases";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage BZH | Convoyage automobile à Quimper | France, Europe",
      description:
        "Convoyeur professionnel à Quimper. France et Europe. Conciergerie de véhicules en Bretagne. Devis ou appel. Mise en main offerte.",
      path: "/",
      image: "/images/convoyage-berline-bretagne.jpg",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "En France et en Europe. Le véhicule est pris en charge à l’adresse où il se trouve. Quimper est la base opérationnelle, pas un départ obligatoire.",
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
    q: "Comment obtenir un devis ?",
    a: "Par le formulaire en ligne, après communication de vos coordonnées, ou par téléphone.",
  },
];

function Home() {
  const featured = featuredCases().slice(0, 3);

  return (
    <main>
      <HeroStage />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Prestations</p>
        <RiseWords
          text="Convoyage et conciergerie"
          className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-5xl"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-navy text-surface">
              <img src="/images/mission-audi-a4.jpg" alt="Audi A4 en convoyage" className="h-48 w-full object-cover" />
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">Convoyage</p>
                <h2 className="mt-3 font-display text-3xl text-white">Acheminement en France et en Europe</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                  Le véhicule est pris en charge à l’adresse indiquée et remis au destinataire. Particuliers et
                  professionnels. État des lieux photographique. Mise en main offerte.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/simulateur"
                    className="inline-flex h-12 items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    to="/prestations"
                    className="inline-flex h-12 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white"
                  >
                    Les prestations
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
              <img
                src="/images/mission-tiguan-gare.jpg"
                alt="Conciergerie gare"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Conciergerie</p>
                <h2 className="mt-3 font-display text-3xl text-navy">Conciergerie automobile en Bretagne</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  Gares, ateliers, flottes et véhicules de prestige. Nous déplaçons le véhicule. Pas de gardiennage, ni
                  de transport de passagers.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/simulateur"
                    search={{ mission: "jockey" }}
                    className="inline-flex h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-white"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    to="/jockey-gares-aeroports"
                    className="inline-flex h-12 items-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
                  >
                    La conciergerie
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
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

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Missions</p>
        <RiseWords text="Exemples de missions" className="mt-4 font-display text-3xl text-navy sm:text-5xl" />
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

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
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
            <Link
              to="/simulateur"
              className="inline-flex h-12 items-center justify-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 font-display text-4xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <div className="mb-10">
        <CtaBar title="Un véhicule à acheminer ?" text="Le devis est établi après étude du trajet. Vous pouvez également nous appeler." />
      </div>
    </main>
  );
}