"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CurrencyInr, ChartLineUp, ShieldCheck } from "@phosphor-icons/react";

export function RoiCalculator() {
  const [dailyBottles, setDailyBottles] = useState(3500);
  const [netMarginPerBottle, setNetMarginPerBottle] = useState(3.2);

  const workingDays = 26;
  const monthlyVolume = dailyBottles * workingDays;
  const monthlyGrossRevenue = monthlyVolume * 10; // ₹10 MRP baseline
  const estimatedOperatingCost = 75000; // Power, labor, packaging overhead
  const monthlyNetProfit = Math.round(monthlyVolume * netMarginPerBottle - estimatedOperatingCost);
  const investment = 1190000; // ₹11.9 Lakhs
  const paybackMonths = monthlyNetProfit > 0 ? (investment / monthlyNetProfit).toFixed(1) : "0";

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0E609C]/10 text-[#0E609C] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Calculator size={14} weight="bold" />
            <span>Plant Investment Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Calculate Your Micro-Factory Returns
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Model your projected monthly cash flow and capital recovery based on local retail demand.
          </p>
        </div>

        {/* Interactive Calculator Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-8">
            
            {/* Slider 1: Daily Production */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-800">
                  Target Daily Bottling Capacity
                </label>
                <span className="text-base font-bold text-[#0E609C] bg-[#0E609C]/10 px-3 py-1 rounded-full">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E609C]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>1,500 (Single Shift)</span>
                <span>4,000 (Standard Setup)</span>
                <span>8,000 (Double Shift)</span>
              </div>
            </div>

            {/* Slider 2: Average Net Margin per Bottle */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-800">
                  Net Operator Margin per Bottle
                </label>
                <span className="text-base font-bold text-[#0E609C] bg-[#0E609C]/10 px-3 py-1 rounded-full">
                  ₹{netMarginPerBottle.toFixed(2)} / bottle
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={netMarginPerBottle}
                onChange={(e) => setNetMarginPerBottle(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E609C]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>₹2.00 (High Volume Wholesale)</span>
                <span>₹3.20 (Standard Mixed Route)</span>
                <span>₹4.50 (Direct Retail Accounts)</span>
              </div>
            </div>

            {/* Turnkey Inclusions Pill List */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Turnkey Package Inclusions (₹11.9 Lakh Setup)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>Semi-Automatic Carbonation Unit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>Pneumatic Stopper Fixtures</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>SS 304 Syrup Tanks & Chiller</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>Exclusive Pin-Code Licensing</span>
                </div>
              </div>
            </div>

          </div>

          {/* Projection Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A3B60] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#EAB308]">
                Financial Projections
              </span>
              <h3 className="text-2xl font-bold mt-1 text-white">
                Investment Recovery Model
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Monthly Volume</div>
                  <div className="text-xl font-bold text-white mt-0.5">
                    {monthlyVolume.toLocaleString()} bottles
                  </div>
                </div>
                <ChartLineUp size={28} className="text-[#EAB308]" />
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Estimated Monthly Net Profit</div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                    ₹{monthlyNetProfit.toLocaleString()}
                  </div>
                </div>
                <CurrencyInr size={28} className="text-emerald-400" />
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Projected Capital Recovery</div>
                  <div className="text-2xl font-extrabold text-[#EAB308] mt-0.5">
                    {paybackMonths} Months
                  </div>
                </div>
                <div className="text-right text-xs text-slate-300">
                  Against ₹11.9L CapEx
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/franchise#apply"
                className="w-full flex items-center justify-center gap-2 bg-[#EAB308] hover:bg-[#ca9a07] text-slate-900 font-bold py-3.5 px-6 rounded-full text-sm shadow-md transition-colors active:scale-[0.98]"
              >
                <span>Request Detailed Plant Prospectus</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <p className="text-[11px] text-slate-400 text-center mt-3">
                Calculations based on 26 operational days per month and audited factory benchmark data.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
