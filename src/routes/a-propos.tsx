import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead({
      title: "À propos. Convoyage BZH, Quimper.",
      description:
        "Clément, convoyeur à Quimper. Photos, clés en main, mise en main offerte. Livraison tous les jours.",
      path: "/a-propos",
      image: "/images/fondateur-clement-quimper.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="À propos"
        title="Une remise."
        accent="Pas un trajet."
        text="Base Quimper, Cornouaille. Un interlocuteur, une remise propre. Chauffeur professionnel."
      />
      <section className="mx-auto grid max-w-6xl items-start gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[minmax(0,400px)_1fr]">
        <Reveal>
          <div className="perspective-scene">
            <img
              src="/images/fondateur-clement-quimper.jpg"
              alt="Clément, Convoyage BZH, Quimper"
              className="tilt-hover aspect-[3/4] w-full rounded-[2rem] object-cover object-[50%_18%] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)]"
            />
          </div>
        </Reveal>
        <Reveal delay={80} className="space-y-6 text-lg leading-relaxed text-muted">
          <p className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Direction, Quimper</p>
          <h2 className="font-display text-4xl text-navy">Clément</h2>
          <p>
            Clément achemine des véhicules depuis une base à Quimper, en Cornouaille. Prise en charge partout en France
            et en Europe, remise chez le client. Photos au départ et à l’arrivée, clés en main, mise en main offerte.
          </p>
          <p>
            Si le créneau ne tient pas, on le dit avant. Si ça coince en route, on prévient.
          </p>
          <p>
            Panne, pluie, client absent, document manquant : on prévient, on dit ce qui se passe, on ne disparaît pas.
          </p>
          <p>
            Convoyage BZH, depuis Quimper. Un numéro, un mail, une réponse. Tous les jours. Astreinte 24 h pour les
            professionnels. France et Europe.
          </p>
          <p>On parle de tenue. Pas de « passion de l’automobile ».</p>
        </Reveal>
      </section>
      <CtaBar />
    </main>
  );
}
