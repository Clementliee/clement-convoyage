import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { downloadQuotePdf } from "@/lib/quote-pdf";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { SITE } from "@/lib/site";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";
import { makeQuoteNo, packQuotes, type PackKind, type QuoteInput, type QuoteResult } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

function packLabel(kind: "part" | "pro", pack: PackKind) {
  const list = kind === "pro" ? PACKS_PRO : PACKS_PART;
  return list.find((p) => p.id === pack)?.name ?? "Formule";
}

function extrasLine(input: QuoteInput, pack: PackKind, kind: "part" | "pro") {
  return [
    input.mission === "jockey" ? `Conciergerie ${input.jockeySens} · domicile ${input.from} · ${input.jockeyPoint}` : "",
    input.mission === "jockey" && input.jockeyRef ? `Train ou vol ${input.jockeyRef}` : "",
    input.mission === "convoyage" && input.tripMode === "retourVehicule" ? "Véhicule à reprendre au retour" : "",
    input.mission === "convoyage" && input.tripMode === "aller" ? "Aller simple, retour chauffeur inclus" : "",
    kind === "pro" ? "Client professionnel" : "Client particulier",
    packLabel(kind, pack),
    input.gps ? "Traceur GPS 4G cédé, 12 mois" : "",
    input.gpsMission ? "Suivi GPS le temps de la mission" : "",
    input.videoLivraison ? "Livraison vidéo" : "",
    "Mise en main personnalisée, offerte",
    input.plein ? "Plein carburant" : "",
    input.coffret === "champagne" ? "Coffret champagne et chocolats" : input.coffret === "armor" ? "Coffret Terroir Breton" : "",
    input.model ? `Véhicule : ${input.model}` : "",
    input.vehicle === "prestige" ? "Véhicule de haute valeur" : "",
    input.vehicle === "utilitaire" ? "Utilitaire" : "",
    input.when === "urgent" ? "Urgent, sous 72 h" : "Standard, 5 jours",
    input.pickupDate ? `Date souhaitée : ${input.pickupDate}` : "",
  ]
    .filter(Boolean)
    .join(", ");
}

