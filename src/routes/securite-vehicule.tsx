import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/securite-vehicule")({
  head: () =>
    pageHead({
      title: "Traçabilité et remise des clés | Convoyage BZH",
      description:
        "État des lieux photographique au départ et à l’arrivée. Clés remises en main propre. Mise en main offerte. Convoyage BZH, Quimper.",
      path: "/securite-vehicule",
      image: "/images/mission-ds7-vauban.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Traçabilité"
        title="Photographies et remise des clés"
        text="Un état des lieux photographique est établi au départ et à l’arrivée. Les clés sont remises à la personne désignée. La mise en main est offerte."
        image="/images/mission-ds7-vauban.jpg"
        alt="Remise des clés d’un véhicule"
      />
      <section className="mx-auto max-w-3xl space-y-5 px-5 pb-16 text-lg leading-relaxed text-muted sm:px-8">
        <p>
          Un état des lieux photographique évite toute discussion sur une rayure. Les clés ne sont pas laissées sur un pneu. Elles sont remises en main propre.
        </p>
        <p>
          En cas d’imprévu, nous vous informons.
        </p>
        <p>
          Le traceur GPS 4G est une option : il reste dans le véhicule de l’acquéreur, douze mois inclus. Le suivi
          temporaire d’une mission prestige est compris dans le protocole dédié. Pour les véhicules de haute valeur ou
          atypiques, le chauffeur est formé aux systèmes de sécurité du véhicule. Il ne s’agit pas d’une activité de
          sécurité privée. C’est un cadre de prise en charge.
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
