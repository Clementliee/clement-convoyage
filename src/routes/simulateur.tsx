import { createFileRoute } from "@tanstack/react-router";
import { Simulator } from "@/components/Simulator";
import { PageHero } from "@/components/PageHero";

type Search = { from?: string; to?: string };

export const Route = createFileRoute("/simulateur")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    from: typeof s.from === "string" ? s.from : "",
    to: typeof s.to === "string" ? s.to : "",
  }),
  head: () => ({
    meta: [
      { title: "Simulateur de coût · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Estimez un convoyage depuis Quimper. Fourchette indicative après vos coordonnées, PDF et e-mail." },
    ],
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
        text="Sept questions, puis nom, prénom, téléphone et e-mail. Fourchette indicative, PDF et confirmation par mail."
      />
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <Simulator initialFrom={from ?? "Quimper"} initialTo={to ?? ""} />
      </section>
    </main>
  );
}
