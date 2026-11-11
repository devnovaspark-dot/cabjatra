"use client";

import React from "react";

interface GlassCelebrationOrbProps {
  className?: string;
  size?: "md" | "lg";
}

/**
 * 3D Glass Celebration Orb
 * Features a tactile glassmorphic sphere with specular curved reflections,
 * deep emerald caustic glow, and an animated checkmark with smooth spring physics.
 */
export function GlassCelebrationOrb({ className = "", size = "lg" }: GlassCelebrationOrbProps) {
  const isLg = size === "lg";

  return (
    <div className={`flex flex-col items-center justify-center relative select-none ${className}`}>
      {/* Outer ambient glow / aura */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-400/20 via-[#D9A52B]/25 to-teal-400/20 blur-2xl animate-pulse pointer-events-none" />

      {/* Radial Sparkle accents */}
      <div className="absolute -top-1 -right-2 w-3.5 h-3.5 text-[#D9A52B] animate-spin" style={{ animationDuration: "12s" }}>
        ✦
      </div>
      <div className="absolute -bottom-1 -left-2 w-3 h-3 text-emerald-400 animate-pulse">
        ✦
      </div>

      {/* The 3D Glass Sphere with bounce animation */}
      <div
        className={`relative ${
          isLg ? "w-20 h-20 sm:w-24 sm:h-24" : "w-16 h-16 sm:w-18 sm:h-18"
        } rounded-full glass-orb-3d flex items-center justify-center z-10`}
      >
        {/* Specular glare curved highlight (glass top-reflection) */}
        <div className="glass-orb-glare pointer-events-none" />

        {/* Caustic underside light reflection */}
        <div className="glass-orb-caustic pointer-events-none" />

        {/* Animated Checkmark with Drop Shadow and Spring Pop-In */}
        <div className="relative z-20 flex items-center justify-center animate-checkmark-spring">
          <svg
            className={`${
              isLg ? "w-10 h-10 sm:w-12 sm:h-12" : "w-8 h-8"
            } text-white filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Dynamic contact shadow on ground that pulses in sync with bounce */}
      <div className="glass-orb-shadow pointer-events-none" />
    </div>
  );
}
