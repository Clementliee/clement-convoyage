import { AppLink } from "@/components/AppLink";
import { Button } from "@/components/ui/button";

export function CtaBar({
  title = "Un véhicule à acheminer ?",
  text = "Estimation détaillée après vos coordonnées. Devis formel sous 2 heures ouvrées.",
  secondaryTo = "/professionnels",
  secondaryLabel = "Compte professionnel",
}: {
  title?: string;
  text?: string;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="rounded-[2.2rem] bg-navy px-8 py-14 text-center text-surface sm:px-16">
        <p className="font-display text-3xl tracking-tight sm:text-4xl">{title}</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-surface/70">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <AppLink to="/simulateur">Obtenir mon estimation détaillée</AppLink>
          </Button>
          <Button variant="ghost" className="border-0 bg-surface/10 text-surface hover:bg-surface/20" asChild>
            <AppLink to={secondaryTo}>{secondaryLabel}</AppLink>
          </Button>
        </div>
      </div>
    </section>
  );
}