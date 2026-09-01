export type City = {
  name: string;
  aliases: string[];
  lat: number;
  lng: number;
  forfaitFromQuimper?: number;
  europe?: boolean;
  note?: string;
};

export const OPTIONS = {
  lavageExterieur: 25,
  lavageComplet: 45,
  miseEnMain: 35,
  rechargeVe: 25,
  urgencePct: 0.25,
  samediPct: 0.2,
  dimanchePct: 0.4,
  utilitairePct: 0.15,
  prestigePct: 0.2,
} as const;

export const EUROPE_MAJORATION = 0.2;
export const EUROPE_FORFAIT = 90;
export const MINIMUM_LOCAL = 55;

export const BAREME = [
  { min: 0, max: 40, mode: "forfait" as const, prix: 55 },
  { min: 41, max: 80, eurKm: 1.2, minimum: 70 },
  { min: 81, max: 200, eurKm: 1.05, minimum: 100 },
  { min: 201, max: 400, eurKm: 0.95, minimum: 210 },
  { min: 401, max: 700, eurKm: 0.9, minimum: 380 },
  { min: 701, max: 99999, eurKm: 0.85, minimum: 600 },
];

export const CITIES: City[] = [
  { name: "Quimper", aliases: ["quimper", "pluguffan", "ergué-gabéric", "ergue-gaberic"], lat: 47.996, lng: -4.098, forfaitFromQuimper: 55 },
  { name: "Concarneau", aliases: ["concarneau"], lat: 47.875, lng: -3.917, forfaitFromQuimper: 70 },
  { name: "Douarnenez", aliases: ["douarnenez"], lat: 48.092, lng: -4.33, forfaitFromQuimper: 70 },
  { name: "Pont-l'Abbé", aliases: ["pont-l'abbé", "pont l'abbe", "pont-labbe"], lat: 47.867, lng: -4.223, forfaitFromQuimper: 70 },
  { name: "Quimperlé", aliases: ["quimperle", "quimperlé"], lat: 47.872, lng: -3.55, forfaitFromQuimper: 85 },
  { name: "Lorient", aliases: ["lorient", "lanester", "guidel"], lat: 47.748, lng: -3.366, forfaitFromQuimper: 100 },
  { name: "Brest", aliases: ["brest", "guipavas"], lat: 48.39, lng: -4.486, forfaitFromQuimper: 105 },
  { name: "Morlaix", aliases: ["morlaix", "landivisiau"], lat: 48.578, lng: -3.827, forfaitFromQuimper: 110 },
  { name: "Vannes", aliases: ["vannes", "auray"], lat: 47.658, lng: -2.76, forfaitFromQuimper: 155 },
  { name: "Saint-Brieuc", aliases: ["saint-brieuc", "st-brieuc", "plerin"], lat: 48.514, lng: -2.765, forfaitFromQuimper: 185 },
  { name: "Rennes", aliases: ["rennes", "cesson", "saint-grégoire"], lat: 48.117, lng: -1.678, forfaitFromQuimper: 245 },
  { name: "Saint-Malo", aliases: ["saint-malo", "dinard"], lat: 48.649, lng: -2.026, forfaitFromQuimper: 265 },
  { name: "Nantes", aliases: ["nantes", "saint-herblain", "montoir"], lat: 47.218, lng: -1.553, forfaitFromQuimper: 310 },
  { name: "Angers", aliases: ["angers"], lat: 47.471, lng: -0.552, forfaitFromQuimper: 360 },
  { name: "Le Mans", aliases: ["le mans"], lat: 48.007, lng: 0.2, forfaitFromQuimper: 360 },
  { name: "Bordeaux", aliases: ["bordeaux"], lat: 44.838, lng: -0.579, forfaitFromQuimper: 560 },
  { name: "Paris", aliases: ["paris", "île-de-france", "ile-de-france"], lat: 48.857, lng: 2.352, forfaitFromQuimper: 580 },
  { name: "Toulouse", aliases: ["toulouse"], lat: 43.604, lng: 1.444, forfaitFromQuimper: 720 },
  { name: "Lyon", aliases: ["lyon"], lat: 45.764, lng: 4.836, forfaitFromQuimper: 790 },
  { name: "Marseille", aliases: ["marseille", "aix"], lat: 43.296, lng: 5.37, forfaitFromQuimper: 980 },
  { name: "Bruxelles", aliases: ["bruxelles", "brussels", "brussel"], lat: 50.85, lng: 4.351, europe: true },
  { name: "Luxembourg", aliases: ["luxembourg"], lat: 49.611, lng: 6.132, europe: true },
  { name: "Amsterdam", aliases: ["amsterdam"], lat: 52.367, lng: 4.904, europe: true },
  { name: "Genève", aliases: ["geneve", "genève"], lat: 46.204, lng: 6.143, europe: true },
  { name: "Barcelone", aliases: ["barcelone", "barcelona"], lat: 41.387, lng: 2.168, europe: true },
  { name: "Francfort", aliases: ["francfort", "frankfurt"], lat: 50.11, lng: 8.682, europe: true },
  { name: "Milan", aliases: ["milan", "milano"], lat: 45.464, lng: 9.19, europe: true },
  { name: "Munich", aliases: ["munich", "munchen"], lat: 48.135, lng: 11.582, europe: true },
  { name: "Londres", aliases: ["londres", "london"], lat: 51.507, lng: -0.128, europe: true, note: "ferry + majoration Manche" },
];

