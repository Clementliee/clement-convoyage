export const CONCIERGE_STEPS = [
  {
    n: "01",
    title: "Le brief",
    text: "Créneau, adresse, documents. Double des clés si besoin. Vous validez. Nous confirmons.",
  },
  {
    n: "02",
    title: "La prise en charge",
    text: "Photos. Compteur. Carrosserie. Nous partons avec le véhicule. Vous n’êtes pas au volant.",
  },
  {
    n: "03",
    title: "La mission",
    text: "Gare, aéroport, atelier, location, roulage, achat. Nous tenons le rendez-vous. Nous restons jusqu’à la remise.",
  },
  {
    n: "04",
    title: "La restitution",
    text: "Le véhicule revient où vous l’avez décidé. Photos. Clés. Compte rendu le jour même.",
  },
  {
    n: "05",
    title: "Le suivi",
    text: "Facture de l’atelier transmise. Plein noté. Prochain créneau proposé si vous le souhaitez.",
  },
] as const;

export const CONCIERGE_CATALOGUE = [
  {
    id: "mouvement",
    kicker: "Mouvement",
    title: "Gare et aéroport",
    text: "Dépose. Rapatriement. Aller et retour. Quimper, Lorient, Brest, Vannes, Rennes, Nantes.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
  },
  {
    id: "location",
    kicker: "Location",
    title: "Récupération, restitution",
    text: "Agence ou aéroport. Nous prenons le véhicule. Nous le ramenons. Ou l’inverse, pendant que vous prenez l’avion.",
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf de location sur un aéroport",
  },
  {
    id: "atelier",
    kicker: "Atelier",
    title: "Entretien, carrosserie, CT",
    text: "Nous prenons le rendez-vous. Nous déposons le véhicule. Nous le reprenons. La facture de l’atelier reste la vôtre.",
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier",
  },
  {
    id: "roulage",
    kicker: "Prestige",
    title: "Roulage",
    text: "Mise en température. Vidange courte. Photos. Pour les véhicules qui restent trop longtemps à l’arrêt.",
    image: "/images/mission-roulage.jpg",
    alt: "Porsche 911 en roulage sur une route bretonne",
  },
  {
    id: "achat",
    kicker: "Achat",
    title: "Accompagnement",
    text: "Deux véhicules. Contrôle visuel : carrosserie, compteur, intérieur, documents. Vous repartez au volant. Nous ramenons l’autre.",
    image: "/images/mission-bmw-controle.jpg",
    alt: "Contrôle visuel d’une BMW Série 3",
  },
  {
    id: "flotte",
    kicker: "Entreprise",
    title: "Flotte",
    text: "Planning. Prise de rendez-vous. Entretien. Carrosserie. Nettoyage. Compte rendu. Un interlocuteur.",
    image: "/images/mission-flotte.jpg",
    alt: "Flotte d’Audi A4 devant un siège d’entreprise",
  },
] as const;

export const CONCIERGE_EXTRAS = [
  { title: "Nettoyage", text: "Intérieur et extérieur. Prestige sur demande." },
  { title: "Plein", text: "Passage à la pompe. Ticket joint au compte rendu." },
  { title: "Attente", text: "Remise à une personne sur place. Nous restons." },
  { title: "Prise de rendez-vous", text: "Nous appelons l’atelier. Nous bloquons le créneau." },
] as const;