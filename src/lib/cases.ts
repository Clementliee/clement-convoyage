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

export const MISSION_CADRE = [
  {
    t: "Véhicule roulant",
    d: "Particulier ou utilitaire jusqu’à 3,5 t, permis B, en état de marche, assuré, documents à bord. C’est du convoyage. Un non-roulant, une épave ou un hors gabarit, c’est un plateau : nous n’en faisons pas.",
  },
  {
    t: "État des lieux",
    d: "Photographies au départ et à l’arrivée : compteur, carrosserie, habitacle, documents. Ce n’est pas une expertise agréée. C’est un constat, daté, joint au compte rendu.",
  },
  {
    t: "Achat à distance",
    d: "Leboncoin, garage, mandataire. Nous récupérons le véhicule une fois la vente conclue et le livrons à l’adresse convenue. Inspection avant achat : conciergerie, en Bretagne seulement.",
  },
  {
    t: "Concession, garage, flotte",
    d: "Livraison client, navette d’atelier, import, planning. Le commercial vend. Le mécanicien reste au banc. Facture à quinze jours. Un interlocuteur, un compte rendu par mission.",
  },
] as const;

export const CASES: MissionCase[] = [
  {
    id: "leboncoin-rennes",
    kind: "part",
    tag: "Bretagne",
    pack: "Formule Route",
    from: "Quimper",
    to: "Rennes",
    title: "Peugeot 308 d’occasion — Pluguffan vers Rennes",
    lead: "Achat entre particuliers. Le vendeur était à Pluguffan, l’acquéreur à Rennes. Ni l’un ni l’autre ne faisait la route.",
    story:
      "Brief la veille. Prise en charge samedi à 8 h 30 : état des lieux photographique, compteur, carrosserie, documents de bord. Trajet par l’N165. Remise à Rennes-Cesson avant midi, à l’acquéreur. Mise en main des aides à la conduite, vingt minutes. Compte rendu adressé le jour même.",
    beats: [
      "Brief la veille, créneau samedi 8 h 30",
      "État des lieux photographique à Pluguffan",
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
    pack: "Formule Route",
    from: "Brest",
    to: "Rennes",
    title: "Volkswagen Golf 8 — Guipavas vers Rennes",
    lead: "Le véhicule n’était pas à Quimper. L’approche depuis la base est intégrée au devis.",
    story:
      "La Golf se trouvait chez un vendeur à Guipavas. Nous sommes partis de Quimper, avons établi l’état des lieux sur place, puis conduit jusqu’à Rennes. Remise en fin de matinée, mise en main. Un seul chauffeur. Aller simple, retour du convoyeur compris.",
    beats: [
      "Approche Quimper – Brest, chiffrée au devis",
      "Prise en charge à Guipavas, photographies",
      "Remise à Rennes, mise en main",
      "Retour du chauffeur, aller simple",
    ],
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8 grise sur une 2×2 voies en Bretagne",
  },
  {
    id: "vannes-nantes",
    kind: "part",
    tag: "Grand Ouest",
    pack: "Formule Sérénité",
    from: "Vannes",
    to: "Nantes",
    title: "Peugeot 3008 — Vannes vers Nantes",
    lead: "Achat entre particuliers. L’acquéreur récupérait trop tard pour rentrer le soir même.",
    story:
      "Prise en charge à Vannes. Lavage intérieur et extérieur, plein de carburant, photographies. Remise à Nantes-Saint-Herblain. Mise en main des aides. Formule Sérénité. Compte rendu le soir.",
    beats: [
      "Prise en charge à Vannes, photographies",
      "Nettoyage et plein avant le départ",
      "Remise à Saint-Herblain, mise en main",
      "Compte rendu le soir",
    ],
    image: "/images/mission-3008.jpg",
    alt: "Peugeot 3008 blanc sur une route du Morbihan",
  },
  {
    id: "quimper-paris",
    kind: "part",
    tag: "France",
    pack: "Formule Sérénité",
    from: "Quimper",
    to: "Paris",
    title: "Tesla Model 3 — Quimper vers Paris",
    lead: "Véhicule électrique. Plan de recharge établi avant le départ. Remise à Boulogne-Billancourt le soir.",
    story:
      "Prise en charge à Quimper le matin. Câble et badge vérifiés. Recharges sur aires, photographies à chaque étape. Remise à Boulogne le soir. Mise en main de l’application et du câble. L’énergie est facturée au réel.",
    beats: [
      "Plan de recharge établi avant le départ",
      "Aires autoroutières, photographies à chaque étape",
      "Remise à Boulogne, mise en main de la charge",
      "Kilowattheures facturés au réel",
    ],
    image: "/images/mission-tesla.jpg",
    alt: "Tesla Model 3 blanche sur autoroute française",
  },
  {
    id: "brest-nice",
    kind: "part",
    tag: "France",
    pack: "Formule Sécurisé",
    from: "Brest",
    to: "Nice",
    title: "Audi A4 Avant — Brest vers Nice",
    lead: "Mutation professionnelle vers le Sud. Mille quatre cents kilomètres, deux jours de route, un chauffeur.",
    story:
      "Prise en charge à Brest. Traceur GPS 4G laissé à bord, douze mois. Nuit en cours de route. Remise à Nice le lendemain, à la personne désignée. Mise en main. Compte rendu le soir de l’arrivée. Pas de sous-traitance.",
    beats: [
      "Brief et pose du traceur GPS à Brest",
      "Deux jours, une nuit, un chauffeur",
      "Remise à Nice, personne désignée",
      "Traceur cédé, douze mois inclus",
    ],
    image: "/images/mission-audi-a4.jpg",
    alt: "Audi A4 Avant blanche sur autoroute",
  },
  {
    id: "rennes-monaco",
    kind: "part",
    tag: "Prestige",
    pack: "Formule Sécurisé",
    from: "Rennes",
    to: "Monaco",
    title: "Porsche 911 — Rennes vers Monaco",
    lead: "Sportive de collection, convoyée vers une résidence. Clés et documents sous scellé.",
    story:
      "Le propriétaire ne souhaitait pas confier la 911 à un particulier. Prise en charge à Rennes. Clés et carte grise sous scellé. Conduite en mode Comfort, autoroute privilégiée, pauses en stations éclairées. Suivi GPS le temps de la mission, retiré à l’arrivée. Remise à Monaco, à la personne désignée. Mise en main. Compte rendu factuel. Il ne s’agit pas d’une activité de sécurité privée.",
    beats: [
      "Scellés des clés et des documents",
      "Conduite Comfort, autoroute privilégiée",
      "Suivi GPS le temps de la mission, retiré à Monaco",
      "Remise à la personne désignée",
    ],
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911 grise sur une autoroute de montagne",
  },
  {
    id: "ds7-vauban",
    kind: "part",
    tag: "Sécurité",
    pack: "Formule Sécurisé",
    from: "Paris",
    to: "Bordeaux",
    title: "DS 7 Vauban — Paris vers Bordeaux",
    lead: "Véhicule à caisse renforcée, allure civile. Le donneur d’ordre voulait un chauffeur formé à la conduite de sécurité, même hors de notre secteur habituel.",
    story:
      "Le DS 7 Vauban n’est pas un 4×4 militaire : c’est une berline blindée d’apparence standard. Le client n’était pas en Bretagne. Il nous a sollicités pour le cadre de la mission : conduite de sécurité, scellés, suivi GPS le temps du trajet, remise exclusive à la personne désignée. Prise en charge en région parisienne. Autoroute. Pauses en stations éclairées. Remise à Bordeaux. Photographies et compte rendu le jour même. Il ne s’agit pas d’une activité de sécurité privée. C’est un convoyage cadré, sur un véhicule à protection balistique.",
    beats: [
      "Brief, valeur déclarée, plafonds d’assurance",
      "Prise en charge à Paris, clés et documents sous scellé",
      "Conduite de sécurité, suivi GPS le temps de la mission",
      "Remise à Bordeaux, personne désignée, compte rendu",
    ],
    image: "/images/mission-ds7-vauban.jpg",
    alt: "DS 7 Crossback Vauban noir, blindé discret, sur autoroute",
    featured: true,
  },
  {
    id: "varsovie-quimper",
    kind: "part",
    tag: "Europe",
    pack: "Formule Sécurisé",
    from: "Varsovie",
    to: "Quimper",
    title: "Volkswagen Passat — Varsovie vers Quimper",
    lead: "Import depuis la Pologne. Les documents sont vérifiés sur place avant le départ.",
    story:
      "L’acquéreur ne faisait pas trois pays. Rendez-vous à Varsovie. Contrôle des documents avant de tourner la clé. État des lieux photographique. Traceur GPS. Un chauffeur. Remise à Quimper. Mise en main. Formalités cadrées.",
    beats: [
      "Contrôle des documents à Varsovie",
      "Photographies, GPS, un chauffeur",
      "Trajet via l’Allemagne, remise à Quimper",
      "Mise en main, compte rendu",
    ],
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat grise sur autoroute européenne",
  },
  {
    id: "bruxelles-benodet",
    kind: "part",
    tag: "Europe",
    pack: "Formule Sécurisé",
    from: "Bruxelles",
    to: "Bénodet",
    title: "Volkswagen Golf GTI — Bruxelles vers Bénodet",
    lead: "Achat en Belgique. Contrôle visuel chez le vendeur, puis acheminement vers la Cornouaille.",
    story:
      "Rendez-vous au vendeur à Bruxelles. Photographies, compteur, carrosserie, documents belges. Départ le jour même. Remise à Bénodet le lendemain. Le client n’a pas quitté la Cornouaille.",
    beats: [
      "Contrôle visuel chez le vendeur à Bruxelles",
      "Documents belges vérifiés",
      "Un chauffeur, une nuit si le créneau l’impose",
      "Remise à Bénodet, mise en main",
    ],
    image: "/images/mission-golf-gti.jpg",
    alt: "Volkswagen Golf GTI dans une rue de Bruxelles",
  },
  {
    id: "livraison-vn",
    kind: "pro",
    tag: "Professionnel",
    pack: "Formule Livraison client",
    from: "Quimper",
    to: "Concarneau",
    title: "BMW X3 neuf — concession Quimper vers Concarneau",
    lead: "Le commercial reste en showroom. Nous livrons le client à domicile.",
    story:
      "Véhicule neuf préparé en concession. Nettoyage standard constructeur. Coffret terroir dans le coffre. Remise au domicile à Concarneau. Vingt-cinq minutes de mise en main. Compte rendu adressé au service donneur d’ordre. Facture à quinze jours.",
    beats: [
      "Préparation en concession",
      "Coffret terroir, nettoyage",
      "Remise à domicile, mise en main de vingt-cinq minutes",
      "Compte rendu au commercial",
    ],
    image: "/images/mission-bmw-x3.jpg",
    alt: "BMW X3 blanche neuve sur un parvis de concession",
  },
  {
    id: "navette-ct",
    kind: "pro",
    tag: "Professionnel",
    pack: "Formule Atelier",
    from: "Lorient",
    to: "Pontivy",
    title: "Navette contrôle technique — garage Lorient vers Pontivy",
    lead: "Les techniciens restent au banc. Nous assurons les allers-retours.",
    story:
      "Trois véhicules légers, un créneau du matin au centre de Pontivy. Approche depuis Quimper. Photographies au départ et au retour. Compte rendu le soir. Le garage n’immobilise plus un salarié pour la route. Facture à quinze jours.",
    beats: [
      "Approche Quimper – Lorient",
      "Trois véhicules, un créneau de contrôle technique",
      "Photographies à l’aller et au retour",
      "Compte rendu le soir, facture à quinze jours",
    ],
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier de garage",
  },
  {
    id: "echange-rennes",
    kind: "part",
    tag: "Aller et retour",
    pack: "Formule Route",
    from: "Quimper",
    to: "Rennes",
    title: "Échange de véhicules — Quimper et Rennes",
    lead: "Une Peugeot 308 à livrer, une Volkswagen Golf à ramener. Pas de retour à vide.",
    story:
      "La 308 part de Quimper vers Rennes. Une Golf est reprise sur place et ramenée. Deux prises en charge, deux remises, un chauffeur. État des lieux sur chaque véhicule. Mise en main à chaque bout. Le second trajet est intégré au devis.",
    beats: [
      "308 prise à Quimper, remise à Rennes",
      "Golf prise à Rennes, remise à Quimper",
      "Photographies sur les deux véhicules",
      "Deux mises en main, un compte rendu",
    ],
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8, second véhicule d’un échange",
  },
  {
    id: "mutation-lyon",
    kind: "part",
    tag: "France",
    pack: "Formule Sérénité",
    from: "Quimper",
    to: "Lyon",
    title: "Peugeot 3008 — Quimper vers Lyon",
    lead: "Mutation. Le foyer part. Le véhicule suit, propre et avec le plein.",
    story:
      "Prise en charge à Quimper. Nettoyage, plein, photographies. Remise à Lyon le lendemain. Mise en main. Le client n’a pas enchaîné huit heures de volant après le déménagement.",
    beats: [
      "Prise en charge à Quimper, photographies",
      "Nettoyage et plein",
      "Remise à Lyon, mise en main",
      "Compte rendu le soir de l’arrivée",
    ],
    image: "/images/mission-3008.jpg",
    alt: "Peugeot 3008 en convoyage vers Lyon",
  },
  {
    id: "signature-paris",
    kind: "pro",
    tag: "Professionnel",
    pack: "Formule Signature réseau",
    from: "Rennes",
    to: "Paris",
    title: "Porsche 911 — centre Porsche Rennes vers Paris",
    lead: "Livraison prestige pour un client du réseau. Coffret champagne. Protocole de remise.",
    story:
      "La sportive a été préparée au centre Porsche de Rennes. Coffret Prestige. Suivi GPS le temps de la mission. Clés sous scellé. Remise à Paris, à la personne désignée. Mise en main. Compte rendu adressé au service livraisons. Facture à quinze jours.",
    beats: [
      "Préparation au centre Porsche, scellés",
      "Coffret Prestige, suivi GPS le temps de la mission",
      "Remise à Paris, personne désignée",
      "Compte rendu au service livraisons",
    ],
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911, livraison Signature réseau",
  },
  {
    id: "import-mandataire",
    kind: "pro",
    tag: "Professionnel",
    pack: "Formule Atelier",
    from: "Stuttgart",
    to: "Quimper",
    title: "Volkswagen Passat — mandataire, Stuttgart vers Quimper",
    lead: "Le mandataire ne détache pas un salarié. Nous allons chercher le véhicule en Allemagne.",
    story:
      "Rendez-vous à Stuttgart. Documents vérifiés sur place. Photographies. Un chauffeur. Remise au stock du mandataire à Quimper. Compte rendu. Facture à quinze jours.",
    beats: [
      "Brief mandataire, créneau en Allemagne",
      "Contrôle des documents sur place",
      "Un chauffeur, pas de sous-traitance",
      "Remise au stock, compte rendu",
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
    title: "Volkswagen Tiguan — Fouesnant vers la gare de Quimper",
    lead: "Le couple prenait le TGV de 6 h 42. Le véhicule n’avait pas à rester sur le parvis.",
    story:
      "Prise en charge au domicile à Fouesnant. Dépose du Tiguan sur le parvis de la gare, photographies, clés. Dimanche soir : rapatriement à Fouesnant, attente de la personne à la descente du train. Pas de gardiennage. Pas de transport de passagers.",
    beats: [
      "Prise en charge à Fouesnant, photographies",
      "Dépose gare de Quimper avant 6 h 42",
      "Rapatriement le dimanche soir",
      "Remise à la descente du train, compte rendu",
    ],
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
    title: "Golf de location — aéroport de Brest vers Fouesnant",
    lead: "Le vol atterrissait à Brest. Personne n’était disponible pour retirer le véhicule en agence.",
    story:
      "Récupération à l’agence de l’aéroport, état des lieux photographique, plein selon le contrat. Remise au domicile à Fouesnant. L’inverse existe : restitution à l’aéroport pendant que le client prend son vol.",
    beats: [
      "Retrait en agence, aéroport de Brest",
      "État des lieux photographique",
      "Remise au domicile à Fouesnant",
      "Compte rendu, ticket carburant si prévu",
    ],
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
    title: "Volkswagen T-Roc — restitution Carnac vers Nantes-Atlantique",
    lead: "Fin de séjour. L’avion était à 16 h. Le véhicule de location devait être rendu à l’aéroport.",
    story:
      "Prise en charge au gîte le matin. Restitution à l’agence de Nantes-Atlantique : photographies, ticket carburant. Le client était déjà dans l’aérogare. Un déplacement, un compte rendu. Pas de gardiennage.",
    beats: [
      "Prise en charge au gîte, Carnac",
      "Trajet vers Nantes-Atlantique",
      "Restitution en agence, photographies",
      "Compte rendu, ticket carburant",
    ],
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
    title: "Audi A3 — inspection avant achat à Rennes",
    lead: "Le client avait une annonce. Nous sommes allés voir le véhicule avant qu’il ne s’engage.",
    story:
      "Rendez-vous chez le vendeur à Rennes. Photographies de la carrosserie, du compteur, de l’habitacle et des documents. Vérification de la conformité à l’annonce. Un rapport lui a été adressé : état réel du véhicule, points d’attention, tarif vu sur place. Il a décidé ensuite. Il est reparti au volant de l’Audi. Nous avons ramené l’ancien véhicule à Quimper.",
    beats: [
      "Rendez-vous chez le vendeur, avant tout engagement",
      "Photographies et conformité à l’annonce",
      "Rapport : état du véhicule, observations, tarif",
      "Achat validé : le client repart, nous ramenons l’autre véhicule",
    ],
    image: "/images/mission-achat-inspection.jpg",
    alt: "Contrôle visuel d’une Audi A3 avant achat, photographies de carrosserie",
    mission: "jockey",
  },
  {
    id: "entretien-vannes",
    kind: "conciergerie",
    tag: "Atelier",
    pack: "Entretien",
    from: "Vannes",
    to: "Vannes",
    title: "Peugeot 3008 — entretien en concession à Vannes",
    lead: "Nous avons pris le rendez-vous, déposé le véhicule et le repris en fin de journée.",
    story:
      "Appel à la concession, créneau bloqué. Prise en charge au domicile, photographies, dépôt à l’atelier. Reprise en fin de journée, compte rendu, facture de l’atelier transmise au client. Il n’a pas immobilisé sa journée. La facture d’entretien demeure la sienne.",
    beats: [
      "Prise de rendez-vous à la concession",
      "Dépôt du véhicule, photographies",
      "Reprise en fin de journée",
      "Compte rendu et facture d’atelier transmise",
    ],
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
    title: "Volkswagen Golf — carrosserie à Brest",
    lead: "Deux passages : dépôt le lundi, reprise le jeudi. L’approche depuis Quimper est dans le devis.",
    story:
      "Prise de rendez-vous chez le carrossier. Dépôt le lundi, photographies. Reprise le jeudi, contrôle visuel, remise au domicile. Pas de gardiennage. L’approche Quimper – Brest est chiffrée.",
    beats: [
      "Prise de rendez-vous chez le carrossier",
      "Dépôt le lundi, photographies",
      "Reprise le jeudi, contrôle visuel",
      "Remise au domicile, approche depuis Quimper",
    ],
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
    title: "Volkswagen Tiguan — contrôle technique, Fouesnant vers Quimper",
    lead: "Le centre ouvrait à 8 h. Le client n’était pas disponible.",
    story:
      "Prise en charge à Fouesnant. Passage au centre de Quimper. Photographies, procès-verbal transmis. Retour au domicile avant midi. La facture du centre demeure celle du client.",
    beats: [
      "Prise en charge à Fouesnant",
      "Passage au contrôle technique de Quimper",
      "Procès-verbal transmis",
      "Retour au domicile avant midi",
    ],
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
    title: "Porsche 911 — roulage mensuel à Bénodet",
    lead: "Le véhicule restait trop longtemps à l’arrêt. Un roulage préventif a été calé chaque mois.",
    story:
      "Prise en charge au garage. Mise en température, quarante kilomètres, photographies. Compte rendu le jour même. Le mois suivant, même créneau. Pour un véhicule de prestige qui ne roule pas assez.",
    beats: [
      "Prise en charge au garage, photographies",
      "Mise en température, quarante kilomètres",
      "Compte rendu le jour même",
      "Créneau reconduit le mois suivant",
    ],
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
    title: "Flotte d’entreprise — trois Audi A4, siège à Quimper",
    lead: "Entretien, carrosserie, planning. Un seul interlocuteur pour le dirigeant.",
    story:
      "Nous prenons les rendez-vous, déposons les véhicules et les reprenons. Compte rendu le soir. Le dirigeant n’immobilise plus un salarié pour la route. Prestation limitée à la Bretagne.",
    beats: [
      "Planning et prise de rendez-vous",
      "Dépôt et reprise des trois Audi",
      "Compte rendu le soir",
      "Facturation à quinze jours",
    ],
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