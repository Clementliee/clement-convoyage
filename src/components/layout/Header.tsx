import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-line/70 ${open ? "bg-bg" : "glass"}`}>
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <BrandMark />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-navy sm:flex"
            >
              <Phone className="size-4" />
              {SITE.phone}
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy sm:hidden"
              aria-label={`Appeler ${SITE.phone}`}
            >
              <Phone className="size-4" />
            </a>
            <Link
              to="/simulateur"
              className="devis-pulse inline-flex h-11 items-center rounded-full bg-coral px-5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Devis
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-40 bg-bg pt-[4.5rem] md:hidden">
          <nav className="flex h-full flex-col bg-bg px-6 py-10">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-5 text-2xl text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/simulateur"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-coral text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Obtenir un devis
            </Link>
            <a href={SITE.phoneHref} className="mt-4 text-center text-sm text-muted">
              {SITE.phone}
            </a>
          </nav>
        </div>
      ) : null}
      <div className="h-[4.5rem]" aria-hidden />
    </>
  );
}
