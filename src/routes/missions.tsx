import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { CASE_FILTERS, MISSION_CADRE, filterCases, type CaseFilter } from "@/lib/cases";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/missions")({
  head: () =>
    pageHead({
      title: "Missions | Convoyage et conciergerie | Convoyage BZH",
      description:
        "Missions de convoyage en France et en Europe, livraisons concession, imports, véhicules de prestige, conciergerie en Bretagne. Devis sur dossier.",
      path: "/missions",
      image: "/images/mission-audi-a4.jpg",
    }),
  component: Page,
});

function Page() {
  const [filter, setFilter] = useState<CaseFilter>("all");
  const rows = filterCases(filter);
  return (
    <main className="overflow-x-clip">
      <PageHero
        kicker="Missions"
        title="Missions réalisées"
        text="Acheminement en France et en Europe, livraisons concessions, imports, véhicules de prestige, conciergerie en Bretagne. Chaque mission est chiffrée sur dossier."
        image="/images/mission-audi-a4.jpg"
        alt="Audi A4 Avant en convoyage sur autoroute"
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Cadre</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl">Ce que nous convoyons. Ce que nous n’assurons pas.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Les missions ci-dessous sont des dossiers réels. Le cadre est le même à chaque fois : un véhicule roulant, un
          chauffeur dédié, un état des lieux, une remise en main propre. Le montant figure sur le devis, après vos
          coordonnées.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2">
          {MISSION_CADRE.map((item) => (
            <div key={item.t} className="bg-surface p-7 sm:p-8">
              <p className="font-display text-xl text-navy">{item.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <QuoteCta search={{ mission: "convoyage" }}>Chiffrer une mission</QuoteCta>
          <a
            href={SITE.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
          >
            {SITE.phone}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl overflow-x-hidden px-5 pb-20 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {CASE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                filter === f.id
                  ? "inline-flex h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
                  : "inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm text-navy"
              }
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {rows.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 90}>
              <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
                <img src={c.image} alt={c.alt} className="h-56 w-full object-cover" />
                <div className="flex min-w-0 flex-1 flex-col p-7 sm:p-8">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">
                    {c.tag} · {c.pack}
                  </p>
                  <h2 className="mt-3 font-display text-2xl break-words text-navy">{c.title}</h2>
                  <p className="mt-2 text-sm text-muted">{c.lead}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{c.story}</p>
                  {c.beats ? (
                    <ol className="mt-5 min-w-0 space-y-2">
                      {c.beats.map((b, n) => (
                        <li key={b} className="flex min-w-0 gap-3 text-sm leading-relaxed text-navy">
                          <span className="shrink-0 font-display text-coral">{String(n + 1).padStart(2, "0")}</span>
                          <span className="min-w-0">{b}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  <Link
                    to="/simulateur"
                    search={{
                      from: c.from,
                      to: c.to,
                      mission: c.mission ?? "",
                    }}
                    className="mt-7 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
                  >
                    Chiffrer cette mission
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBar
        title="Une mission comparable ?"
        text="Indiquez le départ et l’arrivée. Devis ferme sous deux heures ouvrées."
        primaryLabel="Chiffrer un trajet"
        primarySearch={{ mission: "convoyage" }}
      />
    </main>
  );
}
