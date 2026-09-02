import { useEffect, useRef, useState, type ElementType } from "react";
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
  const [on, setOn] = useState(false);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const extra = accent ? accent.trim().split(/\s+/).filter(Boolean) : [];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOn(true);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
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
      <span ref={ref} className={cn("rise-stage", on && "rise-on")}>
        {render(words)}
        {extra.length ? render(extra, true) : null}
      </span>
    </Tag>
  );
}