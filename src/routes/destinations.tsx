import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations")({
  head: () =>
    pageHead({
      title: "Destinations | Bretagne, France, Europe | Convoyage BZH",
      description:
        "Convoyage de véhicules en Bretagne, en France et en Europe. Prise en charge à l’adresse du véhicule. Base Quimper. Devis immédiat.",
      path: "/destinations",
    }),
  component: Page,
});

const GROUPS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Bretagne et Grand Ouest",
    links: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-lorient", label: "Lorient" },
      { to: "/convoyage-vannes", label: "Vannes" },
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/convoyage-nantes", label: "Nantes" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
    ],
  },
  {
    title: "France",
    links: [
      { to: "/convoyage-paris", label: "Paris" },
      { to: "/convoyage-lyon", label: "Lyon" },
      { to: "/convoyage-bordeaux", label: "Bordeaux" },
      { to: "/convoyage-toulouse", label: "Toulouse" },
      { to: "/convoyage-marseille", label: "Marseille" },
      { to: "/convoyage-nice", label: "Nice" },
      { to: "/convoyage-lille", label: "Lille" },
    ],
  },
  {
    title: "Europe",
    links: [
      { to: "/convoyage-belgique", label: "Belgique" },
      { to: "/convoyage-allemagne", label: "Allemagne" },
      { to: "/convoyage-espagne", label: "Espagne" },
      { to: "/convoyage-italie", label: "Italie" },
      { to: "/convoyage-suisse", label: "Suisse" },
      { to: "/convoyage-monaco", label: "Monaco" },
      { to: "/livraison-europe", label: "Europe" },
    ],
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Destinations"
        title="Zones d’intervention"
        text="Le véhicule est pris en charge à l’adresse indiquée et remis au destinataire. Quimper est la base opérationnelle, pas un départ obligatoire. Le devis est immédiat. Vous signez en ligne."
      />
      {GROUPS.map((g) => (
        <section key={g.title} className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
          <h2 className="font-display text-2xl tracking-tight text-navy">{g.title}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {g.links.map((l) => (
              <AppLink
                key={l.to}
                to={l.to}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
              >
                {l.label}
              </AppLink>
            ))}
          </div>
        </section>
      ))}
      <CtaBar />
    </main>
  );
}
