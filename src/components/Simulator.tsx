import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  TRIP_MODES,
  applyPack,
  computeQuote,
  JOCKEY_POINTS,
  JOCKEY_SENS,
  OPTIONS,
  packPrice,
  prixPlein,
  litresPlein,
  WHEN_OFFERS,
  type ClientKind,
  type MissionKind,
  type PackKind,
  type QuoteInput,
  type TripMode,
  type VehicleKind,
  type WhenKind,
  type ZoneKind,
} from "@/lib/tarifs";
import { PACKS_PART, PACKS_PRO } from "@/lib/offers";
import { formatEuro } from "@/lib/utils";

const STEPS = [
  "Qui commande ?",
  "Type de véhicule",
  "Départ",
  "Arrivée",
  "Sens de mission",
  "Zone",
  "Quand",
  "Votre pack",
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
  const [client, setClient] = useState<ClientKind>("part");
  const [input, setInput] = useState<QuoteInput>({
    from: initialFrom || "Quimper",
    to: initialTo,
    zone: "france",
    vehicle: "vp",
    when: "standard",
    lavage: "aucun",
    rechargeVe: false,
    gps: false,
    protocolePrestige: false,
    plein: false,
    controleVisuel: false,
    coffret: "aucun",
    pack: "essentiel",
    kitBienvenue: false,
    formula: "aucun",
    mission: initialMission === "jockey" ? "jockey" : "convoyage",
    clientKind: "part",
    tripMode: "aller",
    jockeySens: "rapatriement",
    jockeyPoint: "",
    jockeyRef: "",
    jockeyAller: "",
    jockeyRetour: "",
    jockeyCt: false,
    jockeyAttente: false,
    jockeyWash: "aucun",
  });
  const [kmManual, setKmManual] = useState("");

  const quote = useMemo(
    () => computeQuote({ ...input, kmManual: kmManual ? Number(kmManual) : undefined }),
    [input, kmManual],
  );
  const standardBase = useMemo(
    () =>
      computeQuote({
        ...input,
        when: "standard",
        kmManual: kmManual ? Number(kmManual) : undefined,
      }).base,
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
                h: "A vers B, packs particuliers ou professionnels",
              },
              {
                v: "jockey",
                l: "Conciergerie de véhicules",
                h: "Gare, aéroport, CT, à la carte",
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
        {step === 4 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Base opérationnelle à Quimper. Si le départ n’est pas Quimper, l’approche est facturée 0,25 €/km. En aller
            simple, le retour du chauffeur est inclus.
          </p>
        ) : null}
        {step === 6 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Délai à partir de la confirmation du devis, sous réserve de disponibilité des équipes. Week-end et jours
            fériés inclus.
          </p>
        ) : null}
        {step === 7 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {client === "pro"
              ? "Trois packs professionnels. Pas d’à la carte : le coffret, le nettoyage et le protocole sont dans le menu."
              : "Trois packs particuliers. Pas d’à la carte : le plein et le traceur GPS sont dans le menu."}
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
            const kind = v as ClientKind;
            setClient(kind);
            setInput((s) => applyPack({ ...s, clientKind: kind }, s.pack));
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
            const vehicle = v as VehicleKind;
            setInput((s) => ({
              ...s,
              vehicle,
              rechargeVe: vehicle === "ve",
            }));
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
          options={TRIP_MODES.map((m) => ({ v: m.id, l: m.name, h: m.hint }))}
          onPick={(v) => {
            setInput((s) => ({ ...s, tripMode: v as TripMode }));
            next();
          }}
        />
      )}
      {step === 5 && (
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
      {step === 6 && (
        <WhenPicker
          base={quote.ok ? standardBase : 0}
          showEuro={quote.ok && standardBase > 0}
          onPick={(v) => {
            setInput((s) => ({ ...s, when: v }));
            next();
          }}
        />
      )}
      {step === 7 && (
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
              const priced = computeQuote({
                ...input,
                pack: p.id,
                kmManual: kmManual ? Number(kmManual) : undefined,
              });
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
                  <span className="mt-3 font-display text-3xl text-navy">
                    {priced.ok ? formatEuro(priced.total) : "—"}
                  </span>
                  {packPrice(client, p.id) > 0 ? (
                    <span className="mt-1 text-sm text-muted">dont {formatEuro(packPrice(client, p.id))} de pack</span>
                  ) : (
                    <span className="mt-1 text-sm text-muted">Trajet seul</span>
                  )}
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

          {quote.ok ? (
            <div className="rounded-[1.4rem] border border-line px-5 py-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Détail du devis</p>
              <ul className="mt-4 space-y-2">
                {quote.lines.map((l) => (
                  <li key={l.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted">
                      {l.label}
                      {l.hint ? <span className="text-muted/70"> · {l.hint}</span> : null}
                    </span>
                    <span className="shrink-0 font-medium text-navy">{formatEuro(l.amount)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
                <span className="font-display text-xl text-navy">Total HT</span>
                <span className="font-display text-2xl text-navy">{formatEuro(quote.total)}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Micro-entreprise, TVA non applicable. Tarif de vente, charges sociales 11 % déjà absorbées. Devis formel
                sous 2 heures ouvrées.
              </p>
            </div>
          ) : null}
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
            Générer mon devis officiel
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && !quote.ok ? (
        <p className="mt-6 text-sm text-muted">{quote.message}</p>
      ) : null}

      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
        Base Quimper. Approche 0,25 €/km hors base. Retour chauffeur inclus en aller simple.{" "}
        <Link to="/contact" className="text-coral">
          Contact
        </Link>
      </p>
    </div>
  );
}

function WhenPicker({
  base,
  showEuro,
  onPick,
}: {
  base: number;
  showEuro: boolean;
  onPick: (v: WhenKind) => void;
}) {
  return (
    <div className="grid gap-3">
      {WHEN_OFFERS.map((w) => {
        const extra = Math.round(base * w.extraPct);
        return (
          <button
            key={w.id}
            type="button"
            onClick={() => onPick(w.id)}
            className="flex flex-col gap-2 rounded-2xl border border-line bg-bg px-5 py-5 text-left transition-colors hover:border-navy sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="block font-medium text-navy">{w.name}</span>
              <span className="mt-1 block text-sm text-muted">
                {w.delay}. {w.hint}
              </span>
            </span>
            <span className="shrink-0 text-sm font-semibold text-coral">
              {w.extraPct === 0
                ? w.extraLabel
                : showEuro && extra > 0
                  ? `${w.extraLabel} · ${formatEuro(extra)}`
                  : w.extraLabel}
            </span>
          </button>
        );
      })}
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
          className="flex flex-col gap-1 rounded-2xl border border-line bg-bg px-5 py-5 text-left transition-colors hover:border-navy sm:flex-row sm:items-center sm:justify-between"
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
  gate,
  setGate,
  quote,
  onBack,
}: {
  input: QuoteInput;
  setInput: (fn: (s: QuoteInput) => QuoteInput) => void;
  client: ClientKind;
  gate: boolean;
  setGate: (v: boolean) => void;
  quote: ReturnType<typeof computeQuote>;
  onBack: () => void;
}) {
  const [step, setStep] = useState(0);
  const steps = ["Le trajet", "Le domicile", "Gare ou aéroport", "Horaires", "À la carte"];

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
        Conciergerie, étape {step + 1} sur {steps.length}
      </p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
        <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <h2 className="mt-6 font-display text-3xl text-navy">{steps[step]}</h2>

      {step === 0 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_SENS.map((s) => ({ v: s.id, l: s.name, h: s.hint }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeySens: v as QuoteInput["jockeySens"] }));
              setStep(1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div className="mt-8">
          <CityField
            id="jockey-home"
            name="jockey-home"
            label="Ville du domicile"
            value={input.from}
            onChange={(from) => setInput((s) => ({ ...s, from }))}
          />
          <p className="mt-3 text-sm text-muted">Le tarif se calcule entre le domicile et la gare ou l’aéroport.</p>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_POINTS.map((p) => ({
              v: p.name,
              l: p.name,
              h: `À partir de ${formatEuro(p.forfait)} · aller et retour ${formatEuro(p.allerRetour)}`,
            }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeyPoint: v, to: v }));
              setStep(3);
            }}
          />
        </div>
      )}

      {step === 3 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted sm:col-span-2">
            Numéro de train ou de vol
            <input
              value={input.jockeyRef}
              onChange={(e) => setInput((s) => ({ ...s, jockeyRef: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              placeholder="TGV 8690, AF7521"
            />
          </label>
          {input.jockeySens !== "rapatriement" ? (
            <label className="block text-sm text-muted">
              Date et heure de dépose
              <input
                type="datetime-local"
                value={input.jockeyAller}
                onChange={(e) => setInput((s) => ({ ...s, jockeyAller: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
          ) : null}
          {input.jockeySens !== "depose" ? (
            <label className="block text-sm text-muted">
              Date et heure de rapatriement
              <input
                type="datetime-local"
                value={input.jockeyRetour}
                onChange={(e) => setInput((s) => ({ ...s, jockeyRetour: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
          ) : null}
        </div>
      )}

      {step === 4 && (
        <div className="mt-8 space-y-6">
          <p className="text-sm text-muted">
            La conciergerie se compose à la carte. Gare, aéroport, location, achat accompagné, nettoyage, CT, plein, attente. Pas de gardiennage. Pas de transport de passagers.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Toggle
              label="Nettoyage intérieur et extérieur"
              text="Uniquement avec la conciergerie. 90 €."
              price={formatEuro(OPTIONS.jockeyLavage)}
              image="/images/preparation-esthetique-vehicule.jpg"
              on={input.jockeyWash === "standard"}
              onClick={() =>
                setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "standard" ? "aucun" : "standard" }))
              }
            />
            <Toggle
              label="Nettoyage prestige"
              text="Véhicule haut de gamme. 125 €."
              price={formatEuro(OPTIONS.jockeyLavagePrestige)}
              on={input.jockeyWash === "prestige"}
              onClick={() =>
                setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "prestige" ? "aucun" : "prestige" }))
              }
            />
            <Toggle
              label="Contrôle technique"
              text="Nous emmenons le véhicule au CT. 55 €, hors facture du centre."
              price={formatEuro(OPTIONS.jockeyCt)}
              on={input.jockeyCt}
              onClick={() => setInput((s) => ({ ...s, jockeyCt: !s.jockeyCt }))}
            />
            <Toggle
              label="Plein carburant"
              text={`Passage à la pompe ${formatEuro(OPTIONS.pleinService)} + ${litresPlein(input.vehicle)} L à ${OPTIONS.carburantLitre} € le litre. Ajusté au ticket.`}
              price={formatEuro(prixPlein(input.vehicle))}
              image="/images/plein-carburant-vehicule.jpg"
              on={input.plein}
              onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
            />
            <Toggle
              label="Attente / remise à une personne"
              text="Quelqu’un vient chercher le véhicule. Nous restons sur place. 39 €."
              price={formatEuro(OPTIONS.jockeyAttente)}
              on={input.jockeyAttente}
              onClick={() => setInput((s) => ({ ...s, jockeyAttente: !s.jockeyAttente }))}
            />
            <Toggle
              label="Contrôle visuel d’achat"
              text="Carrosserie, compteur, intérieur, documents, photos. Pour un achat accompagné."
              price={formatEuro(OPTIONS.controleVisuel)}
              image="/images/etat-des-lieux-vehicule.jpg"
              on={input.controleVisuel}
              onClick={() => setInput((s) => ({ ...s, controleVisuel: !s.controleVisuel }))}
            />
          </div>
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
            disabled={(step === 1 && !input.from.trim()) || (step === 2 && !input.jockeyPoint)}
          >
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Générer mon devis officiel
          </Button>
        )}
      </div>
    </div>
  );
}
