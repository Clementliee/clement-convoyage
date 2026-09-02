import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DOSSIER_CHECKLIST, type DossierPayload, type StoredQuote, upsertQuote } from "@/lib/quotes-store";
import { mailtoFallback, sendDevisLead, type LeadPayload } from "@/lib/send-devis";
import { formatEuro } from "@/lib/utils";

const EMPTY: DossierPayload = {
  make: "",
  model: "",
  plate: "",
  energy: "",
  insurance: "",
  policy: "",
  papers: "",
  keysAddress: "",
  contactOnSite: "",
  notes: "",
};

export function MissionDossier({
  quote,
  lead,
}: {
  quote: StoredQuote;
  lead: LeadPayload;
}) {
  const [form, setForm] = useState<DossierPayload>(quote.dossier ?? EMPTY);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(quote.status === "dossier");
  const [error, setError] = useState("");

  const set = (k: keyof DossierPayload) => (v: string) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.make.trim() || !form.model.trim() || !form.plate.trim()) {
      setError("Indiquez au moins la marque, le modèle et l’immatriculation.");
      return;
    }
    setError("");
    setBusy(true);
    const payload: LeadPayload = { ...lead, accepted: true, dossier: form };
    try {
      const sent = await sendDevisLead(payload);
      upsertQuote({ ...quote, status: "dossier", dossier: form });
      setDone(true);
      if (!sent.ok) window.location.href = mailtoFallback(payload);
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
        <p className="font-display text-3xl text-navy">Dossier reçu</p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {quote.firstName}, le devis {quote.quoteNo} est signé à {formatEuro(quote.total)}. Les informations véhicule
          sont parties. Nous confirmons le créneau, ou nous proposons une autre date.
        </p>
        <Link to="/suivi" className="mt-8 inline-flex h-12 items-center text-sm font-semibold text-navy hover:underline">
          Voir mes devis
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
      <p className="font-display text-3xl text-navy">Dossier de mission</p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Le tarif est verrouillé. Pour lancer la mission, ces informations suffisent. Vous pouvez aussi les envoyer par
        e-mail.
      </p>
      <ul className="mt-6 space-y-2">
        {DOSSIER_CHECKLIST.map((l) => (
          <li key={l} className="flex gap-3 text-sm leading-relaxed text-navy">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field label="Marque" required value={form.make} onChange={set("make")} />
        <Field label="Modèle" required value={form.model} onChange={set("model")} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Immatriculation" required value={form.plate} onChange={set("plate")} />
        <Field label="Énergie" value={form.energy} onChange={set("energy")} placeholder="Essence, diesel, électrique…" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Assureur" value={form.insurance} onChange={set("insurance")} />
        <Field label="N° de police" value={form.policy} onChange={set("policy")} />
      </div>
      <div className="mt-4">
        <Field
          label="Documents"
          value={form.papers}
          onChange={set("papers")}
          placeholder="Carte grise à bord, attestation envoyée par mail…"
        />
      </div>
      <div className="mt-4">
        <Field
          label="Adresse des clés / prise en charge"
          value={form.keysAddress}
          onChange={set("keysAddress")}
        />
      </div>
      <div className="mt-4">
        <Field label="Contact sur place" value={form.contactOnSite} onChange={set("contactOnSite")} />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-muted">
          Notes
          <textarea
            value={form.notes}
            onChange={(e) => set("notes")(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
          />
        </label>
      </div>
      {error ? <p className="mt-3 text-sm text-coral">{error}</p> : null}
      <Button type="submit" className="mt-8 w-full" size="lg" disabled={busy}>
        {busy ? "Envoi…" : "Envoyer le dossier"}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Si vous préférez, répondez à l’e-mail du devis avec la même liste. Le prix ne change pas.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      {required ? <span className="text-coral"> *</span> : null}
      <input
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
      />
    </label>
  );
}
