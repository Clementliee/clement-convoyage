import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function HeroStage() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / 780));
        setT(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="perspective-scene relative min-h-[92vh] overflow-hidden bg-navy">
      <div
        className="absolute inset-[-12%] will-change-transform"
        style={{
          transform: `translate3d(0, ${t * 72}px, ${-t * 80}px) scale(${1.18 - t * 0.1}) rotateX(${t * 9}deg)`,
          transformOrigin: "center 68%",
        }}
      >
        <img
          src="/images/01_hero_bretagne.jpg"
          alt="Berline premium sur la côte bretonne, près de Quimper"
          width={1792}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(29,29,31,${0.28 + t * 0.35}) 0%, rgba(29,29,31,${0.55 + t * 0.25}) 100%)`,
        }}
      />
      <div
        className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28"
        style={{
          transform: `translateY(${t * -24}px)`,
          opacity: 1 - t * 0.45,
        }}
      >
        <p className="mb-6 text-sm tracking-[0.22em] text-surface/70 uppercase">
          Quimper, Bretagne, France, Europe
        </p>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-surface sm:text-7xl lg:text-[5.4rem]">
          Votre véhicule livré comme en <span className="text-coral">concession.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-surface/80 sm:text-xl">
          Convoyage, préparation et remise de véhicules depuis la Bretagne, partout en France, et selon les missions en Europe.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="xl" asChild>
            <Link to="/simulateur">Estimer mon convoyage</Link>
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
        <p className="mt-8 text-sm text-surface/70">
          <a href={SITE.phoneHref} className="underline-offset-4 hover:underline">
            {SITE.phone}
          </a>
          . Base Quimper. Tous les jours.
        </p>
      </div>
    </section>
  );
}
