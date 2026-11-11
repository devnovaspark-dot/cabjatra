"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Compass,
  Palmtree,
  Clock,
  Briefcase,
  Car,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface MobilityVertical {
  id: string;
  num: string;
  title: string;
  shortTag: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  perks: { label: string; desc: string }[];
  ctaText: string;
  ctaLink: string;
  learnMoreLink: string;
  whatsappText: string;
}

const VERTICALS: MobilityVertical[] = [
  {
    id: "airport",
    num: "01",
    title: "Airport Radar Transfers",
    shortTag: "BBI Radar Tracked",
    tagline: "Live flight-radar synchronized meet & greet at Biju Patnaik Airport (BBI)",
    description:
      "Your commercial chauffeur monitors your inbound flight number in real time. If your flight is delayed or lands early, dispatch automatically reschedules your pickup with a complimentary 45-minute terminal baggage wait buffer.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=1200&auto=format&fit=crop",
    icon: Plane,
    badge: "Flight-Radar Synchronized",
    perks: [
      { label: "Radar Tracking", desc: "Auto-adjusts pickup for delayed flights" },
      { label: "45-Min Gate Buffer", desc: "Complimentary baggage & belt wait time" },
      { label: "Zero Surge Pricing", desc: "Fixed tariffs during midnight or rain" },
    ],
    ctaText: "Reserve Airport Cab",
    ctaLink: "/book-cab?service=airport",
    learnMoreLink: "/services/airport-transfers",
    whatsappText: "Hi CabJatra Desk, I need an airport transfer at BBI Bhubaneswar.",
  },
  {
    id: "outstation",
    num: "02",
    title: "Outstation Highway Corridors",
    shortTag: "NH-16 & NH-316",
    tagline: "Point-to-point intercity highway journeys with verified commercial drivers",
    description:
      "Direct intercity connectivity between Bhubaneswar, Puri, Cuttack, Konark, Sambalpur, and Rourkela. Driven by seasoned highway chauffeurs with dual-zone air conditioning, comprehensive passenger insurance, and verified vehicle fitness.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=1200&auto=format&fit=crop",
    icon: Compass,
    badge: "Highway Specialists",
    perks: [
      { label: "Commercial Fitness", desc: "100% yellow-board legal permits" },
      { label: "10% Advance Deposit", desc: "Lock reservation with zero surge traps" },
      { label: "Transparent Tolls", desc: "All route charges disclosed upfront" },
    ],
    ctaText: "Book Highway Cab",
    ctaLink: "/book-cab?service=outstation",
    learnMoreLink: "/services/outstation-cabs",
    whatsappText: "Hi CabJatra Desk, I need an outstation highway cab in Odisha.",
  },
  {
    id: "tours",
    num: "03",
    title: "Odisha Curated Circuits",
    shortTag: "Heritage & Nature",
    tagline: "Sacred Golden Triangle & Chilika dolphin trails with standby luggage custody",
    description:
      "Experience timeless Odisha—from Puri Jagannath Dham and Konark Sun Temple to the serene dolphin lagoons of Chilika Satapada. Your private chauffeur remains on standby at every temple gate, safeguarding your family luggage during darshans.",
    image:
      "https://images.unsplash.com/photo-1600100397608-f010f421a182?q=85&w=1200&auto=format&fit=crop",
    icon: Palmtree,
    badge: "Curated Heritage Trails",
    perks: [
      { label: "Darshan Custody", desc: "Chauffeur safeguards luggage at shrines" },
      { label: "Flexible Photo Halts", desc: "Unlimited scenic stops on Marine Drive" },
      { label: "Local Route Guidance", desc: "Drivers versed in temple darshan protocols" },
    ],
    ctaText: "Explore Tour Circuits",
    ctaLink: "/book-tour",
    learnMoreLink: "/services/odisha-tours",
    whatsappText: "Hi CabJatra Tour Desk, I want custom quotes for Odisha curated tour circuits.",
  },
  {
    id: "hourly",
    num: "04",
    title: "Hourly Chauffeur Standby",
    shortTag: "4, 8 & 12 Hr Flexible",
    tagline: "Dedicated executive vehicle and uniformed chauffeur on call across the city",
    description:
      "Complete multi-stop errands, executive conclave meetings, hospital visits, or wedding logistics with a dedicated chauffeur on standby. The air-conditioned vehicle remains exclusively reserved and parked at your location between stops.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=1200&auto=format&fit=crop",
    icon: Clock,
    badge: "Standby On-Demand",
    perks: [
      { label: "Chauffeur on Standby", desc: "Car remains parked outside your venues" },
      { label: "Unlimited City Stops", desc: "Multi-point itinerary in one reservation" },
      { label: "Pre-Cooled Cabin", desc: "AC running and doors opened on return" },
    ],
    ctaText: "Reserve Hourly Rental",
    ctaLink: "/book-cab?service=hourly",
    learnMoreLink: "/services/hourly-rentals",
    whatsappText: "Hi CabJatra Desk, I need an hourly standby chauffeur package in Bhubaneswar.",
  },
  {
    id: "corporate",
    num: "05",
    title: "Corporate Fleet & Conclaves",
    shortTag: "Enterprise SLA",
    tagline: "Standardized business travel logistics with centralized GST billing and invoices",
    description:
      "Ground mobility engineered for visiting delegations, leadership conclaves, and institutional guests across Bhubaneswar Infocity and KIIT conventions. Features uniform protocol, pristine sedans, Crystas, and centralized monthly GST invoicing.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1200&auto=format&fit=crop",
    icon: Briefcase,
    badge: "Enterprise Mobility",
    perks: [
      { label: "Consolidated Invoicing", desc: "Monthly GST invoices with digital logs" },
      { label: "Priority VIP Fleet", desc: "Executive sedans & Innova Crystas" },
      { label: "Dedicated Desk SLA", desc: "24/7 direct operations dispatch manager" },
    ],
    ctaText: "Inquire Corporate Accounts",
    ctaLink: "/contact",
    learnMoreLink: "/services#corporate",
    whatsappText: "Hi CabJatra Corporate Desk, I want to discuss corporate travel arrangements.",
  },
  {
    id: "local",
    num: "06",
    title: "Scheduled Urban City Rides",
    shortTag: "Zero Cancellations",
    tagline: "Pre-allocated point-to-point urban rides with guaranteed early-morning arrival",
    description:
      "Eliminate the anxiety of driver cancellations for 4 AM railway station departures or critical medical appointments. Cabs are pre-allocated and verified the evening prior with real-time driver coordinates sent to your WhatsApp.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=85&w=1200&auto=format&fit=crop",
    icon: Car,
    badge: "Guaranteed Urban Punctuality",
    perks: [
      { label: "Zero Cancellations", desc: "Pre-allocated evening before your trip" },
      { label: "Early-Morning Punctual", desc: "Guaranteed pickups for 4 AM–6 AM trains" },
      { label: "Sanitized & Odor-Free", desc: "Clean commercial cabin inspected daily" },
    ],
    ctaText: "Schedule City Ride",
    ctaLink: "/book-cab?service=local",
    learnMoreLink: "/services/local-city-rides",
    whatsappText: "Hi CabJatra Desk, I want to pre-book a scheduled city ride.",
  },
];

