"use client";

import React, { useState } from "react";
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
  Phone,
  Users,
  Briefcase,
  Star,
  ChevronDown,
  Zap,
  MapPin,
  Calendar,
  Check,
  CreditCard,
  Navigation,
  Calculator,
  ThumbsUp,
  HelpCircle,
  TrendingDown,
  AirVent,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { VEHICLE_FLEET } from "@/data/vehicles";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

interface RouteFare {
  route: string;
  distance: string;
  approxDuration: string;
  sedanEstimate: string;
  suvEstimate: string;
}

interface WhyUsPoint {
  title: string;
  desc: string;
  image?: string;
  tag?: string;
  badge?: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  heroImage: string;
  cityBgImage?: string;
  overview: string;
  whyUsPoints: WhyUsPoint[];
  routeFares: RouteFare[];
  inclusions: string[];
  exclusions: string[];
  bookingCategoryKey: string;
  serviceFaq: { q: string; a: string }[];
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({
  title,
  subtitle,
  badge,
  heroImage,
  cityBgImage,
  overview,
  whyUsPoints,
  routeFares,
  inclusions,
  exclusions,
  bookingCategoryKey,
  serviceFaq,
}) => {
  // Hero interactive vehicle selector tab state
  const [selectedHeroVehicleId, setSelectedHeroVehicleId] = useState<string>("large-car");
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number>(0);

  // Dynamic city landmark background resolution
  const activeCityBg =
    cityBgImage ||
    (bookingCategoryKey === "bhubaneswar" || title.toLowerCase().includes("bhubaneswar")
      ? "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1920&auto=format&fit=crop"
      : bookingCategoryKey === "puri" || title.toLowerCase().includes("puri")
      ? "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=1920&auto=format&fit=crop"
      : bookingCategoryKey === "kataka" || title.toLowerCase().includes("kataka") || title.toLowerCase().includes("cuttack")
      ? "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=85&w=1920&auto=format&fit=crop"
      : heroImage);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Relevant hero vehicle data mapping
  const heroVehicles = [
    {
      id: "sedan",
      name: "Prime Sedan",
      models: "Swift Dzire, Toyota Etios, Honda Amaze",
      passengers: 4,
      luggage: 3,
      rate: "₹13/km",
      tag: "Most Popular",
      image: "/images/fleet/sedan.webp",
      desc: "Plush AC seating & generous boot space for executive transfers & Golden Triangle tours.",
    },
    {
      id: "large-car",
      name: "Innova Crysta / SUV",
      models: "Innova Crysta, Maruti Ertiga, Kia Carens",
      passengers: 7,
      luggage: 4,
      rate: "₹19/km",
      tag: "Family Comfort",
      image: "/images/fleet/large-car.webp",
      desc: "Dual-zone chilled AC, captain seats & high ground clearance for senior family trips.",
    },
    {
      id: "mini-bus",
      name: "Tempo Traveller / Urbania",
      models: "Force Urbania, 12–17 Seater AC Luxury",
      passengers: 17,
      luggage: 10,
      rate: "Custom Quote",
      tag: "Group Pilgrimage",
      image: "/images/fleet/mini-bus.webp",
      desc: "Spacious push-back seating, high roof aisle & ample luggage storage for larger groups.",
    },
  ];

  const currentHeroVehicle =
    heroVehicles.find((v) => v.id === selectedHeroVehicleId) || heroVehicles[0];

  const comparisonRows = [
    {
      factor: "Driver Cancellation Rate",
      cabjatra: "0% Guaranteed (Pre-Assigned Chauffeur)",
      generic: "Frequent (30%–40% peak cancellations)",
      highlight: true,
    },
    {
      factor: "Peak & Midnight Surge",
      cabjatra: "Zero Surge (Fixed Transparent KM Rate)",
      generic: "1.5x to 2.5x Sudden Surge Multipliers",
      highlight: true,
    },
    {
      factor: "Fleet Registration",
      cabjatra: "100% Yellow-Board Commercial Fleet",
      generic: "Mixed / Unregulated Private Plates",
      highlight: false,
    },
    {
      factor: "Air Conditioning Guarantee",
      cabjatra: "100% Chilled AC Running on Every Trip",
      generic: "Frequent Driver Refusals / Extra Haggling",
      highlight: true,
    },
    {
      factor: "Advance Booking Certainty",
      cabjatra: "Guaranteed Car Allocation (Instant Confirmation)",
      generic: "Uncertain (Searches driver 15 mins before)",
      highlight: false,
    },
    {
      factor: "Support & Dispatch Desk",
      cabjatra: "24/7 Human Phone & WhatsApp Concierge",
      generic: "Automated Chatbot Runarounds",
      highlight: false,
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Select Route & Vehicle",
      desc: "Pick your pickup address, destination, date & preferred cab class (Sedan, SUV, or Tempo).",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Instant Booking Confirmation",
      desc: "Secure your booking instantly. Our operations desk assigns your dedicated commercial vehicle and sends a WhatsApp confirmation voucher.",
      icon: CreditCard,
    },
    {
      num: "03",
      title: "Travel in Chilled AC Comfort",
      desc: "Your verified driver arrives 15 minutes before departure with AC running. Pay conveniently at destination drop via UPI or cash.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans selection:bg-[#FEC401]/30">
            {/* ========================================================================= */}
      {/* SECTION 1: LUMINOUS ARCHITECTURAL HERO & INTERACTIVE VEHICLE STAGE        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden border-b border-[#E2E8F0] pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Authentic City Landmark Photographic Backdrop - 100% Vibrant, Clear & Zero White Shadow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={activeCityBg}
            alt={`${title} City Backdrop`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* 100% Zero White Shadow: Cinematic contrast gradient that leaves authentic landmark vibrant & crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000B3B]/85 via-[#000B3B]/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/35 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6">
          <div className="max-w-3xl space-y-5 text-left">
            {/* Refined Unified Badge & Social Proof Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-xs">
                <div className="flex items-center gap-1.5 text-[#FEC401]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                  <span>{badge}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-white/90 font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#FEC401] fill-[#FEC401]" /> 4.9/5 Rating &bull; 12.4k+ Verified Rides
                </span>
              </div>
            </div>

            {/* Main Headline - High-Contrast Editorial White */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white drop-shadow-md leading-[1.12]">
              {title}
            </h1>

            {/* Subtitle - Punchy, High-Impact & Crystal Clear */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-sm max-w-2xl">
              {subtitle}
            </p>

            {/* Sleek Feature Highlights - Minimalist Inline Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#FEC401]" />
                <span>100% Commercial Yellow-Plate</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Zap className="w-4 h-4 text-[#FEC401]" />
                <span>Zero Surge Tariffs</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <AirVent className="w-4 h-4 text-[#38BDF8]" />
                <span>Chilled Dual AC Guaranteed</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Clock className="w-4 h-4 text-[#4ADE80]" />
                <span>Live Flight Radar Sync</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={`/book-cab?service=${bookingCategoryKey}`}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] font-black text-sm inline-flex items-center gap-2.5 shadow-[0_12px_28px_rgba(254,196,1,0.42)] active:translate-y-0.5 transition-all group"
              >
                <Car className="w-4 h-4 text-[#000B3B]" />
                <span>Reserve Your Cab Now</span>
                <ArrowRight className="w-4 h-4 text-[#000B3B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm inline-flex items-center gap-2 border border-white/25 backdrop-blur-md shadow-xs transition"
              >
                <MessageSquare className="w-4 h-4 text-[#4ADE80]" />
                <span>WhatsApp 24/7 Concierge</span>
              </a>
            </div>

            {/* Trust Assurances Clean Pill Strip */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 rounded-2xl bg-black/55 backdrop-blur-md border border-white/20 text-xs text-white/95 shadow-xs">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                  Pre-Assigned Chauffeur
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-[#16A34A]" />
                  Guaranteed Vehicle Allocation
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Zero Last-Minute Cancellation
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CreditCard className="w-4 h-4 text-[#16A34A]" />
                  Transparent Rates
                </span>
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
              <span>Commercial Fleet Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Choose the Right Cab for Your Journey
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
                    Executive &amp; City Commutes
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
                  href={`/book-cab?service=${bookingCategoryKey}&vehicle=sedan`}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                >
                  <span>Book Prime Sedan</span>
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
                  href={`/book-cab?service=${bookingCategoryKey}&vehicle=large-car`}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] text-xs font-black flex items-center justify-center gap-2 shadow-md transition-all group-hover:shadow-lg"
                >
                  <span>Book Innova Crysta</span>
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
                  href={`/book-cab?service=${bookingCategoryKey}&vehicle=mini-bus`}
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
      {/* SECTION 3: ROUTE PROFILES & FLEET AVAILABILITY CORRIDOR DECK (DIRECTLY DOWN FROM FLEET) */}
      {/* ========================================================================= */}
      {routeFares.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
                  <Compass className="w-3.5 h-3.5 text-[#FEC401]" />
                  <span>Popular Corridors</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                  Curated Transit Corridors &amp; Indicative Tariffs
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                  Transparent fare benchmarks for frequent routes. Pre-book your cab with guaranteed confirmation and zero surge pricing.
                </p>
              </div>
              <div className="text-[11px] text-[#000B3B] font-bold bg-[#FFFBEB] px-3.5 py-2 rounded-2xl border border-[#FEF08A] shadow-xs inline-flex items-center gap-2 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Zero Hidden Toll Surcharges</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {routeFares.map((rf, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#000B3B] bg-gradient-to-r from-[#FEC401] to-[#E5AD00] px-3 py-1 rounded-full shadow-xs">
                        Corridor 0{idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#000B3B] font-bold bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                        <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
                        <span>{rf.approxDuration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                      {rf.route}
                    </h3>

                    {/* Path Indicator Graphic */}
                    <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
                      <span className="font-bold flex items-center gap-1.5 text-[#000B3B]">
                        <MapPin className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Pickup Gate</span>
                      </span>
                      <div className="flex items-center gap-1.5 text-[10.5px] font-extrabold text-[#02146B] bg-white px-3 py-1 rounded-full border border-[#CBD5E1] shadow-xs">
                        <Navigation className="w-3 h-3 text-[#FEC401]" />
                        <span>{rf.distance}</span>
                      </div>
                      <span className="font-bold flex items-center gap-1.5 text-[#000B3B]">
                        <MapPin className="w-4 h-4 text-[#02146B] shrink-0" />
                        <span>Drop Gate</span>
                      </span>
                    </div>
                  </div>

                  {/* Seamless Dual Vehicle Estimation */}
                  <div className="pt-3 pb-2 border-y border-[#F1F5F9] grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10.5px] font-bold text-[#64748B] uppercase tracking-wider block">
                        Prime Sedan
                      </span>
                      <span className="text-lg font-black text-[#000B3B] block">
                        {rf.sedanEstimate}
                      </span>
                      <span className="text-[10.5px] text-[#16A34A] font-bold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> Dzire / Etios
                      </span>
                    </div>

                    <div className="space-y-1 border-l border-[#F1F5F9] pl-4">
                      <span className="text-[10.5px] font-bold text-[#64748B] uppercase tracking-wider block">
                        Innova Crysta SUV
                      </span>
                      <span className="text-lg font-black text-[#000B3B] block">
                        {rf.suvEstimate}
                      </span>
                      <span className="text-[10.5px] text-[#16A34A] font-bold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> 7-Seater AC
                      </span>
                    </div>
                  </div>

                  {/* Book This Corridor Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#F1F5F9]">
                    <span className="text-[11px] text-[#64748B] font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Transparent Pricing</span>
                    </span>
                    <Link
                      href={`/book-cab?service=${bookingCategoryKey}&to=${encodeURIComponent(
                        rf.route
                      )}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 shadow-sm inline-flex items-center gap-2 group-hover:scale-105 transition-all border border-white/10"
                    >
                      <span>Book Corridor</span>
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
      {/* SECTION 4: WHY CHOOSE CABJATRA + EXECUTIVE SHOWDOWN MATRIX                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Service Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Why Travelers Choose Our {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Unlike generic ride-hailing apps with rampant cancellations and surge gouging, CABJATRA provides scheduled certainty, verified commercial drivers, and pristine AC vehicles.
            </p>
          </div>

          {/* 3 High-Impact Service Value Proposition Cards with Real Photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {whyUsPoints.slice(0, 3).map((pt, i) => {
              const defaultImages = [
                "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop",
              ];
              const cardImage = pt.image || defaultImages[i % defaultImages.length];

              const defaultTags = [
                "Punctual Dispatch",
                "Pre-Assigned Chauffeur",
                "Zero Surge Tariffs",
              ];
              const cardTag = pt.tag || defaultTags[i % defaultTags.length];

              const defaultPills = [
                "✓ Real-Time Delay Buffer",
                "✓ 0% App Cancellation",
                "✓ Transparent Fixed Tariffs",
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#FEC401]" />
                        <span>{cardTag}</span>
                      </span>

                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs flex items-center justify-center shadow-md">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-white tracking-wide drop-shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Guaranteed Commercial Standard</span>
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

          {/* Executive 2-Column Showdown Comparison Card */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Winner Card: CABJATRA Dedicated Chauffeur Service */}
            <div className="rounded-3xl bg-gradient-to-br from-[#000B3B] via-[#001353] to-[#000B3B] text-white p-7 sm:p-8 border-2 border-[#FEC401] shadow-[0_20px_50px_rgba(0,11,59,0.35)] relative flex flex-col justify-between overflow-hidden group">
              {/* Top Crown Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#000B3B]" />
                <span>Recommended Choice</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FEC401] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FEC401]" />
                    <span>Odisha Commercial Fleet</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    CABJATRA Chauffeur Service
                  </h3>
                  <p className="text-xs text-[#CBD5E1]">
                    Guaranteed commercial transit backed by our 24/7 dedicated dispatch operations desk.
                  </p>
                </div>

                {/* Verified Features Checklist */}
                <ul className="space-y-3 text-xs sm:text-[13px]">
                  {comparisonRows.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                      <div className="p-1 rounded-full bg-[#10B981]/20 text-[#10B981] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      </div>
                      <div>
                        <span className="text-[10.5px] text-white/60 block font-medium">{row.factor}</span>
                        <span className="font-bold text-white">{row.cabjatra}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15">
                <Link
                  href={`/book-cab?service=${bookingCategoryKey}&vehicle=sedan`}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] text-xs font-black flex items-center justify-center gap-2 shadow-skeuo-gold transition-all"
                >
                  <span>Reserve with Guaranteed Dispatch</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B]" />
                </Link>
              </div>
            </div>

            {/* Risk Card: Generic App-Based Aggregators */}
            <div className="rounded-3xl bg-white text-[#0F172A] p-7 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-[#DC2626]" />
                    <span>Unpredictable Gig Aggregators</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F172A]">
                    Generic Ride-Hailing Apps
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Uncommitted platform drivers with frequent cancellations and dynamic surge charges.
                  </p>
                </div>

                {/* Risk Points Checklist */}
                <ul className="space-y-3 text-xs sm:text-[13px]">
                  {comparisonRows.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#FEF2F2]/60 p-3 rounded-2xl border border-[#FEE2E2]">
                      <div className="p-1 rounded-full bg-[#EF4444]/15 text-[#EF4444] shrink-0 mt-0.5">
                        <XCircle className="w-4 h-4 text-[#EF4444]" />
                      </div>
                      <div>
                        <span className="text-[10.5px] text-[#64748B] block font-medium">{row.factor}</span>
                        <span className="font-semibold text-[#991B1B]">{row.generic}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F1F5F9]">
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-[11px] font-medium text-[#64748B]">
                  High cancellation rates &amp; unverified private vehicles during peak hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: HOW YOUR CAB RIDE WORKS (ANIMATED 3-STEP TIMELINE)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Simple Booking Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              How Your Ride Works with CABJATRA
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Transparent, reliable, and stress-free. From reservation to arrival, here is how we ensure 100% on-time dispatch.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connecting Progress Track */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#FEC401] via-[#000B3B] to-[#FEC401] rounded-full z-0 opacity-20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {steps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.14)] hover:-translate-y-2.5 transition-all duration-300 relative space-y-5 group overflow-hidden"
                  >
                    {/* Top Animated Progress Indicator */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#FEC401] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center justify-between">
                      {/* Animated Step Node with Pulse Halo */}
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-[#FEC401]/35 animate-pulse blur-xs group-hover:bg-[#FEC401]/60 transition-all" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md border border-white/10 group-hover:scale-108 transition-transform">
                          <Icon className="w-6 h-6 text-[#FEC401]" />
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div className="px-3.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E2E8F0] group-hover:border-[#FEC401] transition-colors">
                        <span className="text-sm font-black font-display text-[#000B3B] group-hover:text-[#D97706] transition-colors">
                          Step {st.num}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-display group-hover:text-[#000B3B] transition-colors">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1F5F9] flex items-center gap-1.5 text-[11px] font-bold text-[#16A34A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Instant WhatsApp Voucher Confirmation</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

{/* ========================================================================= */ }
{/* SECTION 6: CHARTER CLARITY (INCLUSIONS & EXCLUSIONS)                      */ }
{/* ========================================================================= */ }
<section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
        Charter Clarity &amp; Transparency
      </h2>
      <p className="text-xs sm:text-sm text-[#64748B] mt-2">
        We eliminate billing surprises and offline haggling before your journey even begins.
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
            <p className="text-xs text-[#64748B]">Zero hidden surcharges on your basic quote</p>
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
          <span>Transparent Kilometre Metering • Dedicated Climate-Controlled Cabin</span>
        </div>
      </div>

      {/* Exclusions Card */}
      <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFBEB]/50 via-white to-white border-2 border-[#FDE68A] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(217,119,6,0.1)] transition-all duration-300 space-y-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-2xl bg-[#FEF3C7] text-[10px] font-black text-[#92400E] uppercase tracking-wider border-b border-l border-[#FDE68A]">
          Pay at Actuals
        </div>

        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shadow-md">
            <XCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0F172A] font-display">
              Transparent Exclusions (Direct Receipts)
            </h3>
            <p className="text-xs text-[#64748B]">Settled directly with physical tax or parking slips</p>
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
          <span>Zero Driver Haggling • You Retain All Physical Toll &amp; Parking Slips</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========================================================================= */ }
{/* SECTION 7: VERIFIED TRAVELER REVIEWS WITH REAL AVATARS                     */ }
{/* ========================================================================= */ }
<section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
        <ThumbsUp className="w-3.5 h-3.5 text-[#FEC401]" />
        <span>Verified Rider Experiences</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
        Trusted by 12,000+ Travelers in Odisha
      </h2>
      <p className="text-xs sm:text-sm text-[#64748B] mt-2">
        Read how fellow business executives, pilgrim families, and tourists experienced our commercial cab dispatch.
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
            100% Yellow-Board Commercial Fleet • Zero Surge Fare Assurance • Verified Drivers
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

{/* ========================================================================= */ }
{/* SECTION 8: SERVICE FAQ ACCORDION                                          */ }
{/* ========================================================================= */ }
{
  serviceFaq.length > 0 && (
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
          {serviceFaq.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
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
                      className={`w-2 h-2 rounded-full transition-colors ${isOpen ? "bg-[#FEC401]" : "bg-[#CBD5E1]"
                        }`}
                    />
                    <span>{faq.q}</span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                      ? "bg-[#000B3B] text-[#FEC401]"
                      : "bg-[#F1F5F9] text-[#64748B]"
                      }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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

        {/* WhatsApp Quick Help Callout */}
        <div className="mt-8 p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-[#16A34A] shrink-0" />
            <span className="text-xs font-semibold text-[#166534]">
              Have a specific question about early morning timings, route stops, or luggage space?
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
  )
}

{/* ========================================================================= */ }
{/* SECTION 9: HIGH-IMPACT LUXURY BOTTOM BOOKING PAVILION                     */ }
{/* ========================================================================= */ }
<section className="py-16 sm:py-20 bg-gradient-to-br from-[#000B3B] via-[#001162] to-[#000B3B] text-white relative overflow-hidden">
  <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-[#FEC401]">
      <ShieldCheck className="w-3.5 h-3.5" />
      <span>Dedicated Dispatch Desk Active 24/7</span>
    </div>

    <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#FAF9F5] tracking-tight">
      Ready to Confirm Your {title}?
    </h2>

    <p className="text-xs sm:text-sm text-[#F1F5F9]/80 max-w-xl mx-auto leading-relaxed">
      Submit your travel route and date. Our dispatch team allocates a certified commercial yellow-board car and sends your verified driver voucher with instant confirmation.
    </p>

    <div className="pt-4 flex flex-wrap justify-center gap-3.5">
      <Link
        href={`/book-cab?service=${bookingCategoryKey}`}
        className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all"
      >
        <Car className="w-4 h-4 text-[#000B3B]" />
        <span>Reserve Your Cab Now</span>
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

    {/* Bottom Security Footer */}
    <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/70 border-t border-white/10">
      <span>🛡️ 100% Commercial Fleet</span>
      <span>⚡ Zero Surge Pricing Guarantee</span>
      <span>💳 Transparent Fixed Tariffs</span>
    </div>
  </div>
</section>
    </div >
  );
};
