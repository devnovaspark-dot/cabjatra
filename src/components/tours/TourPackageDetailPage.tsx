"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Check,
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
  AirVent,
  Palmtree,
  CreditCard,
  Route,
  HeartHandshake,
  Award,
  HelpCircle,
  ThumbsUp,
  ShieldAlert,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
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
  // Router & Horizontal tour planner form card state
  const router = useRouter();
  const [selectedCircuit, setSelectedCircuit] = useState<string>(
    bookingTourSlug || "golden-triangle"
  );
  const [isCustomCircuit, setIsCustomCircuit] = useState<boolean>(false);
  const [customCircuit, setCustomCircuit] = useState<string>("");

  const [tourPickup, setTourPickup] = useState<string>("Bhubaneswar Airport (BBI)");
  const [isCustomPickup, setIsCustomPickup] = useState<boolean>(false);
  const [customPickup, setCustomPickup] = useState<string>("");

  const [tourDate, setTourDate] = useState<string>("2026-11-24");
  const [selectedTourVehicle, setSelectedTourVehicle] = useState<string>("large-car");

  const handleTourSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const finalCircuit = isCustomCircuit ? customCircuit.trim() : selectedCircuit;
    const finalPickup = isCustomPickup ? customPickup.trim() : tourPickup;
    const query = new URLSearchParams({
      destination: finalCircuit || "golden-triangle",
      from: finalPickup || "Bhubaneswar Airport (BBI)",
      date: tourDate,
      vehicle: selectedTourVehicle,
    });
    router.push(`/book-tour?${query.toString()}`);
  };

  // FAQ accordion state - all closed by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  // Route tags helper for packages
  const getPackageRoute = (pkgTitle: string) => {
    if (pkgTitle.toLowerCase().includes("golden triangle")) {
      return ["Bhubaneswar", "Dhauli", "Puri Dham", "Konark Sun Temple", "Bhubaneswar"];
    }
    if (pkgTitle.toLowerCase().includes("puri") && pkgTitle.toLowerCase().includes("konark")) {
      return ["Puri Beach Hotel", "Marine Drive", "Chandrabhaga", "Konark Sun Temple", "Return"];
    }
    if (pkgTitle.toLowerCase().includes("bhubaneswar")) {
      return ["Airport/Station", "Lingaraj", "Mukteswar", "Dhauli Pagoda", "Khandagiri"];
    }
    if (pkgTitle.toLowerCase().includes("chilika") || pkgTitle.toLowerCase().includes("satapada")) {
      return ["Puri / Bhubaneswar", "Scenic Highway", "Satapada Jetty", "Dolphin Point", "Return"];
    }
    if (pkgTitle.toLowerCase().includes("family")) {
      return ["Doorstep Pickup", "Temple Circuit", "Coastal Marine Drive", "Lagoon Safari", "Hotel Drop"];
    }
    return ["Custom Departure", "Flexible Scenic Halts", "Bespoke Sightseeing", "Safe Drop"];
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans selection:bg-[#FEC401]/30">
      {/* ========================================================================= */}
      {/* SECTION 1: LUMINOUS ARCHITECTURAL HERO (NO CARDS, 100% VISIBLE LANDMARK)  */}
      {/* ========================================================================= */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden border-b border-[#E2E8F0] pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Authentic Destination Landmark Backdrop - Clear, Crisp & Zero Milky Fog */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={activeCityBg}
            alt={`${title} Destination Backdrop`}
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
          <div className="max-w-3xl space-y-6 text-left">
            {/* Top Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-xs">
              <div className="flex items-center gap-1.5 text-[#FEC401]">
                <Sparkles className="w-4 h-4 text-[#FEC401]" />
                <span>{badge.split("&bull;")[0].trim()}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-white/90 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#FEC401] fill-[#FEC401]" /> 4.95/5 Rating &bull; {durationBadge}
              </span>
            </div>

            {/* Main Headline - High-Contrast Editorial White & Gold */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white drop-shadow-md leading-[1.12]">
              {title}
            </h1>

            {/* Subtitle - Punchy, High-Impact & Crystal Clear */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-sm max-w-2xl">
              {subtitle}
            </p>

            {/* Minimalist Inline Feature Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Car className="w-4 h-4 text-[#FEC401]" />
                <span>100% Commercial Private Fleet</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Clock className="w-4 h-4 text-[#FEC401]" />
                <span>Flexible Halts &amp; Custom Pace</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <AirVent className="w-4 h-4 text-[#38BDF8]" />
                <span>Chilled Full-Cabin AC</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <MapPin className="w-4 h-4 text-[#4ADE80]" />
                <span>Hotel Doorstep Pickup &amp; Return</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={`/book-tour?destination=${bookingTourSlug}`}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#000B3B] font-extrabold text-sm inline-flex items-center gap-2.5 shadow-[0_12px_28px_rgba(254,196,1,0.42)] active:translate-y-0.5 transition-all group"
              >
                <Palmtree className="w-4 h-4 text-[#000B3B]" />
                <span>Reserve This Tour Package Now</span>
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
                  100% Commercial Fleet
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-[#4ADE80]" />
                  Guaranteed Tariff Lock
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                  {startingFromNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HORIZONTAL TOUR PLANNER FORM CARD (CLEAN, ATTRACTIVE, BEST UI/UX)         */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="bg-white rounded-3xl border-2 border-[#FEC401]/80 shadow-[0_20px_50px_rgba(0,11,59,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-5 sm:p-6 lg:p-7 relative overflow-hidden group">
          {/* Top Subtle Amber Corner Accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header Pill & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-[#F1F5F9] gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] flex items-center justify-center font-black shadow-xs shrink-0">
                <Palmtree className="w-4 h-4 text-[#000B3B]" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#0F172A] leading-tight">
                  Curated Odisha Tour Planner &amp; Instant Quote
                </h3>
                <p className="text-xs text-[#64748B]">
                  Dedicated private AC cab &bull; Flexible sightseeing halts &bull; Background-verified local chauffeur
                </p>
              </div>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] border border-[#FEF08A] text-[11px] font-bold text-[#92400E] self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>100% Bespoke Flexible Stops</span>
            </div>
          </div>

          {/* Form Fields: 5 Horizontal Columns on Desktop */}
          <form onSubmit={handleTourSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
            {/* Field 1: Tour Circuit */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10.5px] font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Odisha Tour Circuit</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsCustomCircuit(!isCustomCircuit);
                    if (!isCustomCircuit) setCustomCircuit("");
                  }}
                  className="text-[10px] font-semibold text-[#0284C7] hover:underline cursor-pointer"
                >
                  {isCustomCircuit ? "From list" : "+ Add custom"}
                </button>
              </div>
              {isCustomCircuit ? (
                <div className="relative">
                  <input
                    type="text"
                    value={customCircuit}
                    onChange={(e) => setCustomCircuit(e.target.value)}
                    placeholder="Type custom circuit / destination..."
                    autoFocus
                    className="w-full h-12 pl-3.5 pr-14 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all shadow-2xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomCircuit(false);
                      setCustomCircuit("");
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#64748B] hover:text-[#000B3B] bg-[#E2E8F0] hover:bg-[#CBD5E1] px-1.5 py-1 rounded transition cursor-pointer"
                    title="Choose from list"
                  >
                    List ↺
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <select
                    value={selectedCircuit}
                    onChange={(e) => {
                      if (e.target.value === "__custom__") {
                        setIsCustomCircuit(true);
                        setCustomCircuit("");
                      } else {
                        setSelectedCircuit(e.target.value);
                      }
                    }}
                    className="w-full h-12 pl-3.5 pr-8 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all cursor-pointer shadow-2xs"
                  >
                    <option value="golden-triangle">Golden Triangle (Bhubaneswar-Puri-Konark)</option>
                    <option value="puri-dham">Puri Jagannath Dham &amp; Beach (1-2 Days)</option>
                    <option value="konark-marine-drive">Konark Sun Temple &amp; Marine Drive</option>
                    <option value="chilika-satapada">Chilika Lake &amp; Dolphin Safari</option>
                    <option value="bhubaneswar-heritage">Bhubaneswar Temple City Circuit</option>
                    <option value="complete-odisha">Complete Odisha Grand Tour (4D/3N)</option>
                    <option value="__custom__">➕ Other / Add Custom Location...</option>
                  </select>
                </div>
              )}
            </div>

            {/* Field 2: Pickup Hub */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10.5px] font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Pickup Location</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsCustomPickup(!isCustomPickup);
                    if (!isCustomPickup) setCustomPickup("");
                  }}
                  className="text-[10px] font-semibold text-[#0284C7] hover:underline cursor-pointer"
                >
                  {isCustomPickup ? "From list" : "+ Add custom"}
                </button>
              </div>
              {isCustomPickup ? (
                <div className="relative">
                  <input
                    type="text"
                    value={customPickup}
                    onChange={(e) => setCustomPickup(e.target.value)}
                    placeholder="Type custom pickup location..."
                    autoFocus
                    className="w-full h-12 pl-3.5 pr-14 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all shadow-2xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomPickup(false);
                      setCustomPickup("");
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#64748B] hover:text-[#000B3B] bg-[#E2E8F0] hover:bg-[#CBD5E1] px-1.5 py-1 rounded transition cursor-pointer"
                    title="Choose from list"
                  >
                    List ↺
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <select
                    value={tourPickup}
                    onChange={(e) => {
                      if (e.target.value === "__custom__") {
                        setIsCustomPickup(true);
                        setCustomPickup("");
                      } else {
                        setTourPickup(e.target.value);
                      }
                    }}
                    className="w-full h-12 pl-3.5 pr-8 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all cursor-pointer shadow-2xs"
                  >
                    <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI)</option>
                    <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                    <option value="Puri Hotel / Resort">Puri Hotel / Resort Doorstep</option>
                    <option value="Kataka Hub">Kataka Hub</option>
                    <option value="__custom__">➕ Other / Add Custom Location...</option>
                  </select>
                </div>
              )}
            </div>

            {/* Field 3: Start Date */}
            <div className="space-y-1.5">
              <label className="text-[10.5px] font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Tour Start Date</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="w-full h-12 px-3.5 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all shadow-2xs"
                  required
                />
              </div>
            </div>

            {/* Field 4: Fleet & Group Size */}
            <div className="space-y-1.5">
              <label className="text-[10.5px] font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Cab &amp; Group Size</span>
              </label>
              <div className="relative">
                <select
                  value={selectedTourVehicle}
                  onChange={(e) => setSelectedTourVehicle(e.target.value)}
                  className="w-full h-12 pl-3.5 pr-8 rounded-xl border border-[#CBD5E1] bg-[#FAF9F5] text-xs font-bold text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FEC401] focus:border-[#FEC401] transition-all cursor-pointer shadow-2xs"
                >
                  <option value="large-car">Innova Crysta SUV (4–7 Pax)</option>
                  <option value="sedan">Prime Sedan (1–4 Pax)</option>
                  <option value="mini-bus">Tempo Traveller (8–17 Group)</option>
                </select>
              </div>
            </div>

            {/* Field 5: Action Button */}
            <div>
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FEC401] via-[#E5AD00] to-[#FEC401] bg-[length:200%_auto] hover:bg-right hover:brightness-105 active:translate-y-0.5 text-[#000B3B] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(254,196,1,0.4)] transition-all cursor-pointer"
              >
                <span>Plan My Tour</span>
                <ArrowRight className="w-4 h-4 text-[#000B3B]" />
              </button>
            </div>
          </form>

          {/* Bottom Micro-Assurances Strip */}
          <div className="mt-4 pt-3.5 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between text-[11px] text-[#64748B] gap-2">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Dedicated Chauffeur &bull; Safe Luggage Custody</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Flexible Halts for Photos &amp; Refreshments</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Doorstep Hotel / Airport Terminal Pickup</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <AirVent className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Chilled AC Running Throughout Journey</span>
            </span>
          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#EEF2F6] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Car className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Tour Vehicle Classes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Choose the Right Cab for Your Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
              All vehicles are 100% commercial yellow-board registered, fully AC equipped, and maintained to pristine passenger hygiene standards.
            </p>
          </div>

          {/* 3 Executive Showcase Cards - Magazine Quality Edge-to-Edge Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Prime Commercial Sedan */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                {/* Visual Full-Bleed Vehicle Stage */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/sedan.webp"
                    alt="Prime Sedan"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span>Prime Commercial Sedan</span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-xs font-black text-[#000B3B] shadow-md">
                    From ₹13/km
                  </div>

                  <div className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-semibold text-[#4ADE80] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>Instant Dispatch Ready</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Prime Sedan
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                        Dual-Zone AC
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#02146B] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Maruti Swift Dzire, Toyota Etios</span>
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      Smooth highway stability, plush upholstery, and generous boot space for BBI airport transfers and Golden Triangle travel.
                    </p>
                  </div>

                  {/* Clean Spec Matrix Metric Tiles */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <Users className="w-4 h-4 text-[#D97706] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">4 Seats</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Passenger Cap</span>
                    </div>
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <Briefcase className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">3 Bags</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Boot Bay</span>
                    </div>
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <AirVent className="w-4 h-4 text-[#16A34A] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">Chilled AC</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Dual Zone</span>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-1 text-xs text-[#475569]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Extra rear legroom &amp; clean sanitized seating</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Dedicated boot space for temple offerings &amp; luggage</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Zero peak hour surge multiplier guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=sedan`}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                >
                  <span>Select Prime Sedan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: FEATURED HERO: Executive Toyota Innova Crysta SUV */}
            <div className="bg-white rounded-3xl border-2 border-[#FEC401] overflow-hidden shadow-[0_20px_50px_rgba(254,196,1,0.22)] md:-translate-y-3 hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between group relative">
              {/* Crown Top Ribbon */}
              <div className="bg-gradient-to-r from-[#FEC401] via-[#E5AD00] to-[#FEC401] text-[#000B3B] text-[11px] font-black uppercase tracking-wider text-center py-2 shadow-xs flex items-center justify-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#000B3B]" />
                <span>#1 Most Booked &bull; Family Tours &amp; Pilgrimages</span>
              </div>

              <div>
                {/* Visual Full-Bleed Vehicle Stage */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/large-car.webp"
                    alt="Toyota Innova Crysta"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#FEC401]/50 text-[11px] font-bold text-[#FEC401] shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FEC401]" />
                    <span>Premium Family Class</span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-xs font-black text-[#000B3B] shadow-md">
                    From ₹19/km
                  </div>

                  <div className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-semibold text-[#4ADE80] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>Guaranteed Allocation</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Innova Crysta / SUV
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                        Independent Rear AC
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#02146B] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Toyota Innova Crysta, Maruti Ertiga</span>
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      Plush captain chairs, superior suspension, and dual AC blowers for senior citizens and family pilgrimages to Puri Dham.
                    </p>
                  </div>

                  {/* Clean Spec Matrix Metric Tiles */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div className="bg-[#FFFBEB] border border-[#FEF08A] rounded-xl p-2.5 text-center">
                      <Users className="w-4 h-4 text-[#D97706] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">7 Seats</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Passenger Cap</span>
                    </div>
                    <div className="bg-[#FFFBEB] border border-[#FEF08A] rounded-xl p-2.5 text-center">
                      <Briefcase className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">4–5 Bags</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Luggage Bay</span>
                    </div>
                    <div className="bg-[#FFFBEB] border border-[#FEF08A] rounded-xl p-2.5 text-center">
                      <AirVent className="w-4 h-4 text-[#16A34A] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">Dual Blowers</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Chilled AC</span>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-1 text-xs text-[#475569]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Captain leatherette seats with armrests for comfort</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>High ground clearance for coastal &amp; temple terrain</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Expansive luggage bay for Mahaprasad &amp; suitcases</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=large-car`}
                  className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#FEC401] via-[#E5AD00] to-[#FEC401] hover:brightness-105 active:translate-y-0.5 text-[#000B3B] text-xs font-black flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(254,196,1,0.42)] transition-all group-hover:shadow-xl"
                >
                  <span>Select Innova Crysta</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Luxury Tempo Traveller & Urbania */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                {/* Visual Full-Bleed Vehicle Stage */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/fleet/mini-bus.webp"
                    alt="Tempo Traveller"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Group Coach Class</span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-xs font-black text-[#000B3B] shadow-md">
                    Custom Quote
                  </div>

                  <div className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-semibold text-[#4ADE80] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>Pilgrimage &amp; Wedding Ready</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                        Tempo Traveller / Urbania
                      </h3>
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                        Full Cabin AC
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#02146B] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Force Urbania, 12 to 17 Seater Luxury AC</span>
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                      High-roof standing aisle, reclining push-back seating, and panoramic windows for extended family tours and wedding parties.
                    </p>
                  </div>

                  {/* Clean Spec Matrix Metric Tiles */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <Users className="w-4 h-4 text-[#D97706] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">12–17 Seats</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Passenger Cap</span>
                    </div>
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <Briefcase className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">10+ Bags</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Luggage Bay</span>
                    </div>
                    <div className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-xl p-2.5 text-center">
                      <AirVent className="w-4 h-4 text-[#16A34A] mx-auto mb-1" />
                      <span className="text-xs font-black text-[#0F172A] block">Roof AC</span>
                      <span className="text-[10px] text-[#64748B] font-medium">Full Cabin</span>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-1 text-xs text-[#475569]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Push-back ergonomic seats &amp; individual reading lamps</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Massive dedicated rear luggage bay for group cargo</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>Experienced long-route highway pilgrimage captain</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/book-tour?destination=${bookingTourSlug}&vehicle=mini-bus`}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                >
                  <span>Enquire Group Cab</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          {/* Fleet Quality Assurance Strip */}
          <div className="mt-12 bg-white rounded-2xl border border-[#CBD5E1] p-5 sm:p-6 shadow-sm">
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
                  <h4 className="text-xs font-bold text-[#0F172A]">0% Driver Cancellation</h4>
                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    Pre-assigned verified chauffeurs with contractual vehicle dispatch.
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
                    100% air-conditioned comfort from departure to final destination drop.
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
      {/* SECTION 3: ICONIC ATTRACTIONS (MAGAZINE EDITORIAL QUALITY)                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Sightseeing Itinerary Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Iconic Attractions Covered in This Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
              Every sightseeing point is covered with flexible waiting times. Spend as much time as you like at temples, beaches, and monuments without rigid tour bus timetables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Visual Full-Bleed Image Frame */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

                  {/* Top Location Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>{dest.tag}</span>
                  </div>

                  {/* Top Right Sightseeing Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[10.5px] font-black uppercase tracking-wider text-[#000B3B] shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#000B3B]" />
                    <span>Must-Visit</span>
                  </div>

                  {/* Bottom Itinerary Circuit Pill */}
                  <div className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10.5px] font-semibold text-[#4ADE80] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>Included in Itinerary Circuit</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                      {dest.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                      {dest.desc}
                    </p>
                  </div>

                  {/* Key Highlights Chips */}
                  {dest.keyAttractions && dest.keyAttractions.length > 0 && (
                    <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748B] block">
                        Must-Visit Sights:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.keyAttractions.map((att, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-bold bg-[#FAF9F5] text-[#0F172A] px-2.5 py-1 rounded-lg border border-[#CBD5E1] shadow-2xs hover:border-[#FEC401] transition-colors inline-flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
                            <span>{att}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer Action Strip */}
                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#64748B] font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Dedicated Chauffeur Waiting</span>
                    </span>
                    <Link
                      href={`/book-tour?destination=${bookingTourSlug}`}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#000B3B] to-[#02146B] text-white text-[11px] font-bold hover:brightness-110 flex items-center gap-1.5 shadow-2xs transition-all group-hover:shadow-xs"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-[#FEC401] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: POPULAR TOUR PACKAGES & TARIFFS (EXECUTIVE SHOWCASE CARDS)     */}
      {/* ========================================================================= */}
      {packages && packages.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
                  <Palmtree className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Curated Tour Options</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                  Popular Tour Itineraries &amp; Tariffs
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl">
                  Choose from popular itineraries designed for road comfort, or customize your stops with our tour desk.
                </p>
              </div>
              <div className="text-xs text-[#000B3B] font-bold bg-[#FFFBEB] px-4 py-2 rounded-2xl border border-[#FEF08A] shadow-xs inline-flex items-center gap-2 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Guaranteed Fixed Tariffs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {packages.map((pkg, idx) => {
                const routePoints = getPackageRoute(pkg.title);
                const isFeatured = idx === 0;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,11,59,0.05)] hover:shadow-[0_18px_40px_rgba(0,11,59,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative ${
                      isFeatured ? "border-2 border-[#FEC401] shadow-[0_12px_35px_rgba(254,196,1,0.18)]" : "border border-slate-200/90"
                    }`}
                  >
                    {/* Top Ribbon on Featured Package */}
                    {isFeatured && (
                      <div className="bg-gradient-to-r from-[#FEC401] via-[#E5AD00] to-[#FEC401] text-[#000B3B] text-[10px] font-black uppercase tracking-wider text-center py-1 shadow-xs flex items-center justify-center gap-1.5">
                        <Star className="w-3 h-3 fill-[#000B3B]" />
                        <span>#1 Most Recommended Odisha Itinerary</span>
                      </div>
                    )}

                    <div className="p-5 sm:p-5.5 space-y-3">
                      {/* Badge and Duration Row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#000B3B] bg-gradient-to-r from-[#FEC401] to-[#E5AD00] px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#000B3B]" />
                          <span>{pkg.badge}</span>
                        </span>
                        <span className="text-[11px] text-[#0F172A] font-bold flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-full border border-[#CBD5E1] shadow-2xs">
                          <Clock className="w-3 h-3 text-[#000B3B]" />
                          <span>{pkg.duration}</span>
                        </span>
                      </div>

                      {/* Package Title & Subtitle */}
                      <div className="space-y-0.5">
                        <h3 className="text-lg sm:text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                          {pkg.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                          {pkg.subtitle}
                        </p>
                      </div>

                      {/* Visual Route Corridor Stepper */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#F8FAFC] via-[#FAF9F5] to-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#64748B] flex items-center gap-1">
                          <Route className="w-3 h-3 text-[#D97706]" />
                          <span>Tour Route Trajectory:</span>
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[10.5px] font-bold text-[#000B3B]">
                          {routePoints.map((pt, rIdx) => (
                            <React.Fragment key={rIdx}>
                              <span className="bg-white px-2 py-0.5 rounded-md border border-[#CBD5E1] shadow-2xs text-[#0F172A]">
                                {pt}
                              </span>
                              {rIdx < routePoints.length - 1 && (
                                <ArrowRight className="w-2.5 h-2.5 text-[#D97706] shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9] text-xs text-[#334155]">
                        {pkg.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </span>
                            <span className="font-semibold text-[#1E293B] text-[11.5px]">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tariff & Action Footer */}
                    <div className="p-5 sm:p-5.5 pt-0 space-y-2.5">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] flex items-center justify-between gap-2.5">
                        <div>
                          <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">
                            All-Inclusive Cab Tariff
                          </span>
                          <span className="text-lg font-black text-[#000B3B] block leading-tight">
                            {pkg.approxPrice}
                          </span>
                        </div>
                        <span className="text-[9.5px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full border border-[#BBF7D0]">
                          Tolls &amp; Fuel Included
                        </span>
                      </div>

                      <Link
                        href={`/book-tour?destination=${bookingTourSlug}`}
                        className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white text-xs font-bold hover:brightness-110 flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md border border-white/10"
                      >
                        <span>Book This Tour Package</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FEC401] group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE JOURNEY TIMELINE (DAY-BY-DAY ITINERARY)            */}
      {/* ========================================================================= */}
      {itineraryDays && itineraryDays.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
                <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Suggested Travel Roadmap</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
                Recommended Itinerary Schedule
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
                Designed for seamless road travel without rushing your family. Timings and stopovers can be adjusted according to your flight or train schedule.
              </p>
            </div>

            {/* Vertical Connected Journey Timeline */}
            <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[17px] sm:before:left-[23px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#FEC401] before:via-[#000B3B]/40 before:to-[#16A34A]">
              {itineraryDays.map((dayItem, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Milestone Pin */}
                  <div className="absolute -left-[30px] sm:-left-[39px] top-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#000B3B] to-[#02146B] border-2 border-[#FEC401] shadow-md flex items-center justify-center text-xs font-black text-[#FEC401] group-hover:scale-110 group-hover:bg-[#FEC401] group-hover:text-[#000B3B] transition-all">
                    0{idx + 1}
                  </div>

                  {/* Card Container */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,11,59,0.1)] hover:-translate-y-1 transition-all space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="text-xs font-black uppercase tracking-wider text-[#000B3B] bg-gradient-to-r from-[#FEC401] to-[#E5AD00] px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#000B3B]" />
                        <span>{dayItem.day}</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0] inline-flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
                        <span>Dedicated Chauffeur Assigned</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors">
                      {dayItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                      {dayItem.desc}
                    </p>

                    {dayItem.highlights && dayItem.highlights.length > 0 && (
                      <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2">
                        {dayItem.highlights.map((hl, hlIdx) => (
                          <span
                            key={hlIdx}
                            className="text-[11px] font-bold text-[#0F172A] bg-[#FAF9F5] px-3 py-1 rounded-xl border border-[#CBD5E1] inline-flex items-center gap-1.5 shadow-2xs hover:border-[#FEC401] transition-colors"
                          >
                            <Sparkles className="w-3 h-3 text-[#D97706]" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: 3 LUXURY PILLARS (WHY TOUR ODISHA WITH CABJATRA)              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Tour Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Why Tour Odisha with CABJATRA
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
              Traveling through Odisha is most rewarding when your transport is comfortable, your itinerary is flexible, and your driver acts as a dependable local guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#000B3B]">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop"
                  alt="Flexible Road Travel"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>Flexible Road Travel</span>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs flex items-center justify-center shadow-md">
                    01
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                    Total Schedule Freedom &amp; Zero Meter Pressure
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    Unlike crowded tourist buses that give you strict 30-minute timers, our cab stays with you. Pause for coastal tea, photography along Marine Drive, or extra time at Konark.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0] inline-flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
                    <span>Zero Meter Rush</span>
                  </span>
                  <span className="text-xs text-[#000B3B] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Verified</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#000B3B]">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=800&auto=format&fit=crop"
                  alt="Dedicated Commercial Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>100% Commercial Fleet</span>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs flex items-center justify-center shadow-md">
                    02
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                    Dedicated Chauffeurs Who Double as Local Guides
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    Background-verified, polite local drivers who understand temple etiquette, senior mobility needs, safe luggage custody during darshan, and the best local coastal food joints.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0] inline-flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
                    <span>Safe Luggage Custody</span>
                  </span>
                  <span className="text-xs text-[#000B3B] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Verified</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_10px_35px_rgba(0,11,59,0.06)] hover:shadow-[0_25px_50px_rgba(0,11,59,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#000B3B]">
                <Image
                  src="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=800&auto=format&fit=crop"
                  alt="Senior & Family First"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[10.5px] font-bold text-[#FEC401] shadow-sm flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>Senior &amp; Family First</span>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs flex items-center justify-center shadow-md">
                    03
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black font-display text-[#0F172A] group-hover:text-[#000B3B] transition-colors leading-snug">
                    Comfort-Tuned Vehicles with Chilled Dual AC
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    Pristine sanitized cabins, guaranteed chilled AC blowers, generous boot space for suitcases and Mahaprasad, and smooth highway shock absorbers for elderly comfort.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0] inline-flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
                    <span>Chilled AC Guaranteed</span>
                  </span>
                  <span className="text-xs text-[#000B3B] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Verified</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CHARTER CLARITY (INCLUSIONS & EXCLUSIONS)                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Tour Inclusions &amp; Pricing Clarity
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
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
      {/* SECTION 8: VERIFIED TRAVELER REVIEWS WITH REAL AVATARS                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-xs">
              <ThumbsUp className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Verified Tour Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] tracking-tight">
              Trusted by 12,000+ Travelers in Odisha
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto">
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
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] truncate font-display">
                        {t.name}
                      </h4>
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
      {/* SECTION 9: SERVICE FAQ ACCORDION (CLOSED BY DEFAULT, HIGH-CONTRAST)       */}
      {/* ========================================================================= */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#02146B] mb-2 bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1]">
                <HelpCircle className="w-3.5 h-3.5 text-[#D97706]" />
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
      {/* SECTION 10: LUXURY BOTTOM BOOKING PAVILION                                */}
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
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-extrabold text-xs inline-flex items-center gap-2 border-t border-white/40 shadow-[0_10px_25px_rgba(254,196,1,0.35)] hover:brightness-105 active:translate-y-0.5 transition-all"
            >
              <Palmtree className="w-4 h-4 text-[#000B3B]" />
              <span>Book Your Cab Tour Now</span>
              <ArrowRight className="w-4 h-4 text-[#000B3B]" />
            </Link>

            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition"
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
