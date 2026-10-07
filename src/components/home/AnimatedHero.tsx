"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HERO_FLAVORS, ProductFlavor } from "@/data/products";
import { ArrowRight, Sparkle, ShieldCheck, Factory } from "@phosphor-icons/react";

export function AnimatedHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const activeFlavor = HERO_FLAVORS[activeIndex];

  // Auto rotate every 6 seconds unless user manually interacts
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_FLAVORS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleSelectFlavor = (index: number) => {
    setAutoRotate(false);
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-[calc(100dvh-68px)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white pt-6 pb-10 sm:pt-10 sm:pb-12">
      {/* Dynamic Ambient Glow matching the active bottle flavor */}
      <div
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700 opacity-30"
        style={{ backgroundColor: activeFlavor.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Focused B2B Value Proposition (Max 4 text elements per design-taste-frontend) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            
            {/* 1. Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 shadow-2xs">
              <Sparkle size={14} weight="fill" className="text-[#EAB308]" />
              <span>India&apos;s Fastest-Growing Micro-Factory Network</span>
            </div>

            {/* 2. Headline (Max 2 lines at desktop) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Tradition Bottled with{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: activeFlavor.accentColor }}
              >
                Industrial Precision.
              </span>
            </h1>

            {/* 3. Subtext (Max 20 words per design-taste-frontend rule) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[48ch]">
              Turnkey goli soda micro-factories offering 85% gross margins and ₹3 Lakh monthly profit across 270+ active plants.
            </p>

            {/* 4. Action CTAs (1 primary + 1 secondary) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/franchise#apply"
                className="inline-flex items-center gap-2 bg-[#0E609C] hover:bg-[#0A3B60] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Request Franchise Blueprint</span>
                <ArrowRight size={16} weight="bold" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-3.5 rounded-full font-semibold text-sm shadow-2xs transition-colors active:scale-[0.98]"
              >
                <span>Explore 100+ Flavors</span>
              </Link>
            </div>

            {/* Micro Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">₹11.9 Lakh</div>
                <div className="text-xs text-slate-500 font-medium">Turnkey Setup</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">85%</div>
                <div className="text-xs text-slate-500 font-medium">Gross Margin</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0E609C] tracking-tight">4 to 6 Mo.</div>
                <div className="text-xs text-slate-500 font-medium">Capital Payback</div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Product Stage */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Floating Stage Backdrop */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[380px] sm:h-[460px] flex items-center justify-center">
              
              {/* Radial Pod Pedestal */}
              <div className="absolute bottom-6 w-56 sm:w-72 h-14 bg-slate-900/10 rounded-full blur-xl transform scale-y-50" />
              <div className="absolute inset-x-8 bottom-10 h-2 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full opacity-60" />

              {/* Animated Bottle Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFlavor.id}
                  initial={{ opacity: 0, y: 30, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -25, scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 20,
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-2xl"
                >
                  <div className="relative w-48 sm:w-60 h-[340px] sm:h-[420px]">
                    <Image
                      src={activeFlavor.image}
                      alt={activeFlavor.name}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Taste Info Badge (Desktop) */}
              <motion.div
                key={`badge-${activeFlavor.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="hidden sm:flex absolute right-0 top-12 z-20 flex-col gap-1.5 bg-white/90 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-lg max-w-[170px]"
              >
                <div className="text-[11px] font-bold text-slate-900 tracking-tight">
                  {activeFlavor.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {activeFlavor.tagline}
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {activeFlavor.tasteNotes.slice(0, 2).map((note) => (
                    <span
                      key={note}
                      className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Volume & Bottle Specs Pill (Desktop) */}
              <div className="hidden sm:flex absolute left-0 bottom-16 z-20 items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/90 px-3.5 py-2 rounded-full shadow-md text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>200ml Marble Bottle</span>
              </div>
            </div>

            {/* Interactive Flavor Selector Carousel */}
            <div className="w-full max-w-md mt-4">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-semibold text-slate-500 tracking-wide">
                  Explore Signature Flavors ({activeIndex + 1}/{HERO_FLAVORS.length})
                </span>
                <span className="text-xs text-[#0E609C] font-medium">
                  {activeFlavor.name}
                </span>
              </div>

              {/* Touch Scrollable Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
                {HERO_FLAVORS.map((flavor, idx) => {
                  const isSelected = idx === activeIndex;
                  return (
                    <button
                      key={flavor.id}
                      onClick={() => handleSelectFlavor(idx)}
                      className={`snap-start shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-slate-900 text-white shadow-sm scale-105"
                          : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: flavor.accentColor }}
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
