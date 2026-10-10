import Link from "next/link";
import { Check, ShieldCheck, Factory, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const PHASES = [
  {
    dayRange: "Days 1 to 3",
    title: "Facility Floor Plan & Power Verification",
    summary: "Our engineering team checks your 400 to 600 sq.ft room and provides a detailed layout for drainage, water connection, and 5 HP 3-phase electricity setup.",
    deliverables: [
      "Custom machine layout blueprint",
      "RO water filtration connection check",
      "Wash station and drainage routing"
    ]
  },
  {
    dayRange: "Days 4 to 7",
    title: "Machinery Dispatch & Factory Delivery",
    summary: "Direct dispatch of food-grade SS 304 semi-automatic soda machines, industrial water chiller, CO2 gas regulators, and syrup vessels from Kasaragod.",
    deliverables: [
      "SS 304 food-grade contact surfaces",
      "Industrial chiller (0°C to 4°C cooling)",
      "Pneumatic marble capping head"
    ]
  },
  {
    dayRange: "Days 8 to 11",
    title: "On-Site Erection & 7-Day Hands-on Training",
    summary: "Our senior factory technician stays at your facility to install equipment, calibrate carbonation pressure, and train operators in syrup mixing and bottle washing.",
    deliverables: [
      "Exact syrup and concentrate blending",
      "Machine operation and sanitization rules",
      "Gas pressure safety management"
    ]
  },
  {
    dayRange: "Days 12 to 14",
    title: "Commercial Bottling & District Supply",
    summary: "Begin daily commercial production of 3,500 to 5,000 bottles. Start distribution across local grocery stores, bakeries, tea shops, and event caterers.",
    deliverables: [
      "Branded crates and initial bottles included",
      "Exclusive district selling agreement",
      "Point-of-sale banners and posters"
    ]
  }
];

const FLOOR_ZONES = [
  { code: "ZONE A", name: "Bottle Washing & Sterilization", area: "120 sq.ft", desc: "Dual sink with high-pressure rotary spray" },
  { code: "ZONE B", name: "Chilling & Carbonation Unit", area: "150 sq.ft", desc: "0°C to 4°C cooling & CO2 gas absorption" },
  { code: "ZONE C", name: "Pneumatic Filling & Sealing", area: "130 sq.ft", desc: "4-head semi-automatic marble bottle filler" },
  { code: "ZONE D", name: "Crate Staging & Dispatch Bay", area: "150 sq.ft", desc: "Stacking for 300+ ready-to-deliver crates" }
];

export function FactoryProcess() {
  return (
    <section className="py-24 bg-[#FBFBFA] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            From Empty Room to Running Factory in 14 Days
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-[60ch]">
            A proven, step-by-step industrial setup executed across 270+ bottling units in India with hands-on technician training at your site.
          </p>
        </div>

        {/* 14-Day Timeline Phases (Horizontal architectural stepper) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PHASES.map((phase, idx) => (
            <div
              key={phase.dayRange}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <span className="text-[#0E609C] font-bold">PHASE 0{idx + 1}</span>
                  <span className="bg-stone-100 text-slate-700 px-2.5 py-0.5 rounded-full font-semibold">
                    {phase.dayRange}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {phase.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2 font-mono text-xs text-slate-700">
                {phase.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" weight="bold" />
                    <span className="text-[11px] font-sans leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Facility Architectural Blueprint (Zone map for 400-600 sq.ft room) */}
        <div className="bg-[#0B131E] text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 grid-blueprint-dark opacity-35 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#EAB308] block mb-1">
                FACILITY ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Recommended 400 to 600 sq.ft Factory Zoning
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>5 HP 3-Phase Power</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>RO Water Inflow</span>
              </span>
            </div>
          </div>

          {/* Blueprint Spatial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 relative z-10 font-mono">
            {FLOOR_ZONES.map((zone) => (
              <div
                key={zone.code}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#EAB308] mb-2 font-bold">
                    <span>{zone.code}</span>
                    <span className="text-slate-400 text-[10px]">{zone.area}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 font-sans">
                    {zone.name}
                  </div>
                  <div className="text-xs text-slate-400 font-sans leading-relaxed">
                    {zone.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plant Inspection Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" weight="bold" />
              <span>
                All equipment is ISO 22000 food safety compliant and covered by a 1-year factory replacement warranty.
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#EAB308] transition-colors shrink-0"
            >
              <span>Schedule Live Machine Demo at Kasaragod</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
