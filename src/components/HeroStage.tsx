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

  const lights = Math.min(1, Math.max(0, t / 0.38));

  return (
    <section ref={wrap} className="relative h-dvh bg-[#1a2230] md:h-[145vh]">
      <div className="sticky top-0 h-dvh overflow-hidden bg-[#1a2230]">
        <img
          src={IMG.hero}
          alt="Berline premium sur la côte bretonne"
          width={1792}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_62%] md:object-[62%_58%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#081018]"
          style={{ opacity: lights * 0.28, mixBlendMode: "multiply" }}
          aria-hidden
        />
        <img
          src={IMG.heroPhares}
          alt="Berline premium, phares allumés"
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[70%_62%] md:object-[62%_58%]"
          style={{ opacity: lights }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/25 to-black/5" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-24">
          <div className="mb-5 hidden flex-wrap gap-2 sm:flex">
            {["Base Quimper", "Chauffeur professionnel", "France et Europe", "Devis en 1 minute"].map((l) => (
              <span
                key={l}
                className="rounded-full border border-white/40 bg-black/50 px-3 py-1 text-[10px] tracking-[0.16em] text-white uppercase"
              >
                {l}
              </span>
            ))}
          </div>
          <h1
            className="max-w-3xl font-display text-[1.85rem] leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]"
            style={{ textShadow: "0 2px 28px rgba(0,0,0,0.7)" }}
          >
            Acheminement de votre véhicule
          </h1>
          <p
            className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/90 sm:mt-5 sm:text-lg sm:text-white"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
          >
            <span className="sm:hidden">Quimper. France et Europe. Devis immédiat.</span>
            <span className="hidden sm:inline">Convoyeur à Quimper. France et Europe. Devis en une minute, à signer.</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              to="/simulateur"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white"
              style={{
                background: "#0071e3",
                boxShadow: `0 0 ${12 + lights * 32}px ${4 + lights * 12}px rgba(0, 113, 227, ${0.32 + lights * 0.55})`,
                transition: "box-shadow 1s ease",
              }}
            >
              Obtenir un devis
            </Link>
            <a
              href={SITE.phoneHref}
              className="hidden h-12 items-center justify-center rounded-full border border-white/55 bg-black/35 px-6 text-sm font-semibold text-white sm:inline-flex"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
