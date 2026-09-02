import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  TRIP_MODES,
  applyPack,
  computeQuote,
  defaultQuoteInput,
  findCity,
  JOCKEY_POINTS,
  JOCKEY_SENS,
  JOCKEY_SERVICES,
  WHEN_OFFERS,
  type ClientKind,
  type MissionKind,
  type QuoteInput,
  type TripMode,
  type VehicleKind,
  type WhenKind,
  type JockeyService,
} from "@/lib/tarifs";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";

const STEPS = ["Trajet", "Formule"];

const JOCKEY_SERVICE_IDS = new Set(JOCKEY_SERVICES.map((s) => s.id));
const VEHICLE_IDS = new Set<VehicleKind>(["vp", "utilitaire", "prestige", "ve"]);

export function Simulator({
  initialFrom = "",
  initialTo = "",
  initialMission = "",
  initialService = "",
  initialClient = "",
  initialVehicle = "",
}: {
  initialFrom?: string;
  initialTo?: string;
  initialMission?: "" | MissionKind;
  initialService?: string;
  initialClient?: "" | ClientKind;
  initialVehicle?: string;
}) {
  const jockeyService = JOCKEY_SERVICE_IDS.has(initialService as JockeyService)
    ? (initialService as JockeyService)
    : undefined;
  const vehicle = VEHICLE_IDS.has(initialVehicle as VehicleKind) ? (initialVehicle as VehicleKind) : undefined;
  const clientInit: ClientKind = initialClient === "pro" || jockeyService === "flotte" ? "pro" : "part";

  const [flow, setFlow] = useState<"" | MissionKind>(initialMission || "");
  const [step, setStep] = useState(0);
  const [gate, setGate] = useState(false);
  const [client, setClient] = useState<ClientKind>(clientInit);
  const [input, setInput] = useState<QuoteInput>(
    defaultQuoteInput({
      from: initialFrom || "Quimper",
      to: initialTo,
      mission: initialMission === "jockey" ? "jockey" : "convoyage",
      clientKind: clientInit,
      vehicle: vehicle ?? "vp",
      rechargeVe: vehicle === "ve",
      protocolePrestige: vehicle === "prestige",
      jockeyService: jockeyService ?? "mouvement",
      jockeyRdv: jockeyService === "atelier" || jockeyService === "flotte",
      controleVisuel: jockeyService === "achat",
    }),
  );
  const [kmManual, setKmManual] = useState("");

  const quote = useMemo(
    () => computeQuote({ ...input, kmManual: kmManual ? Number(kmManual) : undefined }),
    [input, kmManual],
  );
  const europeAuto = Boolean(findCity(input.from)?.europe || findCity(input.to)?.europe);

  const canNext = Boolean(input.from.trim() && (input.to.trim() || kmManual));

  const next = () => {
    if (!canNext) return;
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const prev = () => {
    if (gate) {
      setGate(false);
      return;
    }
    if (step === 0) {
      setFlow("");
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  if (!flow) {
    return (
      <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Étape 1</p>
        <h2 className="mt-4 font-display text-3xl text-navy">Quelle mission ?</h2>
        <div className="mt-8">
          <Choice
            options={[
              {
                v: "convoyage",
                l: "Convoyage, livraison France et Europe",
                h: "Trajet point à point, formules particuliers ou professionnels",
              },
              {
                v: "jockey",
                l: "Conciergerie de véhicules",
                h: "Bretagne. Gare, atelier, flotte, prestige.",
              },
            ]}
            onPick={(v) => {
              const mission = v as MissionKind;
              setFlow(mission);
              setInput((s) => ({ ...s, mission }));
              setStep(0);
            }}
          />
        </div>
      </div>
    );
  }

  if (flow === "jockey") {
    return (
      <JockeyFlow
        input={input}
        setInput={setInput}
        client={client}
        setClient={setClient}
        gate={gate}
        setGate={setGate}
        quote={quote}
        skipService={Boolean(jockeyService)}
        startStep={jockeyService && (initialClient === "pro" || initialClient === "part" || jockeyService === "flotte") ? 2 : 0}
        onBack={() => {
          setFlow("");
          setGate(false);
          setStep(0);
        }}
      />
    );
  }

  if (gate && quote.ok) {
    return (
      <div>
        <button type="button" onClick={prev} className="mb-6 text-sm text-muted hover:text-navy">
          Modifier le trajet
        </button>
        <QuoteGate quote={quote} client={client} input={input} />
      </div>
    );
  }

  const packs = client === "pro" ? PACKS_PRO : PACKS_PART;

  return (
    <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
          Étape {step + 1} sur {STEPS.length}
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
          <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <h2 className="mt-6 font-display text-3xl text-navy">{STEPS[step]}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {step === 0
            ? "Base Quimper. L’approche et le retour du chauffeur sont intégrés. L’Europe est détectée d’après les villes."
            : client === "pro"
              ? "Trois formules professionnelles. Coffret, nettoyage et protocole selon la formule."
              : "Trois formules particulières. Plein et traceur GPS selon la formule."}
        </p>
      </div>

      {step === 0 ? (
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-sm text-muted">Qui commande</p>
            <Choice
              value={client}
              options={[
                { v: "part", l: "Particulier", h: "Règlement avant départ" },
                { v: "pro", l: "Professionnel", h: "Paiement à quinze jours" },
              ]}
              onPick={(v) => {
                const kind = v as ClientKind;
                setClient(kind);
                setInput((s) => applyPack({ ...s, clientKind: kind }, s.pack));
              }}
            />
          </div>
          <div>
            <p className="mb-3 text-sm text-muted">Véhicule</p>
            <Choice
              value={input.vehicle}
              options={[
                { v: "vp", l: "Véhicule particulier", h: "Berline, SUV, citadine" },
                { v: "utilitaire", l: "Utilitaire, van", h: "Permis B, jusqu’à 3,5 t" },
                { v: "prestige", l: "Prestige", h: "Berline, sportive" },
                { v: "ve", l: "Véhicule électrique", h: "Plan de recharge" },
              ]}
              onPick={(v) => {
                const vehicle = v as VehicleKind;
                setInput((s) => ({ ...s, vehicle, rechargeVe: vehicle === "ve" }));
              }}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <CityField
              id="from-city"
              name="from"
              label="Ville de départ"
              value={input.from}
              onChange={(from) => setInput((s) => ({ ...s, from }))}
            />
            <CityField
              id="to-city"
              name="to"
              label="Ville d’arrivée"
              value={input.to}
              onChange={(to) => setInput((s) => ({ ...s, to }))}
            />
          </div>
          <label className="block text-sm text-muted">
            Kilomètres GPS si la ville n’est pas dans la liste
            <input
              name="km"
              type="number"
              min={1}
              value={kmManual}
              onChange={(e) => setKmManual(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              placeholder="exemple, 210"
              suppressHydrationWarning
            />
          </label>
          {europeAuto ? (
            <p className="text-sm text-muted">Trajet européen. Formalités de frontière intégrées au devis.</p>
          ) : (
            <button
              type="button"
              onClick={() =>
                setInput((s) => ({ ...s, zone: s.zone === "europe" ? "france" : "europe" }))
              }
              className={`rounded-full border px-4 py-2 text-sm ${
                input.zone === "europe" ? "border-navy bg-sand text-navy" : "border-line text-muted"
              }`}
            >
              {input.zone === "europe" ? "Trajet européen" : "Marquer comme trajet européen"}
            </button>
          )}
          <div>
            <p className="mb-3 text-sm text-muted">Sens de mission</p>
            <Choice
              value={input.tripMode}
              options={TRIP_MODES.map((m) => ({ v: m.id, l: m.name, h: m.hint }))}
              onPick={(v) => setInput((s) => ({ ...s, tripMode: v as TripMode }))}
            />
          </div>
          <div>
            <p className="mb-3 text-sm text-muted">Quand</p>
            <WhenPicker
              value={input.when}
              onPick={(v) => setInput((s) => ({ ...s, when: v }))}
            />
            <label className="mt-4 block text-sm text-muted">
              Date de prise en charge souhaitée
              <input
                type="date"
                value={input.pickupDate ?? ""}
                onChange={(e) => setInput((s) => ({ ...s, pickupDate: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
            <p className="mt-2 text-sm text-muted">
              Vous proposez une date. Convoyage BZH confirme le créneau, ou vous contacte.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="rounded-[1.4rem] bg-sand px-5 py-5">
            <p className="text-sm text-muted">Mise en main personnalisée</p>
            <p className="font-display text-3xl text-coral">Offerte</p>
            <p className="mt-2 text-sm text-muted">
              À chaque pack. Configuration des aides à la conduite, multimédia, recharge.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {packs.map((p) => {
              const on = input.pack === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setInput((s) => applyPack(s, p.id))}
                  className={`flex flex-col rounded-[1.6rem] border p-5 text-left transition-colors ${
                    on ? "border-navy bg-sand" : "border-line bg-bg hover:border-navy"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">{p.tag}</span>
                  <span className="mt-2 font-display text-2xl text-navy">{p.name}</span>
                  <span className="mt-3 text-sm text-muted">Inclus au devis, selon la formule.</span>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <span className="mt-5 text-sm font-semibold text-navy">{on ? "Sélectionné" : "Choisir"}</span>
                </button>
              );
            })}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {client === "pro" ? (
              <Toggle
                label="Livraison vidéo"
                text="Film court à la remise, transmis au donneur d’ordre. La concession l’envoie au client."
                on={input.videoLivraison}
                onClick={() => setInput((s) => ({ ...s, videoLivraison: !s.videoLivraison }))}
              />
            ) : null}
            <Toggle
              label="Suivi GPS le temps de la mission"
              text="Balise posée au départ, retirée à la remise. Lien de suivi."
              on={input.gpsMission}
              onClick={() => setInput((s) => ({ ...s, gpsMission: !s.gpsMission }))}
            />
            {input.pack !== "premium" ? (
              <Toggle
                label="Traceur GPS 4G cédé"
                text="Reste dans le véhicule. Douze mois de suivi pour l’acquéreur."
                on={input.gps}
                onClick={() => setInput((s) => ({ ...s, gps: !s.gps }))}
              />
            ) : null}
            <Toggle
              label="Coffret champagne et chocolats"
              text="Remis avec les clés. Utile si la concession n’a pas préparé de cadeau."
              on={input.coffret === "champagne"}
              onClick={() =>
                setInput((s) => ({ ...s, coffret: s.coffret === "champagne" ? "aucun" : "champagne" }))
              }
            />
            <Toggle
              label="Coffret Terroir Breton"
              text="Galettes, caramels, cidre. Remis avec les clés."
              on={input.coffret === "armor"}
              onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "armor" ? "aucun" : "armor" }))}
            />
          </div>
          {quote.ok ? (
            <p className="text-sm leading-relaxed text-muted">
              {quote.fromName} → {quote.toName}
              {quote.km ? ` · ${quote.km} km` : ""}
              {quote.europe ? " · Europe" : ""}
              {input.tripMode === "retourVehicule" ? " · véhicule à reprendre" : " · aller simple"}. Le
              montant des trois formules s’affiche après vos coordonnées.
            </p>
          ) : (
            <p className="text-sm text-muted">{quote.message}</p>
          )}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={prev}>
          Retour
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} disabled={!canNext}>
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Générer mon devis — une minute
          </Button>
        )}
      </div>

      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
        Base Quimper. Approche et retour du chauffeur intégrés au devis.{" "}
        <Link to="/contact" className="text-coral">
          Contact
        </Link>
      </p>
    </div>
  );
}

function WhenPicker({
  value,
  onPick,
}: {
  value: WhenKind;
  onPick: (v: WhenKind) => void;
}) {
  return (
    <div className="grid gap-3">
      {WHEN_OFFERS.map((w) => {
        const on = value === w.id;
        return (
          <button
            key={w.id}
            type="button"
            onClick={() => onPick(w.id)}
            className={`flex flex-col gap-2 rounded-2xl border px-5 py-5 text-left transition-colors sm:flex-row sm:items-center sm:justify-between ${
              on ? "border-navy bg-sand" : "border-line bg-bg hover:border-navy"
            }`}
          >
            <span>
              <span className="block font-medium text-navy">{w.name}</span>
              <span className="mt-1 block text-sm text-muted">
                {w.delay}. {w.hint}
              </span>
            </span>
            <span className="shrink-0 text-sm font-semibold text-coral">{w.extraLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

function Choice({
  options,
  onPick,
  value,
}: {
  options: { v: string; l: string; h: string }[];
  onPick: (v: string) => void;
  value?: string;
}) {
  return (
    <div className="grid gap-3">
      {options.map((o) => {
        const on = value === o.v;
        return (
          <button
            key={o.v}
            type="button"
            onClick={() => onPick(o.v)}
            className={`flex flex-col gap-1 rounded-2xl border px-5 py-5 text-left transition-colors sm:flex-row sm:items-center sm:justify-between ${
              on ? "border-navy bg-sand" : "border-line bg-bg hover:border-navy"
            }`}
          >
            <span className="font-medium text-navy">{o.l}</span>
            <span className="text-sm text-muted">{o.h}</span>
          </button>
        );
      })}
    </div>
  );
}

function CityField({
  id,
  name,
  label,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        id={id}
        name={name}
        list={`${id}-list`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
        placeholder={label}
        autoComplete="off"
        suppressHydrationWarning
      />
      <datalist id={`${id}-list`}>
        {CITIES.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
    </label>
  );
}

function Toggle({
  label,
  text,
  image,
  price,
  on,
  onClick,
}: {
  label: string;
  text: string;
  image?: string;
  price?: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`overflow-hidden rounded-[1.5rem] border text-left transition-colors ${
        on ? "border-navy bg-sand" : "border-line bg-bg"
      }`}
    >
      {image ? <img src={image} alt="" className="h-28 w-full object-cover" /> : null}
      <span className="block p-4">
        <span className="flex items-start justify-between gap-3">
          <span className="font-display text-lg text-navy">{label}</span>
          {price ? <span className="shrink-0 text-sm font-semibold text-coral">{price}</span> : null}
        </span>
        <span className="mt-1 block text-sm text-muted">{text}</span>
        <span className="mt-3 block text-sm font-semibold text-navy">{on ? "Ajouté" : "Ajouter"}</span>
      </span>
    </button>
  );
}

function JockeyFlow({
  input,
  setInput,
  client,
  setClient,
  gate,
  setGate,
  quote,
  onBack,
  skipService = false,
  startStep = 0,
}: {
  input: QuoteInput;
  setInput: (fn: (s: QuoteInput) => QuoteInput) => void;
  client: ClientKind;
  setClient: (v: ClientKind) => void;
  gate: boolean;
  setGate: (v: boolean) => void;
  quote: ReturnType<typeof computeQuote>;
  onBack: () => void;
  skipService?: boolean;
  startStep?: number;
}) {
  const [step, setStep] = useState(startStep);
  const service = input.jockeyService;
  const needsLieu = service === "mouvement" || service === "location" || service === "atelier" || service === "achat";
  const steps =
    service === "flotte"
      ? ["Profil", "Prestation", "Siège", "Flotte"]
      : needsLieu
        ? ["Profil", "Prestation", "Ville", "Lieu", "Mission"]
        : ["Profil", "Prestation", "Ville", "Mission"];

  const goNext = () => {
    if (step === 2 && !needsLieu && service !== "flotte") {
      setStep(3);
      return;
    }
    setStep((s) => s + 1);
  };
  const goPrev = () => {
    if (step === 3 && !needsLieu && service !== "flotte") {
      setStep(2);
      return;
    }
    if (skipService && step === 2) {
      setStep(0);
      return;
    }
    setStep((s) => s - 1);
  };

  const last = steps.length - 1;
  const lieuOk =
    service === "mouvement" || service === "location"
      ? Boolean(input.jockeyPoint)
      : service === "atelier" || service === "achat"
        ? Boolean(input.to.trim())
        : true;

  if (gate && quote.ok) {
    return (
      <div>
        <button type="button" onClick={() => setGate(false)} className="mb-6 text-sm text-muted hover:text-navy">
          Modifier la mission
        </button>
        <QuoteGate quote={quote} client={client} input={input} />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
      <button type="button" onClick={onBack} className="mb-6 text-sm text-muted hover:text-navy">
        Changer de mission
      </button>
      <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
        Conciergerie, étape {step + 1} sur {steps.length}
      </p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
        <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <h2 className="mt-6 font-display text-3xl text-navy">{steps[step]}</h2>

      {step === 0 && (
        <div className="mt-8">
          <Choice
            options={[
              { v: "part", l: "Particulier", h: "Un véhicule. Une mission." },
              { v: "pro", l: "Professionnel", h: "Concession, garage, mandataire." },
              { v: "flotte", l: "Flotte d’entreprise", h: "Plusieurs véhicules. Un interlocuteur." },
            ]}
            onPick={(v) => {
              if (v === "flotte") {
                setClient("pro");
                setInput((s) => ({ ...s, clientKind: "pro", jockeyService: "flotte" }));
              } else {
                setClient(v as ClientKind);
                setInput((s) => ({ ...s, clientKind: v as ClientKind }));
              }
              setStep(skipService ? 2 : 1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_SERVICES.map((s) => ({ v: s.id, l: s.name, h: s.hint }))}
            onPick={(v) => {
              const next = v as QuoteInput["jockeyService"];
              setInput((s) => ({
                ...s,
                jockeyService: next,
                jockeyRdv: next === "atelier" || next === "flotte",
                controleVisuel: next === "achat" ? true : s.controleVisuel,
                clientKind: next === "flotte" ? "pro" : s.clientKind,
                jockeyPoint: next === "mouvement" || next === "location" ? s.jockeyPoint : "",
              }));
              if (next === "flotte") setClient("pro");
              setStep(2);
            }}
          />
        </div>
      )}

      {step === 2 && (
        <div className="mt-8">
          <CityField
            id="jockey-home"
            name="jockey-home"
            label={service === "flotte" ? "Ville du siège" : "Ville"}
            value={input.from}
            onChange={(from) => setInput((s) => ({ ...s, from, to: s.to || from }))}
          />
          <p className="mt-3 text-sm text-muted">Bretagne, Rennes, Nantes. Le devis part de Quimper.</p>
          {service === "flotte" ? (
            <label className="mt-6 block text-sm text-muted">
              Nombre de véhicules
              <input
                type="number"
                min={1}
                max={40}
                value={input.flotteNb}
                onChange={(e) => setInput((s) => ({ ...s, flotteNb: Math.max(1, Number(e.target.value) || 1) }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
          ) : null}
        </div>
      )}

      {step === 3 && service === "mouvement" && (
        <div className="mt-8 space-y-8">
          <Choice
            options={JOCKEY_SENS.map((s) => ({ v: s.id, l: s.name, h: s.hint }))}
            onPick={(v) => setInput((s) => ({ ...s, jockeySens: v as QuoteInput["jockeySens"] }))}
          />
          <Choice
            options={JOCKEY_POINTS.map((p) => ({ v: p.name, l: p.name, h: "Bretagne" }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeyPoint: v, to: v }));
              setStep(4);
            }}
          />
        </div>
      )}

      {step === 3 && service === "location" && (
        <div className="mt-8">
          <Choice
            options={[
              { v: "Agence de location", l: "Agence de location", h: "Même ville, ou à préciser." },
              ...JOCKEY_POINTS.filter((p) => p.name.includes("Aéroport")).map((p) => ({
                v: p.name,
                l: p.name,
                h: "Aéroport",
              })),
            ]}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeyPoint: v, to: v, jockeySens: "rapatriement" }));
              setStep(4);
            }}
          />
        </div>
      )}

      {step === 3 && (service === "atelier" || service === "achat") && (
        <div className="mt-8">
          <CityField
            id="jockey-dest"
            name="jockey-dest"
            label={service === "achat" ? "Ville du véhicule" : "Ville de l’atelier"}
            value={input.to}
            onChange={(to) => setInput((s) => ({ ...s, to }))}
          />
        </div>
      )}

      {step === 3 && service === "flotte" && (
        <JockeyOptions input={input} setInput={setInput} />
      )}

      {((step === 4 && needsLieu) || (step === 3 && !needsLieu && service !== "flotte")) && (
        <JockeyOptions input={input} setInput={setInput} />
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={() => (step === 0 ? onBack() : goPrev())}>
          Retour
        </Button>
        {step < last ? (
          <Button
            type="button"
            onClick={goNext}
            disabled={(step === 2 && !input.from.trim()) || (step === 3 && needsLieu && !lieuOk)}
          >
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Générer mon devis — une minute
          </Button>
        )}
      </div>
    </div>
  );
}

function JockeyOptions({
  input,
  setInput,
}: {
  input: QuoteInput;
  setInput: (fn: (s: QuoteInput) => QuoteInput) => void;
}) {
  const service = input.jockeyService;
  return (
    <div className="mt-8 space-y-6">
      <p className="text-sm text-muted">
        Le montant n’apparaît qu’après vos coordonnées. Pas de gardiennage. Pas de transport de passagers.
      </p>
      <label className="block text-sm text-muted">
        Date de prise en charge souhaitée
        <input
          type="date"
          value={input.pickupDate ?? ""}
          onChange={(e) => setInput((s) => ({ ...s, pickupDate: e.target.value }))}
          className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
        />
      </label>
      <p className="text-sm text-muted">Vous proposez une date. Convoyage BZH confirme le créneau, ou vous contacte.</p>
      {service === "mouvement" ? (
        <label className="block text-sm text-muted">
          Numéro de train ou de vol
          <input
            value={input.jockeyRef}
            onChange={(e) => setInput((s) => ({ ...s, jockeyRef: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            placeholder="TGV 8690, AF7521"
          />
        </label>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {service === "atelier" || service === "flotte" ? (
          <Toggle
            label="Carrosserie"
            text="Deux passages. Dépôt, puis reprise."
            on={input.jockeyCarrosserie}
            onClick={() => setInput((s) => ({ ...s, jockeyCarrosserie: !s.jockeyCarrosserie }))}
          />
        ) : null}
        {service === "atelier" || service === "flotte" || service === "location" ? (
          <Toggle
            label="Prise de rendez-vous"
            text="Nous appelons l’atelier. Nous bloquons le créneau."
            on={input.jockeyRdv}
            onClick={() => setInput((s) => ({ ...s, jockeyRdv: !s.jockeyRdv }))}
          />
        ) : null}
        <Toggle
          label="Nettoyage intérieur et extérieur"
          text="Remise propre."
          image="/images/preparation-esthetique-vehicule.jpg"
          on={input.jockeyWash === "standard"}
          onClick={() => setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "standard" ? "aucun" : "standard" }))}
        />
        <Toggle
          label="Nettoyage prestige"
          text="Véhicule haut de gamme."
          on={input.jockeyWash === "prestige"}
          onClick={() => setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "prestige" ? "aucun" : "prestige" }))}
        />
        {service !== "roulage" ? (
          <Toggle
            label="Contrôle technique"
            text="Nous emmenons le véhicule. Hors facture du centre."
            on={input.jockeyCt}
            onClick={() => setInput((s) => ({ ...s, jockeyCt: !s.jockeyCt }))}
          />
        ) : null}
        <Toggle
          label="Plein carburant"
          text="Passage à la pompe. Ticket joint."
          image="/images/plein-carburant-vehicule.jpg"
          on={input.plein}
          onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
        />
        <Toggle
          label="Attente"
          text="Remise à une personne. Nous restons sur place."
          on={input.jockeyAttente}
          onClick={() => setInput((s) => ({ ...s, jockeyAttente: !s.jockeyAttente }))}
        />
        <Toggle
          label="Coffret champagne et chocolats"
          text="Dans le véhicule. Utile si vous allez chercher quelqu’un à la gare ou à l’aéroport."
          image="/images/coffret-prestige-champagne.jpg"
          on={input.coffret === "champagne"}
          onClick={() =>
            setInput((s) => ({ ...s, coffret: s.coffret === "champagne" ? "aucun" : "champagne" }))
          }
        />
        <Toggle
          label="Coffret Terroir Breton"
          text="Galettes, caramels, cidre. Remis avec les clés."
          image="/images/coffret-terroir-breton.jpg"
          on={input.coffret === "armor"}
          onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "armor" ? "aucun" : "armor" }))}
        />
        {service === "achat" || service === "mouvement" ? (
          <Toggle
            label="Contrôle visuel"
            text="Photographies, conformité à l’annonce, rapport : état du véhicule et tarif."
            image="/images/mission-achat-inspection.jpg"
            on={input.controleVisuel}
            onClick={() => setInput((s) => ({ ...s, controleVisuel: !s.controleVisuel }))}
          />
        ) : null}
      </div>
    </div>
  );
}