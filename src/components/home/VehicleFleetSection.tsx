"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { VEHICLE_FLEET } from "@/data/vehicles";

export const VehicleFleetSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Hatchback", "Sedan", "SUV", "Large car", "Mini bus"];

  const filteredVehicles = activeCategory === "All"
    ? VEHICLE_FLEET
    : VEHICLE_FLEET.filter((v) => v.category === activeCategory);

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-[#F2F5F2] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Verified Commercial Fleet Showroom</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Choose Your Vehicle Category
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              100% yellow-board commercial permits, functioning dual-zone AC, comprehensive passenger insurance, and verified drivers.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 panel-recessed rounded-2xl max-w-full overflow-x-auto scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 select-none ${
                  activeCategory === cat
                    ? "btn-skeuo-dark text-white font-bold"
                    : "text-[#556464] hover:text-[#182A2B] hover:bg-white/70"
                }`}
              >
                {cat === "All" ? "All Fleet" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid - Clean, 3D Only, Minimal & Relevant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E2E8E2] hover:border-[#073B3A]/40 hover:shadow-lg transition-all"
            >
              <div>
                {/* Real Commercial Vehicle Showcase */}
                <div className="relative h-44 sm:h-48 w-full bg-gradient-to-b from-[#FAF9F5] to-[#E8EFE8] overflow-hidden border-b border-[#D6E0D6]">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.models}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority={vehicle.id === "sedan" || vehicle.id === "hatchback"}
                  />
                  {/* Subtle lower gradient vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-[#062F31]/95 backdrop-blur-md text-[#FAF9F5] text-[9.5px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 shadow-md pointer-events-none z-10">
                    {vehicle.category}
                  </div>
                  {vehicle.tag && (
                    <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 bg-gradient-to-b from-[#F2C052] to-[#D9A52B] text-[#062F31] text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs pointer-events-none z-10">
                      {vehicle.tag}
                    </div>
                  )}
                </div>

                {/* Content: Name, Example Models, Specs */}
                <div className="p-3.5 sm:p-4 space-y-2.5">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B] leading-tight">
                      {vehicle.name}
                    </h3>
                    <p className="text-[11px] text-[#556464] font-medium mt-0.5 line-clamp-1" title={vehicle.models}>
                      {vehicle.models}
                    </p>
                  </div>

                  {/* Compact Specs Strip */}
                  <div className="flex items-center justify-between py-1.5 px-2.5 bg-[#FAF9F5] rounded-xl border border-[#E5EAE5] text-[11px] text-[#455353] font-semibold">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#073B3A]" />
                      {vehicle.passengers} Seats
                    </span>
                    <span className="text-[#C1DAD7]">•</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#073B3A]" />
                      {vehicle.luggage} Bags
                    </span>
                    <span className="text-[#C1DAD7]">•</span>
                    <span className="text-[#10B981] font-bold">AC</span>
                  </div>
                </div>
              </div>

              {/* Action Button & Base Rate */}
              <div className="p-3.5 sm:p-4 pt-0 border-t border-[#EEF2EE] flex items-center justify-between mt-2">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#778686] block leading-none">
                    Starting
                  </span>
                  <span className="text-sm font-extrabold text-[#062F31]">
                    ₹{vehicle.ratePerKm}/km
                  </span>
                </div>

                <Link
                  href={`/book-cab?vehicle=${vehicle.id}`}
                  className="py-2 px-3.5 rounded-xl btn-skeuo-dark text-white text-xs font-bold transition-all flex items-center gap-1.5 hover:brightness-110 active:scale-[0.98]"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
