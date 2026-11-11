"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Plane,
  Compass,
  Navigation,
  FileCheck2,
  Award,
  Radio,
  ExternalLink,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Footer: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  };

  return (
    <footer className="bg-[#021718] text-[#E0ECEA] pt-8 sm:pt-10 pb-6 border-t-2 border-[#D9A52B]/30 font-sans relative overflow-hidden">
      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#073B3A]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#D9A52B]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TIER 1: BESPOKE LUXURY CONCIERGE DISPATCH LOUNGE ================= */}
        <div className="mb-7 sm:mb-9 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#063336] via-[#042426] to-[#021415] border border-[#D9A52B]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-2xl relative overflow-hidden group">
          {/* Top Gold Shimmer Edge Line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D9A52B]/90 via-50% to-transparent pointer-events-none" />

          {/* Ambient Corner Lighting Sheens */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content & Typography */}
          <div className="space-y-2.5 text-center lg:text-left relative z-10 max-w-2xl">
            {/* Live Operations Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#D9A52B]/50 text-[10.5px] font-bold text-[#D9A52B] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>Bhubaneswar Central Dispatch &bull; Live 24/7 Operations Desk</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">
              Need Instant Chauffeur Dispatch or a{" "}
              <span className="text-[#D9A52B] italic font-normal">Custom Tour Plan?</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#E0ECEA]/85 leading-relaxed font-normal">
              Book verified yellow-board commercial fleet with background-checked chauffeurs. Simple 10% advance deposit after fleet confirmation.
            </p>
          </div>

          {/* Tactile Luxury Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
            {/* WhatsApp Emerald Luxury Button */}
            <a
              href={COMPANY_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-b from-[#22C55E] via-[#16A34A] to-[#15803D] text-white font-bold text-xs inline-flex items-center gap-2.5 shadow-[0_10px_25px_rgba(22,163,74,0.35),inset_0_1px_0_rgba(255,255,255,0.45),0_2px_4px_rgba(0,0,0,0.3)] border-t border-white/40 border-b border-[#0E602F] hover:brightness-110 transition-all hover:scale-[1.02] active:scale-98 select-none"
            >
              <div className="w-8 h-8 rounded-xl bg-black/15 flex items-center justify-center shrink-0 border border-white/20">
                <MessageSquare className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="text-left leading-tight">
                <span className="block font-bold text-white text-xs">WhatsApp Operations Desk</span>
                <span className="block text-[9.5px] font-medium text-white/90">Instant Booking &bull; &lt; 2 min response</span>
              </div>
            </a>

            {/* Helpline Tactile Luxury Button */}
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-b from-[#093D3F] to-[#042022] hover:from-[#0C4A4C] hover:to-[#06282B] text-white border border-[#D9A52B]/45 hover:border-[#D9A52B]/75 font-bold text-xs inline-flex items-center gap-2.5 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-98 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.4)] select-none"
            >
              <div className="w-8 h-8 rounded-xl bg-[#D9A52B]/15 flex items-center justify-center shrink-0 border border-[#D9A52B]/40">
                <Phone className="w-4 h-4 text-[#D9A52B]" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[#D9A52B] text-[9.5px] font-bold uppercase tracking-wider">Customer Helpline</span>
                <span className="block text-white font-bold text-xs">{COMPANY_CONFIG.contact.phoneDisplay}</span>
              </div>
            </a>
          </div>
        </div>

        {/* ================= TIER 2: 4-COLUMN ARCHITECTURAL DIRECTORY GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-white/10 text-xs">
          {/* Column 1: Brand Authority & State Fleet Certification (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="CABJATRA Home">
              <BrandLogo size="lg" variant="light" />
            </Link>

            <p className="text-xs text-[#E0ECEA]/80 leading-relaxed max-w-sm">
              Odisha&apos;s dedicated pre-booked mobility platform connecting pilgrims, families, and corporate executives with certified commercial chauffeurs, guaranteed on-time dispatch, and pristine AC fleet.
            </p>

            {/* Official Operating Credentials Box */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/15 space-y-2.5 text-[11px] text-[#E0ECEA]/90 shadow-skeuo-inset">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">100% Yellow-Board Commercial Fleet</span>
                  <span className="text-[10px] text-[#E0ECEA]/70">Zero private white-plate cars • Comprehensive passenger insurance</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">10% Advance Deposit Model</span>
                  <span className="text-[10px] text-[#E0ECEA]/70">Locked reservation • Remaining 90% settled after trip</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Odisha Central Hub</span>
                  <span className="text-[10px] text-[#E0ECEA]/70">{COMPANY_CONFIG.contact.registeredAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#D9A52B] flex items-center gap-1.5 pb-1 border-b border-white/10">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Explore &amp; Services</span>
            </h4>
            
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/book-cab"
                  className="hover:text-[#D9A52B] transition-all text-white font-semibold flex items-center justify-between group p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Book a Cab</span>
                  </span>
                  <span className="text-[9px] bg-gradient-to-b from-[#E6B543] to-[#C99320] text-[#062F31] font-extrabold px-2 py-0.5 rounded-full shadow-xs uppercase">
                    Instant
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/book-tour"
                  className="hover:text-[#D9A52B] transition-all text-white font-semibold flex items-center justify-between group p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Book a Tour</span>
                  </span>
                  <span className="text-[9px] bg-[#073B3A] text-white border border-[#D9A52B]/40 font-bold px-2 py-0.5 rounded-full uppercase">
                    Circuits
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/services/airport-transfers"
                  className="hover:text-[#D9A52B] text-[#E0ECEA]/80 transition-colors flex items-center gap-2 py-1 group"
                >
                  <Plane className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                  <span>BBI Airport Transfers (Flight Radar)</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/services/outstation-cabs"
                  className="hover:text-[#D9A52B] text-[#E0ECEA]/80 transition-colors flex items-center gap-2 py-1 group"
                >
                  <Compass className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                  <span>Outstation Highway Cabs</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/services/hourly-rentals"
                  className="hover:text-[#D9A52B] text-[#E0ECEA]/80 transition-colors flex items-center gap-2 py-1 group"
                >
                  <Clock className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                  <span>Hourly Rentals (Standby Chauffeur)</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/services/odisha-tours"
                  className="hover:text-[#D9A52B] text-[#E0ECEA]/80 transition-colors flex items-center gap-2 py-1 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                  <span>Curated Odisha Tour Packages</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/services#corporate"
                  className="hover:text-[#D9A52B] text-[#E0ECEA]/80 transition-colors flex items-center gap-2 py-1 group"
                >
                  <Award className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                  <span>Corporate Mobility &amp; Conclaves</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Highway Corridors (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#D9A52B] flex items-center gap-1.5 pb-1 border-b border-white/10">
              <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Popular Highway Routes</span>
            </h4>

            <ul className="space-y-2.5 text-xs text-[#E0ECEA]/85">
              <li>
                <Link
                  href="/book-cab?service=outstation&to=Puri%20Golden%20Beach"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 block group transition-all"
                >
                  <div className="flex items-center justify-between text-white group-hover:text-[#D9A52B] transition-colors font-semibold">
                    <span>Bhubaneswar ⇄ Puri Beach</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[10px] text-[#E0ECEA]/70 mt-0.5 flex items-center gap-2">
                    <span>60 km • 1 hr 20 min</span>
                    <span>•</span>
                    <span className="text-[#10B981]">NH-316 Highway</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/services/airport-transfers"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 block group transition-all"
                >
                  <div className="flex items-center justify-between text-white group-hover:text-[#D9A52B] transition-colors font-semibold">
                    <span>BBI Airport Radar Transfers</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[10px] text-[#E0ECEA]/70 mt-0.5 flex items-center gap-2">
                    <span>Citywide 24/7</span>
                    <span>•</span>
                    <span className="text-[#D9A52B]">Zero Flight Delay Fees</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/book-tour?destination=konark"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 block group transition-all"
                >
                  <div className="flex items-center justify-between text-white group-hover:text-[#D9A52B] transition-colors font-semibold">
                    <span>Konark Sun Temple &amp; Marine Drive</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[10px] text-[#E0ECEA]/70 mt-0.5">
                    <span>65 km • Coastal Scenic Corridor</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/book-tour?destination=chilika"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 block group transition-all"
                >
                  <div className="flex items-center justify-between text-white group-hover:text-[#D9A52B] transition-colors font-semibold">
                    <span>Chilika Lake &amp; Dolphin Safari</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[10px] text-[#E0ECEA]/70 mt-0.5">
                    <span>Satapada Lagoon • OTDC Boat Point</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/book-cab?service=local&to=Cuttack%20Badambadi"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group pt-1"
                >
                  <span className="text-[#E0ECEA]/80">Bhubaneswar ⇄ Cuttack Express (NH-16)</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Compliance (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#D9A52B] flex items-center gap-1.5 pb-1 border-b border-white/10">
              <FileCheck2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Compliance &amp; Desk</span>
            </h4>

            <ul className="space-y-2 text-xs text-[#E0ECEA]/80">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  Privacy Policy &amp; Safety
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  Terms &amp; Chauffeur Charter
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  100% Refund Guarantee Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  About Our Standards &amp; Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  24/7 Operations Desk
                </Link>
              </li>
            </ul>

            {/* Interactive Click-to-Copy Helpline Cards (Formatted with Zero Cutoff) */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                type="button"
                onClick={() => copyToClipboard(COMPANY_CONFIG.contact.phoneDisplay, "phone")}
                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center justify-between text-xs group cursor-pointer active:scale-98"
                title="Click to copy phone number"
              >
                <div className="min-w-0 pr-1">
                  <span className="text-[9px] uppercase tracking-wider text-[#D9A52B] font-bold block">
                    Customer Helpline
                  </span>
                  <span className="text-white font-bold text-xs truncate block">
                    {COMPANY_CONFIG.contact.phoneDisplay}
                  </span>
                </div>
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-white/50 group-hover:text-white shrink-0 transition-colors" />
                )}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(COMPANY_CONFIG.contact.supportEmail, "email")}
                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center justify-between text-xs group cursor-pointer active:scale-98"
                title="Click to copy support email"
              >
                <div className="min-w-0 pr-1">
                  <span className="text-[9px] uppercase tracking-wider text-[#D9A52B] font-bold block">
                    Official Support Desk
                  </span>
                  <span className="text-white font-bold text-xs truncate block">
                    {COMPANY_CONFIG.contact.supportEmail}
                  </span>
                </div>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-white/50 group-hover:text-white shrink-0 transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= TIER 3: ACTIVE DISPATCH HUBS & BRANDED SOCIALS ================= */}
        <div className="py-4 sm:py-5 border-b border-white/10 text-xs text-[#E0ECEA]/75 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Active Operating Hubs with Live Status Indicator */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="font-bold text-white flex items-center gap-1.5 mr-1">
              <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
              <span>Active Dispatch Hubs:</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Bhubaneswar (BBI Airport &amp; Infocity)
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Puri Jagannath Dham
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Cuttack CDA &amp; Badambadi
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Konark Marine Drive
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Chilika Satapada
            </span>
          </div>

          {/* Tactile Branded Social Links with Real SVGs */}
          <div className="flex items-center gap-2 text-xs">
            {/* Facebook */}
            <a
              href={COMPANY_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#1877F2] hover:text-white border border-white/10 flex items-center justify-center transition-all text-[#E0ECEA]/80 shadow-xs active:scale-95"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.63 13.77 5.63c1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={COMPANY_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#E4405F] hover:text-white border border-white/10 flex items-center justify-center transition-all text-[#E0ECEA]/80 shadow-xs active:scale-95"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href={COMPANY_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-black hover:text-white border border-white/10 flex items-center justify-center transition-all text-[#E0ECEA]/80 shadow-xs active:scale-95"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={COMPANY_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#0A66C2] hover:text-white border border-white/10 flex items-center justify-center transition-all text-[#E0ECEA]/80 shadow-xs active:scale-95"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ================= TIER 4: CORPORATE LEGAL BAR & COPYRIGHTS ================= */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#E0ECEA]/70 text-center sm:text-left">
          <div className="space-y-0.5">
            <p>
              © 2026 <span className="text-white font-bold">{COMPANY_CONFIG.legalBusinessName}</span> All rights reserved.
            </p>
            <p className="text-[10px] text-[#E0ECEA]/50">
              All legals, brand assets &amp; copyrights held by NovaSpark Digital Marketing Pvt. Ltd. • State Transport Authority (STA) Odisha Guidelines Compliant
            </p>
          </div>

          {/* NovaSpark Digital Marketing Official Placement */}
          <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 shadow-xs">
            <span className="text-[10px] text-[#E0ECEA]/75">Platform &amp; Legal Entity:</span>
            <span className="inline-flex items-center gap-1 text-[#D9A52B] font-bold tracking-wide text-[11px]">
              <Sparkles className="w-3 h-3 text-[#D9A52B]" />
              <span>NovaSpark Digital Marketing Pvt. Ltd.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};