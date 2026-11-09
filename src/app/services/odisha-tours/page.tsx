import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Palmtree,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";
import { ODISHA_TOURS } from "@/data/destinations";
import { COMPANY_CONFIG } from "@/data/company";

export const metadata = {
  title: "Odisha Tour Packages & Circuits — CABJATRA",
  description:
    "Curated private cab tours across Odisha: Golden Triangle (Bhubaneswar, Puri, Konark), Chilika Lake boat safaris, Dhauli Peace Pagoda, and temple heritage trails.",
};

export default function OdishaToursServicePage() {
  return (
    <div className="bg-sand-50/50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#021617] via-[#062F31] to-[#041F20] text-white pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1626014303757-6467368e7b16?q=80&w=1400&auto=format&fit=crop"
            alt="Odisha Tours"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/90 text-xs font-semibold text-accent-300 border border-brand-800">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              <span>Curated Odisha Heritage Circuits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              Odisha Tour Packages
            </h1>

            <p className="text-lg text-slate-200 font-medium">
              Explore the Golden Triangle, sacred Jagannath Dham, coastal Marine Drive, and Chilika wildlife with private chauffeur-driven comfort.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every tour itinerary is designed with thoughtful pacing, safe luggage custody during temple visits, and knowledgeable chauffeurs who understand local traditions and darshan timings.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/book-tour"
                className="px-6 py-3.5 rounded-xl bg-accent-400 hover:bg-accent-500 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Customize &amp; Book a Tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Circuits Showcase */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold font-display text-brand-950">
              Popular Odisha Itineraries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select any of our pre-designed private circuits or customize your dates and vehicle size.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ODISHA_TOURS.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={tour.heroImage}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-brand-900/90 text-white px-3 py-1 rounded-full text-[11px] font-bold">
                      {tour.duration}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-xs text-accent-300 font-semibold">
                        Starting from {tour.startingCity}
                      </div>
                      <h3 className="text-xl font-bold font-display text-white mt-0.5">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tour.tagline}
                    </p>

                    {/* Destinations Strip */}
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                        Key Stops:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.destinations.map((d, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary Preview */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase text-slate-500">
                        Itinerary Highlights:
                      </div>
                      {tour.itinerary.map((it, idx) => (
                        <div key={idx} className="text-xs text-slate-700 bg-sand-50/70 p-2.5 rounded-xl border border-slate-100">
                          <strong className="text-brand-900 block font-semibold">{it.day}: {it.title}</strong>
                          <span className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">{it.desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Indicative Tariff */}
                    <div className="p-3 rounded-xl bg-brand-50 border border-brand-100">
                      <div className="text-[10px] uppercase font-bold text-slate-500">
                        Indicative Cab Tariff:
                      </div>
                      <div className="text-sm font-extrabold text-brand-950 mt-0.5">
                        {tour.indicativePrice.sedan} (Prime Sedan)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/book-tour?tour=${tour.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-xs font-bold transition flex items-center justify-center gap-2 group-hover:bg-accent-500 group-hover:text-slate-950 shadow-sm"
                  >
                    <span>Customize This Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Chauffeur Integrity Guarantee</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Odisha Pilgrimage &amp; Temple Safety
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Temple visits to Sri Jagannath Dham and Konark involve complex security lines and mobile phone restrictions. Your CABJATRA chauffeur guards your luggage safely in the locked air-conditioned car, providing you full tranquility during spiritual darshans.
          </p>
        </div>
      </section>
    </div>
  );
}

