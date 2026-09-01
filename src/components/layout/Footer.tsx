import { AppLink } from "@/components/AppLink";
import { SITE } from "@/lib/site";

const PRESTATIONS = [
  { to: "/jockey-gares-aeroports", label: "Jockey gares et aéroports" },
  { to: "/convoyage", label: "Convoyage" },
  { to: "/professionnels", label: "Professionnels" },
  { to: "/pack-mise-a-la-route", label: "Packs mise à la route" },
  { to: "/preparation-vehicule", label: "Préparation" },
  { to: "/protocole-clement", label: "Protocole Clément" },
  { to: "/livraison-vehicule", label: "France" },
  { to: "/livraison-europe", label: "Europe" },
  { to: "/blog", label: "Journal" },
  { to: "/faq", label: "FAQ" },
  { to: "/simulateur", label: "Estimer" },
];

const BRETAGNE = [
  { to: "/convoyage-quimper", label: "Quimper" },
  { to: "/convoyage-benodet", label: "Bénodet" },
  { to: "/convoyage-brest", label: "Brest" },
  { to: "/convoyage-lorient", label: "Lorient" },
  { to: "/convoyage-vannes", label: "Vannes" },
  { to: "/convoyage-rennes", label: "Rennes" },
  { to: "/convoyage-bretagne", label: "Toute la Bretagne" },
];

const EUROPE = [
  { to: "/convoyage-belgique", label: "Belgique" },
  { to: "/convoyage-pologne", label: "Pologne" },
  { to: "/convoyage-monaco", label: "Monaco" },
  { to: "/convoyage-serbie", label: "Serbie" },
  { to: "/convoyage-allemagne", label: "Allemagne" },
  { to: "/convoyage-royaume-uni", label: "Royaume-Uni" },
  { to: "/livraison-europe", label: "Toutes les destinations" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-navy text-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">
            Convoyage <span className="text-coral">BZH</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface/70">{SITE.baseline}</p>
          <p className="mt-6 text-sm leading-relaxed text-surface/70">
            {SITE.street}
            <br />
            {SITE.postalCode} {SITE.city}
            <br />
            SIRET {SITE.siret}
          </p>
          <p className="mt-4 text-sm">
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-surface/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Conçu à Quimper. SIRET {SITE.siret}. {SITE.phone}.
          </p>
          <p className="flex flex-wrap gap-4">
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
      <p className="text-xs font-semibold tracking-[0.16em] text-surface/50 uppercase">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <AppLink to={l.to} className="text-surface/80 hover:text-coral">
              {l.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
