import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Cab Service in Bhubaneswar — Airport, Outstation & City Cabs | CABJATRA",
  description:
    "Book reliable cab service in Bhubaneswar with CABJATRA. 24/7 BBI airport pickups, Infocity IT corridor rides, and intercity cabs to Puri & Kataka with verified drivers.",
};

export default function CabServiceInBhubaneswarPage() {
  return (
    <ServiceDetailPage
      title="Cab Service in Bhubaneswar"
      subtitle="Punctual BBI Airport transfers, Infocity IT rides, and intercity temple highway cabs"
      tagline="Odisha's certified commercial cab service with guaranteed on-time dispatch"
      badge="Bhubaneswar City & Airport Hub"
      heroImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=1600&auto=format&fit=crop"
      overview="Experience seamless, hassle-free cab booking across the Temple City. Whether landing at Biju Patnaik International Airport (BBI), commuting to Infocity and Patia tech parks, or heading out on an intercity pilgrimage to Puri, CABJATRA delivers 100% yellow-board commercial AC vehicles, background-cleared local drivers, and zero surge pricing."
      whyUsPoints={[
        {
          title: "BBI Airport Live Flight Tracking",
          desc: "We track incoming flights in real-time. If your flight into Bhubaneswar is delayed, your driver automatically adjusts arrival time with zero extra waiting charges.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=800&auto=format&fit=crop",
          tag: "BBI Airport Radar Sync",
          badge: "✓ Zero Delay Surcharges",
        },
        {
          title: "Zero Last-Minute Cancellations",
          desc: "Never get stranded. Unlike generic ride-hailing apps with rampant driver cancellations, every CABJATRA booking is manually assigned and backed by our dispatch guarantee.",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=800&auto=format&fit=crop",
          tag: "Pre-Assigned Chauffeur",
          badge: "✓ 0% App Cancellation",
        },
        {
          title: "Fixed Transparent Kilometre Pricing",
          desc: "No peak hour surge traps, no offline AC negotiation haggling. Guaranteed vehicle allocation locks your ride, with transparent billing settled at your destination drop.",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop",
          tag: "Fixed Kilometer Tariffs",
          badge: "✓ Transparent Fixed Tariffs",
        },
      ]}
      routeFares={[
        {
          route: "BBI Airport ⇄ Master Canteen / Old Town",
          distance: "12 km approx",
          approxDuration: "25–35 Mins",
          sedanEstimate: "₹450 - ₹550",
          suvEstimate: "₹750 - ₹900",
        },
        {
          route: "BBI Airport ⇄ Patia / Infocity / KIIT",
          distance: "18 km approx",
          approxDuration: "35–50 Mins",
          sedanEstimate: "₹550 - ₹700",
          suvEstimate: "₹950 - ₹1,150",
        },
        {
          route: "Bhubaneswar ⇄ Puri Golden Beach (One-Way)",
          distance: "60 km approx",
          approxDuration: "1 hr 20 min Direct",
          sedanEstimate: "₹1,650 - ₹1,950",
          suvEstimate: "₹2,600 - ₹3,000",
        },
        {
          route: "Bhubaneswar ⇄ Kataka Badambadi / CDA",
          distance: "28 km approx",
          approxDuration: "40 min via NH-16",
          sedanEstimate: "₹850 - ₹1,050",
          suvEstimate: "₹1,400 - ₹1,650",
        },
      ]}
      inclusions={[
        "100% yellow-board commercial AC sedan or SUV with clean seat covers",
        "Police-verified, background-checked professional driver",
        "Doorstep pickup and luggage assistance at terminal or residence",
        "Toll gate navigation and transparent digital billing invoice",
      ]}
      exclusions={[
        "BBI Airport commercial parking booth tickets (billed actuals)",
        "State highway toll receipts on outstation extensions",
        "Night driving allowance for travel extending beyond 10:00 PM",
      ]}
      bookingCategoryKey="bhubaneswar"
      serviceFaq={[
        {
          q: "How early should I book a cab for BBI Airport pickup?",
          a: "We recommend booking at least 2 to 4 hours in advance. For emergency or immediate dispatch, you can also contact our Bhubaneswar WhatsApp Operations Desk directly for rapid vehicle allocation.",
        },
        {
          q: "Can I book a Bhubaneswar cab for a full day of temple visits?",
          a: "Yes! We offer flexible hourly packages (4 Hr / 40 Km and 8 Hr / 80 Km) covering Lingaraj Temple, Rajarani, Mukteshwar, Dhauli Peace Pagoda, and Khandagiri Caves.",
        },
        {
          q: "What payment methods are supported?",
          a: "You can secure your ride with instant online booking via UPI, GPay, PhonePe, or Cards, and pay directly at drop via cash or UPI with zero surge pricing.",
        },
      ]}
    />
  );
}
