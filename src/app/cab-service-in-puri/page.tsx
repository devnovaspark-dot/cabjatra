import React from "react";
import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Divinity Meets Safe Travel in Puri | Cab Service in Puri — CABJATRA",
  description:
    "Your sacred Puri Yatra, driven with care, featuring reliable temple trips, VIP parking access, and Marine Drive rides. 100% commercial yellow-board cabs, zero surge pricing.",
  keywords: [
    "Cab Service in Puri",
    "Puri taxi service",
    "Jagannath temple cab",
    "Puri to Konark Marine Drive cab",
    "Puri cab booking",
    "CABJATRA Puri",
  ],
};

export default function CabServiceInPuriPage() {
  return (
    <ServiceDetailPage
      title="Cab Service in Puri"
      subtitle="Your sacred Puri Yatra, driven with care, featuring reliable temple trips, VIP parking access, and Marine Drive rides"
      heroHeadline="Divinity Meets Safe Travel in Puri"
      heroSubtitle="Your sacred Puri Yatra, driven with care, featuring reliable temple trips, VIP parking access, and Marine Drive rides"
      tagline="Pilgrimage-ready commercial fleet with courteous drivers who know every temple bypass"
      badge="Puri Dham & Coastal Circuit"
      heroImage="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=1920&auto=format&fit=crop"
      heroPills={[
        "100% Commercial Yellow-Plate",
        "Zero-Surge Policy",
        "Dual-Zone Chilled AC",
        "Real-Time Flight Sync",
      ]}
      heroAssurances={[
        "At Your Doorstep, Never Late, Never Missed.",
        "Zero Last-Minute Cancellations",
        "No sudden drop-offs or excuses.",
        "Clear, Upfront Pricing",
      ]}
      overview="Visit the holy abode of Mahaprabhu Jagannath with complete peace of mind. CABJATRA provides dedicated commercial AC cabs in Puri for temple darshan, hotel check-ins along the Golden Beach, Marine Drive coastal tours to Konark, and return transfers to Bhubaneswar Airport. Our drivers hold designated temple corridor permits and treat senior family members with the utmost respect."
      routesSectionSubtitle="Clear fare prices for regular service. Book your cab ahead of time, and never have to worry about any surge fees!"
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
      whyChooseTitle="Why Travellers Choose Our Cab Service in Puri"
      whyChooseSubtitle="End last-minute cancellations and surge pricing. CABJATRA offers a cab for every pace on your journey to Puri, with a fully verified crew and a clean vehicle."
      whyUsPoints={[
        {
          title: "Temple Corridor & Parking Mastery",
          desc: "Our drivers do not park in police-designated zones near Singhadwara and the Grand Road (Bada Danda), avoiding pilgrim gridlock so your family can walk minimal distances.",
          image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=800&auto=format&fit=crop",
          tag: "Temple Corridor Pass",
          badge: "Minimal Walking",
        },
        {
          title: "Senior Citizen & Pilgrim Friendly",
          desc: "Spacious vehicles with easy boarding, enough boot space for sacred Mahaprasad earthen pots and luggage, and patient drivers who wait calmly during extended temple rituals.",
          image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=800&auto=format&fit=crop",
          tag: "Senior Comfort Cabs",
          badge: "Mahaprasad Care",
        },
        {
          title: "Bespoke Marine Drive Coastal Halts",
          desc: "Love leisurely ocean drives from Puri to Konark through unhurried halts at Ramachandi Beach, Chandrabhaga Beach zero metered stress.",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=85&w=800&auto=format&fit=crop",
          tag: "Marine Drive Highway",
          badge: "Flexible Halts",
        },
      ]}
      cabjatraPoints={[
        {
          factor: "0% Cancellations",
          text: "Your chauffeur is allotted in advance, so your ride never gets cancelled at the last minute.",
        },
        {
          factor: "No Surge Pricing",
          text: "Pay a clear, fixed per-kilometre rate even during peak hours or late at night.",
        },
        {
          factor: "100% Commercial Fleet",
          text: "Travel safely in verified, yellow-board commercial vehicles driven by professionals.",
        },
        {
          factor: "Guaranteed Chilled AC",
          text: "Enjoy a cool, comfortable cabin with the AC running on every single trip.",
        },
        {
          factor: "Instant Confirmation",
          text: "Book ahead with peace of mind; your cab is locked in the moment you reserve.",
        },
        {
          factor: "24/7 Human Support",
          text: "Reach our dedicated team anytime via phone or WhatsApp, day or night.",
        },
      ]}
      genericSubtitle="Reliable platform drivers with frequent cancellations and dynamic surge charges."
      genericPoints={[
        {
          factor: "DRIVER CANCELLATION RATE",
          text: "Frequent (30%–40% peak cancellations)",
        },
        {
          factor: "PEAK & MIDNIGHT SURG",
          text: "1.5x to 2.5x Sudden Surge Multipliers",
        },
        {
          factor: "FLEET REGISTRATION",
          text: "Mixed / Unregulated Private Plates",
        },
        {
          factor: "AIR CONDITIONING GUARANTEE",
          text: "Frequent Driver Refusals / Extra Haggling",
        },
        {
          factor: "ADVANCE BOOKING CERTAINTY",
          text: "Uncertain (Searches driver 15 mins before)",
        },
        {
          factor: "SUPPORT & DISPATCH DESK",
          text: "Automated Chatbot Run-arounds",
        },
      ]}
      genericFooterNote="High cancellation rates & unverified private vehicles during peak hours."
      howItWorksTitle="How it works:"
      howItWorksSubtitle="We offer complete transparency and hassle-free service and ensure 100% on-time pick-up for you."
      customSteps={[
        {
          num: "001",
          title: "Select Route & Vehicle",
          desc: "Enter the location and the date of pick-up, together with your choice of Sedan, SUV or Tempo car type.",
          badge: "On-time, door-to-door pick-up",
        },
        {
          num: "002",
          title: "Real-Time Booking Confirmation",
          desc: "Our booking team immediately confirms your booking. They then also allocate your private hire car and issue a WhatsApp booking voucher.",
          badge: "Driver allocated 2 hours beforehand",
        },
        {
          num: "003",
          title: "Enjoy assured, cool onboard conditions",
          desc: "Your confirmed driver will be waiting 15 mins before your scheduled pick-up time with air-con already switched on. Payment can be made either by UPI or in cash upon drop-off.",
          badge: "Complete clarity is provided.",
        },
      ]}
      charterClaritySubtitle="We eliminate billing surprises and offline haggling before your journey even begins."
      inclusionsSubtitle="Zero hidden embellishments on your basic quote"
      inclusions={[
        "Private commercial AC Sedan (Dzire/Etios) or SUV (Innova Crysta)",
        "Experienced driver with thorough knowledge of Puri Dham temple regulations",
        "Waiting buffer during temple darshan and beach exploration",
        "Doorstep pickup from any hotel, resort, or ashram in Puri",
      ]}
      inclusionsFooter="Transparent Kilometre Metering • Dedicated Climate-Controlled Cottage"
      exclusionsSubtitle="Settled directly with physical tax or parking slips"
      exclusions={[
        "Puri Municipality temple parking toll passes (paid actuals at barrier)",
        "OTDC boat ticket charges at Chilika / Satapada",
        "Personal guide or temple pandit offerings",
      ]}
      exclusionsFooter="UPI or cash at drop-off time"
      bookingCategoryKey="puri"
      faqSectionTitle="Frequently Asked Questions Regarding Cab Service in Puri"
      serviceFaq={[
        {
          q: "Can the cab drop us directly near the Jagannath Temple gate?",
          a: "Due to local administration guidelines, private and commercial vehicles are parked at designated official parking grounds near Bada Danda or Old Jail Road. Our drivers guide you to the closest accessible point and assist elderly travellers.",
        },
        {
          q: "Can we book a round trip to Konark Sun Temple with waiting included?",
          a: "Yes! Our Puri to Konark package includes driving along the scenic Marine Drive, standby waiting at the Sun Temple and Chandrabhaga Beach, and return drop to your hotel.",
        },
        {
          q: "Is AC active throughout the journey?",
          a: "100% yes. All CABJATRA commercial vehicles have verified, functional dual-zone air conditioning with zero haggling.",
        },
        {
          q: "Will my cab cancel or charge extra during peak hours?",
          a: "Never. You get a pre-assigned driver with 0% cancellations and fixed, zero-surge pricing—even during busy temple rushes.",
        },
        {
          q: "How do I book and pay?",
          a: "Reserve online for instant WhatsApp confirmation, and pay via UPI or cash once you reach your drop-off.",
        },
      ]}
      readyToConfirmTitle="Ready to Confirm Your Cab Service in Puri?"
      readyToConfirmSubtitle="Submit your travel route and date. Our dispatch team allocates a certified commercial yellow-board car and sends your verified driver voucher with instant confirmation."
      readyToConfirmBadge="Dedicated Dispatch Desk Active 24/7"
    />
  );
}
