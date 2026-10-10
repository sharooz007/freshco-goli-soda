"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X, PhoneCall, ArrowUpRight } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Flavours & Range" },
  { href: "/franchise", label: "Franchise & Setup" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Factory & Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Taste-skill compliance: use Motion's useScroll instead of window.addEventListener
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      {/* Top B2B Announcement Strip */}
      <div className="bg-[#0A2E4C] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3 border-b border-white/10">
        <span className="inline-flex items-center gap-1.5 bg-[#EAB308]/20 text-[#EAB308] px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider font-mono">
          Factory Setup 2026
        </span>
        <span className="hidden sm:inline text-slate-200">
          Start Your Own Soda Factory in Your District: ₹11.9 Lakh Setup with 85% Margin.
        </span>
        <a
          href="tel:+919659100500"
          className="inline-flex items-center gap-1 font-semibold text-[#EAB308] hover:underline"
        >
          <PhoneCall size={13} weight="bold" />
          <span>+91 9659 100 500</span>
        </a>
      </div>

      {/* Main Single-Line Navbar (Height strictly 68px) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/90"
            : "bg-[#FBFBFA]/90 backdrop-blur-sm border-b border-stone-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44">
              <Image
                src="/logo.png"
                alt="Freshco Goli Soda"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Single-Line Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#0E609C]/10 text-[#0E609C] font-semibold"
                      : "text-slate-600 hover:text-[#0E609C] hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/franchise#apply"
              className="inline-flex items-center gap-2 bg-[#0E609C] hover:bg-[#0A2E4C] text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              <span>Start a Factory</span>
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-stone-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#0E609C]/10 text-[#0E609C] font-semibold"
                        : "text-slate-700 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-stone-100">
                <Link
                  href="/franchise#apply"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0E609C] text-white py-3 rounded-xl font-semibold text-sm shadow-xs"
                >
                  <span>Start a Factory</span>
                  <ArrowUpRight size={16} weight="bold" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
