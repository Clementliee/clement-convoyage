import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-navy text-sm font-semibold text-surface"
        >
          <Phone className="size-4" />
          {SITE.phone}
        </a>
        <a
          href="/simulateur"
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-coral text-sm font-semibold text-surface"
        >
          Estimer
        </a>
      </div>
    </div>
  );
}
