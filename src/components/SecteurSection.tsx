import { AppLink } from "@/components/AppLink";
import { QuoteCta } from "@/components/QuoteCta";
import { RiseWords } from "@/components/RiseWords";
import { ServiceBlock } from "@/components/ServiceBlock";
import {
  SECTEUR_INTRO,
  SECTEUR_POINTS,
  SECTEUR_POLES,
  SECTEUR_TRAJETS,
  SECTEUR_ZONES,
} from "@/lib/secteur";
import { SITE } from "@/lib/site";

export function SecteurSection({
  mode = "convoyage",
  showTrajets = true,
  heading = true,
}: {
  mode?: "convoyage" | "concierge";
  showTrajets?: boolean;
  heading?: boolean;
}) {
  const blocks = mode === "concierge" ? SECTEUR_POINTS : SECTEUR_ZONES;
  const title = mode === "concierge" ? "Gares, aéroports, ateliers du secteur" : SECTEUR_INTRO.title;
  const text =
    mode === "concierge"
      ? "La conciergerie se joue ici, pas ailleurs. Quimper, Brest, Lorient, Vannes, Rennes, Nantes. Vous prenez le train ou l’avion. L’atelier reçoit le véhicule. Vous n’êtes pas au volant. Chaque pavé ouvre le devis, déjà orienté."
      : SECTEUR_INTRO.text;

  return (
    <section id="secteur" className="mx-auto max-w-6xl scroll-mt-28 px-5 pb-20 sm:px-8">
      {heading ? (
        <>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">{SECTEUR_INTRO.kicker}</p>
          <RiseWords text={title} className="mt-4 max-w-xl font-display text-3xl text-navy sm:text-4xl" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{text}</p>
        </>
      ) : null}

      <div className={`${heading ? "mt-8" : "mt-0"} flex flex-wrap gap-2`}>
        {SECTEUR_POLES.map((p) => (
          <QuoteCta key={p.label} search={mode === "concierge" ? { mission: "jockey", from: p.search.from } : p.search} variant="ghost">
            {p.label}
          </QuoteCta>
        ))}
      </div>

      <div className="mt-14 space-y-10">
        {blocks.map((item, i) => (
          <ServiceBlock key={item.id} item={item} reverse={i % 2 === 1} delay={(i % 2) * 80} />
        ))}
      </div>

      {showTrajets && mode === "convoyage" ? (
        <div className="mt-16">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Trajets du secteur</p>
          <h3 className="mt-3 max-w-xl font-display text-2xl text-navy sm:text-3xl">Les axes que nous tenons le plus souvent</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Quimper reste la base. Le véhicule, lui, est pris là où il se trouve. Chaque bouton ouvre le devis avec le
            départ et l’arrivée déjà indiqués. Le montant s’affiche après vos coordonnées.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2">
            {SECTEUR_TRAJETS.map((t) => (
              <article key={`${t.from}-${t.to}`} className="flex flex-col bg-surface p-7 sm:p-8">
                <p className="font-display text-xl text-navy">
                  {t.from}
                  <span className="text-coral"> → </span>
                  {t.to}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.d}</p>
                <QuoteCta search={t.search} variant="ghost" className="mt-6">
                  {t.cta}
                </QuoteCta>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <QuoteCta search={{ mission: mode === "concierge" ? "jockey" : "convoyage" }}>
          {mode === "concierge" ? "Chiffrer une conciergerie" : "Chiffrer un trajet du secteur"}
        </QuoteCta>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
        {mode === "convoyage" ? (
          <AppLink
            to="/destinations"
            className="inline-flex h-12 items-center rounded-full px-2 text-sm font-semibold text-navy hover:underline"
          >
            Toutes les villes du secteur
          </AppLink>
        ) : null}
      </div>
    </section>
  );
}

export function SecteurPoles({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Pôles</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {SECTEUR_POLES.map((p) => (
          <AppLink
            key={p.label}
            to={p.to}
            className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm text-navy hover:border-navy"
          >
            {p.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}