export function QuoteGate({
  quote,
  client,
  input,
}: {
  quote: QuoteResult;
  client: "part" | "pro";
  input: QuoteInput;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kind, setKind] = useState<"part" | "pro">(client);
  const [pack, setPack] = useState<PackKind>(input.pack);
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState(input.pickupDate ?? "");
  const [busy, setBusy] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [contactError, setContactError] = useState("");
  const [tilt, setTilt] = useState({ x: 8, y: -8, z: 0.96 });
  const scene = useRef<HTMLDivElement>(null);
  const quoteNo = useMemo(() => makeQuoteNo(), []);

  const convoyage = input.mission !== "jockey";
  const scenarios = useMemo(
    () => (convoyage ? packQuotes({ ...input, clientKind: kind }) : []),
    [convoyage, input, kind],
  );
  const currentQuote = scenarios.find((s) => s.pack === pack)?.quote ?? quote;
  const extrasLabel = extrasLine({ ...input, pickupDate }, pack, kind) || "Aucune option";

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTilt({ x: 0, y: 0, z: 1 });
      return;
    }
    const onScroll = () => {
      const el = scene.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const view = window.innerHeight / 2;
      const p = Math.max(-1, Math.min(1, (mid - view) / view));
      setTilt({
        x: revealed ? 0 : 8 * p + 3,
        y: revealed ? 0 : -10 * p,
        z: revealed ? 1 : 0.93 + (1 - Math.abs(p)) * 0.07,
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealed]);

  const payloadBase = () => ({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    client: kind,
    company: company.trim(),
    email: email.trim() || SITE.email,
    phone: phone.trim(),
    fromName: currentQuote.fromName,
    toName: currentQuote.toName,
    km: currentQuote.km,
    delay: currentQuote.delay,
    total: currentQuote.total,
    quoteNo,
    lines: currentQuote.lines,
    extras: extrasLabel,
    pickupDate: pickupDate.trim(),
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setContactError("Indiquez votre nom et votre prénom.");
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setContactError("Indiquez un téléphone ou un e-mail.");
      return;
    }
    if (kind === "pro" && !company.trim()) {
      setContactError("Indiquez le nom de la société.");
      return;
    }
    setContactError("");
    setBusy(true);
    const payload = payloadBase();
    try {
      const sent = await sendDevisLead(payload);
      await downloadQuotePdf(payload);
      setRevealed(true);
      if (!sent.ok) {
        window.location.href = mailtoFallback(payload);
      }
    } finally {
      setBusy(false);
    }
  };

  const acceptQuote = async () => {
    setBusy(true);
    const payload = { ...payloadBase(), accepted: true };
    try {
      await sendDevisLead(payload);
      await downloadQuotePdf(payload);
      setAccepted(true);
    } finally {
      setBusy(false);
    }
  };

  const packs = kind === "pro" ? PACKS_PRO : PACKS_PART;

  return (
    <div className="mt-4 grid items-start gap-12 lg:grid-cols-2">
      <div ref={scene} className="perspective-scene px-1 pb-6 pt-8 lg:sticky lg:top-24">
        <div
          className="card-3d min-h-[360px] rounded-[2.2rem] bg-navy p-10 text-surface shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)]"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.z})`,
            transition: "transform 500ms cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-surface/50 uppercase">
            {currentQuote.fromName} vers {currentQuote.toName} · {quoteNo}
          </p>
          {revealed ? (
            <>
              <p className="mt-8 text-sm text-surface/70">{packLabel(kind, pack)}</p>
              <p className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{formatEuro(currentQuote.total)}</p>
              <p className="mt-4 text-sm text-surface/70">
                TTC, franchise de TVA. {currentQuote.km} km. {currentQuote.delay}.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-surface/70">
                {currentQuote.lines.map((line) => (
                  <li key={line.label} className="flex justify-between gap-4">
                    <span>{line.label}</span>
                    <span className="shrink-0 text-surface">{formatEuro(line.amount)}</span>
                  </li>
                ))}
              </ul>
              {pickupDate ? (
                <p className="mt-4 text-sm text-surface/70">Prise en charge souhaitée : {pickupDate}</p>
              ) : null}
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-surface/75">
                Tarif fermé {SITE.quoteValidityDays} jours. Vous signez. Nous confirmons le créneau, pas le prix.
              </p>
              <Button type="button" className="mt-8" onClick={() => void downloadQuotePdf(payloadBase())}>
                Télécharger le PDF
              </Button>
            </>
          ) : (
            <>
              <p className="mt-10 font-display text-4xl tracking-tight sm:text-5xl">
                Votre devis
                <br />
                est prêt.
              </p>
              <p className="mt-8 select-none font-display text-5xl tracking-tight text-surface/20 blur-[6px]">
                Prix masqué
              </p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-surface/70">
                Nom, prénom, et un téléphone ou un e-mail. En une minute, le montant s’affiche et part par e-mail. Vous signez.
              </p>
            </>
          )}
        </div>
      </div>

      {accepted ? (
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Devis signé</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {firstName}, le tarif est verrouillé à {formatEuro(currentQuote.total)}. Nous confirmons la date de prise
            en charge, ou nous proposons un autre créneau. Le PDF signé est sur votre appareil
            {email.trim() ? " et le devis est parti par e-mail" : ""}.
          </p>
        </div>
      ) : revealed ? (
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Signer ce devis</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {formatEuro(currentQuote.total)} TTC. Tarif national, fermé {SITE.quoteValidityDays} jours. L’acceptation
            vaut accord sur le montant.
          </p>
          {convoyage && scenarios.length ? (
            <div className="mt-6 grid gap-2">
              <p className="text-sm text-muted">Comparer les trois formules</p>
              {scenarios.map((s) => {
                const meta = packs.find((p) => p.id === s.pack);
                const on = pack === s.pack;
                return (
                  <button
                    key={s.pack}
                    type="button"
                    onClick={() => setPack(s.pack)}
                    className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left ${
                      on ? "border-navy bg-sand" : "border-line bg-bg hover:border-navy"
                    }`}
                  >
                    <span>
                      <span className="block font-medium text-navy">{meta?.name}</span>
                      <span className="block text-xs text-muted">{meta?.tag}</span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-coral">{formatEuro(s.quote.total)}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
          <Button type="button" className="mt-8 w-full" size="lg" disabled={busy} onClick={() => void acceptQuote()}>
            {busy ? "Envoi…" : "J’accepte ce devis"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Vous signez le tarif. Convoyage BZH confirme le créneau, ou propose une autre date. Le prix ne bouge pas.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Vos coordonnées</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Prénom, nom, et un moyen de contact. En une minute : le montant s’affiche, un e-mail part, vous signez.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Field label="Prénom" required value={firstName} onChange={setFirstName} autoComplete="given-name" />
            <Field label="Nom" required value={lastName} onChange={setLastName} autoComplete="family-name" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <KindButton active={kind === "part"} onClick={() => setKind("part")} label="Particulier" />
            <KindButton active={kind === "pro"} onClick={() => setKind("pro")} label="Professionnel" />
          </div>
          {kind === "pro" ? (
            <div className="mt-4">
              <Field label="Société" required value={company} onChange={setCompany} autoComplete="organization" />
            </div>
          ) : null}
          <div className="mt-4">
            <Field label="Téléphone" required={!email.trim()} value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
          </div>
          <div className="mt-4">
            <Field label="E-mail" required={!phone.trim()} value={email} onChange={setEmail} type="email" autoComplete="email" />
          </div>
          <div className="mt-4">
            <Field label="Date de prise en charge souhaitée" value={pickupDate} onChange={setPickupDate} type="date" />
          </div>
          {contactError ? <p className="mt-3 text-sm text-coral">{contactError}</p> : null}
          <Button type="submit" className="mt-8 w-full" size="lg" disabled={busy}>
            {busy ? "Envoi…" : "Recevoir mon devis par e-mail"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted">{SITE.quotePromise}</p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      {required ? <span className="text-coral"> *</span> : null}
      <input
        required={required}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
        suppressHydrationWarning
      />
    </label>
  );
}

function KindButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "h-12 rounded-full bg-navy text-sm font-semibold text-white"
          : "h-12 rounded-full border border-line bg-surface text-sm text-navy"
      }
    >
      {label}
    </button>
  );
}
