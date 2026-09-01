import { useEffect, useState } from "react";

export function PageHero({
  kicker,
  title,
  accent,
  text,
  image,
  alt,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  text?: string;
  image?: string;
  alt?: string;
}) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!image) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => setT(Math.min(1, Math.max(0, window.scrollY / 420)));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [image]);

  return (
    <section className="relative overflow-hidden">
      {image ? (
        <div className="perspective-scene relative h-72 w-full overflow-hidden sm:h-[28rem]">
          <div
            className="absolute inset-[-10%] will-change-transform"
            style={{
              transform: `translateY(${t * 48}px) scale(${1.12 - t * 0.06}) rotateX(${t * 5}deg)`,
            }}
          >
            <img
              src={image}
              alt={alt ?? ""}
              width={1600}
              height={900}
              decoding="async"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-navy/10" />
        </div>
      ) : null}
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {kicker ? (
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-coral uppercase">{kicker}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl text-navy sm:text-6xl">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-coral">{accent}</span>
            </>
          ) : null}
        </h1>
        {text ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{text}</p> : null}
      </div>
    </section>
  );
}
