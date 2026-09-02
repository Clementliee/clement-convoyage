import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead({
      title: "À propos | Convoyeur automobile à Quimper | Convoyage BZH",
      description:
        "Clément Leliège, convoyeur automobile à Quimper. Acheminement en France et en Europe. Photos, clés en main, mise en main offerte. Devis sous deux heures.",
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
        title="Convoyeur automobile à Quimper"
        text="Clément Leliège. Base opérationnelle en Cornouaille. Acheminement en France et en Europe. Un interlocuteur, une remise en main propre."
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
            Je ne viens pas du transport. Je viens de l’automobile. J’ai travaillé pour de grandes marques — Renault, DS
            Automobiles, Mercedes-Benz — et livré des véhicules à distance, en concession comme hors réseau.
          </p>
          <p>
            Convoyage BZH, c’est cette culture-là : standards constructeur, remise en main propre, reporting, respect du
            créneau. Prise en charge à l’adresse du véhicule, France et Europe. Mise en main offerte.
          </p>
          <p>
            Si le créneau ne tient pas, nous le disons avant. En cas d’imprévu, nous prévenons. Un numéro, un e-mail, une
            réponse. Intervention tous les jours. Astreinte 24 h pour les professionnels.
          </p>
        </Reveal>
      </section>
      <CtaBar />
    </main>
  );
}
