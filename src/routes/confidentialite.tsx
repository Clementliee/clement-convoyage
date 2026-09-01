import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({ meta: [{ title: "Confidentialité · CLÉMENT CONVOYAGE" }] }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Politique de confidentialité</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          Les données du formulaire (nom, téléphone, e-mail, trajet) servent uniquement à établir un
          devis et à exécuter la mission. Elles ne sont pas vendues.
        </p>
        <p>
          Base légale : mesures précontractuelles et intérêt légitime. Durée : le temps du devis puis
          des obligations comptables.
        </p>
        <p>
          Droits d’accès, rectification, suppression : {SITE.email}. Aucun cookie de tracking n’est
          déposé hors mesures techniques de l’hébergeur.
        </p>
      </div>
    </main>
  );
}
