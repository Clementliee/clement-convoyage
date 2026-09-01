import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/livraison-europe")({
  head: () =>
    pageHead({
      title: "Livraison de véhicule en Europe. Depuis Quimper.",
      description:
        "Convoyage Europe. Belgique, Suisse, Allemagne, Pologne, Monaco, Serbie, Espagne, Italie, Royaume-Uni. Prise en charge sur place, remise chez le client. Devis après coordonnées.",
      path: "/livraison-europe",
      image: "/images/convoyage-europe-autoroute.jpg",
    }),
  component: Page,
});

const COUNTRIES = [
  ["/convoyage-belgique", "Belgique"],
  ["/convoyage-suisse", "Suisse"],
  ["/convoyage-luxembourg", "Luxembourg"],
  ["/convoyage-allemagne", "Allemagne"],
  ["/convoyage-espagne", "Espagne"],
  ["/convoyage-italie", "Italie"],
  ["/convoyage-pays-bas", "Pays-Bas"],
  ["/convoyage-royaume-uni", "Royaume-Uni"],
  ["/convoyage-pologne", "Pologne"],
  ["/convoyage-monaco", "Monaco"],
  ["/convoyage-serbie", "Serbie"],
  ["/convoyage-portugal", "Portugal"],
  ["/convoyage-autriche", "Autriche"],
  ["/convoyage-tchequie", "Tchéquie"],
  ["/convoyage-croatie", "Croatie"],
  ["/convoyage-irlande", "Irlande"],
  ["/convoyage-danemark", "Danemark"],
  ["/convoyage-hongrie", "Hongrie"],
  ["/convoyage-andorre", "Andorre"],
  ["/convoyage-slovenie", "Slovénie"],
  ["/convoyage-slovaquie", "Slovaquie"],
  ["/convoyage-grece", "Grèce"],
  ["/convoyage-suede", "Suède"],
  ["/convoyage-norvege", "Norvège"],
  ["/convoyage-roumanie", "Roumanie"],
  ["/convoyage-finlande", "Finlande"],
  ["/convoyage-bulgarie", "Bulgarie"],
  ["/convoyage-albanie", "Albanie"],
  ["/convoyage-montenegro", "Monténégro"],
  ["/convoyage-bosnie", "Bosnie-Herzégovine"],
  ["/convoyage-macedoine", "Macédoine du Nord"],
  ["/convoyage-estonie", "Estonie"],
  ["/convoyage-lettonie", "Lettonie"],
  ["/convoyage-lituanie", "Lituanie"],
  ["/convoyage-malte", "Malte"],
  ["/convoyage-chypre", "Chypre"],
  ["/convoyage-liechtenstein", "Liechtenstein"],
] as const;

function Page() {
  return (
    <main>
      <PageHero
        kicker="Europe"
        title="Le même standard,"
        accent="au-delà des frontières."
        text="Pas de tarif affiché. Documents, EDL, option GPS. Fourchette après vos coordonnées."
        image="/images/convoyage-europe-autoroute.jpg"
        alt="Convoyage de nuit sur autoroute européenne"
      />
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="font-display text-2xl text-navy">Destinations</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Chaque pays a sa page : formalités, délais, recommandations sécurité. Le prix se calcule au
          simulateur, jamais en grille.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {COUNTRIES.map(([to, label]) => (
            <AppLink
              key={to}
              to={to}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
            >
              {label}
            </AppLink>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Documents types : carte grise ou mandat, assurance, carte verte selon le pays, contrôle
          technique à jour. Royaume-Uni et Serbie : formalités renforcées. GPS recommandé à
          l’international.
        </p>
      </section>
      <CtaBar />
    </main>
  );
}
