import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Service areas: Essex towns + surrounding regions for max local SEO ───────
const SERVICE_AREAS = [
  "Essex", "Chelmsford", "Southend-on-Sea", "Basildon", "Colchester",
  "Harlow", "Brentwood", "Romford", "Ilford", "Barking", "Dagenham",
  "Grays", "Thurrock", "Wickford", "Billericay", "Rayleigh", "Leigh-on-Sea",
  "Westcliff-on-Sea", "Canvey Island", "Benfleet", "Laindon", "Corringham",
  "Stanford-le-Hope", "Tilbury", "Purfleet", "Hornchurch", "Upminster",
  "Rainham", "Chigwell", "Loughton", "Epping", "Ongar", "Ingatestone",
  "Maldon", "Witham", "Braintree", "Halstead", "Saffron Walden",
  "Dunmow", "Clacton-on-Sea", "Frinton-on-Sea", "Walton-on-the-Naze",
  "Mersea Island", "Tiptree", "Hatfield Peverel", "Heybridge",
  "Burnham-on-Crouch", "Rochford", "Hockley", "Hawkwell", "Ashingdon",
  "East London", "North London", "South London", "West London",
  "Greater London", "Hertfordshire", "Suffolk", "Kent", "United Kingdom",
];

const KEYWORDS = [
  // CP12 / Gas Safety
  "landlord gas safety certificate Essex",
  "CP12 certificate Essex",
  "gas safety certificate Essex",
  "CP12 landlord certificate near me",
  "gas safety inspection Essex",
  "annual gas safety check Essex",
  "landlord CP12 Chelmsford",
  "landlord CP12 Basildon",
  "landlord CP12 Southend",
  "landlord CP12 Colchester",
  "landlord gas safety certificate London",

  // Boiler Servicing
  "boiler servicing Essex",
  "annual boiler service Essex",
  "boiler service near me Essex",
  "boiler service Chelmsford",
  "boiler service Basildon",
  "boiler service Southend",
  "boiler service Brentwood",
  "boiler service Romford",
  "boiler annual service UK",
  "gas boiler service Essex",

  // Boiler Breakdown
  "boiler breakdown Essex",
  "emergency boiler repair Essex",
  "boiler not working Essex",
  "boiler repair near me",
  "boiler repair Chelmsford",
  "boiler repair Basildon",
  "boiler repair Southend",
  "boiler repair Brentwood",
  "boiler repair Romford",
  "emergency heating repair Essex",
  "boiler breakdown repair UK",
  "24 hour boiler repair Essex",

  // Boiler Installation
  "boiler installation Essex",
  "new boiler Essex",
  "boiler supply and installation Essex",
  "boiler replacement Essex",
  "boiler installation Chelmsford",
  "boiler installation Basildon",
  "boiler installation Southend",
  "boiler installation Brentwood",
  "new boiler near me",
  "boiler replacement UK",
  "combi boiler installation Essex",

  // General
  "heating engineer Essex",
  "Gas Safe engineer Essex",
  "central heating Essex",
  "heating maintenance Essex",
  "gas engineer near me Essex",
  "gas engineer UK",
  "Mir Heating and Services",
  "Mir Heating Services Ltd Essex",
];

export const metadata: Metadata = {
  // ─── Base URL (required for all OG/Twitter image paths to resolve) ───────────
  metadataBase: new URL("https://www.mirheatingandservices.com"),

  title: {
    default: "Mir Heating & Services Ltd | Boiler & Gas Services Essex & UK",
    template: "%s | Mir Heating & Services Ltd",
  },

  description:
    "Mir Heating & Services Ltd – Gas Safe engineers in Essex. Landlord Gas Safety Certificates (CP12), Boiler Servicing, Boiler Breakdown Repairs & Boiler Supply and Installation across Essex, London & UK. Call: +44 7951 803179. Free quotes.",

  keywords: KEYWORDS,

  // ─── Canonical & hreflang ────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.mirheatingandservices.com",
    languages: {
      "en-GB": "https://www.mirheatingandservices.com",
    },
  },

  // ─── Open Graph – fixes site name shown in Google ────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.mirheatingandservices.com",
    siteName: "Mir Heating & Services Ltd",
    title: "Mir Heating & Services Ltd | Boiler & Gas Services Essex & UK",
    description:
      "Gas Safe engineers for CP12 Landlord Gas Safety Certificates, Boiler Servicing, Breakdown Repairs & New Boiler Installation across Essex and UK. Call +44 7951 803179.",
    images: [
      {
      url: "/og.png",       // Place a 1200×630px image in /public/og.png
        width: 1200,
        height: 630,
        alt: "Mir Heating & Services Ltd – Essex Boiler & Gas Experts",
      },
    ],
  },

  // ─── Twitter/X Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mir Heating & Services Ltd | Essex Boiler & Gas Services",
    description:
      "CP12 Gas Safety Certificates, Boiler Servicing, Breakdown Repairs & Installations across Essex & UK. Free quote – Call +44 7951 803179.",
    images: ["/og.png"],
  },

  // ─── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: "Mir Heating & Services Ltd",
  authors: [
    {
      name: "Mir Heating & Services Ltd",
      url: "https://www.mirheatingandservices.com",
    },
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Heating & Gas Services",
};

