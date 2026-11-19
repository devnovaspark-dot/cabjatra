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
  ThumbsUp,
  HelpCircle,
  TrendingDown,
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
  // Hero interactive vehicle selector tab state
  const [selectedHeroVehicleId, setSelectedHeroVehicleId] = useState<string>("sedan");

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      cabjatra: "Guaranteed Car Allocation with 10% Deposit",
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
      title: "Lock with 10% Advance Deposit",
      desc: "Secure your booking instantly. Our operations desk assigns your dedicated commercial vehicle and sends a WhatsApp confirmation voucher.",
      icon: CreditCard,
    },
    {
      num: "03",
      title: "Travel in Chilled AC Comfort",
      desc: "Your verified driver arrives 15 minutes before departure with AC running. Pay the remaining 90% balance directly at destination drop via UPI or cash.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans selection:bg-[#FEC401]/30">
      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC ARCHITECTURAL HERO & INTERACTIVE VEHICLE STAGE     */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#000B3B] via-[#001162] to-[#000B3B] text-white pt-28 sm:pt-36 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-black/20">
        {/* Ambient Atmospheric Sheens */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#02146B]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Scenic Backdrop Texture */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
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
            {/* Left Column: Heading, Value Prop, Social Proof & Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Badge & Social Proof Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-[#FEC401] shadow-soft">
                  <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                  <span>{badge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001162]/80 backdrop-blur-md border border-[#FEC401]/30 text-[10.5px] font-semibold text-white shadow-soft">
                  <Star className="w-3.5 h-3.5 text-[#FEC401] fill-[#FEC401]" />
                  <span>4.9/5 Rating &bull; 12,400+ Verified Rides</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#FEC401] font-display italic">
                {subtitle}
              </p>

              {/* Overview Prose */}
              <p className="text-xs sm:text-sm text-[#F1F5F9]/85 leading-relaxed pt-1 max-w-2xl font-normal mx-auto lg:mx-0">
                {overview}
              </p>

              {/* Quick Route Corridor Chips */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-[11px]">
                <span className="text-[#94A3B8] font-medium mr-1">Frequent:</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  ✈️ BBI Airport Drops
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  🏢 Patia Infocity Corridor
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  🌊 Puri Coastal Highway
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-white/90">
                  🚆 Station Pickups
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3">
                <Link
                  href={`/book-cab?service=${bookingCategoryKey}`}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 text-[#001162] font-bold text-xs inline-flex items-center gap-2 active:translate-y-0.5 transition-all"
                >
                  <Car className="w-4 h-4 text-[#001162]" />
                  <span>Reserve This Cab (10% Advance)</span>
                  <ArrowRight className="w-4 h-4 text-[#001162]" />
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
                >
                  <MessageSquare className="w-4 h-4 text-[#FEC401]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust Assurances Pill Row */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-[#F1F5F9]/80 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FEC401]" />
                  100% Commercial Yellow-Board Fleet
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
                  Guaranteed On-Time Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEC401]" />
                  Zero Surge Pricing
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Fleet Stage Showcase Card (5 Cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.7)] bg-gradient-to-br from-[#02146B] to-[#000B3B] p-4 sm:p-5">
                {/* Vehicle Tab Switcher on Card Top */}
                <div className="flex items-center p-1 rounded-2xl bg-black/40 border border-white/15 mb-3">
                  {heroVehicles.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedHeroVehicleId(v.id)}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-[10.5px] font-bold transition-all text-center cursor-pointer ${
                        selectedHeroVehicleId === v.id
                          ? "bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] shadow-md"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {v.name.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Car Showcase Visual Area */}
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-[#000B3B] via-[#02146B]/60 to-[#000B3B] border border-white/10 flex items-center justify-center p-3">
                  {/* Ambient Glow behind Car */}
                  <div className="absolute inset-0 bg-radial-[at_center_center] from-[#FEC401]/15 to-transparent pointer-events-none" />

                  <Image
                    src={currentHeroVehicle.image}
                    alt={currentHeroVehicle.name}
                    fill
                    priority
                    className="object-contain p-2 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#FEC401]/50 text-[10px] font-bold text-[#FEC401] shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#FEC401]" />
                    <span>{currentHeroVehicle.tag}</span>
                  </div>

                  {/* Top Right Rate Pill */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#001162]/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-md">
                    <span>Base {currentHeroVehicle.rate}</span>
                  </div>
                </div>

                {/* Vehicle Specs & Action Bar */}
                <div className="mt-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">
                        {currentHeroVehicle.name}
                      </h3>
                      <p className="text-[10.5px] text-[#94A3B8] truncate">
                        {currentHeroVehicle.models}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#10B981] font-bold bg-[#10B981]/15 px-2 py-0.5 rounded-full border border-[#10B981]/30">
                      ● Active Fleet
                    </span>
                  </div>

                  {/* Capacity Pills */}
                  <div className="grid grid-cols-3 gap-2 py-1 text-center text-[10px] text-white/80">
                    <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3 text-[#FEC401]" />
                      <span>{currentHeroVehicle.passengers} Seats</span>
                    </div>
                    <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#FEC401]" />
                      <span>{currentHeroVehicle.luggage} Bags</span>
                    </div>
                    <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FEC401]" />
                      <span>Dual AC</span>
                    </div>
                  </div>

                  {/* Bottom Instant Quote Action */}
                  <Link
                    href={`/book-cab?service=${bookingCategoryKey}&vehicle=${currentHeroVehicle.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] text-xs font-black flex items-center justify-between shadow-md transition-all active:translate-y-0.5 group"
                  >
                    <span>Reserve {currentHeroVehicle.name} (10% Advance)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#000B3B] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY CHOOSE CABJATRA + COMPARISON MATRIX                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
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

          {/* 3 Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {whyUsPoints.map((pt, i) => (
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

          {/* Side-by-Side Comparison Matrix Card */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-lg bg-white">
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FEC401]">
                  Odisha Travel Comparison
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  CABJATRA vs Generic Ride-Hailing Apps
                </h3>
              </div>
              <div className="text-[11px] font-semibold text-[#10B981] bg-[#10B981]/20 border border-[#10B981]/30 px-3 py-1 rounded-full self-start sm:self-auto">
                ✓ 100% Guaranteed Commercial Service
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] font-bold">
                    <th className="py-3.5 px-4 sm:px-6">Service Parameter</th>
                    <th className="py-3.5 px-4 sm:px-6 text-[#000B3B] bg-[#FFFBEB]/60 font-black">
                      CABJATRA Commercial Service
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-[#64748B]">
                      Generic App-Based Cabs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF9F5]"}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0F172A]">
                        {row.factor}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#000B3B] bg-[#FFFBEB]/60">
                        <span className="inline-flex items-center gap-1.5 text-[#16A34A]">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#16A34A]" />
                          <span>{row.cabjatra}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#64748B]">
                        <span className="inline-flex items-center gap-1.5 text-[#DC2626]">
                          <XCircle className="w-4 h-4 shrink-0 text-[#DC2626]" />
                          <span>{row.generic}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: COMMERCIAL AC FLEET SHOWCASE                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <Car className="w-3.5 h-3.5 text-[#FEC401]" />
              <span>Commercial Fleet Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Choose the Right Cab for Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Every vehicle in our fleet is yellow-board commercial registered, climate-controlled, sanitized before every assignment, and operated by a verified local driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VEHICLE_FLEET.slice(1, 4).map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Car Photo Frame */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-[#000B3B] to-[#02146B] p-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FEC401]/50 text-[10px] font-bold text-[#FEC401]">
                    {vehicle.tag || "Verified Class"}
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

                {/* Details Body */}
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

                  {/* Specs Pill Grid */}
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

                  {/* Booking CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/book-cab?service=${bookingCategoryKey}&vehicle=${vehicle.id}`}
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
      {/* SECTION 4: ROUTE PROFILES & FLEET AVAILABILITY CORRIDOR DECK             */}
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
                  Transparent fare benchmarks for frequent routes. Pre-book your cab with a 10% advance deposit.
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
                  className="bg-[#FAF9F5] rounded-3xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#000B3B] bg-[#FEC401] px-2.5 py-0.5 rounded-full">
                        Corridor {idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#000B3B]" />
                        <span>{rf.approxDuration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                      {rf.route}
                    </h3>

                    {/* Path Indicator Graphic */}
                    <div className="p-2.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
                      <span className="font-semibold flex items-center gap-1 text-[#000B3B]">
                        <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>Pickup Gate</span>
                      </span>
                      <span className="text-[10.5px] font-bold text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-md">
                        {rf.distance}
                      </span>
                      <span className="font-semibold flex items-center gap-1 text-[#000B3B]">
                        <Navigation className="w-3.5 h-3.5 text-[#02146B]" />
                        <span>Dropoff Point</span>
                      </span>
                    </div>
                  </div>

                  {/* Dual Vehicle Estimation Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                      <span className="text-[10px] font-black text-[#64748B] block uppercase tracking-wider">
                        Prime Sedan
                      </span>
                      <span className="font-black text-[#000B3B] text-sm block">
                        {rf.sedanEstimate}
                      </span>
                      <span className="text-[10px] text-[#16A34A] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Dzire / Etios
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                      <span className="text-[10px] font-black text-[#64748B] block uppercase tracking-wider">
                        Luxury SUV
                      </span>
                      <span className="font-black text-[#000B3B] text-sm block">
                        {rf.suvEstimate}
                      </span>
                      <span className="text-[10px] text-[#16A34A] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Innova Crysta
                      </span>
                    </div>
                  </div>

                  {/* Book This Corridor Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Lock with 10% advance deposit
                    </span>
                    <Link
                      href={`/book-cab?service=${bookingCategoryKey}&to=${encodeURIComponent(
                        rf.route
                      )}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#000B3B] to-[#02146B] text-white text-xs font-bold hover:brightness-110 shadow-sm inline-flex items-center gap-1.5 transition active:translate-y-0.5"
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
      {/* SECTION 5: HOW YOUR CAB RIDE WORKS (3-STEP TIMELINE)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm relative space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#000B3B] text-[#FEC401] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#FEC401]" />
                    </div>
                    <span className="text-2xl font-black font-display text-[#CBD5E1]">
                      {st.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-display">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CHARTER CLARITY (INCLUSIONS & EXCLUSIONS)                      */}
      {/* ========================================================================= */}
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
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#000B3B] font-display">
                    What Is Fully Included
                  </h3>
                  <p className="text-xs text-[#64748B]">Zero hidden surcharges on your basic quote</p>
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

            {/* Exclusions Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display">
                    What Is Excluded (Honest Clarity)
                  </h3>
                  <p className="text-xs text-[#64748B]">Settled directly at actuals with receipts</p>
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
      {/* SECTION 7: VERIFIED TRAVELER REVIEWS                                      */}
      {/* ========================================================================= */}
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
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FEC401] text-[#FEC401]"
                      />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">{t.name}</h4>
                    <p className="text-[10.5px] text-[#64748B]">{t.tripType}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                    Verified Ride
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: SERVICE FAQ ACCORDION                                          */}
      {/* ========================================================================= */}
      {serviceFaq.length > 0 && (
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
              {serviceFaq.map((faq, idx) => {
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
      )}

      {/* ========================================================================= */}
      {/* SECTION 9: HIGH-IMPACT LUXURY BOTTOM BOOKING PAVILION                     */}
      {/* ========================================================================= */}
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
            Submit your travel route and date. Our dispatch team allocates a certified commercial yellow-board car and sends your driver voucher with a simple 10% advance deposit.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3.5">
            <Link
              href={`/book-cab?service=${bookingCategoryKey}`}
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all"
            >
              <Car className="w-4 h-4 text-[#000B3B]" />
              <span>Reserve Your Cab (10% Advance)</span>
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
            <span>💳 10% Advance Deposit Model</span>
          </div>
        </div>
      </section>
    </div>
  );
};
