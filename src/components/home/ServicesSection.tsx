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
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo hover:shadow-card transition-all duration-300 flex flex-col md:flex-row group">
            <div className="md:w-5/12 relative h-40 md:h-auto overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=700&auto=format&fit=crop"
                alt="Bhubaneswar BBI Airport Transfers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#062F31]/85 via-transparent to-transparent" />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#062F31]/90 backdrop-blur-md text-[#D9A52B] text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/15">
                <Plane className="w-3 h-3" />
                <span>BBI Airport Specialist</span>
              </div>
            </div>

            <div className="p-4 sm:p-7 md:w-7/12 flex flex-col justify-between space-y-3 sm:space-y-4">
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D9A52B]">
                  Punctual &amp; Stress-Free
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#182A2B] mt-0.5 font-display">
                  Airport Transfers
                </h3>
                <p className="text-xs text-[#667575] mt-1.5 sm:mt-2 leading-relaxed">
                  Real-time radar flight monitoring, complimentary baggage wait buffer, and terminal gate meet at Biju Patnaik Airport (BBI).
                </p>

                <div className="mt-3 space-y-1.5 sm:space-y-2 text-[11px] text-[#455353]">
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

              {/* Zero Price Mention - Replaced with Assurance */}
              <div className="pt-2.5 sm:pt-3 border-t border-[#F2F5F2] flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-[#073B3A] inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Flight Radar Tracked</span>
                </span>
                <Link
                  href="/services/airport-transfers"
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-b from-[#084846] to-[#062F31] border-t border-white/20 hover:brightness-110 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-skeuo-button transition active:translate-y-0.5"
                >
                  <span>Book Transfer</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Large Card 2: Odisha Tour Packages */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#073B3A] to-[#041F20] text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#073B3A] shadow-skeuo-button flex flex-col justify-between group p-4 sm:p-7 relative">
            <div className="relative z-10 space-y-2.5 sm:space-y-3.5">
              <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D9A52B] bg-white/10 px-2.5 sm:px-3 py-1 rounded-full border border-white/15">
                <Palmtree className="w-3.5 h-3.5" />
                <span>Curated Circuits</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F5] font-display">
                Odisha Tour Packages
              </h3>
              <p className="text-xs text-[#E0ECEA]/85 leading-relaxed">
                Explore the Golden Triangle (Bhubaneswar, Puri, Konark) and Chilika dolphin safaris with private chauffeur comfort and luggage custody during temple darshans.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] text-white/90">
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 border border-white/15">Golden Triangle</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 border border-white/15">Chilika Eco-Safari</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 border border-white/15">Dhauli Peace Trail</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-[#D9A52B] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Day Circuits</span>
              </span>
              <Link
                href="/services/odisha-tours"
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-b from-[#E6B543] to-[#C99320] border-t border-white/40 text-[#062F31] text-xs font-bold inline-flex items-center gap-1.5 shadow-skeuo-gold hover:brightness-105 transition active:translate-y-0.5"
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
                className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:border-[#073B3A]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] flex items-center justify-center text-[#073B3A] group-hover:bg-[#073B3A] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-[#667575] bg-[#F2F5F2] px-2 sm:px-2.5 py-0.5 rounded-full border border-[#E5EAE5]">
                      {srv.badge}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                    {srv.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#667575] leading-relaxed line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3.5 border-t border-[#F2F5F2] mt-3 sm:mt-4 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#073B3A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>{srv.perk}</span>
                  </span>
                  <Link
                    href={srv.link}
                    className="text-xs font-bold text-[#073B3A] hover:underline inline-flex items-center gap-1"
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
