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
  lavageComplet: 90,
  rechargeVe: 25,
  urgencePct: 0.25,
  samediPct: 0.2,
  dimanchePct: 0.4,
  utilitairePct: 0.15,
  prestigePct: 0.2,
  gps: 199,
  securite: 75,
  plein: 149,
  pleinService: 49,
  carburantLitre: 2,
  pleinLitresVp: 50,
  pleinLitresPrestige: 65,
  pleinLitresUtilitaire: 70,
  rechargeForfait: 28,
  controleVisuel: 49,
  coffretArmor: 45,
  coffretChampagne: 89,
  packEssentiel: 89,
  packConfort: 129,
  packConfortChampagne: 169,
  packPremium: 329,
  kitBienvenue: 19,
  jockeyCt: 55,
  jockeyLavage: 90,
  jockeyLavagePrestige: 125,
} as const;

/** Coûts d’achat indicatifs (Amazon / GMS, TTC). Marge ≥ 50 % du prix client. Jamais affichés. */
export const COFFRET_COST = {
  armor: {
    sell: 45,
    cost: 20,
    items: [
      "Palets / galettes St Michel ou La Trinitaine. ~6 €",
      "Caramels au beurre salé 200 g. ~7 €",
      "Cidre breton 75 cl. ~4 €",
      "Boîte kraft + ruban + carte Convoyage BZH. ~3 €",
    ],
  },
  champagne: {
    sell: 89,
    cost: 40,
    items: [
      "Champagne brut 75 cl type Nicolas Feuillatte. ~22 €",
      "Ballotin chocolats 200 g. ~14 €",
      "Écrin + papier de soie + ruban. ~4 €",
    ],
  },
} as const;

