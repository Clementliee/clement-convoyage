import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    pageHead({
      title: "Mentions légales. Convoyage BZH",
      description: `Mentions légales de Convoyage BZH. SIRET ${SITE.siret}, Quimper.`,
      path: "/mentions-legales",
    }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Mentions légales</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
        <p>
          L’enseigne {SITE.name} est éditée par {SITE.legalName}, {SITE.form}.
        </p>
        <p>
          Siège d’exploitation : {SITE.city}, {SITE.region}, France.
        </p>
        <p>
          SIREN {SITE.siren}. SIRET {SITE.siret}. Code APE {SITE.ape} ({SITE.apeLabel}). Immatriculation au RNE le {SITE.rne}.
        </p>
        <p>
          Activité de convoyage de véhicules par conduite sur route pour le compte de tiers, adjointe le 1er septembre 2026. {SITE.vat}.
        </p>
        <p>
          Directeur de la publication : {SITE.legalName}.
        </p>
        <p>
          Contact : {SITE.email}, {SITE.phone}.
        </p>
        <p>Hébergeur : {SITE.host}.</p>
        <p>
          Les estimations du simulateur sont indicatives. Elles n’engagent qu’après confirmation écrite sous 2 heures ouvrées.
        </p>
      </div>
    </main>
  );
}
