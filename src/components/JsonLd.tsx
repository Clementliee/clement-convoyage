import { SITE } from "@/lib/site";

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

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: SITE.name,
    description: SITE.baseline,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    image: "https://clement-convoyage.vercel.app/og.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quimper",
      addressRegion: "Bretagne",
      postalCode: "29000",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 47.996, longitude: -4.098 },
    areaServed: COUNTRIES.map((name) => ({ "@type": "Country", name })),
    openingHours: "Mo-Su 08:00-20:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de convoyage",
      itemListElement: [
        "Livraison de véhicule France",
        "Livraison de véhicule Europe",
        "Nettoyage avant remise",
        "Pose de traqueur GPS",
        "Protocole sécurité",
        "État des lieux photo",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
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
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
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
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
