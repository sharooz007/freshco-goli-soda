import Link from "next/link";
import Image from "next/image";
import { Phone, Envelope, MapPin, WhatsappLogo, ShieldCheck, Certificate } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-[#0B131E] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Blueprint grid texture */}
      <div className="absolute inset-0 grid-blueprint-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
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
              India&apos;s leading beverage network. Complete soda bottling factory setups helping local business owners earn good monthly profits across 270+ active plants.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/919659100500?text=Hello%20Freshco%20Team,%20I%20am%20interested%20in%20starting%20a%20factory%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 rounded-full text-xs hover:bg-[#20ba59] transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>WhatsApp Franchise Helpline</span>
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  All Flavours (100+ Varieties)
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">
                  Franchise &amp; Setup Details
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story &amp; Journey
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Factory Visit &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-4">
              Beverage Formats
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Traditional Marble Glass Goli Soda</li>
              <li>One-Time Use Crown Glass</li>
              <li>Modern 250ml Aluminium Cans</li>
              <li>Heavy-Duty PET Travel Bottles</li>
              <li>Fruit Jelly Drinks &amp; Ice Pops</li>
            </ul>
          </div>

          {/* Kasaragod Plant Address */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-4">
              Factory Location
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[#EAB308] shrink-0 mt-0.5" />
                <span>
                  Pullintady, Nekraje PO,<br />
                  Kasaragod District,<br />
                  Kerala, India - 671543
                </span>
              </div>
              <div className="flex items-center gap-2 pt-2 text-white">
                <Phone size={16} className="text-[#EAB308]" />
                <a href="tel:+919659100500" className="hover:underline">
                  +91 9659 100 500
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={16} className="text-[#EAB308]" />
                <a href="mailto:contact@freshcogolisoda.com" className="hover:underline text-xs">
                  contact@freshcogolisoda.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Certifications and Copyright Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>ISO 9001:2015</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Certificate size={16} className="text-emerald-400" />
              <span>ISO 22000:2018</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-amber-400" />
              <span>Excellence Award 2024</span>
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
