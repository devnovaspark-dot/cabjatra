"use client";

import React from "react";
import Image from "next/image";
import {
  Quote,
  MapPin,
  Sparkles,
  Star,
  CheckCircle2,
  ShieldCheck,
  Car,
  UserCheck,
  Check,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  author: string;
  avatar: string;
  travelerType: string;
  location: string;
  route: string;
  driverMention: string;
  driverExp: string;
  vehicle: string;
  fleetId: string;
  feedback: string;
  date: string;
}

const EXPERIENCES: TestimonialItem[] = [
  {
    id: "exp-1",
    author: "Debabrata & Sunita Ghosh",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    travelerType: "Family Pilgrimage with Senior Parents",
    location: "Kolkata, West Bengal",
    route: "BBI Airport ➔ Puri Jagannath Dham ➔ Konark Marine Drive",
    driverMention: "Driver Subash Chandra",
    driverExp: "9+ Yrs Odisha Highway",
    vehicle: "Toyota Innova Crysta (7-Seater AC)",
    fleetId: "Fleet: CJ-084",
    feedback:
      "Traveling with my 74-year-old mother required extremely patient highway driving and reliable AC. Subash met us right at BBI arrivals with a name placard, helped with wheelchairs at Puri temple gates, and guarded our luggage securely during the 3-hour darshan. Worth every rupee of the 10% advance deposit.",
    date: "Travel Date: Nov 2026",
  },
  {
    id: "exp-2",
    author: "Vikramaditya Rao",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    travelerType: "Corporate Business Traveler",
    location: "Bengaluru, Karnataka",
    route: "BBI Airport Radar ➔ Patia Infocity Tech Park",
    driverMention: "Driver Rakesh Mohapatra",
    driverExp: "7+ Yrs Airport Radar Desk",
    vehicle: "Executive Prime Sedan (Dual-Zone AC)",
    fleetId: "Fleet: CJ-021",
    feedback:
      "My IndiGo flight was delayed by 45 minutes past midnight. Unlike generic ride apps where 3 drivers canceled on me last month, CabJatra's team tracked my flight arrival, and Rakesh was waiting at Gate 1 with AC already running. Clean car, phone charger provided, and prompt GST invoice emailed next morning.",
    date: "Travel Date: Nov 2026",
  },
  {
    id: "exp-3",
    author: "Ananya Deshmukh & Family",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
    travelerType: "Nature & Coastal Eco-Safari",
    location: "Mumbai, Maharashtra",
    route: "Bhubaneswar ➔ Satapada Chilika Dolphin Lagoon",
    driverMention: "Driver Manoj Kumar",
    driverExp: "11+ Yrs Coastal Corridors",
    vehicle: "Premium Highway SUV (Innova Crysta)",
    fleetId: "Fleet: CJ-067",
    feedback:
      "We booked the full-day Chilika package. Manoj knew the highway road conditions intimately, guided us to the official OTDC dolphin boat counter in Satapada, and recommended authentic local fresh seafood stalls on the drive back to Bhubaneswar. Flawless hospitality throughout our holiday.",
    date: "Travel Date: Oct 2026",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-b border-[#E5EAE5] relative overflow-hidden">
      {/* Subtle Ambient Decorative Gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#073B3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with generous clearance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5 pb-6 border-b border-[#E2E8E2]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2.5 border border-[#B6D6D2] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Verified Passenger Logs &bull; 100% Commercial Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#182A2B] font-display tracking-tight">
              Real Traveler Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#556464] mt-2 leading-relaxed">
              Authentic feedback from families, solo pilgrims, and corporate executives who depend on our pre-booked cab service across Odisha.
            </p>
          </div>

          {/* Aggregate Rating Plaque */}
          <div className="flex items-center gap-3 self-start lg:self-auto bg-white px-4 py-2.5 rounded-2xl border border-[#D5DDD5] shadow-xs">
            <div className="flex text-[#D9A52B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D9A52B]" />
              ))}
            </div>
            <div className="border-l border-[#E5ECE5] pl-3">
              <span className="text-xs font-black text-[#182A2B] block leading-none">
                4.9 / 5.0
              </span>
              <span className="text-[10px] text-[#667575] font-semibold">
                14,200+ Journeys Across Odisha
              </span>
            </div>
          </div>
        </div>

        {/* Exactly 3 Flagship Luxury Testimonial Cards (Balanced 3-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-white via-[#FCFDFC] to-[#F5F8F5] border-2 border-[#D6E0D6] shadow-[0_8px_24px_rgba(7,59,58,0.06)] hover:shadow-[0_16px_40px_rgba(7,59,58,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Golden Micro-Accent Bar on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A52B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark Quote Emblem */}
              <Quote className="absolute right-4 top-12 w-20 h-20 text-[#D9A52B]/10 pointer-events-none select-none transition-transform group-hover:scale-110 duration-500" />

              <div className="space-y-4 relative z-10">
                {/* Card Top: Stars & Trip Verification Seal */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-[#D9A52B] drop-shadow-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D9A52B]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-[#073B3A] bg-[#E0ECEA] px-2 py-0.5 rounded-md">
                      5.0 &bull; EXCELLENT
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-[#073B3A] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>Verified Trip</span>
                  </span>
                </div>

                {/* Traveler Category & Route Plaque */}
                <div className="space-y-1.5">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#D9A52B] block">
                    ✦ {exp.travelerType}
                  </span>
                  <div className="text-xs font-bold text-[#182A2B] bg-white p-3 rounded-xl border border-[#D5DDD5] flex items-start gap-2 shadow-xs">
                    <MapPin className="w-4 h-4 text-[#073B3A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{exp.route}</span>
                  </div>
                </div>

                {/* Feedback Quote - Comfortable Reading Typography */}
                <p className="text-[13px] sm:text-sm text-[#2C3E3E] leading-relaxed font-normal pt-1">
                  &ldquo;{exp.feedback}&rdquo;
                </p>

                {/* Driver & Vehicle Credentials Strip - Generous, NO Truncation */}
                <div className="pt-3 border-t border-[#E5ECE5] bg-[#FAF9F5] p-3 rounded-2xl border border-[#D8E2D8] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#073B3A]">
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-[#D9A52B] shrink-0" />
                      <span>{exp.driverMention}</span>
                    </div>
                    <span className="text-[10px] text-[#667575] font-semibold bg-white px-2 py-0.5 rounded-md border border-[#D5DDD5]">
                      {exp.driverExp}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#182A2B] pt-1 border-t border-[#E5ECE5]/60">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Car className="w-3.5 h-3.5 text-[#073B3A] shrink-0" />
                      <span>{exp.vehicle}</span>
                    </div>
                    <span className="text-[10px] text-[#10B981] font-bold">
                      {exp.fleetId}
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Profile Footer - Clean, NO Truncation */}
              <div className="mt-5 pt-3.5 border-t border-[#E5ECE5] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D9A52B] shadow-[0_2px_8px_rgba(217,165,43,0.35)] shrink-0">
                    <Image
                      src={exp.avatar}
                      alt={exp.author}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#182A2B] flex items-center gap-1 font-display">
                      <span>{exp.author}</span>
                      <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3]" />
                    </h4>
                    <span className="text-[11px] text-[#667575] block font-medium">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#556464] font-semibold bg-white px-2.5 py-1 rounded-full border border-[#D6E0D6] shadow-xs inline-block">
                    {exp.date.replace("Travel Date: ", "")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#073B3A] to-[#041F20] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#D9A52B]/30 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D9A52B] text-[#062F31] flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-bold block text-white font-display">
                100% Commercial Fleet &bull; Zero Driver Cancellations
              </strong>
              <p className="text-[11px] text-[#A7F3D0] mt-0.5">
                Every reservation is backed by our verified driver dispatch protocol across Odisha.
              </p>
            </div>
          </div>

          <a
            href="/book-cab"
            className="px-5 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-white text-[#073B3A] font-bold text-xs inline-flex items-center gap-1.5 shadow-sm transition shrink-0"
          >
            <span>Experience Verified Travel</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
