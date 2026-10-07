import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freshco Goli Soda | India's Premier B2B Bottling Micro-Factory Network",
  description:
    "Set up a turnkey Goli Soda bottling micro-factory with ₹11.9 Lakh investment, 85% gross margins, and 4 to 6 months payback. Over 270+ operating factories across 19 states.",
  keywords: [
    "Goli Soda franchise",
    "beverage micro-factory",
    "turnkey bottling plant",
    "Freshco Goli Soda",
    "beverage manufacturing unit India",
    "marble soda machine"
  ],
  openGraph: {
    title: "Freshco Goli Soda | Turnkey Bottling Micro-Factory",
    description: "Launch your own high-margin beverage bottling unit with ₹11.9 Lakhs turnkey setup. 270+ active plants.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-[#0E609C] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
