import { AppLink } from "@/components/AppLink";
import { SITE } from "@/lib/site";

const PRESTATIONS = [
  { to: "/livraison-vehicule", label: "Livraison France" },
  { to: "/nettoyage-vehicule", label: "Nettoyage" },
  { to: "/livraison-europe", label: "Livraison Europe" },
  { to: "/simulateur", label: "Simulateur" },
];

const BRETAGNE = [
  { to: "/convoyage-quimper", label: "Quimper" },
  { to: "/convoyage-brest", label: "Brest" },
  { to: "/convoyage-lorient", label: "Lorient" },
  { to: "/convoyage-vannes", label: "Vannes" },
  { to: "/convoyage-rennes", label: "Rennes" },
  { to: "/convoyage-nantes", label: "Nantes" },
  { to: "/convoyage-bretagne", label: "Toute la Bretagne" },
];

const EUROPE = [
  { to: "/convoyage-belgique", label: "Belgique" },
  { to: "/convoyage-suisse", label: "Suisse" },
  { to: "/convoyage-allemagne", label: "Allemagne" },
  { to: "/convoyage-espagne", label: "Espagne" },
  { to: "/convoyage-royaume-uni", label: "Royaume-Uni" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-navy text-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-sm font-bold">{SITE.name}</p>
          <p className="mt-2 text-sm text-surface/70">{SITE.baseline}</p>
          <p className="mt-4 text-sm text-surface/70">
            {SITE.city}
            <br />
            {SITE.region}
            <br />
            {SITE.coords}
          </p>
          <p className="mt-3 text-sm">
            <a href={SITE.phoneHref} className="hover:text-coral">
              {SITE.phone}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-coral">
              {SITE.email}
            </a>
          </p>
        </div>
        <FooterCol title="Prestations" links={PRESTATIONS} />
        <FooterCol title="Bretagne" links={BRETAGNE} />
        <FooterCol title="Europe" links={EUROPE} />
      </div>
      <div className="border-t border-surface/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-surface/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Conçu à Quimper · {SITE.coords}</p>
          <p className="flex flex-wrap gap-3">
            <AppLink to="/mentions-legales" className="hover:text-surface">
              Mentions légales
            </AppLink>
            <AppLink to="/confidentialite" className="hover:text-surface">
              Confidentialité
            </AppLink>
            <AppLink to="/cgv" className="hover:text-surface">
              CGV
            </AppLink>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="font-display text-xs font-semibold uppercase tracking-wider text-coral">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-surface/80">
        {links.map((l) => (
          <li key={l.to}>
            <AppLink to={l.to} className="hover:text-coral">
              {l.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
