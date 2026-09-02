import { QuoteCta, type SimulatorSearch } from "@/components/QuoteCta";
import { AppLink } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CtaBar({
  title = "Un véhicule à acheminer ?",
  text = SITE.quotePromise,
  primaryLabel = "Obtenir mon devis",
  primarySearch,
  secondaryTo = "/contact",
  secondaryLabel = "Nous écrire",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primarySearch?: SimulatorSearch;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div className="rounded-[2.2rem] bg-navy px-8 py-14 text-center text-surface sm:px-16">
        <p className="font-display text-3xl tracking-tight sm:text-4xl">{title}</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-surface/70">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <QuoteCta search={primarySearch} variant="coral">
            {primaryLabel}
          </QuoteCta>
          <Button variant="ghost" className="border-0 bg-surface/10 text-surface hover:bg-surface/20" asChild>
            <AppLink to={secondaryTo}>{secondaryLabel}</AppLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
