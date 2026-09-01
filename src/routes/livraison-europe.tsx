import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { EUROPE_DISPLAY } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/livraison-europe")({
  head: () => ({
    meta: [
      { title: "Livraison de véhicules en Europe · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Convoyage Europe depuis Quimper. Belgique, Suisse, Allemagne, Espagne, Italie, Royaume-Uni. Devis écrit." },
    ],
  }),
  component: Page,
});

const COUNTRIES = [
  ["/convoyage-belgique", "Belgique"],
  ["/convoyage-suisse", "Suisse"],
  ["/convoyage-luxembourg", "Luxembourg"],
  ["/convoyage-allemagne", "Allemagne"],
  ["/convoyage-espagne", "Espagne"],
  ["/convoyage-italie", "Italie"],
  ["/convoyage-pays-bas", "Pays-Bas"],
  ["/convoyage-royaume-uni", "Royaume-Uni"],
] as const;

function Page() {
  return (
    <main>
      <PageHero
        kicker="Europe"
        title="Le même standard,"
        accent="au-delà des frontières."
        text="Majoration +20 % + forfait frontalier 90 €. Devis écrit hors exemples."
        image="/images/04_europe_nuit.jpg"
        alt="Convoyage de nuit sur autoroute européenne"
      />
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-sm">
            <thead className="bg-navy text-surface">
              <tr>
                <th className="px-4 py-3 text-left">Destination</th>
                <th className="px-4 py-3 text-right">Exemple TTC</th>
              </tr>
            </thead>
            <tbody>
              {EUROPE_DISPLAY.map((r) => (
                <tr key={r.name} className="odd:bg-sand/50">
                  <td className="px-4 py-2.5 text-navy">{r.name}</td>
                  <td className="px-4 py-2.5 text-right font-semibold tabular-nums">{formatEuro(r.prix)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {COUNTRIES.map(([to, label]) => (
            <AppLink
              key={to}
              to={to}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
            >
              {label}
            </AppLink>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Documents : carte grise ou mandat, assurance, carte verte selon le pays, contrôle technique à jour.
          Royaume-Uni : ferry inclus dans l’exemple Londres.
        </p>
      </section>
      <CtaBar />
    </main>
  );
}
