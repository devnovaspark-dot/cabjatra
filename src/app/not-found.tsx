import React from "react";
import Link from "next/link";
import { Car, Compass, ArrowRight, Home, Phone } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-sand-50/60 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-900 mx-auto flex items-center justify-center font-black text-2xl font-display shadow-xs">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-display text-slate-900">
            Route Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            It looks like this destination doesn&apos;t exist on our map. Let&apos;s get your journey back on track.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to CABJATRA Home</span>
          </Link>

          <Link
            href="/book-cab"
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-brand-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition"
          >
            <Car className="w-4 h-4 text-brand-700" />
            <span>Book a Cab in Odisha</span>
          </Link>

          <Link
            href="/services"
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-brand-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition"
          >
            <Compass className="w-4 h-4 text-accent-600" />
            <span>Explore All Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          Need urgent dispatch assistance? Call{" "}
          <a
            href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
            className="text-brand-800 font-semibold hover:underline"
          >
            {COMPANY_CONFIG.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

