import { Factory, MapPinArea, ClockCounterClockwise, CurrencyInr, TrendUp } from "@phosphor-icons/react/dist/ssr";

const METRICS = [
  {
    idx: "01",
    label: "Running Factories",
    value: "270+",
    detail: "Active plants across India",
    icon: Factory,
  },
  {
    idx: "02",
    label: "Indian States",
    value: "19",
    detail: "Direct supply coverage",
    icon: MapPinArea,
  },
  {
    idx: "03",
    label: "Operating Since",
    value: "1979",
    detail: "45+ years of brewing trust",
    icon: ClockCounterClockwise,
  },
  {
    idx: "04",
    label: "Per-Bottle Cost",
    value: "₹1.40",
    detail: "Raw materials and power",
    icon: CurrencyInr,
  },
  {
    idx: "05",
    label: "Capital Recovery",
    value: "4 to 6 Mo.",
    detail: "Average plant breakeven",
    icon: TrendUp,
  },
];

export function MetricsBanner() {
  return (
    <section className="bg-[#0B131E] text-white border-y border-white/10 relative overflow-hidden">
      {/* Delicate blueprint grid */}
      <div className="absolute inset-0 grid-blueprint-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-6 sm:py-8">
          {METRICS.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.idx}
                className={`p-4 sm:px-6 flex flex-col justify-between ${
                  i === METRICS.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between text-slate-500 font-mono text-[10px] mb-3">
                  <span>INDEX {metric.idx}</span>
                  <Icon size={16} className="text-[#EAB308]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-tight text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
