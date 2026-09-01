import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/confidentialite")({
  head: () =>
    pageHead({
      title: "Confidentialité. Convoyage BZH",
      description: "Politique de confidentialité de Convoyage BZH. Données utilisées uniquement pour le devis. Pas de revente.",
      path: "/confidentialite",
    }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Politique de confidentialité</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
        <p>
          Responsable de traitement : {SITE.legalName}, {SITE.form}, SIRET {SITE.siret}, {SITE.city}, {SITE.region}.
        </p>
        <p>
          Les données du formulaire (prénom, nom, téléphone, e-mail, trajet, profil particulier ou professionnel, société) servent uniquement à établir un devis et à exécuter la mission. Elles sont envoyées à {SITE.email}. Elles ne sont pas vendues.
        </p>
        <p>
          Base légale : mesures précontractuelles et intérêt légitime. Durée : le temps du devis, puis les obligations comptables.
        </p>
        <p>
          Droits d’accès, rectification, suppression : {SITE.email} ou {SITE.phone}. Aucun cookie de tracking n’est déposé hors mesures techniques de l’hébergeur.
        </p>
      </div>
    </main>
  );
}
