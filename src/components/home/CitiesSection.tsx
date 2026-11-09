import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export const CitiesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            <span>Verified Operational Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-display tracking-tight">
            Choose Your City
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            CABJATRA provides scheduled pickups and airport connections exclusively across approved operational hubs in Odisha.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_CONFIG.operatingCities.map((city) => (
            <div
              key={city.code}
              className="group bg-sand-50/60 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-brand-300 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-100 text-brand-900">
                    {city.badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    CODE: {city.code}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-900 transition-colors">
                  {city.name}
                </h3>
                
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {city.description}
                </p>

                {/* Popular Pickup Hubs in this City */}
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Pickup Points:
                  </div>
                  <ul className="space-y-1.5">
                    {city.pickupLocations.slice(0, 3).map((loc, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-200/60">
                <Link
                  href={`/book-cab?from=${encodeURIComponent(city.name)}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white group-hover:bg-brand-800 text-brand-900 group-hover:text-white border border-slate-300 group-hover:border-transparent text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-500 group-hover:text-accent-300" />
                  <span>Book Cab in {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Note */}
        <div className="mt-10 p-4 rounded-2xl bg-brand-950 text-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Need travel to an unlisted Odisha district?</strong> Contact our central dispatch desk directly for custom multi-day outstation quotes.
            </span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-slate-950 font-bold shrink-0 transition"
          >
            Enquire Custom Route
          </Link>
        </div>
      </div>
    </section>
  );
};

