"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  variant = "light",
  showTagline = true,
  className = "",
}) => {
  // Responsive dimensions based on size
  const iconDimensions = {
    sm: "w-7 h-7 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
  }[size];

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-2xl",
    lg: "text-xl sm:text-3xl",
  }[size];

  const taglineSizes = {
    sm: "text-[7px]",
    md: "text-[7.5px] sm:text-[8.5px]",
    lg: "text-[8.5px] sm:text-[10px]",
  }[size];

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Bespoke Luxury Emblem: Fusion of Konark Sun Temple 24-Spoke Wheel & Chariot Compass */}
      <div
        className={`${iconDimensions} rounded-2xl bg-gradient-to-br from-[#0C4E4B] via-[#073B3A] to-[#031C1D] border-t border-white/30 shadow-[0_4px_16px_rgba(7,59,58,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] flex items-center justify-center p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(217,165,43,0.35)]`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#D9A52B] transition-transform duration-700 group-hover:rotate-45"
        >
          {/* Outer Sun Wheel Chariot Rim */}
          <circle
            cx="24"
            cy="24"
            r="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 1.5"
            className="opacity-60"
          />
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="1.75"
          />

          {/* 8 Cardinal Konark Chariot Spokes */}
          <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="11.27" y1="11.27" x2="36.73" y2="36.73" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="11.27" y1="36.73" x2="36.73" y2="11.27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

          {/* Intermediate Decorative Rays */}
          <circle cx="24" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="24" cy="38.5" r="1.5" fill="currentColor" />
          <circle cx="9.5" cy="24" r="1.5" fill="currentColor" />
          <circle cx="38.5" cy="24" r="1.5" fill="currentColor" />

          {/* Inner Chariot Hub Core (Medallion) */}
          <circle cx="24" cy="24" r="7.5" fill="#041F20" stroke="currentColor" strokeWidth="1.75" />
          
          {/* Central Mobility Diamond Star */}
          <path
            d="M24 19.5L25.6 22.4L28.5 24L25.6 25.6L24 28.5L22.4 25.6L19.5 24L22.4 22.4L24 19.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`${titleSizes} font-black font-display tracking-tight ${
              isLight ? "text-white" : "text-[#182A2B]"
            }`}
          >
            CAB
          </span>
          <span
            className={`${titleSizes} font-black font-display tracking-tight text-[#D9A52B] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]`}
          >
            JATRA
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
            <span
              className={`${taglineSizes} uppercase font-bold tracking-[0.24em] ${
                isLight ? "text-[#E0ECEA]/75" : "text-[#667575]"
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

