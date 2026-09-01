import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-sm font-bold tracking-wide text-navy">{SITE.name}</span>
          <span className="text-[11px] text-muted">Quimper · Bretagne</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-navy/80 hover:text-coral"
              activeProps={{ className: "text-sm font-semibold text-coral" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-medium text-navy">
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Button asChild size="md">
            <Link to="/simulateur">Devis sous 2 h</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-3 text-base text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="rounded-lg px-3 py-3 text-base text-navy">
              Appeler {SITE.phone}
            </a>
            <Button asChild className="mt-2 w-full">
              <Link to="/simulateur" onClick={() => setOpen(false)}>
                Estimer ma livraison
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
