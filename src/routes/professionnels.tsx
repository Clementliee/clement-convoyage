import { createFileRoute } from '@tanstack/react-router'
import { AppLink } from "@/components/AppLink";
import { useState, type FormEvent } from "react";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { B2B_CASES, B2B_OFFERS } from "@/lib/offers";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/professionnels")({
  head: () =>
    pageHead({
      title: "Convoyage professionnel. Concessions, garages, flottes.",
      description:
        "Compte professionnel Convoyage BZH. Concessions, garages, mandataires, marchands VO, loueurs, flottes. Facturation, compte-rendu, astreinte 24 h.",
      path: "/professionnels",
      image: "/images/remise-cles-vehicule.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Professionnels"
        title="Votre flotte bouge."
        accent="Nous prenons les véhicules."
        text="Concessions, garages, mandataires, marchands VO, loueurs, flottes. Un interlocuteur à Quimper."
        image="/images/atelier-garage-professionnel.jpg"
        alt="Transfert de véhicule pour un garage en Bretagne"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Le problème</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Déplacer un véhicule mobilise un vendeur, un mécanicien, un préparateur. Ce n’est pas leur métier. C’est le nôtre.
            </p>
            <ul className="mt-8 space-y-4 text-muted">
              <li>Livrer un client sans sortir un commercial.</li>
              <li>Transférer une VO entre sites.</li>
              <li>Récupérer un véhicule atelier, CT, carrosserie.</li>
              <li>Préparer une remise : propre, contrôlée, documentée.</li>
            </ul>
          </div>
          <div className="rounded-[1.8rem] bg-sand p-8">
            <h2 className="font-display text-3xl text-navy">La solution</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Convoyage BZH prend la mission. État des lieux, convoyage, préparation, remise, compte-rendu. Paiement à quinze jours. Cadre volume après trois missions test.
            </p>
            <p className="mt-4 text-sm text-muted">Astreinte 24 h. Tous les jours. {SITE.phone}.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {B2B_OFFERS.map((c) => (
            <div key={c.t} className="rounded-[1.5rem] bg-sand p-6">
              <h3 className="font-display text-xl text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {B2B_CASES.map((c) => (
            <div key={c.t} className="rounded-[1.5rem] border border-line bg-surface p-6">
              <h3 className="font-display text-xl text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_minmax(0,420px)]">
          <div>
            <h2 className="font-display text-3xl text-navy">Demander une grille tarifaire partenaire Pro</h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>Interlocuteur unique.</li>
              <li>Devis sous 2 heures ouvrées.</li>
              <li>Facturation, historique des missions.</li>
              <li>Conditions de volume après cadrage.</li>
              <li>Rapports standardisés, photos.</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              L’espace client (suivi, factures) viendra. Aujourd’hui : un cadre clair, un téléphone, un e-mail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppLink to="/convoyage-concession" className="rounded-full border border-line px-5 py-2.5 text-sm">
                Concessions
              </AppLink>
              <AppLink to="/simulateur" className="rounded-full border border-line px-5 py-2.5 text-sm">
                Estimer une mission
              </AppLink>
            </div>
          </div>
          <ProForm />
        </div>
      </section>
      <CtaBar secondaryTo="/contact" secondaryLabel={`Appeler ${SITE.phone}`} />
    </main>
  );
}

function ProForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [mailOk, setMailOk] = useState(true);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const payload = {
      firstName,
      lastName,
      client: "pro" as const,
      company,
      email,
      phone,
      fromName: SITE.city,
      toName: "Compte professionnel",
      km: 0,
      delay: "cadre volume",
      range: { low: 0, mid: 0, high: 0 },
      extras: volume ? `Grille partenaire Pro. Volume estimé : ${volume}` : "Demande de grille tarifaire partenaire Pro",
      message,
    };
    const res = await sendDevisLead(payload);
    setMailOk(res.ok);
    if (!res.ok) mailtoFallback(payload);
    setDone(true);
    setBusy(false);
  };

  if (done) {
    return (
      <div className="rounded-[1.8rem] border border-line bg-surface p-8">
        <p className="font-display text-2xl text-navy">Demande envoyée.</p>
        <p className="mt-3 text-sm text-muted">
          {mailOk
            ? "Un e-mail part vers vous. Clément revient sous 2 heures ouvrées."
            : "Votre messagerie s’est ouverte. Envoyez le message, ou rappelez."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[1.8rem] border border-line bg-surface p-6 sm:p-8">
      <p className="font-display text-2xl text-navy">Grille tarifaire partenaire Pro</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input required placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
        <input required placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} className="rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      </div>
      <input required placeholder="Société" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-3 w-full rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      <input required type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-3 w-full rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      <input required type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-3 w-full rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      <input placeholder="Volume mensuel estimé (missions)" value={volume} onChange={(e) => setVolume(e.target.value)} className="mt-3 w-full rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      <textarea placeholder="Sites, types de véhicules, contraintes" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-3 min-h-28 w-full rounded-2xl border border-line bg-bg px-4 py-3" suppressHydrationWarning />
      <Button type="submit" className="mt-5 w-full" disabled={busy}>
        {busy ? "Envoi…" : "Demander la grille partenaire Pro"}
      </Button>
    </form>
  );
}
