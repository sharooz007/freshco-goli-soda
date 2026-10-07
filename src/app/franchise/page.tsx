"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { FRANCHISE_TIERS, FRANCHISE_FAQ, CERTIFICATIONS } from "@/data/franchise";
import { 
  Factory, 
  CurrencyInr, 
  CheckCircle, 
  Lightning, 
  HouseLine, 
  ShieldCheck, 
  PhoneCall, 
  WhatsappLogo, 
  CaretDown, 
  CaretUp,
  GearSix,
  ChartBar,
  Drop,
  Sparkle,
  ArrowRight
} from "@phosphor-icons/react";

export default function FranchisePage() {
  const [selectedTier, setSelectedTier] = useState("standard");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inquiry form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    district: "",
    space: "400-600",
    investment: "11.9L",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0E609C", "#EAB308", "#10B981"]
        });
      } catch {}
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-[#0A3B60] to-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Factory size={14} weight="bold" />
            <span>Soda Factory Franchise Setup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Start Your Own Soda Bottling Factory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Own a modern food-grade soda bottling plant with 85% profit margin. Complete machinery, flavor syrups, formulas, and technician training starting at ₹11.9 Lakhs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#investment-tiers"
              className="px-6 py-3 rounded-full bg-[#EAB308] hover:bg-[#ca9a04] text-slate-950 text-xs font-bold transition-colors shadow-sm"
            >
              Compare Factory Models
            </a>
            <a
              href="#unit-economics"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 transition-colors"
            >
              Per Bottle Cost (₹1.40 Cost)
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} weight="duotone" className="text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">ISO 9001 &amp; ISO 22000 Certified</p>
                <p className="text-[11px] text-slate-500">Food Safety &amp; Machine Standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Factory size={28} weight="duotone" className="text-[#0E609C] shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">270+ Running Factories</p>
                <p className="text-[11px] text-slate-500">Active across 19 Indian states &amp; 7 countries</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sparkle size={28} weight="duotone" className="text-[#EAB308] shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Protected Area Rights</p>
                <p className="text-[11px] text-slate-500">Single owner territory in your district</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers Comparison */}
      <section id="investment-tiers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple &amp; Transparent Setup Packages
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every package includes semi-automatic soda machines, food-grade SS 304 pipes, on-site technician training, and standard syrup formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {FRANCHISE_TIERS.map((tier) => {
              const isPopular = tier.id === "standard";
              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "bg-white border-2 border-[#0E609C] shadow-xl ring-4 ring-[#0E609C]/10"
                      : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E609C] text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      Most Popular Factory Model
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 min-h-[32px]">
                      {tier.idealFor}
                    </p>

                    {/* Capital Investment */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
                      <div className="text-xs text-slate-500 font-medium">Full Setup Cost</div>
                      <div className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">
                        {tier.investment}
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <CheckCircle size={13} weight="fill" />
                        <span>Expected Monthly Net Profit: {tier.monthlyNetProfit}</span>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="space-y-2.5 text-xs text-slate-600 border-b border-slate-100 pb-5 mb-5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Daily Production:</span>
                        <span className="font-semibold text-slate-800">{tier.dailyCapacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Room Space Needed:</span>
                        <span className="font-semibold text-slate-800">{tier.spaceRequired}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Electricity Connection:</span>
                        <span className="font-semibold text-slate-800">{tier.powerRequired}</span>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        What You Get in This Package:
                      </div>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle size={15} weight="fill" className="text-[#0E609C] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#apply"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-colors block cursor-pointer ${
                      isPopular
                        ? "bg-[#0E609C] hover:bg-[#0A3B60] text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    Select {tier.name.split(" ")[0]} Model
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unit Economics Deep Dive */}
      <section id="unit-economics" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <ChartBar size={14} weight="bold" />
              <span>Bottle Cost Calculation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Goli Soda Gives 80% to 85% Profit Margin
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Because traditional glass bottles are washed and reused again and again, you do not spend money on fresh plastic bottles every time. This creates very high profit for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            {/* Cost 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Syrup &amp; Flavour Concentrate</div>
              <div className="text-3xl font-bold text-slate-900 mt-2 font-mono">₹0.55</div>
              <p className="text-xs text-slate-500 mt-1">Ready syrup supplied from Kasaragod factory</p>
            </div>

            {/* Cost 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sugar, Water &amp; Food CO2 Gas</div>
              <div className="text-3xl font-bold text-slate-900 mt-2 font-mono">₹0.65</div>
              <p className="text-xs text-slate-500 mt-1">Sugar syrup mixing and chilled carbonation</p>
            </div>

            {/* Cost 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Electricity &amp; Worker Wages</div>
              <div className="text-3xl font-bold text-slate-900 mt-2 font-mono">₹0.20</div>
              <p className="text-xs text-slate-500 mt-1">Daily machine running and operator labor</p>
            </div>

            {/* Total Cost Card */}
            <div className="p-6 rounded-2xl bg-[#0E609C] text-white text-center shadow-md">
              <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider">Total Making Cost Per Bottle</div>
              <div className="text-3xl font-extrabold text-white mt-2 font-mono">₹1.40</div>
              <p className="text-xs text-sky-100 mt-1">Sold to local shops at ₹6.00 to ₹7.00</p>
            </div>

          </div>

          {/* Economics Summary Strip */}
          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-amber-950">Daily Profit Calculation (3,500 Bottles @ ₹5.10 Net Margin)</p>
              <p className="text-xs text-amber-800 mt-0.5">
                Generates ₹17,850 Daily Net Profit. In 25 working days = ₹4.46 Lakhs monthly gross earnings!
              </p>
            </div>
            <a
              href="#apply"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-colors"
            >
              Get Profit Chart
            </a>
          </div>

        </div>
      </section>

      {/* Machinery Anatomy Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0E609C]/10 text-[#0E609C] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <GearSix size={14} weight="bold" />
              <span>Machines Included</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Industrial Quality Bottling Machines
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Heavy-duty stainless steel machines built for Indian conditions. Easy to operate and maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Semi-Automatic Marble Soda Filling Head</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pneumatic marble-sealing head designed to safely lock the internal marble stopper without bottle chipping or gas leakage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Water Chiller &amp; Cooling Unit (2 to 4°C)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maintains water chilled at 2 to 4°C. Chilled water dissolves CO2 deeply to give sharp, long-lasting fizz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">SS 304 Stainless Steel Syrup Mixing Tanks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Food-grade stainless steel tanks with electric motor stirrers for mixing sugar syrup, citric balance, and flavour syrups evenly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">High-Pressure Soda Gas Manifold</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy-duty safety valves and food-grade stainless steel braided pipes that inject high gas pressure safely for signature fizz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                05
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Multi-Stage Water Filter Unit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Micron particle filters and activated carbon beds remove all chlorine, dirt, and odor to keep water pure and crystal clear.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center font-bold text-sm mb-4">
                06
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Glass Bottles &amp; Plastic Crates Float</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Includes new food-safe marble glass bottles and heavy-duty plastic stacking crates ready for local shop delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Clear facts regarding investment, plant setup, territory protection, and ongoing operation.
            </p>
          </div>

          <div className="space-y-4">
            {FRANCHISE_FAQ.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <CaretUp size={18} className="text-[#0E609C] shrink-0" />
                    ) : (
                      <CaretDown size={18} className="text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Application Form Section */}
      <section id="apply" className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <CurrencyInr size={14} weight="bold" />
              <span>Direct Factory Allocation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Apply for Factory Rights in Your District
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">
              Submit your district inquiry below. Our team will verify territory availability and contact you with full project details.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={36} weight="fill" />
                </div>
                <h3 className="text-2xl font-bold">Application Received Successfully</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{applicant.name || "Partner"}</span>. Our expansion manager will check area availability for <span className="font-semibold text-slate-900">{applicant.district || "your target region"}</span> and contact you shortly.
                </p>
                <div className="pt-3">
                  <a
                    href={`https://wa.me/919659100500?text=Hi%20Freshco,%20I%20applied%20for%20a%20factory%20unit%20for%20${encodeURIComponent(applicant.district || "my district")}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:bg-[#20ba59] transition-colors"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      placeholder="e.g. Suresh Nair"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target District &amp; State *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.district}
                      onChange={(e) => setApplicant({ ...applicant, district: e.target.value })}
                      placeholder="e.g. Madurai, Tamil Nadu"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Investment Setup
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50"
                    >
                      <option value="standard">Standard Soda Factory (₹11.9 Lakhs) - Most Popular</option>
                      <option value="express">Starter Bottling Unit (₹10.5 Lakhs)</option>
                      <option value="industrial">High-Capacity Plant (₹18.5 Lakhs)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0E609C] hover:bg-[#0A3B60] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? "Submitting Application..." : "Submit Factory Application"}
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500 pt-1">
                  Confidential evaluation. We do not sell or share contact details.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
