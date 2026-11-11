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
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Architectural Pavilion Card with Centered Content */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden card-skeuo-dark text-white p-6 sm:p-8 lg:p-12 text-center flex flex-col items-center justify-center group">
          {/* Subtle Ambient Background Photography */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop"
              alt="Scenic coastal highway in Odisha"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021718] via-[#041F20]/85 to-[#073B3A]/90" />
          </div>

          {/* Konark Gold Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6 flex flex-col items-center justify-center">
            {/* Centered Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-[10px] sm:text-[10.5px] font-bold text-[#D9A52B] shadow-md">
              <ShieldCheck className="w-4 h-4" />
              <span>Odisha&apos;s Dedicated Chauffeur Mobility Platform</span>
            </div>

            {/* Centered Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight drop-shadow-md">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  Private Chauffeur Comfort?
                </span>
              </h2>
              <p className="text-xs sm:text-base text-[#E0ECEA]/90 leading-relaxed max-w-2xl mx-auto">
                Whether arriving at Biju Patnaik Airport, heading out on an intercity pilgrimage to Puri, or planning a multi-day Golden Triangle tour—reserve your vehicle with complete peace of mind.
              </p>
            </div>

            {/* Centered Action Triggers */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <Link
                href="/book-cab"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-[#062F31] btn-skeuo-gold inline-flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4 text-[#062F31]" />
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4 text-[#062F31]" />
              </Link>

              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-white btn-skeuo-dark inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                <span>WhatsApp Operations Desk</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#E0ECEA] hover:text-white transition-colors px-3 py-2 bg-black/30 rounded-xl border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Helpline: {COMPANY_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Centered Trust Assurance Strip */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-[11px] text-[#E0ECEA]/75">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                <span>10% advance deposit only after availability verification</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                <span>Verified chauffeurs &amp; clean commercial AC vehicles</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                <span>Zero last-minute driver cancellations</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
