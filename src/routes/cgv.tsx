import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cgv")({
  head: () =>
    pageHead({
      title: "Conditions générales. Convoyage BZH",
      description: `Conditions générales de vente de ${SITE.name}. Convoyage de véhicules depuis Quimper. ${SITE.vat}.`,
      path: "/cgv",
    }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Conditions générales de vente</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
        <p>
          Prestataire : {SITE.legalName}, {SITE.form}, enseigne {SITE.name}, nom commercial {SITE.tradeName}. SIRET {SITE.siret}. {SITE.city}, {SITE.region}. {SITE.vat}.
        </p>
        <p>Devis valable 7 jours. L’acceptation en ligne vaut accord sur le tarif. Le simulateur produit un devis immédiat. Nous confirmons le créneau selon disponibilité, pas le prix.</p>
        <p>Particuliers : 100 % par virement avant départ. Pas de mission sans encaissement.</p>
        <p>
          Professionnels : virement à 15 jours fin de mission. Premier dossier : acompte 50 % possible. Retard : pénalités légales et indemnité de 40 €.
        </p>
        <p>
          Annulation : gratuite jusqu’à 24 h avant la prise en charge. Moins de 24 h : 50 %. Convoyeur déjà en route : 100 %.
        </p>
        <p>
          Véhicule : en état de marche, assuré, contrôle technique à jour si obligatoire, carte grise ou copie, carburant pour 50 km. Non-roulant refusé. Hors champ : poids lourds, plateau, hors Europe hors devis spécifique.
        </p>
        <p>État des lieux photo au départ et à l’arrivée. Sans réserve signée, le véhicule est réputé livré conforme.</p>
        <p>La mise en main est offerte à chaque remise. Les options (formule, pack, lavage, GPS, coffret) figurent au devis.</p>
        <p>Contact : {SITE.email}, {SITE.phone}.</p>
      </div>
    </main>
  );
}
