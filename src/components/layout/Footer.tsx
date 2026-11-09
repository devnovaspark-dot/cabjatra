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
    <footer className="bg-[#031C1D] text-[#E0ECEA] pt-14 pb-8 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#073B3A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TIER 1: INTERACTIVE CONCIERGE DISPATCH RIBBON ================= */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#073B3A]/90 via-[#062F31]/95 to-[#041F20] border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/15 text-[10px] font-bold text-[#D9A52B]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Bhubaneswar Operations Desk • Live 24/7 Standby</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Need Instant Chauffeur Dispatch or a Custom Tour Plan?
            </h3>
            <p className="text-xs text-[#E0ECEA]/80 max-w-xl">
              Lock your ride with verified commercial yellow-board vehicles. Only 10% advance deposit after driver allocation check.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* WhatsApp Direct Action */}
            <a
              href={COMPANY_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-[#041F20] font-bold text-xs inline-flex items-center gap-2 shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.02] active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-[#041F20] fill-[#041F20]" />
              <span>WhatsApp Operations</span>
            </a>

            {/* Helpline Click-to-Call */}
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs inline-flex items-center gap-2 backdrop-blur-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#D9A52B]" />
              <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* ================= TIER 2: MAIN DIRECTORY GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10 text-xs">
          {/* Col 1: Brand Authority (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="CABJATRA Home">
              <BrandLogo size="lg" variant="light" />
            </Link>

            <p className="text-xs text-[#E0ECEA]/75 leading-relaxed max-w-sm">
              Odisha&apos;s dedicated pre-booked mobility platform connecting travelers, pilgrims, and corporate guests with background-verified commercial chauffeurs and clean, air-conditioned fleet.
            </p>

            {/* Quick Operating Credentials */}
            <div className="space-y-2 pt-1 text-[11px] text-[#E0ECEA]/85">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <span className="font-semibold text-white">100% Commercial Fleet (Yellow Board)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>10% Advance Deposit Model • Zero Surprise Surges</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <span className="text-[#E0ECEA]/70">Registered Hub: Patia Infocity Avenue, Bhubaneswar 751024</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Booking (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Explore &amp; Book</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E0ECEA]/75">
              <li>
                <Link
                  href="/book-cab"
                  className="hover:text-[#D9A52B] transition-colors text-white font-semibold flex items-center justify-between group p-1.5 -ml-1.5 rounded-lg hover:bg-white/5"
                >
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Book a Cab</span>
                  </span>
                  <span className="text-[8px] bg-[#D9A52B] text-[#062F31] font-bold px-1.5 py-0.5 rounded uppercase">
                    Instant
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/book-tour"
                  className="hover:text-[#D9A52B] transition-colors text-white font-semibold flex items-center justify-between group p-1.5 -ml-1.5 rounded-lg hover:bg-white/5"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Book a Tour</span>
                  </span>
                  <span className="text-[8px] bg-[#073B3A] text-white border border-white/20 font-bold px-1.5 py-0.5 rounded uppercase">
                    Circuits
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  All 6 Mobility Services
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  Odisha Travelogue &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  About Our Standards &amp; Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9A52B] transition-colors block py-0.5">
                  24/7 Operations &amp; Support Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Highway Corridors (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Popular Routes</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#E0ECEA]/75">
              <li>
                <Link
                  href="/book-cab?service=outstation&to=Puri%20Golden%20Beach"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>Bhubaneswar ⇄ Puri Beach</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airport-transfers"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>BBI Airport Radar Transfers</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/book-tour?destination=konark"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>Konark Sun Temple &amp; Marine Drive</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/book-tour?destination=chilika"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>Chilika Lake &amp; Dolphin Safari</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/book-cab?service=local&to=Cuttack%20Badambadi"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>Bhubaneswar ⇄ Cuttack Express</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#corporate"
                  className="hover:text-[#D9A52B] transition-colors flex items-center justify-between group"
                >
                  <span>Corporate Mobility &amp; Events</span>
                  <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#D9A52B] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive Contact & Policies (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Compliance
            </h4>
            <ul className="space-y-2 text-xs text-[#E0ECEA]/75">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D9A52B] transition-colors block">
                  Privacy Policy &amp; Safety
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#D9A52B] transition-colors block">
                  Terms &amp; Chauffeur Agreement
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-[#D9A52B] transition-colors block">
                  100% Refund Matrix
                </Link>
              </li>
            </ul>

            {/* Interactive Click-to-Copy Helpline */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                type="button"
                onClick={() => copyToClipboard(COMPANY_CONFIG.contact.phoneDisplay, "phone")}
                className="w-full text-left p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between text-[11px] group cursor-pointer"
                title="Click to copy phone number"
              >
                <div className="flex items-center gap-2 truncate">
                  <Phone className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                  <span className="truncate">{COMPANY_CONFIG.contact.phoneDisplay}</span>
                </div>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-[#10B981] shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-white/50 group-hover:text-white shrink-0" />
                )}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(COMPANY_CONFIG.contact.supportEmail, "email")}
                className="w-full text-left p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between text-[11px] group cursor-pointer"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                  <span className="truncate">{COMPANY_CONFIG.contact.supportEmail}</span>
                </div>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-[#10B981] shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-white/50 group-hover:text-white shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= TIER 3: DISPATCH HUBS & SOCIALS ================= */}
        <div className="py-4 border-b border-white/10 text-[11px] text-[#E0ECEA]/70 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="font-semibold text-white">Active Dispatch Hubs:</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/90">Bhubaneswar (BBI Airport)</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/90">Puri Dham</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/90">Cuttack CDA</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/90">Konark Marine Drive</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href={COMPANY_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#1877F2] hover:text-white transition-all text-[#E0ECEA]/80"
            >
              Facebook
            </a>
            <a
              href={COMPANY_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#E4405F] hover:text-white transition-all text-[#E0ECEA]/80"
            >
              Instagram
            </a>
            <a
              href={COMPANY_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-black hover:text-white transition-all text-[#E0ECEA]/80"
            >
              Twitter/X
            </a>
            <a
              href={COMPANY_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all text-[#E0ECEA]/80"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ================= TIER 4: LEGAL BAR WITH NOVASPARK DIGITAL MARKETING ================= */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10.5px] text-[#E0ECEA]/60 text-center sm:text-left">
          <p>
            © 2026 <span className="text-white font-semibold">{COMPANY_CONFIG.legalBusinessName}</span>. All rights reserved.
          </p>

          {/* NovaSpark Digital Marketing Placement */}
          <div className="flex items-center gap-2">
            <span>Digital Marketing &amp; Strategy by</span>
            <span className="px-2.5 py-1 rounded-full bg-[#073B3A] border border-[#D9A52B]/40 text-[#D9A52B] font-bold tracking-wide shadow-xs">
              NovaSpark Digital Marketing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
