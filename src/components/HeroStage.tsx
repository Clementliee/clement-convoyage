import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function HeroStage() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / 520));
      setT(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="perspective-scene relative min-h-[88vh] overflow-hidden bg-navy">
      <div
        className="absolute inset-[-8%] will-change-transform"
        style={{
          transform: `translateY(${t * 40}px) scale(${1.12 - t * 0.08}) rotateX(${t * 6}deg)`,
          transformOrigin: "center 70%",
        }}
      >
        <img
          src="/images/01_hero_bretagne.jpg"
          alt="Convoyage Mercedes sur la côte bretonne près de Quimper"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-navy/55" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <div className="mb-5 flex flex-wrap gap-2">
          {["Livraison", "Nettoyage", "France & Europe", "7j/7"].map((p) => (
            <span
              key={p}
              className="rounded-full border border-surface/25 bg-navy/30 px-3 py-1 text-xs text-surface/90 backdrop-blur"
            >
              {p}
            </span>
          ))}
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-surface sm:text-6xl lg:text-7xl">
          Votre véhicule livré comme en <span className="text-coral">concession.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-surface/80">
          {SITE.sub} {SITE.hours}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="xl" asChild>
            <Link to="/simulateur">Estimer ma livraison</Link>
          </Button>
          <Button size="xl" variant="ghost" className="border-surface/30 bg-surface/10 text-surface" asChild>
            <a href={SITE.phoneHref}>Appeler</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
