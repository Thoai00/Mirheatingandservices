export default function JsonLdSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "MIR Plumbing & Heating",
    "image": "https://mirplumbing.com/log.png",
    "description": "Top-rated UK Plumbing, Heating and Gas services. Specializing in boiler installation, emergency repairs, and central heating in Essex and London.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Industrial Park",
      "addressLocality": "Essex",
      "postalCode": "RM1 1AA",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.57,
      "longitude": 0.17
    },
    "url": "https://mirplumbing.com",
    "telephone": "+44123456789",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "London and Essex"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plumbing and Heating Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gas Boiler Installation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Central Heating Repairs"
                }
            }
        ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}