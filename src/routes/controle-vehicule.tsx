import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/controle-vehicule")({
  head: () =>
    pageHead({
      title: "Contrôle visuel à la livraison | Convoyage BZH",
      description:
        "Contrôle visuel 20 points au départ et à l’arrivée. Niveaux, pneus, éclairage, carrosserie. Ce n’est pas une expertise.",
      path: "/controle-vehicule",
      image: "/images/mission-bmw-controle.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "Est-ce une expertise automobile ?",
    a: "Non. Pas de rapport opposable, pas d’expert agréé. Un contrôle visuel de présentation, 20 points, photos. Pour une remise propre, pas pour un tribunal.",
  },
  {
    q: "Que vérifiez-vous ?",
    a: "Niveaux, éclairage, pneus, carrosserie visible, compteur, témoins tableau de bord, documents à bord. Mentionné sur l’EDL.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le montant n’est pas affiché. Cochez l’option au simulateur : elle entre dans la fourchette, à confirmer.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Contrôle visuel"
        title="Contrôle visuel à la livraison"
        text="Vingt points de contrôle, photographies et compte rendu. Il ne s’agit pas d’une expertise automobile."
        image="/images/mission-bmw-controle.jpg"
        alt="État des lieux photo d’un véhicule avant convoyage"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Clément n’est pas expert automobile. En revanche, une remise en concession commence par
            un regard : niveaux, pneus, feux, carrosserie, témoins. C’est ce contrôle visuel, 20
            points, photos horodatées, au départ et à l’arrivée.
          </p>
          <p>
            Il ne remplace pas un contrôle technique, ni une expertise d’assurance. Il documente
            l’état présenté. Si un point bloque le départ, on arrête et on vous appelle.
          </p>
          <div className="space-y-4">
            {[
              "Niveaux. Huile, lave-glace, liquide de refroidissement visible.",
              "Pneus, éclairage, témoins tableau de bord.",
              "Carrosserie et jantes en visuel, photos.",
              "Documents à bord, kilométrage relevé.",
            ].map((i) => (
              <p key={i} className="text-muted">
                {i}
              </p>
            ))}
          </div>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Ajouter le contrôle visuel
          </Link>
        </div>
        <img
          src="/images/mission-bmw-controle.jpg"
          alt="Contrôle visuel et photos"
          className="tilt-hover rounded-[1.6rem] object-cover"
        />
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="mb-4 font-display text-2xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar title="Ajouter le contrôle visuel" text="Option au simulateur. Fourchette après coordonnées." />
    </main>
  );
}
