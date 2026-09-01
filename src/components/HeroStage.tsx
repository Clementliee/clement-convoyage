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

  const photo = Math.min(1, t / 0.32);
  const contour = 1 - Math.min(1, t / 0.42);
  const lights = Math.min(1, Math.max(0, (t - 0.16) / 0.42));
  const glow = 0.12 + lights * 0.88;

  return (
    <section ref={wrap} className="relative h-[175vh] bg-black">
      <div className="sticky top-0 h-dvh overflow-hidden bg-black">
        <img
          src="/images/15_hero_berline.jpg"
          alt="Berline premium, remise comme en concession"
          width={1400}
          height={932}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[58%_62%]"
          style={{
            opacity: 0.22 + photo * 0.78,
            filter: `brightness(${0.35 + photo * 0.65}) saturate(${0.2 + photo * 0.8})`,
          }}
        />
        <img
          src="/images/16_hero_contour.jpg"
          alt=""
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center mix-blend-screen"
          style={{ opacity: contour * 0.95 }}
          aria-hidden
        />
        <img
          src="/images/17_hero_phares.jpg"
          alt=""
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[58%_62%] mix-blend-lighten"
          style={{ opacity: lights }}
          aria-hidden
        />
        <span
          className={`pointer-events-none absolute left-[38%] top-[54%] size-[18vw] max-h-52 max-w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl sm:left-[39%] sm:top-[55%] ${lights > 0.85 ? "hero-phare-on" : ""}`}
          style={{ opacity: lights * 0.55, mixBlendMode: "screen" }}
          aria-hidden
        />
        <span
          className={`pointer-events-none absolute left-[47%] top-[51%] size-[14vw] max-h-40 max-w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 blur-3xl sm:left-[48%] sm:top-[52%] ${lights > 0.85 ? "hero-phare-on" : ""}`}
          style={{ opacity: lights * 0.45, mixBlendMode: "screen" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="mb-5 text-sm tracking-[0.22em] text-white/65 uppercase">
            Quimper, Bretagne, France, Europe
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Votre véhicule livré comme en <span className="text-coral">concession.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Livraison depuis la Bretagne. Photos au départ et à l’arrivée. Mise en main offerte.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-[box-shadow,background-color,transform] duration-300"
              style={{
                background: `rgba(0, 113, 227, ${0.35 + lights * 0.65})`,
                boxShadow: `0 0 ${12 + lights * 42}px ${4 + lights * 18}px rgba(0, 113, 227, ${glow}), 0 0 ${40 + lights * 80}px rgba(255,255,255,${lights * 0.35})`,
                transform: `scale(${1 + lights * 0.03})`,
              }}
            >
              Contacter
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white"
              style={{
                boxShadow: lights > 0.5 ? `0 0 24px rgba(255,255,255,${lights * 0.25})` : "none",
              }}
            >
              {SITE.phone}
            </a>
            <Link
              to="/simulateur"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/90"
            >
              Estimer ma livraison
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
