import type { QuoteRange } from "@/lib/tarifs";
import { SITE } from "@/lib/site";

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
  range: QuoteRange;
  extras: string;
  pickupDate?: string;
};

export async function downloadQuotePdf(data: QuotePdfInput) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;

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
  doc.text("Devis indicatif, a confirmer", 22, 32);

  let y = 54;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Client", 22, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 7;
  const who = `${data.firstName} ${data.lastName}`.trim();
  doc.text(who, 22, y);
  y += 5;
  doc.setTextColor(110, 110, 115);
  doc.text(data.client === "pro" ? `Professionnel${data.company ? `, ${data.company}` : ""}` : "Particulier", 22, y);
  y += 5;
  doc.text(`${data.email}, ${data.phone}`, 22, y);

  y += 14;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Trajet", 22, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 7;
  doc.text(`${data.fromName} vers ${data.toName}`, 22, y);
  y += 5;
  doc.setTextColor(110, 110, 115);
  doc.text(`${data.km} km, delai ${data.delay}`, 22, y);
  if (data.pickupDate) {
    y += 5;
    doc.text(`Prise en charge souhaitee : ${data.pickupDate}`, 22, y);
  }
  if (data.extras) {
    y += 5;
    const extraLines = doc.splitTextToSize(`Options : ${data.extras}`, 166);
    doc.text(extraLines, 22, y);
    y += extraLines.length * 5;
  }

  y += 12;
  doc.setFillColor(244, 241, 234);
  doc.roundedRect(22, y, 166, 42, 3, 3, "F");
  doc.setTextColor(110, 110, 115);
  doc.setFontSize(8);
  doc.text("FOURCHETTE INDICATIVE", 32, y + 12);
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(`de ${data.range.low} a ${data.range.high} EUR`, 32, y + 26);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(110, 110, 115);
  doc.text(`Estimation centrale : ${data.range.mid} EUR`, 32, y + 35);

  y += 56;
  doc.setTextColor(29, 29, 31);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("A confirmer avec un professionnel", 22, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 85);
  const disclaimer = doc.splitTextToSize(
    "Ce document n'est pas un devis ferme. La fourchette depend du trafic, des attentes, du vehicule et du retour a vide. Un professionnel confirme le prix avant toute mission. Inclus a la confirmation : conduite, carburant, peages, retour convoyeur, etat des lieux photo, remise des cles, mise en main. Franchise de TVA art. 293 B du CGI.",
    166,
  );
  doc.text(disclaimer, 22, y + 7);

  doc.setFontSize(8);
  doc.setTextColor(150, 150, 155);
  doc.text(`${SITE.name}, SIRET ${SITE.siret}`, 22, 268);
  doc.text(`${SITE.city}, ${SITE.email}, ${SITE.phone}`, 22, 273);
  doc.text(new Date().toLocaleDateString("fr-FR"), 170, 272);

  const slug = `${data.fromName}-${data.toName}`.replace(/[^a-zA-Z0-9]+/g, "-");
  doc.save(`Devis-Convoyage-BZH-${slug}.pdf`);
}
