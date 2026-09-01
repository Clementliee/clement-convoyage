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
        "Questions sur le convoyage de voiture depuis Quimper. Prix, véhicules, zones, professionnels, GPS, packs, paiement.",
      path: "/faq",
    }),
  component: Page,
});

const ITEMS = [
  { q: "Qui est Convoyage BZH ?", a: "Un convoyeur automobile basé à Quimper. Clément pilote. Expérience la remise en concession." },
  { q: "Quels véhicules ?", a: "Particuliers et utilitaires jusqu’à 3,5 t, en état de marche. Pas de plateau, pas de non-roulant." },
  { q: "Où ?", a: "Bretagne, France, Europe selon mission." },
  { q: "Combien ?", a: "Selon distance, véhicule, date, options. Fourchette après coordonnées. Packs à partir de 89 €, indicatifs." },
  { q: "Comment se passe une mission ?", a: "Demande, devis, prise en charge, convoyage, remise, compte-rendu. Protocole Clément." },
  { q: "Professionnels ?", a: "Oui. Compte, quinze jours, astreinte 24 h, cadre volume." },
  { q: "GPS ?", a: "Option. Suivi temporaire, retiré à la remise. Pas de sécurité privée." },
  { q: "Expertise ?", a: "Non. Contrôle visuel 20 points, photos." },
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
