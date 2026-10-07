import Link from "next/link";
import Image from "next/image";
import { Phone, Envelope, MapPin, WhatsappLogo, ShieldCheck, Certificate } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-44">
              <Image
                src="/logo.png"
                alt="Freshco Goli Soda"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India&apos;s fastest growing beverage network. Standardized micro-factory engineering delivering high-margin traditional Goli Soda production across 270+ global locations.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/919659100500?text=Hello%20Freshco%20Team,%20I%20am%20interested%20in%20a%20franchise%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 rounded-full text-xs hover:bg-[#20ba59] transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>WhatsApp Franchise Desk</span>
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Portfolio (100+ Flavors)
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">
                  Franchise & Factory Model
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Heritage & Scale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Plant Visit & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-4">
              Packaging Lines
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Traditional Glass Goli Soda</li>
              <li>Tamper-proof Single-Serve Glass</li>
              <li>Sleek 250ml Aluminum Cans</li>
              <li>High-Barrier PET Travel Bottles</li>
              <li>Chewable Fruit Jelly Drinks</li>
              <li>Freshco Frozen Ice Pops</li>
            </ul>
          </div>

          {/* Factory Headquarters */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-4">
              Central Operations
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#EAB308] shrink-0 mt-0.5" />
                <span>
                  Teago Enterprise / Freshco Plants<br />
                  Pullintady, Nekraje P.O., Kasaragod,<br />
                  Kerala, India, Pin: 671543
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#EAB308] shrink-0" />
                <a href="tel:+919659100500" className="hover:text-white transition-colors">
                  +91 9659 100 500
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Envelope size={18} className="text-[#EAB308] shrink-0" />
                <a href="mailto:info@freshcogolisoda.com" className="hover:text-white transition-colors">
                  info@freshcogolisoda.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>ISO 9001:2015 Certified</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Certificate size={16} className="text-emerald-400" />
              <span>ISO 22000:2018 Food Safety</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-amber-400" />
              <span>India Excellence Award 2024</span>
            </span>
          </div>

          <div>
            &copy; 2026 Freshco Goli Soda. Managed by Teago Enterprise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
