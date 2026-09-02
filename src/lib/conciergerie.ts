export const CONCIERGE_STEPS = [
  {
    n: "01",
    title: "Ordre de mission",
    text: "Créneau, adresse et documents. Un double des clés peut rester à notre disposition. Vous validez, nous confirmons.",
  },
  {
    n: "02",
    title: "Prise en charge",
    text: "Un état des lieux photographique est établi : compteur et carrosserie. Le véhicule part. Vous n’êtes pas au volant.",
  },
  {
    n: "03",
    title: "Exécution",
    text: "Gare, aéroport, atelier, location, roulage ou accompagnement d’achat. Le rendez-vous est tenu jusqu’à la remise.",
  },
  {
    n: "04",
    title: "Restitution",
    text: "Le véhicule est rendu à l’adresse convenue. Photographies, clés, compte rendu le jour même.",
  },
  {
    n: "05",
    title: "Suivi",
    text: "La facture de l’atelier vous est transmise. Le plein est consigné. Un prochain créneau peut être proposé.",
  },
] as const;

export const CONCIERGE_CATALOGUE = [
  {
    id: "mouvement",
    kicker: "Mouvement",
    title: "Gares et aéroports",
    text: "Dépose et rapatriement, aller simple ou aller-retour. Quimper, Lorient, Brest, Vannes, Rennes et Nantes.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
  },
  {
    id: "location",
    kicker: "Location",
    title: "Récupération et restitution",
    text: "Nous retirons le véhicule en agence ou à l’aéroport, ou le restituons pendant que vous prenez votre vol.",
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf de location sur un aéroport",
  },
  {
    id: "atelier",
    kicker: "Atelier",
    title: "Entretien, carrosserie, contrôle technique",
    text: "Nous prenons le rendez-vous, déposons le véhicule et le reprenons. La facture de l’atelier demeure la vôtre.",
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier",
  },
  {
    id: "roulage",
    kicker: "Prestige",
    title: "Roulage préventif",
    text: "Mise en température et kilométrage court pour un véhicule trop longtemps à l’arrêt. Photographies et compte rendu.",
    image: "/images/mission-roulage.jpg",
    alt: "Porsche 911 en roulage sur une route bretonne",
  },
  {
    id: "achat",
    kicker: "Achat",
    title: "Accompagnement d’achat",
    text: "Deux véhicules. Contrôle visuel de la carrosserie, du compteur, de l’habitacle et des documents. Vous repartez au volant de l’achat ; nous ramenons l’autre.",
    image: "/images/mission-bmw-controle.jpg",
    alt: "Contrôle visuel d’une BMW Série 3",
  },
  {
    id: "flotte",
    kicker: "Entreprise",
    title: "Gestion de flotte",
    text: "Planning, prise de rendez-vous, entretien, carrosserie, nettoyage et compte rendu. Un seul interlocuteur.",
    image: "/images/mission-flotte.jpg",
    alt: "Flotte d’Audi A4 devant un siège d’entreprise",
  },
] as const;

export const CONCIERGE_EXTRAS = [
  { title: "Nettoyage", text: "Intérieur et extérieur. Finition prestige sur demande." },
  { title: "Plein de carburant", text: "Passage en station. Ticket joint au compte rendu." },
  { title: "Attente sur place", text: "Remise à une personne présente. Nous demeurons jusqu’à l’échange des clés." },
  { title: "Prise de rendez-vous", text: "Nous contactons l’atelier et bloquons le créneau." },
] as const;