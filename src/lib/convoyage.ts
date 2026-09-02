export const CONVOYAGE_STEPS = [
  {
    n: "01",
    title: "Ordre de mission",
    text: "Vous indiquez le départ, l’arrivée, le véhicule et le créneau souhaité. Le devis s’affiche tout de suite. Vous signez. Nous confirmons le créneau, ou nous proposons une autre date. Rien n’est engagé avant votre signature.",
  },
  {
    n: "02",
    title: "Prise en charge",
    text: "Un état des lieux photographique est établi : compteur, carrosserie, habitacle, documents de bord. Les clés ne changent de main qu’après ce constat. Le véhicule doit être en état de marche, assuré, et mis à disposition à l’adresse convenue.",
  },
  {
    n: "03",
    title: "Acheminement",
    text: "Un chauffeur dédié conduit le véhicule. L’assurance professionnelle s’applique. Péages, carburant et retour du chauffeur sont intégrés au devis. En cas d’imprévu — bouchon, météo, incident — nous vous informons, nous ne disparaissons pas.",
  },
  {
    n: "04",
    title: "Remise",
    text: "Les clés sont remises en main propre à la personne désignée. La mise en main du véhicule est offerte : aides à la conduite, multimédia, recharge. Vingt à trente minutes, sur place. Un coffret ou une livraison vidéo peut accompagner la remise, selon la formule.",
  },
  {
    n: "05",
    title: "Compte rendu",
    text: "Un rapport de mission est adressé le jour même : horaires, kilométrage, photographies, observations. Le dossier est clos. Rien n’est laissé en suspens. Pour un professionnel, la facture part à quinze jours.",
  },
] as const;

export const CONVOYAGE_PREPARE = [
  {
    t: "Les deux adresses",
    d: "Prise en charge et remise. Domicile, concession, parking, atelier. Le véhicule est récupéré là où il se trouve.",
  },
  {
    t: "Le véhicule",
    d: "Marque, modèle, énergie. Particularité : électrique, prestige, utilitaire jusqu’à 3,5 t. Il doit être en état de marche.",
  },
  {
    t: "La date souhaitée",
    d: "Vous proposez un créneau. Nous le confirmons, ou nous vous contactons. Cinq jours en standard, soixante-douze heures en urgence.",
  },
  {
    t: "Votre identité",
    d: "Prénom, nom, téléphone ou e-mail. Le montant s’affiche tout de suite. Un e-mail part. Vous signez.",
  },
] as const;

