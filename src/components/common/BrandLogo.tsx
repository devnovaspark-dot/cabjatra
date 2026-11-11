"use client";

import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Bespoke Odisha Luxury Mobility Brand Insignia & Crest
 * 
 * Fuses the sacred Konark Sun Temple 24-spoke Chariot Wheel (Chakra) with
 * sleek aerodynamic chauffeur mobility wings and high-precision metallic 24K gold foil optics.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  variant = "light",
  showTagline = true,
  className = "",
}) => {
  const isLight = variant === "light";

  // Dimensions & typography scale per size
  const iconSizeClasses = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
  }[size];

  const titleClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-5xl",
  }[size];

  const taglineClasses = {
    sm: "text-[6.5px] sm:text-[7.5px]",
    md: "text-[7px] sm:text-[8.5px]",
    lg: "text-[8.5px] sm:text-[10px]",
    xl: "text-[11px] sm:text-[13px]",
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* ================= ROYAL HERALDIC MEDALLION EMBLEM ================= */}
      <div
        className={`relative ${iconSizeClasses} rounded-[14px] sm:rounded-2xl p-1 sm:p-1.5 shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 ${
          isLight
            ? "bg-gradient-to-br from-[#0C4E4B] via-[#052C2D] to-[#011617] border border-[#D9A52B]/40 shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.35),0_0_12px_rgba(217,165,43,0.2)]"
            : "bg-gradient-to-br from-[#062F31] via-[#042022] to-[#011415] border border-[#D9A52B]/50 shadow-[0_4px_14px_rgba(6,47,49,0.3),inset_0_1px_0_rgba(255,255,255,0.25)]"
        }`}
      >
        {/* Specular curved sapphire glass glare */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-t-[13px] sm:rounded-t-[15px] pointer-events-none" />

        {/* Ambient Golden Core Backlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,165,43,0.35)_0%,transparent_70%)] pointer-events-none" />

        {/* The Sculpted Konark Sun Chariot & Aerodynamic Mobility Wings SVG */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-700 ease-out group-hover:rotate-45"
        >
          <defs>
            {/* 24K Radiant Specular Gold Foil Gradient */}
            <linearGradient id="goldSpecular" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="25%" stopColor="#F9D468" />
              <stop offset="55%" stopColor="#D9A52B" />
              <stop offset="85%" stopColor="#A87413" />
              <stop offset="100%" stopColor="#5A3E08" />
            </linearGradient>

            {/* Bright Gold Rim */}
            <linearGradient id="goldRim" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D9A52B" />
              <stop offset="50%" stopColor="#FFF5D6" />
              <stop offset="100%" stopColor="#C48E1D" />
            </linearGradient>

            {/* Inner Emerald Hub Radial Gradient */}
            <radialGradient id="emeraldHub" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0B4E4C" />
              <stop offset="70%" stopColor="#042022" />
              <stop offset="100%" stopColor="#011012" />
            </radialGradient>

            {/* Drop Shadow Filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* ================= AERODYNAMIC MOBILITY FLIGHT WINGS (HIGHWAY TRAVEL) ================= */}
          <path
            d="M8 38 C 12 48, 22 56, 32 58 C 42 56, 52 48, 56 38 C 50 44, 42 48, 32 49 C 22 48, 14 44, 8 38 Z"
            fill="url(#goldSpecular)"
            opacity="0.9"
            filter="url(#goldGlow)"
          />
          {/* Subtle Outer Wing Accents */}
          <path
            d="M5 33 C 9 40, 16 46, 24 50 C 18 47, 11 41, 7 35 Z"
            fill="url(#goldRim)"
            opacity="0.75"
          />
          <path
            d="M59 33 C 55 40, 48 46, 40 50 C 46 47, 53 41, 57 35 Z"
            fill="url(#goldRim)"
            opacity="0.75"
          />

          {/* ================= THE SACRED KONARK SUN CHARIOT WHEEL ================= */}
          {/* Outer Filigree Beaded Rim (24 Sun Hours) */}
          <circle
            cx="32"
            cy="30"
            r="23"
            stroke="url(#goldSpecular)"
            strokeWidth="1.75"
            strokeDasharray="2.5 1.5"
            className="opacity-80"
          />

          {/* Main Beveled Outer Chariot Rim */}
          <circle
            cx="32"
            cy="30"
            r="20"
            stroke="url(#goldRim)"
            strokeWidth="2.2"
            filter="url(#goldGlow)"
          />

          {/* Inner Decorative Beaded Channel */}
          <circle
            cx="32"
            cy="30"
            r="16.5"
            stroke="url(#goldSpecular)"
            strokeWidth="0.8"
            strokeDasharray="1.2 1"
            className="opacity-70"
          />

          {/* 8 Major Sculpted Konark Chariot Spokes */}
          {/* Cardinal: Vertical & Horizontal */}
          <path d="M31.2 11 H32.8 V49 H31.2 Z" fill="url(#goldSpecular)" />
          <path d="M13 29.2 H51 V30.8 H13 Z" fill="url(#goldSpecular)" />

          {/* Diagonal Spokes with Architectural Relief */}
          <g transform="rotate(45 32 30)">
            <path d="M31.3 12 H32.7 V48 H31.3 Z" fill="url(#goldSpecular)" />
            <path d="M14 29.3 H50 V30.7 H14 Z" fill="url(#goldSpecular)" />
          </g>

          {/* 8 Inter-Spoke Carved Sun Beads */}
          <circle cx="32" cy="14" r="1.5" fill="#FFF8E0" />
          <circle cx="32" cy="46" r="1.5" fill="#FFF8E0" />
          <circle cx="16" cy="30" r="1.5" fill="#FFF8E0" />
          <circle cx="48" cy="30" r="1.5" fill="#FFF8E0" />
          <circle cx="20.7" cy="18.7" r="1.2" fill="#FCE9AA" />
          <circle cx="43.3" cy="41.3" r="1.2" fill="#FCE9AA" />
          <circle cx="20.7" cy="41.3" r="1.2" fill="#FCE9AA" />
          <circle cx="43.3" cy="18.7" r="1.2" fill="#FCE9AA" />

          {/* ================= CENTRAL ROYAL CHARIOT HUB & COMPASS ================= */}
          {/* Center Hub Outer Ring */}
          <circle
            cx="32"
            cy="30"
            r="9.5"
            fill="url(#emeraldHub)"
            stroke="url(#goldSpecular)"
            strokeWidth="2"
            filter="url(#goldGlow)"
          />

          {/* Inner Concentric Core */}
          <circle
            cx="32"
            cy="30"
            r="6"
            stroke="url(#goldRim)"
            strokeWidth="1"
            opacity="0.85"
          />

          {/* Center Jewel: 4-Point Radiant Polaris Diamond Navigation Star */}
          <path
            d="M32 23.5 L33.8 28.2 L38.5 30 L33.8 31.8 L32 36.5 L30.2 31.8 L25.5 30 L30.2 28.2 Z"
            fill="url(#goldSpecular)"
            filter="url(#goldGlow)"
          />
          {/* Center Diamond Specular Core */}
          <circle cx="32" cy="30" r="1.2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* ================= BRAND TYPOGRAPHY ================= */}
      <div className="flex flex-col">
        {/* Main Logo Title: CAB + JATRA */}
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`${titleClasses} font-black font-display tracking-tight transition-colors ${
              isLight ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" : "text-[#073B3A]"
            }`}
          >
            CAB
          </span>
          <span
            className={`${titleClasses} font-black font-display tracking-tight bg-gradient-to-r from-[#FFF6DB] via-[#F4C54B] to-[#D9A52B] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(217,165,43,0.35)]`}
          >
            JATRA
          </span>
          {/* Mini Gold Crest Accent Dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A52B] ml-1 shadow-[0_0_6px_#D9A52B] hidden sm:inline-block" />
        </div>

        {/* Tagline: Odisha Chauffeur Mobility */}
        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
            <span
              className={`${taglineClasses} uppercase font-extrabold tracking-[0.22em] sm:tracking-[0.26em] ${
                isLight ? "text-[#E0ECEA]/85" : "text-[#4A6462]"
              }`}
            >
              Odisha Chauffeur Mobility
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
