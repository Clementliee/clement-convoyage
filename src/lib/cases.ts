export type CaseKind = "part" | "pro" | "conciergerie";
export type CaseFilter = "all" | "part" | "pro" | "conciergerie";

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
  featured?: boolean;
  mission?: "jockey";
};

export const CASE_FILTERS: { id: CaseFilter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "part", label: "Convoyage" },
  { id: "pro", label: "Professionnel" },
  { id: "conciergerie", label: "Conciergerie" },
];

export const CASES: MissionCase[] = [
  {
    id: "leboncoin-rennes",
    kind: "part",
    tag: "Bretagne",
    pack: "Pack Route",
    from: "Quimper",
    to: "Rennes",
    title: "308 d’occasion, Pluguffan → Rennes.",
    lead: "Achat Leboncoin. Vendeur à Pluguffan, acheteur à Rennes. Samedi matin.",
    story:
      "Le vendeur ne voulait pas faire l’aller-retour. L’acheteur non plus. Prise en charge à 8 h 30, photos, compteur, carrosserie. Remise à Rennes-Cesson avant midi. Clés en main, mise en main offerte.",
    image: "/images/convoyage-voiture-france.jpg",
    alt: "Berline sur route, convoyage France",
    featured: true,
  },
  {
    id: "brest-rennes",
    kind: "part",
    tag: "Bretagne",
    pack: "Pack Route",
    from: "Brest",
    to: "Rennes",
    title: "Scenic, Brest → Rennes.",
    lead: "Le départ n’est pas Quimper. Approche depuis la base, puis le trajet.",
    story:
      "Prise en charge à Guipavas. Photos, documents. Arrivée Rennes en fin de matinée. L’approche Quimper → Brest est dans le devis, le retour chauffeur aussi. Un seul interlocuteur.",
    image: "/images/convoyage-berline-bretagne.jpg",
    alt: "Berline convoyée en Bretagne",
  },
  {
    id: "vannes-nantes",
    kind: "part",
    tag: "Grand Ouest",
    pack: "Pack Sérénité",
    from: "Vannes",
    to: "Nantes",
    title: "3008, Vannes → Nantes.",
    lead: "Achat entre particuliers. Plein et nettoyage avant la remise.",
    story:
      "Le client récupérait trop tard pour rentrer. Prise en charge à Vannes, lavage, plein, remise Nantes-Saint-Herblain. Mise en main des aides. Tous les jours, si le créneau tient.",
    image: "/images/plein-carburant-vehicule.jpg",
    alt: "Plein de carburant avant livraison",
  },
  {
    id: "quimper-paris",
    kind: "part",
    tag: "France",
    pack: "Pack Sérénité",
    from: "Quimper",
    to: "Paris",
    title: "Tesla Model 3, Quimper → Paris.",
    lead: "Électrique. Recharge en route. Remise à Boulogne le soir.",
    story:
      "Prise en charge Quimper le matin. Recharges sur aires, photos à chaque étape. Remise Paris, mise en main de l’application et du câble. Pas un particulier au volant.",
    image: "/images/convoyage-europe-autoroute.jpg",
    alt: "Convoyage sur autoroute, longue distance",
  },
  {
    id: "brest-nice",
    kind: "part",
    tag: "France",
    pack: "Pack Sécurisé",
    from: "Brest",
    to: "Nice",
    title: "A4, Brest → Nice.",
    lead: "1 400 km. Traceur GPS cédé. Deux jours de route.",
    story:
      "Mutation vers le Sud. Prise en charge Brest, GPS 4G laissé à bord pour douze mois, nuit en cours de route, remise Nice le lendemain. Compte-rendu le soir de l’arrivée. Cadre, pas de sous-traitance.",
    image: "/images/convoyage-berline-phares.jpg",
    alt: "Berline, phares allumés, long trajet",
    featured: true,
  },
  {
    id: "rennes-monaco",
    kind: "part",
    tag: "Prestige",
    pack: "Pack Sécurisé",
    from: "Rennes",
    to: "Monaco",
    title: "911, Rennes → Monaco.",
    lead: "Sportive. Scellés, GPS le temps de la mission, remise à la personne nommée.",
    story:
      "Prise en charge Rennes. Clés et carte grise sous scellé. Mode Comfort, autoroute, pauses en stations éclairées. Arrivée Monaco, mise en main, compte-rendu factuel. Ce n’est pas de la sécurité privée. C’est un cadre.",
    image: "/images/convoyage-berline-phares.jpg",
    alt: "Berline prestige, phares allumés",
  },
  {
    id: "varsovie-quimper",
    kind: "part",
    tag: "Europe",
    pack: "Pack Sécurisé",
    from: "Varsovie",
    to: "Quimper",
    title: "Passat, Varsovie → Quimper.",
    lead: "Import Pologne. Documents vérifiés avant le départ.",
    story:
      "Le client avait peur du trajet et des papiers. Contrôle des documents à Varsovie, état des lieux photo, GPS 4G. Trois pays, un seul chauffeur. Remise Quimper, mise en main. Formalités cadrées avant de tourner la clé.",
    image: "/images/convoyage-europe-autoroute.jpg",
    alt: "Convoyage européen de nuit sur autoroute",
  },
  {
    id: "bruxelles-benodet",
    kind: "part",
    tag: "Europe",
    pack: "Pack Sécurisé",
    from: "Bruxelles",
    to: "Bénodet",
    title: "Golf GTI, Bruxelles → Bénodet.",
    lead: "Import Belgique. Contrôle visuel sur place, puis la route.",
    story:
      "Rendez-vous au vendeur à Bruxelles. Photos, compteur, carrosserie, documents. Départ le jour même. Remise Bénodet le lendemain. Le client n’a pas bougé de Cornouaille.",
    image: "/images/etat-des-lieux-vehicule.jpg",
    alt: "État des lieux photo d’un véhicule",
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
    pack: "Gare",
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
    id: "location-brest",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "Location",
    from: "Brest",
    to: "Fouesnant",
    title: "Location Hertz, aéroport de Brest → Fouesnant.",
    lead: "Le vol atterrit. Personne pour aller chercher la voiture.",
    story:
      "Récupération à l’agence, état des lieux photo, plein si prévu au contrat. Remise au domicile à Fouesnant. L’inverse existe : on restitue la location à l’aéroport pendant que vous prenez l’avion.",
    image: "/images/jockey-aeroport-bretagne.jpg",
    alt: "Véhicule sur un parvis d’aéroport en Bretagne",
    mission: "jockey",
    featured: true,
  },
  {
    id: "location-nantes",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "Location",
    from: "Carnac",
    to: "Nantes",
    title: "Restitution location, Carnac → Nantes-Atlantique.",
    lead: "Fin de séjour. L’avion est à 16 h. La voiture, à rendre.",
    story:
      "Prise en charge au gîte le matin. Restitution à l’agence de l’aéroport, photos, ticket carburant. Vous êtes déjà dans l’aérogare. Pas de gardiennage. Un déplacement, un compte-rendu.",
    image: "/images/jockey-aeroport-bretagne.jpg",
    alt: "Restitution d’un véhicule de location à l’aéroport",
    mission: "jockey",
  },
  {
    id: "achat-deux-voitures",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "Achat accompagné",
    from: "Quimper",
    to: "Rennes",
    title: "Achat à Rennes. Deux voitures. Contrôle visuel.",
    lead: "Le client y va. On y va aussi. On inspecte. On ramène l’autre.",
    story:
      "Le client roule dans sa voiture actuelle. On le rejoint au vendeur à Rennes. Contrôle visuel : carrosserie, compteur, intérieur, documents, photos. S’il achète, il repart au volant de l’achat. On ramène l’ancienne. L’inverse est possible.",
    image: "/images/etat-des-lieux-vehicule.jpg",
    alt: "Contrôle visuel d’un véhicule avant achat",
  },
];

export function featuredCases() {
  return CASES.filter((c) => c.featured);
}

export function filterCases(kind: CaseFilter) {
  if (kind === "all") return CASES;
  return CASES.filter((c) => c.kind === kind);
}
