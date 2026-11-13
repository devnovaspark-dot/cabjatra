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
import { Icon3DCheck, Icon3DCross } from "@/components/common/Icon3DBadges";

export const metadata = {
  title: "About Us — CabJatra Odisha Cab Service",
  description:
    "Discover the story behind CabJatra: our founding mission, 10% advance deposit model, 100% commercial yellow-board fleet, and verified driver standards across Odisha.",
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
      desc: "Driver arrives at your pickup hub early. Dual-zone AC is cooled to 22°C and vehicle boot is prepared for your luggage.",
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
            className="object-cover object-center scale-102"
          />
          {/* Balanced cinematic gradient overlay: pure transparent clarity without white shadow cast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/55 via-50% to-[#011415]/90" />
          <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Odisha Cab Service Distinction • Established Mobility Protocol</span>
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
                  &ldquo;A guest arriving in Odisha is not a transaction; they are sacred. Our drivers take pride in courteous hospitality, punctuality, and ensuring every family reaches safely.&rdquo;
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Graphical Comparison Visual Card with 3D Tactile Badges */}
            <div className="lg:col-span-6">
              <div className="card-skeuo rounded-3xl border border-[#D5DDD5] bg-white shadow-2xl overflow-hidden group hover:border-[#D9A52B]/50 transition-all duration-300">
                {/* Executive Header with Live Status Tag */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#073B3A] via-[#094847] to-[#041F20] text-white flex items-center justify-between border-b border-[#D9A52B]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A52B]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D9A52B] block">
                        Comparative Mobility Standard
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      The Street Reality vs. CabJatra
                    </h3>
                  </div>
                  <div className="relative z-10 flex flex-col items-end gap-1">
                    <BrandLogo size="sm" variant="light" showTagline={false} />
                    <span className="text-[9.5px] font-bold text-[#A7F3D0] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                      STA Verified
                    </span>
                  </div>
                </div>

                {/* Dual Column Headings */}
                <div className="grid grid-cols-2 bg-[#FAF9F5] border-b border-[#EEF2EE] text-[10.5px] font-extrabold uppercase tracking-wider py-2 px-4 sm:px-5">
                  <span className="text-rose-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Street Hailing / Apps
                  </span>
                  <span className="text-[#064E3B] flex items-center gap-1.5 justify-end">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    CabJatra Standard
                  </span>
                </div>

                {/* 4 Sleek Comparative Matrix Rows with 3D Badges */}
                <div className="p-4 sm:p-5 space-y-3 bg-gradient-to-b from-white to-[#FAF9F5]">
                  {/* Item 1: Surge Pricing */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/70 to-rose-100/20 border border-rose-200/70 space-y-1 hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={true} />
                        <span className="text-[11px] font-bold text-rose-950 leading-tight">
                          2x–3x Surge Surcharges
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-900/80 leading-relaxed pl-1">
                        Arbitrary multiplier spikes during rain, temple rush &amp; midnight arrivals.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#EBF5EE] to-[#E3EFE7] border border-[#10B981]/40 space-y-1 hover:border-[#073B3A]/60 transition-colors shadow-xs">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <Icon3DCheck size="sm" interactive={true} />
                          <span className="text-[11px] font-bold text-[#064E3B] leading-tight">
                            Zero Surge Guarantee
                          </span>
                        </div>
                      </div>
                      <p className="text-[10.5px] text-[#1F4638] leading-relaxed pl-1 font-medium">
                        Fixed per-km rate locked upfront. Exactly what you agree is what you pay.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Vehicle Permits & Insurance */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/70 to-rose-100/20 border border-rose-200/70 space-y-1 hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={true} />
                        <span className="text-[11px] font-bold text-rose-950 leading-tight">
                          Private White Plates
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-900/80 leading-relaxed pl-1">
                        Unpermitted private cars without commercial permits or passenger insurance.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#EBF5EE] to-[#E3EFE7] border border-[#10B981]/40 space-y-1 hover:border-[#073B3A]/60 transition-colors shadow-xs">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <Icon3DCheck size="sm" interactive={true} />
                          <span className="text-[11px] font-bold text-[#064E3B] leading-tight">
                            100% Yellow-Board
                          </span>
                        </div>
                      </div>
                      <p className="text-[10.5px] text-[#1F4638] leading-relaxed pl-1 font-medium">
                        Full Odisha STA commercial carriage permits with comprehensive insurance.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Advance Deposit */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/70 to-rose-100/20 border border-rose-200/70 space-y-1 hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={true} />
                        <span className="text-[11px] font-bold text-rose-950 leading-tight">
                          100% Upfront or Nil
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-900/80 leading-relaxed pl-1">
                        Forced 100% full payment lock-in or 0-commitment sudden driver drops.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#EBF5EE] to-[#E3EFE7] border border-[#10B981]/40 space-y-1 hover:border-[#073B3A]/60 transition-colors shadow-xs">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <Icon3DCheck size="sm" interactive={true} />
                          <span className="text-[11px] font-bold text-[#064E3B] leading-tight">
                            10% Advance Security
                          </span>
                        </div>
                      </div>
                      <p className="text-[10.5px] text-[#1F4638] leading-relaxed pl-1 font-medium">
                        Lock your ride with 10% deposit. Settle the remaining 90% only after arrival.
                      </p>
                    </div>
                  </div>

                  {/* Item 4: Air Conditioning & Hygiene */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/70 to-rose-100/20 border border-rose-200/70 space-y-1 hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Icon3DCross size="sm" interactive={true} />
                        <span className="text-[11px] font-bold text-rose-950 leading-tight">
                          AC Refused / Demands
                        </span>
                      </div>
                      <p className="text-[10.5px] text-rose-900/80 leading-relaxed pl-1">
                        Blowers only in high humidity, or demands for extra unmetered cash tips.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#EBF5EE] to-[#E3EFE7] border border-[#10B981]/40 space-y-1 hover:border-[#073B3A]/60 transition-colors shadow-xs">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <Icon3DCheck size="sm" interactive={true} />
                          <span className="text-[11px] font-bold text-[#064E3B] leading-tight">
                            22°C Pre-Cooled AC
                          </span>
                        </div>
                      </div>
                      <p className="text-[10.5px] text-[#1F4638] leading-relaxed pl-1 font-medium">
                        Cabin pre-cooled 15 mins prior to boarding. Guaranteed dual-zone AC running.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Trust Bar */}
                <div className="px-4 py-2.5 bg-[#FAF9F5] border-t border-[#E5EAE5] flex items-center justify-between text-[10.5px] text-[#556464] font-medium">
                  <span className="flex items-center gap-1 text-[#073B3A] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    Contractual Departure Protection
                  </span>
                  <span className="text-[#D9A52B] font-bold">14,200+ Dispatched</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STORYTELLING INFOGRAPHIC: 4-STEP TRAVEL LIFECYCLE ================= */}
      <section className="py-14 sm:py-20 bg-[#F2F5F2] border-b border-[#E5EAE5] relative overflow-hidden">
        {/* Subtle ambient highway glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D9A52B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA] text-[10px] font-extrabold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7] shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>The Journey Experience • Step-by-Step</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B] tracking-tight">
              How Your Journey Unfolds
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed max-w-xl mx-auto">
              From instant online reservation to scenic highway drop-off, every phase follows a verified operational standard.
            </p>
          </div>

          {/* Interactive Connected Pipeline Grid */}
          <div className="relative">
            {/* Desktop Connector Beam Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#D9A52B]/40 via-[#10B981]/50 to-[#D9A52B]/40 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
              {journeySteps.map((step, idx) => {
                const Icon = step.icon;
                const metaChips = [
                  { tag: "10% Lock", label: "Instant WhatsApp Voucher" },
                  { tag: "22°C AC Primed", label: "Dual-Zone Pre-Cooled" },
                  { tag: "Radar Sync", label: "Doorstep Luggage Assist" },
                  { tag: "Drop 90%", label: "Destination Settlement" },
                ];
                const meta = metaChips[idx];

                return (
                  <div
                    key={idx}
                    className="card-skeuo rounded-3xl p-6 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top ambient hover glow */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A52B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-4">
                      {/* Step Header with Beacon Badge */}
                      <div className="flex items-center justify-between">
                        <div className="relative">
                          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-base shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(217,165,43,0.35)] transition-all">
                            {step.num}
                          </span>
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA] px-2.5 py-1 rounded-full border border-[#C1DAD7]">
                          {step.time}
                        </span>
                      </div>

                      {/* Step Content */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <Icon className="w-4 h-4 text-[#D9A52B] shrink-0" />
                          <h3 className="text-base font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#556464] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Outcome Pill */}
                    <div className="pt-4 mt-4 border-t border-[#EEF2EE] flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-bold text-[#073B3A]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{meta.label}</span>
                      </span>
                      <span className="text-[10px] font-bold text-[#D9A52B] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5EAE5]">
                        {meta.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
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
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6 text-[#D9A52B]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Financial Security • Escrow
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  The 10% Advance Security Model
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Unlike informal street operators demanding 100% advance or ride apps that cancel at the last minute, CabJatra locks your vehicle and driver with only a 10% advance deposit. Settle the 90% balance only at your final destination.
                </p>

                {/* Tactile 10/90 Split Escrow Visual */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF9F5] to-[#F2F5F2] border border-[#D5DDD5] space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white border border-[#D9A52B]/40 shadow-xs">
                      <div className="flex items-center gap-1.5 text-[#073B3A] text-xs font-bold">
                        <Lock className="w-3.5 h-3.5 text-[#D9A52B]" />
                        <span>10% Advance</span>
                      </div>
                      <span className="text-[10px] text-[#667575] block mt-0.5">Locks Dedicated Car &amp; Driver</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#10B981]/40 shadow-xs">
                      <div className="flex items-center gap-1.5 text-[#064E3B] text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>90% At Drop</span>
                      </div>
                      <span className="text-[10px] text-[#667575] block mt-0.5">Pay via UPI / Cash after Arrival</span>
                    </div>
                  </div>

                  {/* Two-Tone Progress Track */}
                  <div className="space-y-1">
                    <div className="w-full h-3 rounded-full bg-[#E0E7E0] overflow-hidden flex shadow-inner">
                      <div className="w-[10%] bg-gradient-to-r from-[#D9A52B] to-[#F2C052] h-full relative">
                        <span className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                      <div className="w-[90%] bg-gradient-to-r from-[#073B3A] to-[#0A4E4D] h-full" />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-[#667575] px-0.5">
                      <span className="text-[#966E0C]">10% Locked Upfront</span>
                      <span className="text-[#073B3A]">90% Settle After Safe Drop</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>100% Instant Refund if Cancelled Early</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 01</span>
              </div>
            </div>

            {/* PILLAR 2: 100% COMMERCIAL FLEET WITH REALISTIC HSRP PLATE */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Car className="w-6 h-6 text-[#D9A52B]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    State STA Permit • RTO Verified
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  100% Yellow-Board Commercial Fleet
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Every vehicle operates under a strict Odisha State Transport commercial permit. We strictly never dispatch private white-plate cars, ensuring comprehensive passenger insurance, verified highway fitness, and lawful transit.
                </p>

                {/* Hyper-Realistic Indian HSRP Commercial Plate Mockup */}
                <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#333] via-[#111] to-[#222] shadow-xl border border-black/30">
                  <div className="rounded-xl bg-gradient-to-r from-[#FBC02D] via-[#F9A825] to-[#F57F17] p-2.5 sm:p-3 flex items-center justify-between border-2 border-black/80 relative overflow-hidden">
                    {/* HSRP Blue IND Strip with Hologram Badge */}
                    <div className="w-10 sm:w-11 self-stretch rounded-lg bg-[#003399] flex flex-col items-center justify-between py-1 px-0.5 text-white shadow-inner shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full border border-white/60 bg-white/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A52B]" />
                      </div>
                      <span className="text-[11px] font-black tracking-wider leading-none text-white drop-shadow">
                        IND
                      </span>
                    </div>

                    {/* Embossed Commercial Plate Number */}
                    <div className="flex-1 text-center px-2">
                      <div className="text-[9px] font-extrabold tracking-widest text-[#182A2B]/85 uppercase">
                        ODISHA STATE TRANSPORT AUTHORITY
                      </div>
                      <div className="text-base sm:text-xl font-black font-mono tracking-widest text-[#111827] drop-shadow-[0_1px_0_rgba(255,255,255,0.4)] mt-0.5">
                        OD • 02 • AA • 2026
                      </div>
                      <div className="text-[8.5px] font-extrabold text-[#073B3A] tracking-wider uppercase">
                        COMMERCIAL CARRIAGE • COMPREHENSIVE PASSENGER COVER
                      </div>
                    </div>

                    {/* Laser Hologram Badge */}
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/60 via-[#E0E7E0] to-white/40 border border-black/20 flex items-center justify-center shadow-xs shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#073B3A]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Zero White-Plate Private Cars Allowed</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 02</span>
              </div>
            </div>

            {/* PILLAR 3: ZERO SURGE PRICING */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-[#D9A52B]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Transparent Tariffs • No Hidden Tolls
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  Zero Surge Pricing Guarantee
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Our tariffs are fixed, transparent, and calibrated strictly by actual highway mileage. You will never face sudden 2x or 3x surge multipliers during heavy monsoon downpours, midnight train delays, or festival rushes like Rath Yatra.
                </p>

                {/* Tactile Surge Comparison Meter */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF9F5] to-[#F2F5F2] border border-[#D5DDD5] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white border border-[#10B981]/50 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#667575] uppercase">CabJatra Tariff</span>
                        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="text-base font-extrabold text-[#064E3B] mt-0.5">1.0x Fixed Rate</div>
                      <span className="text-[10px] text-[#10B981] font-semibold block">Locked Upfront • No Surge</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/70 border border-rose-200 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-rose-800 uppercase">Aggregator Apps</span>
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                      </div>
                      <div className="text-base font-extrabold text-rose-700 mt-0.5 line-through">2.5x–3.0x Peak</div>
                      <span className="text-[10px] text-rose-600 font-semibold block">Rain &amp; Festival Surges</span>
                    </div>
                  </div>

                  <div className="px-2.5 py-1.5 rounded-lg bg-[#E0ECEA]/70 flex items-center justify-between text-[11px] text-[#073B3A] font-semibold">
                    <span>Rain / Late-Night Surcharge:</span>
                    <span className="font-extrabold text-[#064E3B]">₹0.00 (Always Included)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Honest Per-KM Quotation on WhatsApp</span>
                </span>
                <span className="text-[#D9A52B]">Pillar 03</span>
              </div>
            </div>

            {/* PILLAR 4: VERIFIED DRIVER HOSPITALITY */}
            <div className="card-skeuo rounded-3xl p-6 sm:p-7 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-6 h-6 text-[#D9A52B]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Courteous Service • Local Ethos
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                  Verified Driver Hospitality
                </h3>

                <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                  Our drivers are verified local professionals with extensive highway experience, clean driving records, and courteous pilgrimage etiquette. Trained to assist with luggage, family needs, and senior citizens.
                </p>

                {/* Tactile Driver Credential Chips */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF9F5] to-[#F2F5F2] border border-[#D5DDD5] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#D5DDD5] font-semibold text-[#182A2B]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Police Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#D5DDD5] font-semibold text-[#182A2B]">
                      <Users className="w-3.5 h-3.5 text-[#073B3A] shrink-0" />
                      <span>Odia &amp; Hindi Fluent</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#D5DDD5] font-semibold text-[#182A2B]">
                      <Navigation className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                      <span>5+ Yrs Highway Mastery</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#D5DDD5] font-semibold text-[#182A2B]">
                      <Sparkles className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Non-Smoking Fleet</span>
                    </div>
                  </div>

                  <div className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E5EAE5] text-[10.5px] text-[#556464] italic flex items-center gap-1.5">
                    <span className="text-[#D9A52B] font-bold">★ 4.9/5:</span>
                    <span>&ldquo;Courteous, smooth driving along Marine Drive for our elderly parents.&rdquo;</span>
                  </div>
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
            <div className="card-skeuo p-5 rounded-3xl bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Climate Protocol
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#182A2B] font-display group-hover:text-[#073B3A] transition-colors">
                  Dual-Zone AC Guaranteed
                </h4>
                <div className="inline-block px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E5EAE5] text-[10px] font-bold text-[#073B3A]">
                  22°C Pre-Cooled 15 Mins Early
                </div>
                <p className="text-xs text-[#556464] leading-relaxed">
                  Air conditioning actively cooled prior to passenger boarding. Dual blowers keep both front and rear passengers comfortable in coastal humidity.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>100% Functioning AC</span>
                </span>
                <span className="text-[10px] text-[#D9A52B] font-mono">SPEC-01</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-3xl bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    State Permits
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#182A2B] font-display group-hover:text-[#073B3A] transition-colors">
                  Odisha STA Legal Compliance
                </h4>
                <div className="inline-block px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E5EAE5] text-[10px] font-bold text-[#073B3A]">
                  Commercial Yellow Plate Permit
                </div>
                <p className="text-xs text-[#556464] leading-relaxed">
                  Valid Odisha commercial transport permit, full passenger insurance coverage, and annual RTO roadworthiness fitness certificates.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>STA Permit Certified</span>
                </span>
                <span className="text-[10px] text-[#D9A52B] font-mono">SPEC-02</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-3xl bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Cabin Hygiene
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#182A2B] font-display group-hover:text-[#073B3A] transition-colors">
                  Sanitized Pristine Interiors
                </h4>
                <div className="inline-block px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E5EAE5] text-[10px] font-bold text-[#073B3A]">
                  12-Point Hygiene Protocol
                </div>
                <p className="text-xs text-[#556464] leading-relaxed">
                  Daily deep-cleaned fabric upholstery, fresh floor mats, sanitized luggage boot, and strictly tobacco-free non-smoking family cabins.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Non-Smoking Cabins</span>
                </span>
                <span className="text-[10px] text-[#D9A52B] font-mono">SPEC-03</span>
              </div>
            </div>

            <div className="card-skeuo p-5 rounded-3xl bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                    Command Desk
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#182A2B] font-display group-hover:text-[#073B3A] transition-colors">
                  Live Dispatch Operations Radar
                </h4>
                <div className="inline-block px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E5EAE5] text-[10px] font-bold text-[#073B3A]">
                  BBI Airport &amp; Highway Sync
                </div>
                <p className="text-xs text-[#556464] leading-relaxed">
                  Central Bhubaneswar desk tracks flight arrivals and highway transit 24/7. Instant driver contact and trip coordination via WhatsApp.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-bold text-[#073B3A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>24/7 Operations Desk</span>
                </span>
                <span className="text-[10px] text-[#D9A52B] font-mono">SPEC-04</span>
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

                  <div className="pt-3 border-t border-[#EEF2EE] flex items-center justify-between text-xs gap-2">
                    <span className="font-bold text-[11px] text-[#073B3A] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                      <span>100% Yellow-Board</span>
                    </span>
                    <Link
                      href={hub.link}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D5DDD5] hover:border-[#D9A52B] font-bold text-xs text-[#073B3A] hover:text-[#062F31] hover:bg-[#FDF9EE] transition-all shadow-xs group/link"
                    >
                      <span>{hub.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform text-[#D9A52B]" />
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
          <div className="card-skeuo p-6 sm:p-8 rounded-3xl space-y-4 border border-[#D5DDD5] bg-gradient-to-br from-white via-white to-[#FAF9F5] shadow-lg relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D9A52B] via-[#F2C052] to-[#073B3A]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-md shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#D9A52B]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B]">
                    Corporate Governance &amp; Regulatory Compliance
                  </h3>
                  <span className="text-[10.5px] font-bold text-[#073B3A] uppercase tracking-wider block">
                    Odisha Commercial Motor Vehicles Framework
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA] border border-[#C1DAD7] text-xs font-bold text-[#073B3A] self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>MCA Registered Entity</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
              <strong>CabJatra</strong> is an officially registered pre-booked mobility platform. All operational charters, vehicle compliance standards, brand trademarks, and guest protections are governed by <strong>NovaSpark Digital Marketing Pvt. Ltd.</strong> in strict accordance with the Motor Vehicles Act and transport directives of the State of Odisha.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-1 hover:border-[#D9A52B]/40 transition-colors">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Registered Legal Entity &amp; Trademark Holder
                </span>
                <strong className="text-[#182A2B] text-xs sm:text-sm block">
                  {COMPANY_CONFIG.legalBusinessName}
                </strong>
                <span className="text-[11px] text-[#073B3A] block font-semibold">
                  CIN / Reg: {COMPANY_CONFIG.cinOrRegistration}
                </span>
                <span className="text-[10px] text-[#667575] block mt-0.5">
                  Ministry of Corporate Affairs • Govt of India
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-1 hover:border-[#073B3A]/40 transition-colors">
                <span className="text-[10px] text-[#667575] uppercase font-bold block">
                  Central Operations Headquarters
                </span>
                <strong className="text-[#182A2B] text-xs sm:text-sm block">
                  Infocity Avenue, Patia, Bhubaneswar
                </strong>
                <span className="text-[11px] text-[#073B3A] block font-semibold">
                  Odisha 751024 • 24/7 Operations Desk
                </span>
                <span className="text-[10px] text-[#667575] block mt-0.5">
                  Direct Desk: {COMPANY_CONFIG.contact.phoneDisplay}
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
                <span>Odisha Cab Service Distinction</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                Ready to Experience Odisha with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  Comfortable Cab Travel?
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
                  <span>Book Your Cab Now</span>
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