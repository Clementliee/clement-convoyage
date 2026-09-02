import { createFileRoute } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      title: "FAQ convoyage automobile. Convoyage BZH",
      description:
        "Questions sur le convoyage de voiture. Prix, véhicules, zones, professionnels, GPS, packs, paiement. Base Quimper, missions partout.",
      path: "/faq",
    }),
  component: Page,
});

const ITEMS = [
  { q: "Qui est Convoyage BZH ?", a: "Un convoyeur automobile basé à Quimper, en Cornouaille. Clément conduit. Remise comme en concession." },
  { q: "Quels véhicules ?", a: "Particuliers et utilitaires jusqu’à 3,5 t, en état de marche. Pas de plateau, pas de non-roulant." },
  { q: "Où ?", a: "Prise en charge et remise partout en France, et en Europe. Quimper est la base, pas un départ obligatoire." },
  { q: "Combien ?", a: "Le simulateur calcule depuis Quimper. Fourchette après nom, téléphone et e-mail. Devis ferme sous 2 heures ouvrées." },
  { q: "Pourquoi plus cher qu’une plateforme à 60 € ?", a: "Parce que c’est un chauffeur professionnel, pas un particulier. Photos, assurance tous risques, mise en main, créneau tenu." },
  { q: "Comment se passe une mission ?", a: "Demande, devis, prise en charge, convoyage, remise, compte-rendu." },
  { q: "Professionnels ?", a: "Oui. Packs Atelier, Livraison client, Signature réseau. Facture à quinze jours. Garages, mandataires, marchands VO, loueurs, flottes." },
  { q: "GPS ?", a: "Inclus au Pack Sécurisé : traceur 4G cédé, 12 mois de suivi. Sur le Pack Signature réseau : GPS le temps de la mission." },
  { q: "C’est de la sécurité privée ?", a: "Non. C’est un cadre de convoyage : photos, scellés des clés et documents, GPS le temps de la mission. Pas de protection de personnes, pas de transport de fonds." },
  { q: "Paiement ?", a: "Particulier : virement avant départ. Professionnel : quinze jours." },
  { q: "Week-end ?", a: "Oui, tous les jours, selon créneau." },
];

function Page() {
  return (
    <main>
      <PageHero kicker="FAQ" title="Les réponses utiles." text="Prix, zones, véhicules, professionnels. Sans superlatifs." />
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <Faq items={ITEMS} />
        <FaqJsonLd items={ITEMS} />
      </section>
      <CtaBar />
    </main>
  );
}