export const CONVOYAGE_CATALOGUE = [
  {
    id: "france",
    kicker: "France",
    title: "Trajet point à point",
    lead: "Le véhicule est pris en charge à l’adresse indiquée et remis au destinataire. Un chauffeur dédié, un créneau confirmé, un compte rendu le jour même.",
    paragraphs: [
      "Quimper est la base opérationnelle, pas un départ obligatoire. Le véhicule est récupéré là où il se trouve : domicile, concession, parking d’immeuble, parking d’aéroport, atelier. Bretagne, Grand Ouest, Paris, Lyon, Nice, et le reste du territoire. Nous intervenons tous les jours, sous réserve de disponibilité.",
      "Avant le départ, un état des lieux photographique est établi : compteur, carrosserie, habitacle, documents de bord. Les clés ne changent de main qu’après ce constat. Pendant l’acheminement, un seul chauffeur conduit le véhicule. Péages, carburant et retour du chauffeur sont intégrés au devis. En cas d’imprévu, vous êtes informé.",
      "À l’arrivée, les clés sont remises en main propre à la personne désignée. La mise en main est offerte : aides à la conduite, multimédia, recharge. Vingt à trente minutes, sur place. Un rapport de mission part le jour même : horaires, kilométrage, photographies, observations. Le dossier est clos.",
    ],
    forWhom:
      "Particuliers qui achètent, vendent ou déménagent. Professionnels qui doivent déplacer un véhicule entre deux sites, sans immobiliser un commercial ni un technicien.",
    items: [
      "Prise en charge à l’adresse du véhicule, remise à l’adresse du destinataire",
      "État des lieux photographique au départ et à l’arrivée",
      "Péages, carburant et retour du chauffeur intégrés au devis",
      "Mise en main offerte à la remise, vingt à trente minutes",
      "Compte rendu adressé le jour même",
    ],
    note: "Le montant n’est pas affiché ici. Il figure sur le devis, après communication de vos coordonnées. Vous l’acceptez ensuite.",
    image: "/images/mission-audi-a4.jpg",
    alt: "Audi A4 Avant en convoyage France",
    cta: "Chiffrer ce trajet",
    search: { mission: "convoyage" },
  },
  {
    id: "europe",
    kicker: "Europe",
    title: "Import et export",
    lead: "Belgique, Allemagne, Pologne, Monaco, Espagne, Italie, Royaume-Uni. Un seul chauffeur, de bout en bout, sans sous-traitance.",
    paragraphs: [
      "Les documents sont vérifiés avant le départ. Le passage de frontière est préparé. L’Europe est détectée d’après les villes : vous n’avez pas à cocher une case, ni à majorer vous-même. Le même cadre s’applique qu’en France : photographies, assurance professionnelle, remise en main propre, mise en main offerte.",
      "Un chauffeur dédié conduit le véhicule de la prise en charge jusqu’à la remise. Pas de relais, pas de plateforme anonyme. Un suivi GPS peut être ajouté le temps de la mission, puis retiré à l’arrivée. Les formalités transfrontalières sont intégrées au devis, pas facturées à la dérobée.",
      "À la remise en France, ou à destination, la mise en main porte sur les aides à la conduite et le multimédia. Le compte rendu part le jour même. Délai type : deux à quatre jours selon l’axe et les formalités. Si le créneau ne tient pas, nous le disons avant.",
    ],
    forWhom:
      "Particuliers qui importent un véhicule d’occasion. Mandataires, concessions et marchands qui font venir un lot ou un véhicule isolé depuis un pays frontalier.",
    items: [
      "Vérification des documents avant le départ",
      "Passage de frontière préparé, formalités intégrées au devis",
      "Un chauffeur dédié, de bout en bout, sans sous-traitance",
      "Suivi GPS pendant la mission, sur demande",
      "Remise et mise en main du véhicule",
    ],
    note: "Le devis distingue le trajet français du trajet européen. Vous voyez le montant après vos coordonnées, jamais sur cette page.",
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat sur autoroute européenne",
    cta: "Chiffrer un import",
    search: { mission: "convoyage" },
  },
  {
    id: "electrique",
    kicker: "Électrique",
    title: "Véhicules électriques",
    lead: "Tesla, hybrides rechargeables et tous véhicules électriques. Le plan de recharge est établi avant le départ. L’autonomie n’est pas improvisée en route.",
    paragraphs: [
      "Avant la prise en charge, le câble, le badge et l’état de charge sont vérifiés. Un plan de recharge est établi selon l’autonomie réelle du véhicule, pas selon la fiche constructeur. Les arrêts sont prévus. Le niveau convenu à l’arrivée est noté dans l’ordre de mission.",
      "Pendant le trajet, la conduite est adaptée : préchauffage, récupération, pauses en stations compatibles. L’énergie consommée est facturée au réel, hors forfait kilométrique. Vous n’avez pas à estimer les kWh vous-même.",
      "À la remise, la mise en main porte aussi sur l’application, la charge, et le niveau de batterie. Vingt à trente minutes. Le destinataire part avec un véhicule qu’il sait recharger, pas seulement conduire.",
    ],
    forWhom:
      "Particuliers qui achètent une Tesla ou un hybride rechargeable à distance. Concessions et mandataires qui livrent un véhicule électrique sans former le client sur place.",
    items: [
      "Plan de recharge établi avant le départ",
      "Vérification du câble, du badge et de l’état de charge",
      "Mise en main de la charge à la remise",
      "Niveau de batterie convenu à l’arrivée",
      "Énergie facturée au réel, hors forfait",
    ],
    note: "Indiquez l’énergie du véhicule dans le devis. Le simulateur l’intègre au calcul.",
    image: "/images/mission-tesla.jpg",
    alt: "Tesla Model 3 en convoyage",
    cta: "Chiffrer un véhicule électrique",
    search: { mission: "convoyage", vehicle: "ve" },
  },
  {
    id: "retour",
    kicker: "Aller et retour",
    title: "Échange de véhicules",
    lead: "Un véhicule à l’aller, un autre au retour : reprise, échange, deux adresses. Pas de retour à vide. Un même chauffeur, un devis unique.",
    paragraphs: [
      "Reprise d’un VO contre livraison d’un neuf, échange entre deux sites, deux particuliers qui se croisent. Le second trajet est intégré au devis. Un même chauffeur, le jour même si le créneau le permet. Chaque véhicule a son état des lieux photographique.",
      "L’approche depuis Quimper et les retours sont calculés une seule fois. Vous n’avez pas à commander deux missions séparées. Les horaires sont tenus : si le second véhicule n’est pas prêt, nous vous prévenons avant, pas à l’arrivée.",
      "Chaque remise se fait en main propre, à la personne désignée. Mise en main offerte sur le véhicule livré. Compte rendu le jour même, pour les deux trajets.",
    ],
    forWhom:
      "Concessions qui livrent un neuf et reprennent un VO. Particuliers qui échangent deux véhicules. Garages qui font tourner un prêt et un retour le même jour.",
    items: [
      "Deux prises en charge et deux remises",
      "État des lieux photographique sur chaque véhicule",
      "Un même chauffeur, le jour même si le créneau le permet",
      "Approche et retours calculés depuis Quimper",
      "Devis unique pour les deux trajets",
    ],
    note: "Indiquez les deux adresses et les deux véhicules. Le devis les relie.",
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8 en convoyage",
    cta: "Chiffrer un échange",
    search: { mission: "convoyage" },
  },
  {
    id: "achat",
    kicker: "Particulier",
    title: "Achat à distance",
    lead: "Leboncoin, garage ou mandataire : le vendeur et l’acheteur n’ont pas à se déplacer. Nous récupérons le véhicule une fois la vente conclue, et le livrons à l’adresse convenue.",
    paragraphs: [
      "Nous intervenons après la vente, pas avant. Un contrôle visuel est effectué sur place avant le départ : carrosserie, compteur, habitacle, documents. Les photographies sont horodatées. Si quelque chose ne correspond pas à ce qui a été convenu, nous vous appelons avant de partir.",
      "Le véhicule est ensuite acheminé au domicile, sur le lieu de travail, ou chez un tiers désigné. À l’arrivée, la mise en main porte sur les aides à la conduite et le multimédia. Vingt à trente minutes. Le destinataire prend le volant en connaissance de cause.",
      "Un compte rendu peut être adressé aux deux parties, sur demande. Pour une inspection avant d’acheter — lorsque vous n’avez pas encore décidé — il s’agit d’une prestation de conciergerie distincte, limitée à la Bretagne.",
    ],
    forWhom:
      "Particuliers qui achètent un véhicule à plusieurs centaines de kilomètres, sans pouvoir se déplacer. Vendeurs qui préfèrent une remise professionnelle à une rencontre improvisée.",
    items: [
      "Contrôle visuel sur place avant le départ",
      "État des lieux photographique horodaté",
      "Remise au domicile, sur le lieu de travail, ou à un tiers désigné",
      "Présentation des aides à la conduite et du multimédia",
      "Compte rendu adressé aux deux parties, sur demande",
    ],
    note: "L’inspection avant achat se chiffre à part, en conciergerie, et uniquement en Bretagne.",
    image: "/images/mission-308.jpg",
    alt: "Peugeot 308 en convoyage entre particuliers",
    cta: "Faire livrer cet achat",
    search: { mission: "convoyage", client: "part" },
  },
  {
    id: "livraison",
    kicker: "Professionnel",
    title: "Livraison client",
    lead: "Concession, garage, mandataire. Le commercial demeure en établissement. Nous livrons le neuf ou l’occasion, avec la mise en main et le compte rendu.",
    paragraphs: [
      "Votre vendeur vend. Nous livrons. Préparation selon la formule retenue : nettoyage, plein, coffret. La remise se fait chez le client, à l’adresse convenue. La mise en main dure vingt à trente minutes : aides à la conduite, multimédia, recharge. L’image de marque du réseau est tenue jusqu’au pas de porte.",
      "Un coffret de bienvenue peut accompagner les clés : terroir breton, ou champagne et chocolats. Une livraison vidéo — film court tourné à la remise — peut être transmise à la concession, qui l’envoie au client absent. Utile aussi pour garder une trace de la mise en main.",
      "Le compte rendu part au donneur d’ordre le jour même. Facturation à quinze jours. Un interlocuteur, pas un standard. Si le client n’est pas là, nous le disons, nous ne laissons pas les clés dans une boîte.",
    ],
    forWhom:
      "Concessions, mandataires, marchands VO. Réseaux qui veulent déléguer la livraison sans déléguer l’image. Garages qui livrent un véhicule préparé sans sortir un technicien.",
    items: [
      "Préparation et nettoyage selon la formule retenue",
      "Coffret de bienvenue selon la formule Livraison ou Signature",
      "Livraison vidéo sur demande : film court à la remise, transmis à la concession",
      "Mise en main chez le client, vingt à trente minutes",
      "Compte rendu au donneur d’ordre, facturation à quinze jours",
    ],
    note: "Trois formules professionnelles : Atelier, Livraison client, Signature réseau. Le kilomètre est identique. La remise change.",
    image: "/images/mission-bmw-x3.jpg",
    alt: "BMW X3 neuve, livraison client",
    cta: "Déléguer cette livraison",
    search: { mission: "convoyage", client: "pro" },
  },
  {
    id: "atelier-pro",
    kicker: "Professionnel",
    title: "Navette d’atelier",
    lead: "Contrôle technique, carrosserie, préparation. L’atelier conserve ses techniciens. Nous assurons les déplacements, un véhicule ou plusieurs sur un même créneau.",
    paragraphs: [
      "Vos mécaniciens restent au banc. Nous prenons le véhicule chez le client, à la concession, ou sur un autre site, nous le déposons à l’atelier, nous le reprenons une fois le travail achevé. Contrôle technique, carrosserie, pneumatiques, préparation. L’approche depuis Quimper est intégrée au devis.",
      "Un véhicule, ou plusieurs sur un même créneau. Photographies au départ et au retour. Compte rendu le soir. Formule Atelier : le déplacement, rien d’autre. Pas de coffret. Pas de mise en scène. Un chauffeur, un créneau, un rapport.",
      "Pour une flotte ou un planning à la semaine, la conciergerie prend le relais, en Bretagne. Au-delà, c’est du convoyage. Les deux se chiffrent distinctement.",
    ],
    forWhom:
      "Garages, carrossiers, centres de contrôle, concessions. Ateliers qui ne peuvent plus immobiliser un compagnon pour aller chercher un véhicule.",
    items: [
      "Approche depuis Quimper, intégrée au devis",
      "Un ou plusieurs véhicules sur un même créneau",
      "Photographies au départ et au retour",
      "Compte rendu adressé le soir",
      "Formule Atelier, sans coffret",
    ],
    note: "La prise de rendez-vous auprès de l’atelier peut être ajoutée, en conciergerie, pour les sites bretons.",
    image: "/images/mission-golf-atelier.jpg",
    alt: "Volkswagen Golf en navette atelier",
    cta: "Planifier une navette",
    search: { mission: "convoyage", client: "pro" },
  },
  {
    id: "prestige",
    kicker: "Prestige",
    title: "Véhicules de prestige",
    lead: "Sportive, collection, import de valeur. Un cadre de prise en charge, un chauffeur formé, une remise nominative. Ce n’est pas une activité de sécurité privée.",
    paragraphs: [
      "Clés et documents sont placés sous scellé numéroté. Un suivi GPS est installé le temps de la mission, puis retiré à la remise. La conduite se fait en mode Comfort, autoroute privilégiée pour les bas de caisse, pauses exclusivement en stations éclairées. Aucune sous-traitance.",
      "La remise se fait à la personne désignée, nominativement. Pas de dépôt dans une boîte, pas de tiers improvisé. Le compte rendu est factuel : horaires, kilométrage, photographies, observations. L’acceptation de la mission dépend de la valeur déclarée et des plafonds d’assurance.",
      "Ce protocole n’est pas de la sécurité privée, ni un transport de fonds. C’est un cadre de prise en charge, pour un véhicule dont la valeur justifie plus de rigueur. Discret. Formé. Traçable.",
    ],
    forWhom:
      "Collectionneurs, imports de sportives, concessions prestige, particuliers qui ne confient pas une Porsche ou une pièce rare à un relais anonyme.",
    items: [
      "Clés et documents placés sous scellé numéroté",
      "Suivi GPS le temps de la mission, retiré à la remise",
      "Conduite en mode Comfort, autoroute privilégiée",
      "Pauses exclusivement en stations éclairées",
      "Compte rendu factuel, sans sous-traitance",
    ],
    note: "Déclarez la valeur du véhicule. Sans cette information, la mission n’est pas acceptée.",
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911 en convoyage prestige",
    cta: "Encadrer ce véhicule",
    search: { mission: "convoyage", vehicle: "prestige" },
  },
] as const;

