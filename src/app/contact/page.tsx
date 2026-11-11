"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Check,
  Copy,
  ArrowRight,
  Plane,
  Car,
  Compass,
  ChevronDown,
  Navigation,
  ExternalLink,
  Headphones,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export default function ContactPage() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = (text: string, type: "phone" | "whatsapp" | "email") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else if (type === "whatsapp") {
        setCopiedWhatsApp(true);
        setTimeout(() => setCopiedWhatsApp(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  };

  const contactFaqs = [
    {
      q: "How fast does operations reply to phone and WhatsApp requests?",
      a: "Our central Odisha operations desk operates 24/7/365. Phone calls connect directly to our dispatch supervisor with zero waiting. WhatsApp messages receive a confirmed route quotation and vehicle availability in under 90 seconds.",
    },
    {
      q: "Can you arrange early morning or midnight airport pickups at BBI?",
      a: "Yes, absolutely. We operate around the clock with live flight radar tracking. Even if your flight is delayed, your verified chauffeur will be waiting at the arrival terminal with AC primed.",
    },
    {
      q: "How do I confirm a booking on WhatsApp?",
      a: "Simply tap the WhatsApp button, send your pickup date, route, and passenger count. We send an instant itemized fare quote. Once you approve, you settle the 10% advance deposit online and receive your digital ride voucher.",
    },
    {
      q: "Do you provide official GST invoices for business travel?",
      a: "Yes. All corporate travels, executive rentals, and airport commutes receive an official GST tax invoice issued by NovaSpark Digital Marketing Pvt. Ltd. for corporate expense claims.",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= EDITORIAL OPERATIONS HERO BANNER ================= */}
      {/* pt-36 sm:pt-44 ensures floating navbar never overlaps any text */}
      <section className="relative text-white overflow-hidden pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-black/20">
        {/* High-Resolution Scenic Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=85&w=2400&auto=format&fit=crop"
            alt="Odisha Coastal Highway Operations"
            fill
            priority
            className="object-cover object-center scale-102"
          />
          {/* Balanced cinematic gradient overlay: pure transparent clarity without white shadow cast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/55 via-50% to-[#011415]/90" />
          <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>24/7 Operations Concierge • Direct Human Response</span>
          </div>

          {/* Clean Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
            Connect with Our Dispatch Desk
          </h1>

          {/* Minimal Subtitle */}
          <p className="text-xs sm:text-base text-white/85 max-w-xl mx-auto font-normal leading-relaxed">
            Direct coordination for airport arrivals, outstation highway transfers, and verified chauffeur bookings across Odisha.
          </p>
        </div>
      </section>

      {/* ================= HERO SPOTLIGHT: GRAPHIC-RICH WHATSAPP & CALL CARDS ================= */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          
          {/* ================= CARD 1: WHATSAPP CONCIERGE ================= */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#053222] via-[#032318] to-[#01140E] text-white border-2 border-[#25D366]/40 shadow-2xl overflow-hidden flex flex-col justify-between group hover:border-[#25D366]/70 transition-all duration-300">
            {/* Graphic Background Radial Mesh */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#25D366]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#25D366]/30 transition-all duration-500" />
            
            {/* Subtle Graphic Grid Lines */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              {/* Top Tag & Status */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Instant WhatsApp Desk</span>
                </div>
                <span className="text-[11px] font-semibold text-[#A7F3D0] bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10">
                  Reply &lt; 90s
                </span>
              </div>

              {/* Graphic Icon & Number */}
              <div className="flex items-center gap-4 pt-1">
                {/* 3D Glassmorphic WhatsApp Icon Badge */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#25D366] via-[#1EB853] to-[#0E7A3E] p-0.5 shadow-[0_8px_20px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-white/20 to-transparent flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white drop-shadow-md" />
                  </div>
                </div>

                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7F3D0] block">
                    WhatsApp Helpline
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight">
                      {COMPANY_CONFIG.contact.whatsAppHelpNumber}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_CONFIG.contact.whatsAppHelpNumber, "whatsapp")}
                      className="p-1 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#A7F3D0] hover:text-white text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                      title="Copy Number"
                    >
                      {copiedWhatsApp ? (
                        <>
                          <Check className="w-3 h-3 text-[#25D366]" />
                          <span className="text-[#25D366]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#E0ECEA]/85 leading-relaxed">
                Instant fare estimates, vehicle interior photos, custom temple itineraries, and verified digital vouchers directly on your WhatsApp.
              </p>

              {/* Graphical Quick Action Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`https://wa.me/917008000000?text=${encodeURIComponent("Hi CabJatra, I need a cab for Bhubaneswar Airport (BBI) pickup.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-xs text-white/90 transition cursor-pointer"
                >
                  <Plane className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Airport Transfer</span>
                </a>

                <a
                  href={`https://wa.me/917008000000?text=${encodeURIComponent("Hi CabJatra, I want to book a cab for Puri Jagannath Dham.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-xs text-white/90 transition cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Puri Dham Tour</span>
                </a>

                <a
                  href={`https://wa.me/917008000000?text=${encodeURIComponent("Hi CabJatra, I need a quote for an outstation highway cab.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-xs text-white/90 transition cursor-pointer"
                >
                  <Car className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Outstation Cab</span>
                </a>
              </div>
            </div>

            {/* Slender, Tactile WhatsApp CTA Button */}
            <div className="pt-6 relative z-10">
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#25D366] via-[#22BF5B] to-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-105 active:scale-[0.98] transition-all group/btn cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ================= CARD 2: 24/7 VOICE HELPLINE ================= */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#073235] via-[#042426] to-[#011416] text-white border-2 border-[#D9A52B]/40 shadow-2xl overflow-hidden flex flex-col justify-between group hover:border-[#D9A52B]/70 transition-all duration-300">
            {/* Graphic Background Radial Mesh */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D9A52B]/25 transition-all duration-500" />
            
            {/* Subtle Graphic Grid Lines */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D9A52B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              {/* Top Tag & Status */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/40 text-[#D9A52B] text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A52B] animate-pulse" />
                  <span>24/7 Phone Helpline</span>
                </div>
                <span className="text-[11px] font-semibold text-[#A7F3D0] bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10">
                  Zero IVR Waiting
                </span>
              </div>

              {/* Graphic Icon & Number */}
              <div className="flex items-center gap-4 pt-1">
                {/* 3D Gold Metallic Phone Icon Badge */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#F5CB68] via-[#D9A52B] to-[#996D12] p-0.5 shadow-[0_8px_20px_rgba(217,165,43,0.35),inset_0_1px_1px_rgba(255,255,255,0.8)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-white/25 to-transparent flex items-center justify-center">
                    <Phone className="w-8 h-8 sm:w-9 sm:h-9 text-[#062F31] fill-[#062F31] drop-shadow-md" />
                  </div>
                </div>

                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9A52B] block">
                    Direct Operations Line
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                      className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight hover:text-[#D9A52B] transition-colors"
                    >
                      {COMPANY_CONFIG.contact.phoneDisplay}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_CONFIG.contact.phoneDisplay, "phone")}
                      className="p-1 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#D9A52B] hover:text-white text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                      title="Copy Number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#E0ECEA]/85 leading-relaxed">
                Connect directly with our Bhubaneswar control room. Speak with a human operations supervisor with zero automated menus.
              </p>

              {/* Graphical Priority Highlights */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-white/90">
                  <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Midnight BBI Pickups</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-white/90">
                  <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Immediate Dispatch</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-white/90">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Highway Emergency</span>
                </span>
              </div>
            </div>

            {/* Slender, Tactile Phone Call CTA Button */}
            <div className="pt-6 relative z-10">
              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group/call cursor-pointer border border-[#F2C868]/60"
              >
                <Phone className="w-4 h-4 fill-[#062F31]" />
                <span>Call Operations Desk Now</span>
                <ArrowRight className="w-4 h-4 text-[#062F31] group-hover/call:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECONDARY CONTACT CHANNELS & HUBS MATRIX ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 1: Official Email Desk */}
            <div className="card-skeuo p-6 rounded-2xl sm:rounded-3xl space-y-3.5 flex flex-col justify-between bg-white border border-[#E0E7E0] hover:shadow-md transition-all">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display text-[#182A2B]">
                  Official Email Desk
                </h3>
                <p className="text-xs text-[#556464] leading-relaxed">
                  For formal itineraries, corporate vendor accounts, and GST invoice queries.
                </p>

                <div className="pt-2 border-t border-[#EEF2EE] space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.bookingEmail}`}
                      className="font-bold text-[#073B3A] hover:underline"
                    >
                      {COMPANY_CONFIG.contact.bookingEmail}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_CONFIG.contact.bookingEmail, "email")}
                      className="text-[10px] font-bold text-[#667575] hover:text-[#073B3A] cursor-pointer"
                    >
                      {copiedEmail ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <span className="text-[11px] text-[#667575] block">
                    Corporate: corporate@cabjatra.com
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.bookingEmail}`}
                  className="w-full py-2 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#073B3A] hover:text-white text-[#073B3A] border border-[#D5DDD5] text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Card 2: Registered Central Headquarters */}
            <div className="card-skeuo p-6 rounded-2xl sm:rounded-3xl space-y-3.5 flex flex-col justify-between bg-white border border-[#E0E7E0] hover:shadow-md transition-all">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display text-[#182A2B]">
                  Bhubaneswar Headquarters
                </h3>
                <p className="text-xs text-[#556464] leading-relaxed">
                  {COMPANY_CONFIG.contact.registeredAddress}
                </p>

                <div className="pt-2 border-t border-[#EEF2EE] text-xs space-y-0.5">
                  <span className="font-semibold text-[#182A2B] block">
                    {COMPANY_CONFIG.legalBusinessName}
                  </span>
                  <span className="text-[10.5px] text-[#10B981] font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#10B981]" />
                    <span>24/7 Operations Hub</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_CONFIG.contact.registeredAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#073B3A] hover:text-white text-[#073B3A] border border-[#D5DDD5] text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>View on Map</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Instant Online Booking */}
            <div className="card-skeuo p-6 rounded-2xl sm:rounded-3xl space-y-3.5 flex flex-col justify-between bg-white border border-[#E0E7E0] hover:shadow-md transition-all">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-xs">
                  <Car className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold font-display text-[#182A2B]">
                  Direct Online Booking
                </h3>
                <p className="text-xs text-[#556464] leading-relaxed">
                  Prefer web booking? Choose your route, inspect 3D fleet models, and book with 10% advance deposit.
                </p>

                <div className="pt-2 border-t border-[#EEF2EE] space-y-1.5">
                  <Link
                    href="/book-cab"
                    className="p-2 rounded-xl bg-[#FAF9F5] hover:bg-[#E0ECEA]/60 border border-[#D5DDD5] flex items-center justify-between group transition text-xs font-bold text-[#182A2B] cursor-pointer"
                  >
                    <span>Reserve Chauffeur Cab</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/book-tour"
                    className="p-2 rounded-xl bg-[#FAF9F5] hover:bg-[#E0ECEA]/60 border border-[#D5DDD5] flex items-center justify-between group transition text-xs font-bold text-[#182A2B] cursor-pointer"
                  >
                    <span>Explore Curated Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-[#10B981] font-semibold flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>10% Advance Deposit Model</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION: ODISHA REGIONAL STATIONS DIRECTORY ================= */}
      <section className="py-12 sm:py-16 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Station Hubs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Our Regional Fleet Presence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* HUB 1: BHUBANESWAR */}
            <div className="card-skeuo rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-lg border border-[#D5DDD5] bg-white">
              <div className="relative h-40 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=900&auto=format&fit=crop"
                  alt="Bhubaneswar Airport & Central Operations Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm">
                  01
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#D9A52B] uppercase font-bold block">Airport &amp; Capital</span>
                  <h3 className="text-base font-bold font-display text-white">Bhubaneswar Hub</h3>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-[#556464] leading-relaxed">
                  BBI Airport standby, Master Canteen Railway Junction, and Patia IT Corridor.
                </p>
                <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D9A52B]" />
                    <span>&lt; 15 Min Standby</span>
                  </span>
                  <Link href="/book-cab?service=airport" className="hover:text-[#D9A52B] transition-colors flex items-center gap-0.5">
                    <span>Airport Cab</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* HUB 2: PURI JAGANNATH DHAM */}
            <div className="card-skeuo rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-lg border border-[#D5DDD5] bg-white">
              <div className="relative h-40 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=900&auto=format&fit=crop"
                  alt="Puri Jagannath Dham Support Cell"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm">
                  02
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#D9A52B] uppercase font-bold block">Temple &amp; Marine Drive</span>
                  <h3 className="text-base font-bold font-display text-white">Puri Dham Cell</h3>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-[#556464] leading-relaxed">
                  VIP Road and Marine Drive coastal corridor. Temple darshan and Konark transfers.
                </p>
                <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D9A52B]" />
                    <span>Temple Pass Standby</span>
                  </span>
                  <Link href="/book-tour?destination=puri" className="hover:text-[#D9A52B] transition-colors flex items-center gap-0.5">
                    <span>Puri Circuit</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* HUB 3: CORPORATE & EVENT LOGISTICS */}
            <div className="card-skeuo rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-lg border border-[#D5DDD5] bg-white">
              <div className="relative h-40 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=900&auto=format&fit=crop"
                  alt="Corporate & Event Logistics Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm">
                  03
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#D9A52B] uppercase font-bold block">Institutional Mobility</span>
                  <h3 className="text-base font-bold font-display text-white">Corporate Fleet</h3>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-[#556464] leading-relaxed">
                  Executive corporate mobility, institutional conferences, and multi-vehicle delegations.
                </p>
                <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>GST Invoiced</span>
                  </span>
                  <Link href="/services/hourly-rentals" className="hover:text-[#D9A52B] transition-colors flex items-center gap-0.5">
                    <span>Hourly Hire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: FREQUENTLY ASKED INQUIRIES ACCORDION ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Contact Clarifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-2xl overflow-hidden transition-all duration-200 border border-[#E5ECE5]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-display font-bold text-xs sm:text-sm text-[#182A2B] hover:text-[#073B3A] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D9A52B] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs text-[#556464] leading-relaxed border-t border-[#EEF2EE]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}