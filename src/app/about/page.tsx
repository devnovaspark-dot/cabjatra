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
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

export const metadata = {
  title: "About Us — CabJatra Odisha Chauffeur Mobility",
  description:
    "Discover the story behind CabJatra: our founding mission, 10% advance deposit model, 100% commercial yellow-board fleet, and verified chauffeur standards across Odisha.",
};

export default function AboutPage() {
  const journeySteps = [
    {
      num: "01",
      title: "Pre-Booked Certainty",
      time: "At Booking",
      desc: "Lock your vehicle with a transparent 10% advance deposit. Instant itemized voucher and booking confirmation sent to your WhatsApp.",
      icon: CalendarCheck,
    },
    {
      num: "02",
      title: "15-Min Pre-Arrival Priming",
      time: "T-Minus 15 Mins",
      desc: "Chauffeur arrives at your pickup hub early. Dual-zone AC is cooled to 22°C and vehicle boot is prepared for your luggage.",
      icon: Clock,
    },
    {
      num: "03",
      title: "Doorstep & Airport Welcome",
      time: "Arrival & Pickup",
      desc: "Punctual terminal greeting at BBI Airport or doorstep pickup. Courteous assistance with bags, zero surge, zero haggling.",
      icon: HeartHandshake,
    },
    {
      num: "04",
      title: "Scenic Highway Travel",
      time: "On the Road",
      desc: "Fatigue-free transit along Marine Drive, NH-316, or temple corridors. Settle remaining 90% balance only at your final drop.",
      icon: Compass,
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
      link: "/destinations/puri",
      cta: "Explore Puri Circuits",
    },
    {
      city: "Cuttack",
      code: "CTC",
      tag: "Silver City Corridor",
      role: "Commercial & High Court Corridor",
      detail: "Badambadi Transit Hub, OMP Square, Netaji Birthplace, and CDA Judicial District.",
      standby: "Standby Fleet Active",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=900&auto=format&fit=crop",
      link: "/book-cab?from=Cuttack",
      cta: "Book Cuttack Cab",
    },
    {
      city: "Konark",
      code: "KNR",
      tag: "UNESCO World Heritage",
      role: "Heritage & Sun Temple Gateway",
      detail: "UNESCO 13th-century Sun Temple, Chandrabhaga Blue Flag Beach, and coastal forest trails.",
      standby: "Daily Tour Dispatch",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      link: "/destinations/konark",
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
      link: "/destinations/chilika",
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
      link: "/book-cab?from=Berhampur",
      cta: "Book Highway Cab",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= HERO: EDITORIAL PRESTIGE BANNER ================= */}
      {/* pt-36 sm:pt-44 gives plenty of breathing room below the floating navbar */}
      <section className="relative text-white overflow-hidden pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-black/20">
        {/* Heritage Backdrop Photography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
            alt="Majestic Konark Sun Temple - UNESCO Heritage in Odisha"
            fill
            priority
            className="object-cover object-center scale-102 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/95 via-[#032123]/90 to-[#FAF9F5]" />
        </div>

        {/* Ambient Gold Radial Halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-80 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-sm">
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

          {/* Story Subtitle */}
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Born from the conviction that pilgrims, families, and business travelers deserve arrival certainty, transparent tariffs, and certified commercial vehicles across all 30 districts of Odisha.
          </p>

          {/* 4-Stat Glassmorphic Prestige Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-3xl mx-auto">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#D9A52B]/50 transition-all">
              <span className="block text-xl sm:text-2xl font-bold font-display text-[#D9A52B]">
                14,200+
              </span>
              <span className="text-[10.5px] sm:text-xs text-white/80 font-medium block mt-0.5">
                Journeys Dispatched
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#10B981]/50 transition-all">
              <span className="block text-xl sm:text-2xl font-bold font-display text-white">
                100%
              </span>
              <span className="text-[10.5px] sm:text-xs text-[#A7F3D0] font-medium block mt-0.5">
                Yellow-Board Commercial
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#D9A52B]/50 transition-all">
              <span className="block text-xl sm:text-2xl font-bold font-display text-[#D9A52B]">
                10%
              </span>
              <span className="text-[10.5px] sm:text-xs text-white/80 font-medium block mt-0.5">
                Advance Deposit Model
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-[#D9A52B]/50 transition-all">
              <span className="block text-xl sm:text-2xl font-bold font-display text-white flex items-center justify-center gap-1">
                4.9 <Star className="w-4 h-4 text-[#D9A52B] fill-[#D9A52B]" />
              </span>
              <span className="text-[10.5px] sm:text-xs text-white/80 font-medium block mt-0.5">
                Guest Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORYTELLING SECTION: THE REALITY VS THE CABJATRA STANDARD ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: The Narrative Arc */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#C1DAD7]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>The Story of CabJatra</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B] leading-tight">
                Restoring Dignity &amp; Trust to <br />
                <span className="text-[#073B3A]">Odisha Highway Travel.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                Every year, hundreds of thousands of pilgrims, families, and corporate executives arrive in Odisha. Yet, the initial moment of arrival is all too frequently marred by street chaos: sudden cancellations on ride-hailing apps, unpermitted private white-plate cars with broken ACs, and aggressive 3x surge extortion during peak heat or festival seasons.
              </p>

              <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                We founded <strong>CabJatra</strong> on a simple principle: <em>travelers in Odisha deserve unwavering certainty</em>. By operating a dedicated human dispatch desk, enforcing 100% yellow-board commercial licensing, and introducing the 10% advance deposit standard, we eliminate the anxiety of transit so you can focus on the sacred beauty of Odisha.
              </p>

              {/* The Odia Hospitality Pledge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF9F5] to-[#EAEFEA] border-l-4 border-[#073B3A] border border-[#D5DDD5] space-y-1 mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#073B3A] block">
                  The Cultural Ethos: Atithi Devo Bhava
                </span>
                <p className="text-xs text-[#182A2B] italic font-medium leading-relaxed">
                  &ldquo;A guest arriving in Odisha is not a transaction; they are sacred. Our chauffeurs take pride in courteous hospitality, punctuality, and ensuring every family reaches safely.&rdquo;
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Graphical Comparison Visual Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#D5DDD5] bg-white shadow-xl overflow-hidden">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#073B3A] to-[#041F20] text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B] block">
                      Comparative Mobility Standards
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      The Street Reality vs. CabJatra
                    </h3>
                  </div>
                  <BrandLogo size="sm" variant="light" />
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Item 1: Pricing */}
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#EEF2EE]">
                    <div className="p-3 rounded-xl bg-[#FFF5F5] border border-[#FED7D7] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#E53E3E] uppercase flex items-center gap-1">
                        <X className="w-3.5 h-3.5" /> Aggregators / Street
                      </span>
                      <p className="text-[#742A2A] text-[11px] font-medium leading-snug">
                        2x – 3x surge multipliers during rain, festivals &amp; airport rush.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F0FFF4] border border-[#C6F6D5] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#22543D] uppercase flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#38A169]" /> CabJatra Protocol
                      </span>
                      <p className="text-[#22543D] text-[11px] font-bold leading-snug">
                        Zero surge guarantee. Transparent fixed highway tariffs.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Vehicles */}
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#EEF2EE]">
                    <div className="p-3 rounded-xl bg-[#FFF5F5] border border-[#FED7D7] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#E53E3E] uppercase flex items-center gap-1">
                        <X className="w-3.5 h-3.5" /> Aggregators / Street
                      </span>
                      <p className="text-[#742A2A] text-[11px] font-medium leading-snug">
                        Unauthorized private white-plate cars without commercial permits.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F0FFF4] border border-[#C6F6D5] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#22543D] uppercase flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#38A169]" /> CabJatra Protocol
                      </span>
                      <p className="text-[#22543D] text-[11px] font-bold leading-snug">
                        100% yellow-board commercial fleet with passenger insurance.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Deposit */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#FFF5F5] border border-[#FED7D7] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#E53E3E] uppercase flex items-center gap-1">
                        <X className="w-3.5 h-3.5" /> Aggregators / Street
                      </span>
                      <p className="text-[#742A2A] text-[11px] font-medium leading-snug">
                        100% upfront lock-in or zero-commitment sudden cancellations.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F0FFF4] border border-[#C6F6D5] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#22543D] uppercase flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#38A169]" /> CabJatra Protocol
                      </span>
                      <p className="text-[#22543D] text-[11px] font-bold leading-snug">
                        10% advance deposit to lock. Remaining 90% paid at drop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STORYTELLING INFOGRAPHIC: 4-STEP CHAUFFEUR LIFECYCLE ================= */}
      <section className="py-12 sm:py-16 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>The Journey Experience</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              How Your Journey Unfolds
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              From reservation to final destination drop-off, our operational protocol guarantees seamless peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-3xl p-6 bg-white border border-[#D5DDD5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-sm shadow-md">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA] px-2.5 py-0.5 rounded-full">
                        {step.time}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#556464] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EEF2EE] flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Verified Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION: THE 4 PILLARS BENTO WITH GRAPHICS ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Core Service Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              The 4 Pillars of CabJatra Distinction
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              Every route dispatched from our desk adheres strictly to these foundational mobility guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* PILLAR 1: 10% ADVANCE DEPOSIT */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#C1DAD7]">
                    Financial Security
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  The 10% Advance Security Model
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Unlike street operators asking for full advance or apps with zero cancellation consequences, CabJatra locks your vehicle and driver with only a 10% advance deposit. The remaining 90% is settled at your destination.
                </p>

                {/* Graphic 10/90 Progress Bar */}
                <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#073B3A]">10% Booking Deposit (Locks Ride)</span>
                    <span className="text-[#556464]">90% Paid at Destination</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#E0E7E0] overflow-hidden flex">
                    <div className="w-[10%] bg-gradient-to-r from-[#D9A52B] to-[#E6B543] h-full" />
                    <div className="w-[90%] bg-[#073B3A] h-full" />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Zero Financial Lock-in</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 01</span>
              </div>
            </div>

            {/* PILLAR 2: 100% COMMERCIAL FLEET */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#C1DAD7]">
                    State STA Permit
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  100% Yellow-Board Commercial Fleet
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Every vehicle operates under a strict Odisha commercial transport permit. We strictly never dispatch private white-plate cars, ensuring full passenger insurance and legal compliance.
                </p>

                {/* Graphic Odisha RTO Yellow Number Plate Mockup */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-[#FCD34D] via-[#FBBF24] to-[#F59E0B] border-2 border-[#182A2B]/80 text-[#182A2B] text-center shadow-md">
                  <div className="text-[9px] uppercase font-black tracking-widest text-[#182A2B]/80">
                    ODISHA STATE TRANSPORT AUTHORITY
                  </div>
                  <div className="text-sm font-black text-[#182A2B] mt-0.5 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#062F31]" />
                    <span>OD • 02 • AA • 2026 (COMMERCIAL YELLOW PLATE)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Comprehensive Passenger Insurance</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 02</span>
              </div>
            </div>

            {/* PILLAR 3: ZERO SURGE PRICING */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#C1DAD7]">
                    Transparent Tariffs
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  Zero Surge Pricing Guarantee
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Our tariffs are fixed, transparent, and calibrated strictly by actual highway mileage. You will never face sudden 2x or 3x surge multipliers during heavy monsoon downpours or festival rushes like Rath Yatra.
                </p>

                {/* Graphic Fixed Tariff Metric */}
                <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#667575] uppercase font-bold block">Surge Multiplier:</span>
                    <span className="text-sm font-extrabold text-[#10B981]">1.0x (Never Surged)</span>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-[#E0ECEA] text-[#073B3A] font-bold text-[11px]">
                    Fixed Mileage Rate
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>No Festival or Late-Night Surcharges</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 03</span>
              </div>
            </div>

            {/* PILLAR 4: VERIFIED CHAUFFEUR HOSPITALITY */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F5] text-[#073B3A] border border-[#C1DAD7]">
                    Courteous Service
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  Verified Chauffeur Hospitality
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Our chauffeurs are verified local professionals with extensive highway experience, clean driving records, and courteous pilgrimage etiquette. Trained to assist with luggage, family needs, and senior citizens.
                </p>

                {/* Graphic Chauffeur Checklist */}
                <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] grid grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1 font-semibold text-[#182A2B]">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" /> Police Verified
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#182A2B]">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" /> Odia &amp; Hindi Fluent
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#182A2B]">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" /> Punctual Attendance
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#182A2B]">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" /> Non-Smoking Fleet
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Dignified Odia Hospitality</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 04</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION: FLEET QUALITY & VEHICLE STANDARDS ================= */}
      <section className="py-12 sm:py-16 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
                <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Pre-Trip Vehicle Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
                Our Fleet Quality Standards
              </h2>
              <p className="text-xs sm:text-sm text-[#667575] mt-1 max-w-xl">
                Every vehicle in our fleet complies with strict pre-trip inspections before departure.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="card-skeuo p-5 rounded-2xl bg-white border border-[#D5DDD5] space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-[#073B3A] text-[#D9A52B] flex items-center justify-center font-bold text-xs mb-2.5">
                  01
                </div>
                <h4 className="font-bold text-sm text-[#182A2B] font-display">
                  Dual-Zone AC Guaranteed
                </h4>
                <p className="text-xs text-[#556464] leading-relaxed mt-1">
                  Air conditioning pre-cooled 15 minutes before passenger boarding to combat coastal Odisha humidity.
                </p>
              </div>
              <div className="pt-2 border-t border-[#EEF2EE] flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <Check className="w-3.5 h-3.5" />
                <span>100% Functioning AC</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-2xl bg-white border border-[#D5DDD5] space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-[#073B3A] text-[#D9A52B] flex items-center justify-center font-bold text-xs mb-2.5">
                  02
                </div>
                <h4 className="font-bold text-sm text-[#182A2B] font-display">
                  State Legal Compliance
                </h4>
                <p className="text-xs text-[#556464] leading-relaxed mt-1">
                  Valid Odisha commercial transport permit, commercial passenger insurance, and fitness certificates.
                </p>
              </div>
              <div className="pt-2 border-t border-[#EEF2EE] flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <Check className="w-3.5 h-3.5" />
                <span>STA Permit Certified</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-2xl bg-white border border-[#D5DDD5] space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-[#073B3A] text-[#D9A52B] flex items-center justify-center font-bold text-xs mb-2.5">
                  03
                </div>
                <h4 className="font-bold text-sm text-[#182A2B] font-display">
                  Sanitized Pristine Interiors
                </h4>
                <p className="text-xs text-[#556464] leading-relaxed mt-1">
                  Daily sanitized fabric upholstery, clean floor mats, and non-smoking cabins for comfortable family travel.
                </p>
              </div>
              <div className="pt-2 border-t border-[#EEF2EE] flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <Check className="w-3.5 h-3.5" />
                <span>Non-Smoking Cabins</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-2xl bg-white border border-[#D5DDD5] space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-[#073B3A] text-[#D9A52B] flex items-center justify-center font-bold text-xs mb-2.5">
                  04
                </div>
                <h4 className="font-bold text-sm text-[#182A2B] font-display">
                  Live Dispatch Radar
                </h4>
                <p className="text-xs text-[#556464] leading-relaxed mt-1">
                  Central Bhubaneswar operations desk continuously monitors highway transit and flight arrivals 24/7.
                </p>
              </div>
              <div className="pt-2 border-t border-[#EEF2EE] flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <Check className="w-3.5 h-3.5" />
                <span>24/7 Control Room Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: DEDICATED STATIONS ACROSS ODISHA ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {operatingHubs.map((hub, idx) => (
              <div
                key={idx}
                className="card-skeuo rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#D5DDD5] bg-white"
              >
                {/* Visual Imagery Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#D6E0D6]">
                  <Image
                    src={hub.image}
                    alt={`${hub.city} - ${hub.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-xl bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] font-black text-xs shadow-md tracking-wider">
                      HUB {hub.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      {hub.standby}
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-[#D9A52B] uppercase tracking-wider block">
                      {hub.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
                      {hub.city}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Routing CTA */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#073B3A] block">
                      {hub.role}
                    </span>
                    <p className="text-xs text-[#556464] leading-relaxed">
                      {hub.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#073B3A] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                      <span>Yellow-Board Fleet</span>
                    </span>
                    <Link
                      href={hub.link}
                      className="inline-flex items-center gap-1 font-bold text-[#073B3A] hover:text-[#D9A52B] transition-colors group/link"
                    >
                      <span>{hub.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: CORPORATE GOVERNANCE & CHARTER ================= */}
      <section className="py-12 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-skeuo p-6 sm:p-8 rounded-3xl space-y-3.5 border border-[#D5DDD5]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />
              <h3 className="text-base font-bold font-display text-[#182A2B]">
                Corporate Governance &amp; Regulatory Compliance
              </h3>
            </div>
            
            <p className="text-xs text-[#556464] leading-relaxed">
              <strong>CabJatra</strong> is an officially registered pre-booked mobility platform. All operational charters, brand assets, intellectual property, and copyrights are owned and held by <strong>NovaSpark Digital Marketing Pvt. Ltd.</strong> in accordance with the Motor Vehicles Act and transport directives of the State of Odisha.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5]">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Registered Legal Entity &amp; Copyright Holder
                </span>
                <strong className="text-[#182A2B] text-xs block mt-0.5">
                  {COMPANY_CONFIG.legalBusinessName}
                </strong>
                <span className="text-[10px] text-[#073B3A] block mt-0.5 font-semibold">
                  Registration: {COMPANY_CONFIG.cinOrRegistration}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5]">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Central Operations Headquarters
                </span>
                <strong className="text-[#182A2B] text-xs block mt-0.5">
                  Infocity Avenue, Patia, Bhubaneswar
                </strong>
                <span className="text-[10px] text-[#073B3A] block mt-0.5 font-semibold">
                  Pin 751024 • 24/7 Operations Desk Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA: SLENDER LUXURY BUTTONS ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062F31] via-[#042426] to-[#021718] text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center border border-white/15 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-bold text-[#D9A52B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Odisha Chauffeur Distinction</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  Punctual Chauffeur Comfort?
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto leading-relaxed">
                Whether landing at BBI Airport, embarking on the sacred Puri Jagannath Dham pilgrimage, or scheduling executive highway transit—book with complete certainty.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href="/book-cab"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.35)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer border border-[#F2C868]/60"
                >
                  <span>Book a Chauffeur Cab</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </Link>

                <Link
                  href="/book-tour"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-white/20 backdrop-blur-md hover:border-[#D9A52B]/70 transition-all cursor-pointer"
                >
                  <Palmtree className="w-4 h-4 text-[#D9A52B]" />
                  <span>Curated Odisha Tours</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-[#073B3A] hover:bg-[#062F31] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-[#D9A52B]/40 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#D9A52B]" />
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