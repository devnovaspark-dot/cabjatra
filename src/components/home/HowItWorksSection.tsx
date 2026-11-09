"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarSearch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  XCircle,
  PhoneCall,
  UserCheck,
  Car,
} from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const guaranteeSteps = [
    {
      step: "01",
      title: "Select Journey & Vehicle Class",
      desc: "Choose between Airport transfer, Outstation trip, Hourly package, or Curated tour. Select your preferred vehicle from Dzire sedans to Innova Crysta.",
      icon: <CalendarSearch className="w-5 h-5 text-[#D9A52B]" />,
      badge: "No Upfront Payment",
      highlight: "Instant route customization",
    },
    {
      step: "02",
      title: "Dispatch Fleet Verification",
      desc: "Our Odisha desk manually verifies live commercial vehicle fitness, sanitization compliance, and matches an experienced, courteous local chauffeur.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Manual Verification",
      highlight: "Chauffeur record check",
    },
    {
      step: "03",
      title: "10% Advance Deposit Only",
      desc: "Once your cab and chauffeur are 100% assigned, lock your reservation with a transparent 10% advance deposit. The remaining 90% is settled after arrival.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Accountability Guarantee",
      highlight: "Zero financial lock-in",
    },
    {
      step: "04",
      title: "Punctual Chauffeur Arrival",
      desc: "Your uniformed chauffeur coordinates via phone & WhatsApp, arrives with AC active at your doorstep or terminal gate on time, and handles all luggage.",
      icon: <UserCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Zero Cancellations",
      highlight: "Guaranteed on-time start",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F2F5F2] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2 border border-[#C1DAD7]">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>The Pre-Booked Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#182A2B] font-display">
            How CabJatra Works
          </h2>
          <p className="text-xs sm:text-sm text-[#667575] mt-1.5 leading-relaxed">
            Unlike on-demand ride-hailing apps where drivers cancel on you repeatedly, CabJatra operates on a verified dispatch model that guarantees vehicle arrival and accountability across Odisha.
          </p>
        </div>

        {/* The Pre-Booked Guarantee Cards: Connected 4-Step Journey Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {guaranteeSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Subtle Ambient Bevel Highlight */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A52B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Metallic Step & 3D Icon Bay */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#084846] to-[#041F20] border-t border-white/20 flex items-center justify-center shadow-skeuo-button group-hover:scale-105 transition-transform">
                    {st.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl text-[#D9A52B] drop-shadow-sm">
                    {st.step}
                  </span>
                </div>

                {/* Badge */}
                <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E0ECEA] text-[#073B3A] inline-block mb-3 border border-[#C1DAD7]">
                  {st.badge}
                </span>

                <h3 className="text-base font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors font-display">
                  {st.title}
                </h3>

                <p className="text-xs text-[#667575] leading-relaxed mt-2.5">
                  {st.desc}
                </p>
              </div>

              {/* Card Footer Feature Pill */}
              <div className="mt-6 pt-3.5 border-t border-[#F2F5F2] flex items-center justify-between text-[11px] text-[#073B3A] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  {st.highlight}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D9A52B]" />
              </div>
            </div>
          ))}
        </div>

        {/* High-Conversion Comparison Matrix: CabJatra vs. Generic Aggregators */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B]">
              Why Travelers Choose CabJatra Over Aggregators
            </span>
            <h3 className="text-2xl font-bold font-display text-[#182A2B] mt-1">
              The 10% Advance Guarantee Difference
            </h3>
            <p className="text-xs text-[#667575] mt-1 leading-relaxed">
              Why do generic ride-hailing apps fail tourists and families in Odisha? When drivers can cancel at will, your entire holiday schedule breaks down. Here is how our verified dispatch model protects you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic Ride Apps Column */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-rose-200/60 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <h4 className="text-sm font-bold text-rose-950 uppercase tracking-wide">
                  Generic App Aggregators
                </h4>
              </div>

              <ul className="space-y-3 text-xs text-[#667575]">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Frequent Driver Cancellations:</strong> Drivers cancel if the drop destination doesn&apos;t suit them, leaving you stranded at the airport or hotel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Unpredictable Surge Pricing:</strong> 2x to 3x surge multipliers slapped onto fares during rain, rush hour, festivals, and late nights.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>AC Haggling &amp; Demands:</strong> Many drivers refuse to turn on air conditioning or demand offline cash extra payments for highway tolls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>No Human Support:</strong> In case of an emergency or route dispute, passengers are stuck with automated chatbot loops.</span>
                </li>
              </ul>
            </div>

            {/* CabJatra Verified Model Column */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062F31] to-[#041F20] text-white space-y-4 shadow-skeuo-button border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                  <h4 className="text-sm font-bold text-[#FAF9F5] uppercase tracking-wide">
                    CabJatra Verified Model
                  </h4>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D9A52B] text-[#062F31]">
                  100% Guaranteed
                </span>
              </div>

              <ul className="space-y-3 text-xs text-[#E0ECEA]/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Zero Driver Cancellations:</strong> Dedicated vehicle and chauffeur are confirmed in advance. Your ride is locked into our operational dispatch queue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>100% Transparent Fixed Tariffs:</strong> Zero sudden surge gouging. The price quoted is the price honored, day or night.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Standardized Chauffeur AC Fleet:</strong> Full AC operation guaranteed throughout your journey. Chauffeurs are polite, uniformed, and highway certified.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>24/7 Human WhatsApp Desk:</strong> Direct phone and WhatsApp operations access with real human coordinators who resolve queries immediately.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
