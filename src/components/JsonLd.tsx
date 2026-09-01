import { SITE } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.baseline,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quimper",
      addressRegion: "Bretagne",
      addressCountry: "FR",
    },
    areaServed: ["Bretagne", "France", "Europe"],
    openingHours: "Mo-Su 08:00-20:00",
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
