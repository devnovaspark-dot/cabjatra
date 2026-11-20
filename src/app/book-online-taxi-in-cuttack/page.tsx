import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Book Online Taxi in Cuttack — High Court, SCB Medical & Twin City Transit | CABJATRA",
  description:
    "Book online taxi in Cuttack with CABJATRA. Guaranteed non-cancelled cabs for Orissa High Court, SCB Medical College, CDA sectors, and Twin-City NH-16 highway transit.",
};

export default function BookOnlineTaxiInCuttackPage() {
  return (
    <ServiceDetailPage
      title="Book Online Taxi in Cuttack"
      subtitle="High Court legal appointments, SCB Medical transit, and Twin-City NH-16 express rides"
      tagline="Punctual corporate mobility, healthcare transfers, and legal transit connecting Cuttack & Bhubaneswar"
      badge="Cuttack Silver City & Twin-City NH-16"
      heroImage="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=85&w=1600&auto=format&fit=crop"
      overview="Experience reliable online taxi booking across Cuttack Silver City. CABJATRA offers dedicated point-to-point and hourly cabs connecting CDA Sectors, Badambadi Bus Stand, Cuttack Railway Station, Orissa High Court, Ravenshaw University, and SCB Medical College. Avoid generic ride-hailing drivers who cancel at the last minute — our dispatch desk ensures your car arrives exactly when you need it."
      whyUsPoints={[
        {
          title: "Twin-City NH-16 Highway Express",
          desc: "Seamless 40-minute direct transit between Cuttack (CDA / Badambadi) and Bhubaneswar (Patia / Master Canteen / BBI Airport) via the smooth NH-16 corridor.",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop",
          tag: "NH-16 Express Corridor",
          badge: "✓ 40-Min Twin Transit",
        },
        {
          title: "High Court & Medical Priority Dispatch",
          desc: "Never miss crucial morning court call-overs or OPD appointments. We assign verified drivers who know Cuttack's ring roads and bypasses inside out.",
          image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=85&w=800&auto=format&fit=crop",
          tag: "Legal & Healthcare Priority",
          badge: "✓ On-Time Arrival",
        },
        {
          title: "Zero Cancellation Guarantee",
          desc: "Unlike app-based aggregators with frequent driver cancellations, every CABJATRA reservation is confirmed by our operations team and dispatched with absolute certainty.",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=800&auto=format&fit=crop",
          tag: "Dispatch Assurance",
          badge: "✓ 0% App Cancellation",
        },
      ]}
      routeFares={[
        {
          route: "Cuttack Badambadi / CDA ⇄ Bhubaneswar Master Canteen",
          distance: "28 km approx",
          approxDuration: "40 Mins via NH-16",
          sedanEstimate: "₹850 - ₹1,050",
          suvEstimate: "₹1,400 - ₹1,650",
        },
        {
          route: "Cuttack ⇄ Biju Patnaik Airport (BBI Direct Drop)",
          distance: "35 km approx",
          approxDuration: "50 Mins Direct",
          sedanEstimate: "₹950 - ₹1,150",
          suvEstimate: "₹1,550 - ₹1,850",
        },
        {
          route: "Cuttack ⇄ Puri Jagannath Temple (One-Way / Day Return)",
          distance: "90 km approx",
          approxDuration: "2 hrs via NH-316",
          sedanEstimate: "₹2,200 - ₹2,550",
          suvEstimate: "₹3,300 - ₹3,800",
        },
        {
          route: "Cuttack Local Hourly Rental (4 Hrs / 40 Km)",
          distance: "High Court, SCB, Ravenshaw, CDA",
          approxDuration: "4 Hours Standby",
          sedanEstimate: "₹1,200 - ₹1,450",
          suvEstimate: "₹1,850 - ₹2,200",
        },
      ]}
      inclusions={[
        "Air-conditioned commercial sedan (Dzire, Etios) or SUV (Innova, Ertiga)",
        "Experienced highway and city driver fluent in Odia, Hindi, and English",
        "Doorstep pickup anywhere in Cuttack (CDA, Cantonment, Badambadi, Chauliaganj)",
        "Luggage assistance and 24/7 central dispatch monitoring",
      ]}
      exclusions={[
        "Highway toll plaza charges on NH-16 (paid actuals if applicable)",
        "Parking slip charges at court premises or hospitals",
        "Additional waiting time beyond agreed hourly package",
      ]}
      bookingCategoryKey="cuttack"
      serviceFaq={[
        {
          q: "Can I book a taxi from Cuttack directly to Bhubaneswar Airport (BBI)?",
          a: "Yes! We run regular point-to-point airport drops from all Cuttack neighborhoods directly to the departure terminal at BBI Airport with zero delays.",
        },
        {
          q: "How does the 10% advance deposit work?",
          a: "Once your cab details are assigned, you pay a simple 10% advance deposit via UPI or Card to lock the driver and vehicle. The remaining 90% is paid directly at drop.",
        },
        {
          q: "Can I hire a cab in Cuttack for waiting during High Court hearings?",
          a: "Absolutely. Our hourly local rentals (4 Hr / 40 Km or 8 Hr / 80 Km) include dedicated driver waiting while you attend legal proceedings or hospital appointments.",
        },
      ]}
    />
  );
}
