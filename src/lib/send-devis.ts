import { SITE } from "@/lib/site";
import { DOSSIER_CHECKLIST, type DossierPayload } from "@/lib/quotes-store";
import type { QuoteLine } from "@/lib/tarifs";

export type LeadPayload = {
  firstName: string;
  lastName: string;
  client: "part" | "pro";
  company?: string;
  email: string;
  phone: string;
  fromName: string;
  toName: string;
  km: number;
  delay: string;
  total: number;
  quoteNo: string;
  lines: QuoteLine[];
  extras: string;
  message?: string;
  pickupDate?: string;
  accepted?: boolean;
  dossier?: DossierPayload;
};

function linesText(p: LeadPayload) {
  return p.lines.map((l) => `${l.label} : ${l.amount} €`).join("\n");
}

function dossierText(d?: DossierPayload) {
  if (!d) return "";
  return [
    d.make || d.model ? `Véhicule : ${[d.make, d.model].filter(Boolean).join(" ")}` : "",
    d.plate ? `Immatriculation : ${d.plate}` : "",
    d.energy ? `Énergie : ${d.energy}` : "",
    d.insurance ? `Assurance : ${d.insurance}` : "",
    d.policy ? `Police : ${d.policy}` : "",
    d.papers ? `Documents : ${d.papers}` : "",
    d.keysAddress ? `Clés : ${d.keysAddress}` : "",
    d.contactOnSite ? `Contact sur place : ${d.contactOnSite}` : "",
    d.notes ? `Notes : ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function autoresponse(p: LeadPayload) {
  const signed = Boolean(p.accepted);
  const hasDossier = Boolean(p.dossier);
  return [
    `Bonjour ${p.firstName},`,
    "",
    `Votre devis Convoyage BZH n° ${p.quoteNo} est prêt. Il vous est adressé tout de suite.`,
    "",
    `Trajet : ${p.fromName} vers ${p.toName} (${p.km} km)`,
    `Montant : ${p.total} € TTC`,
    `Délai de mission : ${p.delay}`,
    p.pickupDate ? `Date de prise en charge souhaitée : ${p.pickupDate}` : "",
    p.extras ? `Détail : ${p.extras}` : "",
    signed ? "Vous avez signé ce devis en ligne. Le tarif est verrouillé." : "Ce tarif est fermé 7 jours. Signez-le sur le site.",
    "",
    signed && !hasDossier
      ? [
          "Pour confirmer la mission, il nous faut encore :",
          ...DOSSIER_CHECKLIST.map((l) => `— ${l}`),
          "",
          "Renseignez-les sur le site (Suivi de devis) ou répondez à cet e-mail.",
        ].join("\n")
      : "",
    hasDossier ? `Dossier mission reçu :\n${dossierText(p.dossier)}` : "",
    "",
    "Le prix ne sera pas repris à la hausse. Nous confirmons uniquement le créneau, selon disponibilité.",
    "Le PDF s’est téléchargé depuis le site. Conservez-le.",
    "",
    "Inclus : conduite, carburant, péages, retour convoyeur, état des lieux photo, remise des clés, mise en main.",
    "Franchise TVA art. 293 B du CGI.",
    "",
    `${SITE.name}. ${SITE.city}`,
    SITE.email,
    SITE.phone,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

export async function sendDevisLead(p: LeadPayload): Promise<{ ok: boolean; detail?: string }> {
  const body = {
    _subject: `${p.dossier ? "Dossier mission" : p.accepted ? "Devis signé" : "Devis"} ${p.quoteNo} — ${p.fromName} vers ${p.toName}. ${p.firstName} ${p.lastName}`,
    _template: "table",
    _captcha: "false",
    _replyto: p.email,
    _autoresponse: autoresponse(p),
    email: p.email,
    Prenom: p.firstName,
    Nom: p.lastName,
    Profil: p.client === "pro" ? "Professionnel" : "Particulier",
    Societe: p.company || "",
    Telephone: p.phone,
    NumeroDevis: p.quoteNo,
    Trajet: `${p.fromName} vers ${p.toName}`,
    Kilometres: String(p.km),
    Delai: p.delay,
    Montant: `${p.total} € TTC`,
    Lignes: linesText(p),
    Options: p.extras || "",
    DateSouhaitee: p.pickupDate || "",
    Acceptation: p.accepted ? "Signé" : "En attente de signature",
    Dossier: dossierText(p.dossier),
    Message: p.message || "",
  };

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    if (!res.ok) return { ok: false, detail: json.message };
    return { ok: true };
  } catch {
    return { ok: false, detail: "network" };
  }
}

export function mailtoFallback(p: LeadPayload) {
  const subject = encodeURIComponent(`Devis ${p.quoteNo} ${p.fromName} vers ${p.toName}`);
  const body = encodeURIComponent(
    [
      `${p.firstName} ${p.lastName}`,
      p.client === "pro" ? `Professionnel ${p.company ?? ""}` : "Particulier",
      p.email,
      p.phone,
      `${p.fromName} vers ${p.toName}, ${p.km} km`,
      `Montant : ${p.total} € TTC`,
      p.pickupDate ? `Date souhaitée : ${p.pickupDate}` : "",
      p.accepted ? "Devis signé. Tarif verrouillé." : "En attente de signature.",
      dossierText(p.dossier),
      p.message ?? "",
    ].join("\n"),
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
