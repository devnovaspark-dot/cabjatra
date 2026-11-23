import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Cab Service in Puri — Jagannath Temple, Golden Beach & Outstation | CABJATRA",
  description:
    "Pre-book dependable cab service in Puri with CABJATRA. Sacred Jagannath Temple darshan drops, Marine Drive coastal rides, and outstation cabs to Bhubaneswar airport.",
};

export default function CabServiceInPuriPage() {
  return (
    <ServiceDetailPage
      title="Cab Service in Puri"
      subtitle="Sacred temple transfers, VIP parking pass access, and scenic Marine Drive coastal cabs"
      tagline="Pilgrimage-ready commercial fleet with courteous drivers who know every temple bypass"
      badge="Puri Dham & Coastal Circuit"
      heroImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1600&auto=format&fit=crop"
      overview="Visit the holy abode of Mahaprabhu Jagannath with complete peace of mind. CABJATRA provides dedicated commercial AC cabs in Puri for temple darshan, hotel check-ins along the Golden Beach, Marine Drive coastal tours to Konark, and return transfers to Bhubaneswar Airport. Our drivers hold designated temple corridor permits and treat senior family members with the utmost respect."
      whyUsPoints={[
        {
          title: "Temple Corridor & Parking Mastery",
          desc: "Our drivers know approved police parking zones near Singhadwara and the Grand Road (Bada Danda), avoiding pilgrim gridlock so your family walks minimal distances.",
          image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=800&auto=format&fit=crop",
          tag: "Temple Corridor Pass",
          badge: "✓ Minimal Walking",
        },
        {
          title: "Senior Citizen & Pilgrim Friendly",
          desc: "Spacious vehicles with easy boarding, ample boot space for sacred Mahaprasad earthen pots and luggage, and patient drivers who wait calmly during extended temple rituals.",
          image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=800&auto=format&fit=crop",
          tag: "Senior Comfort Cabs",
          badge: "✓ Mahaprasad Care",
        },
        {
          title: "Bespoke Marine Drive Coastal Halts",
          desc: "Enjoy leisurely ocean drives from Puri to Konark with unhurried halts at Ramachandi Beach, Chandrabhaga Beach, and tender coconut stalls with zero metered stress.",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=85&w=800&auto=format&fit=crop",
          tag: "Marine Drive Highway",
          badge: "✓ Flexible Halts",
        },
      ]}
      routeFares={[
        {
          route: "Puri Hotels ⇄ Lord Jagannath Temple & Golden Beach",
          distance: "Local Circuit (4 Hrs / 40 Km)",
          approxDuration: "Half Day Circuit",
          sedanEstimate: "₹950 - ₹1,200",
          suvEstimate: "₹1,550 - ₹1,900",
        },
        {
          route: "Puri ⇄ Konark Sun Temple & Marine Drive (Return)",
          distance: "75 km round trip",
          approxDuration: "4–6 Hrs with Waiting",
          sedanEstimate: "₹1,550 - ₹1,850",
          suvEstimate: "₹2,350 - ₹2,750",
        },
        {
          route: "Puri ⇄ Satapada Chilika Lake (Dolphin Sanctuary)",
          distance: "100 km round trip",
          approxDuration: "6–8 Hrs Full Day",
          sedanEstimate: "₹2,100 - ₹2,450",
          suvEstimate: "₹3,100 - ₹3,600",
        },
        {
          route: "Puri ⇄ Bhubaneswar BBI Airport / Station (One-Way)",
          distance: "62 km approx",
          approxDuration: "1 hr 25 min via NH-316",
          sedanEstimate: "₹1,650 - ₹1,950",
          suvEstimate: "₹2,600 - ₹3,050",
        },
      ]}
      inclusions={[
        "Private commercial AC Sedan (Dzire/Etios) or SUV (Innova Crysta)",
        "Experienced driver with thorough knowledge of Puri Dham temple regulations",
        "Waiting buffer during temple darshan and beach exploration",
        "Doorstep pickup from any hotel, resort, or ashram in Puri",
      ]}
      exclusions={[
        "Puri Municipality temple parking toll passes (paid actuals at barrier)",
        "OTDC boat ticket charges at Chilika / Satapada",
        "Personal guide or temple panda offerings",
      ]}
      bookingCategoryKey="puri"
      serviceFaq={[
        {
          q: "Can the cab drop us directly near the Jagannath Temple gate?",
          a: "Due to local administration guidelines, private and commercial vehicles are parked at designated official parking grounds near Bada Danda or Old Jail Road. Our drivers guide you to the closest accessible point and assist elderly travelers.",
        },
        {
          q: "Can we book a round trip to Konark Sun Temple with waiting included?",
          a: "Yes! Our Puri to Konark package includes driving along the scenic Marine Drive, standby waiting at the Sun Temple and Chandrabhaga Beach, and return drop to your hotel.",
        },
        {
          q: "Is AC active throughout the journey?",
          a: "100% yes. All CABJATRA commercial vehicles have verified, functional dual-zone air conditioning with zero haggling.",
        },
      ]}
    />
  );
}
