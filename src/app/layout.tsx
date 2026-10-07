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
  title: "Freshco Goli Soda | Start Your Own Soda Bottling Factory",
  description:
    "Start your own Goli Soda bottling factory with ₹11.9 Lakh complete setup, 85% profit margin, and investment recovery in 4 to 6 months. Over 270+ active plants across 19 states.",
  keywords: [
    "Goli Soda franchise",
    "soda factory setup",
    "soda bottling machine",
    "Freshco Goli Soda",
    "marble soda manufacturing India",
    "Goli Soda business"
  ],
  openGraph: {
    title: "Freshco Goli Soda | Complete Soda Bottling Plant Setup",
    description: "Start your high-profit soda bottling factory with ₹11.9 Lakhs full setup. 270+ running plants in India.",
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
