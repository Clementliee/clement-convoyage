import { Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  computeQuote,
  JOCKEY_POINTS,
  OPTIONS,
  type MissionKind,
  type PackKind,
  type QuoteInput,
  type VehicleKind,
  type WhenKind,
  type ZoneKind,
} from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

const STEPS = [
  "Qui commande ?",
  "Type de véhicule",
  "Départ",
  "Arrivée",
  "Zone",
  "Quand",
  "Composer les options",
];

export function Simulator({
  initialFrom = "",
  initialTo = "",
  initialMission = "",
}: {
  initialFrom?: string;
  initialTo?: string;
  initialMission?: "" | MissionKind;
}) {
  const [flow, setFlow] = useState<"" | MissionKind>(initialMission || "");
  const [step, setStep] = useState(0);
  const [gate, setGate] = useState(false);
  const [client, setClient] = useState<"part" | "pro">("part");
  const [input, setInput] = useState<QuoteInput>({
    from: initialFrom || "Quimper",
    to: initialTo,
    zone: "france",
    vehicle: "vp",
    when: "standard",
    lavage: "aucun",
    rechargeVe: false,
    gps: false,
    securite: false,
    plein: false,
    controleVisuel: false,
    coffret: "aucun",
    pack: "aucun",
    kitBienvenue: false,
    formula: "aucun",
    mission: initialMission === "jockey" ? "jockey" : "convoyage",
    jockeyPoint: "",
    jockeyRef: "",
    jockeyAller: "",
    jockeyRetour: "",
    jockeyCt: false,
  });
  const [kmManual, setKmManual] = useState("");

  const quote = useMemo(
    () => computeQuote({ ...input, kmManual: kmManual ? Number(kmManual) : undefined }),
    [input, kmManual],
  );

  const canNext =
    step === 2 ? Boolean(input.from.trim() || kmManual) : step === 3 ? Boolean(input.to.trim() || kmManual) : true;

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
                h: "A vers B",
              },
              {
                v: "jockey",
                l: "Jockey gare ou aéroport",
                h: "Parvis, navette locale",
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
        {step === 6 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Chaque véhicule est unique : gabarit, motorisation thermique ou électrique, contraintes d’assurance, niveau de préparation. Ces questions évitent un tarif générique.
          </p>
        ) : null}
      </div>

      {step === 0 && (
        <Choice
          options={[
            { v: "part", l: "Particulier", h: "Règlement avant départ" },
            { v: "pro", l: "Professionnel", h: "Paiement à quinze jours" },
          ]}
          onPick={(v) => {
            setClient(v as "part" | "pro");
            next();
          }}
        />
      )}
      {step === 1 && (
        <Choice
          options={[
            { v: "vp", l: "Véhicule particulier", h: "Berline, SUV, citadine" },
            { v: "utilitaire", l: "Utilitaire, van", h: "Permis B, jusqu’à 3,5 t" },
            { v: "prestige", l: "Prestige", h: "Berline, sportive" },
            { v: "ve", l: "Véhicule électrique", h: "Plan de recharge" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, vehicle: v as VehicleKind, rechargeVe: v === "ve" }));
            next();
          }}
        />
      )}
      {step === 2 && (
        <CityField
          id="from-city"
          name="from"
          label="Ville de départ"
          value={input.from}
          onChange={(from) => setInput((s) => ({ ...s, from }))}
        />
      )}
      {step === 3 && (
        <CityField
          id="to-city"
          name="to"
          label="Ville d’arrivée"
          value={input.to}
          onChange={(to) => setInput((s) => ({ ...s, to }))}
        />
      )}
      {step === 4 && (
        <Choice
          options={[
            { v: "france", l: "Bretagne, France", h: "Métropole" },
            { v: "europe", l: "Europe", h: "Formalités de frontière" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, zone: v as ZoneKind }));
            next();
          }}
        />
      )}
      {step === 5 && (
        <Choice
          options={[
            { v: "standard", l: "Standard", h: "Créneau habituel" },
            { v: "urgent", l: "Urgent", h: "Sous 24 h, selon disponibilité" },
            { v: "samedi", l: "Samedi", h: "Week-end" },
            { v: "dimanche", l: "Dimanche, férié", h: "Astreinte" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, when: v as WhenKind }));
            next();
          }}
        />
      )}
      {step === 6 && (
        <div className="space-y-10">
          <div className="rounded-[1.4rem] bg-sand px-5 py-5 text-sm leading-relaxed text-navy">
            <p className="font-display text-xl">La livraison, toujours.</p>
            <p className="mt-2">
              Conduite, carburant, péages, retour, photos du véhicule au départ et à l’arrivée, clés.
            </p>
            <p className="mt-3 font-semibold text-coral">Mise en main : offerte.</p>
            <p className="mt-2 text-muted">
              On prend 20 à 30 minutes à l’arrivée pour expliquer les commandes, les aides, la charge. C’est inclus, à chaque fois.
            </p>
          </div>
          <OptionGroup title="Vous ajoutez, prix affiché">
            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle
                label="Nettoyage intérieur et extérieur"
                text="Le véhicule arrive propre. Pas seulement un coup d’eau dehors."
                price={formatEuro(OPTIONS.lavageComplet)}
                image="/images/03_nettoyage.jpg"
                on={input.lavage === "complet"}
                onClick={() => setInput((s) => ({ ...s, lavage: s.lavage === "complet" ? "aucun" : "complet" }))}
              />
              <Toggle
                label="Traqueur GPS 4G pour l’acheteur"
                text="Il le garde. Pose à la remise, sans perçage. 12 mois de suivi inclus."
                price={formatEuro(OPTIONS.gps)}
                image="/images/07_gps.jpg"
                on={input.gps}
                onClick={() => setInput((s) => ({ ...s, gps: !s.gps }))}
              />
              <Toggle
                label="Plein ou charge 90 %"
                text="Essence : réservoir plein. Électrique : batterie à 90 % ou plus. Énergie au réel, en plus."
                price={formatEuro(OPTIONS.plein)}
                image="/images/11_plein.jpg"
                on={input.plein}
                onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
              />
            </div>
          </OptionGroup>
          <OptionGroup title="Coffret, un seul">
            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle
                label="Coffret Armor"
                text="Galettes, caramels, cidre."
                price={formatEuro(OPTIONS.coffretArmor)}
                image="/images/09_coffret_armor.jpg"
                on={input.coffret === "armor"}
                onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "armor" ? "aucun" : "armor" }))}
              />
              <Toggle
                label="Coffret Champagne"
                text="Brut et chocolats."
                price={formatEuro(OPTIONS.coffretChampagne)}
                image="/images/10_coffret_champagne.jpg"
                on={input.coffret === "champagne"}
                onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "champagne" ? "aucun" : "champagne" }))}
              />
            </div>
          </OptionGroup>
          <OptionGroup title="Pack mise à la route, si besoin">
            <div className="grid gap-3 sm:grid-cols-3">
              {(
                [
                  { v: "essentiel" as const, l: "Essentiel", h: "Pneus, niveaux, contrôle visuel.", p: OPTIONS.packEssentiel },
                  { v: "confort" as const, l: "Confort", h: "Essentiel et nettoyage complet.", p: OPTIONS.packConfort },
                  { v: "premium" as const, l: "Premium", h: "Confort et kit de bienvenue.", p: OPTIONS.packPremium },
                ]
              ).map((p) => (
                <Toggle
                  key={p.v}
                  label={p.l}
                  text={p.h}
                  price={formatEuro(p.p)}
                  on={input.pack === p.v}
                  onClick={() =>
                    setInput((s) => ({
                      ...s,
                      pack: s.pack === p.v ? "aucun" : (p.v as PackKind),
                    }))
                  }
                />
              ))}
            </div>
          </OptionGroup>
          <div className="rounded-[1.4rem] border border-line px-5 py-5">
            <p className="text-sm text-muted">Mise en main</p>
            <p className="font-display text-2xl text-coral">Offerte</p>
            <p className="mt-4 text-sm text-muted">Options choisies</p>
            <p className="font-display text-2xl text-navy">{formatEuro(quote.options)}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              La livraison se calcule selon le trajet. Le tarif final s’affiche après votre nom, téléphone et e-mail. Prix indicatif, à confirmer.
            </p>
          </div>
        </div>
      )}

      {(step === 2 || step === 3) && (
        <label className="mt-6 block text-sm text-muted">
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
            Voir le tarif final
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && !quote.ok ? (
        <p className="mt-6 text-sm text-muted">{quote.message}</p>
      ) : null}

      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
        Cochez les options, les prix s’affichent. Le tarif final de la livraison vient après vos coordonnées.
        <Link to="/contact" className="text-coral">
          Contact
        </Link>
      </p>
    </div>
  );
}

