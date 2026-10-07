"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_PRODUCTS, ProductFlavor } from "@/data/products";
import { 
  MagnifyingGlass, 
  Tag, 
  Package, 
  Sparkle, 
  CheckCircle,
  Truck,
  ArrowRight,
  PhoneCall,
  WhatsappLogo,
  CaretRight
} from "@phosphor-icons/react";

const CATEGORIES = [
  { id: "all", label: "All Formats" },
  { id: "reusable-glass", label: "Reusable Glass (₹10)" },
  { id: "cans", label: "Sleek Cans (₹35)" },
  { id: "single-glass", label: "Single-Serve Glass (₹20)" },
  { id: "pet-bottles", label: "PET Travel Bottles (₹20)" },
  { id: "jelly-icepop", label: "Jelly & Ice Pops" },
  { id: "energy", label: "Energy & Juices" },
];

const PACKAGING_SPECS = [
  {
    format: "Traditional Reusable Glass (Codd Neck)",
    volume: "200ml",
    casePack: "24 Bottles / Plastic Crate",
    shelfLife: "90 Days (Returnable)",
    moq: "50 Crates (1,200 bottles)",
    bestFor: "Local retail, tea shops, bakeries, street dhabas"
  },
  {
    format: "Sleek Aluminum Slim Can",
    volume: "250ml",
    casePack: "24 Cans / Corrugated Carton",
    shelfLife: "12 Months (Aseptic)",
    moq: "100 Cartons (2,400 cans)",
    bestFor: "Modern retail, QSR chains, supermarkets, export"
  },
  {
    format: "Single-Serve Crown Cap Flint Glass",
    volume: "200ml",
    casePack: "24 Bottles / Heavy Carton",
    shelfLife: "6 Months (One-way)",
    moq: "60 Cartons (1,440 bottles)",
    bestFor: "Catering, wedding banquets, luxury cafes, dining"
  },
  {
    format: "High-Barrier PET Bottle",
    volume: "300ml",
    casePack: "30 Bottles / Shrink Wrap Pack",
    shelfLife: "6 Months",
    moq: "50 Shrink Packs (1,500 bottles)",
    bestFor: "Highway food courts, transit kiosks, grocery"
  },
  {
    format: "Stand-Up Spout Jelly Pouch",
    volume: "180ml",
    casePack: "40 Pouches / Display Box",
    shelfLife: "9 Months",
    moq: "40 Boxes (1,600 pouches)",
    bestFor: "School canteens, confectionery stores, supermarkets"
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductFlavor | null>(null);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Category match
      let matchCat = true;
      if (selectedCategory === "all") {
        matchCat = true;
      } else if (selectedCategory === "jelly-icepop") {
        matchCat = product.category === "jelly" || product.category === "icepop";
      } else if (selectedCategory === "energy") {
        matchCat = product.category === "energy" || product.category === "juices";
      } else {
        matchCat = product.category === selectedCategory;
      }

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tasteNotes.some((n) => n.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-900 via-[#0A3B60] to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Package size={14} weight="bold" />
            <span>Commercial Beverage Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            100+ Heritage &amp; Contemporary Flavors
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineered for high profitability across all consumer price points. Explore our full catalog of reusable codd-neck bottles, sleek retail cans, and travel-ready PET lines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#packaging-matrix"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 transition-colors"
            >
              Wholesale Case Pack Specs
            </a>
            <Link
              href="/franchise"
              className="px-5 py-2.5 rounded-full bg-[#EAB308] hover:bg-[#ca9a04] text-slate-950 text-xs font-bold transition-colors"
            >
              Set Up A Bottling Factory
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Filters */}
      <section className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills (Horizontal scrollable) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0E609C] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search flavor or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent text-slate-800"
              />
              <MagnifyingGlass
                size={16}
                className="absolute left-3 top-2.5 text-slate-400 pointer-events-none"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Result Counter */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/80">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Showing {filteredProducts.length} Beverage Formats
            </p>
            <p className="text-xs text-slate-500 hidden sm:block">
              All recipes verified under ISO 22000:2018 food safety standards
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-base text-slate-600 font-semibold">No beverage matches found</p>
              <p className="text-xs text-slate-400 mt-1">Try clearing your search terms or picking another category.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image Stage */}
                  <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                    
                    {/* Subtle aura behind bottle */}
                    <div
                      className="absolute inset-x-8 inset-y-6 rounded-full blur-2xl opacity-20 pointer-events-none"
                      style={{ backgroundColor: product.accentColor }}
                    />

                    <div className="relative w-40 h-52 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Format / MRP Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-2xs border border-slate-200/80">
                      {product.mrp} MRP
                    </div>

                    <div className="absolute top-3 right-3 bg-slate-900/90 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      {product.volume}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-[#0E609C] uppercase tracking-wider mb-1">
                        {product.packaging}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-[#0E609C] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Taste Notes Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {product.tasteNotes.slice(0, 3).map((note) => (
                          <span
                            key={note}
                            className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="text-xs font-semibold text-[#0E609C] hover:text-[#0A3B60] inline-flex items-center gap-1 group/btn cursor-pointer"
                      >
                        <span>Wholesale Specs</span>
                        <CaretRight size={13} weight="bold" className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      <a
                        href={`https://wa.me/919659100500?text=Hello%20Freshco,%20I%20am%20interested%20in%20commercial%20orders%20for%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#25D366]/10 text-[#075e54] hover:bg-[#25D366]/20 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors"
                      >
                        <WhatsappLogo size={14} weight="fill" className="text-[#25D366]" />
                        <span>Inquire</span>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Wholesale Packaging Specification Matrix Table */}
      <section id="packaging-matrix" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <Truck size={14} weight="bold" />
              <span>Logistics &amp; Wholesale Factsheet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Distributor Packaging &amp; Case Pack Standards
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Standardized dispatch specifications for distributors, wholesalers, and micro-factory production planning.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm text-slate-600">
              <thead className="bg-slate-100/80 text-slate-900 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-5 py-4">Format / Category</th>
                  <th className="px-4 py-4">Fill Volume</th>
                  <th className="px-4 py-4">Case Packaging</th>
                  <th className="px-4 py-4">Ambient Shelf Life</th>
                  <th className="px-4 py-4">Recommended MOQ</th>
                  <th className="px-5 py-4">Primary Channel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {PACKAGING_SPECS.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">{spec.format}</td>
                    <td className="px-4 py-4 font-mono font-medium">{spec.volume}</td>
                    <td className="px-4 py-4 text-slate-700 font-medium">{spec.casePack}</td>
                    <td className="px-4 py-4">{spec.shelfLife}</td>
                    <td className="px-4 py-4 font-semibold text-[#0E609C]">{spec.moq}</td>
                    <td className="px-5 py-4 text-slate-600">{spec.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Franchise Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0A3B60] to-[#0E609C] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Want to manufacture these in your own district?</h3>
              <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl">
                A Freshco micro-factory gives you turnkey machinery, formula concentrates, and exclusive regional rights to bottle all flavors locally.
              </p>
            </div>
            <Link
              href="/franchise"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#EAB308] hover:bg-[#ca9a04] text-slate-950 font-bold text-xs transition-colors"
            >
              Learn About ₹11.9L Setup
            </Link>
          </div>

        </div>
      </section>

      {/* Product Spec Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-24 bg-slate-50 rounded-xl p-2 shrink-0 border border-slate-100">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E609C] bg-[#0E609C]/10 px-2 py-0.5 rounded-full">
                  {activeModalProduct.packaging}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {activeModalProduct.name}
                </h3>
                <p className="text-xs text-slate-500">{activeModalProduct.tagline}</p>
              </div>
            </div>

            <div className="space-y-3 border-y border-slate-100 py-4 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Retail MRP:</span>
                <span className="font-bold text-slate-900">{activeModalProduct.mrp}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Fill Capacity:</span>
                <span className="font-semibold text-slate-900">{activeModalProduct.volume}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Quality Standard:</span>
                <span className="font-semibold text-emerald-600">ISO 22000:2018 Certified</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Key Taste Notes:</span>
                <span className="font-semibold text-slate-900">{activeModalProduct.tasteNotes.join(", ")}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/919659100500?text=Hello%20Freshco,%20I%20would%20like%20a%20distributor%20sample%20kit%20for%20${encodeURIComponent(activeModalProduct.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Order Sample Crate</span>
              </a>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
