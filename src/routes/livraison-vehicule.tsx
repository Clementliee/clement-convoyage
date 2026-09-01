import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { FORFAITS_DISPLAY } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/livraison-vehicule")({
  head: () => ({
    meta: [
      { title: "Livraison de véhicules France · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Convoyage VL et utilitaires ≤ 3,5 t partout en France depuis Quimper. Carburant, péages, EDL photo inclus." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Livraison France"
        title="Convoyage en conduite,"
        accent="A vers B."
        text="Véhicules légers et utilitaires ≤ 3,5 t, en état de marche."
        image="/images/02_remise_cles.jpg"
        alt="Remise des clés d’un véhicule convoyé"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-navy">Inclus</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {[
              "Conduite professionnelle A → B",
              "Carburant du véhicule convoyé",
              "Péages du trajet",
              "Retour du convoyeur",
              "État des lieux photo",
              "Remise des clés et documents",
            ].map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-2xl text-navy">Hors champ</h2>
          <p className="mt-3 text-muted">Plateau, non-roulant, poids lourd, international hors Europe.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-sm">
            <thead className="bg-navy text-surface">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Depuis Quimper</th>
                <th className="px-4 py-3 text-right font-medium">Tarif TTC</th>
              </tr>
            </thead>
            <tbody>
              {FORFAITS_DISPLAY.map((r) => (
                <tr key={r.name} className="odd:bg-sand/50">
                  <td className="px-4 py-2.5 text-navy">{r.name}</td>
                  <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-navy">
                    {formatEuro(r.prix)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
