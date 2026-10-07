import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle, Tag } from "@phosphor-icons/react/dist/ssr";

export function ProductUniverse() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#0E609C]/10 text-[#0E609C] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Tag size={14} weight="bold" />
              <span>Multi-Format Packaging Lines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              One Factory Setup. Six High-Margin Beverage Formats.
            </h2>
            <p className="text-slate-600 mt-2 text-base leading-relaxed">
              Standardized plant machinery engineered to produce across diverse price points from ₹10 street refreshers to premium retail cans.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E609C] hover:text-[#0A3B60] group self-start"
          >
            <span>View All 100+ Product Lines</span>
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid (5 purposeful cells with diverse visual backgrounds) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Cell 1 (8 cols): Classic Reusable Goli Soda */}
          <div className="md:col-span-7 lg:col-span-8 bg-gradient-to-br from-slate-900 via-[#0A3B60] to-slate-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative min-h-[380px] shadow-sm">
            <div className="relative z-10 max-w-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#EAB308] bg-[#EAB308]/20 px-2.5 py-1 rounded-full">
                Flagship Line • ₹10 MRP
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-3 text-white">
                Traditional Glass Goli Soda
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Classic marble-seal 200ml glass bottle with zero packaging waste, 100% circular returnability, and immense local margin retention.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-slate-200">
                  33+ Heritage Flavors
                </span>
                <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-slate-200">
                  High Repeat Rate
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <Link
                href="/products?category=reusable-glass"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EAB308] hover:underline"
              >
                <span>Browse Glass Flavors</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

            {/* Asset Graphic */}
            <div className="absolute right-[-10px] bottom-[-20px] sm:right-4 sm:bottom-0 w-64 sm:w-80 h-72 sm:h-96 pointer-events-none opacity-90">
              <Image
                src="/products/group-glass-bottles.webp"
                alt="Freshco Glass Bottles Lineup"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Bento Cell 2 (4 cols): Sleek Aluminum Cans */}
          <div className="md:col-span-5 lg:col-span-4 bg-gradient-to-br from-rose-50 via-pink-50/50 to-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-pink-100 relative min-h-[380px] overflow-hidden shadow-2xs">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-1 rounded-full">
                Retail Expansion • ₹35 MRP
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-3 text-slate-900">
                Sleek 250ml Cans
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Aseptic aluminum slim cans engineered for supermarkets, quick service chains, and transit retail with 12-month ambient shelf life.
              </p>
            </div>

            <div className="relative h-44 w-full my-3">
              <Image
                src="/products/can-01.webp"
                alt="Sleek Can"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="/products?category=cans"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:underline"
            >
              <span>Explore Canned Line</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Bento Cell 3 (4 cols): Single-Serve Tamper Glass */}
          <div className="md:col-span-4 bg-gradient-to-br from-amber-50 via-yellow-50/40 to-white rounded-2xl p-6 sm:p-7 border border-amber-200/60 flex flex-col justify-between relative min-h-[320px] shadow-2xs">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                Cafes & Events • ₹20 MRP
              </span>
              <h3 className="text-xl font-bold mt-3 text-slate-900">
                Crown Cap Single Glass
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Disposable non-returnable flint glass bottles for weddings, catering, and upscale restaurant tables.
              </p>
            </div>

            <div className="relative h-40 w-full my-2">
              <Image
                src="/products/single-glass-01.webp"
                alt="Single Serve Glass Bottle"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="/products?category=single-glass"
              className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
            >
              <span>View Specifications</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Bento Cell 4 (4 cols): PET Travel Bottles */}
          <div className="md:col-span-4 bg-gradient-to-br from-emerald-50 via-slate-50 to-white rounded-2xl p-6 sm:p-7 border border-emerald-100 flex flex-col justify-between relative min-h-[320px] shadow-2xs">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Highway & Transit • ₹20 MRP
              </span>
              <h3 className="text-xl font-bold mt-3 text-slate-900">
                High-Barrier PET Bottles
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                300ml lightweight bottles with carbonation-lock caps for highway dhabas and convenience stores.
              </p>
            </div>

            <div className="relative h-40 w-full my-2">
              <Image
                src="/products/pet-lahori-jeera.webp"
                alt="PET Travel Bottle"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="/products?category=pet-bottles"
              className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
            >
              <span>View PET Varieties</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Bento Cell 5 (4 cols): Chewable Jelly Drinks & Ice Pops */}
          <div className="md:col-span-4 bg-gradient-to-br from-cyan-50 via-blue-50/50 to-white rounded-2xl p-6 sm:p-7 border border-cyan-100 flex flex-col justify-between relative min-h-[320px] shadow-2xs">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100 px-2.5 py-1 rounded-full">
                Snacking Drinks • ₹10 - ₹25
              </span>
              <h3 className="text-xl font-bold mt-3 text-slate-900">
                Jelly Drinks & Ice Pops
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Innovative chewable fruit konjac pouches and multi-flavor freeze-and-snap ice pops for youth appeal.
              </p>
            </div>

            <div className="relative h-40 w-full my-2">
              <Image
                src="/products/jelly-passion-fruit.webp"
                alt="Jelly Drink"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="/products?category=jelly"
              className="text-xs font-semibold text-cyan-800 hover:underline inline-flex items-center gap-1"
            >
              <span>View Fruit Formats</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
