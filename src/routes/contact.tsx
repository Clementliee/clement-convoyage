import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact convoyage voiture Quimper. Devis sous 2 h.",
      description:
        "Contactez Convoyage BZH à Quimper. Devis sous 2 heures. Téléphone 06 24 04 85 73, e-mail. Tous les jours.",
      path: "/contact",
    }),
  component: Page,
});

function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kind, setKind] = useState<"part" | "pro">("part");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("Quimper");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      client: kind,
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      fromName: from.trim() || "Quimper",
      toName: to.trim() || "à préciser",
      km: 0,
      delay: "à confirmer",
      range: { low: 0, mid: 0, high: 0 },
      extras: "Demande contact",
      message: message.trim(),
    };
    const sent = await sendDevisLead(payload);
    setBusy(false);
    if (sent.ok) setDone(true);
    else window.location.href = mailtoFallback(payload);
  };

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Devis sous"
        accent="2 heures."
        text={`${SITE.hours}. Base ${SITE.city}.`}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        {done ? (
          <div className="rounded-[1.6rem] border border-line bg-surface p-8">
            <p className="font-display text-2xl text-navy">C’est envoyé.</p>
            <p className="mt-3 text-sm text-muted">
              Un e-mail de confirmation part sur {email}. Clément vous répond sous 2 heures ouvrées.
            </p>
          </div>
        ) : (
          <form className="space-y-3 rounded-[1.6rem] border border-line bg-surface p-6" onSubmit={submit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Prénom" value={firstName} onChange={setFirstName} />
              <Field label="Nom" value={lastName} onChange={setLastName} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setKind("part")}
                className={`rounded-2xl border px-3 py-3 text-sm ${kind === "part" ? "border-navy bg-navy text-surface" : "border-line"}`}
              >
                Particulier
              </button>
              <button
                type="button"
                onClick={() => setKind("pro")}
                className={`rounded-2xl border px-3 py-3 text-sm ${kind === "pro" ? "border-navy bg-navy text-surface" : "border-line"}`}
              >
                Professionnel
              </button>
            </div>
            {kind === "pro" ? <Field label="Société" value={company} onChange={setCompany} /> : null}
            <Field label="Téléphone" value={phone} onChange={setPhone} type="tel" />
            <Field label="E-mail" value={email} onChange={setEmail} type="email" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Départ" value={from} onChange={setFrom} />
              <Field label="Arrivée" value={to} onChange={setTo} required={false} />
            </div>
            <label className="block text-sm text-muted">
              Message
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-navy"
              />
            </label>
            <Button type="submit" className="w-full" size="lg" disabled={busy}>
              {busy ? "Envoi…" : "Envoyer"}
            </Button>
            <p className="text-xs text-muted">
              Un e-mail part vers vous et vers {SITE.email}. Réponse sous 2 h ouvrées.
            </p>
          </form>
        )}
        <div className="space-y-4 text-muted">
          <p>
            <span className="block text-xs uppercase tracking-wider text-coral">Téléphone</span>
            <a href={SITE.phoneHref} className="font-display text-2xl text-navy">
              {SITE.phone}
            </a>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-wider text-coral">E-mail</span>
            <a href={`mailto:${SITE.email}`} className="text-navy">
              {SITE.email}
            </a>
          </p>
          <p>
            {SITE.city}
            <br />
            {SITE.region}
          </p>
          <p>SIRET {SITE.siret}</p>
          <p className="text-sm">{SITE.form}. {SITE.vat}.</p>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = true,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-navy"
      />
    </label>
  );
}
