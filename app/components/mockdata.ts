// ============================================================
// mockData.ts – Central static data for ALL sections & pages
// Place at: app/components/mockData.ts
// Import from here instead of any API fetch call
// ============================================================

// ─── HERO SECTION ────────────────────────────────────────────────────────────
export const heroImages: string[] = [
  "/client/one.jpeg",
  "/client/two.jpeg",
  "/client/three.jpeg",
];

// ─── SERVICES GRID (homepage cards) ──────────────────────────────────────────
export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  tagline: string;
  price: string;
  image_path: string;
  description: string;
  path: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Landlord Gas Safety",
    subtitle: "Certificate (CP12)",
    icon: "🔥",
    tagline: "Landlord & Homeowner Compliance",
    price: "60",
    image_path: "/client/new/gas1.jpeg",
    description:
      "Fully certified Gas Safe engineers carry out comprehensive inspections of all gas appliances, flues, and pipework. We issue same-day CP12 certificates for landlords, letting agents, and homeowners across Essex.",
    path: "/services/gas-services",
  },
  {
    id: 2,
    title: "Boiler Services",
    subtitle: "& Repair",
    icon: "🛠️",
    tagline: "All Makes & Models Covered",
    price: "75",
    image_path: "/client/new/heating1.jpeg",
    description:
      "From no-heat emergencies to annual servicing, our engineers diagnose and repair all major boiler brands. We carry common spare parts on every van for fast, first-visit fixes throughout Essex.",
    path: "/services/heating-services",
  },
  {
    id: 3,
    title: "Boiler Supply",
    subtitle: "& Installation",
    icon: "⚙️",
    tagline: "Worcester Bosch & Vaillant Approved",
    price: "1,500",
    image_path: "/client/new/heatingtwo.jpeg",
    description:
      "New boiler supply and full installation by Gas Safe registered engineers. We offer competitive quotes on Worcester Bosch, Vaillant, and Baxi systems with full manufacturer warranties and flexible finance options.",
    path: "/services/boiler-install",
  },
];

// ─── SERVICE PAGE DATA (used by the 3 individual service pages) ───────────────
export interface ServicePageData {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  tagline: string;
  hero_image: string;
}

export const servicePagesData: ServicePageData[] = [
  {
    id: "1",
    title: "Gas Safety",
    subtitle: "Certificate (CP12)",
    price: "60",
    tagline: "CERTIFIED GAS ENGINEERING",
    description:
      "Gas Safe registered inspections, leak detection, and emergency gas escape repairs. Professional CP12 certification for Essex landlords and homeowners.",
    hero_image: "/client/new/gas1.jpeg",
  },
  {
    id: "2",
    title: "Boiler Services",
    subtitle: "& Repair",
    price: "75",
    tagline: "ALL MAKES & MODELS COVERED",
    description:
      "From no-heat emergencies to annual servicing, our engineers diagnose and repair all major boiler brands. We carry common spare parts on every van for fast, first-visit fixes throughout Essex.",
    hero_image: "/client/new/heating1.jpeg",
  },
  {
    id: "3",
    title: "Boiler Supply",
    subtitle: "& Installation",
    price: "1,500",
    tagline: "PREMIUM COMBI UPGRADES",
    description:
      "Premium combi boiler supply and installation from leading manufacturers. Fully fitted by Gas Safe engineers with 10-year warranty options.",
    hero_image: "/client/new/heatingtwo.jpeg",
  },
];

// ─── PORTFOLIO / RECENT WORKS ─────────────────────────────────────────────────
export interface Project {
  id: string;
  tagline: string;
  location: string;
  category: string;
  sub_category: string;
  image_base64: string; // field name kept for DB compatibility
  created_at?: string;
}

export interface SubMap {
  [main: string]: { id: string; name: string }[];
}