export const FORFAITS_DISPLAY = CITIES.filter((c) => c.forfaitFromQuimper).map((c) => ({
  name: c.name,
  prix: c.forfaitFromQuimper!,
}));

export const EUROPE_DISPLAY = [
  { name: "Bruxelles", prix: 850 },
  { name: "Luxembourg", prix: 870 },
  { name: "Amsterdam", prix: 980 },
  { name: "Genève", prix: 1090 },
  { name: "Barcelone", prix: 1180 },
  { name: "Francfort", prix: 1140 },
  { name: "Milan", prix: 1450 },
  { name: "Munich", prix: 1450 },
  { name: "Londres", prix: 1290 },
];

function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function findCity(input: string): City | undefined {
  const n = norm(input);
  if (!n) return undefined;
  return CITIES.find((c) => norm(c.name) === n || c.aliases.some((a) => norm(a) === n) || n.includes(norm(c.name)));
}

function haversineKm(a: City, b: City) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function roadKm(a: City, b: City) {
  return Math.max(8, Math.round(haversineKm(a, b) * 1.28));
}

export function prixBareme(km: number) {
  const row = BAREME.find((b) => km >= b.min && km <= b.max) ?? BAREME[BAREME.length - 1];
  if (row.mode === "forfait") return row.prix;
  return Math.max(row.minimum ?? 0, Math.round(km * (row.eurKm ?? 0)));
}

export type VehicleKind = "vp" | "utilitaire" | "prestige" | "ve";
export type WhenKind = "standard" | "urgent" | "samedi" | "dimanche";
export type ZoneKind = "france" | "europe";

export type QuoteInput = {
  from: string;
  to: string;
  kmManual?: number;
  zone: ZoneKind;
  vehicle: VehicleKind;
  when: WhenKind;
  lavage: "aucun" | "exterieur" | "complet";
  miseEnMain: boolean;
  rechargeVe: boolean;
};

export type QuoteResult = {
  ok: boolean;
  message?: string;
  km: number;
  base: number;
  options: number;
  total: number;
  delay: string;
  fromName: string;
  toName: string;
  europe: boolean;
};

export function computeQuote(input: QuoteInput): QuoteResult {
  const fromCity = findCity(input.from);
  const toCity = findCity(input.to);
  let km = input.kmManual && input.kmManual > 0 ? input.kmManual : 0;
  let fromName = input.from.trim() || "Départ";
  let toName = input.to.trim() || "Arrivée";

  if (!km) {
    if (fromCity && toCity) {
      km = roadKm(fromCity, toCity);
      fromName = fromCity.name;
      toName = toCity.name;
      const quimper = findCity("Quimper")!;
      if (fromCity.name === "Quimper" && toCity.forfaitFromQuimper) {
        km = roadKm(quimper, toCity);
      } else if (toCity.name === "Quimper" && fromCity.forfaitFromQuimper) {
        km = roadKm(fromCity, quimper);
      }
    } else if (!fromCity || !toCity) {
      return {
        ok: false,
        message: "Ville inconnue. Indiquez les kilomètres GPS ou choisissez une ville de la liste.",
        km: 0,
        base: 0,
        options: 0,
        total: 0,
        delay: "",
        fromName,
        toName,
        europe: input.zone === "europe",
      };
    }
  }

  let base = prixBareme(km);
  if (fromCity?.name === "Quimper" && toCity?.forfaitFromQuimper) {
    base = Math.max(base, toCity.forfaitFromQuimper);
  }
  if (toCity?.name === "Quimper" && fromCity?.forfaitFromQuimper) {
    base = Math.max(base, fromCity.forfaitFromQuimper);
  }

  const europeForced = input.zone === "europe" || fromCity?.europe || toCity?.europe;
  if (europeForced) {
    const named = EUROPE_DISPLAY.find(
      (e) => e.name === toCity?.name || e.name === fromCity?.name,
    );
    if (named) base = Math.max(base, named.prix);
    else base = Math.round(base * (1 + EUROPE_MAJORATION) + EUROPE_FORFAIT);
  }

  if (input.vehicle === "utilitaire") base = Math.round(base * (1 + OPTIONS.utilitairePct));
  if (input.vehicle === "prestige") base = Math.round(base * (1 + OPTIONS.prestigePct));

  if (input.when === "urgent") base = Math.round(base * (1 + OPTIONS.urgencePct));
  if (input.when === "samedi") base = Math.round(base * (1 + OPTIONS.samediPct));
  if (input.when === "dimanche") base = Math.round(base * (1 + OPTIONS.dimanchePct));

  let options = 0;
  if (input.lavage === "exterieur") options += OPTIONS.lavageExterieur;
  if (input.lavage === "complet") options += OPTIONS.lavageComplet;
  if (input.miseEnMain) options += OPTIONS.miseEnMain;
  if (input.rechargeVe || input.vehicle === "ve") options += OPTIONS.rechargeVe;

  const total = Math.max(MINIMUM_LOCAL, base + options);

  let delay = "24–48 h";
  if (km > 400) delay = "J+2 / J+3";
  if (km > 800) delay = "J+3 / J+4";
  if (input.when === "urgent") delay = "sous 24 h (selon dispo)";
  if (europeForced) delay = "J+2 à J+4";

  return {
    ok: true,
    km,
    base,
    options,
    total,
    delay,
    fromName,
    toName,
    europe: Boolean(europeForced),
  };
}
