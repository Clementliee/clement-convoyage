import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-semibold text-navy">{item.q}</span>
              <ChevronDown className={cn("size-5 shrink-0 text-coral transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen ? <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
