import { createFileRoute } from "@tanstack/react-router";
import { Simulator } from "@/components/Simulator";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

type Search = { from?: string; to?: string };

export const Route = createFileRoute("/simulateur")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    from: typeof s.from === "string" ? s.from : "",
    to: typeof s.to === "string" ? s.to : "",
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
  const { from, to } = Route.useSearch();
  return (
    <main>
      <PageHero
        kicker="Simulateur"
        title="Le prix, une fois"
        accent="vos coordonnées."
        text="Chaque véhicule est unique. Gabarit, motorisation, assurance, préparation. Nom, téléphone et e-mail, puis fourchette, PDF et confirmation sous 2 h ouvrées."
      />
      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Simulator initialFrom={from ?? "Quimper"} initialTo={to ?? ""} />
      </section>
    </main>
  );
}
