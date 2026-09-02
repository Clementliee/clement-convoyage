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
  beats?: readonly string[];
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
      "Ni le vendeur ni l’acheteur ne faisait la route. Brief la veille. Prise en charge 8 h 30 : photos, compteur, carrosserie, documents. Autoroute. Remise Rennes-Cesson avant midi. Clés en main. Mise en main des aides, vingt minutes. Compte rendu le jour même.",
    beats: [
      "Brief la veille, créneau samedi 8 h 30",
      "État des lieux photo à Pluguffan",
      "Remise à Rennes-Cesson avant midi",
      "Mise en main offerte, compte rendu le soir",
    ],
    image: "/images/mission-308.jpg",
    alt: "Peugeot 308 grise sur une route de Cornouaille",
    featured: true,
  },
  {
    id: "brest-rennes",
    kind: "part",
    tag: "Bretagne",
    pack: "Pack Route",
    from: "Brest",
    to: "Rennes",
    title: "Golf 8, Brest → Rennes.",
    lead: "Le départ n’est pas Quimper. Approche depuis la base, puis le trajet.",
    story:
      "Le véhicule est à Guipavas. La base est à Quimper. L’approche est dans le devis, le retour chauffeur aussi. Photos, documents, départ. Arrivée Rennes en fin de matinée. Mise en main. Un seul interlocuteur. Un aller.",
    beats: [
      "Approche Quimper → Brest, chiffrée",
      "Prise en charge Guipavas, photos",
      "Remise Rennes, mise en main",
      "Retour chauffeur, aller simple",
    ],
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8 grise sur une 2×2 voies en Bretagne",
  },
  {
    id: "vannes-nantes",
    kind: "part",
    tag: "Grand Ouest",
    pack: "Pack Sérénité",
    from: "Vannes",
    to: "Nantes",
    title: "3008, Vannes → Nantes.",
    lead: "Achat entre particuliers. Pack Sérénité : plein et nettoyage avant la remise.",
    story:
      "Le client récupérait trop tard pour rentrer. Prise en charge à Vannes. Lavage intérieur et extérieur. Plein. Photos. Remise Nantes-Saint-Herblain. Mise en main des aides. Pack Sérénité. Tous les jours, si le créneau tient.",
    beats: [
      "Prise en charge Vannes, photos",
      "Nettoyage et plein avant la route",
      "Remise Saint-Herblain, mise en main",
      "Compte rendu le soir",
    ],
    image: "/images/mission-3008.jpg",
    alt: "Peugeot 3008 blanc sur une route du Morbihan",
  },
  {
    id: "quimper-paris",
    kind: "part",
    tag: "France",
    pack: "Pack Sérénité",
    from: "Quimper",
    to: "Paris",
    title: "Tesla Model 3, Quimper → Paris.",
    lead: "Électrique. Plan de recharge. Remise à Boulogne le soir.",
    story:
      "Prise en charge Quimper le matin. Câble et badge vérifiés. Recharges sur aires, photos à chaque étape. Remise Paris-Boulogne le soir. Mise en main de l’application et du câble. Les kWh au réel. Pas un particulier au volant.",
    beats: [
      "Plan de recharge avant le départ",
      "Aires, photos à chaque étape",
      "Remise Boulogne, mise en main de la charge",
      "kWh facturés au réel",
    ],
    image: "/images/mission-tesla.jpg",
    alt: "Tesla Model 3 blanche sur autoroute française",
  },
  {
    id: "brest-nice",
    kind: "part",
    tag: "France",
    pack: "Pack Sécurisé",
    from: "Brest",
    to: "Nice",
    title: "Audi A4 Avant, Brest → Nice.",
    lead: "1 400 km. Pack Sécurisé. Traceur GPS cédé. Deux jours de route.",
    story:
      "Mutation vers le Sud. Prise en charge Brest. GPS 4G laissé à bord, douze mois. Nuit en cours de route. Remise Nice le lendemain, à la personne nommée. Mise en main. Compte rendu le soir de l’arrivée. Un chauffeur. Pas de sous-traitance.",
    beats: [
      "Brief, GPS 4G posé à Brest",
      "Deux jours, une nuit, un chauffeur",
      "Remise Nice, personne nommée",
      "Traceur cédé, douze mois inclus",
    ],
    image: "/images/mission-audi-a4.jpg",
    alt: "Audi A4 Avant blanche sur autoroute",
  },
  {
    id: "rennes-monaco",
    kind: "part",
    tag: "Prestige",
    pack: "Pack Sécurisé",
    from: "Rennes",
    to: "Monaco",
    title: "911, Rennes → Monaco.",
    lead: "Sportive. Scellés. GPS le temps de la mission. Remise à la personne nommée.",
    story:
      "Prise en charge Rennes. Clés et carte grise sous scellé. Mode Comfort. Autoroute. Pauses en stations éclairées. Arrivée Monaco. Remise à la personne nommée. Mise en main. Compte rendu factuel. Ce n’est pas de la sécurité privée. C’est un cadre.",
    beats: [
      "Scellés des clés et documents",
      "Conduite Comfort, autoroute",
      "GPS le temps de la mission, retiré à Monaco",
      "Remise à la personne nommée",
    ],
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911 grise sur une autoroute de montagne",
  },
  {
    id: "ds7-vauban",
    kind: "part",
    tag: "Sécurité",
    pack: "Pack Sécurisé",
    from: "Paris",
    to: "Quimper",
    title: "DS 7 Vauban, Paris → Quimper.",
    lead: "Véhicule blindé discret. Un DS, pas un 4×4 militaire.",
    story:
      "Prise en charge Paris. Vitres épaisses, caisse renforcée, allure civile. GPS le temps de la mission. Scellés. Remise à la personne nommée à Quimper. Photos. Compte rendu. Ce n’est pas de la sécurité privée. C’est un convoyage cadré.",
    beats: [
      "Brief, valeur déclarée, plafonds d’assurance",
      "Prise en charge Paris, scellés",
      "GPS le temps de la mission",
      "Remise Quimper, personne nommée",
    ],
    image: "/images/mission-ds7-vauban.jpg",
    alt: "DS 7 Crossback Vauban noir, blindé discret, sur autoroute",
    featured: true,
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
      "Le client ne faisait pas trois pays. Contrôle des documents à Varsovie avant de tourner la clé. État des lieux photo. GPS 4G. Un chauffeur. Remise Quimper. Mise en main. Formalités cadrées. Pack Sécurisé.",
    beats: [
      "Contrôle des papiers à Varsovie",
      "Photos, GPS, un chauffeur",
      "Trois pays, une remise à Quimper",
      "Mise en main, compte rendu",
    ],
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat grise sur autoroute européenne",
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
      "Rendez-vous au vendeur à Bruxelles. Photos, compteur, carrosserie, documents. Départ le jour même. Nuit en route si besoin. Remise Bénodet le lendemain. Le client n’a pas bougé de Cornouaille.",
    beats: [
      "Contrôle visuel chez le vendeur",
      "Documents belges vérifiés",
      "Route, un chauffeur",
      "Remise Bénodet, mise en main",
    ],
    image: "/images/mission-golf-gti.jpg",
    alt: "Volkswagen Golf GTI dans une rue de Bruxelles",
  },
  {
    id: "livraison-vn",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Livraison client",
    from: "Quimper",
    to: "Concarneau",
    title: "BMW X3 neuf, concession → Concarneau.",
    lead: "Le commercial reste en showroom. Nous livrons le client.",
    story:
      "VN préparé. Nettoyage standard constructeur. Coffret terroir dans le coffre. Remise à domicile. Vingt-cinq minutes de mise en main. Compte rendu au service qui commande. Pack Livraison client. Facture à quinze jours.",
    beats: [
      "Préparation en concession",
      "Coffret terroir, nettoyage",
      "Remise domicile, mise en main 25 min",
      "Compte rendu au commercial",
    ],
    image: "/images/mission-bmw-x3.jpg",
    alt: "BMW X3 blanche neuve sur un parvis de concession",
  },
  {
    id: "navette-ct",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Atelier",
    from: "Lorient",
    to: "Pontivy",
    title: "Golf au CT, garage Lorient.",
    lead: "Les mécanos restent au banc. Nous faisons les allers-retours.",
    story:
      "Trois VL. Créneau du matin au centre de Pontivy. Approche depuis Quimper. Photos au départ et au retour. Compte rendu le soir. Pack Atelier. Le garage n’immobilise plus un salarié pour la route.",
    beats: [
      "Approche Quimper → Lorient",
      "Trois VL, un créneau CT",
      "Photos aller et retour",
      "Compte rendu le soir, facture 15 jours",
    ],
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier de garage",
  },
  {
    id: "echange-rennes",
    kind: "part",
    tag: "Aller et retour",
    pack: "Pack Route",
    from: "Quimper",
    to: "Rennes",
    title: "Échange, 308 et Golf, Quimper ⇄ Rennes.",
    lead: "Un véhicule à livrer. Un autre à ramener. Pas de rentrée à vide.",
    story:
      "La 308 part à Rennes. Une Golf revient. Deux prises en charge, deux remises, un chauffeur. Photos sur chaque véhicule. Mise en main à chaque bout. Le second trajet est dans le devis.",
    beats: [
      "308 prise à Quimper, remise Rennes",
      "Golf prise à Rennes, remise Quimper",
      "Photos sur les deux véhicules",
      "Deux mises en main, un compte rendu",
    ],
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8, second véhicule d’un échange",
  },
  {
    id: "mutation-lyon",
    kind: "part",
    tag: "France",
    pack: "Pack Sérénité",
    from: "Quimper",
    to: "Lyon",
    title: "3008, Quimper → Lyon.",
    lead: "Mutation. Le foyer part. Le véhicule suit, propre et plein.",
    story:
      "Prise en charge Quimper. Nettoyage. Plein. Photos. Route. Remise Lyon le soir, ou le lendemain selon le créneau. Mise en main. Pack Sérénité. Le client n’a pas enchaîné huit heures de volant après le déménagement.",
    beats: [
      "Prise en charge Quimper, photos",
      "Nettoyage et plein",
      "Remise Lyon, mise en main",
      "Compte rendu le soir de l’arrivée",
    ],
    image: "/images/mission-3008.jpg",
    alt: "Peugeot 3008 en convoyage vers Lyon",
  },
  {
    id: "signature-paris",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Signature réseau",
    from: "Quimper",
    to: "Paris",
    title: "911, concession → client Paris.",
    lead: "Livraison prestige. Coffret champagne. Protocole de remise.",
    story:
      "Sportive préparée en concession. Coffret Prestige. GPS le temps de la mission. Scellés. Remise à la personne nommée, Paris. Mise en main. Compte rendu au réseau. Pack Signature. Facture à quinze jours.",
    beats: [
      "Préparation concession, scellés",
      "Coffret Prestige, GPS mission",
      "Remise Paris, personne nommée",
      "Compte rendu au service livraisons",
    ],
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911, livraison Signature réseau",
  },
  {
    id: "import-mandataire",
    kind: "pro",
    tag: "Professionnel",
    pack: "Pack Atelier",
    from: "Stuttgart",
    to: "Quimper",
    title: "Passat, mandataire Stuttgart → Quimper.",
    lead: "Le mandataire ne détache pas un salarié. Nous allons chercher.",
    story:
      "Rendez-vous Allemagne. Documents vérifiés. Photos. Un chauffeur. Remise au stock Quimper, ou chez le client final. Compte rendu. Pack Atelier. Facture à quinze jours.",
    beats: [
      "Brief mandataire, créneau Allemagne",
      "Contrôle documents sur place",
      "Route, un chauffeur",
      "Remise stock ou client, compte rendu",
    ],
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat, import mandataire",
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
      "Dépose du Tiguan sur le parvis, photos, clés. Dimanche soir : rapatriement à Fouesnant, attente de la personne à la descente du train. Pas de gardiennage. Pas de transport de passagers.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare SNCF",
    mission: "jockey",
  },
  {
    id: "location-brest",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "Location",
    from: "Brest",
    to: "Fouesnant",
    title: "Location, aéroport de Brest → Fouesnant.",
    lead: "Le vol atterrit. Personne pour aller chercher la Golf.",
    story:
      "Récupération à l’agence, état des lieux photo, plein si prévu au contrat. Remise au domicile à Fouesnant. L’inverse existe : on restitue la location à l’aéroport pendant que vous prenez l’avion.",
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf de location sur un aéroport breton",
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
    lead: "Fin de séjour. L’avion est à 16 h. Le T-Roc, à rendre.",
    story:
      "Prise en charge au gîte le matin. Restitution à l’agence de l’aéroport, photos, ticket carburant. Vous êtes déjà dans l’aérogare. Pas de gardiennage. Un déplacement, un compte-rendu.",
    image: "/images/mission-troc-aeroport.jpg",
    alt: "Volkswagen T-Roc blanc en restitution à l’aéroport",
    mission: "jockey",
  },
  {
    id: "achat-deux-voitures",
    kind: "conciergerie",
    tag: "Conciergerie",
    pack: "Achat accompagné",
    from: "Quimper",
    to: "Rennes",
    title: "Achat à Rennes. Série 3. Contrôle visuel.",
    lead: "Le client y va. On y va aussi. On inspecte. On ramène l’autre.",
    story:
      "Le client roule dans sa voiture actuelle. On le rejoint au vendeur à Rennes. Contrôle visuel de la BMW : carrosserie, compteur, intérieur, documents, photos. S’il achète, il repart au volant de l’achat. On ramène l’ancienne. L’inverse est possible.",
    image: "/images/mission-bmw-controle.jpg",
    alt: "Contrôle visuel d’une BMW Série 3 avant achat",
    mission: "jockey",
  },
  {
    id: "entretien-vannes",
    kind: "conciergerie",
    tag: "Atelier",
    pack: "Entretien",
    from: "Vannes",
    to: "Vannes",
    title: "Entretien, 3008, Vannes.",
    lead: "Nous prenons le rendez-vous. Nous déposons. Nous reprenons.",
    story:
      "Appel à la concession. Créneau bloqué. Prise en charge au domicile, photos, dépôt à l’atelier. Reprise en fin de journée, compte rendu, facture de l’atelier transmise. Le client n’a pas immobilisé sa journée.",
    image: "/images/mission-golf-atelier.jpg",
    alt: "Véhicule déposé en atelier pour entretien",
    mission: "jockey",
  },
  {
    id: "carrosserie-brest",
    kind: "conciergerie",
    tag: "Atelier",
    pack: "Carrosserie",
    from: "Brest",
    to: "Brest",
    title: "Carrosserie, Golf, Brest.",
    lead: "Deux passages. Dépôt, puis reprise.",
    story:
      "Prise de rendez-vous chez le carrossier. Dépôt le lundi, photos. Reprise le jeudi, contrôle visuel, remise au domicile. Approche depuis Quimper dans le devis. Pas de gardiennage.",
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8, mission carrosserie à Brest",
    mission: "jockey",
  },
  {
    id: "ct-quimper",
    kind: "conciergerie",
    tag: "Atelier",
    pack: "Contrôle technique",
    from: "Fouesnant",
    to: "Quimper",
    title: "Contrôle technique, Tiguan, Fouesnant.",
    lead: "Le centre ouvre à 8 h. Le client, non.",
    story:
      "Prise en charge à Fouesnant. Passage au CT de Quimper. Photos, procès-verbal transmis. Retour au domicile avant midi. Hors facture du centre.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan conduit au contrôle technique",
    mission: "jockey",
  },
  {
    id: "roulage-911",
    kind: "conciergerie",
    tag: "Prestige",
    pack: "Roulage",
    from: "Bénodet",
    to: "Bénodet",
    title: "Roulage mensuel, 911, Bénodet.",
    lead: "Le véhicule reste trop longtemps à l’arrêt. Nous le faisons tourner.",
    story:
      "Prise en charge au garage. Mise en température. Quarante kilomètres. Photos. Compte rendu le jour même. Le mois suivant, même créneau.",
    image: "/images/mission-roulage.jpg",
    alt: "Porsche 911 en roulage sur une route bretonne",
    mission: "jockey",
  },
  {
    id: "flotte-quimper",
    kind: "conciergerie",
    tag: "Flotte",
    pack: "Entreprise",
    from: "Quimper",
    to: "Quimper",
    title: "Flotte, trois Audi, siège à Quimper.",
    lead: "Entretien, carrosserie, planning. Un interlocuteur.",
    story:
      "Nous prenons les rendez-vous. Nous déposons. Nous reprenons. Compte rendu le soir. Le dirigeant n’immobilise plus un salarié pour la route.",
    image: "/images/mission-flotte.jpg",
    alt: "Flotte d’Audi A4 devant un siège d’entreprise",
    mission: "jockey",
  },
];

export function featuredCases() {
  return CASES.filter((c) => c.featured);
}

export function filterCases(kind: CaseFilter) {
  if (kind === "all") return CASES;
  return CASES.filter((c) => c.kind === kind);
}
