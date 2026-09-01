import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function HeroStage() {
  return (
    <section className="relative bg-navy">
      <div className="relative min-h-[78vh] sm:min-h-[85vh]">
        <img
          src="/images/01_hero_bretagne.jpg"
          alt="Véhicule livré sur la côte bretonne, près de Quimper"
          width={1792}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:min-h-[85vh] sm:px-8 sm:pb-20">
          <p className="mb-5 text-sm tracking-[0.22em] text-surface/70 uppercase">
            Quimper, Bretagne, France, Europe
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-surface sm:text-7xl">
            Votre véhicule livré comme en <span className="text-coral">concession.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface/85">
            Livraison depuis la Bretagne. Photos au départ et à l’arrivée. Mise en main offerte.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="xl" asChild>
              <Link to="/simulateur">Estimer ma livraison</Link>
            </Button>
            <Button size="xl" variant="ghost" className="border-surface/30 bg-surface/10 text-surface" asChild>
              <Link to="/professionnels">Je suis un professionnel</Link>
            </Button>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-14 items-center justify-center rounded-full border border-surface/30 px-6 text-sm font-semibold text-surface"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
