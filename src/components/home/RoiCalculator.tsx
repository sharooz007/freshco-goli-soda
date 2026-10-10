"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Check, CurrencyInr, ShieldCheck, TrendUp } from "@phosphor-icons/react";

export function RoiCalculator() {
  const [dailyBottles, setDailyBottles] = useState(3500);
  const [sellingPrice, setSellingPrice] = useState(6.5); // Factory supply rate to shops
  const unitCost = 1.40; // Raw material + power + direct labour

  const workingDays = 26;
  const monthlyBottles = dailyBottles * workingDays;
  const monthlyRevenue = monthlyBottles * sellingPrice;
  const monthlyDirectCost = monthlyBottles * unitCost;
  const monthlyOverhead = 45000; // Estimated 2 operators + factory shed electricity
  const monthlyNetProfit = Math.round(monthlyRevenue - monthlyDirectCost - monthlyOverhead);
  
  const setupCapital = 1190000; // ₹11.9 Lakhs
  const paybackMonths = monthlyNetProfit > 0 ? (setupCapital / monthlyNetProfit).toFixed(1) : "0";

  return (
    <section className="py-24 bg-white border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Vertical Stack conforming to taste-skill) */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Calculate Your Monthly Factory Income
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-[60ch]">
            Real per-bottle cost breakdown and net return projections based on verified performance across 270+ operating Indian bottling plants.
          </p>
        </div>

        {/* Financial Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Factory Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBFBFA] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-2xs space-y-8">
            
            {/* Slider 1: Daily Production Capacity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-900">
                  Daily Production Output
                </label>
                <span className="font-mono text-sm font-bold text-[#0E609C] bg-[#0E609C]/10 px-3 py-1 rounded-full">
                  {dailyBottles.toLocaleString()} bottles / day
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="8000"
                step="250"
                value={dailyBottles}
                onChange={(e) => setDailyBottles(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0E609C]"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono mt-2.5">
                <span>1,500 (Small batch)</span>
                <span>3,500 (Standard factory)</span>
                <span>8,000 (Two shift max)</span>
              </div>
            </div>

            {/* Slider 2: Wholesale Rate to Retailers */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-900">
                  Your Wholesale Price to Local Shops
                </label>
                <span className="font-mono text-sm font-bold text-[#0E609C] bg-[#0E609C]/10 px-3 py-1 rounded-full">
                  ₹{sellingPrice.toFixed(2)} / bottle (MRP ₹10.00)
                </span>
              </div>
              <input
                type="range"
                min="5.5"
                max="7.5"
                step="0.25"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0E609C]"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono mt-2.5">
                <span>₹5.50 (High-volume dealer rate)</span>
                <span>₹6.50 (Average market supply)</span>
                <span>₹7.50 (Direct retail drop)</span>
              </div>
            </div>

            {/* Per-Bottle Unit Cost Breakdown (Transparent Indian Economics) */}
            <div className="pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Transparent Per-Bottle Unit Cost Breakdown
                </span>
                <span className="font-mono text-xs font-bold text-slate-900">
                  Total: ₹1.40
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-slate-400 block">Sugar &amp; RO Water</span>
                  <span className="font-bold text-slate-900 block mt-0.5">₹0.45</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-slate-400 block">Flavour Concentrate</span>
                  <span className="font-bold text-slate-900 block mt-0.5">₹0.40</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-slate-400 block">CO2 Gas &amp; Seal</span>
                  <span className="font-bold text-slate-900 block mt-0.5">₹0.35</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-slate-400 block">Power &amp; Labour</span>
                  <span className="font-bold text-slate-900 block mt-0.5">₹0.20</span>
                </div>
              </div>
            </div>

            {/* Setup Inclusions Check */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3">
                Key Components Included in ₹11.9 Lakh Setup
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" weight="bold" />
                  <span>Semi-Automatic 4-Head Soda Bottling Unit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" weight="bold" />
                  <span>Pneumatic Codd-Neck Marble Sealing Head</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" weight="bold" />
                  <span>Industrial Chiller &amp; SS 304 Syrup Tanks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" weight="bold" />
                  <span>Single-Owner Area Exclusive Protection</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Financial Statement (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A2E4C] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-blueprint-dark opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-xs font-mono uppercase tracking-widest text-[#EAB308] mb-1">
                PROJECTED RETURNS
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Monthly Net Profit Statement
              </h3>
            </div>

            {/* Financial Output Blocks */}
            <div className="space-y-4 relative z-10 font-mono">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Monthly Volume (26 Days)</div>
                  <div className="text-xl font-bold text-white mt-0.5">
                    {monthlyBottles.toLocaleString()} units
                  </div>
                </div>
                <div className="text-xs text-[#EAB308] bg-[#EAB308]/20 px-2.5 py-1 rounded-full font-semibold">
                  Active Plant
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Estimated Net Profit / Month</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mt-0.5">
                    ₹{monthlyNetProfit.toLocaleString()}
                  </div>
                </div>
                <CurrencyInr size={32} className="text-emerald-400" />
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Capital Recovery Horizon</div>
                  <div className="text-2xl font-bold text-[#EAB308] mt-0.5">
                    {paybackMonths} Months
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-300">
                  On ₹11.9L Capital
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-2 space-y-3">
              <Link
                href="/franchise#apply"
                className="w-full flex items-center justify-center gap-2 bg-[#EAB308] hover:bg-[#ca9a07] text-slate-900 font-bold py-4 px-6 rounded-2xl text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Download Factory Project Report</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <p className="text-[11px] text-slate-400 text-center font-mono">
                Calculated on ₹1.40 production cost &amp; ₹45,000 monthly overheads.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
