import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { HeroStage } from "@/components/HeroStage";
import { HomeEstimator } from "@/components/HomeEstimator";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import { B2B_OFFERS, B2C_CASES, FORMULAS, PACKS, PILLARS, PROCESS, PROTOCOL, SECURITY, WHY } from "@/lib/offers";
import { INCLUDED, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Convoyage de voiture à Quimper. Livraison France et Europe.",
      description:
        "Convoyage BZH. Convoyage, préparation, contrôle et remise de véhicules depuis Quimper. Particuliers et professionnels. Devis sous 2 h.",
      path: "/",
      image: "/images/01_hero_bretagne.jpg",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Qui êtes-vous ?",
    a: "Convoyage BZH, basé à Quimper. Clément pilote les missions. Expérience la remise en concession. Convoyage, préparation, contrôle, remise.",
  },
  {
    q: "Quels véhicules convoyez-vous ?",
    a: "Particuliers et utilitaires jusqu’à 3,5 t, en état de marche, permis B. Hors champ : plateau, non-roulant, poids lourd.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Bretagne, France entière, et Europe selon mission. Pologne, Monaco, Serbie comprises.",
  },
  {
    q: "Pour qui ?",
    a: "Particuliers (achat à distance, import, déménagement) et professionnels (concessions, garages, mandataires, marchands VO, loueurs, flottes).",
  },
  {
    q: "Combien coûte un convoyage ?",
    a: "Cela dépend de la distance, du véhicule, de la date, de l’urgence et des options. Un trajet local part d’un forfait. La fourchette s’affiche après nom, téléphone et e-mail. Prix indicatif, à confirmer.",
  },
  {
    q: "Comment se déroule une mission ?",
    a: "Vous demandez, on confirme, on prend le véhicule, on le livre, on remet les clés. Photos au départ et à l’arrivée. Mise en main offerte.",
  },
  {
    q: "Quels services complémentaires ?",
    a: "Nettoyage intérieur et extérieur (45 €), traqueur GPS 4G pour l’acheteur (199 €), plein ou charge 90 % (65 €), coffret Armor 45 € ou Champagne 89 €. La mise en main est offerte.",
  },
  {
    q: "Proposez-vous du convoyage professionnel ?",
    a: "Oui. Compte professionnel, paiement à quinze jours, cadre volume après trois missions test, astreinte 24 h.",
  },
  {
    q: "Faites-vous une expertise ?",
    a: "Non. On photographie le véhicule au départ et à l’arrivée. Ce n’est pas une expertise.",
  },
  {
    q: "Le GPS, c’est pour suivre le convoyeur ?",
    a: "Non. Option 199 € pour l’acheteur. Traceur 4G, il le garde. 12 mois inclus.",
  },
];

