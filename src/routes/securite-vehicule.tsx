import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/securite-vehicule")({
  head: () =>
    pageHead({
      title: "Photos du véhicule, clés en main. Convoyage BZH",
      description:
        "On photographie le véhicule au départ et à l’arrivée. Les clés sont remises en main propre. Mise en main offerte. Quimper.",
      path: "/securite-vehicule",
      image: "/images/mission-ds7-vauban.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Inclus"
        title="Des photos, des clés."
        accent="Rien de plus compliqué."
        text="On photographie le véhicule au départ et à l’arrivée. On remet les clés à la bonne personne. La mise en main est offerte."
        image="/images/mission-ds7-vauban.jpg"
        alt="Remise des clés d’un véhicule"
      />
      <section className="mx-auto max-w-3xl space-y-5 px-5 pb-16 text-lg leading-relaxed text-muted sm:px-8">
        <p>
          Pas de sigle, pas de protocole à décoder. On prend des photos pour que personne ne discute d’une rayure. On ne laisse pas les clés sur un pneu.
        </p>
        <p>
          Si quelque chose coince en route, on prévient. C’est tout.
        </p>
        <p>
          Le traqueur GPS 4G à 199 € est une option séparée : il reste dans la voiture de l’acheteur, 12 mois inclus. Le suivi temporaire d’une mission prestige est inclus dans le Protocole Prestige, 150 €. Ce n’est pas de la sécurité privée.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <AppLink to="/traqueur-gps" className="text-coral">
            Traqueur GPS 4G
          </AppLink>
          <AppLink to="/convoyage-prestige" className="text-coral">
            Protocole Prestige
          </AppLink>
        </div>
        <Link to="/simulateur" className="inline-flex font-semibold text-coral">
          Estimer une livraison
        </Link>
      </section>
      <CtaBar />
    </main>
  );
}
