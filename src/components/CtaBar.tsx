import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CtaBar({
  title = "Estimer ma livraison",
  text = "Fourchette indicative après vos coordonnées. Confirmation sous 2 heures ouvrées.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-[1.8rem] bg-navy px-6 py-10 text-center text-surface sm:px-12">
        <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</p>
        <p className="mt-2 text-sm text-surface/70">{text}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/simulateur">Lancer le simulateur</Link>
          </Button>
          <Button variant="ghost" className="border-0 bg-surface/10 text-surface hover:bg-surface/20" asChild>
            <a href={SITE.phoneHref}>Appeler {SITE.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
