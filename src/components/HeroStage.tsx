import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/images";

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
          src={IMG.hero}
          alt="Berline premium sur la côte bretonne"
          width={1792}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[62%_58%]"
        />
        <img
          src={IMG.heroPhares}
          alt=""
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_58%]"
          style={{ opacity: lights }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="mb-5 flex flex-wrap gap-2">
            {["Base Quimper", "Chauffeur professionnel", "France et Europe", "Disponibilité 7j/7"].map(
              (b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/40 bg-black/50 px-3 py-1 text-[10px] tracking-[0.16em] text-white uppercase"
                >
                  {b}
                </span>
              ),
            )}
          </div>
          <h1
            className="max-w-3xl font-display text-[2.15rem] leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]"
            style={{ textShadow: "0 2px 28px rgba(0,0,0,0.7)" }}
          >
            On récupère votre véhicule. On le livre.
          </h1>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
          >
            Convoyage depuis Quimper, Cornouaille. France et Europe. Conciergerie de véhicules en Bretagne, 7j/7. Mise en
            main offerte. Un professionnel, pas un particulier.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/simulateur"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white"
              style={{
                background: "#0071e3",
                boxShadow: `0 0 ${12 + lights * 32}px ${4 + lights * 12}px rgba(0, 113, 227, ${0.32 + lights * 0.55})`,
                transition: "box-shadow 1s ease",
              }}
            >
              Calculer un itinéraire, obtenir un devis
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/55 bg-black/35 px-6 text-sm font-semibold text-white"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
