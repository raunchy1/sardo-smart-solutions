import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ title, description, canonical, type = "website", image }: SEOProps) {
  const siteTitle = "Murgia F.lli – Expert City Arzana";
  const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Murgia F.lli – Expert City Arzana",
          "description": "Vendita, installazione e assistenza elettrodomestici in Sardegna",
          "telephone": "+393207690096",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Arzana",
            "addressRegion": "Sardegna",
            "addressCountry": "IT"
          }
        })}
      </script>
    </Helmet>
  );
}
