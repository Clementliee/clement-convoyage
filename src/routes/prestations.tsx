import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { AppLink } from "@/components/AppLink";
import { SERVICES } from "@/lib/site";
import { B2B_OFFERS } from "@/lib/offers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/prestations")({
  head: () =>
    pageHead({
      title: "Prestations convoyage automobile. Convoyage BZH",
      description:
        "Livraison France et Europe, nettoyage, plein, coffrets, contrôle visuel, traqueur GPS, protocole sécurité. Convoyage depuis Quimper.",
      path: "/prestations",
    }),
  component: Page,
});

const MORE = [
  {
    to: "/professionnels",
    title: "Professionnels",
    text: "Concessions, garages, mandataires, flottes. Compte, quinze jours, compte-rendu.",
    image: "/images/02_remise_cles.jpg",
  },
  {
    to: "/pack-mise-a-la-route",
    title: "Packs mise à la route",
    text: "Essentiel, Confort, Premium. Le véhicule arrive prêt.",
    image: "/images/03_nettoyage.jpg",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffrets cadeau",
    text: "Deux coffrets maison, remis avec les clés. Armor ou Champagne.",
    image: "/images/09_coffret_armor.jpg",
  },
  {
    to: "/controle-vehicule",
    title: "Contrôle visuel",
    text: "20 points, photos. Ce n’est pas une expertise. Une remise propre.",
    image: "/images/06_etat_des_lieux.jpg",
  },
  {
    to: "/traqueur-gps",
    title: "Traqueur GPS 4G, 199 €",
    text: "Pour l’acheteur. Il le garde. 12 mois de suivi inclus.",
    image: "/images/07_gps.jpg",
  },
  {
    to: "/securite-vehicule",
    title: "Photos et clés",
    text: "Photos au départ et à l’arrivée. Clés en main propre. Mise en main offerte.",
    image: "/images/08_securite.jpg",
  },
  {
    to: "/convoyage-prestige",
    title: "Prestige",
    text: "Berlines et sportives. Protocole de remise issu des réseaux premium.",
    image: "/images/02_remise_cles.jpg",
  },
  {
    to: "/convoyage-electrique",
    title: "Véhicule électrique",
    text: "Plan de recharge, niveau de batterie convenu. Mise en main offerte.",
    image: "/images/03_nettoyage.jpg",
  },
  {
    to: "/etat-des-lieux-convoyage",
    title: "État des lieux",
    text: "Photos horodatées, compte-rendu. Preuve, pas récit.",
    image: "/images/06_etat_des_lieux.jpg",
  },
  {
    to: "/convoyage-mandataire",
    title: "Mandataires",
    text: "De la plate-forme jusqu’au client. Même exigence de remise.",
    image: "/images/04_europe_nuit.jpg",
  },
  {
    to: "/convoyage-import",
    title: "Import",
    text: "Belgique, Allemagne, Pologne. GPS et formalités cadrés avant départ.",
    image: "/images/04_europe_nuit.jpg",
  },
  {
    to: "/convoyage-urgence",
    title: "Urgent / week-end",
    text: "Sous 24 h selon créneau. Tous les jours. Pas de promesse magique.",
    image: "/images/01_hero_bretagne.jpg",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Prestations"
        title="Livrer."
        accent="Préparer. Sécuriser."
        text="Le même niveau de remise qu’en concession. Aucun tarif en vitrine."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 sm:px-8 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link key={s.to} to={s.to} className="tilt-hover overflow-hidden rounded-2xl border border-line bg-surface">
            <img src={s.image} alt={s.alt} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="font-display text-3xl text-navy">Partenaires B2B et concessions</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Navettes atelier, transferts inter-sites, livraison client final. Une grille partenaire, pas une plateforme anonyme.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {B2B_OFFERS.map((c) => (
            <div key={c.t} className="rounded-[1.5rem] bg-sand p-6">
              <h3 className="font-display text-xl text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
        <Link to="/professionnels" className="mt-8 inline-flex h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-surface">
          Demander une grille tarifaire partenaire Pro
        </Link>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight text-navy">Compléments</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MORE.map((s) => (
            <AppLink key={s.to} to={s.to} className="tilt-hover overflow-hidden rounded-2xl border border-line bg-surface">
              <img src={s.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </AppLink>
          ))}
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