export const ServicesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Subtle auto-advance when not hovered or interacted with
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % VERTICALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = VERTICALS[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-[#E5EAE5] relative overflow-hidden">
      {/* Subtle Ambient Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#073B3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Non-card, Editorial Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4 pb-6 border-b border-[#E2E8E2]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#B6D6D2] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Dedicated Mobility Verticals</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#182A2B] font-display tracking-tight">
              Odisha Chauffeur Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-[#556464] mt-2 leading-relaxed">
              Six dedicated travel verticals designed around commercial safety, punctual driver arrival, and verified 10% advance deposits—eliminating aggregator cancellation traps across Odisha.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Quick Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#D5DDD5] text-xs font-semibold text-[#073B3A] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Commercial Fleet Active</span>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:text-[#062F31] group transition"
            >
              <span>Explore All Verticals</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#D9A52B]" />
            </Link>
          </div>
        </div>

        {/* Mobile Horizontal Quick-Switch Strip */}
        <div className="lg:hidden mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {VERTICALS.map((item, idx) => {
            const isSel = idx === activeIdx;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
                  isSel
                    ? "bg-[#073B3A] text-white shadow-md ring-2 ring-[#D9A52B]/40"
                    : "bg-white text-[#556464] border border-[#D5DDD5] hover:text-[#182A2B]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSel ? "text-[#D9A52B]" : "text-[#073B3A]"}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* The World-Class Mobility Concierge Showcase (Not Cards!) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT COLUMN: Editorial Vertical Directory (40% width) */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-[#E2EAE2] bg-white/70 backdrop-blur-sm rounded-3xl p-3 sm:p-5 border border-[#D5DDD5] shadow-sm">
            {VERTICALS.map((item, idx) => {
              const isSelected = idx === activeIdx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#073B3A] to-[#041F20] text-white shadow-lg ring-1 ring-[#D9A52B]/40 translate-x-1"
                      : "hover:bg-[#FAF9F5] text-[#182A2B]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    {/* Numeral & Icon Medallion */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#D9A52B] text-[#062F31] shadow-md font-bold"
                            : "bg-[#EEF2EE] text-[#073B3A] group-hover:bg-[#E0ECEA]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Text block */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] font-bold ${
                            isSelected ? "text-[#D9A52B]" : "text-[#8A9797]"
                          }`}
                        >
                          {item.num}
                        </span>
                        <span
                          className={`text-xs uppercase font-extrabold tracking-wider truncate ${
                            isSelected ? "text-[#A7F3D0]" : "text-[#073B3A]"
                          }`}
                        >
                          {item.shortTag}
                        </span>
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-bold font-display truncate mt-0.5 ${
                          isSelected ? "text-white" : "text-[#182A2B] group-hover:text-[#073B3A]"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Arrow / Active Indicator */}
                  <div className="shrink-0 pl-2">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#D9A52B] translate-x-0.5"
                          : "text-[#B0BCB0] group-hover:text-[#073B3A] group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: The Living Cinematic Panoramic Stage (60% width) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[540px] shadow-2xl border-2 border-[#073B3A]/20 flex flex-col justify-between">
            {/* Panoramic Photographic Backdrop with smooth transition */}
            <div className="absolute inset-0">
              <Image
                key={active.id}
                src={active.image}
                alt={active.title}
                fill
                priority
                className="object-cover object-center brightness-[0.88] contrast-[1.08] transition-all duration-700 animate-in fade-in zoom-in-105"
              />
              {/* Deep Cinematic Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011415] via-[#021A1B]/75 via-50% to-[#021A1B]/35" />
              <div className="absolute inset-0 bg-radial-[at_top_right] from-transparent via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* TOP BAR: Floating Guarantee Badges */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#D9A52B] text-xs font-bold shadow-md">
                <ActiveIcon className="w-3.5 h-3.5" />
                <span>{active.badge}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Commercial Fleet</span>
              </div>
            </div>

            {/* BOTTOM CONSOLE: Integrated Frosted Luxury Control Panel */}
            <div className="relative z-10 p-5 sm:p-7 bg-[#021819]/85 backdrop-blur-md border-t border-white/15 text-white space-y-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#D9A52B] block">
                  {active.tagline}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white mt-1 tracking-tight">
                  {active.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1.5 max-w-xl">
                  {active.description}
                </p>
              </div>

              {/* 3 Value Pillars (Seamless Horizontal Chips) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {active.perks.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs space-y-0.5"
                  >
                    <div className="font-bold text-[#A7F3D0] flex items-center gap-1 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
                      <span className="truncate">{p.label}</span>
                    </div>
                    <p className="text-[10.5px] text-white/70 leading-tight truncate">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <Link
                    href={active.ctaLink}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>{active.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`${COMPANY_CONFIG.contact.whatsAppLink}?text=${encodeURIComponent(
                      active.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 font-semibold text-xs inline-flex items-center gap-1.5 transition cursor-pointer"
                    title="Chat with dispatch desk"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span className="hidden sm:inline">WhatsApp Dispatch</span>
                  </a>
                </div>

                <Link
                  href={active.learnMoreLink}
                  className="text-xs font-semibold text-white/70 hover:text-white transition flex items-center gap-1"
                >
                  <span>Detailed Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
