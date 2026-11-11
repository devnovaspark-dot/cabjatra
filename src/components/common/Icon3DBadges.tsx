"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

interface Icon3DProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  interactive?: boolean;
}

/**
 * Photorealistic 3D Tactile Emerald Checkmark Badge
 * Crafted with skeuomorphic bevels, specular top glare reflection,
 * embossed drop shadows, and responsive tactile hover physics.
 */
export const Icon3DCheck: React.FC<Icon3DProps> = ({
  size = "md",
  className = "",
  interactive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-7 h-7 min-w-[28px]",
    md: "w-9 h-9 min-w-[36px]",
    lg: "w-12 h-12 min-w-[48px]",
  };

  const iconSizes = {
    sm: "w-4 h-4 stroke-[3]",
    md: "w-5 h-5 stroke-[3.2]",
    lg: "w-6 h-6 stroke-[3.5]",
  };

  return (
    <div
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 select-none transition-all duration-200 ${
        sizeClasses[size]
      } ${interactive ? "cursor-pointer active:scale-90" : ""} ${
        isHovered
          ? "scale-110 shadow-[0_10px_22px_rgba(16,185,129,0.55),0_2px_4px_rgba(0,0,0,0.12)]"
          : "shadow-[0_6px_16px_rgba(16,185,129,0.38),0_1.5px_3px_rgba(0,0,0,0.08)]"
      } ${className}`}
      style={{
        background: "linear-gradient(145deg, #34D399 0%, #10B981 35%, #059669 70%, #047857 100%)",
        boxShadow: isHovered
          ? "0 10px 22px rgba(16,185,129,0.55), inset 0 2px 2px rgba(255,255,255,0.85), inset 0 -3px 3px rgba(4,120,87,0.85)"
          : "0 6px 16px rgba(16,185,129,0.38), inset 0 1.5px 1.5px rgba(255,255,255,0.75), inset 0 -2.5px 3px rgba(4,120,87,0.75)",
      }}
      title="Verified Standard"
    >
      {/* Specular 3D Top Glare Crescent */}
      <span
        className="absolute top-1 inset-x-1.5 h-[38%] rounded-t-full pointer-events-none transition-opacity duration-200"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 100%)",
          opacity: isHovered ? 0.95 : 0.75,
        }}
      />

      {/* Embossed Bold White Check Icon */}
      <Check
        className={`text-white relative z-10 transition-transform duration-200 drop-shadow-[0_1.5px_2px_rgba(4,120,87,0.6)] ${
          iconSizes[size]
        } ${isHovered ? "scale-110" : ""}`}
      />
    </div>
  );
};

/**
 * Photorealistic 3D Tactile Crimson Cross Badge
 * Crafted with skeuomorphic bevels, specular top glare reflection,
 * embossed drop shadows, and responsive tactile hover physics.
 */
export const Icon3DCross: React.FC<Icon3DProps> = ({
  size = "md",
  className = "",
  interactive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-7 h-7 min-w-[28px]",
    md: "w-9 h-9 min-w-[36px]",
    lg: "w-12 h-12 min-w-[48px]",
  };

  const iconSizes = {
    sm: "w-4 h-4 stroke-[3]",
    md: "w-5 h-5 stroke-[3.2]",
    lg: "w-6 h-6 stroke-[3.5]",
  };

  return (
    <div
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 select-none transition-all duration-200 ${
        sizeClasses[size]
      } ${interactive ? "cursor-pointer active:scale-90" : ""} ${
        isHovered
          ? "scale-110 shadow-[0_10px_22px_rgba(239,68,68,0.55),0_2px_4px_rgba(0,0,0,0.12)]"
          : "shadow-[0_6px_16px_rgba(239,68,68,0.38),0_1.5px_3px_rgba(0,0,0,0.08)]"
      } ${className}`}
      style={{
        background: "linear-gradient(145deg, #F87171 0%, #EF4444 35%, #DC2626 70%, #991B1B 100%)",
        boxShadow: isHovered
          ? "0 10px 22px rgba(239,68,68,0.55), inset 0 2px 2px rgba(255,255,255,0.85), inset 0 -3px 3px rgba(153,27,27,0.85)"
          : "0 6px 16px rgba(239,68,68,0.38), inset 0 1.5px 1.5px rgba(255,255,255,0.75), inset 0 -2.5px 3px rgba(153,27,27,0.75)",
      }}
      title="Street Hailing Risk"
    >
      {/* Specular 3D Top Glare Crescent */}
      <span
        className="absolute top-1 inset-x-1.5 h-[38%] rounded-t-full pointer-events-none transition-opacity duration-200"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 100%)",
          opacity: isHovered ? 0.95 : 0.75,
        }}
      />

      {/* Embossed Bold White X Icon */}
      <X
        className={`text-white relative z-10 transition-transform duration-200 drop-shadow-[0_1.5px_2px_rgba(153,27,27,0.6)] ${
          iconSizes[size]
        } ${isHovered ? "scale-110" : ""}`}
      />
    </div>
  );
};

