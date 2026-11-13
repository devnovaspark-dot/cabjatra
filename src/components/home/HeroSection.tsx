"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  MessageSquare,
  Sparkles,
  Car,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

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
    id: "puri-dham",
    image:
      "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=2400&auto=format&fit=crop",
    title: "Sacred Jagannath Puri Dham",
    location: "Grand Road Heritage Corridor",
    badge: "Pilgrimage Chauffeur",
  },
  {
    id: "konark-sun-temple",
    image:
      "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop",
    title: "Konark Sun Temple & Chandrabhaga",
    location: "UNESCO World Heritage Highway",
    badge: "Cultural Day Tours",
  },
  {
    id: "chilika-lagoon",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=85&w=2400&auto=format&fit=crop",
    title: "Chilika Dolphin Lagoon Trail",
    location: "Asia's Largest Brackish Water Lagoon",
    badge: "Eco-Safari Corridor",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Smooth auto-slide every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative text-white overflow-hidden min-h-[75vh] sm:min-h-[82vh] lg:min-h-[86vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 border-b border-black/20">
      {/* High-Resolution HD Background Carousel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          key={slide.id}
          src={slide.image}
          alt={`${slide.title} - ${slide.location}`}
          fill
          priority
          className="object-cover object-center scale-102 transition-all duration-1000 animate-in fade-in"
        />

        {/* Balanced cinematic gradient overlay: ensures road, sky & landscape shine through while text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/55 via-50% to-[#011415]/90" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Slide Top Indicator Pill */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs text-[#FAF9F5] shadow-lg animate-in fade-in-50 duration-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-bold text-[#D9A52B]">{slide.title}</span>
            <span className="text-white/40 hidden sm:inline">&bull;</span>
            <span className="text-white/85 text-[11px] hidden sm:inline">{slide.location}</span>
          </div>
        </div>

        {/* Majestic Central Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 my-auto">
          {/* Direct, High-Converting Cab Booking Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-xl">
            Book Chauffeur Cabs <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Across Odisha.
            </span>
          </h1>

          {/* Punchy, Clear Subtitle */}
          <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Punctual BBI airport pickups, outstation highway journeys &amp; temple tours. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
          </p>

          {/* Happy Customer Social Proof Pill */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/40 shadow-xl">
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
              <div className="text-left text-xs leading-tight">
                <div className="flex items-center gap-1 font-bold text-white">
                  <span className="text-[#D9A52B]">★★★★★</span>
                  <span>14,200+ Happy Guests</span>
                </div>
                <span className="text-[10px] text-[#A7F3D0] block">
                  Puri &bull; Konark &bull; BBI Airport &bull; Chilika
                </span>
              </div>
            </div>
          </div>

          {/* Direct Booking Actions (Refined, Slender Hero CTAs) */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-xl mx-auto">
            <Link
              href="/book-cab"
              className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 hover:shadow-[0_6px_22px_rgba(217,165,43,0.45)] hover:scale-[1.01] active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
            >
              <Car className="w-4 h-4 text-[#062F31]" />
              <span>Book Your Chauffeur Cab</span>
              <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/book-tour"
              className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D9A52B]" />
              <span>Explore Curated Tours</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Pagination Dots & Assurance Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-10">
        {/* Clickable Slide Indicator Pills */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? "w-8 h-2 bg-[#D9A52B] shadow-md"
                  : "w-2 h-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/85">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
            <span>100% Yellow-Board Commercial Fleet</span>
          </span>
          <span className="hidden sm:inline text-white/30">&bull;</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D9A52B]" />
            <span>10% Advance Deposit Model</span>
          </span>
          <span className="hidden sm:inline text-white/30">&bull;</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-[#D9A52B]" />
            <span>Zero Surge Pricing Guarantee</span>
          </span>
        </div>
      </div>
    </section>
  );
};
