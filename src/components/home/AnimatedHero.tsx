"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkle, SealCheck, Info } from "@phosphor-icons/react";

interface HeroFlavor {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  image: string;
  notes: string[];
  specs: {
    gasVol: string;
    shelfLife: string;
    unitCost: string;
  };
}

const SIGNATURE_FLAVORS: HeroFlavor[] = [
  {
    id: "jeera",
    name: "Classic Jeera Masala",
    subtitle: "Roasted Cumin & Rock Salt Fizz",
    color: "#D97706",
    image: "/products/goli-jeera.webp",
    notes: ["Roasted Cumin", "Kala Namak", "Digestive Spices"],
    specs: { gasVol: "4.2 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.40" }
  },
  {
    id: "lemon",
    name: "Crisp Nimbu Lemon",
    subtitle: "Sun-Ripened Citrus Sparkle",
    color: "#CA8A04",
    image: "/products/goli-lemon.webp",
    notes: ["Citrus Zest", "Crisp Tartness", "Mineral Fizz"],
    specs: { gasVol: "4.0 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.35" }
  },
  {
    id: "blueberry",
    name: "Wild Blueberry",
    subtitle: "Contemporary Mountain Berry",
    color: "#2563EB",
    image: "/products/goli-blueberry.webp",
    notes: ["Wild Blueberry", "Smooth Sweetness", "Velvet Punch"],
    specs: { gasVol: "3.8 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.45" }
  },
  {
    id: "kachaaam",
    name: "Tangy Kacha Aam",
    subtitle: "Raw Mango Zing & Spice",
    color: "#059669",
    image: "/products/goli-kachaaam.webp",
    notes: ["Raw Mango", "Black Pepper", "Desi Masala"],
    specs: { gasVol: "4.1 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.40" }
  },
  {
    id: "redguava",
    name: "Spiced Red Guava",
    subtitle: "Tropical Pulpy Guava Chill",
    color: "#E11D48",
    image: "/products/goli-redguava.webp",
    notes: ["Ripe Pink Guava", "Chilli Pinch", "Aromatic Pulp"],
    specs: { gasVol: "3.9 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.45" }
  },
  {
    id: "pinklemon",
    name: "Fresh Pink Lemon",
    subtitle: "Summer Ruby Lime Refresh",
    color: "#DB2777",
    image: "/products/goli-pinklemon.webp",
    notes: ["Ruby Lime", "Sweet Citrus", "Crisp Finish"],
    specs: { gasVol: "4.0 Vol CO2", shelfLife: "6 Months", unitCost: "₹1.38" }
  }
];

export function AnimatedHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SIGNATURE_FLAVORS[activeIdx];

  return (
    <section className="relative min-h-[calc(100dvh-68px)] flex flex-col justify-between overflow-hidden bg-[#FBFBFA] pt-6 pb-10 sm:pt-10 sm:pb-12 border-b border-stone-200/80">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 grid-blueprint opacity-60 pointer-events-none" />

      {/* Chromatic ambient glow keyed to active bottle hue */}
      <div
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 opacity-25"
        style={{ backgroundColor: active.color }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Direct Architectural Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start bg-white border border-stone-200/90 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ESTD. 1979 · KASARAGOD, INDIA</span>
            </div>

            {/* 2. Headline (Strictly max 2 lines on desktop) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.06]">
              Original Indian Fizz.{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: active.color }}
              >
                High Profit Factory Setup.
              </span>
            </h1>

            {/* 3. Subtext (Strictly max 20 words) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[48ch]">
              Complete ready-to-run soda factory setup with 85% profit margin and ₹3 Lakh monthly earnings across 270+ running plants.
            </p>

            {/* 4. Action CTAs (Max 2 CTAs) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/franchise#apply"
                className="inline-flex items-center gap-2 bg-[#0E609C] hover:bg-[#0A2E4C] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get Factory Details</span>
                <ArrowRight size={16} weight="bold" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 px-6 py-3.5 rounded-full font-semibold text-sm shadow-2xs transition-colors active:scale-[0.98]"
              >
                <span>Explore All Flavours</span>
              </Link>
            </div>

            {/* Architectural Unit Economics Ledger */}
            <div className="pt-6 border-t border-stone-200/80 max-w-lg grid grid-cols-3 gap-6 font-mono">
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Full Setup</span>
                <span className="text-2xl font-bold text-slate-900 tracking-tight">₹11.9 Lakh</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Gross Margin</span>
                <span className="text-2xl font-bold text-slate-900 tracking-tight">85%</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Unit Cost</span>
                <span className="text-2xl font-bold text-[#0E609C] tracking-tight">{active.specs.unitCost}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Bottle Specimen Stage */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Specimen Pod Canvas */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] h-[400px] sm:h-[480px] flex items-center justify-center">
              
              {/* Radial Pedestal Shadow */}
              <div className="absolute bottom-4 w-64 sm:w-80 h-16 bg-slate-900/10 rounded-full blur-2xl transform scale-y-50" />
              <div className="absolute inset-x-12 bottom-8 h-2 bg-gradient-to-r from-transparent via-stone-300 to-transparent rounded-full opacity-60" />

              {/* Animated Bottle Specimen with Spring Physics */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.94 }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 22,
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-2xl"
                >
                  <div className="relative w-52 sm:w-64 h-[360px] sm:h-[440px]">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Technical Hotspot Callout (Top - Codd Neck Glass) */}
              <motion.div
                key={`callout-top-${active.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="hidden sm:flex absolute left-0 top-14 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md border border-stone-200/90 py-1.5 px-3 rounded-full shadow-sm text-xs font-mono text-slate-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Heavy Codd-Neck Glass</span>
              </motion.div>

              {/* Technical Hotspot Callout (Bottom - Marble Pressure Seal) */}
              <motion.div
                key={`callout-bot-${active.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="hidden sm:flex absolute right-0 bottom-20 z-20 flex-col gap-0.5 bg-white/95 backdrop-blur-md border border-stone-200/90 py-2 px-3 rounded-xl shadow-sm text-left font-mono"
              >
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">{active.specs.gasVol}</span>
                <span className="text-xs font-bold text-slate-900">{active.subtitle}</span>
              </motion.div>

            </div>

            {/* Interactive Tactile Flavour Selector */}
            <div className="w-full max-w-md mt-2">
              <div className="flex items-center justify-between mb-2.5 px-1 font-mono text-xs">
                <span className="text-slate-500">
                  SPECIMEN {activeIdx + 1} OF {SIGNATURE_FLAVORS.length}
                </span>
                <span className="font-semibold text-slate-800">
                  {active.name}
                </span>
              </div>

              {/* Touch Pill Switcher */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x">
                {SIGNATURE_FLAVORS.map((flavor, idx) => {
                  const isSelected = idx === activeIdx;
                  return (
                    <button
                      key={flavor.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`snap-start shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white shadow-xs scale-105"
                          : "bg-white text-slate-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: flavor.color }}
                      />
                      <span>{flavor.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
