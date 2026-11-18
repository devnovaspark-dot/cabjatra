"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
}

/**
 * Official CABJATRA Brand Identity Logo
 * 
 * Renders the authentic high-resolution brand insignia featuring the sacred Konark
 * Sun Chariot Wheel enclosed in the royal blue & radiant gold squircle emblem with
 * display typography.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  variant = "light",
  showTagline = true,
  className = "",
  iconOnly = false,
}) => {
  // Height and width scaling matching 3.19:1 aspect ratio of /images/Asset 2@2x.webp (2299x721)
  const sizeMap = {
    sm: {
      height: 36,
      width: 115,
      iconSize: 36,
      containerClass: "h-8 sm:h-9",
    },
    md: {
      height: 44,
      width: 140,
      iconSize: 44,
      containerClass: "h-10 sm:h-11",
    },
    lg: {
      height: 56,
      width: 178,
      iconSize: 56,
      containerClass: "h-12 sm:h-14",
    },
    xl: {
      height: 76,
      width: 242,
      iconSize: 76,
      containerClass: "h-16 sm:h-20",
    },
  }[size];

  if (iconOnly) {
    return (
      <div className={`relative inline-flex items-center shrink-0 group select-none ${className}`}>
        <Image
          src="/images/logo-icon.png"
          alt="CABJATRA Emblem"
          width={sizeMap.iconSize}
          height={sizeMap.iconSize}
          priority
          className="rounded-xl shadow-md object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center shrink-0 group select-none ${className}`}>
      {/* Official CABJATRA Master Logo Banner */}
      <div className={`relative ${sizeMap.containerClass} w-auto flex items-center`}>
        <Image
          src="/images/Asset 2@2x.webp"
          alt="CABJATRA — Odisha Cab Service"
          width={sizeMap.width}
          height={sizeMap.height}
          priority
          className="h-full w-auto object-contain rounded-lg sm:rounded-xl shadow-[0_4px_16px_rgba(0,17,98,0.35)] transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};
