"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
  MessageSquare,
  Car,
  Landmark,
  Compass,
  ChevronDown,
  Phone,
  Briefcase,
  Star,
  Zap,
  Navigation,
  ThumbsUp,
  HelpCircle,
  Palmtree,
  CreditCard,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { VEHICLE_FLEET } from "@/data/vehicles";

export interface TourDestinationItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
  keyAttractions: string[];
}

export interface TourPackageOption {
  title: string;
  subtitle: string;
  duration: string;
  approxPrice: string;
  highlights: string[];
  badge: string;
  vehicleClass?: string;
}

export interface TourItineraryDay {
  day: string;
  title: string;
  desc: string;
  highlights: string[];
}

export interface TourDetailProps {
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  heroImage: string;
  overview: string;
  durationBadge: string;
  startingFromNote: string;
  destinations: TourDestinationItem[];
  packages: TourPackageOption[];
  itineraryDays: TourItineraryDay[];
  whyChoosePoints: { title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { q: string; a: string }[];
  bookingTourSlug: string;
}

export const TourPackageDetailPage: React.FC<TourDetailProps> = ({
  title,
  subtitle,
  badge,
  heroImage,
  overview,
  durationBadge,
  startingFromNote,
  destinations,
  packages,
  itineraryDays,
  whyChoosePoints,
  inclusions,
  exclusions,
  faqs,
  bookingTourSlug,
}) => {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans selection:bg-[#FEC401]/30">
      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC ARCHITECTURAL HERO & INTERACTIVE TOUR STAGE         */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#000B3B] via-[#001162] to-[#000B3B] text-white pt-28 sm:pt-36 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-black/20">
        {/* Ambient Atmospheric Sheens */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#02146B]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Scenic Backdrop Texture */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity pointer-events-none">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000B3B] via-[#000B3B]/80 to-[#000B3B]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Value Prop & Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Badge & Social Proof Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-[#FEC401] shadow-soft">
                  <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                  <span>{badge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001162]/80 backdrop-blur-md border border-[#FEC401]/30 text-[10.5px] font-semibold text-white shadow-soft">
                  <Star className="w-3.5 h-3.5 text-[#FEC401] fill-[#FEC401]" />
                  <span>4.9/5 Rating &bull; {durationBadge}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
                {title} –{" "}
                <span className="text-[#FEC401] italic font-normal">Explore at Your Pace</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#FEC401] font-display italic">
                {subtitle}
              </p>

              {/* Overview Prose */}
              <p className="text-xs sm:text-sm text-[#F1F5F9]/85 leading-relaxed pt-1 max-w-2xl font-normal mx-auto lg:mx-0">
                {overview}
              </p>

              {/* Quick Highlight Pills */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-[11px]">
                <span className="text-[#94A3B8] font-medium mr-1">Includes:</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  🚗 Private AC Yellow-Board Cab
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  👨‍✈️ Verified Local Driver
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  ⏱️ Flexible Sightseeing Halts
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  🛡️ Safe Luggage Custody
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}`}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 active:translate-y-0.5 transition-all"
                >
                  <Palmtree className="w-4 h-4 text-[#000B3B]" />
                  <span>Reserve This Tour (10% Advance)</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B]" />
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
                >
                  <MessageSquare className="w-4 h-4 text-[#FEC401]" />
                  <span>WhatsApp Tour Concierge</span>
                </a>
              </div>

              {/* Trust Assurances Pill Row */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-[#F1F5F9]/80 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FEC401]" />
                  100% Commercial Fleet
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEC401]" />
                  10% Advance Deposit Model
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
                  {startingFromNote}
                </span>
              </div>
            </div>

            {/* Right Column: High-Res Destination Visual Showcase Card (5 Cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.7)] bg-[#000B3B] group">
                {/* Visual Area with Destination Hero Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlays for High Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000B3B] via-[#000B3B]/30 to-black/40" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#FEC401]/60 text-[10.5px] font-bold text-[#FEC401] shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>{badge.split("&bull;")[0].trim()}</span>
                  </div>

                  {/* Top Right Duration Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#001162]/90 backdrop-blur-md border border-white/25 text-[10.5px] font-bold text-white shadow-lg flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>{durationBadge}</span>
                  </div>

                  {/* Bottom Content Overlay on Image */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FEC401]" />
                        <span>Private Chauffeur-Driven Tour</span>
                      </span>
                      <span className="text-[10px] text-[#10B981] font-bold bg-[#10B981]/20 px-2 py-0.5 rounded-full border border-[#10B981]/40">
                        ● All Sightseeing Stops
                      </span>
                    </div>

                    {/* Fleet Availability Chips */}
                    <div className="grid grid-cols-3 gap-1.5 text-[9.5px] text-white/90 font-medium">
                      <div className="p-1 rounded-lg bg-white/10 border border-white/10 text-center">
                        🚗 Sedan (4S)
                      </div>
                      <div className="p-1 rounded-lg bg-white/10 border border-white/10 text-center">
                        🚙 Innova (7S)
                      </div>
                      <div className="p-1 rounded-lg bg-white/10 border border-white/10 text-center">
                        🚐 Tempo (17S)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Action Deck */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-[#02146B] to-[#000B3B] space-y-3 border-t border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8] block">
                        Charter Tariff Guarantee
                      </span>
                      <span className="text-sm font-bold text-[#FEC401]">
                        {startingFromNote}
                      </span>
                    </div>
                    <span className="text-[10.5px] font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                      100% Commercial Fleet
                    </span>
                  </div>

                  <Link
                    href={`/book-tour?destination=${bookingTourSlug}`}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs flex items-center justify-center gap-2 shadow-skeuo-gold hover:brightness-105 active:scale-98 transition-all"
                  >
                    <Palmtree className="w-4 h-4 text-[#000B3B]" />
                    <span>Book This Tour Package Now</span>
                    <ArrowRight className="w-4 h-4 text-[#000B3B]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: POPULAR DESTINATIONS & ATTRACTIONS COVERED                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Compass className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Sightseeing Itinerary Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Iconic Attractions Covered in This Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Every sightseeing point is covered with flexible waiting times. Spend as much time as you like without rigid tourist bus schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="bg-[#FAF9F5] rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Frame */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#FEC401]">
                    {dest.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors mb-2">
                      {dest.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {dest.desc}
                    </p>
                  </div>

                  {/* Key Highlights Chips */}
                  {dest.keyAttractions && dest.keyAttractions.length > 0 && (
                    <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                        Key Sights:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dest.keyAttractions.map((att, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium bg-white text-[#475569] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                          >
                            {att}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CURATED TOUR PACKAGES & TARIFF ESTIMATES                       */}
      {/* ========================================================================= */}
      {packages && packages.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
                  <Palmtree className="w-3.5 h-3.5 text-[#FEC401]" />
                  <span>Curated Tour Options</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                  Popular Tour Itineraries &amp; Tariffs
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                  Choose from popular itineraries designed for road comfort, or customize your stops with our tour desk.
                </p>
              </div>
              <div className="text-[11px] text-[#000B3B] font-bold bg-[#FFFBEB] px-3.5 py-2 rounded-2xl border border-[#FEF08A] shadow-xs inline-flex items-center gap-2 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>10% Advance Deposit Model</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#000B3B] bg-[#FEC401] px-2.5 py-0.5 rounded-full">
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-[#64748B] font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#000B3B]" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2 pt-2 border-t border-[#F1F5F9] text-xs text-[#334155]">
                      {pkg.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tariff & Action */}
                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#94A3B8] block uppercase">
                        Indicative Estimate
                      </span>
                      <span className="text-sm font-black text-[#000B3B]">
                        {pkg.approxPrice}
                      </span>
                    </div>

                    <Link
                      href={`/book-tour?destination=${bookingTourSlug}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#000B3B] to-[#02146B] text-white text-xs font-bold hover:brightness-110 shadow-sm inline-flex items-center gap-1.5 transition active:translate-y-0.5"
                    >
                      <span>Book Package</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: DAY-BY-DAY ROAD TRIP ITINERARY                                 */}
      {/* ========================================================================= */}
      {itineraryDays && itineraryDays.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
                <Calendar className="w-3.5 h-3.5 text-[#FEC401]" />
                <span>Suggested Travel Roadmap</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                Recommended Itinerary Schedule
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Designed for seamless road travel without rushing your family. Timings and stopovers can be adjusted according to your flight or train schedule.
              </p>
            </div>

            <div className="space-y-6">
              {itineraryDays.map((dayItem, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-sm space-y-3 hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#000B3B] bg-[#FEC401] px-3 py-1 rounded-full self-start">
                      {dayItem.day}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#0F172A]">
                      {dayItem.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                    {dayItem.desc}
                  </p>

                  {dayItem.highlights && dayItem.highlights.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {dayItem.highlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="text-[11px] font-semibold text-[#000B3B] bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0]"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: VEHICLE FLEET AVAILABLE FOR THIS TOUR                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <Car className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Tour Vehicle Classes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Choose the Right Cab for Your Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Comfort is paramount on multi-hour road trips. Select from our commercial yellow-board sedans, spacious Innova Crystas, or luxury Tempo Travellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VEHICLE_FLEET.slice(1, 4).map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-[#000B3B] to-[#02146B] p-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FEC401]/50 text-[10px] font-bold text-[#FEC401]">
                    {vehicle.tag || "Tour Class"}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white">
                    Base ₹{vehicle.ratePerKm}/km
                  </div>

                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={320}
                    height={180}
                    className="object-contain max-h-40 group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                  />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        {vehicle.name}
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
                        Dual AC
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#02146B] mb-2">
                      {vehicle.models}
                    </p>

                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                      {vehicle.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#475569] pt-2 border-t border-[#F1F5F9]">
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F8FAFC]">
                      <Users className="w-3.5 h-3.5 text-[#000B3B]" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F8FAFC]">
                      <Briefcase className="w-3.5 h-3.5 text-[#000B3B]" />
                      <span>{vehicle.luggage} Luggage Bags</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/book-tour?destination=${bookingTourSlug}&vehicle=${vehicle.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-b from-[#000B3B] to-[#02146B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-between shadow-sm transition-all group-hover:shadow"
                    >
                      <span>Select {vehicle.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WHY CHOOSE CABJATRA FOR ODISHA TOURS                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Tour Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Why Tour Odisha with CABJATRA
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Traveling through Odisha is most rewarding when your transport is comfortable, your itinerary is flexible, and your driver acts as a dependable local guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyChoosePoints.map((pt, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-black text-sm shadow-sm border border-white/15 group-hover:scale-105 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-display group-hover:text-[#000B3B] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CHARTER CLARITY (INCLUSIONS & EXCLUSIONS)                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Tour Inclusions &amp; Pricing Clarity
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Complete transparency with no hidden driver bata or surprise charges at the end of your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#000B3B] font-display">
                    What Is Fully Included
                  </h3>
                  <p className="text-xs text-[#64748B]">All essential road travel costs covered</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#334155]">
                {inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display">
                    What Is Excluded (Direct Settlements)
                  </h3>
                  <p className="text-xs text-[#64748B]">Settled directly at actuals with tickets</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#64748B]">
                {exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-2" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: SERVICE FAQ ACCORDION                                          */}
      {/* ========================================================================= */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
                <HelpCircle className="w-3.5 h-3.5 text-[#FEC401]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                Frequently Asked Questions Regarding {title}
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-[#FAF9F5] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-bold text-[#0F172A] text-sm sm:text-base font-display flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#000B3B] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#FEC401]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/60 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp Tour Concierge Banner */}
            <div className="mt-8 p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#16A34A] shrink-0" />
                <span className="text-xs font-semibold text-[#166534]">
                  Want to customize your tour itinerary, add Chilika Lake, or adjust pickup timings?
                </span>
              </div>
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#16A34A] text-white text-xs font-bold hover:bg-[#15803D] transition shadow-xs shrink-0"
              >
                Chat on WhatsApp Desk
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 9: HIGH-IMPACT LUXURY BOTTOM BOOKING PAVILION                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#000B3B] via-[#001162] to-[#000B3B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-[#FEC401]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dedicated Tour Concierge Active 24/7</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#FAF9F5] tracking-tight">
            Plan Your {title} with CABJATRA
          </h2>

          <p className="text-xs sm:text-sm text-[#F1F5F9]/80 max-w-xl mx-auto leading-relaxed">
            Pick your dates, choose your preferred vehicle, and let our verified local chauffeurs show you the best of Odisha. Confirmed with a transparent 10% advance deposit.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3.5">
            <Link
              href={`/book-tour?destination=${bookingTourSlug}`}
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all"
            >
              <Palmtree className="w-4 h-4 text-[#000B3B]" />
              <span>Book Your Cab Tour (10% Advance)</span>
              <ArrowRight className="w-4 h-4 text-[#000B3B]" />
            </Link>

            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
            >
              <Phone className="w-4 h-4 text-[#FEC401]" />
              <span>Call Helpline ({COMPANY_CONFIG.contact.phoneDisplay})</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/70 border-t border-white/10">
            <span>🛡️ 100% Commercial Yellow-Board Fleet</span>
            <span>⭐ Experienced Local Chauffeurs</span>
            <span>💳 10% Advance Deposit Model</span>
          </div>
        </div>
      </section>
    </div>
  );
};
