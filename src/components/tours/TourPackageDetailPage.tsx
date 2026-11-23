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
  Check,
  AirVent,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { VEHICLE_FLEET } from "@/data/vehicles";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

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
  cityBgImage?: string;
  overview: string;
  durationBadge: string;
  startingFromNote: string;
  destinations: TourDestinationItem[];
  packages: TourPackageOption[];
  itineraryDays: TourItineraryDay[];
  whyChoosePoints: {
    title: string;
    desc: string;
    image?: string;
    tag?: string;
    badge?: string;
  }[];
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
  cityBgImage,
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
  // Hero interactive vehicle selector tab state
  const [selectedHeroVehicleId, setSelectedHeroVehicleId] = useState<string>("large-car");

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Relevant hero vehicle data mapping
  const heroVehicles = [
    {
      id: "large-car",
      name: "Innova Crysta SUV",
      models: "Toyota Innova Crysta, Maruti Ertiga",
      passengers: 7,
      luggage: 4,
      rate: "From ₹19/km",
      tag: "Family Favorite",
      image: "/images/fleet/large-car.webp",
      desc: "Dual-zone AC, plush captain seats & smooth highway comfort for Puri & Konark tours.",
    },
    {
      id: "sedan",
      name: "Prime Sedan",
      models: "Swift Dzire, Toyota Etios",
      passengers: 4,
      luggage: 3,
      rate: "From ₹13/km",
      tag: "Couples & Small Families",
      image: "/images/fleet/sedan.webp",
      desc: "Chilled AC, plush legroom & generous boot space for day sightseeing circuits.",
    },
    {
      id: "mini-bus",
      name: "Tempo Traveller",
      models: "Force Urbania, 12–17 Seater",
      passengers: 17,
      luggage: 10,
      rate: "Custom Quote",
      tag: "Group Pilgrimage",
      image: "/images/fleet/mini-bus.webp",
      desc: "Reclining push-back seats & panoramic windows for extended family groups.",
    },
  ];

  const currentHeroVehicle =
    heroVehicles.find((v) => v.id === selectedHeroVehicleId) || heroVehicles[0];

  // Dynamic city landmark background resolution
  const activeCityBg =
    cityBgImage ||
    heroImage ||
    (bookingTourSlug === "temple" || title.toLowerCase().includes("bhubaneswar")
      ? "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1920&auto=format&fit=crop"
      : bookingTourSlug === "puri" || title.toLowerCase().includes("puri")
      ? "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=1920&auto=format&fit=crop"
      : bookingTourSlug === "konark" || title.toLowerCase().includes("konark")
      ? "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=1920&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1920&auto=format&fit=crop");

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans selection:bg-[#FEC401]/30">
            {/* ========================================================================= */}
      {/* SECTION 1: LUMINOUS ARCHITECTURAL HERO & INTERACTIVE TOUR STAGE           */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF9F5] to-white text-[#0F172A] pt-28 sm:pt-32 pb-14 sm:pb-16 lg:pt-32 lg:pb-16 min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        {/* Soft Golden Ambient Atmosphere - Zero Blue Void */}
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#FEC401]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-[#FEF3C7]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Authentic City / Destination Landmark Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={activeCityBg}
            alt={`${title} Destination Backdrop`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-15 mix-blend-multiply scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-[#FAF9F5]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Authoritative Editorial Heading & Fast Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              {/* Refined Unified Badge & Social Proof Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-bold text-[#000B3B] shadow-xs">
                  <div className="flex items-center gap-1.5 text-[#D97706]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{badge.split("&bull;")[0].trim()}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                  <span className="text-[#475569] font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#FEC401] fill-[#FEC401]" /> 4.95/5 Rating &bull; {durationBadge}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold font-display tracking-tight text-[#000B3B] leading-[1.14]">
                {title}
              </h1>

              {/* Subtitle - Punchy & Clear */}
              <p className="text-xs sm:text-sm text-[#D97706] font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
                {subtitle}
              </p>

              {/* Sleek Feature Assurances Single Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">100% Commercial</span>
                    <span className="text-[9.5px] text-[#64748B] block leading-tight">Sightseeing Fleet</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF9C3] text-[#CA8A04] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#CA8A04]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">Flexible Halts</span>
                    <span className="text-[9.5px] text-[#64748B] block leading-tight">Custom Pace</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                    <AirVent className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">Chilled Dual AC</span>
                    <span className="text-[9.5px] text-[#64748B] block leading-tight">Full Cabin</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#16A34A]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">Hotel Pickup</span>
                    <span className="text-[9.5px] text-[#64748B] block leading-tight">Direct Doorstep</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=${selectedHeroVehicleId}`}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(254,196,1,0.4)] active:translate-y-0.5 transition-all"
                >
                  <Palmtree className="w-4 h-4 text-[#000B3B]" />
                  <span>Reserve This Tour Package</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B]" />
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-[#F8FAFC] text-[#000B3B] font-bold text-xs inline-flex items-center gap-2 border border-[#CBD5E1] shadow-xs transition"
                >
                  <MessageSquare className="w-4 h-4 text-[#16A34A]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust Assurances Clean Single Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#64748B] border-t border-[#E2E8F0]">
                <span className="flex items-center gap-1.5 font-medium text-[#0F172A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  100% Commercial Fleet
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0F172A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Guaranteed Tariff Lock
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0F172A]">
                  <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                  {startingFromNote}
                </span>
              </div>
            </div>

            {/* Right Column: Clean Luxury Automotive Card (5 Cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-[0_20px_50px_rgba(0,11,59,0.10)] bg-white">
                {/* Top Interactive Vehicle Switcher Header */}
                <div className="px-5 py-3 flex items-center justify-between border-b border-[#F1F5F9] bg-[#FAF9F5]">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#000B3B] flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-[#D97706]" />
                    <span>Private Tour Fleet</span>
                  </span>
                  <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E2E8F0] shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setSelectedHeroVehicleId("sedan")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedHeroVehicleId === "sedan"
                          ? "bg-[#000B3B] text-[#FEC401] shadow-xs"
                          : "text-[#64748B] hover:text-[#000B3B]"
                      }`}
                    >
                      Prime Sedan
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedHeroVehicleId("large-car")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedHeroVehicleId === "large-car"
                          ? "bg-[#000B3B] text-[#FEC401] shadow-xs"
                          : "text-[#64748B] hover:text-[#000B3B]"
                      }`}
                    >
                      Innova Crysta
                    </button>
                  </div>
                </div>

                {/* 1. CLEAN VEHICLE PHOTO STAGE - Studio Light Aesthetics */}
                <div className="relative h-48 sm:h-52 w-full bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white p-4 flex items-center justify-center overflow-hidden border-b border-[#F1F5F9]">
                  {/* Soft Radial Backlight Stage */}
                  <div className="absolute inset-0 bg-radial-[at_center_center] from-[#FEC401]/10 via-transparent to-transparent pointer-events-none" />

                  <Image
                    src={currentHeroVehicle.image}
                    alt={currentHeroVehicle.name}
                    width={340}
                    height={190}
                    priority
                    className="object-contain max-h-42 drop-shadow-[0_16px_28px_rgba(0,11,59,0.12)] transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Dispatch Ready Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[10.5px] font-bold text-[#16A34A] shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                    <span>Dispatch Ready</span>
                  </div>
                </div>

                {/* 2. REFINED DETAILS & ACTION DECK */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A]">
                        {currentHeroVehicle.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-medium">
                        {currentHeroVehicle.models}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-black text-[#000B3B] block leading-none">
                        {currentHeroVehicle.rate}
                      </span>
                      <span className="text-[10px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-full inline-block mt-1">
                        All Tolls Included
                      </span>
                    </div>
                  </div>

                  {/* Specs Row */}
                  <div className="flex items-center justify-between text-xs text-[#475569] py-2.5 border-y border-[#F1F5F9]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>{currentHeroVehicle.passengers} Seats</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>{currentHeroVehicle.luggage} Bags</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <AirVent className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Dual AC</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Yellow-Plate</span>
                    </span>
                  </div>

                  {/* High-Contrast Action Button */}
                  <Link
                    href={`/book-tour?destination=${bookingTourSlug}&vehicle=${currentHeroVehicle.id}`}
                    className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] hover:brightness-110 text-white text-xs font-bold flex items-center justify-between shadow-md transition-all group"
                  >
                    <span className="text-white font-extrabold">Reserve {currentHeroVehicle.name}</span>
                    <div className="flex items-center gap-1 text-[#FEC401] font-black group-hover:translate-x-1 transition-transform">
                      <span>Instant Voucher</span>
                      <ArrowRight className="w-4 h-4 text-[#FEC401]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ========================================================================= */}
      {/* SECTION 2: EXECUTIVE COMMERCIAL FLEET SELECTION                           */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2 bg-[#EEF2F6] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Car className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Tour Vehicle Classes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Choose the Right Cab for Your Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              All vehicles are 100% commercial yellow-board registered, fully AC equipped, and maintained to pristine passenger hygiene standards.
            </p>
          </div>

          {/* 3 Executive Showcase Cards - Magazine Quality Edge-to-Edge Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Prime Commercial Sedan */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(2,20,107,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Full-Bleed Vehicle Stage - No Image Spillout */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/sedan.webp"
                    alt="Prime Sedan"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-white shadow-xs">
                    Couples &amp; Small Families
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#FEC401] text-[11px] font-black text-[#000B3B] shadow-xs">
                    ₹13/km
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Prime Sedan
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                        Dual-Zone AC
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#02146B]">
                      Maruti Swift Dzire, Toyota Etios
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      Smooth highway stability, plush upholstery, and generous boot space for BBI airport transfers and Golden Triangle travel.
                    </p>
                  </div>

                  {/* Clean Specs Row */}
                  <div className="flex items-center justify-between text-xs text-[#475569] py-2.5 border-y border-[#F1F5F9]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>4 Seats</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>3 Bags</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <AirVent className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Chilled AC</span>
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 text-xs text-[#475569]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Extra rear legroom &amp; clean sanitized seating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Dedicated boot space for 3 large travel bags</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Zero peak hour surge multiplier guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=sedan`}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                >
                  <span>Select Prime Sedan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: FEATURED HERO: Executive Toyota Innova Crysta SUV */}
            <div className="bg-white rounded-3xl border-2 border-[#FEC401] overflow-hidden shadow-[0_16px_45px_rgba(254,196,1,0.18)] md:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative">
              {/* Crown Top Ribbon */}
              <div className="bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] text-[10.5px] font-black uppercase tracking-wider text-center py-1.5 shadow-xs flex items-center justify-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#000B3B]" />
                <span>#1 Most Booked for Family Tours &amp; Pilgrimages</span>
              </div>

              <div>
                {/* Visual Full-Bleed Vehicle Stage - No Image Spillout */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/large-car.webp"
                    alt="Toyota Innova Crysta"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-white shadow-xs">
                    Premium Family Class
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3.5 py-1 rounded-full bg-[#FEC401] text-[11px] font-black text-[#000B3B] shadow-xs">
                    ₹19/km
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Innova Crysta / SUV
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                        Independent Rear AC
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#02146B]">
                      Toyota Innova Crysta, Maruti Ertiga
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      Plush captain chairs, superior suspension, and dual AC blowers for senior citizens and family pilgrimages to Puri Dham.
                    </p>
                  </div>

                  {/* Clean Specs Row */}
                  <div className="flex items-center justify-between text-xs text-[#475569] py-2.5 border-y border-[#FEF3C7]">
                    <span className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                      <Users className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>7 Seats</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                      <Briefcase className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>4–5 Bags</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-[#16A34A]">
                      <AirVent className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Dual AC Blowers</span>
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 text-xs text-[#475569]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Captain leatherette seats with armrests for comfort</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>High ground clearance for coastal &amp; temple terrain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Expansive luggage bay for Mahaprasad &amp; suitcases</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=large-car`}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] text-xs font-black flex items-center justify-center gap-2 shadow-md transition-all group-hover:shadow-lg"
                >
                  <span>Select Innova Crysta</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Luxury Tempo Traveller & Urbania */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(2,20,107,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Full-Bleed Vehicle Stage - No Image Spillout */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/mini-bus.webp"
                    alt="Tempo Traveller"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-white shadow-xs">
                    Group Tours &amp; Pilgrimages
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#FEC401] text-[11px] font-black text-[#000B3B] shadow-xs">
                    Custom Quote
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Tempo Traveller / Urbania
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                        Full Cabin AC
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#02146B]">
                      Force Urbania, 12 to 17 Seater Luxury AC
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      High-roof standing aisle, reclining push-back seating, and panoramic windows for extended family tours and wedding parties.
                    </p>
                  </div>

                  {/* Clean Specs Row */}
                  <div className="flex items-center justify-between text-xs text-[#475569] py-2.5 border-y border-[#F1F5F9]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>12–17 Seats</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-[#FEC401]" />
                      <span>10+ Bags</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <AirVent className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>High Roof AC</span>
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 text-xs text-[#475569]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Push-back ergonomic seats &amp; individual reading lamps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Massive dedicated rear luggage bay for group cargo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Experienced long-route highway pilgrimage captain</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=mini-bus`}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                >
                  <span>Enquire Group Cab</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Fleet Quality Assurance Strip */}
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-[#CBD5E1] p-5 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FEF3C7] text-[#000B3B] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">100% Yellow-Board Plates</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    State commercial road permits and comprehensive passenger insurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#DCFCE7] text-[#16A34A] shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">0% Cancellation Policy</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    Pre-assigned verified chauffeurs with guaranteed vehicle dispatch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#E0F2FE] text-[#0284C7] shrink-0">
                  <AirVent className="w-4 h-4 text-[#0284C7]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Chilled AC on Every Trip</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    100% air-conditioned comfort from departure to destination drop.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FEF9C3] text-[#CA8A04] shrink-0">
                  <CreditCard className="w-4 h-4 text-[#CA8A04]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Transparent KM Billing</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    Direct honest kilometre rates with zero hidden surge multipliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: POPULAR DESTINATIONS & ATTRACTIONS COVERED                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
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
                className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Golden Ambient Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FEC401] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                {/* Image Frame */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#000B3B]">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-[#FEC401]/50 text-[10.5px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#FEC401]" />
                    <span>{dest.tag}</span>
                  </div>
                  <div className="absolute bottom-2.5 left-3.5 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9.5px] text-[#10B981] font-bold">
                    ● Included Sightseeing Circuit
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                      {dest.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                      {dest.desc}
                    </p>
                  </div>

                  {/* Key Highlights Chips */}
                  {dest.keyAttractions && dest.keyAttractions.length > 0 && (
                    <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                        Must-Visit Sights:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.keyAttractions.map((att, idx) => (
                          <span
                            key={idx}
                            className="text-[10.5px] font-semibold bg-[#FAF9F5] text-[#334155] px-2.5 py-1 rounded-lg border border-[#E2E8F0]"
                          >
                            ✓ {att}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-bold text-[#16A34A]">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Dedicated Chauffeur Waiting</span>
                    </span>
                    <span className="text-[#000B3B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-[#FEC401]" />
                    </span>
                  </div>
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
                <span>Guaranteed Fixed Tariffs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#E2E8F0] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
                >
                  {/* Top Golden Accent Edge */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FEC401] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#000B3B] bg-gradient-to-r from-[#FEC401] to-[#E5AD00] px-3 py-1 rounded-full shadow-xs">
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-[#64748B] font-bold flex items-center gap-1.5 bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                        <Clock className="w-3.5 h-3.5 text-[#000B3B]" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                      {pkg.subtitle}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2.5 pt-3 border-t border-[#F1F5F9] text-xs sm:text-sm text-[#334155]">
                      {pkg.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="font-medium text-[#1E293B]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tariff & Action */}
                  <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#94A3B8] block uppercase tracking-wider">
                        Indicative Estimate
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#000B3B]">
                        {pkg.approxPrice}
                      </span>
                    </div>

                    <Link
                      href={`/book-tour?destination=${bookingTourSlug}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#000B3B] to-[#02146B] text-white text-xs font-bold hover:brightness-110 shadow-sm inline-flex items-center gap-1.5 transition active:translate-y-0.5"
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

            <div className="space-y-5">
              {itineraryDays.map((dayItem, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-all space-y-3.5 relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <span className="text-xs font-black uppercase tracking-wider text-[#000B3B] bg-gradient-to-r from-[#FEC401] to-[#E5AD00] px-3.5 py-1 rounded-full shadow-xs self-start">
                      {dayItem.day}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                      {dayItem.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1 font-normal">
                    {dayItem.desc}
                  </p>

                  {dayItem.highlights && dayItem.highlights.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {dayItem.highlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="text-[11px] font-semibold text-[#000B3B] bg-[#FAF9F5] px-3 py-1 rounded-lg border border-[#E2E8F0] inline-flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                          <span>{hl}</span>
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

          {/* 3 High-Impact Tour Value Proposition Cards with Real Photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyChoosePoints.slice(0, 3).map((pt, i) => {
              // Real photography mapping for highest visual authenticity
              const defaultImages = [
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop", // Scenic Highway / Flexible sightseeing
                "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=800&auto=format&fit=crop", // Premium AC vehicle
                "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=800&auto=format&fit=crop", // Sacred temple / safe luggage custody
              ];
              const cardImage = pt.image || defaultImages[i % defaultImages.length];

              const defaultTags = [
                "Flexible Road Travel",
                "Dedicated Private AC Fleet",
                "Senior & Family First",
              ];
              const cardTag = pt.tag || defaultTags[i % defaultTags.length];

              const defaultPills = [
                "✓ Zero Metered Pressure",
                "✓ 100% Commercial Board",
                "✓ Safe Luggage Custody",
              ];
              const cardPill = pt.badge || defaultPills[i % defaultPills.length];

              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.12)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group relative"
                >
                  {/* Top Photographic Header Frame */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#000B3B]">
                    <Image
                      src={cardImage}
                      alt={pt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Text & Tag Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                    {/* Top Floating Badge & Step Number */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#FEC401]" />
                        <span>{cardTag}</span>
                      </span>

                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs flex items-center justify-center shadow-md">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Bottom Micro-Assurance Overlay on Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-white tracking-wide drop-shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Guaranteed Tour Standard</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                        {pt.desc}
                      </p>
                    </div>

                    {/* Bottom Highlight Assurance Pill */}
                    <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7]/80 px-2.5 py-1 rounded-lg border border-[#BBF7D0] inline-flex items-center gap-1">
                        {cardPill}
                      </span>
                      <span className="text-[10.5px] text-[#000B3B] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        <span>Verified</span>
                        <ArrowRight className="w-3 h-3 text-[#FEC401]" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
            {/* Inclusions Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F0FDF4]/50 via-white to-white border-2 border-[#BBF7D0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(22,163,74,0.1)] transition-all duration-300 space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-2xl bg-[#DCFCE7] text-[10px] font-black text-[#166534] uppercase tracking-wider border-b border-l border-[#BBF7D0]">
                100% Covered
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#16A34A] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-display">
                    What Is Fully Included
                  </h3>
                  <p className="text-xs text-[#64748B]">All essential road travel costs covered</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                {inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/90 p-3 rounded-xl border border-[#E2E8F0]/70 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#1E293B]">{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#BBF7D0]/60 text-[11px] font-bold text-[#166534] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                <span>Dedicated Chauffeur • Fuel &amp; Driver Day Allowance Included</span>
              </div>
            </div>

            {/* Exclusions Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFBEB]/50 via-white to-white border-2 border-[#FDE68A] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(217,119,6,0.1)] transition-all duration-300 space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-2xl bg-[#FEF3C7] text-[10px] font-black text-[#92400E] uppercase tracking-wider border-b border-l border-[#FDE68A]">
                Direct Settlement
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shadow-md">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-display">
                    What Is Excluded (Direct Settlements)
                  </h3>
                  <p className="text-xs text-[#64748B]">Settled directly with physical entry tickets</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#64748B]">
                {exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/90 p-3 rounded-xl border border-[#E2E8F0]/70 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0 mt-2" />
                    <span className="text-[#475569] font-medium">{exc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#FDE68A]/60 text-[11px] font-bold text-[#92400E] flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#D97706]" />
                <span>Zero Driver Haggling • You Purchase Monument Tickets Directly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7.5: VERIFIED TRAVELER REVIEWS WITH REAL AVATARS                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <ThumbsUp className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Verified Tour Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Trusted by 12,000+ Travelers in Odisha
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Read how fellow families, pilgrim groups, and tourists experienced our curated cab tour packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-5 relative group overflow-hidden"
              >
                {/* Top Subtle Amber Ambient Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FEC401] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Rating Stars & Verified Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FEC401] text-[#FEC401]"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-black text-[#000B3B] ml-1">
                        5.0
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#64748B] bg-[#F8FAFC] px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                      {t.date}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <span className="absolute -top-3 -left-2 text-4xl text-[#FEC401]/20 font-serif select-none pointer-events-none">
                      “
                    </span>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic relative z-10 font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Customer Profile Row with Real Avatar Image */}
                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#FEC401]/70 shadow-md shrink-0 bg-[#000B3B]">
                      <Image
                        src={t.avatarUrl}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] truncate font-display">
                          {t.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#64748B] truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#94A3B8] shrink-0" />
                        <span>{t.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#BBF7D0] inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                      <span>Verified</span>
                    </span>
                    <p className="text-[9.5px] font-semibold text-[#000B3B] mt-1 text-right">
                      {t.tripType}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Review Trust Strip */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-black text-sm shadow-sm">
                4.9★
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  4.9 / 5.0 Average Rating across 12,000+ Completed Trips
                </p>
                <p className="text-[11px] text-[#64748B]">
                  100% Yellow-Board Commercial Fleet • Dedicated Sightseeing Drivers • Flexible Halts
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-bold text-[#166534] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                Google Reviews Verified
              </span>
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

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#FEC401] shadow-[0_8px_25px_rgba(254,196,1,0.15)] bg-[#FFFDF5]"
                        : "border-[#E2E8F0] bg-white shadow-xs hover:border-[#CBD5E1]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left font-bold text-[#0F172A] text-sm sm:text-base font-display flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full transition-colors ${
                            isOpen ? "bg-[#FEC401]" : "bg-[#CBD5E1]"
                          }`}
                        />
                        <span>{faq.q}</span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#000B3B] text-[#FEC401]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/60">
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
            Pick your dates, choose your preferred vehicle, and let our verified local chauffeurs show you the best of Odisha. Confirmed with guaranteed vehicle allocation and zero surge pricing.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3.5">
            <Link
              href={`/book-tour?destination=${bookingTourSlug}`}
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all"
            >
              <Palmtree className="w-4 h-4 text-[#000B3B]" />
              <span>Book Your Cab Tour Now</span>
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
            <span>💳 Transparent Fixed Tariffs</span>
          </div>
        </div>
      </section>
    </div>
  );
};
