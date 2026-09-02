export type CaseKind = "part" | "pro" | "conciergerie";

export type MissionCase = {
  id: string;
  kind: CaseKind;
  tag: string;
  pack: string;
  from: string;
  to: string;
  title: string;
  lead: string;
  story: string;
  image: string;
  alt: string;
  mission?: "jockey";
};

export const CASES: MissionCase[] = [
  {
    id: "leboncoin-rennes",
    kind: "part",
    tag: "Particulier",
    pack: "Pack Route",
    from: "Quimper",
    to: "Rennes",
    title: "308 d’occasion, Pluguffan → Rennes.",
    lead: "Achat Leboncoin. Vendeur à Pluguffan, acheteur à Rennes. Samedi matin.",
    story:
      "Le vendeur ne voulait pas faire l’aller-retour. L’acheteur non plus. Prise en charge à 8 h 30, photos, compteur, carrosserie. Remise à Rennes-Cesson avant midi. Clés en main, mise en main offerte. Aller simple, retour chauffeur.",
    image: "/images/convoyage-voiture-france.jpg",
    alt: "Berline sur route, convoyage France",
  },
  {
    id: "import-belgique",
    kind: "part",
    tag: "Particulier",
    pack: "Pack Sécurisé",
    from: "Bruxelles",
    to: "Bénodet",
    title: "Golf GTI, Bruxelles → Bénodet.",
    lead: "Import Belgique. Documents vérifiés avant le départ. Traceur GPS cédé.",
    story:
      "Le client avait peur du trajet et des papiers. Contrôle des documents à Bruxelles, état des lieux photo, GPS 4G laissé à bord pour douze mois. Remise à Bénodet le lendemain, mise en main des aides à la conduite. Pas un particulier au volant.",
    image: "/images/convoyage-europe-autoroute.jpg",
    alt: "Convoyage européen de nuit sur autoroute",
  },
  {
    id: "livraison-vn",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Livraison client",
    from: "Quimper",
    to: "Concarneau",
    title: "SUV neuf, concession Quimper → Concarneau.",
    lead: "Le commercial reste en showroom. On livre le client.",
    story:
      "Véhicule préparé, nettoyage standard constructeur, coffret terroir dans le coffre. Remise à domicile, vingt-cinq minutes de mise en main, compte-rendu au service qui commande. Facture à quinze jours.",
    image: "/images/remise-cles-vehicule.jpg",
    alt: "Remise des clés d’un véhicule neuf",
  },
  {
    id: "navette-ct",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Atelier",
    from: "Lorient",
    to: "Pontivy",
    title: "Trois véhicules au CT, garage Lorient.",
    lead: "Les mécanos restent au banc. On fait les allers-retours.",
    story:
      "Trois VL, créneau du matin au centre de Pontivy. Approche depuis Quimper. Photos au départ et au retour, compte-rendu le soir. Le garage n’immobilise plus un salarié pour la route.",
    image: "/images/atelier-garage-professionnel.jpg",
    alt: "Berline dans un atelier automobile",
  },
  {
    id: "jockey-tgv",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "À la carte",
    from: "Fouesnant",
    to: "Quimper",
    title: "TGV de 6 h 42, Fouesnant → gare de Quimper.",
    lead: "Le couple prend le train. La voiture, non.",
    story:
      "Dépose du véhicule sur le parvis, photos, clés. Dimanche soir : rapatriement à Fouesnant, attente de la personne à la descente du train. Pas de gardiennage. Pas de transport de passagers.",
    image: "/images/jockey-gare-quimper.jpg",
    alt: "Berline sur le parvis de la gare de Quimper",
    mission: "jockey",
  },
  {
    id: "mandataire-vannes",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Atelier",
    from: "Vannes",
    to: "Rennes",
    title: "VO à livrer, et une à ramener. Vannes → Rennes.",
    lead: "Deux véhicules. Un aller, un retour. Approche depuis Quimper.",
    story:
      "Mandataire à Vannes. Une VO part à Rennes, une autre revient le même jour. On facture l’approche Quimper → Vannes, le trajet, et le second véhicule à tarif retour. Photos des deux, clés en main propre.",
    image: "/images/etat-des-lieux-vehicule.jpg",
    alt: "État des lieux photo d’un véhicule",
  },
  {
    id: "prestige-911",
    kind: "part",
    tag: "Prestige",
    pack: "Pack Sécurisé",
    from: "Paris",
    to: "Quimper",
    title: "911, Paris → Quimper.",
    lead: "Sportive. Scellés, GPS le temps de la mission, remise à la personne nommée.",
    story:
      "Prise en charge à Boulogne. Clés et carte grise sous scellé. Mode Comfort, autoroute, pauses en stations éclairées. Arrivée Quimper le soir, mise en main, compte-rendu factuel. Ce n’est pas de la sécurité privée. C’est un cadre.",
    image: "/images/convoyage-berline-phares.jpg",
    alt: "Berline prestige, phares allumés",
  },
  {
    id: "utilitaire-dimanche",
    kind: "part",
    tag: "Particulier",
    pack: "Pack Sérénité",
    from: "Nantes",
    to: "Lorient",
    title: "Kangoo, Nantes → Lorient, un dimanche.",
    lead: "Achat le week-end. Plein fait. Nettoyage avant remise.",
    story:
      "Le client récupérait les clés trop tard pour rentrer. Prise en charge dimanche, lavage, plein, remise Lorient en fin d’après-midi. Tous les jours, si le créneau tient.",
    image: "/images/plein-carburant-vehicule.jpg",
    alt: "Plein de carburant avant livraison",
  },
];
