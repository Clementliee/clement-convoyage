import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Shield, Star } from "lucide-react";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
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
    q: "Que comprend le tarif ?",
    a: "La conduite A → B, le carburant du véhicule convoyé, les péages, le retour du convoyeur, l’état des lieux photo et la remise des clés.",
  },
  {
    q: "Intervenez-vous le week-end ?",
    a: "Oui, 7 j/7. Samedi +20 %, dimanche et férié +40 %. Astreinte 24 h pour les professionnels.",
  },
  {
    q: "Livrez-vous hors Bretagne ?",
    a: "Oui. France entière et Europe (Belgique, Suisse, Allemagne, Espagne, Italie, Pays-Bas, Royaume-Uni).",
  },
  {
    q: "Comment payer ?",
    a: "Particulier : virement avant départ. Professionnel : 15 jours, acompte 50 % possible au premier dossier.",
  },
  {
    q: "Que se passe-t-il si le véhicule n’est pas roulant ?",
    a: "Nous refusons. Orientation vers un transporteur plateau. Permis B uniquement, ≤ 3,5 t.",
  },
  {
    q: "Les avis clients ?",
    a: "Les notes sont suivies mission par mission. Les avis Google seront publiés ici dès les premières livraisons.",
  },
];

function Home() {
  return (
    <main>
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/images/01_hero_bretagne.jpg"
          alt="Convoyage Mercedes sur la côte bretonne près de Quimper"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16">
          <div className="mb-4 flex flex-wrap gap-2">
            {["Livraison", "Nettoyage", "France & Europe", "7j/7"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-surface/30 bg-navy/40 px-3 py-1 text-xs text-surface"
              >
                {p}
              </span>
            ))}
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-surface sm:text-6xl">
            Votre véhicule livré comme en <span className="text-coral">concession.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-surface/85">{SITE.sub} {SITE.hours}.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="xl" asChild>
              <Link to="/simulateur">Estimer ma livraison</Link>
            </Button>
            <Button size="xl" variant="ghost" className="border-surface/30 bg-surface/10 text-surface" asChild>
              <a href={SITE.phoneHref}>Appeler</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-6 max-w-6xl px-4 sm:px-6">
        <Link
          to="/simulateur"
          className="flex h-14 w-full items-center justify-center rounded-full bg-coral text-base font-semibold text-surface hover:bg-navy"
        >
          Estimer ma livraison
        </Link>
      </div>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group overflow-hidden rounded-2xl border border-line bg-surface"
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
          <h2 className="font-display text-3xl text-navy">De l’idée à la remise, en 4 étapes</h2>
          <ol className="mt-6 space-y-5">
            {[
              ["01", "Demande", "Simulateur ou appel. Départ, arrivée, type de véhicule."],
              ["02", "Devis sous 2 h", "Prix ferme, délai, conditions d’assurance."],
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
        <h2 className="font-display text-3xl text-navy">Les notes clients sont notre tableau de bord</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Chaque mission est une remise, pas un trajet. Les avis Google seront publiés ici dès les
          premières livraisons. Pas de notes inventées.
        </p>
        <Button className="mt-5" variant="ghost" asChild>
          <Link to="/avis">Page avis</Link>
        </Button>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <h2 className="mb-4 font-display text-3xl text-navy">Questions fréquentes</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>

      <div className="mt-16">
        <CtaBar />
      </div>
    </main>
  );
}
