"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  PaperPlaneTilt, 
  WhatsappLogo, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle,
  CurrencyInr,
  BuildingApartment,
  MapPin
} from "@phosphor-icons/react";

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    stateDistrict: "",
    investmentTier: "standard",
    spaceAvailable: "400-600",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0E609C", "#EAB308", "#10B981"]
        });
      } catch {
        // Fallback gracefully if canvas is unavailable
      }
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="franchise-inquiry" className="py-24 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0E609C_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0E609C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <CurrencyInr size={14} weight="bold" />
              <span>Franchise Project Report</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get Complete Factory Setup Details
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Get the full machine quotation, profit and cost breakdown, syrup price list, and check if your district is available directly from our Kasaragod team.
            </p>

            {/* Credibility highlights */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Complete machine setup starting at ₹11.9 Lakhs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Full investment recovery in 4 to 6 months
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Direct syrup and flavor supply from our factory
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Single-owner rights for your district or taluka
                </span>
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center">
              <a
                href="tel:+919659100500"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/10"
              >
                <PhoneCall size={16} weight="bold" className="text-[#EAB308]" />
                <span>Direct Helpline: +91 9659 100 500</span>
              </a>

              <a
                href="https://wa.me/919659100500?text=Hello%20Freshco%20Team,%20I%20am%20interested%20in%20the%2011.9L%20soda%20factory%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-[#25D366]/30"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80">
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Details Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName || "Sir/Madam"}</span>. Our expansion manager will check area availability for <span className="font-semibold text-slate-900">{formData.stateDistrict || "your district"}</span> and call you within 4 hours.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/919659100500?text=Hi%20Freshco,%20I%20just%20submitted%20the%20franchise%20form%20for%20${encodeURIComponent(formData.stateDistrict || "my city")}.%20My%20name%20is%20${encodeURIComponent(formData.fullName || "Partner")}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsappLogo size={18} weight="fill" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Franchise Application &amp; Area Check
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Direct factory inquiry for setting up a new soda bottling plant.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Suresh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    {/* Target State & District */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your District &amp; State *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="stateDistrict"
                          required
                          value={formData.stateDistrict}
                          onChange={handleChange}
                          placeholder="e.g. Madurai, Tamil Nadu"
                          className="w-full pl-3.5 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                        />
                        <MapPin size={16} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Setup Tier Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Factory Model
                      </label>
                      <select
                        name="investmentTier"
                        value={formData.investmentTier}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                      >
                        <option value="standard">Standard Soda Factory (₹11.9 Lakhs) - Most Popular</option>
                        <option value="express">Starter Bottling Unit (₹10.5 Lakhs)</option>
                        <option value="industrial">High-Capacity Plant (₹18.5 Lakhs)</option>
                        <option value="multi-unit">Multiple Districts Dealership</option>
                      </select>
                    </div>

                    {/* Commercial Space Available */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Available Room / Shed Space
                      </label>
                      <div className="relative">
                        <select
                          name="spaceAvailable"
                          value={formData.spaceAvailable}
                          onChange={handleChange}
                          className="w-full pl-3.5 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50"
                        >
                          <option value="400-600">400 to 600 sq.ft (Ideal for ₹11.9L setup)</option>
                          <option value="300-450">300 to 450 sq.ft (For starter plant)</option>
                          <option value="800-1200">800 to 1,200 sq.ft (For high-capacity plant)</option>
                          <option value="planning">Currently searching for room</option>
                        </select>
                        <BuildingApartment size={16} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Operational Notes / Query */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Current Business or Any Questions (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current business or planned launch month..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E609C] focus:border-transparent bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0E609C] hover:bg-[#0A3B60] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Sending Details...</span>
                      ) : (
                        <>
                          <span>Send Franchise Application</span>
                          <PaperPlaneTilt size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Direct factory application. Your contact details are 100% safe with us.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
