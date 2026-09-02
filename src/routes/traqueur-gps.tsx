import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/traqueur-gps")({
  head: () =>
    pageHead({
      title: "Traceur GPS 4G | Convoyage BZH",
      description:
        "Traceur GPS 4G magnétique laissé dans le véhicule à la remise. Douze mois de suivi inclus. Option au devis. Convoyage BZH, Quimper.",
      path: "/traqueur-gps",
      image: "/images/balise-gps-4g-vehicule.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "C’est pour qui ?",
    a: "Pour l’acheteur. Le boîtier reste dans la voiture. Ce n’est pas pour suivre le convoyeur.",
  },
  {
    q: "Quel matériel ?",
    a: "Un traceur GPS 4G magnétique, sans perçage. Type PAJ ou Salind. Application sur le téléphone. Autonomie plusieurs jours à plusieurs semaines selon l’usage.",
  },
  {
    q: "Quel est le montant ?",
    a: "Il figure sur le devis. Matériel et douze mois de réseau 4G. Ensuite l’acquéreur paie l’abonnement s’il continue.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Option"
        title="Traceur GPS 4G"
        text="Posé à la remise, sans perçage. Douze mois de suivi inclus. L’acquéreur conserve le boîtier. Montant au devis."
        image="/images/balise-gps-4g-vehicule.jpg"
        alt="Traceur GPS 4G magnétique"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>
            L’acquéreur reçoit le véhicule avec un traceur 4G. L’application indique la position. En cas de vol, une localisation est disponible.
          </p>
          <p>
            Boîtier 4G magnétique, sans perçage de la carrosserie. Douze mois de suivi inclus. L’abonnement ultérieur est à la charge de l’acquéreur.
          </p>
          <p>
            Distinct du suivi temporaire d’une mission prestige, retiré à la remise. Les deux options peuvent se cumuler. Montant au devis.
          </p>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Demander un devis
          </Link>
        </div>
        <img src="/images/balise-gps-4g-vehicule.jpg" alt="Traceur GPS 4G" className="h-80 w-full rounded-[1.8rem] object-cover" />
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar />
    </main>
  );
}
