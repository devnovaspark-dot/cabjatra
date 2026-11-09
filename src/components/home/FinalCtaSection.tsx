"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Architectural Pavilion Card with Centered Content */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062F31] via-[#041F20] to-[#073B3A] text-white p-8 sm:p-14 lg:p-16 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.25)] text-center flex flex-col items-center justify-center">
          {/* Subtle Ambient Background Photography */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop"
              alt="Scenic coastal highway in Odisha"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041F20] via-[#041F20]/80 to-[#041F20]/90" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center justify-center">
            {/* Centered Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-[#D9A52B] shadow-soft">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Odisha&apos;s Dedicated Chauffeur Mobility Platform</span>
            </div>

            {/* Centered Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  Private Chauffeur Comfort?
                </span>
              </h2>
              <p className="text-xs sm:text-base text-[#E0ECEA]/85 leading-relaxed max-w-2xl mx-auto">
                Whether arriving at Biju Patnaik Airport, heading out on an intercity pilgrimage to Puri, or planning a multi-day Golden Triangle tour—reserve your vehicle with complete peace of mind.
              </p>
            </div>

            {/* Centered Action Triggers */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/book-cab"
                className="px-7 py-3.5 rounded-full font-bold text-xs text-[#062F31] bg-gradient-to-b from-[#E6B543] to-[#C99320] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 transition-all inline-flex items-center gap-2 active:translate-y-0.5"
              >
                <Car className="w-4 h-4 text-[#062F31]" />
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4 text-[#062F31]" />
              </Link>

              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full font-semibold text-xs text-white bg-gradient-to-b from-[#084846] to-[#041F20] border-t border-white/20 shadow-skeuo-button hover:brightness-110 transition-all inline-flex items-center gap-2 active:translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                <span>WhatsApp Operations Desk</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E0ECEA] hover:text-white transition-colors px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Helpline: {COMPANY_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Centered Trust Assurance Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#E0ECEA]/75">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                10% advance deposit only after availability verification
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                Verified chauffeurs &amp; clean commercial AC vehicles
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                Zero last-minute driver cancellations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
