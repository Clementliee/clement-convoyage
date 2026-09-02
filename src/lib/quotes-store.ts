import type { QuoteLine } from "@/lib/tarifs";

export type DossierPayload = {
  make: string;
  model: string;
  plate: string;
  energy: string;
  insurance: string;
  policy: string;
  papers: string;
  keysAddress: string;
  contactOnSite: string;
  notes: string;
};

export type StoredQuote = {
  quoteNo: string;
  createdAt: string;
  status: "envoye" | "signe" | "dossier";
  total: number;
  fromName: string;
  toName: string;
  km: number;
  delay: string;
  pack: string;
  client: "part" | "pro";
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDate: string;
  extras: string;
  lines: QuoteLine[];
  dossier?: DossierPayload;
};

const KEY = "cbzh.quotes.v1";

function read(): StoredQuote[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredQuote[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(rows: StoredQuote[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(rows.slice(0, 40)));
}

export function listQuotes(): StoredQuote[] {
  return read().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getQuote(quoteNo: string): StoredQuote | undefined {
  return read().find((q) => q.quoteNo === quoteNo);
}

export function upsertQuote(row: StoredQuote) {
  const rows = read().filter((q) => q.quoteNo !== row.quoteNo);
  rows.unshift(row);
  write(rows);
}

export const DOSSIER_CHECKLIST = [
  "Marque, modèle, immatriculation, énergie",
  "Attestation d’assurance en cours de validité",
  "Copie de la carte grise",
  "Adresse exacte de prise en charge et nom du contact sur place",
  "Lieu des clés",
] as const;
