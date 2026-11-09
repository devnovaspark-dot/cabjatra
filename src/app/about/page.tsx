import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { PlaceholderNotice } from "@/components/common/PlaceholderNotice";

export const metadata = {
  title: "About Us — CabJatra Odisha Mobility Platform",
  description:
    "Learn about CabJatra: our mission, customer service philosophy, operating hubs across Odisha, and transparent pre-booked chauffeur travel standards.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      {/* Editorial Hero */}
      <section className="bg-gradient-to-b from-[#041F20] via-[#062F31] to-[#041F20] text-white pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-20 border-b border-[#073B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073B3A] text-[10px] font-semibold text-[#D9A52B] border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Odisha Travel &amp; Mobility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5]">
              About CabJatra
            </h1>

            <p className="text-xs sm:text-sm text-[#E0ECEA]/80 leading-relaxed">
              Every Journey Begins with CabJatra. We are dedicated to providing reliable pre-booked cab services, comfortable journeys, and thoughtfully planned travel experiences across Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Business Overview & Mission */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B] bg-[#FAF9F5] border border-[#E5EAE5] px-2.5 py-0.5 rounded-md inline-block">
                Our Foundation &amp; Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
                A Principled Approach to Odisha Travel
              </h2>

              <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
                Traveling across Odisha—whether landing at Biju Patnaik International Airport, traveling for family darshan in Puri, or exploring architectural wonders at Konark—deserves complete certainty.
              </p>

              <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
                Traditional on-demand hailing apps often lead to frustrating driver cancellations, unexpected surge multipliers during festivals, and erratic vehicle hygiene. CabJatra was built to eliminate that friction by specializing in <strong>pre-booked, verified journeys</strong>.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#182A2B]">
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-1">
                  <h4 className="font-bold text-[#073B3A]">Zero Surge Traps</h4>
                  <p className="text-[11px] text-[#667575]">
                    Transparent tariffs that remain consistent during rain, odd hours, and festival rushes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-1">
                  <h4 className="font-bold text-[#073B3A]">10% Advance Model</h4>
                  <p className="text-[11px] text-[#667575]">
                    You only deposit 10% after we verify vehicle availability. Remaining 90% is settled upon trip completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E5EAE5] shadow-card relative h-72 sm:h-88 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=900&auto=format&fit=crop"
                  alt="Konark Sun Temple Odisha"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062F31]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-semibold text-[#D9A52B] uppercase tracking-wider">
                    Our Mission
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug">
                    To make Odisha&apos;s cultural wealth and urban corridors accessible through dignified, safe, and punctual chauffeur travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Network */}
      <section className="py-14 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Our Operating Network
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5">
              We operate exclusively across confirmed hubs in Odisha to guarantee prompt service and high vehicle standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {COMPANY_CONFIG.operatingCities.map((city) => (
              <div
                key={city.code}
                className="p-4 rounded-xl bg-white border border-[#E5EAE5] text-center shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] mx-auto flex items-center justify-center font-bold text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-bold text-xs text-[#182A2B]">{city.name}</h4>
                <span className="text-[10px] text-[#D9A52B] font-semibold block mt-0.5">
                  {city.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Legal Entity Disclosure */}
      <section className="py-12 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-2.5">
            <h3 className="text-xs sm:text-sm font-bold text-[#182A2B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#073B3A]" />
              <span>Corporate &amp; Operational Disclosure</span>
            </h3>
            <p className="text-xs text-[#667575] leading-relaxed">
              &quot;CabJatra&quot; is a specialized mobility brand identity operated under the laws of the Republic of India. In accordance with transparency standards, our operational parameters, fleet partner checks, and contact credentials are maintained with full accountability.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <PlaceholderNotice label="Registered Legal Entity" field={COMPANY_CONFIG.legalBusinessName} />
              <PlaceholderNotice label="Central Hub" field="Bhubaneswar, Odisha" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#062F31] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF9F5]">
            Experience Odisha With CabJatra
          </h2>
          <p className="text-xs sm:text-sm text-[#E0ECEA]/80 max-w-xl mx-auto">
            Have an upcoming flight to BBI, a business commute, or a family pilgrimage? Let our team handle the road.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/book-cab"
              className="px-5 py-2.5 rounded-xl bg-[#D9A52B] hover:bg-[#c89423] text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#073B3A] hover:bg-[#073B3A]/80 border border-white/10 text-white font-semibold text-xs"
            >
              Contact Operations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
