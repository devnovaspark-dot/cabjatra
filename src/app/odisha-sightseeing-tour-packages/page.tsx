import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function OdishaSightseeingTourPackagesPage() {
  const destinations = [
    {
      title: "Puri & Konark Coastal Belt",
      desc: "Revered Jagannath Temple, Chandrabhaga Beach, and the colossal Sun Temple along the famous Marine Drive casuarina corridor.",
      tag: "Coastal Heritage",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Jagannath Temple", "Konark Sun Temple", "Chandrabhaga Beach", "Marine Drive"],
    },
    {
      title: "Chilika Lake & Satapada Lagoon",
      desc: "Asia's largest brackish water lagoon featuring playful Irrawaddy dolphins, migratory birds, and tranquil motorboat cruises to Rajhans island.",
      tag: "Eco Wildlife Lagoon",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Irrawaddy Dolphins", "OTDC Cruise Pier", "Rajhans Island", "Sea-Mouth Sandbar"],
    },
    {
      title: "Ekamra Kshetra & Temple City",
      desc: "Over 500 ancient Kalinga temples in Bhubaneswar, including Lingaraj, Mukteswar, Rajarani, and the ancient Jain caves of Khandagiri.",
      tag: "Temple City Trail",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lingaraj Temple", "Mukteswar Temple", "Rajarani Temple", "Khandagiri Caves"],
    },
    {
      title: "Dhauli Shanti Stupa & Kalinga War",
      desc: "The historic white peace pagoda on Daya River hill, where Emperor Ashoka renounced warfare and embraced Buddhism after the Kalinga War.",
      tag: "Peace Pagoda",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["White Peace Pagoda", "Ashokan Rock Inscriptions", "Daya River Valley", "Light & Sound Show"],
    },
    {
      title: "Raghurajpur Heritage Craft Village",
      desc: "A living museum where master artisans practice ancient Pattachitra scroll painting, palm-leaf engraving, and wooden toy carving.",
      tag: "Heritage Craft Village",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Pattachitra Scroll Art", "Palm-Leaf Carving", "Artisan Workshops", "Gotipua Dance Academy"],
    },
    {
      title: "Gopalpur-on-Sea & Tampara Lake",
      desc: "A serene colonial beach town in southern Odisha with virgin golden sands, quiet casuarina groves, and motorized watersports at Tampara Lake.",
      tag: "Southern Coastline",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Gopalpur Light House", "Quiet Golden Sands", "Tampara Lake Boating", "Casuarina Groves"],
    },
  ];

  const packages = [
    {
      title: "Odisha Golden Triangle Sightseeing",
      subtitle: "Bhubaneswar • Puri • Konark • Dhauli",
      duration: "3 Days / 2 Nights",
      badge: "Flagship Circuit",
      approxPrice: "From ₹6,850 (Sedan)",
      highlights: [
        "Private AC cab with doorstep hotel & airport pickup",
        "Lingaraj, Dhauli Stupa, Pipili & Konark Sun Temple",
        "Jagannath Temple darshan & Puri Beach sunset",
        "Zero surge pricing & transparent highway tolls",
      ],
    },
    {
      title: "Golden Triangle + Chilika Dolphin Safari",
      subtitle: "Heritage, Beaches & Natural Wildlife",
      duration: "4 Days / 3 Nights",
      badge: "Complete Odisha Tour",
      approxPrice: "From ₹8,950 (Sedan)",
      highlights: [
        "Covers complete Golden Triangle plus Chilika Satapada",
        "Private motorboat coordination for Irrawaddy dolphin sightings",
        "Raghurajpur heritage craft village excursion",
        "Chilled dual-zone AC vehicle with safe luggage custody",
      ],
    },
    {
      title: "Bhubaneswar Same-Day Sightseeing",
      subtitle: "Capital City Architecture & Peace Pagoda",
      duration: "1 Day (8 Hrs / 80 Km)",
      badge: "Day Tour",
      approxPrice: "From ₹1,850 (Sedan)",
      highlights: [
        "All major Bhubaneswar temples & Khandagiri Jain caves",
        "Dhauli Peace Pagoda & tribal craft shopping at Ekamra Haat",
        "Flexible pickup from hotel, station, or airport",
        "No waiting charges during museum or cave visits",
      ],
    },
    {
      title: "Puri-Konark Marine Drive Coastal Tour",
      subtitle: "Sun Temple, Chandrabhaga & Sacred Darshan",
      duration: "1 Day (Same-Day Excursion)",
      badge: "Scenic Highway",
      approxPrice: "From ₹2,450 (Sedan)",
      highlights: [
        "Breathtaking 35 km Marine Drive coastal highway drive",
        "UNESCO Sun Temple & Chandrabhaga Beach surf",
        "Ramachandi temple & river confluence halt",
        "Direct drop at Puri resort or Bhubaneswar",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Day 01",
      title: "Bhubaneswar Heritage & Arrival to Puri",
      desc: "Pickup from BBI Airport or Railway Station. Sightseeing at Lingaraj Temple, Mukteswar, Rajarani, and Dhauli Shanti Stupa. Stop at Pipili village for famous appliqué handicrafts. Drive to Puri, check in at your coastal hotel, and spend a relaxing evening at the Golden Beach.",
      highlights: ["Lingaraj Temple", "Dhauli Peace Pagoda", "Pipili Craft Bazaar", "Puri Golden Beach"],
    },
    {
      day: "Day 02",
      title: "Puri Jagannath Darshan, Raghurajpur & Chilika Lake",
      desc: "Early morning sacred darshan at Sri Jagannath Temple. Savor Anand Bazaar Mahaprasad. Proceed to Satapada on Chilika Lake for a 2-hour motorboat safari to spot rare Irrawaddy dolphins. Visit the artisan village of Raghurajpur before returning to Puri.",
      highlights: ["Lord Jagannath Temple", "Satapada Boat Cruise", "Dolphin Sanctuary", "Raghurajpur Village"],
    },
    {
      day: "Day 03",
      title: "Puri to Konark via Marine Drive Coastal Highway & Departure",
      desc: "Drive along the picturesque Marine Drive coastal expressway. Stop at Ramachandi Beach and Chandrabhaga Beach. Explore the monumental Konark Sun Temple. Complete your tour with drop-off at Bhubaneswar Airport or Railway Station.",
      highlights: ["Marine Drive Highway", "Ramachandi Beach", "Konark Sun Temple", "Bhubaneswar Drop"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "100% Private Cab Freedom",
      desc: "No sharing with strangers or waiting for crowded tour buses. You travel strictly with your private group on your preferred schedule.",
    },
    {
      title: "Seasoned Highway Drivers",
      desc: "Our drivers hold over 5+ years of driving experience across Odisha highways and act as helpful local advisors for temple darshan and dining.",
    },
    {
      title: "Zero Hidden Kilometer Surges",
      desc: "We quote fixed transparent rates. A simple 10% advance deposit locks your vehicle, with the remaining 90% settled at journey drop.",
    },
    {
      title: "Elderly & Family Friendly",
      desc: "Spacious sedans and Innova Crystas with easy ingress, comfortable legroom, and safe luggage custody during temple visits.",
    },
    {
      title: "Flexible Halt Durations",
      desc: "Take as much time as you like at tourist spots, beachside shacks, or handicraft villages with zero driver rush.",
    },
    {
      title: "Doorstep Pickup & Drop",
      desc: "Complimentary meet-and-greet at Biju Patnaik Airport (BBI), railway stations, or your city resort.",
    },
  ];

  const inclusions = [
    "Private air-conditioned commercial yellow-board vehicle (Sedan, SUV, or Tempo)",
    "Dedicated driver allowances, toll taxes, state permits, and fuel charges",
    "Doorstep pickup and return drop at your designated location",
    "Safe luggage custody inside cab during extended temple visits",
    "Flexible sightseeing halts and authentic local dhaba suggestions",
    "Chilled dual-zone AC and complimentary bottled water",
  ];

  const exclusions = [
    "Monument entry fees (e.g. Konark Sun Temple ASI entry ticket)",
    "Chilika Lake OTDC motorboat safari tickets",
    "Temple priest / Panda offerings and VIP darshan tokens",
    "Hotel accommodation & personal meals (available upon request)",
    "Airport parking receipts (settled at actuals)",
  ];

  const faqs = [
    {
      q: "What is the best time of year for an Odisha sightseeing tour?",
      a: "October through March is the peak tourism season, offering pleasant, sunny weather with cool coastal breezes. However, temple tours and coastal getaways operate comfortably year-round in our air-conditioned vehicles.",
    },
    {
      q: "Can we start our Odisha sightseeing tour from Puri or Kataka instead of Bhubaneswar?",
      a: "Yes! Our private cab tours can begin from any location in Odisha, including Bhubaneswar Airport, Puri Railway Station, Kataka, or your designated hotel.",
    },
    {
      q: "Are temple priority darshan tickets included in the cab package?",
      a: "Cabjatra specializes in private commercial transport, driver allocation, and luggage safety. Temple entry is generally free, but any special panda assistance or puja tokens are settled directly by the traveler.",
    },
    {
      q: "Which vehicle is recommended for a 4-day Odisha tour?",
      a: "For couples and small families (up to 4 passengers), a Sedan (Swift Dzire / Toyota Etios) is very comfortable. For families with elderly parents or extra luggage, an Innova Crysta is highly recommended for its superior suspension and dual AC.",
    },
    {
      q: "How do I secure my booking?",
      a: "You can book directly on our website or connect with our WhatsApp operations desk. A nominal 10% advance deposit confirms your car and driver, with the 90% balance paid directly at the end of the trip.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Odisha Sightseeing Tour Packages"
      subtitle="Discover Odisha's glorious temples, pristine coastal highways, and eco-wildlife lagoons by private AC cab"
      tagline="Curated private sightseeing itineraries with verified drivers and 100% commercial yellow-board fleet"
      badge="Comprehensive Odisha Sightseeing &bull; All Key Corridors"
      heroImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1600&auto=format&fit=crop"
      overview="Experience the rich soul of Odisha with our curated sightseeing cab packages. From the soaring spire of the Puri Jagannath Temple and the UNESCO World Heritage Sun Temple at Konark, to the tranquil waters of Chilika Lake and the ancient caves of Bhubaneswar, travel in total comfort with a private air-conditioned vehicle, verified local driver, and flexible sightseeing stops designed around your family."
      durationBadge="1 to 5 Days • 100% Flexible"
      startingFromNote="Transparent Day Tariffs • 10% Advance"
      destinations={destinations}
      packages={packages}
      itineraryDays={itineraryDays}
      whyChoosePoints={whyChoosePoints}
      inclusions={inclusions}
      exclusions={exclusions}
      faqs={faqs}
      bookingTourSlug="golden-triangle"
    />
  );
}
