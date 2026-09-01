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
      { name: "description", content: "Estimez le prix d’un convoyage depuis Quimper. 7 questions, tarif TTC indicatif, devis ferme sous 2 h." },
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
        title="Le prix avant"
        accent="de partir."
        text="Sept questions. Estimation TTC. Devis ferme sous 2 heures ouvrées."
      />
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
        <Simulator initialFrom={from ?? "Quimper"} initialTo={to ?? ""} />
      </section>
    </main>
  );
}
