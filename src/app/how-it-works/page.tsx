"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarSearch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  UserCheck,
  Car,
  Compass,
  MapPin,
  Check,
  X,
  Lock,
  PhoneCall,
  MessageSquare,
  Plane,
  ChevronDown,
  ShieldAlert,
  Zap,
  Award,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const workflowSteps = [
    {
      step: "01",
      phase: "Initiation",
      title: "Choose Route & Vehicle Class",
      desc: "Select your travel format—Airport transfer, Outstation highway trip, or Tour package. Explore our 3D interactive fleet models to pick the ideal Hatchback, Sedan, SUV, Large Car, or Mini Bus.",
      badge: "Zero Upfront Lock-in",
      icon: CalendarSearch,
      features: [
        "Dynamic route fare estimate",
        "Clear seating & luggage specifications",
        "Airport radar tracking option",
      ],
    },
    {
      step: "02",
      phase: "Financial Security",
      title: "10% Advance Deposit Model",
      desc: "Once you review your itemized transparent tariff, secure your booking with just a 10% advance deposit. You avoid full upfront lock-ins, and the remaining 90% is settled at your destination.",
      badge: "Accountability Model",
      icon: Lock,
      features: [
        "10% locks driver & vehicle legally",
        "Zero surge pricing guarantee",
        "100% refundable on 6hr notice",
      ],
    },
    {
      step: "03",
      phase: "Operations Readiness",
      title: "Chauffeur Allocation & Pre-Trip Priming",
      desc: "Our Bhubaneswar control room allocates a police-verified, background-checked local chauffeur. Driver credentials and vehicle number are dispatched to your WhatsApp prior to journey time.",
      badge: "Human Quality Check",
      icon: UserCheck,
      features: [
        "Driver coordinates sent to WhatsApp",
        "Chauffeur arrives 15 mins early",
        "Dual-zone AC cooled to 22°C",
      ],
    },
    {
      step: "04",
      phase: "The Journey",
      title: "Guaranteed Punctual Departure",
      desc: "Your uniformed chauffeur welcomes you at your doorstep or BBI arrival terminal with luggage assistance. Enjoy a comfortable, fatigue-free ride across Odisha with zero cancellations.",
      badge: "Zero Cancellations",
      icon: Compass,
      features: [
        "Punctual airport & doorstep greeting",
        "Courteous Odia hospitality",
        "Pay remaining 90% at final drop",
      ],
    },
  ];

  const preBookedGuarantees = [
    {
      title: "Guaranteed Vehicle Allocation",
      tag: "Zero Cancellation",
      desc: "Once your 10% deposit is logged, we legally commit your vehicle and driver. Unlike aggregator apps where drivers cancel repeatedly, your CabJatra chauffeur is guaranteed.",
      highlight: "100% Departure Certainty",
      icon: ShieldCheck,
    },
    {
      title: "100% Yellow-Board Commercial Legality",
      tag: "STA Authorized",
      desc: "Every vehicle operates with official Odisha State Transport commercial permits, comprehensive passenger insurance, and fitness certification. We strictly never dispatch private white-plate cars.",
      highlight: "Comprehensive Insurance",
      icon: Car,
    },
    {
      title: "Zero Surge Pricing Shield",
      tag: "Transparent Tariffs",
      desc: "Our tariffs are fixed and strictly mileage-calibrated. Whether it is heavy monsoon downpours, late-night arrivals, or crowded festival rushes like Rath Yatra, your tariff never surges.",
      highlight: "Fixed Highway Mileage",
      icon: Zap,
    },
    {
      title: "Pre-Cooled AC & Hygiene Guarantee",
      tag: "Cabin Quality",
      desc: "Every vehicle undergoes a pre-trip hygiene inspection. Dual-zone climate control is pre-cooled 15 minutes before boarding to beat Odisha humidity. Sanitized, non-smoking cabin assured.",
      highlight: "22°C Pre-Cooled AC",
      icon: Award,
    },
  ];

  const comparisonData = [
    {
      aspect: "Pricing & Surcharges",
      street: "2x – 3x surge multipliers during rain, night flights & festivals.",
      cabjatra: "Strict zero-surge guarantee with transparent fixed per-km tariffs.",
    },
    {
      aspect: "Booking Commitment",
      street: "Drivers cancel 2–3 times at will, leaving passengers stranded.",
      cabjatra: "10% advance deposit legally locks your vehicle. Zero cancellations.",
    },
    {
      aspect: "Vehicle Legality",
      street: "Often unauthorized private white-plate cars without passenger insurance.",
      cabjatra: "100% yellow-board commercial fleet with comprehensive state permits.",
    },
    {
      aspect: "Air Conditioning",
      street: "Drivers frequently refuse AC or demand extra off-meter cash.",
      cabjatra: "Guaranteed dual-zone AC, pre-cooled 15 mins prior to boarding.",
    },
    {
      aspect: "Chauffeur Standards",
      street: "Unscreened temporary drivers with zero accountability.",
      cabjatra: "Police background-verified, uniformed, experienced local chauffeurs.",
    },
  ];

  const faqs = [
    {
      q: "How does the 10% advance deposit model protect me?",
      a: "The 10% advance deposit creates a binding mutual commitment. You are never forced into a 100% upfront lock-in, and our operations desk reserves your designated vehicle and chauffeur. The remaining 90% is settled directly at your final destination via Cash or UPI.",
    },
    {
      q: "What happens if my flight arrives late at Bhubaneswar (BBI) Airport?",
      a: "Our dispatch desk continuously tracks your flight number via live radar. If your flight is delayed or rescheduled, your chauffeur adjusts arrival time automatically at zero extra waiting charge.",
    },
    {
      q: "When and how do I receive my chauffeur's details?",
      a: "Once your 10% advance deposit is verified, your official CabJatra digital ride voucher with booking reference is generated. Your chauffeur's full name, phone number, and vehicle registration are dispatched via WhatsApp well prior to pickup.",
    },
    {
      q: "Can I modify or cancel my reservation?",
      a: "Yes. We offer a flexible cancellation policy: notify us at least 6 hours before departure for a 100% hassle-free refund of your advance deposit. Modifications to pickup time can be coordinated directly with our 24/7 WhatsApp concierge.",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= HERO: EDITORIAL WORKFLOW BANNER ================= */}
      {/* pt-36 sm:pt-44 provides ample breathing room below the floating navbar */}
      <section className="relative text-white overflow-hidden pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-black/20">
        {/* Heritage Backdrop Photography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=2400&auto=format&fit=crop"
            alt="Puri-Konark Marine Drive Coastal Highway, Odisha"
            fill
            priority
            className="object-cover object-center scale-102 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/95 via-[#032123]/90 to-[#FAF9F5]" />
        </div>

        {/* Ambient Radial Lighting Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-80 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>The CabJatra Mobility Standard • End-to-End Workflow</span>
          </div>

          {/* Regal Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
            How CabJatra Works: <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Punctual, Principled Chauffeur Travel.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From seamless online reservation and our 10% advance deposit model to background-verified chauffeurs and The Pre-Booked Guarantee—explore how we deliver total arrival certainty across Odisha.
          </p>

          {/* 3 Quick Pillar Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-3 text-xs text-white/90">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <Lock className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>10% Advance Deposit Model</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>100% Commercial Yellow-Board Fleet</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <Zap className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Zero Surge Pricing Guarantee</span>
            </span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: 4-STEP JOURNEY WORKFLOW ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Step-by-Step Experience</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              The 4-Step Booking Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              Every route follows our rigorous operational protocol to ensure zero delays and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-3xl p-6 bg-white border border-[#D5DDD5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header: Step Number & Phase Badge */}
                    <div className="flex items-center justify-between">
                      <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-sm shadow-md">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA] px-2.5 py-1 rounded-full">
                        {step.phase}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#556464] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Feature Checkpoints */}
                    <div className="pt-3 border-t border-[#EEF2EE] space-y-1.5">
                      {step.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-[#182A2B] font-medium">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-semibold text-[#073B3A]">
                    <span className="text-[#D9A52B] font-bold">{step.badge}</span>
                    <span className="text-[#667575] text-[11px]">Phase {step.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE PRE-BOOKED GUARANTEE (INTEGRATED) ================= */}
      <section className="py-12 sm:py-16 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Core Passenger Charter</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              The Pre-Booked Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              Our 4 binding operational commitments that protect your journey against cancellations, surge extortion, and substandard vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {preBookedGuarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#C1DAD7]">
                        {g.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      {g.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>{g.highlight}</span>
                    </span>
                    <span className="text-[#D9A52B]">Guarantee 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: COMPARISON MATRIX (STREET VS CABJATRA) ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Comparative Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Why Pre-Booking Beats Street Hailing
            </h2>
            <p className="text-xs sm:text-sm text-[#667575]">
              Experience the difference between unverified street cars and CabJatra&apos;s verified chauffeur standard.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D5DDD5] bg-white shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-gradient-to-r from-[#073B3A] to-[#041F20] text-white p-4 sm:p-5 text-xs font-bold uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-3">Feature</div>
              <div className="col-span-4 sm:col-span-4 text-[#FED7D7]">Aggregator / Street Hailing</div>
              <div className="col-span-4 sm:col-span-5 text-[#A7F3D0]">CabJatra Pre-Booked Standard</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#EEF2EE]">
              {comparisonData.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-12 p-4 sm:p-5 text-xs items-center gap-2">
                  <div className="col-span-4 sm:col-span-3 font-bold text-[#182A2B]">
                    {row.aspect}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-[#742A2A] flex items-start gap-1.5 font-medium leading-snug">
                    <X className="w-3.5 h-3.5 text-[#E53E3E] shrink-0 mt-0.5" />
                    <span>{row.street}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-[#22543D] flex items-start gap-1.5 font-bold leading-snug">
                    <Check className="w-3.5 h-3.5 text-[#38A169] shrink-0 mt-0.5" />
                    <span>{row.cabjatra}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Workflow Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#667575]">
              Everything you need to know about our pre-booked mobility workflow.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
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

      {/* ================= SECTION 5: SLENDER LUXURY CLOSING CTA ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062F31] via-[#042426] to-[#021718] text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center border border-white/15 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-bold text-[#D9A52B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Ready to Travel with Certainty?</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                Reserve Your Chauffeur with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  The Pre-Booked Guarantee.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto leading-relaxed">
                Lock your verified commercial vehicle and driver today with just a 10% advance deposit. Transparent, punctual, and zero surge pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href="/book-cab"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.35)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer border border-[#F2C868]/60"
                >
                  <span>Book Your Chauffeur Cab</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#25D366] via-[#22BF5B] to-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/book-tour"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-white/20 backdrop-blur-md hover:border-[#D9A52B]/70 transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#D9A52B]" />
                  <span>Explore Odisha Tours</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}