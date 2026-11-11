"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Star,
  MapPin,
  Car,
  Camera,
  Heart,
} from "lucide-react";
import { QuickBookingWidget } from "./QuickBookingWidget";

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  location: string;
  badge: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "marine-drive",
    image:
      "https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=2400&auto=format&fit=crop",
    title: "Puri – Konark Marine Drive",
    location: "Coastal Highway Corridor, Odisha",
    badge: "Scenic Coastal Drive",
  },
  {
    id: "coastal-palms",
    image:
      "https://images.unsplash.com/photo-1761531429136-9a21cb706fe7?q=85&w=2400&auto=format&fit=crop",
    title: "Odisha Coastal Highway",
    location: "Palm-lined Highway NH-316",
    badge: "100% Commercial Fleet",
  },
  {
    id: "happy-roadtrip",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=2400&auto=format&fit=crop",
    title: "Golden Triangle Pilgrimage",
    location: "Puri Jagannath Dham & Konark",
    badge: "Happy Travelers Road Trip",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch scenic background every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative text-white overflow-hidden pt-20 sm:pt-26 lg:pt-30 pb-8 sm:pb-10 lg:pb-12 border-b border-black/20">
      {/* High-Resolution HD Background with Car in Motion along Scenic Odisha Corridors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          key={slide.id}
          src={slide.image}
          alt={`${slide.title} - ${slide.location}`}
          fill
          priority
          className="object-cover object-center scale-102 transition-all duration-1000 animate-in fade-in"
        />

        {/* Balanced cinematic gradient overlay: ensures car in motion & landscape remain vibrant while text & booking pass are 100% crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/50 via-50% to-[#011415]/85" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/35 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Floating Scenic Location Badge & Switcher */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10.5px] sm:text-xs text-[#FAF9F5] shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-bold text-[#D9A52B]">{slide.title}</span>
            <span className="text-white/60 hidden sm:inline">&bull;</span>
            <span className="text-white/85 hidden sm:inline">{slide.location}</span>
          </div>

          {/* Quick Scene Switcher Dots */}
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-5 h-1.5 bg-[#D9A52B]"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white"
                }`}
                title={s.title}
              />
            ))}
          </div>
        </div>

        {/* Clean, Spacious & Uncluttered Header */}
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {/* Tradition & Mobility Collaborative Kicker */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-[#D9A52B] shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D9A52B]" />
            <span>Sacred Temples &bull; Coastal Corridors &bull; Chauffeur Distinction</span>
          </div>

          {/* Majestic Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-lg">
            Discover Timeless Odisha, <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Traveled in Private Comfort.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
            From punctual BBI airport pickups and sacred pilgrimages to Puri &amp; Konark, to scenic drives along Marine Drive—experience dedicated commercial chauffeurs with guaranteed on-time dispatch.
          </p>

          {/* Happy Customer Social Proof Pill with Real Traveler Avatars */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-[#D9A52B]/40 shadow-lg">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                  alt="Debabrata G. - Happy Passenger"
                  className="w-7 h-7 rounded-full border-2 border-[#D9A52B] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop"
                  alt="Ananya D. - Happy Passenger"
                  className="w-7 h-7 rounded-full border-2 border-[#10B981] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                  alt="Vikramaditya R. - Happy Passenger"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-left text-[11px] leading-tight">
                <div className="flex items-center gap-1 font-bold text-white">
                  <span className="text-[#D9A52B]">★★★★★</span>
                  <span>14,200+ Happy Guests</span>
                </div>
                <span className="text-[10px] text-[#A7F3D0] block">
                  Puri &bull; Konark &bull; BBI Airport &bull; Chilika
                </span>
              </div>
            </div>

            {/* Assurance Pills */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>10% Advance Deposit Model</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>100% Commercial Fleet</span>
            </div>
          </div>
        </div>

        {/* Clean, Streamlined Concierge Booking Terminal */}
        <div className="max-w-5xl mx-auto">
          <QuickBookingWidget />
        </div>
      </div>
    </section>
  );
};
