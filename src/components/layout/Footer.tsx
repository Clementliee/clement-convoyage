import { AppLink } from "@/components/AppLink";
import { SITE } from "@/lib/site";

const PRESTATIONS = [
  { to: "/prestations", label: "Prestations" },
  { to: "/jockey-gares-aeroports", label: "Conciergerie de véhicules" },
  { to: "/missions", label: "Missions" },
  { to: "/professionnels", label: "Concessions et garages" },
  { to: "/pack-mise-a-la-route", label: "Packs de livraison" },
  { to: "/simulateur", label: "Devis" },
];

const INFOS = [
  { to: "/faq", label: "FAQ" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
  { to: "/suivi", label: "Suivi de devis" },
  { to: "/destinations", label: "Secteur Bretagne" },
];

const BRETAGNE = [
  { to: "/convoyage-quimper", label: "Quimper" },
  { to: "/convoyage-brest", label: "Brest" },
  { to: "/convoyage-lorient", label: "Lorient" },
  { to: "/convoyage-vannes", label: "Vannes" },
  { to: "/convoyage-rennes", label: "Rennes" },
  { to: "/convoyage-nantes", label: "Nantes" },
  { to: "/convoyage-bretagne", label: "Bretagne" },
];

const EUROPE = [
  { to: "/convoyage-paris", label: "Paris" },
  { to: "/convoyage-belgique", label: "Belgique" },
  { to: "/convoyage-allemagne", label: "Allemagne" },
  { to: "/convoyage-espagne", label: "Espagne" },
  { to: "/livraison-europe", label: "Europe" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-navy text-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-display text-lg font-semibold">
            Convoyage <span className="text-coral">BZH</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface/70">{SITE.baseline}</p>
          <p className="mt-3 text-sm leading-relaxed text-surface/70">
            Société d’acheminement automobile et conciergerie privée. Siège d’exploitation : Quimper, Finistère, Bretagne.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-surface/70">
            {SITE.city}, {SITE.region}
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
        <FooterCol title="Infos" links={INFOS} />
        <FooterCol title="Bretagne" links={BRETAGNE} />
        <FooterCol title="Europe" links={EUROPE} />
      </div>
      <div className="border-t border-surface/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-surface/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Convoyage BZH. Acheminement de véhicules terrestres à moteur, mandat de conduite. Responsabilité civile professionnelle dédiée. SIRET {SITE.siret}. {SITE.phone}.
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
