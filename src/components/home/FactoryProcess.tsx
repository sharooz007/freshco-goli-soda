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
    title: "Room Setup & Floor Plan",
    duration: "Days 1 to 3",
    description: "Our technical team checks your 400 to 600 sq.ft room and provides an easy layout plan for bottle washing, syrup mixing, filling, and crate storage.",
    icon: Compass,
    highlights: [
      "Custom room layout plan",
      "Water and 5 HP electricity check",
      "Proper drainage and washing area"
    ]
  },
  {
    step: "02",
    title: "Machine Delivery & Fitting",
    duration: "Days 4 to 7",
    description: "Direct dispatch of food-grade SS 304 soda machines, cooling chiller, syrup tanks, and gas fittings from our Kasaragod factory right to your site.",
    icon: GearSix,
    highlights: [
      "Clean food-grade steel parts",
      "Accurate gas pressure regulators",
      "Marble bottle sealing assembly"
    ]
  },
  {
    step: "03",
    title: "Hands-on Practical Training",
    duration: "Days 8 to 11",
    description: "7 days of direct training by our technician at your plant. Learn syrup mixing, gas filling, bottle washing, and daily machine maintenance.",
    icon: GraduationCap,
    highlights: [
      "Learn exact syrup formulas",
      "Safe machine operating steps",
      "Daily hygiene and cleaning tips"
    ]
  },
  {
    step: "04",
    title: "Start Production & Supply",
    duration: "Days 12 to 14",
    description: "Start bottling 3,000 to 5,000 bottles every day. Start supplying to tea stalls, bakeries, grocery shops, and caterers in your exclusive area.",
    icon: RocketLaunch,
    highlights: [
      "Branded crates & initial bottles included",
      "Single-owner area selling rights",
      "Shop posters & marketing banners"
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
            <span>14-Day Setup Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            From Empty Room to Running Factory in 14 Days
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A simple step-by-step setup proven across 270+ soda factories in India.
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
                <p className="text-[11px] text-slate-500">ISO 22000 Certified Hygiene</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0E609C] flex items-center justify-center shrink-0">
                <Package size={22} weight="bold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Regular Raw Material Supply</p>
                <p className="text-[11px] text-slate-500">Direct syrup and bottle dispatch from Kasaragod</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/franchise"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0E609C] hover:bg-[#0A3B60] text-white text-sm font-semibold transition-colors shadow-sm"
            >
              View ₹11.9 Lakh Setup Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
