import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Shield, Star } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} · Votre véhicule livré comme en concession.` },
      {
        name: "description",
        content:
          "Convoyage premium depuis Quimper. Bretagne, France, Europe. EDL photo, 7j/7, devis sous 2 h.",
      },
    ],
  }),
  component: Home,
});

const FAQ = [
  {
    q: "Comment obtenir le prix ?",
    a: "Sept questions, puis vos coordonnées. Une fourchette basse / haute s’affiche, un PDF se télécharge, et un e-mail part vers vous. Le tarif est indicatif, à confirmer avec un professionnel.",
  },
  {
    q: "Que comprend le tarif ?",
    a: "La conduite A → B, le carburant du véhicule convoyé, les péages, le retour du convoyeur, l’état des lieux photo et la remise des clés.",
  },
  {
    q: "Intervenez-vous le week-end ?",
    a: "Oui, 7 j/7. Les samedis, dimanches et fériés sont possibles. Astreinte 24 h pour les professionnels.",
  },
  {
    q: "Livrez-vous hors Bretagne ?",
    a: "Oui. France entière et Europe : Belgique, Suisse, Allemagne, Pologne, Monaco, Serbie, Espagne, Italie, Royaume-Uni, et d’autres pays sur devis.",
  },
  {
    q: "Proposez-vous un suivi GPS ?",
    a: "Oui, en option : pose discrète le temps de la mission, retrait à la remise. Souvent couplé au protocole sécurité (clés sous scellé, EDL renforcée).",
  },
  {
    q: "Comment payer ?",
    a: "Particulier : virement avant départ. Professionnel : 15 jours, acompte 50 % possible au premier dossier.",
  },
  {
    q: "Que se passe-t-il si le véhicule n’est pas roulant ?",
    a: "Nous refusons. Orientation vers un transporteur plateau. Permis B uniquement, ≤ 3,5 t.",
  },
];

function Home() {
  return (
    <main>
      <HeroStage />

      <div className="mx-auto -mt-6 max-w-6xl px-4 sm:px-6">
        <Link
          to="/simulateur"
          className="flex h-14 w-full items-center justify-center rounded-full bg-coral text-base font-semibold text-surface transition-colors hover:bg-navy"
        >
          Estimer ma livraison
        </Link>
      </div>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="tilt-hover group overflow-hidden rounded-[1.6rem] border border-line bg-surface"
          >
            <img src={s.image} alt={s.alt} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
              <p className="mt-3 text-sm font-semibold text-coral group-hover:underline">Ouvrir →</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        {[
          { icon: Clock, t: "7 j/7" },
          { icon: Check, t: "EDL photo" },
          { icon: Shield, t: "DS / Renault / Mercedes-Benz" },
          { icon: Star, t: "Notes clients suivies" },
          { icon: Shield, t: "Gestion de crise" },
        ].map((p) => (
          <div key={p.t} className="flex items-center gap-3 rounded-2xl border border-line bg-sand px-4 py-4">
            <p.icon className="size-5 text-coral" />
            <p className="text-sm font-medium text-navy">{p.t}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-navy sm:text-4xl">De l’idée à la remise, en 4 étapes</h2>
          <ol className="mt-6 space-y-5">
            {[
              ["01", "Demande", "Simulateur ou appel. Départ, arrivée, type de véhicule."],
              ["02", "Coordonnées", "Le prix s’affiche après nom, téléphone et e-mail."],
              ["03", "EDL + prise en charge", "Photos horodatées, documents, départ."],
              ["04", "Remise et compte-rendu", "Clés en main propre, rapport de mission."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-4">
                <span className="font-display text-2xl font-semibold text-coral">{n}</span>
                <div>
                  <p className="font-display text-lg text-navy">{t}</p>
                  <p className="text-sm text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <HomeEstimator />
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[1.8rem] bg-navy text-surface lg:grid lg:grid-cols-2">
          <img
            src="/images/08_securite.jpg"
            alt="Clés sous scellé et état des lieux photo"
            className="h-64 w-full object-cover lg:h-full"
          />
          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surface/50">Sécurité</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Le véhicule n’est pas un colis.</h2>
            <p className="mt-4 text-sm leading-relaxed text-surface/75">
              EDL photo, clés sous scellé, option traqueur GPS, gestion de crise. Le même réflexe
              qu’une remise en réseau DS, Renault ou Mercedes-Benz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/securite-vehicule" className="text-sm font-semibold text-coral">
                Protocole sécurité →
              </Link>
              <Link to="/traqueur-gps" className="text-sm font-semibold text-surface/80">
                Traqueur GPS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-tight text-navy">Zones</h2>
          <AppLink to="/destinations" className="text-sm font-semibold text-coral">
            Toutes les destinations →
          </AppLink>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Bretagne, France, Europe — Pologne, Monaco, Serbie incluses. Chaque bassin a sa page, sans
          tarif affiché.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            ["/convoyage-quimper", "Quimper"],
            ["/convoyage-brest", "Brest"],
            ["/convoyage-rennes", "Rennes"],
            ["/convoyage-paris", "Paris"],
            ["/convoyage-pologne", "Pologne"],
            ["/convoyage-monaco", "Monaco"],
            ["/convoyage-serbie", "Serbie"],
            ["/traqueur-gps", "GPS"],
            ["/securite-vehicule", "Sécurité"],
          ].map(([to, label]) => (
            <AppLink
              key={to}
              to={to}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
            >
              {label}
            </AppLink>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl tracking-tight text-navy">Les notes clients sont notre tableau de bord</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Chaque mission est une remise, pas un trajet. Les avis Google seront publiés ici dès les
          premières livraisons. Pas de notes inventées.
        </p>
        <Button className="mt-5" variant="ghost" asChild>
          <Link to="/avis">Page avis</Link>
        </Button>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <h2 className="mb-4 font-display text-3xl tracking-tight text-navy">Questions fréquentes</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <div className="mt-16">
        <CtaBar />
      </div>
    </main>
  );
}
