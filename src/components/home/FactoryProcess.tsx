import { 
  Compass, 
  GearSix, 
  GraduationCap, 
  RocketLaunch, 
  CheckCircle,
  Clock,
  ShieldCheck,
  Package
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Layout & Utility Planning",
    duration: "Days 1 to 3",
    description: "Our engineering team reviews your 400 to 600 sq.ft commercial space and designs an optimized workflow layout separating raw syrup blending, carbonation bottling, and crate staging.",
    icon: Compass,
    highlights: [
      "AutoCAD floor plan customization",
      "Power (5 HP) and water hookup verification",
      "Hygiene zoning and drainage planning"
    ]
  },
  {
    step: "02",
    title: "Machinery Delivery & Installation",
    duration: "Days 4 to 7",
    description: "Direct dispatch of food-grade SS 304 pneumatic bottling equipment, syrup preparation tanks, and industrial carbonation manifold from Kasaragod HQ directly to your facility.",
    icon: GearSix,
    highlights: [
      "Food-grade SS 304 contact components",
      "High-pressure carbonation manifold calibration",
      "Pneumatic marble-sealing assembly setup"
    ]
  },
  {
    step: "03",
    title: "Recipe Blending & Operator Training",
    duration: "Days 8 to 11",
    description: "7 days of hands-on technician training on your plant floor. Learn exact brix calibration, syrup emulsification, CO2 pressure equilibrium, and daily CIP cleaning protocols.",
    icon: GraduationCap,
    highlights: [
      "Master syrup dosing & brix measurement",
      "Pressure safety & valve maintenance",
      "Food safety hygiene log documentation"
    ]
  },
  {
    step: "04",
    title: "Commercial Launch & Distribution",
    duration: "Days 12 to 14",
    description: "Begin commercial bottling of 3,000 to 5,000 bottles daily. Roll out to regional tea shops, supermarkets, and catering networks under your exclusive territorial licensing.",
    icon: RocketLaunch,
    highlights: [
      "Branded crates & initial bottle allocation",
      "Territorial exclusivity activation",
      "Retail POP marketing collaterals provided"
    ]
  }
];

export function FactoryProcess() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E609C]/10 text-[#0E609C] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock size={14} weight="bold" />
            <span>Turnkey Execution Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            From Bare Site to Live Production in 14 Days
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A battle-tested deployment methodology proven across 270+ operating bottling facilities across India and overseas.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-[#0E609C]/20 font-mono">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-[#0E609C]/10 text-[#0E609C] flex items-center justify-center mb-4">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {step.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle size={14} weight="fill" className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={22} weight="bold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Food Safety Compliant</p>
                <p className="text-[11px] text-slate-500">ISO 22000:2018 Certified Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0E609C] flex items-center justify-center shrink-0">
                <Package size={22} weight="bold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Zero Supply Chain Bottlenecks</p>
                <p className="text-[11px] text-slate-500">Centralized flavor concentrates & glass supply</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/franchise"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0E609C] hover:bg-[#0A3B60] text-white text-sm font-semibold transition-colors shadow-sm"
            >
              Explore ₹11.9L Franchise Blueprint
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
