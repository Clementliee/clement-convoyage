import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { AppLink } from "@/components/AppLink";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: "Prestations · CLÉMENT CONVOYAGE" },
      {
        name: "description",
        content:
          "Livraison France et Europe, nettoyage, traqueur GPS, protocole sécurité, prestige, VE. Convoyage depuis Quimper.",
      },
    ],
  }),
  component: Page,
});

const MORE = [
  {
    to: "/traqueur-gps",
    title: "Traqueur GPS",
    text: "Pose discrète le temps de la mission. Import, prestige, Europe.",
    image: "/images/07_gps.jpg",
  },
  {
    to: "/securite-vehicule",
    title: "Sécurité",
    text: "EDL, clés sous scellé, gestion de crise. Le véhicule n’est pas un colis.",
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
    text: "Plan de recharge, niveau de batterie convenu, mise en main.",
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
    text: "Sous 24 h selon créneau. 7 j/7. Pas de promesse magique.",
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
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-3">
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
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-2xl tracking-tight text-navy">Compléments</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
