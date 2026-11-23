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
  Navigation,
  Zap,
  X,
  Lock,
  CalendarCheck,
  Radio,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Icon3DCheck, Icon3DCross } from "@/components/common/Icon3DBadges";

export const metadata = {
  title: "About Us — CabJatra Odisha Cab Service",
  description:
    "Discover the story behind CabJatra: our founding mission, zero cancellation guarantee, 100% commercial yellow-board fleet, and verified driver standards across Odisha.",
};

export default function AboutPage() {
  const journeySteps = [
    {
      num: "01",
      title: "Verified Route Reservation",
      time: "Step 01 • Booking",
      desc: "Select your route and preferred vehicle class. Receive an instant itemized booking confirmation and driver dispatch voucher directly on WhatsApp.",
      icon: CalendarCheck,
      tag: "Instant Confirmation",
      label: "WhatsApp Voucher Dispatched",
    },
    {
      num: "02",
      title: "15-Min Pre-Arrival Priming",
      time: "Step 02 • T-Minus 15 Mins",
      desc: "Your assigned driver arrives early at your pickup address. Dual-zone AC is pre-cooled to 22°C and luggage boot is ready for sanitized boarding.",
      icon: Clock,
      tag: "22°C AC Primed",
      label: "Dual-Zone Pre-Cooled",
    },
    {
      num: "03",
      title: "Doorstep & Terminal Welcome",
      time: "Step 03 • Boarding",
      desc: "Punctual terminal greeting at BBI Airport or doorstep pickup. Courteous luggage assistance with zero surge pricing and zero waiting surcharges.",
      icon: HeartHandshake,
      tag: "Flight Radar Sync",
      label: "Doorstep Luggage Assist",
    },
    {
      num: "04",
      title: "Scenic Highway Transit",
      time: "Step 04 • On the Road",
      desc: "Enjoy smooth, fatigue-free travel along Marine Drive, NH-316, or temple circuits. Settle your transparent fare conveniently via UPI or cash after arrival.",
      icon: Compass,
      tag: "Transparent Rates",
      label: "Pay After Safe Arrival",
    },
  ];

  const operatingHubs = [
    {
      city: "Bhubaneswar",
      code: "BBI",
      tag: "Capital & Transit Corridor",
      role: "Central Operations & Airport Standby",
      detail: "Biju Patnaik International Airport (BBI), Master Canteen Central Junction, and Patia Tech Corridor.",
      standby: "Live 24/7 Standby",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=900&auto=format&fit=crop",
      link: "/book-cab?from=Bhubaneswar",
      cta: "Book Cab from BBI",
    },
    {
      city: "Puri Dham",
      code: "PURI",
      tag: "Sacred Pilgrimage",
      role: "Pilgrimage & Coastal Fleet Cell",
      detail: "Grand Road Jagannath Temple, VIP Road, Golden Beach, and Marine Drive Coastal Express.",
      standby: "Live 24/7 Standby",
      image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=900&auto=format&fit=crop",
      link: "/puri-tour-packages",
      cta: "Explore Puri Circuits",
    },
    {
      city: "Kataka",
      code: "CTC",
      tag: "Silver City Corridor",
      role: "Commercial & High Court Corridor",
      detail: "Badambadi Transit Hub, OMP Square, Netaji Birthplace, and CDA Judicial District.",
      standby: "Standby Fleet Active",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=900&auto=format&fit=crop",
      link: "/book-online-taxi-in-kataka",
      cta: "Book Kataka Cab",
    },
    {
      city: "Konark",
      code: "KNR",
      tag: "UNESCO World Heritage",
      role: "Heritage & Sun Temple Gateway",
      detail: "UNESCO 13th-century Sun Temple, Chandrabhaga Blue Flag Beach, and coastal forest trails.",
      standby: "Daily Tour Dispatch",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      link: "/konark-tour-packages",
      cta: "Konark Day Tour",
    },
    {
      city: "Chilika",
      code: "CHK",
      tag: "Lagoon & Wildlife",
      role: "Eco-Tourism & Dolphin Lagoon",
      detail: "Barkul OTDC Harbor, Satapada Irrawaddy Dolphin Sanctuary, and Kalijai Temple Island.",
      standby: "Tour Circuit Standby",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=85&w=900&auto=format&fit=crop",
      link: "/odisha-sightseeing-tour-packages",
      cta: "Chilika Safari Tour",
    },
    {
      city: "Berhampur",
      code: "BAM",
      tag: "Southern Gateway",
      role: "South Odisha Gateway",
      detail: "Silk City Junction, Gopalpur-on-Sea coastal stretch, and Taratarini Hilltop Shaktipeeth.",
      standby: "Highway Corridor Fleet",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      link: "/book-cab",
      cta: "Book Highway Cab",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A]">
      {/* ========================================================================= */}
      {/* HERO: EDITORIAL PRESTIGE BANNER WITH VIBRANT ARCHITECTURAL BACKDROP       */}
      {/* ========================================================================= */}
      <section className="relative text-white overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-24 border-b border-black/20">
        {/* Heritage Backdrop Photography - Konark Sun Temple */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
            alt="Majestic Konark Sun Temple - UNESCO Heritage in Odisha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-102"
          />
          {/* Balanced rich gradient overlay: deep royal navy aesthetic without muddy greenish fog */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000B3B]/90 via-[#000B3B]/70 to-[#000B3B]/95" />
          <div className="absolute inset-0 bg-radial-[at_center_top] from-[#FEC401]/10 via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FEC401]/40 text-xs font-bold text-[#FEC401] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
            <span>Odisha Cab Service Distinction • Established Mobility Protocol</span>
          </div>

          {/* Regal Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.14]">
            A Principled Mobility Standard <br />
            <span className="italic font-display font-normal text-[#FEC401]">
              For Timeless Odisha.
            </span>
          </h1>

          {/* Story Subtitle */}
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Born from the conviction that pilgrims, families, and business travelers deserve arrival certainty, zero surge extortion, and certified commercial vehicles across all 30 districts of Odisha.
          </p>

          {/* 4-Stat Elevated Badges (Zero "10%") */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#FEC401]/50 transition-all">
              <span className="block text-2xl sm:text-3xl font-black font-display text-[#FEC401]">
                14,200+
              </span>
              <span className="text-[11px] sm:text-xs text-white/85 font-medium block mt-0.5">
                Journeys Dispatched
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#10B981]/50 transition-all">
              <span className="block text-2xl sm:text-3xl font-black font-display text-white">
                100%
              </span>
              <span className="text-[11px] sm:text-xs text-[#A7F3D0] font-medium block mt-0.5">
                Yellow-Board Commercial
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#FEC401]/50 transition-all">
              <span className="block text-2xl sm:text-3xl font-black font-display text-[#FEC401]">
                0%
              </span>
              <span className="text-[11px] sm:text-xs text-white/85 font-medium block mt-0.5">
                Last-Minute Cancellation
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#FEC401]/50 transition-all">
              <span className="block text-2xl sm:text-3xl font-black font-display text-white flex items-center justify-center gap-1">
                4.9 <Star className="w-5 h-5 text-[#FEC401] fill-[#FEC401]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white/85 font-medium block mt-0.5">
                Guest Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE REALITY VS CABJATRA STANDARD (SHOWDOWN COMPARISON)         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: The Narrative Arc */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#000B3B] bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>The Story of CabJatra</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#000B3B] leading-tight">
                Restoring Dignity &amp; Trust to <br />
                <span className="text-[#B45309]">Odisha Highway Travel.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every year, hundreds of thousands of pilgrims, families, and corporate executives arrive in Odisha. Yet, the initial moment of arrival is all too frequently marred by street chaos: sudden cancellations on generic ride-hailing apps, unpermitted private white-plate cars with broken ACs, and aggressive 3x surge extortion during peak heat or festival seasons.
              </p>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We founded <strong>CabJatra</strong> on a simple principle: <em>travelers in Odisha deserve unwavering certainty</em>. By operating a dedicated human dispatch desk, enforcing 100% yellow-board commercial licensing, and guaranteeing locked fixed tariffs, we eliminate transit anxiety so you can focus on the sacred beauty of Odisha.
              </p>

              {/* The Odia Hospitality Pledge */}
              <div className="p-5 rounded-2xl bg-white border-l-4 border-[#000B3B] border border-[#E2E8F0] shadow-xs space-y-1 mt-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#000B3B] block">
                  The Cultural Ethos: Atithi Devo Bhava
                </span>
                <p className="text-xs text-[#334155] italic font-medium leading-relaxed">
                  &ldquo;A guest arriving in Odisha is not a transaction; they are sacred. Our drivers take pride in courteous hospitality, punctuality, and ensuring every family reaches safely.&rdquo;
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Executive Showdown Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E2E8F0] bg-white shadow-xl overflow-hidden">
                {/* Executive Header */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex items-center justify-between border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FEC401] block">
                        Comparative Mobility Standard
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      The Street Reality vs. CabJatra
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <BrandLogo size="sm" variant="light" showTagline={false} />
                    <span className="text-[10px] font-bold text-[#A7F3D0] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                      STA Verified
                    </span>
                  </div>
                </div>

                {/* Column Headings */}
                <div className="grid grid-cols-2 bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] font-extrabold uppercase tracking-wider py-2.5 px-4 sm:px-5">
                  <span className="text-rose-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Street Hailing / Apps
                  </span>
                  <span className="text-emerald-700 flex items-center gap-1.5 justify-end">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    CabJatra Standard
                  </span>
                </div>

                {/* Comparative Rows */}
                <div className="p-4 sm:p-5 space-y-3 bg-white">
                  {/* Row 1: Surge */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={false} />
                        <span className="text-xs font-bold text-rose-950 leading-tight">
                          2x–3x Surge Surcharges
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-800 leading-relaxed">
                        Arbitrary multiplier spikes during rain, temple rush &amp; midnight arrivals.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCheck size="sm" interactive={false} />
                        <span className="text-xs font-bold text-emerald-950 leading-tight">
                          Zero Surge Guarantee
                        </span>
                      </div>
                      <p className="text-[10.5px] text-emerald-900 leading-relaxed font-medium">
                        Fixed per-km rate locked upfront. Exactly what you agree is what you pay.
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Permits */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={false} />
                        <span className="text-xs font-bold text-rose-950 leading-tight">
                          Private White Plates
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-800 leading-relaxed">
                        Unpermitted private cars without commercial permits or passenger insurance.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCheck size="sm" interactive={false} />
                        <span className="text-xs font-bold text-emerald-950 leading-tight">
                          100% Yellow-Board
                        </span>
                      </div>
                      <p className="text-[10.5px] text-emerald-900 leading-relaxed font-medium">
                        Full Odisha STA commercial carriage permits with comprehensive insurance.
                      </p>
                    </div>
                  </div>

                  {/* Row 3: Cancellations */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={false} />
                        <span className="text-xs font-bold text-rose-950 leading-tight">
                          Rampant Cancellations
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-800 leading-relaxed">
                        Drivers cancel at the last minute if offline cash offers or rain rates appear.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCheck size="sm" interactive={false} />
                        <span className="text-xs font-bold text-emerald-950 leading-tight">
                          Guaranteed Dispatch
                        </span>
                      </div>
                      <p className="text-[10.5px] text-emerald-900 leading-relaxed font-medium">
                        Dedicated human dispatch desk assigns pre-screened commercial chauffeurs.
                      </p>
                    </div>
                  </div>

                  {/* Row 4: AC */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={false} />
                        <span className="text-xs font-bold text-rose-950 leading-tight">
                          AC Refused / Demands
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-800 leading-relaxed">
                        Blowers only in high coastal humidity, or demands for extra cash tips.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCheck size="sm" interactive={false} />
                        <span className="text-xs font-bold text-emerald-950 leading-tight">
                          22°C Pre-Cooled AC
                        </span>
                      </div>
                      <p className="text-[10.5px] text-emerald-900 leading-relaxed font-medium">
                        Cabin pre-cooled 15 mins prior to boarding. Guaranteed chilled AC running.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Trust Bar */}
                <div className="px-5 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-medium">
                  <span className="flex items-center gap-1.5 text-[#000B3B] font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                    Contractual Departure Protection
                  </span>
                  <span className="text-[#D97706] font-bold">14,200+ Dispatched</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 4-STEP TRAVEL LIFECYCLE (TIMELINE FLOW)                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[11px] font-extrabold text-[#000B3B] uppercase tracking-wider border border-[#CBD5E1] shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              <span>The Journey Experience • Step-by-Step</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#000B3B] tracking-tight">
              How Your Journey Unfolds
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl mx-auto">
              From instant online reservation to scenic highway drop-off, every phase follows a verified operational standard.
            </p>
          </div>

          {/* Interactive Connected Pipeline Grid */}
          <div className="relative">
            {/* Desktop Connector Beam Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FEC401]/50 via-[#10B981]/60 to-[#FEC401]/50 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
              {journeySteps.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <div
                    key={idx}
                    className="rounded-3xl p-6 bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs"
                  >
                    {/* Top ambient hover glow */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FEC401] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-4">
                      {/* Step Header with Beacon Badge */}
                      <div className="flex items-center justify-between">
                        <div className="relative">
                          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-black text-base shadow-md group-hover:scale-105 transition-all">
                            {step.num}
                          </span>
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#000B3B] bg-[#F1F5F9] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                          {step.time}
                        </span>
                      </div>

                      {/* Step Content */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <Icon className="w-4 h-4 text-[#D97706] shrink-0" />
                          <h3 className="text-base font-bold font-display text-[#000B3B] group-hover:text-[#B45309] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Outcome Pill */}
                    <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-bold text-[#000B3B]">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{step.label}</span>
                      </span>
                      <span className="text-[10px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-md">
                        {step.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: THE 4 PILLARS OF CABJATRA DISTINCTION (ZERO "10%")             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[11px] font-bold text-[#000B3B] uppercase tracking-wider border border-[#CBD5E1] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Core Service Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#000B3B]">
              The 4 Pillars of CabJatra Distinction
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Every route dispatched from our desk adheres strictly to these foundational mobility guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PILLAR 1: ZERO CANCELLATION GUARANTEE */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-[#FEC401]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]">
                    Guaranteed Dispatch • 100% Certainty
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#000B3B]">
                  Zero Cancellation Guarantee
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Unlike generic ride-hailing apps where drivers cancel on a whim, every CabJatra booking is manually verified, pre-assigned, and contractually backed by our central operations desk. If a vehicle encounters an emergency, an equivalent commercial backup is dispatched instantly.
                </p>

                {/* Tactile Dispatch SLA Visual */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[#000B3B] text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>Pre-Assigned Chauffeur</span>
                      </div>
                      <span className="text-[10px] text-[#64748B] block mt-0.5">Assigned 2–4 Hours in Advance</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[#000B3B] text-xs font-bold">
                        <Radio className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>Operations Desk Radar</span>
                      </div>
                      <span className="text-[10px] text-[#64748B] block mt-0.5">24/7 Human Dispatch Coordination</span>
                    </div>
                  </div>

                  <div className="px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs text-[#000B3B] font-semibold">
                    <span>Driver Cancellation Protection:</span>
                    <span className="font-extrabold text-[#16A34A]">100% Guaranteed Ride</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Never Stranded Guarantee</span>
                </span>
                <span className="text-[#D97706]">Pillar 01</span>
              </div>
            </div>

            {/* PILLAR 2: 100% COMMERCIAL FLEET WITH REALISTIC HSRP PLATE */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Car className="w-6 h-6 text-[#FEC401]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                    State STA Permit • RTO Verified
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#000B3B]">
                  100% Yellow-Board Commercial Fleet
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Every vehicle operates under a strict Odisha State Transport commercial permit. We strictly never dispatch private white-plate cars, ensuring comprehensive passenger insurance, verified highway fitness, and lawful transit.
                </p>

                {/* Hyper-Realistic Indian HSRP Commercial Plate Mockup */}
                <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#333] via-[#111] to-[#222] shadow-xl border border-black/30">
                  <div className="rounded-xl bg-gradient-to-r from-[#FBC02D] via-[#F9A825] to-[#F57F17] p-2.5 sm:p-3 flex items-center justify-between border-2 border-black/80 relative overflow-hidden">
                    {/* HSRP Blue IND Strip with Hologram Badge */}
                    <div className="w-10 sm:w-11 self-stretch rounded-lg bg-[#003399] flex flex-col items-center justify-between py-1 px-0.5 text-white shadow-inner shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full border border-white/60 bg-white/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FEC401]" />
                      </div>
                      <span className="text-[11px] font-black tracking-wider leading-none text-white drop-shadow">
                        IND
                      </span>
                    </div>

                    {/* Embossed Commercial Plate Number */}
                    <div className="flex-1 text-center px-2">
                      <div className="text-[9px] font-extrabold tracking-widest text-[#0F172A]/85 uppercase">
                        ODISHA STATE TRANSPORT AUTHORITY
                      </div>
                      <div className="text-base sm:text-xl font-black font-mono tracking-widest text-[#111827] drop-shadow-[0_1px_0_rgba(255,255,255,0.4)] mt-0.5">
                        OD • 02 • AA • 2026
                      </div>
                      <div className="text-[8.5px] font-extrabold text-[#000B3B] tracking-wider uppercase">
                        COMMERCIAL CARRIAGE • COMPREHENSIVE PASSENGER COVER
                      </div>
                    </div>

                    {/* Laser Hologram Badge */}
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/60 via-[#E0E7E0] to-white/40 border border-black/20 flex items-center justify-center shadow-xs shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#000B3B]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Zero White-Plate Private Cars Allowed</span>
                </span>
                <span className="text-[#D97706]">Pillar 02</span>
              </div>
            </div>

            {/* PILLAR 3: ZERO SURGE PRICING */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-[#FEC401]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                    Transparent Tariffs • No Hidden Tolls
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#000B3B]">
                  Zero Surge Pricing Guarantee
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Our tariffs are fixed, transparent, and calibrated strictly by actual highway mileage. You will never face sudden 2x or 3x surge multipliers during heavy monsoon downpours, midnight train delays, or festival rushes like Rath Yatra.
                </p>

                {/* Tactile Surge Comparison Meter */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white border border-[#16A34A]/50 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase">CabJatra Tariff</span>
                        <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      </div>
                      <div className="text-base font-extrabold text-[#16A34A] mt-0.5">1.0x Fixed Rate</div>
                      <span className="text-[10px] text-[#16A34A] font-semibold block">Locked Upfront • No Surge</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/70 border border-rose-200 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-rose-800 uppercase">Aggregator Apps</span>
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                      </div>
                      <div className="text-base font-extrabold text-rose-700 mt-0.5 line-through">2.5x–3.0x Peak</div>
                      <span className="text-[10px] text-rose-600 font-semibold block">Rain &amp; Festival Surges</span>
                    </div>
                  </div>

                  <div className="px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs text-[#000B3B] font-semibold">
                    <span>Rain / Late-Night Surcharge:</span>
                    <span className="font-extrabold text-[#16A34A]">₹0.00 (Always Included)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Honest Per-KM Quotation on WhatsApp</span>
                </span>
                <span className="text-[#D97706]">Pillar 03</span>
              </div>
            </div>

            {/* PILLAR 4: VERIFIED DRIVER HOSPITALITY */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-6 h-6 text-[#FEC401]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                    Courteous Service • Local Ethos
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#000B3B]">
                  Verified Driver Hospitality
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Our drivers are verified local professionals with extensive highway experience, clean driving records, and courteous pilgrimage etiquette. Trained to assist with luggage, family needs, and senior citizens.
                </p>

                {/* Tactile Driver Credential Chips */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#E2E8F0] font-semibold text-[#0F172A] shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Police Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#E2E8F0] font-semibold text-[#0F172A] shadow-2xs">
                      <Users className="w-3.5 h-3.5 text-[#000B3B] shrink-0" />
                      <span>Odia &amp; Hindi Fluent</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#E2E8F0] font-semibold text-[#0F172A] shadow-2xs">
                      <Navigation className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                      <span>5+ Yrs Highway Mastery</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#E2E8F0] font-semibold text-[#0F172A] shadow-2xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Non-Smoking Fleet</span>
                    </div>
                  </div>

                  <div className="px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] italic flex items-center gap-1.5">
                    <span className="text-[#D97706] font-bold">★ 4.9/5:</span>
                    <span>&ldquo;Courteous, smooth driving along Marine Drive for our elderly parents.&rdquo;</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Dignified Odia Hospitality</span>
                </span>
                <span className="text-[#D97706]">Pillar 04</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FLEET QUALITY & VEHICLE STANDARDS                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#000B3B] mb-2 bg-white px-3.5 py-1.5 rounded-full border border-[#CBD5E1] shadow-2xs">
                <Car className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Pre-Trip Vehicle Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#000B3B] font-display">
                Our Fleet Quality Standards
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl">
                Every vehicle in our fleet complies with strict pre-trip inspections before departure.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000B3B] hover:text-[#B45309] hover:underline group self-start md:self-auto transition-colors"
            >
              <span>Explore Fleet Specifications</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group shadow-xs">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                    Climate Protocol
                  </span>
                </div>
                <h4 className="font-bold text-base text-[#000B3B] font-display group-hover:text-[#B45309] transition-colors">
                  Dual-Zone AC Guaranteed
                </h4>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-[10px] font-bold text-[#000B3B]">
                  22°C Pre-Cooled 15 Mins Early
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Air conditioning actively cooled prior to passenger boarding. Dual blowers keep both front and rear passengers comfortable in coastal humidity.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>100% Functioning AC</span>
                </span>
                <span className="text-[10px] text-[#D97706] font-mono">SPEC-01</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group shadow-xs">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                    State Permits
                  </span>
                </div>
                <h4 className="font-bold text-base text-[#000B3B] font-display group-hover:text-[#B45309] transition-colors">
                  Odisha STA Legal Compliance
                </h4>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-[10px] font-bold text-[#000B3B]">
                  Commercial Yellow Plate Permit
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Valid Odisha commercial transport permit, full passenger insurance coverage, and annual RTO roadworthiness fitness certificates.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>STA Permit Certified</span>
                </span>
                <span className="text-[10px] text-[#D97706] font-mono">SPEC-02</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group shadow-xs">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]">
                    Cabin Hygiene
                  </span>
                </div>
                <h4 className="font-bold text-base text-[#000B3B] font-display group-hover:text-[#B45309] transition-colors">
                  Sanitized Pristine Interiors
                </h4>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-[10px] font-bold text-[#000B3B]">
                  12-Point Hygiene Protocol
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Daily deep-cleaned fabric upholstery, fresh floor mats, sanitized luggage boot, and strictly tobacco-free non-smoking family cabins.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Non-Smoking Cabins</span>
                </span>
                <span className="text-[10px] text-[#D97706] font-mono">SPEC-03</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#FEC401]/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group shadow-xs">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                    Command Desk
                  </span>
                </div>
                <h4 className="font-bold text-base text-[#000B3B] font-display group-hover:text-[#B45309] transition-colors">
                  Live Dispatch Operations Radar
                </h4>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-[10px] font-bold text-[#000B3B]">
                  BBI Airport &amp; Highway Sync
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Central Bhubaneswar desk tracks flight arrivals and highway transit 24/7. Instant driver contact and trip coordination via WhatsApp.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#000B3B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>24/7 Operations Desk</span>
                </span>
                <span className="text-[10px] text-[#D97706] font-mono">SPEC-04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: DEDICATED STATIONS ACROSS ODISHA                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[11px] font-bold text-[#000B3B] uppercase tracking-wider border border-[#CBD5E1] shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Odisha Operating Presence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#000B3B]">
              Dedicated Stations Across Odisha
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We operate verified driver dispatch networks across confirmed hubs in Odisha to guarantee rapid response and zero stranded passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingHubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-[#E2E8F0] bg-white shadow-xs"
              >
                {/* Visual Imagery Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-[#E2E8F0]">
                  <Image
                    src={hub.image}
                    alt={`${hub.city} - ${hub.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000B3B]/90 via-[#000B3B]/40 to-transparent" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs shadow-md tracking-wider">
                      HUB {hub.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      {hub.standby}
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-[#FEC401] uppercase tracking-wider block">
                      {hub.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
                      {hub.city}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Routing CTA */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#000B3B] block">
                      {hub.role}
                    </span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {hub.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs gap-2">
                    <span className="font-bold text-[11px] text-[#000B3B] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>100% Yellow-Plate</span>
                    </span>
                    <Link
                      href={hub.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#CBD5E1] hover:border-[#FEC401] font-bold text-xs text-[#000B3B] hover:bg-[#FEF3C7] transition-all shadow-2xs group/link"
                    >
                      <span>{hub.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform text-[#D97706]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CORPORATE GOVERNANCE & CHARTER                                 */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl space-y-5 border border-[#E2E8F0] bg-[#FAF9F5] shadow-lg relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FEC401] via-[#FDE047] to-[#000B3B]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#000B3B] to-[#02146B] text-[#FEC401] flex items-center justify-center shadow-md shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#FEC401]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#000B3B]">
                    Corporate Governance &amp; Regulatory Compliance
                  </h3>
                  <span className="text-[10.5px] font-bold text-[#D97706] uppercase tracking-wider block">
                    Odisha Commercial Motor Vehicles Framework
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-bold text-[#000B3B] self-start sm:self-auto shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>MCA Registered Entity</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              <strong>CabJatra</strong> is an officially registered pre-booked mobility platform. All operational charters, vehicle compliance standards, brand trademarks, and guest protections are governed by <strong>NovaSpark Digital Marketing Pvt. Ltd.</strong> in strict accordance with the Motor Vehicles Act and transport directives of the State of Odisha.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#64748B] uppercase font-bold block">
                  Registered Legal Entity &amp; Trademark Holder
                </span>
                <strong className="text-[#000B3B] text-xs sm:text-sm block">
                  {COMPANY_CONFIG.legalBusinessName}
                </strong>
                <span className="text-[11px] text-[#000B3B] block font-semibold">
                  CIN / Reg: {COMPANY_CONFIG.cinOrRegistration}
                </span>
                <span className="text-[10px] text-[#64748B] block mt-0.5">
                  Ministry of Corporate Affairs • Govt of India
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1 shadow-2xs">
                <span className="text-[10px] text-[#64748B] uppercase font-bold block">
                  Central Operations Headquarters
                </span>
                <strong className="text-[#000B3B] text-xs sm:text-sm block">
                  Infocity Avenue, Patia, Bhubaneswar
                </strong>
                <span className="text-[11px] text-[#000B3B] block font-semibold">
                  Odisha 751024 • 24/7 Operations Desk
                </span>
                <span className="text-[10px] text-[#64748B] block mt-0.5">
                  Direct Desk: {COMPANY_CONFIG.contact.phoneDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CLOSING CTA                                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#000B3B] via-[#02146B] to-[#000B3B] text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center border border-white/15 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FEC401]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#FEC401]/40 text-xs font-bold text-[#FEC401]">
                <Sparkles className="w-3.5 h-3.5 text-[#FEC401]" />
                <span>Odisha Cab Service Distinction</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white leading-tight">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#FEC401]">
                  Comfortable Cab Travel?
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto leading-relaxed">
                Whether landing at BBI Airport, embarking on the sacred Puri Jagannath Dham pilgrimage, or scheduling executive highway transit—book with complete certainty.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href="/book-cab"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FEC401] to-[#E5AD00] text-[#000B3B] font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(254,196,1,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Book Your Cab Now</span>
                  <ArrowRight className="w-4 h-4 text-[#000B3B]" />
                </Link>

                <Link
                  href="/book-tour"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                >
                  <Palmtree className="w-4 h-4 text-[#FEC401]" />
                  <span>Curated Odisha Tours</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 border border-[#FEC401]/40 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#FEC401]" />
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
