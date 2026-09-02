export const CONCIERGE_STEPS = [
  {
    n: "01",
    title: "Ordre de mission",
    text: "Créneau, adresse et documents. Un double des clés peut rester à notre disposition pour le prochain départ. Le devis s’affiche tout de suite. Vous signez. Nous confirmons le créneau. Rien n’est engagé avant votre signature.",
  },
  {
    n: "02",
    title: "Prise en charge",
    text: "Un état des lieux photographique est établi : compteur, carrosserie, habitacle. Le véhicule part. Vous n’êtes pas au volant, ni dans l’habitacle. Nous ne transportons pas de passagers. Pas de gardiennage.",
  },
  {
    n: "03",
    title: "Exécution",
    text: "Gare, aéroport, atelier, location, roulage ou accompagnement d’achat. Le rendez-vous est tenu. Si le créneau glisse — train, atelier, vendeur — vous êtes prévenu avant, pas après.",
  },
  {
    n: "04",
    title: "Restitution",
    text: "Le véhicule est rendu à l’adresse convenue, à la personne désignée. Photographies, clés, compte rendu le jour même. Rien n’est laissé dans l’habitacle sans consigne. Un coffret peut accompagner les clés.",
  },
  {
    n: "05",
    title: "Suivi",
    text: "La facture de l’atelier vous est transmise, inchangée. Le plein est consigné. Un prochain créneau peut être proposé. Pour une flotte, le planning se construit à la semaine.",
  },
] as const;

export const CONCIERGE_PREPARE = [
  {
    t: "Le créneau",
    d: "Train, vol, rendez-vous atelier, ou visite chez un vendeur. Vous proposez une heure. Nous confirmons, ou nous vous contactons.",
  },
  {
    t: "L’adresse",
    d: "Domicile, gare, aéroport, agence de location, atelier. Uniquement en Bretagne, à Rennes et à Nantes.",
  },
  {
    t: "Le véhicule",
    d: "Marque, modèle, documents. Un double des clés peut rester chez nous pour le prochain départ.",
  },
  {
    t: "Votre identité",
    d: "Prénom, nom, téléphone ou e-mail. Le montant s’affiche tout de suite. Un e-mail part. Vous signez.",
  },
] as const;

