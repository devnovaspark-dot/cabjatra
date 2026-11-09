import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Compass, Sparkles, MapPin, Heart } from "lucide-react";
import { ODISHA_DESTINATIONS } from "@/data/destinations";

export const OdishaDestinationsSection: React.FC = () => {
  const puri = ODISHA_DESTINATIONS.find((d) => d.id === "puri") || ODISHA_DESTINATIONS[0];
  const konark = ODISHA_DESTINATIONS.find((d) => d.id === "konark") || ODISHA_DESTINATIONS[1];
  const chilika = ODISHA_DESTINATIONS.find((d) => d.id === "chilika") || ODISHA_DESTINATIONS[2];
  const otherDestinations = ODISHA_DESTINATIONS.filter(
    (d) => !["puri", "konark", "chilika"].includes(d.id)
  );

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Editorial Travelogue Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Explore Timeless Odisha
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5 max-w-xl">
              From the cosmic chariot stones of Konark to the sacred shores of Puri and the tranquil dolphin waters of Chilika Lagoon, explore Odisha with dedicated chauffeur comfort.
            </p>
          </div>

          <Link
            href="/book-tour"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:underline group"
          >
            <span>View All Curated Itineraries</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Magazine-Style Asymmetric Travelogue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* FEATURED STORY CARD: PURI (7 COLUMNS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo flex flex-col justify-between group">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop"
                alt="Puri Golden Beach and Bay of Bengal Coast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182A2B]/90 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-[#062F31]/90 backdrop-blur-md text-[#D9A52B] text-[10px] font-bold px-3 py-1 rounded-full border border-white/15">
                Heritage &amp; Blue Flag Coast • Char Dham
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9A52B] block">
                  {puri.odishaTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mt-0.5">
                  {puri.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
                {puri.overview}
              </p>

              <div className="space-y-2 pt-1 border-t border-[#F2F5F2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#667575] block">
                  Key Attractions in Circuit:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] text-[#455353]">
                  {puri.keyAttractions.map((attr, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#FAF9F5] border border-[#E5EAE5] shadow-xs">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2F5F2] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#073B3A] font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>{puri.driveTime}</span>
                </div>
                <Link
                  href="/book-tour?destination=puri"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-b from-[#084846] to-[#062F31] border-t border-white/20 hover:brightness-110 text-white text-xs font-bold inline-flex items-center gap-2 shadow-skeuo-button transition active:translate-y-0.5"
                >
                  <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Plan Puri Circuit</span>
                </Link>
              </div>
            </div>
          </div>

          {/* TWO STACKED DESTINATION CARDS: KONARK & CHILIKA (5 COLUMNS) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Konark Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo group flex flex-col justify-between h-full">
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={konark.heroImage}
                  alt={konark.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182A2B]/85 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#062F31]/90 backdrop-blur-md text-[#D9A52B] text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-white/15">
                  {konark.tag}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold font-display">{konark.name}</h4>
                  <div className="text-[10px] text-[#E0ECEA]/80 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D9A52B]" />
                    <span>{konark.driveTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#667575] leading-relaxed line-clamp-2">
                  {konark.overview}
                </p>
                <div className="pt-2 border-t border-[#F2F5F2] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#073B3A]">Marine Drive Route</span>
                  <Link
                    href="/book-tour?destination=konark"
                    className="text-xs font-bold text-[#073B3A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Circuit Details</span>
                    <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Chilika Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#D5DDD5] shadow-skeuo group flex flex-col justify-between h-full">
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={chilika.heroImage}
                  alt={chilika.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182A2B]/85 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#062F31]/90 backdrop-blur-md text-[#D9A52B] text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-white/15">
                  {chilika.tag}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold font-display">{chilika.name}</h4>
                  <div className="text-[10px] text-[#E0ECEA]/80 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D9A52B]" />
                    <span>{chilika.driveTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#667575] leading-relaxed line-clamp-2">
                  {chilika.overview}
                </p>
                <div className="pt-2 border-t border-[#F2F5F2] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#073B3A]">Dolphin Safaris &amp; Kalijai</span>
                  <Link
                    href="/book-tour?destination=chilika"
                    className="text-xs font-bold text-[#073B3A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Circuit Details</span>
                    <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RIBBON: 3 SUPPORTING DESTINATIONS (BHUBANESWAR, DHAULI, GOPALPUR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl p-4 border border-[#D5DDD5] shadow-skeuo hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={dest.heroImage}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9A52B] block">
                  {dest.tag}
                </span>
                <h4 className="text-sm font-bold text-[#182A2B] truncate group-hover:text-[#073B3A] transition-colors">
                  {dest.name}
                </h4>
                <div className="text-[10px] text-[#667575] flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#073B3A]" />
                  <span>{dest.driveTime}</span>
                </div>
                <Link
                  href={`/book-tour?destination=${dest.id}`}
                  className="text-[11px] font-bold text-[#073B3A] hover:underline inline-flex items-center gap-0.5 mt-1"
                >
                  <span>Explore Itinerary</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
