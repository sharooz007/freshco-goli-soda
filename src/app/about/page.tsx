import Image from "next/image";
import Link from "next/link";
import { 
  ClockCounterClockwise, 
  Bicycle, 
  Factory, 
  Medal, 
  GlobeHemisphereWest, 
  ShieldCheck, 
  CheckCircle,
  TreeEvergreen,
  UsersThree,
  ArrowRight
} from "@phosphor-icons/react/dist/ssr";

const TIMELINE = [
  {
    year: "1979",
    title: "Bicycle Deliveries & Humble Beginnings",
    description: "Started as a small local soda bottling workshop in northern Kerala. Fresh soda bottles were delivered daily to village tea stalls on bicycles."
  },
  {
    year: "1998",
    title: "First Marble Sealing Machines",
    description: "Developed our own air-operated marble bottle sealing machines, making bottling much faster and preventing bottle chipping and gas loss."
  },
  {
    year: "2016",
    title: "Complete Factory Franchise Model",
    description: "Designed our complete ready-to-run factory setup. Local entrepreneurs could now run their own profitable soda bottling units with company syrups and training."
  },
  {
    year: "2021",
    title: "100+ Flavours & New Packaging",
    description: "Expanded beyond classic Jeera and Nimbu into 33+ heritage flavours, aluminium cans, single-use glass bottles, and travel PET bottles."
  },
  {
    year: "2024",
    title: "India Excellence Award & Global Reach",
    description: "Won the India Excellence Award 2024 for Fastest Growing Beverage Brand. Crossed 270+ active plants across 19 states and 7 export countries."
  }
];

const VALUES = [
  {
    title: "Local Production",
    description: "Instead of transporting water thousands of kilometres from giant factories, local entrepreneurs bottle fresh soda right in their town.",
    icon: Factory
  },
  {
    title: "Reusable Glass Bottles",
    description: "Our traditional marble glass bottles are washed and reused up to 50 times, reducing plastic waste and giving the highest profit to shopkeepers.",
    icon: TreeEvergreen
  },
  {
    title: "Clean Quality Standards",
    description: "Certified under ISO 9001 and ISO 22000 food safety standards. Every syrup batch is tested for pure taste and hygiene.",
    icon: ShieldCheck
  },
  {
    title: "Full Partner Support",
    description: "We support our factory owners like family partners. Direct technician training, spare parts, and area rights are backed directly by our Kasaragod factory.",
    icon: UsersThree
  }
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-[#0A3B60] to-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ClockCounterClockwise size={14} weight="bold" />
            <span>Since 1979 in Kerala</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Over 45 Years of Soda Craft &amp; Innovation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From bicycle deliveries to tea shops in 1979 to over 270+ running soda factories across India today.
          </p>
        </div>
      </section>

      {/* Origin Story Split Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E609C] bg-[#0E609C]/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Empowering Local Business Owners with Proven Soda Factories
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional Indian Goli Soda has always been loved in every town: the sound of the marble popping, the cold fizzy burst, and the spicy kick of roasted jeera or tart lemon.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Earlier, roadside soda had cleanliness issues and uneven taste. Freshco solved this by introducing modern food-grade stainless steel machinery, clean water filtration, and certified hygienic syrups, while keeping the classic desi flavor 100% intact.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-slate-900">270+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Running Factories</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-slate-900">19</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">States Across India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-8 border border-slate-200 shadow-lg min-h-[420px] flex items-center justify-center">
                <div className="relative w-full h-80 sm:h-96">
                  <Image
                    src="/products/group-all-products.webp"
                    alt="Freshco Complete Product Family"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 45-Year Historical Milestones */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Journey of Growth
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A continuous story of machine improvement and factory expansion.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline node dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0E609C] ring-4 ring-white" />

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs max-w-2xl">
                  <span className="text-sm font-black text-[#0E609C] font-mono bg-blue-50 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2.5 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Bento */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              What We Stand For
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Committed to hygienic quality, green reusable bottles, and partner success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0E609C]/10 text-[#0E609C] flex items-center justify-center mb-5">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-[#0A3B60] to-[#0E609C] text-white rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-bold">Ready to start your own factory with Freshco?</h3>
              <p className="text-slate-200 text-sm max-w-lg">
                Join our 270+ factory owners across India and bring Freshco Goli Soda to your district.
              </p>
            </div>
            <Link
              href="/franchise"
              className="px-6 py-3.5 rounded-xl bg-[#EAB308] hover:bg-[#ca9a04] text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-sm"
            >
              View Factory Setup Details
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
