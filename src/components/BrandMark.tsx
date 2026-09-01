import { SITE } from "@/lib/site";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={
          light
            ? "grid size-8 shrink-0 place-items-center rounded-lg bg-surface text-[10px] font-bold tracking-wider text-navy"
            : "grid size-8 shrink-0 place-items-center rounded-lg bg-navy text-[10px] font-bold tracking-wider text-surface"
        }
      >
        {SITE.mark}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={
            light
              ? "font-display text-sm font-semibold tracking-wide text-surface"
              : "font-display text-sm font-semibold tracking-wide text-navy"
          }
        >
          Convoyage <span className="text-coral">BZH</span>
        </span>
        <span className={light ? "text-[11px] text-surface/60" : "text-[11px] text-muted"}>
          {SITE.city}, Bretagne
        </span>
      </span>
    </span>
  );
}
