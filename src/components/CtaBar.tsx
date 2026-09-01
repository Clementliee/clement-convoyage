import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CtaBar({
  title = "Estimer ma livraison",
  text = "Devis sous 2 heures ouvrées. Sans engagement.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl bg-coral px-6 py-8 text-center text-surface sm:px-10">
        <p className="font-display text-lg font-semibold sm:text-2xl">{title}</p>
        <p className="mt-1 text-sm text-surface/90">{text}</p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="navy" asChild>
            <Link to="/simulateur">Lancer le simulateur</Link>
          </Button>
          <Button variant="ghost" className="border-0 bg-surface/15 text-surface hover:bg-surface/25" asChild>
            <a href={SITE.phoneHref}>Appeler {SITE.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