export const CONVOYAGE_GROUPS = [
  {
    id: "trajets",
    title: "Trajets",
    text: "France, Europe, électrique, aller et retour. Le véhicule est pris là où il se trouve. Un chauffeur, un créneau, un compte rendu.",
    ids: ["france", "europe", "electrique", "retour"],
  },
  {
    id: "livraisons",
    title: "Livraison et atelier",
    text: "Achat à distance, livraison concession, navette d’atelier. Le commercial vend. Le mécanicien reste au banc. Nous déplaçons le véhicule.",
    ids: ["achat", "livraison", "atelier-pro"],
  },
  {
    id: "haute-valeur",
    title: "Prestige",
    text: "Sportives, collection, imports. Un protocole, un chauffeur formé, une remise nominative. Pas de sécurité privée.",
    ids: ["prestige"],
  },
] as const;

export const CONVOYAGE_CLIENTS = [
  {
    id: "part",
    kicker: "Particulier",
    title: "Achat, vente, mutation",
    text: "Vous achetez à distance, vous vendez, vous changez de région. Le véhicule est pris en charge à l’adresse où il se trouve et remis à l’adresse convenue — domicile, travail, ou un tiers désigné. Trois formules : Route, Sérénité et Sécurisé. L’état des lieux photographique est établi au départ et à l’arrivée. La mise en main est offerte, vingt à trente minutes. Le montant figure sur le devis, après communication de vos coordonnées. Vous l’acceptez ensuite. La date de prise en charge est confirmée par nos soins.",
    to: "/simulateur",
    search: { mission: "convoyage", client: "part" },
    cta: "Chiffrer une livraison particulière",
  },
  {
    id: "pro",
    kicker: "Professionnel",
    title: "Concessions, garages, mandataires",
    text: "Navettes d’atelier, livraisons clients, imports, rotations de stock. Votre vendeur demeure en établissement. Vos techniciens restent au banc. Trois formules : Atelier, Livraison client et Signature réseau. Règlement à quinze jours. Un interlocuteur, un compte rendu par mission. Livraison vidéo et coffrets sur les formules concernées. Le kilomètre est identique. La remise change.",
    to: "/simulateur",
    search: { mission: "convoyage", client: "pro" },
    cta: "Chiffrer une mission professionnelle",
  },
] as const;

