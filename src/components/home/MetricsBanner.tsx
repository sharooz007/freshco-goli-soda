import { Factory, GlobeHemisphereWest, MapPinArea, Medal, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";

const STATS = [
  {
    icon: Factory,
    value: "270+",
    label: "Running Factories",
    subtext: "Across India and abroad"
  },
  {
    icon: MapPinArea,
    value: "19",
    label: "Indian States",
    subtext: "Strong supply network"
  },
  {
    icon: GlobeHemisphereWest,
    value: "7+",
    label: "Countries Exported",
    subtext: "UAE, Sri Lanka, Malaysia & more"
  },
  {
    icon: ClockCounterClockwise,
    value: "1979",
    label: "Operating Since",
    subtext: "Over 45 years of trust"
  },
  {
    icon: Medal,
    value: "Awarded",
    label: "India Excellence 2024",
    subtext: "Fastest-growing soda brand"
  }
];

export function MetricsBanner() {
  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-start ${
                  idx === STATS.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-[#EAB308]">
                  <Icon size={22} weight="duotone" />
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