export const CONCIERGE_CATALOGUE = [
  {
    id: "mouvement",
    kicker: "Mouvement",
    title: "Gares et aéroports",
    lead: "Vous prenez le train ou l’avion. Nous déplaçons uniquement le véhicule. Dépose, rapatriement, ou les deux. Pas de transport de passagers.",
    paragraphs: [
      "Quimper, Lorient, Brest, Vannes, Rennes et Nantes. Gares et aéroports. Vous descendez au dépose-minute, ou vous retrouvez le véhicule à l’arrivée. Un double des clés peut rester chez nous pour le prochain départ. Pas de gardiennage : le véhicule n’est pas stationné chez nous pendant votre absence.",
      "Un état des lieux photographique est établi à chaque mouvement. Compteur, carrosserie, habitacle. Si vous partez et revenez le même jour, ou plusieurs jours plus tard, les deux courses se chiffrent ensemble. L’attente sur place — jusqu’à l’échange des clés — peut être ajoutée au devis.",
      "Un coffret champagne et chocolats, ou terroir breton, peut attendre dans l’habitacle si vous allez chercher quelqu’un. Remis avec les clés. Un coffret, pas les deux. Composé à Quimper.",
    ],
    forWhom:
      "Particuliers qui prennent le TGV ou un vol depuis la Bretagne. Professionnels qui enchaînent une gare et une réunion, sans laisser le véhicule au dépose-minute.",
    items: [
      "Dépose, rapatriement, ou aller et retour",
      "Gares de Quimper, Lorient, Brest, Vannes, Rennes, Nantes",
      "Aéroports de Brest-Bretagne, Lorient, Rennes-Saint-Jacques, Nantes-Atlantique",
      "Double des clés conservé pour le prochain départ, sur consigne",
      "État des lieux photographique à chaque mouvement",
    ],
    note: "Nous ne vous conduisons pas. Vous prenez le train. Nous déplaçons le véhicule. Le montant figure sur le devis, après vos coordonnées.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
    cta: "Réserver une dépose",
    search: { mission: "jockey", service: "mouvement" },
  },
  {
    id: "location",
    kicker: "Location",
    title: "Récupération et restitution",
    lead: "Nous retirons le véhicule en agence ou à l’aéroport, ou le restituons pendant que vous prenez votre vol. Ce que l’agence exige, nous le constatons.",
    paragraphs: [
      "Compteur, carburant, carrosserie : l’état des lieux de l’agence est repris, photographié, consigné. Utile en one-way, en correspondance, ou lorsque le créneau d’ouverture de l’agence ne correspond pas au vôtre. Le véhicule rejoint ensuite l’adresse convenue, ou l’agence de restitution.",
      "Vous n’avez pas à interrompre une réunion, ni à rentrer plus tôt d’un vol, pour rendre une voiture. Nous tenons le créneau. Si l’agence glisse, vous êtes prévenu avant. Le compte rendu part le jour même, avec les photographies et le niveau de carburant.",
      "Cette prestation reste limitée à la Bretagne, à Rennes et à Nantes. Au-delà, c’est du convoyage : un autre cadre, un autre devis.",
    ],
    forWhom:
      "Voyageurs en correspondance, one-way, ou dont l’horaire ne recoupe pas l’ouverture de l’agence. Entreprises qui font tourner des locations sans immobiliser un salarié.",
    items: [
      "Retrait en agence, à l’aéroport ou à un point de rencontre",
      "Restitution pendant votre vol ou votre réunion",
      "Constat compteur, carburant, carrosserie",
      "Compte rendu adressé le jour même",
      "Bretagne, Rennes, Nantes",
    ],
    note: "Indiquez l’agence, le numéro de réservation et le créneau. Le devis s’aligne dessus.",
    image: "/images/mission-golf-aeroport.jpg",
    alt: "Volkswagen Golf de location sur un aéroport",
    cta: "Planifier une récupération",
    search: { mission: "jockey", service: "location" },
  },
  {
    id: "atelier",
    kicker: "Atelier",
    title: "Entretien, carrosserie, contrôle technique",
    lead: "Nous prenons le rendez-vous, déposons le véhicule et le reprenons. La facture de l’atelier demeure la vôtre. Vous n’avez pas à poser une demi-journée.",
    paragraphs: [
      "Nous appelons l’atelier, nous bloquons le créneau, nous déposons le véhicule, nous le reprenons une fois le travail achevé. Entretien, révision, pneumatiques, carrosserie, contrôle technique. Un compte rendu, les photographies, la facture de l’atelier transmise, inchangée.",
      "Nettoyage et plein peuvent être ajoutés, pour que le véhicule revienne propre et avec le niveau convenu. Vous n’avez pas à enchaîner l’atelier et la station. Le devis les relie, ou les laisse de côté, selon votre consigne.",
      "Si le créneau de l’atelier glisse, vous êtes prévenu avant. Nous ne laissons pas un véhicule une nuit de plus sans vous le dire. Pour plusieurs véhicules, le planning se construit avec la gestion de flotte.",
    ],
    forWhom:
      "Particuliers qui ne peuvent pas immobiliser une journée. Professions libérales, TPE, ateliers partenaires qui veulent un dépôt et une reprise sans mobiliser un compagnon.",
    items: [
      "Prise de rendez-vous auprès de l’atelier",
      "Dépôt et reprise du véhicule",
      "Entretien, carrosserie, pneumatiques, contrôle technique",
      "Facture de l’atelier transmise, inchangée",
      "Nettoyage et plein, sur demande, au devis",
    ],
    note: "Nous ne facturons pas le travail de l’atelier. Nous facturons le déplacement, la prise de rendez-vous, le compte rendu.",
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf dans un atelier",
    cta: "Confier ce passage atelier",
    search: { mission: "jockey", service: "atelier" },
  },
  {
    id: "flotte",
    kicker: "Entreprise",
    title: "Gestion de flotte",
    lead: "Planning, prise de rendez-vous, entretien, carrosserie, nettoyage et compte rendu. Un seul interlocuteur. Ce n’est pas un logiciel. C’est une exécution.",
    paragraphs: [
      "Professions libérales, TPE, petites flottes. Les véhicules tournent, les agendas aussi. Nous construisons le planning à la semaine ou au mois, nous déplaçons les véhicules, nous tenons le fil avec les ateliers. Un compte rendu par mouvement. Facturation regroupée possible.",
      "Ce n’est pas un logiciel de flotte, ni une plateforme. C’est un chauffeur, un numéro, une exécution. Contrôle technique, pneumatiques, carrosserie, nettoyage, dépose gare si besoin. Vous gardez vos collaborateurs sur leur métier.",
      "La zone reste la Bretagne, Rennes et Nantes. Au-delà, les rotations passent en convoyage. Les deux se chiffrent distinctement, avec le même interlocuteur.",
    ],
    forWhom:
      "Cabinets, TPE, petites flottes d’entreprise, loueurs locaux. Structures trop petites pour un fleet manager, trop occupées pour enchaîner les ateliers.",
    items: [
      "Planning à la semaine ou au mois",
      "Prise de rendez-vous, dépôts, reprises",
      "Entretien, carrosserie, nettoyage, contrôle technique",
      "Compte rendu par mouvement, interlocuteur unique",
      "Facturation regroupée, sur demande",
    ],
    note: "Un dossier flotte se construit après deux ou trois missions test. Le devis initial porte sur le premier planning.",
    image: "/images/mission-flotte.jpg",
    alt: "Flotte d’Audi A4 devant un siège d’entreprise",
    cta: "Ouvrir un dossier flotte",
    search: { mission: "jockey", service: "flotte", client: "pro" },
  },
  {
    id: "roulage",
    kicker: "Prestige",
    title: "Mise en circulation périodique",
    lead: "Pour un véhicule trop longtemps à l’arrêt. Ordre écrit, kilométrage limité, itinéraire défini. Une mise en température, pas une promenade.",
    paragraphs: [
      "Collection, sportive, véhicule peu utilisé. Compteur relevé, photographies, itinéraire convenu, kilométrage plafonné. Mensuel si vous le souhaitez. Compte rendu à chaque sortie : niveaux, observations, distance parcourue. Le véhicule reste le vôtre, à votre adresse, sans gardiennage.",
      "La conduite est adaptée : montée en température, mode Comfort, axes choisis. Ce n’est pas un usage personnel du véhicule. C’est une consigne, exécutée, tracée. Si une alerte apparaît — bruit, voyant, niveau — la sortie s’arrête, vous êtes appelé.",
      "Le roulage se combine, si besoin, avec un passage atelier ou un nettoyage. Toujours en Bretagne. Pour un acheminement hors zone, c’est du convoyage prestige.",
    ],
    forWhom:
      "Propriétaires de sportives, de collection, ou de véhicules qui restent plusieurs semaines à l’arrêt. Particuliers qui veulent une mise en température suivie, pas un prêt de clés.",
    items: [
      "Ordre écrit, kilométrage limité, itinéraire défini",
      "Relevé compteur et photographies avant / après",
      "Mise en température, niveaux, observations",
      "Fréquence mensuelle possible",
      "Compte rendu à chaque sortie",
    ],
    note: "Sans ordre écrit et sans plafond de kilomètres, la mission n’est pas prise.",
    image: "/images/mission-roulage.jpg",
    alt: "Porsche 911 en roulage sur une route bretonne",
    cta: "Planifier un roulage",
    search: { mission: "jockey", service: "roulage" },
  },
  {
    id: "achat",
    kicker: "Achat",
    title: "Accompagnement d’achat",
    lead: "Nous nous rendons chez le vendeur. Vous n’achetez pas encore. Vous décidez ensuite, sur pièces : photographies, observations, tarif demandé.",
    paragraphs: [
      "Photographies de carrosserie, habitacle, compteur, documents. Conformité à l’annonce. Un rapport vous est adressé : état du véhicule, observations, tarif. Ce n’est pas une expertise agréée. C’est un constat visuel, daté, photographié. Vous décidez ensuite. Aucune obligation d’achat.",
      "Si vous achetez, vous pouvez repartir au volant. Nous ramenons l’autre véhicule — le vôtre, ou celui du vendeur, selon la consigne. Si vous ne donnez pas suite, la mission s’arrête au rapport. Vous n’avez pas à vous déplacer pour un véhicule qui ne correspond pas.",
      "Cette inspection se tient en Bretagne. Pour un achat déjà conclu, hors zone, c’est un convoyage : nous récupérons le véhicule une fois la vente faite, nous le livrons à l’adresse convenue.",
    ],
    forWhom:
      "Particuliers qui hésitent sur un Leboncoin local, sans pouvoir se déplacer le jour de la visite. Acheteurs qui veulent un constat avant de venir signer.",
    items: [
      "Déplacement chez le vendeur, en Bretagne",
      "Photographies de carrosserie, habitacle, compteur, documents",
      "Rapport : état, observations, tarif",
      "Vous décidez ensuite. Aucune obligation d’achat",
      "Si vous achetez : vous partez au volant, nous ramenons l’autre véhicule",
    ],
    note: "Le rapport n’est pas une expertise. Il ne se substitue pas à un contrôle technique, ni à un expert agréé.",
    image: "/images/mission-achat-inspection.jpg",
    alt: "Contrôle visuel d’une Audi avant achat, photographies de carrosserie",
    cta: "Faire inspecter ce véhicule",
    search: { mission: "jockey", service: "achat" },
  },
] as const;

