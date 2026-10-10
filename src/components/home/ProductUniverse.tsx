"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Package, Sparkle } from "@phosphor-icons/react";

interface BeverageFormat {
  id: string;
  name: string;
  mrp: string;
  unitCost: string;
  volume: string;
  shelfLife: string;
  packaging: string;
  outputRate: string;
  targetMarkets: string;
  image: string;
  description: string;
  highlights: string[];
}

const FORMATS: BeverageFormat[] = [
  {
    id: "goli-glass",
    name: "Traditional Marble Glass Goli Soda",
    mrp: "₹10 MRP",
    unitCost: "₹1.40",
    volume: "200ml",
    shelfLife: "6 Months",
    packaging: "Reusable Codd-Neck Glass",
    outputRate: "3,500 to 5,000 units / day",
    targetMarkets: "Tea stalls, local bakeries, grocery shops, dhabas",
    image: "/products/group-glass-bottles.webp",
    description: "The heartbeat of Indian street refreshment. Heavy reusable glass bottles with authentic marble pressure seal that drive high repeat sales and maximum profit for shopkeepers.",
    highlights: ["Highest daily repeating margin", "33+ Desi regional flavours", "100% reusable bottle cycle"]
  },
  {
    id: "aluminium-can",
    name: "Sleek 250ml Aluminium Slim Cans",
    mrp: "₹35 MRP",
    unitCost: "₹11.20",
    volume: "250ml",
    shelfLife: "12 Months",
    packaging: "Sealed Aluminium Can",
    outputRate: "2,400 to 4,000 units / day",
    targetMarkets: "Supermarkets, highway petrol cafes, modern bakeries, cinema kiosks",
    image: "/products/can-01.webp",
    description: "Premium beverage format for upscale urban retail. Tamper-evident aluminium cans with 12 months shelf life and modern aesthetic appeal.",
    highlights: ["12-month ambient shelf life", "Lightweight logistics and freight", "Modern urban shelf presence"]
  },
  {
    id: "crown-glass",
    name: "One-Time Use Crown Glass Bottles",
    mrp: "₹20 MRP",
    unitCost: "₹4.80",
    volume: "200ml",
    shelfLife: "9 Months",
    packaging: "Single-Serve Crown Sealed Flint Glass",
    outputRate: "3,000 to 4,500 units / day",
    targetMarkets: "Weddings, banquet catering, family restaurants, events",
    image: "/products/single-glass-01.webp",
    description: "Single-serve non-returnable glass bottles with airtight crown caps. Popular for banquet dining, marriage catering, and hotel beverage counters.",
    highlights: ["Zero bottle return tracking", "Clean tamper-evident seal", "High margin event supply"]
  },
  {
    id: "pet-bottles",
    name: "Heavy-Duty PET Travel Bottles",
    mrp: "₹20 MRP",
    unitCost: "₹4.20",
    volume: "300ml",
    shelfLife: "6 Months",
    packaging: "Carbonation-Retention PET Bottle",
    outputRate: "4,000 to 6,000 units / day",
    targetMarkets: "Bus stands, railway canteens, highway dhabas, tourist stops",
    image: "/products/pet-lahori-jeera.webp",
    description: "Durable on-the-go bottles with tight carbonation caps designed specifically for long-distance transport and fast highway sales.",
    highlights: ["Unbreakable transit packaging", "Ideal for transit travellers", "Strong gas retention caps"]
  },
  {
    id: "jelly-icepop",
    name: "Chewable Fruit Jelly Drinks & Ice Pops",
    mrp: "₹10 to ₹25",
    unitCost: "₹2.10",
    volume: "150ml",
    shelfLife: "6 Months",
    packaging: "Spouted Pouches & Tubes",
    outputRate: "3,000 to 5,000 units / day",
    targetMarkets: "School canteens, neighborhood kirana stores, summer kiosks",
    image: "/products/jelly-passion-fruit.webp",
    description: "Refreshing pulpy fruit pouches with chewable fruit jelly chunks and colorful summer ice pops that sell rapidly among youth.",
    highlights: ["Instant kid-appeal", "High impulse purchase volume", "Zero carbonation loss"]
  }
];

export function ProductUniverse() {
  const [activeTab, setActiveTab] = useState(0);
  const current = FORMATS[activeTab];

  return (
    <section className="py-24 bg-[#FBFBFA] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Clean vertical stack conforming to taste-skill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            One Factory Setup. Six Beverage Formats.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-[60ch]">
            Produce everything from ₹10 high-repeat daily street soda to modern supermarket slim cans on the same machine infrastructure.
          </p>
        </div>

        {/* Format Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-stone-200/90 snap-x">
          {FORMATS.map((format, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={format.id}
                onClick={() => setActiveTab(idx)}
                className={`snap-start shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#0A2E4C] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-stone-200 hover:border-stone-300"
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                <span>{format.name.split(" ")[0]} {format.name.split(" ")[1]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  isSelected ? "bg-white/20 text-white" : "bg-stone-100 text-slate-700"
                }`}>
                  {format.mrp}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Format Specimen Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs"
          >
            {/* Visual Specimen Display (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-[340px] sm:min-h-[400px] bg-stone-50/70 rounded-2xl p-6 border border-stone-100">
              <div className="absolute inset-0 grid-blueprint opacity-40 pointer-events-none rounded-2xl" />
              
              <div className="relative w-full h-[300px] sm:h-[360px] drop-shadow-xl z-10">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Float Tag */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm border border-stone-200 px-3 py-1 rounded-full text-xs font-mono font-semibold text-slate-800 shadow-2xs">
                {current.volume} · {current.packaging}
              </div>
            </div>

            {/* Technical Specification Matrix (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                  <span className="text-[#0E609C] font-semibold">{current.mrp}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-emerald-700 font-semibold">Unit Cost: {current.unitCost}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {current.name}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technical Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] text-slate-500 uppercase block">Daily Output</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">{current.outputRate}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] text-slate-500 uppercase block">Ambient Life</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">{current.shelfLife}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 uppercase block">Primary Market</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">{current.targetMarkets.split(",")[0]}</span>
                </div>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check size={11} weight="bold" />
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[#0E609C] hover:bg-[#0A2E4C] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-xs transition-colors"
                >
                  <span>Explore Flavour Range</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <Link
                  href="/franchise#apply"
                  className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-slate-800 px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  <span>Get Machine Specs for This Format</span>
                </Link>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