function Choice({
  options,
  onPick,
}: {
  options: { v: string; l: string; h: string }[];
  onPick: (v: string) => void;
}) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <button
          key={o.v}
          type="button"
          onClick={() => onPick(o.v)}
          className="flex items-center justify-between rounded-2xl border border-line bg-bg px-5 py-5 text-left transition-colors hover:border-navy"
        >
          <span className="font-medium text-navy">{o.l}</span>
          <span className="text-sm text-muted">{o.h}</span>
        </button>
      ))}
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

function OptionGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{title}</p>
      {children}
    </div>
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
}: {
  input: QuoteInput;
  setInput: (fn: (s: QuoteInput) => QuoteInput) => void;
  client: "part" | "pro";
  setClient: (v: "part" | "pro") => void;
  gate: boolean;
  setGate: (v: boolean) => void;
  quote: ReturnType<typeof computeQuote>;
  onBack: () => void;
}) {
  const [step, setStep] = useState(0);
  const steps = ["Qui commande ?", "Point de rendez-vous", "Horaires et n° train ou vol", "Options"];

  if (gate && quote.ok) {
    return (
      <div>
        <button type="button" onClick={() => setGate(false)} className="mb-6 text-sm text-muted hover:text-navy">
          Modifier le créneau
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
        Jockey, étape {step + 1} sur {steps.length}
      </p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
        <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <h2 className="mt-6 font-display text-3xl text-navy">{steps[step]}</h2>

      {step === 0 && (
        <div className="mt-8">
          <Choice
            options={[
              { v: "part", l: "Particulier", h: "Règlement avant départ" },
              { v: "pro", l: "Professionnel", h: "Paiement à quinze jours" },
            ]}
            onPick={(v) => {
              setClient(v as "part" | "pro");
              setStep(1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_POINTS.map((p) => ({ v: p.name, l: p.name, h: p.pack }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeyPoint: v, from: v, to: "Domicile ou parking" }));
              setStep(2);
            }}
          />
        </div>
      )}

      {step === 2 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted sm:col-span-2">
            Numéro de train ou de vol, facultatif
            <input
              value={input.jockeyRef}
              onChange={(e) => setInput((s) => ({ ...s, jockeyRef: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              placeholder="TGV 8690, AF7521"
            />
          </label>
          <label className="block text-sm text-muted">
            Date et heure d’aller
            <input
              type="datetime-local"
              value={input.jockeyAller}
              onChange={(e) => setInput((s) => ({ ...s, jockeyAller: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            />
          </label>
          <label className="block text-sm text-muted">
            Date et heure de retour, facultatif
            <input
              type="datetime-local"
              value={input.jockeyRetour}
              onChange={(e) => setInput((s) => ({ ...s, jockeyRetour: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            />
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="mt-8 space-y-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <Toggle
              label="Nettoyage intérieur et extérieur"
              text="Pendant votre absence."
              price={formatEuro(OPTIONS.lavageComplet)}
              image="/images/03_nettoyage.jpg"
              on={input.lavage === "complet"}
              onClick={() => setInput((s) => ({ ...s, lavage: s.lavage === "complet" ? "aucun" : "complet" }))}
            />
            <Toggle
              label="Plein ou charge 90 %"
              text="Essence plein, électrique à 90 % ou plus. Énergie au réel."
              price={formatEuro(OPTIONS.plein)}
              image="/images/11_plein.jpg"
              on={input.plein}
              onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
            />
            <Toggle
              label="Passage révision ou contrôle technique"
              text="Nous emmenons le véhicule, nous le récupérons."
              price={formatEuro(OPTIONS.jockeyCt)}
              on={input.jockeyCt}
              onClick={() => setInput((s) => ({ ...s, jockeyCt: !s.jockeyCt }))}
            />
          </div>
          <p className="text-sm text-muted">
            Le tarif du jockey s’affiche après nom, téléphone et e-mail. Prix indicatif, à confirmer sous 2 h.
          </p>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={() => (step === 0 ? onBack() : setStep((s) => s - 1))}>
          Retour
        </Button>
        {step < steps.length - 1 ? (
          <Button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={step === 1 && !input.jockeyPoint}
          >
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Voir le tarif final
          </Button>
        )}
      </div>
    </div>
  );
}
