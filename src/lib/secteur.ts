import type { SimulatorSearch } from "@/components/QuoteCta";

export type SecteurZone = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: readonly string[];
  forWhom: string;
  items: readonly string[];
  cities: readonly { to: string; label: string }[];
  image: string;
  alt: string;
  cta: string;
  search: SimulatorSearch;
};

export type SecteurTrajet = {
  from: string;
  to: string;
  d: string;
  cta: string;
  search: SimulatorSearch;
};

export type SecteurPoint = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: readonly string[];
  forWhom: string;
  items: readonly string[];
  image: string;
  alt: string;
  cta: string;
  search: SimulatorSearch;
};

export const SECTEUR_INTRO = {
  kicker: "Secteur",
  title: "Bretagne, Rennes, Nantes",
  text:
    "Quimper est la base. Le quotidien se joue en Cornouaille, dans le Finistère, dans le Morbihan, jusqu’à Rennes et Nantes. Le convoyage continue ensuite en France et en Europe. La conciergerie, elle, s’arrête à cette zone. Chaque pavé ci-dessous ouvre le devis, déjà orienté.",
} as const;

export const SECTEUR_ZONES: readonly SecteurZone[] = [
  {
    id: "cornouaille",
    kicker: "Base",
    title: "Quimper et Cornouaille",
    lead: "La base n’est pas une antenne. Les missions locales partent souvent le jour même, si le créneau tient. Domicile, concession, atelier, parking d’immeuble.",
    paragraphs: [
      "Pluguffan, Ergué-Gabéric, Penhars, Kerfeunteun, Creac’h Gwen. Puis Bénodet, Fouesnant, Beg-Meil, Concarneau, Pont-l’Abbé, Loctudy, Douarnenez, Audierne, Pont-Aven. Le véhicule est récupéré là où il se trouve. Il n’a pas à rejoindre un parking relais.",
      "Les flux du quotidien : contrôle technique, carrosserie, courtoisie, livraison client, achat Leboncoin entre Quimper et Concarneau. Les concessions de Creac’h Gwen et les garages de Penhars n’immobilisent pas un vendeur pour un aller-retour. Un chauffeur, un créneau, un compte rendu le jour même.",
      "L’été, le littoral se réserve. Bénodet, Fouesnant, la côte. Un interlocuteur à Quimper évite un départ à vide depuis Rennes. Le cadre reste le même qu’un convoyage national : photographies, remise en main propre, mise en main offerte.",
    ],
    forWhom:
      "Particuliers de Cornouaille, concessions et garages de l’agglomération, résidences du littoral, professions libérales qui ne peuvent pas poser une demi-journée.",
    items: [
      "Jour même possible, sous réserve de disponibilité",
      "Prise en charge à domicile, concession, atelier ou parking",
      "Aéroport Quimper-Bretagne à Pluguffan",
      "Littoral : Bénodet, Fouesnant, Concarneau, cap Sizun",
      "Compte rendu le jour même",
    ],
    cities: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-benodet", label: "Bénodet" },
      { to: "/convoyage-concarneau", label: "Concarneau" },
      { to: "/convoyage-pont-labbe", label: "Pont-l’Abbé" },
      { to: "/convoyage-douarnenez", label: "Douarnenez" },
    ],
    image: "/images/mission-308.jpg",
    alt: "Peugeot 308 sur une route de Cornouaille",
    cta: "Chiffrer un trajet Cornouaille",
    search: { mission: "convoyage", from: "Quimper" },
  },
  {
    id: "finistere",
    kicker: "Finistère",
    title: "Brest, Morlaix, Quimperlé",
    lead: "Le département entier, depuis la base Quimper. N165 vers Brest et Lorient. Nord Finistère, Monts d’Arrée, porte du Morbihan.",
    paragraphs: [
      "Brest et Guipavas concentrent concessions, loueurs, aéroport. Landerneau, Landivisiau, Morlaix tiennent le nord. Quimperlé ouvre vers Lorient. Carhaix, le centre Bretagne. Roscoff, le ferry. Chaque prise en charge se fait à l’adresse du véhicule, pas dans un parking de plateforme.",
      "Le trajet Quimper – Brest est un classique : VO, SAV, livraison client, achat entre particuliers. L’approche depuis Quimper est intégrée au devis. Si le véhicule est déjà à Guipavas, nous n’inventons pas un départ de Quimper. L’état des lieux se fait sur place.",
      "Aéroport Brest-Bretagne, gare de Brest, gare de Morlaix, ferry de Roscoff : la conciergerie prend le relais pour une dépose ou un rapatriement. Au-delà du département, c’est du convoyage. Les deux se chiffrent distinctement, avec le même interlocuteur.",
    ],
    forWhom:
      "Concessions et garages de Brest, particuliers du nord Finistère, flottes d’artisans, correspondances ferry et aéroport.",
    items: [
      "Axe N165 Quimper – Brest, chiffré au réel",
      "Aéroport Brest-Bretagne, gare de Brest, gare de Morlaix",
      "Ferry Roscoff, documents cadrés avant le départ",
      "Quimperlé, relais vers le Morbihan",
      "Un chauffeur, pas un relais anonyme",
    ],
    cities: [
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-morlaix", label: "Morlaix" },
      { to: "/convoyage-quimperle", label: "Quimperlé" },
      { to: "/convoyage-landerneau", label: "Landerneau" },
      { to: "/convoyage-roscoff", label: "Roscoff" },
    ],
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8 sur une 2×2 voies en Finistère",
    cta: "Chiffrer un trajet Finistère",
    search: { mission: "convoyage", from: "Quimper", to: "Brest" },
  },
  {
    id: "morbihan",
    kicker: "Morbihan",
    title: "Lorient, Vannes, Auray",
    lead: "Est du Finistère, golfe, presqu’île. Volume de VO et d’utilitaires. Livraisons clients du golfe, stocks inter-sites, saisonnalité à Quiberon.",
    paragraphs: [
      "Lorient, Lanester, Guidel : l’axe N165, les ateliers, les utilitaires. Vannes et Auray relaient vers Rennes et Nantes. Quiberon se réserve l’été. Le véhicule est pris en concession, chez un marchand VO, à domicile, ou sur un parking d’entreprise.",
      "Les rotations inter-sites entre Quimper, Lorient et Vannes évitent d’immobiliser un commercial. Facture à quinze jours. Compte rendu par mission. Un coffret terroir peut accompagner une livraison client, selon la formule.",
      "Gare de Lorient, gare de Vannes, aéroport de Lorient-Bretagne Sud : dépose et rapatriement en conciergerie. Pour un acheminement hors Morbihan, le convoyage prend le relais. Même chauffeur, autre cadre, autre devis.",
    ],
    forWhom:
      "Concessions et marchands VO de Lorient et Vannes, particuliers du golfe, résidences de Quiberon, ateliers de Lanester et Guidel.",
    items: [
      "N165 Quimper – Lorient – Vannes",
      "Livraisons clients du golfe, stocks inter-sites",
      "Gare de Lorient, gare de Vannes, aéroport Lorient",
      "Saisonnalité Quiberon, créneaux d’été à réserver",
      "Facture à quinze jours pour les sites",
    ],
    cities: [
      { to: "/convoyage-lorient", label: "Lorient" },
      { to: "/convoyage-vannes", label: "Vannes" },
      { to: "/convoyage-auray", label: "Auray" },
      { to: "/convoyage-quiberon", label: "Quiberon" },
    ],
    image: "/images/mission-3008.jpg",
    alt: "Peugeot 3008 sur une route du Morbihan",
    cta: "Chiffrer un trajet Morbihan",
    search: { mission: "convoyage", from: "Quimper", to: "Lorient" },
  },
  {
    id: "rennes",
    kicker: "Ille-et-Vilaine",
    title: "Rennes, Saint-Malo, Saint-Brieuc",
    lead: "La capitale régionale polarise mandataires, stocks constructeurs, livraisons entreprises. Nous ramenons le véhicule en Cornouaille. Le client n’a pas à prendre le TGV.",
    paragraphs: [
      "Rennes-Cesson, Saint-Jacques, le nord de l’agglomération. Un particulier achète à Rennes, habite Quimper : nous faisons la route. Un mandataire livre en Bretagne : le commercial reste en établissement. Côte-d’Armor comprise : Saint-Brieuc, Plérin, Lannion, Saint-Malo, Dinard.",
      "Le TGV Quimper – Rennes est fréquent. La conciergerie dépose le véhicule à la gare, le rapatrie à l’arrivée. Le convoyage, lui, achemine le véhicule d’un domicile rennais vers un domicile cornouaillais, ou l’inverse. Deux cadres, un interlocuteur.",
      "Aéroport Rennes-Saint-Jacques, gare de Rennes, ferry de Saint-Malo. Correspondances Royaume-Uni cadrées avant le départ. Pour un import via Lille ou Bruxelles, c’est un convoyage Europe.",
    ],
    forWhom:
      "Mandataires et stocks constructeurs de Rennes, particuliers qui achètent en Ille-et-Vilaine, entreprises de l’agglomération, correspondances Saint-Malo.",
    items: [
      "Rennes-Cesson, Saint-Jacques, agglomération",
      "Saint-Brieuc, Lannion, Saint-Malo, Dinard",
      "Gare de Rennes, aéroport Saint-Jacques",
      "Ferry Saint-Malo, correspondances Royaume-Uni",
      "Retour en Cornouaille sans TGV pour le client",
    ],
    cities: [
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
      { to: "/convoyage-saint-malo", label: "Saint-Malo" },
      { to: "/convoyage-lannion", label: "Lannion" },
    ],
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
    cta: "Chiffrer un trajet Rennes",
    search: { mission: "convoyage", from: "Quimper", to: "Rennes" },
  },
  {
    id: "nantes",
    kicker: "Grand Ouest",
    title: "Nantes et Loire-Atlantique",
    lead: "Porte de l’ouest. Nantes, Saint-Herblain, Montoir. La conciergerie s’étend jusqu’ici. Au-delà, c’est du convoyage France.",
    paragraphs: [
      "Nantes ouvre la France. Transferts de flotte, livraisons clients, achats entre particuliers Vannes – Nantes, Quimper – Nantes. Saint-Herblain, l’aéroport Nantes-Atlantique, la gare de Nantes. Le protocole reste celui de Quimper : photographies, un chauffeur, une remise nominative.",
      "Les sites professionnels facturent à quinze jours. Un interlocuteur, pas un standard. Si le client n’est pas là, nous le disons, nous ne laissons pas les clés dans une boîte. Angers, Le Mans, La Rochelle : le convoyage continue. Ce n’est plus de la conciergerie.",
      "Aéroport Nantes-Atlantique, locations one-way, correspondances. Utile lorsqu’un vol n’attend pas l’ouverture de l’agence. Le constat compteur, carburant, carrosserie est photographié. Le compte rendu part le jour même.",
    ],
    forWhom:
      "Particuliers du Grand Ouest, concessions nantaises, loueurs, flottes qui tournent entre Bretagne et Loire-Atlantique.",
    items: [
      "Nantes, Saint-Herblain, Montoir",
      "Gare de Nantes, aéroport Nantes-Atlantique",
      "Conciergerie jusqu’à Nantes, convoyage au-delà",
      "Facture à quinze jours pour les sites",
      "Relais vers Angers, Le Mans, La Rochelle",
    ],
    cities: [
      { to: "/convoyage-nantes", label: "Nantes" },
      { to: "/convoyage-vannes", label: "Vannes" },
      { to: "/convoyage-angers", label: "Angers" },
      { to: "/convoyage-la-rochelle", label: "La Rochelle" },
    ],
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf sur un aéroport de l’ouest",
    cta: "Chiffrer un trajet Nantes",
    search: { mission: "convoyage", from: "Quimper", to: "Nantes" },
  },
] as const;

