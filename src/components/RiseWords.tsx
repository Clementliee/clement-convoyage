import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function RiseWords({
  text,
  accent,
  as: Tag = "h2",
  className,
}: {
  text: string;
  accent?: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const extra = accent ? accent.trim().split(/\s+/).filter(Boolean) : [];

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>(".rise-word")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = Math.max(1, nodes.length);
    const delay = n > 1 ? 0.42 / (n - 1) : 0;
    const dur = 0.58;
    let done = false;

    const apply = (p: number) => {
      if (done) return;
      const t = Math.min(1, Math.max(0, p));
      nodes.forEach((w, i) => {
        const local = Math.min(1, Math.max(0, (t - i * delay) / dur));
        w.style.opacity = String(local);
        w.style.filter = local >= 1 ? "none" : `blur(${(1 - local) * 5}px)`;
        w.style.transform =
          local >= 1
            ? "none"
            : `translate3d(0, ${(1 - local) * 1.2}em, ${(1 - local) * -32}px) rotateX(${(1 - local) * 50}deg)`;
      });
      if (t >= 1) done = true;
    };

    if (reduce) {
      apply(1);
      return;
    }

    const measure = () => {
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      return Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (vh * 0.38)));
    };

    apply(0);
    let intro = 0;
    let playing = false;
    const playToEnd = (ms: number) => {
      playing = true;
      const t0 = performance.now();
      const step = (now: number) => {
        apply(Math.min(1, (now - t0) / ms));
        if (now - t0 < ms && !done) intro = requestAnimationFrame(step);
        else {
          apply(1);
          playing = false;
        }
      };
      intro = requestAnimationFrame(step);
    };

    const boot = () => {
      if (measure() >= 0.28) playToEnd(900);
      else apply(measure());
    };
    const onScroll = () => {
      if (done || playing) return;
      const p = measure();
      if (p >= 0.55) playToEnd(720);
      else apply(p);
    };

    const fail = window.setTimeout(() => apply(1), 1800);
    requestAnimationFrame(boot);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(intro);
      window.clearTimeout(fail);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text, accent]);

  let i = 0;
  const render = (list: string[], coral = false) =>
    list.map((w) => {
      const n = i++;
      return (
        <span key={`${coral ? "a" : "w"}-${n}`} className="rise-clip">
          <span className={cn("rise-word", coral && "text-coral")} style={{ ["--i" as string]: n }}>
            {w}
          </span>
        </span>
      );
    });

  return (
    <Tag className={className}>
      <span ref={ref} className="rise-stage">
        {render(words)}
        {extra.length ? render(extra, true) : null}
      </span>
    </Tag>
  );
}