function Home() {
  return (
    <main>
      <HeroStage />

      <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Plus qu’un convoyage</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-navy sm:text-5xl">
            Transfert, préparation, contrôle, remise.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.k} delay={i * 60} className="rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">{p.k}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Particuliers</p>
          <h2 className="mt-4 font-display text-4xl text-navy">Vous n’avez pas à prendre le train.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {B2C_CASES.map((c) => (
            <div key={c.t} className="rounded-[1.5rem] bg-sand px-6 py-7">
              <h3 className="font-display text-xl text-navy">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2.2rem] bg-navy text-surface lg:grid lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <p className="text-xs font-semibold tracking-[0.22em] text-surface/50 uppercase">Professionnels</p>
              <h2 className="mt-4 font-display text-4xl">Partenaires B2B et concessions.</h2>
              <p className="mt-5 text-base leading-relaxed text-surface/75">
                Garages, marchands VO, concessions, carrosseries de Bretagne. Un interlocuteur, un compte-rendu, une facture.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-surface/80">
                {B2B_OFFERS.map((c) => (
                  <li key={c.t}>
                    <span className="font-semibold text-surface">{c.t}.</span> {c.d}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/professionnels"
                  className="inline-flex h-12 items-center rounded-full bg-coral px-6 text-sm font-semibold"
                >
                  Demander une grille tarifaire partenaire Pro
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex h-12 items-center rounded-full border border-surface/30 px-6 text-sm font-semibold"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
            <img src="/images/12_garage_b2b.jpg" alt="Transfert de véhicule depuis un garage en Bretagne" className="h-72 w-full object-cover lg:h-full" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">L’offre</p>
          <h2 className="mt-4 font-display text-4xl text-navy">Livraison, puis vous ajoutez.</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            La mise en main est offerte. Le nettoyage, le GPS pour l’acheteur, le plein : prix affichés, vous cochez ou non. Le tarif de la livraison vient après vos coordonnées.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FORMULAS.map((f) => (
            <div key={f.id} className="rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{f.tag}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{f.name}</h3>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                {f.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <Link to="/simulateur" className="mt-8 inline-flex text-sm font-semibold text-coral">
                Estimer
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Packs</p>
          <h2 className="mt-4 font-display text-4xl text-navy">Mise à la route.</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Trois niveaux. Prix indicatifs, à confirmer. Le convoyage se calcule à part, après vos coordonnées.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PACKS.map((p) => (
            <div key={p.id} className="flex flex-col rounded-[1.8rem] border border-line bg-surface p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">À partir de {p.from} €</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <Link to="/pack-mise-a-la-route" className="mt-8 text-sm font-semibold text-coral">
                Voir le pack
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">{PROTOCOL.name}</p>
          <h2 className="mt-4 font-display text-4xl text-navy">Avant, pendant, après.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Avant", d: "Identification, kilométrage, carburant, photos, carrosserie, intérieur, documents." },
            { t: "Pendant", d: "Suivi, communication, signalement, consignes. GPS temporaire si demandé." },
            { t: "Après", d: "Kilométrage, carburant, photos, clés, compte-rendu." },
          ].map((b) => (
            <div key={b.t} className="rounded-[1.6rem] border border-line bg-surface p-8">
              <h3 className="font-display text-2xl text-navy">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </div>
          ))}
        </div>
        <AppLink to="/protocole-clement" className="mt-8 inline-flex text-sm font-semibold text-coral">
          Lire le protocole
        </AppLink>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-coral uppercase">Sécurité et rigueur</p>
          <h2 className="mt-4 font-display text-4xl text-navy">Le véhicule n’est pas un colis.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SECURITY.map((s) => (
            <div key={s.t} className="rounded-[1.6rem] border border-line bg-surface p-7">
              <h3 className="font-display text-xl text-navy">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
        <img src="/images/13_cles_carre.jpg" alt="Remise des clés" className="mt-8 h-72 w-full rounded-[1.8rem] object-cover object-center" />
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line">
            <img src="/images/03_nettoyage.jpg" alt="Préparation d’un véhicule avant remise" className="h-64 w-full object-cover" />
            <div className="p-8">
              <h2 className="font-display text-3xl text-navy">Préparation et nettoyage</h2>
              <p className="mt-4 text-muted">
                Lavage, aspiration, vitres, plein ou recharge. Pas un centre de detailing. Une préparation de remise, réaliste.
              </p>
              <Link to="/preparation-vehicule" className="mt-6 inline-flex text-sm font-semibold text-coral">
                Préparation véhicule
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-[2rem] bg-navy px-8 py-10 text-surface">
            <p className="text-xs font-semibold tracking-[0.2em] text-surface/50 uppercase">Toujours inclus</p>
            <ul className="mt-8 space-y-5">
              {INCLUDED.map((item) => (
                <li key={item.t}>
                  <p className="font-display text-xl">{item.t}</p>
                  <p className="mt-1 text-sm text-surface/70">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">France et Europe</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Base Quimper. Bretagne d’abord. France entière. Europe selon mission.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              ["/convoyage-quimper", "Quimper"],
              ["/convoyage-brest", "Brest"],
              ["/convoyage-lorient", "Lorient"],
              ["/convoyage-rennes", "Rennes"],
              ["/convoyage-nantes", "Nantes"],
              ["/convoyage-paris", "Paris"],
              ["/convoyage-pologne", "Pologne"],
              ["/convoyage-monaco", "Monaco"],
              ["/destinations", "Toutes les destinations"],
            ].map(([to, label]) => (
              <AppLink
                key={to}
                to={to}
                className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-navy hover:border-coral"
              >
                {label}
              </AppLink>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">Comment ça marche</h2>
          <ol className="mt-10 space-y-8">
            {PROCESS.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-display text-2xl text-coral">{s.n}</span>
                <div>
                  <p className="font-display text-2xl text-navy">{s.t}</p>
                  <p className="mt-1 text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={80}>
          <HomeEstimator />
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">Pourquoi Convoyage BZH</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.t} className="rounded-[1.5rem] border border-line bg-surface p-6">
              <h3 className="font-display text-xl text-navy">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">Avis</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Les avis Google seront publiés ici dès les premières missions. Pas de notes inventées. {SITE.phone}.
          </p>
          <Link to="/avis" className="mt-6 inline-flex text-sm font-semibold text-coral">
            Page avis
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2 className="mb-8 font-display text-4xl text-navy">Questions</h2>
          <Faq items={FAQ} />
          <FaqJsonLd items={FAQ} />
        </Reveal>
      </section>

      <div className="mt-24 mb-8">
        <CtaBar />
      </div>
    </main>
  );
}
