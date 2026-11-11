import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Car,
  Clock,
  Compass,
  Award,
  Users,
  Palmtree,
  Plane,
  HeartHandshake,
  FileCheck,
  PhoneCall,
  Check,
  Star,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

export const metadata = {
  title: "About Us — CabJatra Odisha Chauffeur Mobility",
  description:
    "Learn about CabJatra: our founding mission, verified commercial fleet standards, 10% advance deposit model, and operating hubs across Odisha.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "The 10% Advance Security Model",
      desc: "Unlike aggregators demanding 100% upfront or zero accountability pay-later schemes, we only request a 10% deposit after manually verifying your vehicle and driver availability. The remaining 90% is settled upon reaching your destination.",
      icon: ShieldCheck,
      badge: "Financial Transparency",
      highlight: "Zero Financial Lock-in",
    },
    {
      title: "100% Yellow-Board Commercial Fleet",
      desc: "Every single vehicle in our dispatch roster carries a legitimate state commercial transport permit, dual-zone air conditioning, and comprehensive commercial passenger insurance. We never dispatch unauthorized private white-plate cars.",
      icon: Car,
      badge: "State STA Verified",
      highlight: "Zero Private White Plates",
    },
    {
      title: "Zero Surge Pricing Guarantee",
      desc: "Our tariffs are fixed, transparent, and calibrated by actual highway mileage. You will never face sudden 2x or 3x surge multipliers during heavy monsoon downpours, late-night arrivals, or crowded festival rushes like Rath Yatra.",
      icon: Clock,
      badge: "Guaranteed Tariffs",
      highlight: "No Surge Multipliers",
    },
    {
      title: "Verified Chauffeur Hospitality",
      desc: "Our chauffeurs are verified local professionals with extensive highway experience, clean driving records, and courteous pilgrimage etiquette. Trained to assist with luggage, family needs, and senior citizen travel.",
      icon: HeartHandshake,
      badge: "Courteous Service",
      highlight: "Police Background Checked",
    },
  ];

  const fleetStandards = [
    {
      title: "Dual-Zone AC Verification",
      desc: "Every vehicle is inspected before dispatch to guarantee functioning climate control primed 10 minutes before boarding.",
    },
    {
      title: "Commercial Legal Compliance",
      desc: "Valid Odisha State Transport permit, commercial insurance, and regular mechanical fitness certifications.",
    },
    {
      title: "Pristine Sanitized Interiors",
      desc: "Daily sanitized upholstery, dust-free floor mats, and non-smoking cabin policy for all family and executive rides.",
    },
    {
      title: "Live GPS & Safety Tracking",
      desc: "Central dispatch operations monitors highway transit routes continuously for passenger peace of mind.",
    },
  ];

  const operatingHubs = [
    {
      city: "Bhubaneswar",
      code: "BBI",
      role: "Central Operations & Airport Hub",
      detail: "Biju Patnaik International Airport, Master Canteen, and Patia IT Corridor.",
      standby: "Live 24/7 Standby",
    },
    {
      city: "Puri Dham",
      code: "PURI",
      role: "Pilgrimage & Coastal Hub",
      detail: "Grand Road Jagannath Temple, VIP Road, and Golden Beach Marine Drive.",
      standby: "Live 24/7 Standby",
    },
    {
      city: "Cuttack",
      code: "CTC",
      role: "Commercial & High Court Corridor",
      detail: "Badambadi Transit Hub, OMP Square, and CDA Judicial District.",
      standby: "Standby Fleet Active",
    },
    {
      city: "Konark",
      code: "KNR",
      role: "Heritage & Sun Temple Gateway",
      detail: "UNESCO Sun Temple, Chandrabhaga Beach, and coastal forest trails.",
      standby: "Daily Tour Dispatch",
    },
    {
      city: "Chilika",
      code: "CHK",
      role: "Eco-Tourism & Dolphin Lagoon",
      detail: "Barkul OTDC Harbor, Satapada Dolphin Center, and Kalijai Island.",
      standby: "Tour Circuit Standby",
    },
    {
      city: "Berhampur",
      code: "BAM",
      role: "South Odisha Gateway",
      detail: "Silk City Junction, Gopalpur-on-Sea, and Taratarini Shaktipeeth.",
      standby: "Highway Corridor Fleet",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= EDITORIAL PRESTIGE HERO BANNER ================= */}
      <section className="relative text-white overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-16 border-b border-black/20">
        {/* Heritage Backdrop Photography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
            alt="Majestic Konark Sun Temple - UNESCO Heritage in Odisha"
            fill
            priority
            className="object-cover object-center scale-102 opacity-35"
          />
          {/* Deep Emerald-Obsidian Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/95 via-[#042022]/90 to-[#FAF9F5]" />
        </div>

        {/* Ambient Gold Halo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-4">
            {/* Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-[10.5px] sm:text-xs font-semibold text-[#D9A52B] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Chauffeur Distinction • Established Mobility Protocol</span>
            </div>

            {/* Regal Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              A Principled Mobility Standard <br />
              <span className="italic font-display font-normal text-[#D9A52B]">
                For Timeless Odisha.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Born from the conviction that pilgrims, families, and business travelers deserve complete arrival certainty, transparent tariffs, and certified commercial vehicles across all 30 districts of Odisha.
            </p>

            {/* 4-Stat Prestige Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-4 max-w-3xl mx-auto">
              <div className="p-3 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-center shadow-skeuo-inset">
                <span className="block text-xl sm:text-2xl font-bold font-display text-[#D9A52B]">
                  14,200+
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/80 font-semibold block mt-0.5">
                  Journeys Dispatched
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-center shadow-skeuo-inset">
                <span className="block text-xl sm:text-2xl font-bold font-display text-white">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#A7F3D0] font-semibold block mt-0.5">
                  Yellow-Board Fleet
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-center shadow-skeuo-inset">
                <span className="block text-xl sm:text-2xl font-bold font-display text-[#D9A52B]">
                  10%
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/80 font-semibold block mt-0.5">
                  Advance Deposit Model
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-center shadow-skeuo-inset">
                <span className="block text-xl sm:text-2xl font-bold font-display text-white flex items-center justify-center gap-1">
                  4.9 <Star className="w-4 h-4 text-[#D9A52B] fill-[#D9A52B]" />
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/80 font-semibold block mt-0.5">
                  Guest Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: THE CABJATRA FOUNDATION & MANIFESTO ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Columns: Our Story & Operating Philosophy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#C1DAD7]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Our Foundation &amp; Philosophy</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B] leading-tight">
                Why We Built CabJatra: <br />
                <span className="text-[#073B3A]">Restoring Trust to Odisha Travel.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                Landing at Biju Patnaik International Airport (BBI) after a long flight, only to experience three consecutive driver cancellations on aggregator apps. Or trying to reach Puri for Lord Jagannath&apos;s darshan during peak summer, only to be forced into uncalibrated 3x surge fares.
              </p>

              <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                Odisha&apos;s cultural heritage, sacred pilgrimages, and booming industrial corridors deserve a mobility standard built on <strong>accountability, dignified hospitality, and guaranteed vehicle dispatch</strong>. CabJatra operates not as an automated algorithm, but as a dedicated operations desk that verifies every vehicle, screens every driver, and locks your reservation with a transparent 10% advance deposit.
              </p>

              {/* Two Core Pillars Micro-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="card-skeuo p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <h4 className="font-bold text-xs text-[#073B3A] font-display">
                      Pre-Booked Certainty
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#556464] leading-relaxed">
                    Vehicles are assigned in advance with verified driver credentials sent to your WhatsApp prior to departure.
                  </p>
                </div>

                <div className="card-skeuo p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D9A52B]" />
                    <h4 className="font-bold text-xs text-[#073B3A] font-display">
                      Zero Cancellation Guarantee
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#556464] leading-relaxed">
                    Once your chauffeur is assigned, your ride is guaranteed. We never leave passengers stranded at terminal gates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Visual Cutout & Mission Card */}
            <div className="lg:col-span-5 relative">
              <div className="card-skeuo-dark rounded-3xl overflow-hidden p-6 text-white relative shadow-2xl group">
                {/* Background Temple Cutout */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                  <Image
                    src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=900&auto=format&fit=crop"
                    alt="Konark Sun Temple Architecture"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021718] via-[#041F20]/85 to-[#073B3A]/90" />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Brand Emblem */}
                  <BrandLogo size="md" variant="light" />

                  <div className="pt-2 border-t border-white/15 space-y-2">
                    <span className="text-[10px] font-bold text-[#D9A52B] uppercase tracking-wider block">
                      Our Operating Mission
                    </span>
                    <p className="text-sm sm:text-base font-bold font-display text-white leading-snug">
                      &quot;To make Odisha&apos;s cultural wealth, coastal highways, and temple corridors accessible to every family and guest through dignified, safe, and punctual chauffeur mobility.&quot;
                    </p>
                  </div>

                  {/* Certified Badges */}
                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-[#E0ECEA]/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Commercial transport permit compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0" />
                      <span>Uniformed, police background-verified chauffeurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Central Bhubaneswar operations desk on 24/7 standby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 4 CORE COMMITMENTS BENTO ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Core Service Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              The 4 Pillars of CabJatra Distinction
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              Every route dispatched from our desk adheres to these foundational mobility guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-skeuo-button shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#BED2BE] shadow-xs">
                        {pil.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                      {pil.title}
                    </h3>

                    <p className="text-xs text-[#556464] leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5ECE5] flex items-center justify-between text-[11px] font-bold text-[#073B3A]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{pil.highlight}</span>
                    </span>
                    <span className="text-[#D9A52B]">Pillar 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FLEET HYGIENE & PROTOCOL ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-7 gap-3 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
                <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Vehicle Readiness Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
                Our Fleet Quality Standards
              </h2>
              <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
                We believe the condition of the car directly impacts your travel memory. Every vehicle in our fleet complies with strict pre-trip checklists.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:underline group self-start md:self-auto"
            >
              <span>Explore Fleet Specifications</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fleetStandards.map((std, idx) => (
              <div
                key={idx}
                className="card-skeuo p-4 sm:p-5 rounded-2xl space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-xl bg-[#073B3A] text-white flex items-center justify-center font-bold text-xs mb-2.5">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#182A2B] font-display">
                    {std.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#556464] leading-relaxed mt-1">
                    {std.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5ECE5] flex items-center gap-1.5 text-[10.5px] font-bold text-[#073B3A]">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Mandatory Inspection Passed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OPERATING STATIONS & HUBS ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Operating Presence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              Dedicated Stations Across Odisha
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              We operate verified driver dispatch networks across confirmed hubs in Odisha to guarantee rapid response and zero stranded passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {operatingHubs.map((hub, idx) => (
              <div
                key={idx}
                className="card-skeuo rounded-2xl p-4 sm:p-5 space-y-3 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#D5DDD5] text-[#073B3A] inline-block mb-1">
                      Hub {hub.code}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B]">
                      {hub.city}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] text-[9.5px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    {hub.standby}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#073B3A] block">
                    {hub.role}
                  </span>
                  <p className="text-[11px] text-[#556464] leading-relaxed">
                    {hub.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5ECE5] flex items-center justify-between text-[11px]">
                  <span className="text-[#667575]">Commercial Yellow-Board</span>
                  <span className="font-bold text-[#073B3A]">Instant Dispatch</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CORPORATE GOVERNANCE & CHARTER ================= */}
      <section className="py-8 sm:py-12 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-skeuo p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-3.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />
              <h3 className="text-sm sm:text-base font-bold font-display text-[#182A2B]">
                Corporate Governance &amp; Regulatory Compliance
              </h3>
            </div>
            
            <p className="text-xs text-[#556464] leading-relaxed">
              <strong>CabJatra</strong> is an officially registered brand identity operated in accordance with the Motor Vehicles Act and transport directives of the State of Odisha. We hold comprehensive legal charter for commercial passenger transport across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5]">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Registered Legal Entity
                </span>
                <strong className="text-[#182A2B] text-xs">
                  {COMPANY_CONFIG.legalBusinessName}
                </strong>
                <span className="text-[10px] text-[#073B3A] block mt-0.5">
                  Registration: {COMPANY_CONFIG.cinOrRegistration}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5]">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Central Operations Headquarters
                </span>
                <strong className="text-[#182A2B] text-xs">
                  Infocity Avenue, Patia, Bhubaneswar
                </strong>
                <span className="text-[10px] text-[#073B3A] block mt-0.5">
                  Pin 751024 • 24/7 Operations Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: GRAND LUXURY CLOSING CTA ================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden card-skeuo-dark text-white p-6 sm:p-8 lg:p-12 text-center flex flex-col items-center justify-center group">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-[10px] sm:text-[10.5px] font-bold text-[#D9A52B] shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Odisha Chauffeur Distinction</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  Punctual Chauffeur Comfort?
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto leading-relaxed">
                Whether landing at BBI Airport, embarking on the sacred Puri Jagannath Dham pilgrimage, or scheduling executive city transit—book with complete certainty.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/book-cab"
                  className="px-6 py-3 rounded-xl bg-gradient-to-b from-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-xs inline-flex items-center gap-2 shadow-skeuo-gold hover:brightness-105 transition-all select-none"
                >
                  <span>Book a Cab Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
                </Link>

                <Link
                  href="/book-tour"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center gap-2 border border-white/20 backdrop-blur-md transition-all select-none"
                >
                  <Palmtree className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Curated Odisha Tours</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs inline-flex items-center gap-2 border border-[#D9A52B]/40 transition-all select-none"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Contact Operations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
