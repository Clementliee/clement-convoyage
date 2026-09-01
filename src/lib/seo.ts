import { SITE } from "@/lib/site";

export const STATIC_PATHS = [
  "/",
  "/prestations",
  "/convoyage",
  "/livraison-vehicule",
  "/nettoyage-vehicule",
  "/livraison-europe",
  "/traqueur-gps",
  "/securite-vehicule",
  "/coffrets-livraison",
  "/controle-vehicule",
  "/destinations",
  "/simulateur",
  "/professionnels",
  "/pack-mise-a-la-route",
  "/preparation-vehicule",
  "/protocole-clement",
  "/faq",
  "/blog",
  "/nettoyage-vehicule",
  "/livraison-europe",
  "/traqueur-gps",
  "/securite-vehicule",
  "/coffrets-livraison",
  "/controle-vehicule",
  "/destinations",
  "/simulateur",
  "/professionnels",
  "/pack-mise-a-la-route",
  "/preparation-vehicule",
  "/protocole-clement",
  "/faq",
  "/blog",
  "/a-propos",
  "/avis",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
] as const;

export function absUrl(path = "/") {
  if (!path || path === "/") return `${SITE.origin}/`;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absImage(src?: string) {
  if (!src) return `${SITE.origin}/og.jpg`;
  if (src.startsWith("http")) return src;
  return `${SITE.origin}${src.startsWith("/") ? src : `/${src}`}`;
}

export function pageHead({
  title,
  description,
  path,
  image,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}) {
  const url = absUrl(path);
  const img = absImage(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { name: "author", content: SITE.name },
      { name: "geo.region", content: "FR-29" },
      { name: "geo.placename", content: "Quimper" },
      { name: "geo.position", content: "47.996;-4.098" },
      { name: "ICBM", content: "47.996, -4.098" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:image", content: img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "fr", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
  };
}
