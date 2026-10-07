export interface FranchiseTier {
  id: string;
  name: string;
  investment: string;
  dailyCapacity: string;
  monthlyRevenueEst: string;
  monthlyNetProfit: string;
  spaceRequired: string;
  powerRequired: string;
  idealFor: string;
  features: string[];
}

export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    id: "standard",
    name: "Micro-Factory Unit (Most Popular)",
    investment: "₹11.9 Lakhs",
    dailyCapacity: "3,000 to 5,000 Bottles",
    monthlyRevenueEst: "₹4.5 to ₹6.0 Lakhs",
    monthlyNetProfit: "Up to ₹3.0 Lakhs",
    spaceRequired: "400 - 600 sq.ft",
    powerRequired: "5 HP (Single/Three Phase)",
    idealFor: "District distributors, tier-2/3 town entrepreneurs, food & beverage startups",
    features: [
      "Semi-automatic hygienic carbonation plant",
      "Pneumatic marble-sealing & capping machine",
      "Syrup preparation & chilling storage tanks",
      "Food-grade SS 304 plumbing and filtration",
      "Complete brand licensing & territorial exclusivity",
      "Initial batch raw materials, syrups & glass crates",
      "7-day on-site technical & operational training",
      "Live buy-back and inventory supply support"
    ]
  },
  {
    id: "express",
    name: "Compact Starter Bottling Unit",
    investment: "₹10.5 Lakhs",
    dailyCapacity: "2,000 to 3,000 Bottles",
    monthlyRevenueEst: "₹3.2 to ₹4.2 Lakhs",
    monthlyNetProfit: "₹1.8 to ₹2.2 Lakhs",
    spaceRequired: "300 - 450 sq.ft",
    powerRequired: "3 HP",
    idealFor: "Local city clusters, small manufacturing facilities, retail entrepreneurs",
    features: [
      "Compact motorized carbonation system",
      "Manual-assisted stopper sealing fixture",
      "Basic SS 304 syrup tanks & chiller",
      "Brand licensing & local marketing package",
      "Starter batch of bottles & crates",
      "Comprehensive digital recipe & operational manual"
    ]
  },
  {
    id: "industrial",
    name: "Commercial High-Output Plant",
    investment: "₹18.5 Lakhs",
    dailyCapacity: "8,000 to 12,000 Bottles",
    monthlyRevenueEst: "₹10.0 to ₹14.0 Lakhs",
    monthlyNetProfit: "₹5.5 to ₹7.0 Lakhs",
    spaceRequired: "800 - 1,200 sq.ft",
    powerRequired: "10 HP (Three Phase)",
    idealFor: "Regional FMCG distributors, multi-district beverage bottlers, institutional suppliers",
    features: [
      "Fully automated linear multi-head carbonator",
      "Dual rotary conveyor & high-speed capper",
      "Industrial glycol refrigeration system",
      "CIP (Clean-in-Place) automated sanitization loop",
      "Dedicated multi-district territorial rights",
      "Comprehensive corporate marketing & retail activation",
      "Priority raw material pricing & bulk supply direct from Kasaragod HQ"
    ]
  }
];

export const FRANCHISE_FAQ = [
  {
    question: "What is the exact ROI and payback timeline for a ₹11.9 Lakh setup?",
    answer: "With a standard production of 3,500 bottles/day and average local retail distribution, franchisees achieve net operational margins of 80% to 85%. At standard capacity, net monthly profits average ₹2.5 to ₹3.0 Lakhs, enabling full capital recovery within 4 to 6 months."
  },
  {
    question: "Do I need prior food or beverage manufacturing experience?",
    answer: "No. Freshco provides turnkey operational support. Our engineering team installs the machinery, provides pre-mixed standardized flavor concentrates, and delivers 7 days of on-site training covering machine maintenance, water filtration, recipe calibration, and hygiene protocols."
  },
  {
    question: "Where do we source the raw materials and unique bottles?",
    answer: "All proprietary flavor syrups, food-grade CO2 specifications, codd-neck glass bottles with marble stoppers, and branded distribution crates are supplied on a dedicated recurring schedule directly from our Kasaragod central logistics hub."
  },
  {
    question: "What space and utility requirements are necessary?",
    answer: "A clean commercial shed or ground-floor premises of 400 to 600 square feet is sufficient. The site requires potable running water supply and a 5 HP electricity connection (single phase or three phase)."
  },
  {
    question: "Is there territorial exclusivity for franchisees?",
    answer: "Yes. Every verified micro-factory agreement includes defined pin-code or district-level territorial exclusivity to protect your local distribution radius and retail partnerships."
  }
];

export const CERTIFICATIONS = [
  { name: "ISO 9001:2015", label: "Quality Management Certified" },
  { name: "ISO 22000:2018", label: "Food Safety Management System" },
  { name: "EIAC Accredited", label: "International Accreditation" },
  { name: "India Excellence Award", label: "Fastest Growing Brand 2024" },
  { name: "Trademark Registered", label: "Intellectual Property India" }
];
