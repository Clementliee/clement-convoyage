import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/jockey-gares-aeroports")({
  head: () =>
    pageHead({
      title: "Voiturier et conciergerie gares et aéroports. Quimper, Brest, Lorient.",
      description:
        "Service voiturier premium. Prise en charge au dépose-minute, gardiennage, entretien, restitution sur le parvis. Gare de Quimper, aéroports Brest-Bretagne et Lorient.",
      path: "/jockey-gares-aeroports",
      image: "/images/jockey-gare-quimper.jpg",
    }),
  component: Page,
});

const STEPS = [
  {
    n: "01",
    t: "Départ sans contrainte",
    d: "Vous nous confiez les clés au dépose-minute. Nous ramenons le véhicule à votre domicile, ou sur un parking gardé. Photos au départ.",
    img: "/images/remise-cles-vehicule.jpg",
  },
  {
    n: "02",
    t: "Pendant votre absence",
    d: "Optionnel. Nettoyage intérieur et extérieur, plein ou charge à 90 %, passage au contrôle technique ou à la révision.",
    img: "/images/preparation-esthetique-vehicule.jpg",
  },
  {
    n: "03",
    t: "Retour clés en main",
    d: "Nous suivons votre numéro de train ou de vol. À la sortie du hall, le véhicule vous attend sur le parvis, propre, climatisé ou chauffé.",
    img: "/images/jockey-gare-quimper.jpg",
  },
];

const PACKS = [
  {
    t: "Pack Parvis Quimper",
    d: "Gare SNCF. Prise en charge ou restitution sur le parvis. Photos du véhicule. Clés en main propre.",
  },
  {
    t: "Pack Aéroport Brest ou Lorient",
    d: "Dépose ou rapatriement. Synchronisation du numéro de vol. On s’adapte au retard.",
  },
  {
    t: "Options confort",
    d: "Nettoyage intérieur et extérieur, 45 €. Plein ou charge 90 %, 65 €. Gardiennage selon durée.",
  },
];

const FAQ = [
  {
    q: "Vous me conduisez, moi, jusqu’à la gare ?",
    a: "Non. C’est un déplacement de véhicule confié. Vous prenez le train ou l’avion. Nous prenons la voiture. Pas de transport de passagers.",
  },
  {
    q: "Où se fait la prise en charge ?",
    a: "Dépose-minute de la gare de Quimper, de l’aéroport Brest-Bretagne, de l’aéroport Lorient-Bretagne Sud, des gares de Brest et Rennes, ou une autre adresse locale.",
  },
  {
    q: "Et si le train a du retard ?",
    a: "Vous nous donnez le numéro. On suit. Le véhicule attend sur le parvis.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        kicker="Conciergerie gares et aéroports"
        title="Service voiturier et conciergerie."
        accent=""
        text="Solution premium pour cadres, professions libérales et résidents. Gare de Quimper, aéroports de Brest-Bretagne et Lorient. Prise en charge au dépose-minute, restitution ponctuelle sur le parvis."
        image="/images/jockey-gare-quimper.jpg"
        alt="Berline qui attend sur le parvis d’une gare"
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-10 sm:flex-row sm:px-8">
        <Link
          to="/simulateur"
          search={{ mission: "jockey" }}
          className="inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white"
        >
          Réserver mon créneau Jockey
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex h-14 items-center justify-center rounded-full border border-navy px-8 text-sm font-semibold text-navy"
        >
          {SITE.phone}
        </a>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-3">
        {STEPS.map((s) => (
          <article key={s.n} className="overflow-hidden rounded-[1.6rem] border border-line bg-surface">
            <img src={s.img} alt="" className="h-44 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">{s.n}</p>
              <h2 className="mt-2 font-display text-2xl text-navy">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <h2 className="font-display text-3xl text-navy sm:text-4xl">Les forfaits locaux</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Quimper, Brest, Lorient, Rennes. Le tarif s’affiche après vos coordonnées. Prix indicatif, à confirmer.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PACKS.map((p) => (
            <div key={p.t} className="rounded-[1.6rem] border border-line bg-surface p-7">
              <h3 className="font-display text-xl text-navy">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.d}</p>
            </div>
          ))}
        </div>
        <img
          src="/images/jockey-aeroport-bretagne.jpg"
          alt="Véhicule au dépose-minute d’un aéroport breton"
          className="mt-10 h-72 w-full rounded-[1.8rem] object-cover"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="rounded-[1.8rem] bg-navy p-8 text-surface sm:p-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-surface/50 uppercase">Cadre</p>
          <h2 className="mt-3 font-display text-3xl">Convoyage de véhicule. Pas de passager.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-surface/80">
            Prestation exclusive de convoyage et de déplacement de véhicule confié, sans transport de passagers à bord. Assurance tous risques professionnelle. Mandat de conduite. Photos du véhicule, horodatées, avant et après.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 font-display text-3xl text-navy">Questions</h2>
        <Faq items={FAQ} />
        <FaqJsonLd items={FAQ} />
      </section>
      <CtaBar />
    </main>
  );
}
