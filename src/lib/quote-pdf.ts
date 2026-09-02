import { SITE } from "@/lib/site";
import type { QuoteLine } from "@/lib/tarifs";

export type QuotePdfInput = {
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
  pickupDate?: string;
  accepted?: boolean;
};

function addDays(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("fr-FR");
}

export async function downloadQuotePdf(data: QuotePdfInput) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const issued = new Date().toLocaleDateString("fr-FR");
  const until = addDays(SITE.quoteValidityDays);

  doc.setFillColor(244, 241, 234);
  doc.rect(0, 0, pageW, 297, "F");
  doc.setFillColor(255, 252, 247);
  doc.roundedRect(12, 12, 186, 273, 4, 4, "F");

  doc.setFillColor(29, 29, 31);
  doc.rect(12, 12, 186, 28, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(SITE.name, 22, 24);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(data.accepted ? `Devis n° ${data.quoteNo} — signé` : `Devis n° ${data.quoteNo}`, 22, 32);

  let y = 52;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Client", 22, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 7;
  doc.text(`${data.firstName} ${data.lastName}`.trim(), 22, y);
  y += 5;
  doc.setTextColor(110, 110, 115);
  doc.text(data.client === "pro" ? `Professionnel${data.company ? `, ${data.company}` : ""}` : "Particulier", 22, y);
  y += 5;
  doc.text([data.email, data.phone].filter(Boolean).join(" · ") || "—", 22, y);

  y += 12;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Mission", 22, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 7;
  doc.text(`${data.fromName} vers ${data.toName}`, 22, y);
  y += 5;
  doc.setTextColor(110, 110, 115);
  doc.text(`${data.km} km · délai ${data.delay}`, 22, y);
  if (data.pickupDate) {
    y += 5;
    doc.text(`Prise en charge souhaitée : ${data.pickupDate}`, 22, y);
  }

  y += 12;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Détail", 22, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  for (const line of data.lines) {
    if (y > 230) break;
    doc.setTextColor(29, 29, 31);
    const label = doc.splitTextToSize(line.label, 120);
    doc.text(label, 22, y);
    doc.text(`${line.amount} EUR`, 176, y, { align: "right" });
    y += Math.max(6, label.length * 5);
  }

  y += 4;
  doc.setFillColor(244, 241, 234);
  doc.roundedRect(22, y, 166, 28, 3, 3, "F");
  doc.setTextColor(110, 110, 115);
  doc.setFontSize(8);
  doc.text(data.accepted ? "DEVIS SIGNÉ" : "MONTANT TTC — TARIF FERMÉ", 32, y + 10);
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(`${data.total} EUR`, 32, y + 22);

  y += 38;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 85);
  const legal = doc.splitTextToSize(
    `Émis le ${issued}. Valable ${SITE.quoteValidityDays} jours, jusqu'au ${until}. ` +
      (data.accepted
        ? "Accepté en ligne. Le tarif est verrouillé. Le créneau est confirmé selon disponibilité."
        : "L'acceptation en ligne vaut accord sur le tarif. Nous confirmons ensuite le créneau, pas le prix.") +
      " Inclus : conduite, carburant, péages, retour convoyeur, état des lieux photo, remise des clés, mise en main. " +
      SITE.vat +
      ".",
    166,
  );
  doc.text(legal, 22, y);

  doc.setFontSize(8);
  doc.setTextColor(150, 150, 155);
  doc.text(`${SITE.name} — ${SITE.legalName}, SIRET ${SITE.siret}`, 22, 268);
  doc.text(`${SITE.city}, ${SITE.email}, ${SITE.phone}`, 22, 273);
  doc.text(issued, 170, 273);

  const slug = `${data.fromName}-${data.toName}`.replace(/[^a-zA-Z0-9]+/g, "-");
  doc.save(`Devis-${data.quoteNo}-${slug}.pdf`);
}
