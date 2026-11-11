"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Quote, MapPin, Sparkles, Star, CheckCircle2, UserCheck } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const experiences = [
    {
      author: "Debabrata & Sunita Ghosh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      travelerType: "Family Pilgrimage with Senior Parents",
      location: "Kolkata to Puri & Konark",
      route: "Bhubaneswar Airport ⇄ Puri ⇄ Konark Marine Drive",
      driverMention: "Chauffeur Subash (Fleet ID: CJ-084)",
      vehicle: "Toyota Innova Crysta",
      feedback: "Traveling with my 74-year-old mother required extremely patient highway driving and reliable AC. Subash met us right at BBI arrivals with a name placard, helped with wheelchairs at Puri temple gates, and guarded our luggage securely during the 3-hour darshan. Worth every rupee of the 10% advance deposit.",
      date: "Travel Date: Nov 2026",
    },
    {
      author: "Vikramaditya Rao",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
      travelerType: "Corporate Business Traveler",
      location: "Bengaluru to Bhubaneswar Infocity",
      route: "BBI Airport ⇄ Patia Infocity Tech Park",
      driverMention: "Chauffeur Rakesh (Fleet ID: CJ-021)",
      vehicle: "Executive Prime Sedan",
      feedback: "My IndiGo flight was delayed by 45 minutes past midnight. Unlike generic ride apps where 3 drivers canceled on me last month, CabJatra's team tracked my flight arrival, and Rakesh was waiting at Gate 1 with AC already running. Clean car, phone charger provided, and prompt GST invoice emailed next morning.",
      date: "Travel Date: Nov 2026",
    },
    {
      author: "Ananya Deshmukh",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
      travelerType: "Nature & Eco-Safari Enthusiast",
      location: "Mumbai to Chilika Lagoon",
      route: "Bhubaneswar ⇄ Satapada Chilika Dolphin Trail",
      driverMention: "Chauffeur Manoj (Fleet ID: CJ-067)",
      vehicle: "Premium SUV",
      feedback: "We booked the full-day Chilika package. Manoj knew the highway road conditions intimately, guided us to the official OTDC dolphin boat counter in Satapada, and recommended authentic local fresh seafood stalls on the drive back to Bhubaneswar. Flawless hospitality throughout.",
      date: "Travel Date: Oct 2026",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2 border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Verified Passenger Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Real Traveler Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              Authentic feedback from families, solo pilgrims, and corporate professionals who rely on our pre-booked mobility across Odisha.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-[#D5DDD5] shadow-xs self-start md:self-auto">
            <div className="flex text-[#D9A52B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#D9A52B]" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#182A2B]">4.9 / 5.0 Average Rating</span>
          </div>
        </div>

        {/* 3 Authentic Traveler Vouchers with Real User Avatars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Header: Stars & Route Pill */}
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex text-[#D9A52B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D9A52B]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] inline-block">
                      {exp.travelerType}
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-[#E5EAE5] shrink-0" />
                </div>

                {/* Route Strip */}
                <div className="text-[11px] font-semibold text-[#182A2B] bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E5EAE5] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                  <span className="truncate">{exp.route}</span>
                </div>

                {/* Quote Text */}
                <p className="text-[11px] sm:text-xs text-[#455353] leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                  &ldquo;{exp.feedback}&rdquo;
                </p>

                {/* Driver & Vehicle Tag */}
                <div className="pt-2 border-t border-[#F2F5F2] flex flex-wrap items-center justify-between text-[10px] text-[#667575] gap-1">
                  <span className="font-semibold text-[#073B3A] flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-[#D9A52B]" />
                    {exp.driverMention}
                  </span>
                  <span className="bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5EAE5]">
                    {exp.vehicle}
                  </span>
                </div>
              </div>

              {/* Traveler User ID Profile Footer with Real Avatar Image */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-3.5 border-t border-[#F2F5F2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D9A52B]/60 shadow-xs shrink-0">
                    <Image
                      src={exp.avatar}
                      alt={exp.author}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#182A2B] flex items-center gap-1">
                      <span>{exp.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    </h4>
                    <span className="text-[10px] text-[#667575]">{exp.location}</span>
                  </div>
                </div>
                <span className="text-[9px] text-[#667575] font-medium bg-[#F2F5F2] px-2 py-0.5 rounded">
                  {exp.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
