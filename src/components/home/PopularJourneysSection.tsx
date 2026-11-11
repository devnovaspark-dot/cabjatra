import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, ShieldCheck, MapPin, Sparkles, Plane, Compass, Navigation } from "lucide-react";

export const PopularJourneysSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E5EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#073B3A] mb-2 bg-[#E0ECEA]/70 px-3 py-1 rounded-full border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Curated Highway Corridors</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
              Popular Journeys &amp; Routes
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 max-w-xl">
              Travel between Odisha&apos;s primary economic and spiritual hubs with verified commercial chauffeurs, guaranteed on-time departure, and clean air-conditioned vehicles.
            </p>
          </div>

          <Link
            href="/services/outstation-cabs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073B3A] hover:underline group"
          >
            <span>View All Outstation Corridors</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* BENTO 1: THE ICONIC CORRIDOR (BHUBANESWAR TO PURI) — 7 Columns, Large Feature */}
          <div className="lg:col-span-7 card-skeuo-dark rounded-2xl sm:rounded-3xl overflow-hidden relative group flex flex-col justify-between min-h-[340px] sm:min-h-[420px]">
            {/* Top Amber Ambient Sheen */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                alt="Bhubaneswar to Puri Golden Beach Highway"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021718] via-[#041F20]/80 to-transparent" />
            </div>

            {/* Top Badges */}
            <div className="relative z-10 p-5 sm:p-8 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-b from-[#F2C052] to-[#D9A52B] text-[#062F31] text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_6px_rgba(0,0,0,0.3)]">
                  ★ Most Booked Corridor
                </span>
                <span className="bg-black/40 backdrop-blur-md text-white text-[9.5px] sm:text-[10px] font-semibold px-3 py-1 rounded-full border border-white/20 shadow-xs">
                  NH-316 Highway
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#FAF9F5] font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>1 hr 20 min (60 km)</span>
              </div>
            </div>

            {/* Content & Action */}
            <div className="relative z-10 p-5 sm:p-8 space-y-3.5 sm:space-y-4">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-white drop-shadow-md">
                  Bhubaneswar ⇄ Puri Golden Beach
                </h3>
                <p className="text-xs sm:text-sm text-[#E0ECEA]/90 max-w-xl mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Direct highway transit via NH-316 to Lord Jagannath Temple &amp; the Blue Flag Golden Beach. Chauffeurs hold designated temple parking passes and know the Marine Drive bypass.
                </p>
              </div>

              {/* Highway Perks Strip */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-[#FAF9F5] pt-1">
                <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3 h-3 text-[#D9A52B]" />
                  <span>All Toll &amp; FASTag Included</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 shadow-xs">
                  <Navigation className="w-3 h-3 text-[#D9A52B]" />
                  <span>Doorstep Pickup &amp; Luggage Support</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 hidden sm:flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                  <span>Dedicated Temple Standby</span>
                </span>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                <div className="text-[10.5px] sm:text-[11px] text-[#D9A52B] font-semibold flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                  <span>14 Cabs Active in Corridor Today</span>
                </div>
                <Link
                  href="/book-cab?service=outstation&to=Puri%20Golden%20Beach"
                  className="px-5 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center gap-2"
                >
                  <span>Reserve Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* BENTO 2: BBI AIRPORT TRANSFERS — 5 Columns */}
          <div className="lg:col-span-5 card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group">
            <div className="relative h-40 sm:h-52 w-full overflow-hidden border-b border-[#D6E0D6]">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop"
                alt="Bhubaneswar BBI Airport Transfers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/30 to-transparent" />
              
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#062F31]/95 backdrop-blur-md text-[#D9A52B] text-[9.5px] sm:text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                <Plane className="w-3 h-3" />
                <span>BBI Airport Radar Sync</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-base sm:text-lg font-bold font-display drop-shadow-sm">Bhubaneswar Airport Transfers</div>
                <div className="text-[10.5px] sm:text-[11px] text-[#E0ECEA]/90 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#D9A52B]" />
                  <span>Citywide 20–40 Mins • Zero Delay Waiting Fees</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3">
              <p className="text-[11px] sm:text-xs text-[#556464] leading-relaxed line-clamp-3 sm:line-clamp-none">
                Pre-book your arrival or departure at Biju Patnaik International Airport. We track incoming flights live—if your flight is delayed, your driver automatically adjusts arrival with zero extra charge.
              </p>

              <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#073B3A] flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#D6E0D6] shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Terminal Gate Meet</span>
                </span>
                <Link
                  href="/book-cab?service=airport&to=Biju%20Patnaik%20Airport%20(BBI)"
                  className="px-4 py-2 rounded-xl btn-skeuo-dark text-white text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Book Airport Cab</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* BENTO 3: THE SUN TEMPLE & MARINE DRIVE CIRCUIT (KONARK) — 6 Columns */}
          <div className="lg:col-span-6 card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group">
            <div className="relative h-40 sm:h-52 w-full overflow-hidden border-b border-[#D6E0D6]">
              <Image
                src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=900&auto=format&fit=crop"
                alt="Majestic Konark Sun Temple stone architecture and carvings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/30 to-transparent" />
              
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#062F31]/95 backdrop-blur-md text-white text-[9.5px] sm:text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-md">
                Heritage &amp; Coastal Marine Drive
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-base sm:text-lg font-bold font-display drop-shadow-sm">Konark Sun Temple &amp; Chandrabhaga</div>
                <div className="text-[10.5px] sm:text-[11px] text-[#E0ECEA]/90 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#D9A52B]" />
                  <span>65 km from BBI • Scenic Coastal Route</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3">
              <p className="text-[11px] sm:text-xs text-[#556464] leading-relaxed line-clamp-3 sm:line-clamp-none">
                Drive along one of India&apos;s most breathtaking ocean roads from Puri to Konark. Includes dedicated waiting buffer for Sun Temple exploration, Chandrabhaga beach halts, and artisan stalls.
              </p>

              <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#073B3A] flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#D6E0D6] shadow-xs">
                  <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Standby Buffer Included</span>
                </span>
                <Link
                  href="/book-tour?destination=konark"
                  className="px-4 py-2 rounded-xl bg-gradient-to-b from-white to-[#EEF3EE] hover:bg-[#073B3A] text-[#073B3A] hover:text-white border border-[#CBD7CB] hover:border-transparent text-xs font-semibold inline-flex items-center gap-1.5 transition shadow-skeuo"
                >
                  <span>Explore Circuit</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* BENTO 4: TWIN CITY CORRIDOR (BHUBANESWAR TO CUTTACK) — 6 Columns */}
          <div className="lg:col-span-6 card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group">
            <div className="relative h-40 sm:h-52 w-full overflow-hidden border-b border-[#D6E0D6]">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop"
                alt="Highway transit between Bhubaneswar and Cuttack"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/30 to-transparent" />
              
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#062F31]/95 backdrop-blur-md text-white text-[9.5px] sm:text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-md">
                Twin City Transit Corridor
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-base sm:text-lg font-bold font-display drop-shadow-sm">Bhubaneswar ⇄ Cuttack Express</div>
                <div className="text-[10.5px] sm:text-[11px] text-[#E0ECEA]/90 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#D9A52B]" />
                  <span>28 km • 40 min Direct via NH-16</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3">
              <p className="text-[11px] sm:text-xs text-[#556464] leading-relaxed line-clamp-3 sm:line-clamp-none">
                Seamless mobility connecting Infocity, Patia, Master Canteen, and CDA Cuttack / Badambadi. Essential for High Court appointments, SCB Medical visits, and daily corporate mobility.
              </p>

              <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#073B3A] flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#D6E0D6] shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                  <span>Zero Cancellations</span>
                </span>
                <Link
                  href="/book-cab?service=local&to=Cuttack%20Badambadi"
                  className="px-4 py-2 rounded-xl bg-gradient-to-b from-white to-[#EEF3EE] hover:bg-[#073B3A] text-[#073B3A] hover:text-white border border-[#CBD7CB] hover:border-transparent text-xs font-semibold inline-flex items-center gap-1.5 transition shadow-skeuo"
                >
                  <span>Book Twin-City Ride</span>
                  <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
