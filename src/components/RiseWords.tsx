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
    const apply = (p: number) => {
      nodes.forEach((w, i) => {
        const local = Math.min(1, Math.max(0, (p - i * 0.08) / 0.5));
        w.style.opacity = String(local);
        w.style.filter = `blur(${(1 - local) * 5}px)`;
        w.style.transform = `translate3d(0, ${(1 - local) * 1.2}em, ${(1 - local) * -32}px) rotateX(${(1 - local) * 50}deg)`;
      });
    };
    if (reduce) {
      apply(1);
      return;
    }
    const measure = () => {
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      return Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.48)));
    };
    apply(0);
    let intro = 0;
    let playing = false;
    const boot = () => {
      const target = measure();
      if (target >= 0.45) {
        playing = true;
        const t0 = performance.now();
        const step = (now: number) => {
          apply(Math.min(1, (now - t0) / 860));
          if (now - t0 < 860) intro = requestAnimationFrame(step);
          else playing = false;
        };
        intro = requestAnimationFrame(step);
      } else {
        apply(target);
      }
    };
    const onScroll = () => {
      if (playing) return;
      apply(measure());
    };
    const fail = window.setTimeout(() => apply(1), 1400);
    requestAnimationFrame(boot);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(intro);
      window.clearTimeout(fail);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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