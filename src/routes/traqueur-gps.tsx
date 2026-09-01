import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { OPTIONS } from "@/lib/tarifs";

export const Route = createFileRoute("/traqueur-gps")({
  head: () =>
    pageHead({
      title: "Traqueur GPS 4G pour l’acheteur. 199 € à la livraison.",
      description:
        "Option 199 € : traceur GPS 4G magnétique laissé dans le véhicule. L’acheteur le garde. 12 mois de suivi inclus. Convoyage BZH, Quimper.",
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
    q: "Pourquoi 199 € ?",
    a: "Le matériel et 12 mois de réseau 4G. Ensuite l’acheteur paie l’abonnement, environ 5 à 6 € par mois, s’il continue.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker={`Option, ${OPTIONS.gps} €`}
        title="Un GPS 4G pour l’acheteur."
        accent="Il le garde."
        text="Pose à la remise, sans percer. 12 mois de suivi inclus. Ensuite l’abonnement est à sa charge."
        image="/images/balise-gps-4g-vehicule.jpg"
        alt="Traceur GPS 4G magnétique"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>
            L’acheteur reçoit sa voiture avec un traceur 4G. Il ouvre l’application, il voit où est le véhicule. En cas de vol, il a une localisation.
          </p>
          <p>
            Ce n’est pas une balise à 5 €. C’est un vrai boîtier 4G, collé par aimant, sans trou dans la carrosserie.
          </p>
          <p>
            Distinct du{" "}
            <AppLink to="/convoyage-prestige" className="font-semibold text-coral">
              Protocole Prestige
            </AppLink>
            : 199 € = traceur laissé à l’acheteur. 150 € = GPS temporaire le temps de la mission, retiré à la remise. Les deux peuvent se cumuler.
          </p>
          <p className="font-display text-3xl text-navy">{OPTIONS.gps} €</p>
          <p>Matériel + 12 mois. Vous cochez l’option, ou non. La mise en main reste offerte.</p>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Ajouter le GPS à une estimation
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
