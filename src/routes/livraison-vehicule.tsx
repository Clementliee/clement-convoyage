import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/livraison-vehicule")({
  head: () => ({
    meta: [
      { title: "Livraison de véhicules France · CLÉMENT CONVOYAGE" },
      {
        name: "description",
        content:
          "Convoyage VL et utilitaires ≤ 3,5 t partout en France depuis Quimper. Carburant, péages, EDL photo. Fourchette après vos coordonnées.",
      },
    ],
  }),
  component: Page,
});

const CITIES = [
  ["/convoyage-quimper", "Quimper"],
  ["/convoyage-brest", "Brest"],
  ["/convoyage-rennes", "Rennes"],
  ["/convoyage-nantes", "Nantes"],
  ["/convoyage-paris", "Paris"],
  ["/convoyage-lyon", "Lyon"],
  ["/convoyage-bordeaux", "Bordeaux"],
  ["/convoyage-toulouse", "Toulouse"],
  ["/convoyage-marseille", "Marseille"],
  ["/convoyage-nice", "Nice"],
  ["/convoyage-lille", "Lille"],
  ["/convoyage-strasbourg", "Strasbourg"],
] as const;

function Page() {
  return (
    <main>
      <PageHero
        kicker="Livraison France"
        title="Convoyage en conduite,"
        accent="A vers B."
        text="Véhicules légers et utilitaires ≤ 3,5 t, en état de marche. Le prix n’est pas affiché."
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
          <p className="mt-3 text-muted">Plateau, non-roulant, poids lourd. International : voir Europe.</p>
        </div>
        <div className="rounded-[1.6rem] border border-line bg-surface p-6">
          <p className="font-display text-xl text-navy">Pas de grille publique</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Chaque trajet a un retour à vide, un créneau et un véhicule différents. La fourchette
            s’affiche après vos coordonnées, à confirmer avec un professionnel.
          </p>
          <Link to="/simulateur" className="mt-5 inline-flex text-sm font-semibold text-coral">
            Lancer le simulateur →
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-2xl text-navy">Villes desservies</h2>
        <p className="mt-2 text-sm text-muted">Chaque ville a sa page. Aucun tarif n’y figure.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {CITIES.map(([to, label]) => (
            <AppLink
              key={to}
              to={to}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
            >
              {label}
            </AppLink>
          ))}
          <AppLink
            to="/destinations"
            className="rounded-full border border-navy bg-navy px-4 py-2 text-sm text-surface"
          >
            Toutes les destinations →
          </AppLink>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