export const SECTEUR_TRAJETS: readonly SecteurTrajet[] = [
  {
    from: "Quimper",
    to: "Brest",
    d: "N165. VO, SAV, achat entre particuliers. Jour même possible. Approche intégrée si le véhicule n’est pas à Quimper.",
    cta: "Chiffrer Quimper – Brest",
    search: { mission: "convoyage", from: "Quimper", to: "Brest" },
  },
  {
    from: "Quimper",
    to: "Lorient",
    d: "Est du Finistère, utilitaires fréquents. Concessions, ateliers, marchands VO. N165.",
    cta: "Chiffrer Quimper – Lorient",
    search: { mission: "convoyage", from: "Quimper", to: "Lorient" },
  },
  {
    from: "Quimper",
    to: "Rennes",
    d: "Capitale régionale. Mandataires, Leboncoin, livraisons entreprises. Le client n’a pas à prendre le TGV.",
    cta: "Chiffrer Quimper – Rennes",
    search: { mission: "convoyage", from: "Quimper", to: "Rennes" },
  },
  {
    from: "Quimper",
    to: "Nantes",
    d: "Grand Ouest. Longue distance régionale, même protocole. Conciergerie possible à l’arrivée.",
    cta: "Chiffrer Quimper – Nantes",
    search: { mission: "convoyage", from: "Quimper", to: "Nantes" },
  },
  {
    from: "Brest",
    to: "Rennes",
    d: "Guipavas, Cesson. L’approche depuis Quimper est chiffrée. Un seul chauffeur, aller simple.",
    cta: "Chiffrer Brest – Rennes",
    search: { mission: "convoyage", from: "Brest", to: "Rennes" },
  },
  {
    from: "Vannes",
    to: "Nantes",
    d: "Golfe vers Loire-Atlantique. Achat entre particuliers, stocks inter-sites, Saint-Herblain.",
    cta: "Chiffrer Vannes – Nantes",
    search: { mission: "convoyage", from: "Vannes", to: "Nantes" },
  },
  {
    from: "Quimper",
    to: "Paris",
    d: "Longue distance. J+1 à J+2. Électrique : plan de recharge établi avant le départ.",
    cta: "Chiffrer Quimper – Paris",
    search: { mission: "convoyage", from: "Quimper", to: "Paris" },
  },
  {
    from: "Lorient",
    to: "Vannes",
    d: "Morbihan. Navette d’atelier, livraison client, rotation de stock. Facture à quinze jours.",
    cta: "Chiffrer Lorient – Vannes",
    search: { mission: "convoyage", from: "Lorient", to: "Vannes" },
  },
] as const;

