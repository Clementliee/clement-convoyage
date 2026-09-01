import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
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
        <div className="hidden items-center gap-4 md:flex">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-medium text-navy">
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Button asChild size="md">
            <Link to="/simulateur">Estimer</Link>
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
        <div className="border-t border-line bg-bg px-5 py-5 lg:hidden">
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
                Estimer mon convoyage
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
