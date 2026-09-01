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
  const glow = 0.08 + lights * 0.92;

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
          className="absolute inset-0 h-full w-full object-cover object-[58%_58%]"
        />
        <img
          src="/images/convoyage-berline-phares.jpg"
          alt=""
          width={1792}
          height={1008}
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[58%_58%]"
          style={{ opacity: lights }}
          aria-hidden
        />
        <span
          className={`pointer-events-none absolute left-[44%] top-[54%] size-[16vw] max-h-44 max-w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl ${lights > 0.85 ? "hero-phare-on" : ""}`}
          style={{ opacity: lights * 0.42, mixBlendMode: "screen" }}
          aria-hidden
        />
        <span
          className={`pointer-events-none absolute left-[51%] top-[51%] size-[13vw] max-h-36 max-w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 blur-3xl ${lights > 0.85 ? "hero-phare-on" : ""}`}
          style={{ opacity: lights * 0.38, mixBlendMode: "screen" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="mb-5 text-sm tracking-[0.22em] text-white/65 uppercase">
            Quimper, Bretagne, France, Europe
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Acheminement et remise, au standard <span className="text-coral">concession.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            On récupère le véhicule où il se trouve. On le remet chez le client.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-[box-shadow,background-color] duration-300"
              style={{
                background: `rgba(0, 113, 227, ${0.28 + lights * 0.72})`,
                boxShadow: `0 0 ${10 + lights * 48}px ${3 + lights * 16}px rgba(0, 113, 227, ${glow}), 0 0 ${30 + lights * 70}px rgba(255,255,255,${lights * 0.28})`,
              }}
            >
              Contacter
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
