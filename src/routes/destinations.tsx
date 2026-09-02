import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { seoByKind } from "@/lib/seo-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations")({
  head: () =>
    pageHead({
      title: "Destinations | Bretagne, France, Europe | Convoyage BZH",
      description:
        "Convoyage de véhicules en Bretagne, en France et en Europe. Prise en charge à l’adresse du véhicule. Base Quimper. Devis sur dossier.",
      path: "/destinations",
    }),
  component: Page,
});

function Group({
  title,
  kind,
}: {
  title: string;
  kind: "ville" | "region" | "france" | "europe" | "metier";
}) {
  const pages = seoByKind(kind);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <h2 className="font-display text-2xl tracking-tight text-navy">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {pages.map((p) => (
          <AppLink
            key={p.slug}
            to={`/${p.slug}`}
            className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
          >
            {p.kind === "metier" || p.kind === "france" || p.kind === "region"
              ? p.h1
              : (p.locality ?? p.country ?? p.h1)}
          </AppLink>
        ))}
      </div>
    </section>
  );
}

function Page() {
  return (
    <main>
      <PageHero
        kicker="Destinations"
        title="Zones d’intervention"
        text="Le véhicule est pris en charge à l’adresse indiquée et remis au destinataire. Quimper est la base opérationnelle, pas un départ obligatoire. Le devis est établi sur dossier."
      />
      <Group title="Villes" kind="ville" />
      <Group title="Territoires" kind="region" />
      <Group title="France" kind="france" />
      <Group title="Europe" kind="europe" />
      <Group title="Métiers" kind="metier" />
      <CtaBar />
    </main>
  );
}