export const SECTEUR_POINTS: readonly SecteurPoint[] = [
  {
    id: "gares",
    kicker: "Gares",
    title: "Gares de Bretagne et de Nantes",
    lead: "Vous prenez le TGV. Nous déplaçons uniquement le véhicule. Dépose, rapatriement, ou les deux. Pas de transport de passagers.",
    paragraphs: [
      "Gare de Quimper, gare de Lorient, gare de Brest, gare de Vannes, gare de Rennes, gare de Nantes. Vous descendez au dépose-minute, ou vous retrouvez le véhicule à l’arrivée. Un double des clés peut rester chez nous pour le prochain départ. Pas de gardiennage : le véhicule n’est pas stationné chez nous pendant votre absence.",
      "Le TGV Quimper – Paris est un classique. Dépose le matin, rapatriement le soir, ou plusieurs jours plus tard. Les deux courses se chiffrent ensemble. L’attente sur place — jusqu’à l’échange des clés — peut être ajoutée au devis. Si le train glisse, vous êtes prévenu avant.",
      "Un coffret champagne et chocolats, ou terroir breton, peut attendre dans l’habitacle si vous allez chercher quelqu’un. Remis avec les clés. Composé à Quimper. Un coffret, pas les deux.",
    ],
    forWhom:
      "Particuliers qui prennent le TGV depuis Quimper, Lorient, Brest, Vannes ou Rennes. Professionnels qui enchaînent une gare et une réunion, sans laisser le véhicule au dépose-minute.",
    items: [
      "Quimper, Lorient, Brest, Vannes, Rennes, Nantes",
      "Dépose, rapatriement, ou aller et retour",
      "Double des clés conservé, sur consigne",
      "Attente sur place, ajoutée au devis",
      "Coffret à la remise, composé à Quimper",
    ],
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare bretonne",
    cta: "Réserver une dépose en gare",
    search: { mission: "jockey", service: "mouvement", from: "Quimper" },
  },
  {
    id: "aeroports",
    kicker: "Aéroports",
    title: "Aéroports de l’ouest",
    lead: "Pluguffan, Guipavas, Lorient, Saint-Jacques, Nantes-Atlantique. Dépose, rapatriement, récupération de location. Vous prenez l’avion. Nous déplaçons le véhicule.",
    paragraphs: [
      "Aéroport Quimper-Bretagne à Pluguffan, Brest-Bretagne à Guipavas, Lorient-Bretagne Sud, Rennes-Saint-Jacques, Nantes-Atlantique. Vous descendez au dépose-minute. Le véhicule rejoint le domicile, ou l’inverse à l’arrivée. Pas de parking longue durée chez nous. Pas de VTC.",
      "Locations one-way, correspondances, créneau d’agence qui ne recoupe pas le vôtre : nous retirons ou restituons le véhicule pendant que vous prenez votre vol. Compteur, carburant, carrosserie : l’état des lieux de l’agence est photographié, consigné. Le compte rendu part le jour même.",
      "Les vols du matin depuis Guipavas et les retours tardifs à Saint-Jacques se tiennent, sous réserve de disponibilité. Si le vol glisse, vous êtes prévenu. Nous ne laissons pas les clés dans une boîte.",
    ],
    forWhom:
      "Voyageurs au départ de Pluguffan, Guipavas, Lorient, Rennes ou Nantes. Entreprises en correspondance. Locations one-way dont l’horaire ne recoupe pas l’agence.",
    items: [
      "Quimper-Pluguffan, Brest-Guipavas, Lorient",
      "Rennes-Saint-Jacques, Nantes-Atlantique",
      "Dépose, rapatriement, récupération de location",
      "Constat compteur, carburant, carrosserie",
      "Compte rendu adressé le jour même",
    ],
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf sur un aéroport de Bretagne",
    cta: "Planifier une dépose aéroport",
    search: { mission: "jockey", service: "mouvement" },
  },
  {
    id: "ateliers-secteur",
    kicker: "Ateliers",
    title: "Ateliers, CT, carrosserie du secteur",
    lead: "Nous prenons le rendez-vous, déposons le véhicule et le reprenons. Finistère, Morbihan, Rennes, Nantes. La facture de l’atelier demeure la vôtre.",
    paragraphs: [
      "Contrôle technique, révision, pneumatiques, carrosserie, préparation. Quimper, Brest, Lorient, Vannes, Rennes, Nantes. Nous appelons l’atelier, nous bloquons le créneau, nous déposons, nous reprenons. Vos mécaniciens restent au banc. Vous n’avez pas à poser une demi-journée.",
      "Nettoyage et plein peuvent être ajoutés, pour que le véhicule revienne propre et avec le niveau convenu. Si le créneau de l’atelier glisse, vous êtes prévenu avant. Nous ne laissons pas un véhicule une nuit de plus sans vous le dire.",
      "Pour plusieurs véhicules, le planning se construit à la semaine. Professions libérales, TPE, petites flottes de Cornouaille et du Finistère. Un interlocuteur, un compte rendu par mouvement. Ce n’est pas un logiciel. C’est une exécution.",
    ],
    forWhom:
      "Particuliers du 29 et du 56, garages partenaires, professions libérales, TPE trop petites pour un fleet manager, trop occupées pour enchaîner les ateliers.",
    items: [
      "Prise de rendez-vous auprès de l’atelier",
      "Dépôt et reprise, Finistère, Morbihan, Rennes, Nantes",
      "Facture de l’atelier transmise, inchangée",
      "Nettoyage et plein, sur demande, au devis",
      "Planning flotte à la semaine, sur le secteur",
    ],
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier du Finistère",
    cta: "Confier un passage atelier",
    search: { mission: "jockey", service: "atelier" },
  },
] as const;

export const SECTEUR_POLES = [
  { label: "Quimper", to: "/convoyage-quimper", search: { mission: "convoyage" as const, from: "Quimper" } },
  { label: "Brest", to: "/convoyage-brest", search: { mission: "convoyage" as const, from: "Brest" } },
  { label: "Lorient", to: "/convoyage-lorient", search: { mission: "convoyage" as const, from: "Lorient" } },
  { label: "Vannes", to: "/convoyage-vannes", search: { mission: "convoyage" as const, from: "Vannes" } },
  { label: "Rennes", to: "/convoyage-rennes", search: { mission: "convoyage" as const, from: "Rennes" } },
  { label: "Nantes", to: "/convoyage-nantes", search: { mission: "convoyage" as const, from: "Nantes" } },
] as const;
