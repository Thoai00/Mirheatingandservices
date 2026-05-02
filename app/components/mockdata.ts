// ============================================================
//  mockData.ts  –  Central static data for ALL sections & pages
//  Place at: src/data/mockData.ts
//  Import from here instead of any API fetch call
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
    title: "Gas Safety",
    subtitle: "Certificate (CP12)",
    icon: "🔥",
    tagline: "Landlord & Homeowner Compliance",
    price: "60",
    image_path: "/client/gas-safety.jpeg",
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
    image_path: "/client/boiler-repair.jpeg",
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
    image_path: "/client/boiler-install.jpeg",
    description:
      "New boiler supply and full installation by Gas Safe registered engineers. We offer competitive quotes on Worcester Bosch, Vaillant, and Baxi systems with full manufacturer warranties and flexible finance options.",
    path: "/services/boiler-install",
  },
];

// ─── SERVICE PAGE DATA (used by the 3 individual service pages) ───────────────
// Shape matches what the pages previously loaded from /api/services
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
    hero_image: "/client/gas-safety.jpeg",
  },
  {
    id: "2",
    title: "Boiler Services",
    subtitle: "& Repair",
    price: "75",
    tagline: "ALL MAKES & MODELS COVERED",
    description:
      "From no-heat emergencies to annual servicing, our engineers diagnose and repair all major boiler brands. We carry common spare parts on every van for fast, first-visit fixes throughout Essex.",
    hero_image: "/client/boiler-repair.jpeg",
  },
  {
    id: "3",
    title: "Boiler Supply",
    subtitle: "& Installation",
    price: "1,500",
    tagline: "PREMIUM COMBI UPGRADES",
    description:
      "Premium combi boiler supply and installation from leading manufacturers. Fully fitted by Gas Safe engineers with 10-year warranty options.",
    hero_image: "/uploads/1773847902662-two.jpeg",
  },
];

// ─── PORTFOLIO / RECENT WORKS ─────────────────────────────────────────────────
export interface Project {
  id: string;
  tagline: string;
  location: string;
  category: string;
  sub_category: string;
  image_base64: string; // field name kept for DB compatibility; holds a regular path
  created_at?: string;
}

export interface SubMap {
  [main: string]: { id: string; name: string }[];
}

export const portfolioProjects: Project[] = [

  // ── Gas Safety Certificate (CP12) ──────────────────────────────────────────
  {
    id: "p1",
    tagline: "Annual CP12 for 4-Bed HMO",
    location: "Chelmsford, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/portfolio/gas-safety-1.jpeg",
    created_at: "2024-11-10",
  },
  {
    id: "p2",
    tagline: "Landlord Certificate – Victorian Terrace",
    location: "Colchester, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/portfolio/gas-safety-2.jpeg",
    created_at: "2024-10-22",
  },
  {
    id: "p3",
    tagline: "Commercial Premises CP12 Inspection",
    location: "Brentwood, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/portfolio/gas-safety-3.jpeg",
    created_at: "2024-09-14",
  },
  {
    id: "p4",
    tagline: "Emergency CP12 – Same Day Issue",
    location: "Basildon, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "HMO Properties",
    image_base64: "/portfolio/gas-safety-4.jpeg",
    created_at: "2024-08-30",
  },
  {
    id: "p4b",
    tagline: "New Tenancy CP12 – 3-Bed Semi",
    location: "Rayleigh, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Residential Landlord",
    image_base64: "/portfolio/gas-safety-5.jpeg",
    created_at: "2024-07-15",
  },
  {
    id: "p4c",
    tagline: "Portfolio Inspection – 6 Properties",
    location: "Southend-on-Sea, Essex",
    category: "Gas Safety Certificate (CP12)",
    sub_category: "Commercial",
    image_base64: "/portfolio/gas-safety-6.jpeg",
    created_at: "2024-06-20",
  },

  // ── Boiler Services & Repair ────────────────────────────────────────────────
  {
    id: "p5",
    tagline: "Worcester Bosch Fault Diagnosis & Fix",
    location: "Southend-on-Sea, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/portfolio/boiler-repair-1.jpeg",
    created_at: "2024-11-02",
  },
  {
    id: "p6",
    tagline: "Annual Boiler Service & Safety Check",
    location: "Harlow, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Annual Service",
    image_base64: "/portfolio/boiler-repair-2.jpeg",
    created_at: "2024-10-15",
  },
  {
    id: "p7",
    tagline: "Vaillant Pressure Loss – PCB Replaced",
    location: "Romford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/portfolio/boiler-repair-3.jpeg",
    created_at: "2024-09-28",
  },
  {
    id: "p8",
    tagline: "Power Flush & Magnetic Filter Install",
    location: "Grays, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/portfolio/boiler-repair-4.jpeg",
    created_at: "2024-08-11",
  },
  {
    id: "p8b",
    tagline: "Baxi Boiler No Hot Water – Diverter Valve",
    location: "Loughton, Essex",
    category: "Boiler Services & Repair",
    sub_category: "Boiler Repair",
    image_base64: "/portfolio/boiler-repair-5.jpeg",
    created_at: "2024-07-05",
  },
  {
    id: "p8c",
    tagline: "Full System Health Check & Inhibitor Dose",
    location: "Wickford, Essex",
    category: "Boiler Services & Repair",
    sub_category: "System Maintenance",
    image_base64: "/portfolio/boiler-repair-6.jpeg",
    created_at: "2024-06-18",
  },

  // ── Boiler Supply & Installation ────────────────────────────────────────────
  {
    id: "p9",
    tagline: "Worcester Bosch 4000 – Full Install",
    location: "Epping, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/portfolio/boiler-install-1.jpeg",
    created_at: "2024-11-18",
  },
  {
    id: "p10",
    tagline: "Combi Swap – Vaillant ecoTEC Plus",
    location: "Loughton, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/portfolio/boiler-install-2.jpeg",
    created_at: "2024-10-05",
  },
  {
    id: "p11",
    tagline: "Back Boiler to Combi Conversion",
    location: "Wickford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/portfolio/boiler-install-3.jpeg",
    created_at: "2024-09-19",
  },
  {
    id: "p12",
    tagline: "System Boiler with Unvented Cylinder",
    location: "Billericay, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/portfolio/boiler-install-4.jpeg",
    created_at: "2024-07-23",
  },
  {
    id: "p12b",
    tagline: "Ideal Logic Max – Complete Replacement",
    location: "Chelmsford, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "Boiler Replacement",
    image_base64: "/portfolio/boiler-install-5.jpeg",
    created_at: "2024-06-30",
  },
  {
    id: "p12c",
    tagline: "New Build 4-Bed – Full Heating System",
    location: "Brentwood, Essex",
    category: "Boiler Supply & Installation",
    sub_category: "New Build Install",
    image_base64: "/portfolio/boiler-install-6.jpeg",
    created_at: "2024-05-14",
  },
];

// ─── SUB-CATEGORY MAP ─────────────────────────────────────────────────────────
// Keys MUST exactly match the `category` strings used in portfolioProjects above.
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