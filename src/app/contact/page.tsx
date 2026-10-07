"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  MapPin, 
  PhoneCall, 
  Envelope, 
  WhatsappLogo, 
  Clock, 
  AirplaneTakeoff, 
  Train, 
  CheckCircle,
  PaperPlaneTilt,
  Factory,
  ShieldCheck
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "plant-visit",
    districtState: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0E609C", "#EAB308", "#10B981"]
        });
      } catch {}
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-[#0A3B60] to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 text-[#EAB308] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Factory size={14} weight="bold" />
            <span>Kasaragod Factory &amp; Office</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Visit Our Factory &amp; See Live Machine Demo
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Come visit our central workshop in Kasaragod, Kerala to see live soda bottling machines running, or talk to our team for franchise guidance.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Factory Plant Coordinates & Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Plant Address Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E609C] bg-[#0E609C]/10 px-2.5 py-1 rounded-full">
                    Manufacturing Factory &amp; Main Office
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-3">
                    Freshco Beverages (Teago Enterprise)
                  </h2>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0E609C] flex items-center justify-center shrink-0">
                    <MapPin size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Registered Factory Address</div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Pullintady, Nekraje PO, Kasaragod District, Kerala, India - 671543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <PhoneCall size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Franchise &amp; Machine Helpline</div>
                    <a
                      href="tel:+919659100500"
                      className="text-xs sm:text-sm text-[#0E609C] font-bold hover:underline block mt-0.5"
                    >
                      +91 9659 100 500
                    </a>
                    <span className="text-[11px] text-slate-400">Monday to Saturday: 9:30 AM to 6:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Envelope size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email Us</div>
                    <a
                      href="mailto:contact@freshcogolisoda.com"
                      className="text-xs sm:text-sm text-[#0E609C] font-semibold hover:underline block mt-0.5"
                    >
                      contact@freshcogolisoda.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Live Machine Demo Timings</div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Saturday: 10:00 AM to 5:00 PM (Prior appointment requested for live trial)
                    </p>
                  </div>
                </div>

                {/* Instant WhatsApp Desk */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919659100500?text=Hello%20Freshco%20Team,%20I%20would%20like%20to%20visit%20the%20Kasaragod%20factory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Chat on WhatsApp (+91 9659 100 500)</span>
                  </a>
                </div>

              </div>

              {/* Transit & Travel Guide */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  How to Reach Our Kasaragod Factory
                </h3>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                      <AirplaneTakeoff size={16} weight="bold" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Nearest Airport:</span> Mangalore Airport (IXE) - 58 km (around 1.5 hours drive)
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                      <Train size={16} weight="bold" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Nearest Railway Station:</span> Kasaragod Railway Station (KGQ) - 16 km (around 25 mins drive)
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=Nekraje+Kasaragod+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0E609C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Consultation & Demo Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle size={36} weight="fill" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Visit Request Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our plant coordinator will call you to confirm machine availability and schedule your visit.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Submit Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        Book Factory Visit or Ask a Question
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Connect directly with our engineering and commercial distribution desk.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Hegde"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your District &amp; State
                        </label>
                        <input
                          type="text"
                          value={formData.districtState}
                          onChange={(e) => setFormData({ ...formData, districtState: e.target.value })}
                          placeholder="e.g. Kozhikode, Kerala"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Purpose of Inquiry
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50"
                      >
                        <option value="plant-visit">See Live Machine Demo at Kasaragod Factory</option>
                        <option value="franchise-11.9">Start ₹11.9 Lakh Soda Factory Setup</option>
                        <option value="wholesale-distributor">Beverage Dealership / Wholesale Supply</option>
                        <option value="syrup-supplies">Flavour Syrups &amp; Bottle Reorder</option>
                        <option value="other">General Questions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Visit Date or Any Questions
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Let us know when you would like to visit or any specific questions..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E609C] bg-slate-50/50 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#0E609C] hover:bg-[#0A3B60] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <span>Send Visit &amp; Inquiry Request</span>
                            <PaperPlaneTilt size={16} weight="bold" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>Direct factory response within 4 hours during business days.</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