// ─── JSON-LD Structured Data (3 schemas for maximum Google rich results) ──────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 1. LocalBusiness ──────────────────────────────────────────────────────
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://www.mirheatingandservices.com/#business",
      name: "Mir Heating & Services Ltd",
      alternateName: "Mir Heating and Services",
      url: "https://www.mirheatingandservices.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mirheatingandservices.com/logo.png",
      },
      image: "https://www.mirheatingandservices.com/og.png",
      description:
        "Gas Safe registered engineers in Essex providing Landlord Gas Safety Certificates (CP12), Annual Boiler Servicing, Emergency Boiler Breakdown Repairs and Boiler Supply & Installation across Essex, London and the wider UK.",
      telephone: "+447951803179",
      hasMap: "https://maps.app.goo.gl/dQSbQF92UC2quEZi6",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Essex",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "51.5347",
        longitude: "0.7007",
      },
      areaServed: SERVICE_AREAS.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Gas & Heating Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Landlord Gas Safety Certificate (CP12)",
              alternateName: ["CP12", "Gas Safety Certificate", "Annual Gas Safety Check"],
              description:
                "Legally required annual gas safety inspection and CP12 certificate for landlords across Essex and UK. Issued by Gas Safe registered engineers.",
              areaServed: "Essex, London, United Kingdom",
              provider: { "@id": "https://www.mirheatingandservices.com/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Boiler Servicing & Annual Boiler Service",
              alternateName: ["Annual Boiler Service", "Gas Boiler Service", "Boiler Maintenance"],
              description:
                "Professional annual boiler servicing across Essex to keep your heating system safe, efficient and warranty-compliant.",
              areaServed: "Essex, London, United Kingdom",
              provider: { "@id": "https://www.mirheatingandservices.com/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Boiler Breakdown & Emergency Boiler Repair",
              alternateName: [
                "Emergency Boiler Repair",
                "Boiler Not Working",
                "Boiler Fault Repair",
                "24 Hour Boiler Repair",
              ],
              description:
                "Fast emergency boiler breakdown repair service across Essex and London. Gas Safe engineers available for urgent callouts.",
              areaServed: "Essex, London, United Kingdom",
              provider: { "@id": "https://www.mirheatingandservices.com/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Boiler Supply & Installation",
              alternateName: [
                "New Boiler Installation",
                "Boiler Replacement",
                "Combi Boiler Installation",
                "Boiler Fitting",
              ],
              description:
                "Supply and professional installation of new combi, system and conventional boilers across Essex and the UK. Free quotes available.",
              areaServed: "Essex, London, United Kingdom",
              provider: { "@id": "https://www.mirheatingandservices.com/#business" },
            },
          },
        ],
      },
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "14:00",
        },
      ],
      sameAs: [
        "https://maps.app.goo.gl/dQSbQF92UC2quEZi6",
        // Add your Checkatrade, TrustATrader, Facebook, Instagram URLs here
      ],
    },

    // ── 2. WebSite schema (enables Google Sitelinks search) ───────────────────
    {
      "@type": "WebSite",
      "@id": "https://www.mirheatingandservices.com/#website",
      url: "https://www.mirheatingandservices.com",
      name: "Mir Heating & Services Ltd",
      description: "Boiler & Gas Services across Essex and the UK",
      publisher: { "@id": "https://www.mirheatingandservices.com/#business" },
      inLanguage: "en-GB",
    },

    // ── 3. FAQPage schema (appears as rich results in Google/Bing) ────────────
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a CP12 Landlord Gas Safety Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A CP12 is the annual gas safety certificate required by UK law for all landlords. It confirms all gas appliances, fittings and flues in a rented property are safe. Mir Heating & Services Ltd provides CP12 certificates across Essex. Call +44 7951 803179.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a boiler service cost in Essex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mir Heating & Services Ltd offers competitive boiler servicing prices across Essex. Contact us on +44 7951 803179 for a free no-obligation quote tailored to your boiler type and location.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover emergency boiler breakdowns in Essex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mir Heating & Services Ltd provides emergency boiler breakdown repair services across Essex, East London and surrounding areas. Call +44 7951 803179 for a fast response.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas do Mir Heating & Services Ltd cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We cover all of Essex including Chelmsford, Basildon, Southend-on-Sea, Brentwood, Romford, Colchester, Harlow, Thurrock, Grays, Billericay, Rayleigh, and all surrounding towns. We also cover East London and can travel across the UK.",
          },
        },
        {
          "@type": "Question",
          name: "Are Mir Heating & Services Ltd Gas Safe registered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All our engineers are Gas Safe registered, which is a legal requirement to carry out gas work in the UK. You can verify our registration on the official Gas Safe Register website.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install new boilers in Essex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mir Heating & Services Ltd supplies and installs new combi boilers, system boilers and conventional boilers throughout Essex and London. Call +44 7951 803179 for a free installation quote.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* JSON-LD: LocalBusiness + WebSite + FAQ Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo meta tags – boost local search on Google, Bing & Apple Maps */}
        <meta name="geo.region" content="GB-ESS" />
        <meta name="geo.placename" content="Essex, United Kingdom" />
        <meta name="geo.position" content="51.5347;0.7007" />
        <meta name="ICBM" content="51.5347, 0.7007" />
        {/* General local signals */}
        <meta name="location" content="Essex, United Kingdom" />
        <meta name="coverage" content="United Kingdom" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="en-GB" />
        <meta name="copyright" content="Mir Heating & Services Ltd" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}