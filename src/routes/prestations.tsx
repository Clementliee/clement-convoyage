import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: "Prestations · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Livraison France, nettoyage, livraison Europe. Convoyage premium depuis Quimper." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Prestations"
        title="Trois piliers."
        accent="Un seul standard."
        text="Livraison, préparation, Europe. Le même niveau de remise qu’en concession."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link key={s.to} to={s.to} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img src={s.image} alt={s.alt} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
              <p className="mt-3 text-sm font-semibold text-coral">Voir la solution →</p>
            </div>
          </Link>
        ))}
      </section>
      <CtaBar />
    </main>
  );
}
