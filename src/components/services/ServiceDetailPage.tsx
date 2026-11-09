"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
  Car,
  Plane,
  Phone,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface RouteFare {
  route: string;
  distance: string;
  approxDuration: string;
  sedanEstimate: string;
  suvEstimate: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  heroImage: string;
  overview: string;
  whyUsPoints: { title: string; desc: string }[];
  routeFares: RouteFare[];
  inclusions: string[];
  exclusions: string[];
  bookingCategoryKey: string;
  serviceFaq: { q: string; a: string }[];
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({
  title,
  subtitle,
  tagline,
  badge,
  heroImage,
  overview,
  whyUsPoints,
  routeFares,
  inclusions,
  exclusions,
  bookingCategoryKey,
  serviceFaq,
}) => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* Cinematic Architectural Hero */}
      <section className="relative bg-gradient-to-b from-[#041F20] via-[#062F31] to-[#041F20] text-white pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-black/20">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041F20] via-[#041F20]/80 to-[#041F20]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-[#D9A52B] shadow-soft">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-xl text-[#D9A52B] font-display italic">
              {subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#E0ECEA]/85 leading-relaxed pt-1 max-w-2xl font-normal">
              {overview}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/book-cab?service=${bookingCategoryKey}`}
                className="px-6 py-3.5 rounded-full bg-gradient-to-b from-[#E6B543] to-[#C99320] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 text-[#062F31] font-bold text-xs inline-flex items-center gap-2 active:translate-y-0.5 transition-all"
              >
                <Car className="w-4 h-4 text-[#062F31]" />
                <span>Reserve This Chauffeur Service</span>
                <ArrowRight className="w-4 h-4 text-[#062F31]" />
              </Link>

              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                <span>Enquire via WhatsApp Desk</span>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-[11px] text-[#E0ECEA]/80 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                100% Commercial Yellow-Board Fleet
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                Guaranteed On-Time Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                10% Advance Deposit Model
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us Section */}
      <section className="py-16 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Service Value Proposition</span>
            </div>
            <h2 className="text-3xl font-bold font-display text-[#182A2B]">
              Why Choose Our {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5">
              Strict sanitization, zero surge gouging, and courteous chauffeurs who treat passenger comfort as paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsPoints.map((pt, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#D5DDD5] shadow-skeuo space-y-3 group hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#084846] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-xs shadow-skeuo-button border-t border-white/20">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-[#182A2B] font-display">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#667575] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Profiles & Vehicle Allocation Deck */}
      {routeFares.length > 0 && (
        <section className="py-16 bg-[#F2F5F2] border-b border-[#E5EAE5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
                  <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Popular Corridors</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#182A2B]">
                  Corridor Profiles &amp; Fleet Availability
                </h2>
                <p className="text-xs sm:text-sm text-[#667575] mt-1">
                  Transparent transit benchmarks for key routes. Reserve your vehicle with a 10% advance deposit.
                </p>
              </div>
              <div className="text-[11px] text-[#073B3A] font-semibold bg-white px-3.5 py-1.5 rounded-full border border-[#D5DDD5] shadow-xs inline-flex items-center gap-1.5 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Zero Hidden Toll Surcharges</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {routeFares.map((rf, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#D5DDD5] p-6 shadow-skeuo hover:shadow-card transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B] bg-[#062F31] px-2.5 py-0.5 rounded-full">
                        Curated Route {idx + 1}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[#667575] font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#073B3A]" />
                        <span>{rf.approxDuration}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                      {rf.route}
                    </h3>
                    <p className="text-xs text-[#667575]">
                      Distance: <span className="font-semibold text-[#182A2B]">{rf.distance}</span> • Dedicated AC vehicle with verified chauffeur
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F2F5F2] text-xs">
                    <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5]">
                      <span className="text-[10px] font-bold text-[#667575] block uppercase">Prime Sedan</span>
                      <span className="font-semibold text-[#073B3A] text-xs mt-0.5 block">Dzire / Etios Class</span>
                      <span className="text-[10px] text-[#10B981] font-semibold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Available
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5]">
                      <span className="text-[10px] font-bold text-[#667575] block uppercase">Luxury SUV</span>
                      <span className="font-semibold text-[#073B3A] text-xs mt-0.5 block">Innova Crysta</span>
                      <span className="text-[10px] text-[#10B981] font-semibold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Available
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#667575] font-medium">
                      Fixed Quote upon Dispatch
                    </span>
                    <Link
                      href={`/book-cab?service=${bookingCategoryKey}&to=${encodeURIComponent(rf.route)}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-b from-[#084846] to-[#041F20] text-white text-xs font-semibold hover:brightness-110 shadow-skeuo-button border-t border-white/20 inline-flex items-center gap-1.5 transition active:translate-y-0.5"
                    >
                      <span>Reserve Route</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Charter Agreement: Inclusions & Exclusions */}
      <section className="py-16 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold font-display text-[#182A2B]">
              Charter Clarity &amp; Transparency
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5">
              We eliminate billing ambiguities before you ever step into our vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-[#D5DDD5] shadow-skeuo space-y-4">
              <h3 className="text-base font-bold text-[#073B3A] font-display flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#073B3A]" />
                <span>What Is Fully Included</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#455353]">
                {inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#073B3A] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F2F5F2] border border-[#D5DDD5] shadow-skeuo space-y-4">
              <h3 className="text-base font-bold text-[#182A2B] font-display flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#667575]" />
                <span>What Is Excluded (Honest Clarity)</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#667575]">
                {exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#667575] shrink-0 mt-1.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specific FAQ */}
      {serviceFaq.length > 0 && (
        <section className="py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display text-[#182A2B] mb-8 text-center">
              Questions Regarding {title}
            </h2>

            <div className="space-y-4">
              {serviceFaq.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-[#D5DDD5] shadow-skeuo space-y-2"
                >
                  <h4 className="font-bold text-[#182A2B] text-sm sm:text-base font-display">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Luxury Bottom Pavilion */}
      <section className="py-16 bg-gradient-to-br from-[#062F31] via-[#041F20] to-[#073B3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-[#D9A52B]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dedicated Dispatch Desk Active</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#FAF9F5]">
            Ready to Confirm Your {title}?
          </h2>

          <p className="text-xs sm:text-sm text-[#E0ECEA]/80 max-w-xl mx-auto leading-relaxed">
            Submit your itinerary details today. Our operations team verifies vehicle readiness and confirms your private chauffeur with a 10% advance deposit.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href={`/book-cab?service=${bookingCategoryKey}`}
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all"
            >
              <Car className="w-4 h-4 text-[#062F31]" />
              <span>Initiate Booking Request</span>
              <ArrowRight className="w-4 h-4 text-[#062F31]" />
            </Link>

            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
            >
              <Phone className="w-4 h-4 text-[#D9A52B]" />
              <span>Call Helpline ({COMPANY_CONFIG.contact.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
