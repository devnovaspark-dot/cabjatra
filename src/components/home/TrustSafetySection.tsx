import React from "react";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Headphones, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const TrustSafetySection: React.FC = () => {
  const pillars = [
    {
      title: "Chauffeur Screening & Commercial Licensing",
      desc: "Every driver undergoes background verification, holds a valid commercial driving license (yellow-board endorsement), and has verified highway expertise across Odisha corridors.",
      icon: <FileCheck2 className="w-5 h-5 text-[#073B3A]" />,
      actionText: "View Driver Policy",
      actionLink: "/terms-conditions",
      badge: "Strict Screening",
    },
    {
      title: "Vehicle Standards & AC Sanitization",
      desc: "Cabs are commercially registered with state transport permits, functioning dual-zone climate control, clean fabric or leatherette upholstery, and secure luggage boot space.",
      icon: <ShieldCheck className="w-5 h-5 text-[#073B3A]" />,
      actionText: "Fleet Standards",
      actionLink: "/services",
      badge: "Commercial Yellow Board",
    },
    {
      title: "24/7 Operations Desk Support",
      desc: "Live travel desk support for flight arrivals at BBI Airport, train delays, intermediate sightseeing halts, and instant WhatsApp chauffeur coordination.",
      icon: <Headphones className="w-5 h-5 text-[#073B3A]" />,
      actionText: "Contact Support Desk",
      actionLink: "/contact",
      badge: "Human Travel Desk",
    },
    {
      title: "Transparent Cancellation & Refund Terms",
      desc: "Full refund of advance deposit for outstation trips cancelled with 12+ hours notice. Zero cancellation fee for rescheduled flights or weather disruptions.",
      icon: <RotateCcw className="w-5 h-5 text-[#073B3A]" />,
      actionText: "Cancellation Matrix",
      actionLink: "/cancellation-policy",
      badge: "No Penalty Reschedules",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2 border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Safety &amp; Compliance Standards</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Trust &amp; Safety Protocols
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              From driver background checks to transparent cancellation refunds, our operations protocol is built to protect travelers at every stage.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#073B3A]">
            <CheckCircle2 className="w-4 h-4 text-[#D9A52B]" />
            <span>100% Commercial Fleet • Zero Private Cars</span>
          </div>
        </div>

        {/* 4 Trust & Safety Pillars with Distinct Skeuomorphic Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FAF9F5] to-[#EEF2EE] border border-[#E5EAE5] flex items-center justify-center group-hover:bg-[#073B3A] group-hover:text-white transition-colors shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F2F5F2] text-[#667575]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#667575] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-3.5 border-t border-[#F2F5F2]">
                <Link
                  href={item.actionLink}
                  className="text-xs font-bold text-[#073B3A] hover:underline inline-flex items-center gap-1 group-hover:text-[#062F31]"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
