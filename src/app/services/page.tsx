import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Compass,
  Clock,
  Car,
  Palmtree,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { COMPANY_CONFIG } from "@/data/company";

export const metadata = {
  title: "Mobility & Tour Services — CabJatra Odisha",
  description:
    "Explore our complete suite of pre-booked cab services across Odisha: Airport transfers to BBI, intercity outstation cabs, hourly rentals, local rides, and curated tours.",
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Plane":
        return <Plane className="w-5 h-5 text-[#02146B]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#02146B]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#02146B]" />;
      case "Palmtree":
        return <Palmtree className="w-5 h-5 text-[#02146B]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#02146B]" />;
      default:
        return <Car className="w-5 h-5 text-[#02146B]" />;
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      {/* Services Hero */}
      <section className="bg-gradient-to-b from-[#000B3B] via-[#001162] to-[#000B3B] text-white pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-20 border-b border-[#02146B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#02146B] text-[10px] font-semibold text-[#FEC401] mb-3 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cab Service Standards</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5]">
            Our Services
          </h1>
          <p className="text-xs sm:text-sm text-[#F1F5F9]/80 mt-3 leading-relaxed">
            Discover dependable, comfortable, and transparent pre-booked mobility across Bhubaneswar, Puri, Kataka, Konark, and beyond.
          </p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8 lg:space-y-10">
          {SERVICES_DATA.map((srv, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5EAE5] shadow-soft hover:shadow-card transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative min-h-[160px] sm:min-h-[220px] lg:min-h-full ${
                    isReversed ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={srv.heroImage}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent lg:hidden" />
                  
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white shadow-xs flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-3.5 sm:space-y-5">
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#FEC401] bg-[#FAF9F5] border border-[#E5EAE5] px-2 sm:px-2.5 py-0.5 rounded-md inline-block">
                      {srv.idealFor}
                    </span>

                    <h2 className="text-lg sm:text-2xl font-bold font-display text-[#0F172A] mt-1.5 sm:mt-2">
                      {srv.title}
                    </h2>

                    <p className="text-xs text-[#667575] mt-1 sm:mt-2 leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    {/* Features Grid */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-2.5 sm:pt-3 border-t border-[#F2F5F2]">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#455353]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#02146B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Routes */}
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#F2F5F2]">
                      <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#667575] block mb-1 sm:mb-1.5">
                        Common Corridors:
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 text-[10.5px] sm:text-[11px] text-[#455353]">
                        {srv.popularRoutes.map((rt, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-[#F2F5F2] border border-[#E5EAE5]"
                          >
                            {rt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-2.5 sm:pt-3 border-t border-[#F2F5F2] flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                    <div className="text-[11.5px] sm:text-xs font-bold text-[#02146B]">
                      {srv.startingFareNote}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-[#E5EAE5] text-[#0F172A] text-xs font-semibold hover:bg-[#FAF9F5] transition"
                      >
                        Service Guide
                      </Link>

                      <Link
                        href={
                          srv.id === "odisha-tours"
                            ? "/book-tour"
                            : `/book-cab?service=${srv.slug}`
                        }
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#02146B] hover:bg-[#001162] text-white text-xs font-semibold transition inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Travel Banner Anchor */}
      <section id="corporate" className="py-8 sm:py-12 bg-white border-t border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001162] text-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-[#02146B] flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#02146B] text-[10px] font-bold text-[#FEC401]">
                <Briefcase className="w-3 h-3" />
                <span>Enterprise &amp; Institutional Accounts</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF9F5]">
                Corporate Fleet Management &amp; Event Mobility
              </h3>
              <p className="text-xs text-[#F1F5F9]/80 leading-relaxed">
                We cater to IT firms in Infocity Patia, academic conclaves, government delegations, and wedding logistics with consolidated billing estimates and dedicated fleet coordinators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FEC401] hover:bg-[#c89423] text-[#001162] font-bold text-xs text-center transition"
              >
                Request Corporate Quote
              </Link>
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#02146B] hover:bg-[#02146B]/80 border border-white/10 text-white font-semibold text-xs text-center transition flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FEC401]" />
                <span>Chat with Operations</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
