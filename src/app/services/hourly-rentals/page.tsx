import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Hourly & Day Car Rentals — CABJATRA Odisha",
  description:
    "Hire a private car and chauffeur by the hour in Bhubaneswar and Cuttack. 4-hour, 8-hour, and 12-hour packages for business meetings, shopping, and temple tours.",
};

export default function HourlyRentalsPage() {
  return (
    <ServiceDetailPage
      title="Hourly & Day Rentals"
      subtitle="Dedicated car and chauffeur at your service for city meetings, errands, and temple tours"
      tagline="Move around town with zero waiting anxiety"
      badge="Flexible Packages"
      heroImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
      overview="Need to attend multiple meetings across Patia, Saheed Nagar, and Secretariat? Or taking your family for a full-day temple tour of Lingaraj, Mukteshwar, and Khandagiri caves? Keep a private CABJATRA chauffeur and comfortable vehicle on standby for your entire schedule."
      whyUsPoints={[
        {
          title: "Zero Repeated Re-Bookings",
          desc: "Never wait in the heat trying to find a new ride between stops. Your car and driver wait patiently at your destination until you are ready.",
        },
        {
          title: "Multi-Stop Convenience",
          desc: "Make as many intermediate stops as your errands require. Safe luggage storage inside the vehicle while you shop or attend conferences.",
        },
        {
          title: "Economical Packaged Pricing",
          desc: "Choose from 4 Hrs / 40 Km, 8 Hrs / 80 Km, or 12 Hrs / 120 Km slabs with clear overtime / excess km rates disclosed upfront.",
        },
      ]}
      routeFares={[
        {
          route: "Short Errands Package (4 Hrs / 40 Km)",
          distance: "Up to 40 km",
          approxDuration: "4 Hours duration",
          sedanEstimate: "₹1,199",
          suvEstimate: "₹1,799",
        },
        {
          route: "Standard Day Package (8 Hrs / 80 Km)",
          distance: "Up to 80 km",
          approxDuration: "8 Hours duration (Recommended)",
          sedanEstimate: "₹1,899",
          suvEstimate: "₹2,699",
        },
        {
          route: "Full Day Extended (12 Hrs / 120 Km)",
          distance: "Up to 120 km",
          approxDuration: "12 Hours duration",
          sedanEstimate: "₹2,599",
          suvEstimate: "₹3,599",
        },
      ]}
      inclusions={[
        "Chauffeur and car on continuous standby during the booked time slot",
        "Air-conditioning operational throughout all transit intervals",
        "Assistance with luggage loading and city parking coordination",
        "Option to extend hours on request with transparent per-hour tariffs",
      ]}
      exclusions={[
        "Excess kilometre charges beyond package threshold (billed at ₹12/km Sedan, ₹16/km SUV)",
        "Excess hourly waiting beyond booked slot (billed at ₹150/hr)",
        "Municipal parking tickets and mall parking receipts",
      ]}
      bookingCategoryKey="hourly"
      serviceFaq={[
        {
          q: "What happens if my meetings run longer than 8 hours?",
          a: "You can easily extend your hourly package! Just inform your chauffeur or contact our dispatch desk. Extra hours and extra kilometres are billed at standard, pre-disclosed rates.",
        },
        {
          q: "Can I use an hourly package to go between Bhubaneswar and Cuttack?",
          a: "Yes! As long as total distance and duration fit your chosen package, you can freely travel between twin cities Bhubaneswar and Cuttack.",
        },
      ]}
    />
  );
}