/** Traceur 4G magnétique laissé à l’acheteur. 12 mois inclus. Abonnement ensuite à sa charge. */
export const GPS_COST = {
  sell: 199,
  cost: 95,
  what: "Traceur GPS 4G magnétique, sans perçage. Type PAJ / Salind. Application sur le téléphone de l’acheteur. 12 mois de suivi inclus. Ensuite environ 5 à 6 € par mois, payés par l’acheteur.",
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
  { name: "Bénodet", aliases: ["benodet"], lat: 47.877, lng: -4.111, forfaitFromQuimper: 70 },
  { name: "Fouesnant", aliases: ["fouesnant", "beg-meil"], lat: 47.894, lng: -4.012, forfaitFromQuimper: 70 },
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
  { name: "Nice", aliases: ["nice", "cannes", "antibes"], lat: 43.71, lng: 7.262, forfaitFromQuimper: 1050 },
  { name: "Caen", aliases: ["caen"], lat: 49.182, lng: -0.37, forfaitFromQuimper: 420 },
  { name: "Rouen", aliases: ["rouen"], lat: 49.443, lng: 1.099, forfaitFromQuimper: 480 },
  { name: "Lille", aliases: ["lille"], lat: 50.629, lng: 3.057, forfaitFromQuimper: 620 },
  { name: "Reims", aliases: ["reims"], lat: 49.258, lng: 4.032, forfaitFromQuimper: 580 },
  { name: "Metz", aliases: ["metz"], lat: 49.119, lng: 6.176, forfaitFromQuimper: 750 },
  { name: "Strasbourg", aliases: ["strasbourg"], lat: 48.573, lng: 7.752, forfaitFromQuimper: 820 },
  { name: "Dijon", aliases: ["dijon"], lat: 47.322, lng: 5.041, forfaitFromQuimper: 720 },
  { name: "Grenoble", aliases: ["grenoble"], lat: 45.188, lng: 5.724, forfaitFromQuimper: 850 },
  { name: "Montpellier", aliases: ["montpellier"], lat: 43.611, lng: 3.877, forfaitFromQuimper: 920 },
  { name: "Perpignan", aliases: ["perpignan"], lat: 42.699, lng: 2.895, forfaitFromQuimper: 980 },
  { name: "La Rochelle", aliases: ["la rochelle"], lat: 46.16, lng: -1.152, forfaitFromQuimper: 420 },
  { name: "Tours", aliases: ["tours"], lat: 47.394, lng: 0.684, forfaitFromQuimper: 380 },
  { name: "Orléans", aliases: ["orleans", "orléans"], lat: 47.903, lng: 1.909, forfaitFromQuimper: 480 },
  { name: "Clermont-Ferrand", aliases: ["clermont", "clermont-ferrand"], lat: 45.777, lng: 3.082, forfaitFromQuimper: 700 },
  { name: "Pau", aliases: ["pau"], lat: 43.295, lng: -0.37, forfaitFromQuimper: 720 },
  { name: "Landerneau", aliases: ["landerneau"], lat: 48.451, lng: -4.249, forfaitFromQuimper: 95 },
  { name: "Landivisiau", aliases: ["landivisiau"], lat: 48.509, lng: -4.069, forfaitFromQuimper: 100 },
  { name: "Crozon", aliases: ["crozon", "camaret"], lat: 48.246, lng: -4.49, forfaitFromQuimper: 95 },
  { name: "Guidel", aliases: ["guidel"], lat: 47.791, lng: -3.488, forfaitFromQuimper: 90 },
  { name: "Ploemeur", aliases: ["ploemeur"], lat: 47.736, lng: -3.427, forfaitFromQuimper: 105 },
  { name: "Hennebont", aliases: ["hennebont"], lat: 47.805, lng: -3.279, forfaitFromQuimper: 110 },
  { name: "Pontivy", aliases: ["pontivy"], lat: 48.068, lng: -2.967, forfaitFromQuimper: 140 },
  { name: "Dinan", aliases: ["dinan"], lat: 48.456, lng: -2.048, forfaitFromQuimper: 250 },
  { name: "Saint-Nazaire", aliases: ["saint-nazaire", "montoir"], lat: 47.273, lng: -2.214, forfaitFromQuimper: 280 },
  { name: "La Baule", aliases: ["la baule", "pornichet"], lat: 47.286, lng: -2.392, forfaitFromQuimper: 270 },
  { name: "Laval", aliases: ["laval"], lat: 48.073, lng: -0.77, forfaitFromQuimper: 280 },
  { name: "Vitré", aliases: ["vitre", "vitré"], lat: 48.124, lng: -1.214, forfaitFromQuimper: 265 },
  { name: "Fougères", aliases: ["fougeres", "fougères"], lat: 48.352, lng: -1.198, forfaitFromQuimper: 275 },
  { name: "Biarritz", aliases: ["biarritz", "bayonne"], lat: 43.483, lng: -1.559, forfaitFromQuimper: 720 },
  { name: "Le Havre", aliases: ["le havre"], lat: 49.494, lng: 0.108, forfaitFromQuimper: 520 },
  { name: "Aix-en-Provence", aliases: ["aix-en-provence", "aix en provence"], lat: 43.529, lng: 5.448, forfaitFromQuimper: 990 },
  { name: "Châteaulin", aliases: ["chateaulin", "châteaulin"], lat: 48.197, lng: -4.09, forfaitFromQuimper: 70 },
  { name: "Audierne", aliases: ["audierne"], lat: 48.021, lng: -4.538, forfaitFromQuimper: 85 },
  { name: "Pont-Aven", aliases: ["pont-aven", "pont aven"], lat: 47.856, lng: -3.748, forfaitFromQuimper: 80 },
  { name: "Carhaix", aliases: ["carhaix", "carhaix-plouguer"], lat: 48.276, lng: -3.567, forfaitFromQuimper: 95 },
  { name: "Roscoff", aliases: ["roscoff"], lat: 48.727, lng: -3.986, forfaitFromQuimper: 140 },
  { name: "Lannion", aliases: ["lannion"], lat: 48.732, lng: -3.459, forfaitFromQuimper: 175 },
  { name: "Auray", aliases: ["auray"], lat: 47.667, lng: -2.983, forfaitFromQuimper: 165 },
  { name: "Quiberon", aliases: ["quiberon"], lat: 47.484, lng: -3.12, forfaitFromQuimper: 190 },
  { name: "Bruxelles", aliases: ["bruxelles", "brussels", "brussel"], lat: 50.85, lng: 4.351, europe: true },
  { name: "Luxembourg", aliases: ["luxembourg"], lat: 49.611, lng: 6.132, europe: true },
  { name: "Amsterdam", aliases: ["amsterdam"], lat: 52.367, lng: 4.904, europe: true },
  { name: "Genève", aliases: ["geneve", "genève"], lat: 46.204, lng: 6.143, europe: true },
  { name: "Barcelone", aliases: ["barcelone", "barcelona"], lat: 41.387, lng: 2.168, europe: true },
  { name: "Francfort", aliases: ["francfort", "frankfurt"], lat: 50.11, lng: 8.682, europe: true },
  { name: "Milan", aliases: ["milan", "milano"], lat: 45.464, lng: 9.19, europe: true },
  { name: "Munich", aliases: ["munich", "munchen"], lat: 48.135, lng: 11.582, europe: true },
  { name: "Londres", aliases: ["londres", "london"], lat: 51.507, lng: -0.128, europe: true, note: "ferry" },
  { name: "Monaco", aliases: ["monaco", "monte-carlo", "monte carlo"], lat: 43.738, lng: 7.424, europe: true },
  { name: "Varsovie", aliases: ["varsovie", "warsaw", "warszawa", "pologne"], lat: 52.23, lng: 21.012, europe: true },
  { name: "Belgrade", aliases: ["belgrade", "beograd", "serbie"], lat: 44.787, lng: 20.449, europe: true },
  { name: "Lisbonne", aliases: ["lisbonne", "lisboa", "lisbon"], lat: 38.722, lng: -9.139, europe: true },
  { name: "Porto", aliases: ["porto"], lat: 41.158, lng: -8.629, europe: true },
  { name: "Vienne", aliases: ["vienne", "vienna"], lat: 48.208, lng: 16.374, europe: true },
  { name: "Prague", aliases: ["prague", "praha"], lat: 50.075, lng: 14.438, europe: true },
  { name: "Zagreb", aliases: ["zagreb"], lat: 45.815, lng: 15.982, europe: true },
  { name: "Dublin", aliases: ["dublin"], lat: 53.35, lng: -6.26, europe: true },
  { name: "Copenhague", aliases: ["copenhague", "copenhagen"], lat: 55.676, lng: 12.568, europe: true },
  { name: "Budapest", aliases: ["budapest"], lat: 47.498, lng: 19.04, europe: true },
  { name: "Andorre", aliases: ["andorre", "andorra"], lat: 42.507, lng: 1.521, europe: true },
  { name: "Ljubljana", aliases: ["ljubljana"], lat: 46.056, lng: 14.506, europe: true },
  { name: "Bratislava", aliases: ["bratislava"], lat: 48.148, lng: 17.107, europe: true },
  { name: "Athènes", aliases: ["athenes", "athens"], lat: 37.984, lng: 23.728, europe: true },
  { name: "Stockholm", aliases: ["stockholm"], lat: 59.329, lng: 18.069, europe: true },
  { name: "Oslo", aliases: ["oslo"], lat: 59.913, lng: 10.752, europe: true },
  { name: "Bucarest", aliases: ["bucarest", "bucharest"], lat: 44.426, lng: 26.102, europe: true },
  { name: "Valence", aliases: ["valence", "valencia"], lat: 39.47, lng: -0.376, europe: true },
  { name: "Helsinki", aliases: ["helsinki", "helsinki finland"], lat: 60.17, lng: 24.938, europe: true },
  { name: "Sofia", aliases: ["sofia", "sofija"], lat: 42.698, lng: 23.322, europe: true },
  { name: "Tirana", aliases: ["tirana"], lat: 41.328, lng: 19.819, europe: true },
  { name: "Podgorica", aliases: ["podgorica"], lat: 42.441, lng: 19.263, europe: true },
  { name: "Sarajevo", aliases: ["sarajevo"], lat: 43.856, lng: 18.413, europe: true },
  { name: "Skopje", aliases: ["skopje"], lat: 41.998, lng: 21.425, europe: true },
  { name: "Tallinn", aliases: ["tallinn"], lat: 59.437, lng: 24.754, europe: true },
  { name: "Riga", aliases: ["riga"], lat: 56.949, lng: 24.105, europe: true },
  { name: "Vilnius", aliases: ["vilnius"], lat: 54.687, lng: 25.28, europe: true },
  { name: "La Valette", aliases: ["valette", "valletta", "malte"], lat: 35.899, lng: 14.514, europe: true },
  { name: "Nicosie", aliases: ["nicosie", "nicosia"], lat: 35.185, lng: 33.382, europe: true },
  { name: "Vaduz", aliases: ["vaduz"], lat: 47.141, lng: 9.521, europe: true },
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
  { name: "Monaco", prix: 1180 },
  { name: "Varsovie", prix: 1650 },
  { name: "Belgrade", prix: 1750 },
  { name: "Lisbonne", prix: 1380 },
  { name: "Porto", prix: 1280 },
  { name: "Vienne", prix: 1480 },
  { name: "Prague", prix: 1520 },
  { name: "Zagreb", prix: 1580 },
  { name: "Dublin", prix: 1420 },
  { name: "Copenhague", prix: 1550 },
  { name: "Budapest", prix: 1600 },
  { name: "Andorre", prix: 980 },
  { name: "Ljubljana", prix: 1520 },
  { name: "Bratislava", prix: 1500 },
  { name: "Athènes", prix: 1980 },
  { name: "Stockholm", prix: 1850 },
  { name: "Oslo", prix: 1880 },
  { name: "Bucarest", prix: 1820 },
  { name: "Valence", prix: 1320 },
  { name: "Helsinki", prix: 1950 },
  { name: "Sofia", prix: 1750 },
  { name: "Tirana", prix: 1780 },
  { name: "Podgorica", prix: 1720 },
  { name: "Sarajevo", prix: 1680 },
  { name: "Skopje", prix: 1760 },
  { name: "Tallinn", prix: 1900 },
  { name: "Riga", prix: 1850 },
  { name: "Vilnius", prix: 1800 },
  { name: "La Valette", prix: 2100 },
  { name: "Nicosie", prix: 2200 },
  { name: "Vaduz", prix: 1280 },
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
export type WhenKind = "standard" | "urgent";

/** Passage à la pompe 49 € + carburant 2 €/L, volume selon le véhicule. Marge sur le déplacement. */
export function litresPlein(vehicle: VehicleKind) {
  if (vehicle === "prestige") return OPTIONS.pleinLitresPrestige;
  if (vehicle === "utilitaire") return OPTIONS.pleinLitresUtilitaire;
  return OPTIONS.pleinLitresVp;
}

export function prixPlein(vehicle: VehicleKind = "vp") {
  if (vehicle === "ve") return OPTIONS.pleinService + OPTIONS.rechargeForfait;
  return OPTIONS.pleinService + litresPlein(vehicle) * OPTIONS.carburantLitre;
}

/** Deux créneaux. Week-end et jours fériés inclus. Toujours sous réserve de disponibilité. */
export const WHEN_OFFERS = [
  {
    id: "standard" as const,
    name: "Standard",
    delay: "5 jours",
    hint: "Du lundi au vendredi. Prise en charge sous cinq jours environ, sous réserve de disponibilité des équipes. Week-end et jours fériés inclus.",
    extraPct: 0,
    extraLabel: "Tarif de base",
  },
  {
    id: "urgent" as const,
    name: "Urgent",
    delay: "Sous 72 h",
    hint: "Prise en charge sous 72 heures, sous réserve de disponibilité des équipes. Week-end et jours fériés inclus.",
    extraPct: 0.25,
    extraLabel: "+ 25 %",
  },
] as const;
export type ZoneKind = "france" | "europe";

export type PackKind = "aucun" | "essentiel" | "confort" | "premium";
export type FormulaKind = "aucun" | "standard" | "premium";
export type MissionKind = "convoyage" | "jockey";

export type JockeySens = "depose" | "rapatriement" | "allerRetour";

export const JOCKEY_SENS = [
  {
    id: "depose" as const,
    name: "Dépose",
    hint: "Nous amenons votre véhicule à la gare ou à l’aéroport. Vous partez. Photos.",
  },
  {
    id: "rapatriement" as const,
    name: "Rapatriement",
    hint: "Vous nous confiez les clés au dépose-minute. Nous ramenons le véhicule à votre domicile. Photos.",
  },
  {
    id: "allerRetour" as const,
    name: "Aller et retour",
    hint: "Dépose au départ, rapatriement au retour. Un double des clés peut rester chez nous.",
  },
] as const;

export const JOCKEY_POINTS = [
  { id: "quimper-gare", name: "Gare de Quimper", lat: 47.994, lng: -4.092, forfait: 89, allerRetour: 159 },
  { id: "lorient-aero", name: "Aéroport Lorient-Bretagne Sud", lat: 47.761, lng: -3.44, forfait: 159, allerRetour: 279 },
  { id: "lorient-gare", name: "Gare de Lorient", lat: 47.749, lng: -3.366, forfait: 149, allerRetour: 259 },
  { id: "brest-aero", name: "Aéroport Brest-Bretagne", lat: 48.447, lng: -4.419, forfait: 169, allerRetour: 299 },
  { id: "brest-gare", name: "Gare de Brest", lat: 48.388, lng: -4.48, forfait: 149, allerRetour: 259 },
  { id: "vannes-gare", name: "Gare de Vannes", lat: 47.665, lng: -2.752, forfait: 189, allerRetour: 339 },
  { id: "rennes-gare", name: "Gare de Rennes", lat: 48.103, lng: -1.672, forfait: 289, allerRetour: 519 },
  { id: "rennes-aero", name: "Aéroport Rennes-Saint-Jacques", lat: 48.069, lng: -1.735, forfait: 299, allerRetour: 539 },
  { id: "nantes-gare", name: "Gare de Nantes", lat: 47.217, lng: -1.542, forfait: 329, allerRetour: 589 },
  { id: "nantes-aero", name: "Aéroport Nantes-Atlantique", lat: 47.153, lng: -1.611, forfait: 349, allerRetour: 629 },
] as const;

export type QuoteInput = {
  from: string;
  to: string;
  kmManual?: number;
  zone: ZoneKind;
  vehicle: VehicleKind;
  when: WhenKind;
  lavage: "aucun" | "exterieur" | "complet";
  rechargeVe: boolean;
  gps: boolean;
  securite: boolean;
  plein: boolean;
  controleVisuel: boolean;
  coffret: "aucun" | "armor" | "champagne";
  pack: PackKind;
  kitBienvenue: boolean;
  formula: FormulaKind;
  model?: string;
  mission: MissionKind;
  jockeySens: JockeySens;
  jockeyPoint: string;
  jockeyRef: string;
  jockeyAller: string;
  jockeyRetour: string;
  jockeyCt: boolean;
  jockeyWash: "aucun" | "standard" | "prestige";
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
  if (input.mission === "jockey") {
    const point = JOCKEY_POINTS.find((p) => p.name === input.jockeyPoint);
    if (!point) {
      return {
        ok: false,
        message: "Choisissez un point de rendez-vous.",
        km: 0,
        base: 0,
        options: 0,
        total: 0,
        delay: "",
        fromName: input.jockeyPoint || "Point de rendez-vous",
        toName: "Domicile",
        europe: false,
      };
    }
    const home = findCity(input.from);
    const dest = {
      name: point.name,
      aliases: [] as string[],
      lat: point.lat,
      lng: point.lng,
    };
    const km = home ? roadKm(home, dest) : 0;
    const round = input.jockeySens === "allerRetour";
    let base = home && km ? Math.max(point.forfait, prixBareme(km)) : point.forfait;
    if (round) base = home && km ? Math.round(Math.max(point.forfait, prixBareme(km)) * 1.8) : point.allerRetour;
    if (input.when === "urgent") base = Math.round(base * (1 + OPTIONS.urgencePct));
    let options = 0;
    if (input.jockeyWash === "standard") options += OPTIONS.jockeyLavage;
    if (input.jockeyWash === "prestige") options += OPTIONS.jockeyLavagePrestige;
    if (input.plein) options += prixPlein(input.vehicle);
    if (input.jockeyCt) options += OPTIONS.jockeyCt;
    const homeName = home?.name ?? (input.from.trim() || "Domicile");
    const label =
      input.jockeySens === "depose"
        ? `Dépose ${homeName} → ${point.name}`
        : input.jockeySens === "rapatriement"
          ? `Rapatriement ${point.name} → ${homeName}`
          : `Aller et retour ${homeName} ↔ ${point.name}`;
    if (!input.from.trim()) {
      return {
        ok: false,
        message: "Indiquez la ville du domicile.",
        km,
        base: 0,
        options: 0,
        total: 0,
        delay: "",
        fromName: homeName,
        toName: point.name,
        europe: false,
      };
    }
    return {
      ok: true,
      km,
      base,
      options,
      total: base + options,
      delay: "Créneau sous 2 h, sous réserve.",
      fromName: homeName,
      toName: label,
      europe: false,
    };
  }

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

  let options = 0;
  const packed = input.pack !== "aucun";
  const prestige = input.vehicle === "prestige";
  const confortChampagne = packed && input.pack === "confort" && (prestige || input.coffret === "champagne");

  if (input.pack === "essentiel") options += OPTIONS.packEssentiel;
  else if (input.pack === "confort") options += confortChampagne ? OPTIONS.packConfortChampagne : OPTIONS.packConfort;
  else if (input.pack === "premium") options += OPTIONS.packPremium;

  if (!packed) {
    if (input.lavage === "complet" || input.lavage === "exterieur") options += OPTIONS.lavageComplet;
    if (input.controleVisuel) options += OPTIONS.controleVisuel;
    if (input.gps) options += OPTIONS.gps;
    if (input.plein) options += prixPlein(input.vehicle);
    if (input.coffret === "armor") options += OPTIONS.coffretArmor;
    if (input.coffret === "champagne") options += OPTIONS.coffretChampagne;
  }

  const total = Math.max(MINIMUM_LOCAL, base + options);

  let delay = "5 jours, sous réserve de disponibilité";
  if (input.when === "urgent") delay = "sous 72 h, sous réserve de disponibilité";
  if (europeForced && input.when === "standard") delay = "5 jours, sous réserve de disponibilité";

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

export type QuoteRange = { low: number; mid: number; high: number };

export function quoteRange(total: number): QuoteRange {
  const low = Math.max(MINIMUM_LOCAL, Math.round((total * 0.9) / 5) * 5);
  let high = Math.round((total * 1.12) / 5) * 5;
  if (high <= low) high = low + 25;
  return { low, mid: total, high };
}
