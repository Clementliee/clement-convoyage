import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/traqueur-gps")({
  head: () =>
    pageHead({
      title: "Traqueur GPS pour l’acheteur. 5 € à la livraison.",
      description:
        "Option 5 € : une balise GPS laissée dans le véhicule pour l’acheteur. Retrouver sa voiture, simplement. Convoyage BZH, Quimper.",
      path: "/traqueur-gps",
      image: "/images/07_gps.jpg",
    }),
  component: Page,
});

const FAQ = [
  {
    q: "C’est pour qui ?",
    a: "Pour l’acheteur. La balise reste dans le véhicule. Ce n’est pas pour suivre le convoyeur pendant la route.",
  },
  {
    q: "Combien ça coûte ?",
    a: "5 €, affichés. Vous cochez ou non dans le simulateur.",
  },
  {
    q: "C’est obligatoire ?",
    a: "Non. Une option, comme le nettoyage.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Option, 5 €"
        title="Un GPS pour l’acheteur."
        accent="Pas pour nous."
        text="Si le client veut un système simple dans sa voiture, on pose une balise à la remise. Il la garde."
        image="/images/07_gps.jpg"
        alt="Balise GPS posée dans un véhicule"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>
            L’idée est simple. L’acheteur reçoit sa voiture, et s’il le souhaite, une petite balise GPS reste dedans. Pour la retrouver en cas de vol, ou simplement savoir où elle est.
          </p>
          <p>
            Ce n’est pas un suivi du trajet de convoyage. On ne flique personne. On laisse un outil à celui qui paie le véhicule.
          </p>
          <p className="font-display text-2xl text-navy">5 €</p>
          <p>Prix affiché. Vous cochez l’option, ou non. La mise en main reste offerte.</p>
          <Link to="/simulateur" className="inline-flex font-semibold text-coral">
            Ajouter le GPS à une estimation
          </Link>
        </div>
        <img src="/images/07_gps.jpg" alt="Balise GPS" className="h-80 w-full rounded-[1.8rem] object-cover" />
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
