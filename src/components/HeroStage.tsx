import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

export function HeroStage() {
  const wrap = useRef<HTMLElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setT(1);
      return;
    }
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, total)));
        setT(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lights = Math.min(1, Math.max(0, t / 0.7));

  return (
    <section ref={wrap} className="relative h-[145vh] bg-[#1a2230]">
      <div className="sticky top-0 h-dvh overflow-hidden bg-[#1a2230]">
        <img
          src="/images/convoyage-berline-bretagne.jpg"
          alt="Berline premium sur la côte bretonne"
          width={1792}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[62%_58%]"
        />
        <img
          src="/images/convoyage-berline-phares.jpg"
          alt=""
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_58%]"
          style={{ opacity: lights }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="mb-5 flex flex-wrap gap-2">
            {["Convoyage professionnel", "Préparation et mise en main", "France et Europe", "Disponibilité 7j/7"].map(
              (b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] tracking-[0.16em] text-white/75 uppercase"
                >
                  {b}
                </span>
              ),
            )}
          </div>
          <h1 className="max-w-3xl font-display text-[2.05rem] leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
            L’excellence opérationnelle pour l’acheminement et la mise à la route de vos véhicules.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
            Base opérationnelle à Quimper. Prise en charge, transfert sécurisé et livraison protocolaire en Bretagne, sur le territoire national et en Europe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/simulateur"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white transition-shadow duration-500"
              style={{
                background: "#0071e3",
                boxShadow: `0 0 ${6 + lights * 14}px ${2 + lights * 6}px rgba(0, 113, 227, ${0.18 + lights * 0.28})`,
              }}
            >
              Calculer un itinéraire, obtenir un devis
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-medium text-white/90"
            >
              Ligne directe {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
