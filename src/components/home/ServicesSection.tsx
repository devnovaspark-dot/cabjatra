import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Compass,
  Clock,
  Car,
  Briefcase,
  Palmtree,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Dedicated Mobility Verticals</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Our Core Services
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              From airport transfers with real-time flight tracking to multi-day Odisha temple trails, choose the exact travel vertical tailored to your itinerary.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:underline group"
          >
            <span>Explore All 6 Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Services Grid with Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Featured Large Card 1: Airport Transfers */}
          <div className="lg:col-span-7 card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row group">
            <div className="md:w-5/12 relative h-44 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-[#D6E0D6]">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=700&auto=format&fit=crop"
                alt="Bhubaneswar BBI Airport Transfers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#021718]/90 via-[#021718]/30 to-transparent" />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#062F31]/95 backdrop-blur-md text-[#D9A52B] text-[9.5px] sm:text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20 shadow-md">
                <Plane className="w-3 h-3" />
                <span>BBI Airport Specialist</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 md:w-7/12 flex flex-col justify-between space-y-3.5 sm:space-y-4">
              <div>
                <span className="text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#D9A52B] block">
                  Punctual &amp; Stress-Free
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#182A2B] mt-0.5 font-display">
                  Airport Transfers
                </h3>
                <p className="text-xs text-[#556464] mt-2 leading-relaxed">
                  Real-time radar flight monitoring, complimentary baggage wait buffer, and terminal gate meet at Biju Patnaik Airport (BBI).
                </p>

                <div className="mt-3.5 space-y-2 text-[11px] text-[#455353] bg-[#FAF9F5] p-3 rounded-xl border border-[#D8E2D8] shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#073B3A] shrink-0" />
                    <span>Zero surge pricing multipliers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#073B3A] shrink-0" />
                    <span>Doorstep luggage assistance &amp; gate escort</span>
                  </div>
                </div>
              </div>

              {/* Assurance Bar */}
              <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-[#073B3A] inline-flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#D6E0D6] shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Flight Radar Tracked</span>
                </span>
                <Link
                  href="/services/airport-transfers"
                  className="px-4 py-2 rounded-xl btn-skeuo-dark text-white text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Book Transfer</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Large Card 2: Odisha Tour Packages */}
          <div className="lg:col-span-5 card-skeuo-dark text-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group p-5 sm:p-7 relative">
            {/* Top Amber Ambient Sheen */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3 sm:space-y-3.5">
              <div className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#D9A52B] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-[#D9A52B]/30 shadow-xs">
                <Palmtree className="w-3.5 h-3.5" />
                <span>Curated Circuits</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-[#FAF9F5] font-display drop-shadow-md">
                Odisha Tour Packages
              </h3>
              <p className="text-xs sm:text-sm text-[#E0ECEA]/90 leading-relaxed">
                Explore the Golden Triangle (Bhubaneswar, Puri, Konark) and Chilika dolphin safaris with private chauffeur comfort and luggage custody during temple darshans.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[10.5px] text-white/90">
                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs">Golden Triangle</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs">Chilika Eco-Safari</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs">Dhauli Peace Trail</span>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-[11.5px] sm:text-xs font-bold text-[#D9A52B] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Day Circuits</span>
              </span>
              <Link
                href="/services/odisha-tours"
                className="px-4 py-2 rounded-xl btn-skeuo-gold text-[#062F31] text-xs font-bold inline-flex items-center gap-1.5"
              >
                <span>View Tours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 Supporting Compact Services (All Prices Removed) */}
          {[
            {
              title: "Outstation Cabs",
              desc: "One-way and round trips between Bhubaneswar, Puri, Cuttack, and Sambalpur with seasoned highway drivers.",
              icon: Compass,
              link: "/services/outstation-cabs",
              badge: "Highway Specialists",
              perk: "Doorstep Pickup & Standby",
            },
            {
              title: "Hourly Rentals",
              desc: "4, 8, or 12-hour packages. Your dedicated car and chauffeur remain on call for meetings and shopping.",
              icon: Clock,
              link: "/services/hourly-rentals",
              badge: "Flexible Multi-Stop",
              perk: "Chauffeur on Standby",
            },
            {
              title: "Local City Rides",
              desc: "Scheduled point-to-point urban rides for hospital visits, station drops, and daily family transit.",
              icon: Car,
              link: "/services/local-city-rides",
              badge: "Zero Cancellations",
              perk: "Guaranteed Pre-Allocation",
            },
            {
              title: "Corporate Travel",
              desc: "Standardized travel logistics for company executives, conclaves, and institutional events with invoice billing.",
              icon: Briefcase,
              link: "/services#corporate",
              badge: "Enterprise Accounts",
              perk: "GST Invoicing & Reports",
            },
          ].map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="lg:col-span-3 card-skeuo rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl medallion-dark flex items-center justify-center text-[#D9A52B] transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9.5px] font-bold text-[#073B3A] bg-gradient-to-b from-[#F2F6F2] to-[#E3EDE3] px-2.5 py-1 rounded-full border border-[#BED2BE] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.04)]">
                      {srv.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors font-display">
                    {srv.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#556464] leading-relaxed line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E5ECE5] mt-4 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#073B3A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{srv.perk}</span>
                  </span>
                  <Link
                    href={srv.link}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-b from-white to-[#EEF3EE] hover:bg-[#073B3A] text-[#073B3A] hover:text-white border border-[#CBD7CB] hover:border-transparent text-xs font-bold inline-flex items-center gap-1 transition shadow-xs"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
