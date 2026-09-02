import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { CASES } from "@/lib/cases";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/missions")({
  head: () =>
    pageHead({
      title: "Missions de convoyage. Cas concrets | Convoyage BZH",
      description:
        "Exemples de missions : achat Leboncoin, import Belgique, livraison concession, navette CT, conciergerie gare. Base Quimper, Bretagne, France, Europe.",
      path: "/missions",
      image: "/images/convoyage-voiture-france.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Missions"
        title="Ce qu’on fait."
        accent="Concrètement."
        text="Des cas types. Particuliers, professionnels, conciergerie. Le prix se calcule au simulateur, après vos coordonnées."
        image="/images/convoyage-voiture-france.jpg"
        alt="Convoyage d’une berline sur route"
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.id} className="flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface">
              <img src={c.image} alt={c.alt} className="h-56 w-full object-cover" />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">
                  {c.tag} · {c.pack}
                </p>
                <h2 className="mt-3 font-display text-2xl text-navy">{c.title}</h2>
                <p className="mt-2 text-sm text-muted">{c.lead}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{c.story}</p>
                <Link
                  to="/simulateur"
                  search={{
                    from: c.from,
                    to: c.to,
                    mission: c.mission ?? "",
                  }}
                  className="mt-7 inline-flex h-12 w-fit items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
                >
                  Chiffrer un cas similaire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBar
        title="Un cas qui ressemble au vôtre ?"
        text="Le simulateur prépare la fourchette. Devis ferme sous 2 heures ouvrées."
      />
    </main>
  );
}