export const CONVOYAGE_COMPLEMENTS = [
  {
    id: "protocole",
    kicker: "Haute valeur",
    title: "Protocole prestige",
    text: "Sportives, collection, imports, véhicules atypiques. Scellés numérotés, suivi GPS le temps de la mission, conduite en Comfort, pauses en stations éclairées, remise à la personne désignée. Ce n’est pas de la sécurité privée. C’est un cadre de prise en charge, pour un chauffeur formé, discret. L’acceptation dépend de la valeur déclarée et des plafonds d’assurance. Sans cette information, la mission n’est pas prise.",
    cta: "Encadrer un véhicule de valeur",
    search: { mission: "convoyage", vehicle: "prestige" },
  },
  {
    id: "video",
    kicker: "Concession",
    title: "Livraison vidéo",
    text: "Un film court, tourné à la remise : accueil, clés, mise en main. Transmis au donneur d’ordre. La concession l’envoie ensuite au client qui n’était pas sur place. Utile aussi pour garder une trace de la mise en main, lorsque le destinataire est présent. Prestation supplémentaire, ajoutée au devis, jamais facturée à la dérobée.",
    cta: "Ajouter une livraison vidéo",
    search: { mission: "convoyage", client: "pro" },
  },
  {
    id: "coffrets",
    kicker: "Remise",
    title: "Coffrets",
    text: "Champagne et chocolats, ou terroir breton — galettes, caramels, cidre. Pour une concession qui n’a pas préparé de cadeau, ou pour aller chercher quelqu’un à la gare. Remis avec les clés. Un coffret, pas les deux. Composé à Quimper. Inclus selon la formule, ou ajouté au devis.",
    cta: "Joindre un coffret au devis",
    search: { mission: "convoyage", client: "pro" },
  },
] as const;
