import { createFileRoute } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";
import { SecteurSection } from "@/components/SecteurSection";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/destinations")({
  head: () =>
    pageHead({
      title: "Secteur Bretagne | Quimper, Brest, Lorient, Rennes, Nantes | Convoyage BZH",
      description:
        "Convoyage automobile en Bretagne et Grand Ouest. Quimper, Brest, Lorient, Vannes, Rennes, Nantes. Conciergerie sur le secteur. Devis immédiat.",
      path: "/destinations",
      image: "/images/mission-golf-brest.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        kicker="Secteur · Bretagne"
        title="Bretagne, Rennes, Nantes"
        text="Quimper est la base. Le quotidien se joue en Cornouaille, dans le Finistère, dans le Morbihan, jusqu’à Rennes et Nantes. Le convoyage continue ensuite en France et en Europe. Chaque pavé ouvre le devis, déjà orienté."
        image="/images/mission-golf-brest.jpg"
        alt="Volkswagen Golf 8 sur une 2×2 voies en Bretagne"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-16 sm:flex-row sm:px-8">
        <QuoteCta search={{ mission: "convoyage", from: "Quimper" }} className="h-14 px-8">
          Chiffrer un trajet du secteur
        </QuoteCta>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <SecteurSection mode="convoyage" heading={false} />

      <CtaBar
        title="Un véhicule à déplacer sur le secteur ?"
        text="Quimper, Brest, Lorient, Vannes, Rennes, Nantes. Indiquez le départ et l’arrivée. Le devis est immédiat."
        primaryLabel="Chiffrer un trajet"
        primarySearch={{ mission: "convoyage", from: "Quimper" }}
        secondaryTo="/contact"
        secondaryLabel="Nous écrire"
      />
    </main>
  );
}
