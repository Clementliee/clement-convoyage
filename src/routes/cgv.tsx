import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cgv")({
  head: () => ({ meta: [{ title: "CGV · CLÉMENT CONVOYAGE" }] }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Conditions générales de vente</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>Devis valable 15 jours. La mission est confirmée à l’accord écrit.</p>
        <p>Particuliers : 100 % par virement avant départ. Pas de mission sans encaissement.</p>
        <p>
          Professionnels : virement à 15 jours fin de mission. Premier dossier : acompte 50 % possible.
          Retard : pénalités légales et indemnité de 40 €.
        </p>
        <p>
          Annulation : gratuite jusqu’à 24 h avant la prise en charge. Moins de 24 h : 50 %. Convoyeur
          déjà en route : 100 %.
        </p>
        <p>
          Véhicule : en état de marche, assuré, CT à jour si obligatoire, carte grise ou copie,
          carburant pour 50 km. Non-roulant refusé.
        </p>
        <p>État des lieux photo au départ et à l’arrivée. Sans réserve signée, le véhicule est réputé livré conforme.</p>
        <p>Hors champ : poids lourds, plateau, non-roulant, hors Europe.</p>
      </div>
    </main>
  );
}
