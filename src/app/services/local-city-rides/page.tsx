import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Local City Cabs — CABJATRA Bhubaneswar & Cuttack",
  description:
    "Pre-book dependable point-to-point city rides in Bhubaneswar and Cuttack. Zero driver cancellations, clean cars, and timely pickups for daily family and office commutes.",
};

export default function LocalCityRidesPage() {
  return (
    <ServiceDetailPage
      title="Local City Rides"
      subtitle="Dependable point-to-point urban transit without last-minute app cancellations"
      tagline="Guaranteed arrival when punctuality matters most"
      badge="Urban Mobility"
      heroImage="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop"
      overview="Tired of hailing app cabs that accept your ride only to cancel 10 minutes later? CABJATRA brings scheduled certainty back to urban travel. Pre-book your early morning railway connections, medical appointments at AIIMS or Apollo, or evening family visits with a verified driver arriving at your doorstep on time."
      whyUsPoints={[
        {
          title: "Guaranteed Car Allocation",
          desc: "Once confirmed, your ride is assigned to an active vehicle in our local fleet. You won't face sudden driver refusals or demands for offline cash.",
        },
        {
          title: "Spotless Sanitized Interiors",
          desc: "We enforce high cleanliness standards. Every car features fresh upholstery, functioning air-conditioning, and smoke-free interiors.",
        },
        {
          title: "Punctual Morning & Night Pickups",
          desc: "Catching an early 05:30 AM Vande Bharat Express or returning home from a late family dinner? Schedule with confidence.",
        },
      ]}
      routeFares={[
        {
          route: "Patia Infocity ⇄ Master Canteen (Railway Station)",
          distance: "14 km",
          approxDuration: "30 - 40 min",
          sedanEstimate: "₹450 - ₹550",
          suvEstimate: "₹750 - ₹900",
        },
        {
          route: "Saheed Nagar ⇄ AIIMS Bhubaneswar / Khandagiri",
          distance: "12 km",
          approxDuration: "25 - 35 min",
          sedanEstimate: "₹400 - ₹500",
          suvEstimate: "₹700 - ₹850",
        },
        {
          route: "Bhubaneswar Jaydev Vihar ⇄ Cuttack Badambadi",
          distance: "26 km",
          approxDuration: "45 min",
          sedanEstimate: "₹750 - ₹900",
          suvEstimate: "₹1,200 - ₹1,400",
        },
      ]}
      inclusions={[
        "Driver-driven AC hatchback or sedan reserved specifically for your scheduled time",
        "Doorstep pickup from residential complexes, hospitals, or hotels",
        "Driver contact sharing 20 minutes prior to pickup",
        "Direct point-to-point route transit",
      ]}
      exclusions={[
        "Multiple unscheduled route detours not requested during booking",
        "Extended wait time at intermediate locations beyond 15 minutes",
        "Municipal toll taxes if passing special toll barriers",
      ]}
      bookingCategoryKey="local"
      serviceFaq={[
        {
          q: "How far in advance should I book a local city ride?",
          a: "For guaranteed allocation, we recommend booking at least 2 to 4 hours in advance. For early morning pickups (before 07:00 AM), we advise booking the previous evening.",
        },
        {
          q: "Does the driver ask for extra cash beyond the estimated fare?",
          a: "Never. All fares adhere to our transparent quote. The 10% advance is credited, and the exact remaining balance is paid directly at the end of the trip.",
        },
      ]}
    />
  );
}

