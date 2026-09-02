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
    title: "Mise en circulation périodique",
    text: "Pour un véhicule trop longtemps à l’arrêt. Ordre écrit, kilométrage limité, itinéraire défini, photographies, compte rendu.",
    image: "/images/mission-roulage.jpg",
    alt: "Porsche 911 en roulage sur une route bretonne",
  },
  {
    id: "achat",
    kicker: "Achat",
    title: "Accompagnement d’achat",
    text: "Nous nous rendons chez le vendeur. Photographies, conformité à l’annonce, carrosserie, compteur, habitacle, documents. Un rapport vous est adressé : état du véhicule, observations, tarif. Vous décidez ensuite. Si vous achetez, vous pouvez repartir au volant ; nous ramenons l’autre véhicule.",
    image: "/images/mission-achat-inspection.jpg",
    alt: "Contrôle visuel d’une Audi avant achat, photographies de carrosserie",
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

export const CONCIERGE_GROUPS = [
  {
    id: "deplacements",
    title: "Déplacements",
    text: "Gare, aéroport, location. Vous prenez le train. Nous déplaçons le véhicule.",
    ids: ["mouvement", "location"],
  },
  {
    id: "atelier",
    title: "Atelier et flotte",
    text: "Entretien, carrosserie, contrôle technique, planning d’entreprise.",
    ids: ["atelier", "flotte"],
  },
  {
    id: "prestige",
    title: "Prestige et achat",
    text: "Mise en circulation périodique. Inspection chez le vendeur avant d’acheter.",
    ids: ["roulage", "achat"],
  },
] as const;

export const CONCIERGE_EXTRAS = [
  { title: "Nettoyage", text: "Intérieur et extérieur. Finition prestige sur demande." },
  { title: "Plein de carburant", text: "Passage en station. Ticket joint au compte rendu." },
  { title: "Attente sur place", text: "Remise à une personne présente. Nous demeurons jusqu’à l’échange des clés." },
  { title: "Prise de rendez-vous", text: "Nous contactons l’atelier et bloquons le créneau." },
  { title: "Coffret champagne et chocolats", text: "Dans le véhicule, si vous allez chercher quelqu’un à la gare ou à l’aéroport." },
  { title: "Coffret Terroir Breton", text: "Galettes, caramels, cidre. Remis avec les clés." },
] as const;