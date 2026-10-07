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
    name: "Small Factory Setup (Most Popular)",
    investment: "₹11.9 Lakhs",
    dailyCapacity: "3,000 to 5,000 Bottles",
    monthlyRevenueEst: "₹4.5 to ₹6.0 Lakhs",
    monthlyNetProfit: "Up to ₹3.0 Lakhs",
    spaceRequired: "400 - 600 sq.ft",
    powerRequired: "5 HP (Single or Three Phase)",
    idealFor: "District distributors, business owners in tier-2 and tier-3 towns, new entrepreneurs",
    features: [
      "Semi-automatic soda bottling machine",
      "Pneumatic marble bottle sealing fixture",
      "Syrup preparation tank and water chiller unit",
      "Food-grade SS 304 stainless steel pipes and filters",
      "Freshco brand name rights and exclusive area protection",
      "First batch of raw materials, syrups and glass crates included",
      "7-day direct training by our company technician at your factory",
      "Regular syrup and bottle refill supply from Kasaragod factory"
    ]
  },
  {
    id: "express",
    name: "Starter Bottling Unit",
    investment: "₹10.5 Lakhs",
    dailyCapacity: "2,000 to 3,000 Bottles",
    monthlyRevenueEst: "₹3.2 to ₹4.2 Lakhs",
    monthlyNetProfit: "₹1.8 to ₹2.2 Lakhs",
    spaceRequired: "300 - 450 sq.ft",
    powerRequired: "3 HP",
    idealFor: "City outskirts, small workshop owners, retail entrepreneurs",
    features: [
      "Compact motorized soda machine",
      "Easy-seal marble stopper unit",
      "SS 304 syrup mixing tank and cooling unit",
      "Brand permission and local promotional banners",
      "Starter batch of bottles and plastic crates",
      "Step-by-step recipe book and machine operating manual"
    ]
  },
  {
    id: "industrial",
    name: "High-Capacity Plant",
    investment: "₹18.5 Lakhs",
    dailyCapacity: "8,000 to 12,000 Bottles",
    monthlyRevenueEst: "₹10.0 to ₹14.0 Lakhs",
    monthlyNetProfit: "₹5.5 to ₹7.0 Lakhs",
    spaceRequired: "800 - 1,200 sq.ft",
    powerRequired: "10 HP (Three Phase)",
    idealFor: "Experienced wholesale distributors, multi-district beverage suppliers",
    features: [
      "Full automatic multi-head soda bottling plant",
      "Conveyor belt system with automatic capper",
      "Heavy-duty industrial cooling and chilling unit",
      "In-line automated pipe wash and cleaning system",
      "Exclusive rights for multiple talukas or districts",
      "Complete marketing support and retail shop display materials",
      "Direct bulk raw material dispatch at special factory rates"
    ]
  }
];

export const FRANCHISE_FAQ = [
  {
    question: "How soon can I recover my ₹11.9 Lakh investment?",
    answer: "When running at a normal daily production of 3,500 bottles and supplying to local tea shops and bakeries, factory owners make around 80% to 85% gross margin. Monthly net profit comes to around ₹2.5 to ₹3.0 Lakhs, which helps recover the full machinery investment within 4 to 6 months."
  },
  {
    question: "Do I need any previous experience in beverage manufacturing?",
    answer: "Not required at all. Freshco gives you a complete ready-to-run setup. Our company technician comes to your site, sets up the machine, teaches syrup mixing, bottle washing, gas filling, and gives 7 days of practical training to your operators."
  },
  {
    question: "Where do we get the syrups, bottles, and gas?",
    answer: "All ready-to-mix flavor syrups, standard food-grade CO2 guidance, traditional marble glass bottles, and branded crates are supplied on regular schedule directly from our main Kasaragod factory in Kerala."
  },
  {
    question: "What space and electricity are needed to start?",
    answer: "A simple clean room or shed of 400 to 600 square feet with clean running water and a 5 HP power connection (single phase or three phase) is enough to start production."
  },
  {
    question: "Will another person open a Freshco factory in my area?",
    answer: "No. Every approved factory agreement comes with clear pin-code or district-level area protection so your retail market and supply network remain yours."
  }
];

export const CERTIFICATIONS = [
  { name: "ISO 9001:2015", label: "Quality Certified" },
  { name: "ISO 22000:2018", label: "Food Safety Certified" },
  { name: "EIAC Accredited", label: "International Standards" },
  { name: "India Excellence Award", label: "Fastest Growing Brand 2024" },
  { name: "Registered Trademark", label: "Government of India Protected" }
];
