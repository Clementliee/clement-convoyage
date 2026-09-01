import { SITE } from "@/lib/site";
import { absUrl } from "@/lib/seo";

const COUNTRIES = [
  "France",
  "Belgique",
  "Suisse",
  "Luxembourg",
  "Allemagne",
  "Espagne",
  "Italie",
  "Pays-Bas",
  "Royaume-Uni",
  "Pologne",
  "Monaco",
  "Serbie",
  "Portugal",
  "Autriche",
  "République tchèque",
  "Croatie",
  "Irlande",
  "Danemark",
  "Hongrie",
  "Andorre",
  "Slovénie",
  "Slovaquie",
  "Grèce",
  "Suède",
  "Norvège",
  "Roumanie",
  "Finlande",
  "Bulgarie",
  "Albanie",
  "Monténégro",
  "Bosnie-Herzégovine",
  "Macédoine du Nord",
  "Estonie",
  "Lettonie",
  "Lituanie",
  "Malte",
  "Chypre",
  "Liechtenstein",
];

const SERVICES = [
  { name: "Jockey VIP gares et aéroports", url: "/jockey-gares-aeroports" },
  { name: "Livraison de véhicule France", url: "/livraison-vehicule" },
  { name: "Livraison de véhicule Europe", url: "/livraison-europe" },
  { name: "Nettoyage avant remise", url: "/nettoyage-vehicule" },
  { name: "Plein de carburant", url: "/plein-carburant-livraison" },
  { name: "Coffret cadeau de livraison", url: "/coffrets-livraison" },
  { name: "Contrôle visuel 20 points", url: "/controle-vehicule" },
  { name: "Pose de traqueur GPS", url: "/traqueur-gps" },
  { name: "Protocole sécurité", url: "/securite-vehicule" },
  { name: "État des lieux photo", url: "/etat-des-lieux-convoyage" },
  { name: "Convoyage automobile", url: "/convoyage" },
  { name: "Compte professionnel", url: "/professionnels" },
  { name: "Pack mise à la route", url: "/pack-mise-a-la-route" },
  { name: "Préparation de véhicule", url: "/preparation-vehicule" },
  { name: "Protocole Clément", url: "/protocole-clement" },
];

function Json({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LocalBusinessJsonLd() {
  const id = `${SITE.origin}/#business`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutomotiveBusiness", "LocalBusiness"],
        "@id": id,
        name: SITE.name,
        legalName: SITE.legalName,
        alternateName: ["Convoyage Bretagne", "Convoyage Quimper", SITE.tradeName, "Clément Convoyage"],
        description: "Convoyage et livraison de véhicules, base Quimper. Prise en charge partout en France et en Europe, remise chez le client. État des lieux photo, mise en main offerte.",
        slogan: SITE.baseline,
        telephone: SITE.phoneHref.replace("tel:", ""),
        email: SITE.email,
        taxID: SITE.siren.replace(/\s/g, ""),
        vatID: SITE.siret.replace(/\s/g, ""),
        image: [`${SITE.origin}/og.jpg`, `${SITE.origin}/images/convoyage-voiture-france.jpg`],
        logo: `${SITE.origin}/og.jpg`,
        url: SITE.origin,
        inLanguage: "fr-FR",
        currenciesAccepted: "EUR",
        paymentAccepted: "Virement bancaire",
        priceRange: "Sur devis",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: "Bretagne",
          addressCountry: "FR",
        },
        geo: { "@type": "GeoCoordinates", latitude: 47.996, longitude: -4.098 },
        hasMap: "https://www.google.com/maps/search/?api=1&query=Quimper+Finistere",
        areaServed: COUNTRIES.map((name) => ({ "@type": "Country", name })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
        founder: { "@type": "Person", name: SITE.legalName, jobTitle: "Dirigeant", homeLocation: "Quimper" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phoneHref.replace("tel:", ""),
          email: SITE.email,
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: ["French"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "20:00",
          },
        },
        knowsAbout: [
          "Convoyage automobile",
          "Livraison de véhicule",
          "Convoyage de voiture",
          "Convoyage automobile Quimper",
          "Convoyeur automobile Quimper",
          "État des lieux photo",
          "Traqueur GPS",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Prestations de convoyage",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: absUrl(s.url),
              provider: { "@id": id },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: SITE.origin,
        name: SITE.name,
        inLanguage: "fr-FR",
        description: SITE.baseline,
        publisher: { "@id": id },
      },
    ],
  };
  return <Json data={data} />;
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return <Json data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href,
    })),
  };
  return <Json data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  url,
  area,
  country,
}: {
  name: string;
  description: string;
  url: string;
  area?: string;
  country?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: "Convoyage automobile",
    provider: { "@id": `${SITE.origin}/#business` },
    areaServed:
      country && country !== "FR"
        ? { "@type": "Country", name: country }
        : { "@type": "City", name: area || "Quimper" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: "Fourchette indicative après coordonnées. Prix à confirmer.",
      },
    },
  };
  return <Json data={data} />;
}
