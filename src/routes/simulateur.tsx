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
      title: "Simulateur convoyage voiture. Fourchette depuis Quimper.",
      description:
        "Estimez un convoyage de voiture depuis Quimper. Sept questions, puis vos coordonnées. Fourchette indicative, PDF et e-mail.",
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
        title="Le prix, une fois"
        accent="vos coordonnées."
        text="Livraison, jockey gare ou aéroport. Les options ont un prix affiché. Le tarif final s’affiche après nom, téléphone et e-mail."
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