export const CONCIERGE_GROUPS = [
  {
    id: "deplacements",
    title: "Déplacements",
    text: "Gare, aéroport, location. Vous prenez le train. Nous déplaçons le véhicule. Dépose, rapatriement, ou les deux.",
    ids: ["mouvement", "location"],
  },
  {
    id: "atelier-flotte",
    title: "Atelier et flotte",
    text: "Entretien, carrosserie, contrôle technique, planning d’entreprise. Vos journées restent les vôtres. La facture de l’atelier demeure la vôtre.",
    ids: ["atelier", "flotte"],
  },
  {
    id: "prestige",
    title: "Prestige et achat",
    text: "Mise en circulation périodique pour un véhicule à l’arrêt. Inspection chez le vendeur avant d’acheter. Vous décidez ensuite.",
    ids: ["roulage", "achat"],
  },
] as const;

export const CONCIERGE_EXTRAS = [
  {
    title: "Nettoyage",
    text: "Intérieur et extérieur. Finition prestige sur demande. Le véhicule est rendu propre, pas seulement déplacé. Ajouté au devis, jamais facturé à la dérobée.",
    cta: "Ajouter un nettoyage",
    search: { mission: "jockey" },
  },
  {
    title: "Plein de carburant",
    text: "Passage en station. Ticket joint au compte rendu. Niveau convenu à la remise. Pour un électrique, recharge au niveau convenu, facturée au réel.",
    cta: "Prévoir le plein",
    search: { mission: "jockey" },
  },
  {
    title: "Attente sur place",
    text: "Remise à une personne présente. Nous demeurons jusqu’à l’échange des clés. Utile en gare, en aéroport, chez un notaire, chez un vendeur.",
    cta: "Prévoir une attente",
    search: { mission: "jockey" },
  },
  {
    title: "Prise de rendez-vous",
    text: "Nous contactons l’atelier et bloquons le créneau. Vous n’avez pas à appeler, ni à relancer. La facture de l’atelier reste la vôtre.",
    cta: "Déléguer la prise de rendez-vous",
    search: { mission: "jockey", service: "atelier" },
  },
  {
    title: "Coffret champagne et chocolats",
    text: "Dans le véhicule, si vous allez chercher quelqu’un à la gare ou à l’aéroport. Remis avec les clés. Composé à Quimper.",
    cta: "Joindre un coffret champagne",
    search: { mission: "jockey" },
  },
  {
    title: "Coffret Terroir Breton",
    text: "Galettes, caramels, cidre. Composé à Quimper. Remis avec les clés. Un coffret, pas les deux.",
    cta: "Joindre le terroir breton",
    search: { mission: "jockey" },
  },
] as const;

export const CONCIERGE_LIMITS = [
  {
    t: "Pas de gardiennage",
    d: "Le véhicule n’est pas stationné chez nous. Dépose, rapatriement, atelier, roulage. Ensuite il rejoint l’adresse convenue. Un double des clés peut rester, sur consigne, pour le prochain départ.",
  },
  {
    t: "Pas de transport de passagers",
    d: "Nous déplaçons le véhicule. Vous prenez le train, l’avion, ou vous restez où vous êtes. Ce n’est pas un VTC, ni une remise à un dépose-minute avec vous à bord.",
  },
  {
    t: "Bretagne, Rennes, Nantes",
    d: "La conciergerie s’arrête là. Au-delà, c’est du convoyage, France et Europe. Les deux se chiffrent distinctement, avec le même interlocuteur.",
  },
] as const;
