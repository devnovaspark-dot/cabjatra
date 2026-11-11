"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Snowflake, Check, ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { VEHICLE_FLEET } from "@/data/vehicles";

export const VehicleFleetSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Sedan", "SUV", "Tempo Traveller"];

  const filteredVehicles = activeCategory === "All"
    ? VEHICLE_FLEET
    : VEHICLE_FLEET.filter((v) => v.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#F2F5F2] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Standardized Commercial Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Choose Your Vehicle Category
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              Every vehicle operates under a strict state commercial transport permit (yellow board), with functioning dual-zone AC, comprehensive passenger insurance, and verified chauffeurs.
            </p>
          </div>

          {/* Interactive Category Filter Pills - Scroll-Safe on Mobile */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white rounded-2xl border border-[#D5DDD5] shadow-skeuo max-w-full overflow-x-auto scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 select-none ${
                  activeCategory === cat
                    ? "bg-[#073B3A] text-white shadow-skeuo-button font-bold"
                    : "text-[#667575] hover:text-[#182A2B] hover:bg-[#FAF9F5]"
                }`}
              >
                {cat === "All" ? "All Fleet" : cat === "SUV" ? "SUVs (Innova)" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Visual with Real Automotive Aesthetic - Guaranteed Visible Height on Mobile */}
                <div className="relative h-44 sm:h-48 w-full bg-[#FAF9F5] overflow-hidden border-b border-[#E5EAE5]">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - CabJatra Odisha Fleet`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-[#062F31]/90 backdrop-blur-md text-[#FAF9F5] text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/15">
                    {vehicle.category}
                  </div>

                  {vehicle.tag && (
                    <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 bg-[#D9A52B] text-[#062F31] text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full shadow-sm">
                      {vehicle.tag}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 sm:bottom-3 left-3 right-3 text-white">
                    <span className="text-sm font-bold font-display drop-shadow-sm">{vehicle.name}</span>
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="grid grid-cols-3 divide-x divide-[#E5EAE5] border-b border-[#E5EAE5] bg-[#FAF9F5] py-2 text-center text-xs">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#182A2B] flex items-center gap-1 text-[11px] sm:text-xs">
                      <Users className="w-3.5 h-3.5 text-[#073B3A]" />
                      {vehicle.passengers}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#667575]">Seats</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#182A2B] flex items-center gap-1 text-[11px] sm:text-xs">
                      <Briefcase className="w-3.5 h-3.5 text-[#073B3A]" />
                      {vehicle.luggage}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#667575]">Bags</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#182A2B] flex items-center gap-1 text-[11px] sm:text-xs">
                      <Snowflake className="w-3.5 h-3.5 text-[#073B3A]" />
                      Dual AC
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#667575]">Climate</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                  <div className="text-[10px] sm:text-[11px] text-[#667575] bg-[#FAF9F5] p-2 rounded-xl border border-[#E5EAE5]">
                    <strong className="text-[#182A2B]">Standard Models:</strong> {vehicle.models}
                  </div>

                  <ul className="space-y-1 sm:space-y-1.5 pt-0.5">
                    {vehicle.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#455353]">
                        <Check className="w-3 h-3 text-[#073B3A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Fleet Verification Badge */}
                  <div className="pt-0.5">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF9F5] border border-[#D5DDD5] text-center shadow-skeuo-inset">
                      <div className="text-[8.5px] sm:text-[9px] uppercase font-bold text-[#667575]">
                        State Transport Permit
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#073B3A] mt-0.5 flex items-center justify-center gap-1 sm:gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                        <span>Commercial Yellow Board Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Select Action */}
              <div className="p-3.5 sm:p-5 pt-0">
                <Link
                  href={`/book-cab?vehicle=${vehicle.id}`}
                  className="w-full py-2 sm:py-2.5 px-3 rounded-xl bg-gradient-to-b from-[#084846] to-[#062F31] border-t border-white/20 hover:brightness-110 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-skeuo-button active:translate-y-0.5"
                >
                  <span>Select {vehicle.category}</span>
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
