import { createFileRoute } from "@tanstack/react-router";
import { Simulator } from "@/components/Simulator";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

type Search = { from?: string; to?: string; mission?: string };

export const Route = createFileRoute("/simulateur")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    from: typeof s.from === "string" ? s.from : "",
    to: typeof s.to === "string" ? s.to : "",
    mission: typeof s.mission === "string" ? s.mission : "",
  }),
  head: () =>
    pageHead({
      title: "Devis de convoyage | Simulateur France et Europe | Convoyage BZH",
      description:
        "Demandez un devis de convoyage. France et Europe. Formules particuliers et professionnels. Devis ferme sous deux heures ouvrées.",
      path: "/simulateur",
    }),
  component: Page,
});

function Page() {
  const { from, to, mission } = Route.useSearch();
  return (
    <main>
      <PageHero
        kicker="Simulateur"
        title="Demander un devis"
        text="Trajet, formule, puis vos coordonnées. Le montant s’affiche ensuite. Devis ferme sous deux heures ouvrées."
      />
      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Simulator
          initialFrom={from ?? "Quimper"}
          initialTo={to ?? ""}
          initialMission={mission === "jockey" ? "jockey" : ""}
        />
      </section>
    </main>
  );
}