export const portfolioProjects: Project[] = [
  // ── Gas Safety Certificate (CP12) ──
  {
    id: "p1",
    tagline: "Annual CP12 for 4-Bed HMO",
    location: "Chelmsford, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.27 AM (1).jpeg",
    created_at: "2024-11-10",
  },
  {
    id: "p2",
    tagline: "Landlord Certificate – Victorian Terrace",
    location: "Colchester, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.28 AM (2).jpeg",
    created_at: "2024-10-22",
  },
  {
    id: "p3",
    tagline: "Commercial Premises CP12 Inspection",
    location: "Brentwood, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.29 AM.jpeg",
    created_at: "2024-09-14",
  },
  {
    id: "p4",
    tagline: "Emergency CP12 – Same Day Issue",
    location: "Basildon, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.29 AM (1).jpeg",
    created_at: "2024-08-30",
  },
  {
    id: "p5",
    tagline: "New Tenancy CP12 – 3-Bed Semi",
    location: "Rayleigh, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.29 AM (2).jpeg",
    created_at: "2024-07-15",
  },
  {
    id: "p6",
    tagline: "Portfolio Inspection – 6 Properties",
    location: "Southend-on-Sea, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.29 AM (3).jpeg",
    created_at: "2024-06-20",
  },
  {
    id: "p7",
    tagline: "Central Heating CP12 Inspection",
    location: "Romford, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.31 AM.jpeg",
    created_at: "2024-05-12",
  },
  {
    id: "p8",
    tagline: "Gas Safe Hob Installation Certification",
    location: "Epping, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.37.31 AM (1).jpeg",
    created_at: "2024-04-02",
  },
  {
    id: "p9",
    tagline: "CP12 and Safety Test for Commercial Kitchen",
    location: "Brentwood, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM.jpeg",
    created_at: "2024-03-11",
  },
  {
    id: "p10",
    tagline: "Landlord Compliance 3-Bed House",
    location: "Harlow, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM (1).jpeg",
    created_at: "2024-02-19",
  },
  {
    id: "p11",
    tagline: "Gas Rate Check & CP12 Certificate",
    location: "Chelmsford, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM (2).jpeg",
    created_at: "2024-01-25",
  },
  {
    id: "p12",
    tagline: "Gas Safety Check – Flat 2A",
    location: "Grays, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (3).jpeg",
    created_at: "2025-01-05",
  },
  {
    id: "p13",
    tagline: "Safety Assessment – HMO Block",
    location: "Southend-on-Sea, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (4).jpeg",
    created_at: "2025-01-12",
  },
  {
    id: "p14",
    tagline: "Flue Analysis and CP12 Issue",
    location: "Basildon, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (5).jpeg",
    created_at: "2025-01-18",
  },
  {
    id: "p15",
    tagline: "Commercial Kitchen CP12 Check",
    location: "Colchester, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.11.34 AM (1).jpeg",
    created_at: "2025-01-22",
  },
  {
    id: "p16",
    tagline: "Annual Safety Record CP12",
    location: "Wickford, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.11.34 AM (2).jpeg",
    created_at: "2025-01-25",
  },
  {
    id: "p17",
    tagline: "Gas Safety Inspection For Retail Property",
    location: "Loughton, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.11.34 AM (3).jpeg",
    created_at: "2025-01-28",
  },

  // ── Boiler Services & Repair ──
  {
    id: "p18",
    tagline: "Worcester Bosch Fault Diagnosis & Fix",
    location: "Southend-on-Sea, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM (3).jpeg",
    created_at: "2024-11-02",
  },
  {
    id: "p19",
    tagline: "Annual Boiler Service & Safety Check",
    location: "Harlow, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM (4).jpeg",
    created_at: "2024-10-15",
  },
  {
    id: "p20",
    tagline: "Vaillant Pressure Loss – PCB Replaced",
    location: "Romford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.30 AM (5).jpeg",
    created_at: "2024-09-28",
  },
  {
    id: "p21",
    tagline: "Power Flush & Magnetic Filter Install",
    location: "Grays, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM.jpeg",
    created_at: "2024-08-11",
  },
  {
    id: "p22",
    tagline: "Baxi Boiler No Hot Water – Diverter Valve",
    location: "Loughton, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (1).jpeg",
    created_at: "2024-07-05",
  },
  {
    id: "p23",
    tagline: "Full System Health Check & Inhibitor Dose",
    location: "Wickford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (3).jpeg",
    created_at: "2024-06-18",
  },
  {
    id: "p24",
    tagline: "Heat Exchanger Cleans & Seals Check",
    location: "Chelmsford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (4).jpeg",
    created_at: "2024-05-22",
  },
  {
    id: "p25",
    tagline: "Boiler Repair – Leak Sealed & Repressurized",
    location: "Basildon, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (5).jpeg",
    created_at: "2024-04-12",
  },
  {
    id: "p26",
    tagline: "Gas Rate and Combustion Testing",
    location: "Brentwood, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (6).jpeg",
    created_at: "2024-03-09",
  },
  {
    id: "p27",
    tagline: "Ideal Logic Pressure Check",
    location: "Colchester, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (7).jpeg",
    created_at: "2024-02-18",
  },
  {
    id: "p28",
    tagline: "Diagnostic Check On Boiler Controls",
    location: "Southend-on-Sea, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.31 AM (8).jpeg",
    created_at: "2024-01-29",
  },
  {
    id: "p29",
    tagline: "System Maintenance – Filter Flush",
    location: "Chelmsford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (6).jpeg",
    created_at: "2025-01-10",
  },
  {
    id: "p30",
    tagline: "Repair – Replacing Burner Seals",
    location: "Billericay, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (7).jpeg",
    created_at: "2025-01-15",
  },
  {
    id: "p31",
    tagline: "Service – Flue Gas Analyzer Check",
    location: "Romford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.34 AM.jpeg",
    created_at: "2025-01-19",
  },
  {
    id: "p32",
    tagline: "Diagnosis of Fault Code F28",
    location: "Grays, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.34 AM (1).jpeg",
    created_at: "2025-01-23",
  },
  {
    id: "p33",
    tagline: "Combustion Analysis and Tune",
    location: "Basildon, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.34 AM (2).jpeg",
    created_at: "2025-01-26",
  },
  {
    id: "p34",
    tagline: "Annual Inspection and Service – 3 Bed",
    location: "Brentwood, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.34 AM (3).jpeg",
    created_at: "2025-01-29",
  },

  // ── Boiler Supply & Installation ──
  {
    id: "p35",
    tagline: "Worcester Bosch 4000 – Full Install",
    location: "Epping, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM.jpeg",
    created_at: "2024-11-18",
  },
  {
    id: "p36",
    tagline: "Combi Swap – Vaillant ecoTEC Plus",
    location: "Loughton, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (1).jpeg",
    created_at: "2024-10-05",
  },
  {
    id: "p37",
    tagline: "Back Boiler to Combi Conversion",
    location: "Wickford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (2).jpeg",
    created_at: "2024-09-19",
  },
  {
    id: "p38",
    tagline: "System Boiler with Unvented Cylinder",
    location: "Billericay, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (3).jpeg",
    created_at: "2024-07-23",
  },
  {
    id: "p39",
    tagline: "Ideal Logic Max – Complete Replacement",
    location: "Chelmsford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (4).jpeg",
    created_at: "2024-06-30",
  },
  {
    id: "p40",
    tagline: "New Build 4-Bed – Full Heating System",
    location: "Brentwood, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (5).jpeg",
    created_at: "2024-05-14",
  },
  {
    id: "p41",
    tagline: "Vaillant Combi Installation",
    location: "Colchester, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (6).jpeg",
    created_at: "2024-04-24",
  },
  {
    id: "p42",
    tagline: "System Conversion to Baxi Megaflo",
    location: "Romford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.32 AM (7).jpeg",
    created_at: "2024-03-14",
  },
  {
    id: "p43",
    tagline: "Worcester Greenstar 8000 Life Setup",
    location: "Chelmsford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM.jpeg",
    created_at: "2024-02-11",
  },
  {
    id: "p44",
    tagline: "New Combi Upgrade – 2 Bed",
    location: "Basildon, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (1).jpeg",
    created_at: "2024-01-21",
  },
  {
    id: "p45",
    tagline: "Complete Unvented System Install",
    location: "Southend-on-Sea, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.33 AM (2).jpeg",
    created_at: "2025-01-02",
  },
  {
    id: "p46",
    tagline: "Vaillant ecoTEC Plus Complete Fit",
    location: "Harlow, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/WhatsApp Image 2025-12-23 at 7.38.34 AM (4).jpeg",
    created_at: "2025-01-08",
  },
  {
    id: "p47",
    tagline: "Worcester Bosch 8000 Install – New Fit",
    location: "Chelmsford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.10.55 AM.jpeg",
    created_at: "2025-01-14",
  },
  {
    id: "p48",
    tagline: "Vaillant Replacement Package",
    location: "Epping, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.10.58 AM.jpeg",
    created_at: "2025-01-17",
  },
  {
    id: "p49",
    tagline: "Ideal Logic Conversion",
    location: "Loughton, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.11.01 AM.jpeg",
    created_at: "2025-01-21",
  },
  {
    id: "p50",
    tagline: "Full Central Heating System Setup",
    location: "Brentwood, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/client/new/WhatsApp Image 2026-01-15 at 12.11.03 AM.jpeg",
    created_at: "2025-01-24",
  },
];

// ─── SUB-CATEGORY MAP ─────────────────────────────────────────────────────────
export const portfolioSubMap: SubMap = {
  "Gas Safety Certificate (CP12)": [
    { id: "s1", name: "HMO Properties" },
    { id: "s2", name: "Residential Landlord" },
    { id: "s3", name: "Commercial" },
  ],
  "Boiler Services & Repair": [
    { id: "s4", name: "Boiler Repair" },
    { id: "s5", name: "Annual Service" },
    { id: "s6", name: "System Maintenance" },
  ],
  "Boiler Supply & Installation": [
    { id: "s7", name: "New Build Install" },
    { id: "s8", name: "Boiler Replacement" },
  ],
};