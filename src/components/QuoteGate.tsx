import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { downloadQuotePdf } from "@/lib/quote-pdf";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { SITE } from "@/lib/site";
import { quoteRange, type QuoteInput, type QuoteResult } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export function QuoteGate({
  quote,
  client,
  input,
}: {
  quote: QuoteResult;
  client: "part" | "pro";
  input: QuoteInput;
}) {
  const range = quoteRange(quote.total);
  const extras = [
    input.mission === "jockey" ? `Conciergerie ${input.jockeySens} · domicile ${input.from} · ${input.jockeyPoint}` : "",
    input.mission === "jockey" && input.jockeyRef ? `Train ou vol ${input.jockeyRef}` : "",
    input.mission === "convoyage" && input.tripMode === "retourVehicule" ? "Véhicule à reprendre au retour" : "",
    input.mission === "convoyage" && input.tripMode === "aller" ? "Aller simple, retour chauffeur inclus" : "",
    input.clientKind === "pro" ? "Client professionnel" : "Client particulier",
    input.pack === "essentiel" ? (input.clientKind === "pro" ? "Pack Atelier" : "Pack Route") : "",
    input.pack === "confort" ? (input.clientKind === "pro" ? "Pack Livraison client" : "Pack Sérénité") : "",
    input.pack === "premium" ? (input.clientKind === "pro" ? "Pack Signature réseau" : "Pack Sécurisé") : "",
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kind, setKind] = useState<"part" | "pro">(client);
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState(input.pickupDate ?? "");
  const [busy, setBusy] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [mailOk, setMailOk] = useState(true);
  const [contactError, setContactError] = useState("");
  const [tilt, setTilt] = useState({ x: 8, y: -8, z: 0.96 });
  const scene = useRef<HTMLDivElement>(null);

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

  const extrasLabel = extras || "Aucune option";

  const payloadBase = () => ({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    client: kind,
    company: company.trim(),
    email: email.trim() || SITE.email,
    phone: phone.trim(),
    fromName: quote.fromName,
    toName: quote.toName,
    km: quote.km,
    delay: quote.delay,
    range,
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
      setMailOk(sent.ok);
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
      setAccepted(true);
    } finally {
      setBusy(false);
    }
  };

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
            {quote.fromName} vers {quote.toName}
          </p>
          {revealed ? (
            <>
              <p className="mt-8 text-sm text-surface/70">Devis chiffré, à confirmer</p>
              <p className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                de {formatEuro(range.low)} à {formatEuro(range.high)}
              </p>
              <p className="mt-4 text-sm text-surface/70">
                Autour de {formatEuro(range.mid)}. {quote.km} km. {quote.delay}.
              </p>
              {pickupDate ? (
                <p className="mt-3 text-sm text-surface/70">Prise en charge souhaitée : {pickupDate}</p>
              ) : null}
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-surface/75">
                Vous pouvez accepter ce devis. Clément confirme ensuite le créneau, ou vous contacte.
              </p>
              <Button
                type="button"
                className="mt-8"
                onClick={() => void downloadQuotePdf(payloadBase())}
              >
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
                Nom, prénom, et un téléphone ou un e-mail. Le montant s’affiche ensuite. Vous pourrez l’accepter.
              </p>
            </>
          )}
        </div>
      </div>

      {accepted ? (
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Devis accepté</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {firstName}, votre acceptation est enregistrée. Clément confirme la date de prise en charge, ou vous
            contacte sous deux heures ouvrées.
          </p>
        </div>
      ) : revealed ? (
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Accepter ce devis</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Fourchette de {formatEuro(range.low)} à {formatEuro(range.high)}. Le créneau n’est pas bloqué tant que
            Clément n’a pas confirmé.
          </p>
          <Button type="button" className="mt-8 w-full" size="lg" disabled={busy} onClick={() => void acceptQuote()}>
            {busy ? "Envoi…" : "J’accepte ce devis"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Vous proposez une date. Convoyage BZH confirme, ou reprend contact pour un autre créneau.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Vos coordonnées</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Prénom, nom, et un moyen de contact. Puis le devis chiffré.
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
            {busy ? "Envoi…" : "Afficher mon devis"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Téléphone ou e-mail, au moins l’un des deux. Devis ferme sous deux heures ouvrées, après confirmation du
            créneau par Convoyage BZH.
          </p>
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