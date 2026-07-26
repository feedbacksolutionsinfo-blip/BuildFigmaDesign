import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://eaisy.hu";
export const SITE_NAME = "eaisy";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoProps {
  title: string;
  description: string;
  /** Path only, e.g. "/eaisy-bill" — canonical and og:url are derived from it. */
  path: string;
  ogImage?: string;
  ogType?: string;
  /** One or more JSON-LD objects to embed as structured data. */
  jsonLd?: Record<string, unknown>[];
}

export function Seo({ title, description, path, ogImage = DEFAULT_OG_IMAGE, ogType = "website", jsonLd = [] }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="hu_HU" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

/** Shared Organization schema — reference it from every page. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: "THINK AI Kft.",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: "hello@thinkai.hu",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "hu-HU",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function softwareAppSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "hu-HU",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "HUF",
      description: "Demó elérhető – kérj bemutatót!",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
