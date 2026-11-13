import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ReceiptText,
  CalendarCheck,
  Sparkles,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      title: "Verified Travel Partners",
      desc: "Commercial driver partners pass background checks, possess valid commercial licenses, and undergo regular vehicle inspection standards.",
      icon: <ShieldCheck className="w-5 h-5 text-[#073B3A]" />,
      tag: "Driver Quality",
    },
    {
      title: "Transparent Quotations",
      desc: "Clear upfront fare estimates with no hidden charges and zero surge pricing multipliers during festivals or sudden rain.",
      icon: <ReceiptText className="w-5 h-5 text-[#073B3A]" />,
      tag: "No Surge Spikes",
    },
    {
      title: "Pre-booked Journeys",
      desc: "Your ride is scheduled and locked in advance, eliminating the stress and delays of last-minute app cancellations.",
      icon: <CalendarCheck className="w-5 h-5 text-[#073B3A]" />,
      tag: "Punctuality",
    },
    {
      title: "Clean & Comfortable Vehicles",
      desc: "Air-conditioned sedans, SUVs, and travellers with well-maintained interiors and sufficient luggage space for long road trips.",
      icon: <Sparkles className="w-5 h-5 text-[#073B3A]" />,
      tag: "Fleet Standards",
    },
    {
      title: "Dedicated Customer Support",
      desc: "Accessible assistance via phone and WhatsApp throughout your trip, from airport pickup coordination to route adjustments.",
      icon: <Headphones className="w-5 h-5 text-[#073B3A]" />,
      tag: "Human Desk",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/60 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2 border border-[#C1DAD7]">
            <Sparkles className="w-3 h-3 text-[#D9A52B]" />
            <span>Customer Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#182A2B] font-display">
            Why Choose CabJatra
          </h2>
          <p className="text-xs sm:text-sm text-[#667575] mt-1.5">
            Designed for travelers who prioritize punctuality, clean vehicles, and reliable hospitality across Odisha.
          </p>
        </div>

        {/* 5 Benefits Cards Grid with Skeuomorphic Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] flex items-center justify-center mb-4 group-hover:bg-[#073B3A] group-hover:text-white transition-colors shadow-xs">
                  {b.icon}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B]">
                  {b.tag}
                </span>

                <h3 className="text-sm font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors mt-1">
                  {b.title}
                </h3>

                <p className="text-xs text-[#667575] leading-relaxed mt-2">
                  {b.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2F5F2] flex items-center justify-between text-[11px] font-bold text-[#073B3A]">
                <span>Verified Service</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#073B3A]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:underline group"
          >
            <span>Learn more about our operating standards and philosophy</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
