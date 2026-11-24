import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function OdishaTourPackageByCabPage() {
  const destinations = [
    {
      title: "Bhubaneswar – The Temple City",
      desc: "In Bhubaneswar Odishas capital city you can explore temples, architectural landmarks, museums and cultural attractions. Bhubaneswar is a starting point for Odisha sightseeing tours.",
      tag: "Capital & Temple City",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lingaraj Temple", "Mukteswar Temple", "Dhauli Shanti Stupa", "Khandagiri Caves"],
    },
    {
      title: "Puri – The Spiritual Destination",
      desc: "Visit the Jagannath Temple walk through the vibrant streets of Puri and enjoy the beautiful coastline. Puri is a destination for family holidays and pilgrimage tours.",
      tag: "Jagannath Dham & Beach",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lord Jagannath Temple", "Puri Golden Beach", "Gundicha Temple", "Raghurajpur Village"],
    },
    {
      title: "Konark – Heritage & Architecture",
      desc: "Discover the Sun Temple of Konark a UNESCO World Heritage Site known for its magnificent stone architecture, sculptures and historical significance.",
      tag: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Konark Sun Temple", "Chandrabhaga Beach", "Puri-Konark Marine Drive", "ASI Museum"],
    },
    {
      title: "Chilika Lake – Nature & Scenic Beauty",
      desc: "Experience the beauty of Chilika Lake enjoy scenic surroundings visit popular lake destinations and explore the regions birdlife and boating experiences where available.",
      tag: "Asia's Largest Lagoon",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Satapada Boat Jetty", "Irrawaddy Dolphins", "Rajhans Island", "Scenic Lagoon Cruise"],
    },
    {
      title: "Dhauli – History & Peace",
      desc: "Explore Dhauli Shanti Stupa and the historic region associated with the Kalinga War and Emperor Ashoka.",
      tag: "Peace Pagoda & Kalinga War",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Dhauli White Stupa", "Ashokan Rock Edicts", "Daya River Viewpoint", "Light & Sound Show"],
    },
    {
      title: "Satapada – Dolphin & Lake Experience",
      desc: "Explore the Satapada region of Chilika, known for its lake views and dolphin-watching opportunities, subject, to local conditions.",
      tag: "Irrawaddy Dolphin Sanctuary",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Dolphin Point", "OTDC Cruise Pier", "Crab & Prawn Stalls", "Chilika Sea Mouth"],
    },
  ];

  const packages = [
    {
      title: "Bhubaneswar – Puri – Konark Tour Package",
      subtitle: "Explore Odishas known Golden Triangle, which includes temple architecture, spiritual places, historical spots and coastal adventures.",
      duration: "3 Days / 2 Nights or 4 Days",
      badge: "Golden Triangle Classic",
      approxPrice: "From ₹6,850 (Sedan)",
      highlights: [
        "Private AC Sedan/SUV for entire 3-day itinerary",
        "BBI Airport pickup & doorstep hotel drops",
        "Puri Jagannath Temple, Konark Sun Temple & Marine Drive",
        "Dhauli Peace Pagoda & Pipili craft village halts",
      ],
    },
    {
      title: "Puri – Konark Sightseeing Tour",
      subtitle: "See Jagannath Temple, Puri Beach, Konark Sun Temple and other places along the path.",
      duration: "1 Day / Same Day Return",
      badge: "Coastal Classic",
      approxPrice: "From ₹2,450 (Sedan)",
      highlights: [
        "Puri hotel pickup at your chosen morning hour",
        "Puri-Konark Marine Drive scenic coastal highway drive",
        "UNESCO Sun Temple & Chandrabhaga Beach halts",
        "Return drop at Puri Beach or Bhubaneswar",
      ],
    },
    {
      title: "Bhubaneswar Local Sightseeing Tour",
      subtitle: "Learn about the Temple City with a cab for visiting Lingaraj Temple, Mukteswar Temple, Rajarani Temple, Dhauli and other well-known places.",
      duration: "Full Day (8 Hrs / 80 Km)",
      badge: "Heritage Trail",
      approxPrice: "From ₹1,850 (Sedan)",
      highlights: [
        "Lingaraj Temple, Mukteswar, Rajarani & Parasurameswara",
        "Khandagiri & Udayagiri ancient Jain rock caves",
        "Dhauli Shanti Stupa overlooking Daya river",
        "Ekamra Haat tribal craft and souvenir shopping",
      ],
    },
    {
      title: "Puri – Chilika – Satapada Tour",
      subtitle: "Plan a trip from Puri to Chilika Lake and Satapada to enjoy the natural beauty of the area the views of the lake and the chance to see dolphins.",
      duration: "Full Day Excursion",
      badge: "Eco Lagoon Safari",
      approxPrice: "From ₹2,850 (Sedan)",
      highlights: [
        "Scenic highway drive from Puri to Satapada",
        "OTDC boat cruise coordination assistance",
        "Irrawaddy dolphin-spotting opportunities in Chilika",
        "Fresh coastal seafood and Rajhans island sandbar",
      ],
    },
    {
      title: "Odisha Family Tour Package",
      subtitle: "Have a trip for the family with easy sightseeing, good road travel and places that are good, for all ages.",
      duration: "4 Days / 3 Nights",
      badge: "Family & Seniors Friendly",
      approxPrice: "From ₹9,850 (Innova Crysta)",
      highlights: [
        "Spacious Innova Crysta with captain seats & dual AC",
        "Patient local driver who assists with elderly mobility",
        "Golden Triangle + Chilika Lake Satapada safari",
        "Zero luggage stress during extended temple darshan",
      ],
    },
    {
      title: "Customised Odisha Tour Package",
      subtitle: "Create your travel plan by picking places, sightseeing choices how long the trip will be, where to start and the type of cab you want.",
      duration: "100% Flexible",
      badge: "Bespoke Itinerary",
      approxPrice: "Transparent Kilometre Quote",
      highlights: [
        "Pick your exact pickup point, dates & travel duration",
        "Choose custom stopovers (Gopalpur, Sambalpur, Raghurajpur)",
        "Select Sedan, SUV Crysta, or Tempo Traveller",
        "Dedicated WhatsApp tour concierge assistance",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Day 1",
      title: "Bhubaneswar Local Sightseeing",
      desc: "Explore Bhubaneswar temples, heritage spots and cultural landmarks. I recommend adding Dhauli, Udayagiri and Khandagiri Caves if your schedule allows.",
      highlights: ["Lingaraj & Mukteswar Temples", "Dhauli Peace Pagoda", "Khandagiri Caves"],
    },
    {
      day: "Day 2",
      title: "Bhubaneswar to Puri",
      desc: "Travel to Puri visit Jagannath Temple explore sights and enjoy time at Puri Beach.",
      highlights: ["Pipili Craft Village", "Lord Jagannath Temple", "Puri Golden Beach"],
    },
    {
      day: "Day 3",
      title: "Puri to Konark & Return",
      desc: "Visit Konark Sun Temple, Chandrabhaga Beach and other sights along the coast, before returning.",
      highlights: ["Marine Drive Highway", "Chandrabhaga Beach", "Konark Sun Temple"],
    },
    {
      day: "Optional Extension",
      title: "Chilika Lake",
      desc: "Extend your Odisha road trip to Chilika Lake or Satapada for a nature‑focused experience.",
      highlights: ["Satapada Boat Cruise", "Irrawaddy Dolphin Spotting", "Rajhans Island"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Flexible Travel Plans",
      desc: "Pick the places you want to go the days you want to travel and the places you want to stop at during your holiday.",
    },
    {
      title: "Convenient Private Cab Travel",
      desc: "See Odisha using the ease of a cab for sightseeing trips between cities and trips that last several days.",
    },
    {
      title: "Customised Tour Itineraries",
      desc: "Design your trip based on how you are travelling what you like, how many people are in your group and where you want to go.",
    },
    {
      title: "Family & Group Travel",
      desc: "Make it easy for families, couples, friends and small groups to travel with vehicles that match what you need.",
    },
    {
      title: "Easy Tour Planning",
      desc: "Plan where you want to go where you want to start and your schedule in one place instead of arranging different transport options on your own.",
    },
    {
      title: "Explore More, at Your Own Pace",
      desc: "Spend time at the places you like best and plan stops along the way according to your schedule.",
    },
  ];

  const fleetVehicleDescriptions = {
    sedan: "A sedan is suitable for couples, small families and travellers who want a point-to-point journey or sightseeing travel.",
    suv: "An SUV is a choice for families, small groups and longer Odisha road trips that need extra space for people and bags.",
    tempo: "A Tempo Traveller works best for families, friends and group tours that are visiting multiple destinations together.",
  };

  const inclusions = [
    "Private commercial yellow-board vehicle (Sedan, SUV, or Tempo)",
    "Dedicated background-verified driver acting as local route guide",
    "All vehicle fuel, driver day allowances, and state taxes",
    "Doorstep pickup & drop at BBI Airport, Railway Station, or Hotel",
    "Safe luggage custody inside vehicle during temple visits",
    "Bottled water provision & chilled dual-zone air conditioning",
  ];

  const exclusions = [
    "Temple priority darshan tickets, puja fees & panda offerings",
    "Monument entry fees (e.g., Konark Sun Temple ASI entry ticket)",
    "OTDC motorboat ticket charges at Chilika Lake / Satapada",
    "Hotel accommodation & personal meals (available on request)",
    "Parking receipts and highway toll taxes (settled at actuals)",
  ];

  const faqs = [
    {
      q: "1. What is included in an Odisha tour package by cab?",
      a: "An Odisha tour package by cab generally includes cab transportation to chosen destinations, sightseeing routes and pickup and drop‑off arrangements. The items that are included vary depending on the package and the booking details.",
    },
    {
      q: "2. Can I customise my Odisha tour package?",
      a: "Yes you can customise your Odisha tour package by selecting destinations sightseeing spots, pickup points, travel length and vehicle type to match your preferences.",
    },
    {
      q: "3. Which places can I visit on an Odisha cab tour?",
      a: "Popular destinations on an Odisha cab tour are Bhubaneswar, Puri, Konark, Chilika Lake, Satapada, Dhauli and other tourist spots across Odisha.",
    },
    {
      q: "4. Can I book an Odisha tour package by car for my family?",
      a: "Yes a private cab tour is an option for families who want to explore Odisha together with flexible sightseeing and comfortable transportation.",
    },
    {
      q: "5. How many days are required for an Odisha tour?",
      a: "A 2–3 day trip is suitable for exploring places such as Bhubaneswar, Puri and Konark. A 4–5 day itinerary can add sights like Chilika depending on your travel plan.",
    },
    {
      q: "6. Can I start my Odisha tour from Bhubaneswar?",
      a: "Yes Bhubaneswar is a starting point for exploring popular destinations such as Puri, Konark, Dhauli and Chilika.",
    },
    {
      q: "7. Which cab is best for an Odisha tour?",
      a: "A sedan works well for couples and small families an SUV is best for families or small groups that need space and a Tempo Traveller is good for larger groups.",
    },
    {
      q: "8. How can I book an Odisha tour package, with Cabjatra?",
      a: "You can contact Cabjatra with your travel dates, pickup location, destinations, number of passengers and preferred vehicle to plan your Odisha tour package.",
    },
  ];

  const bottomCtaText = `I want to explore Odishas temples, beaches, heritage sites, lakes and scenic spots with a travel plan that fits my needs.
Whether I want a Bhubaneswar–Puri–Konark sightseeing trip or a custom multi‑day road journey through Odisha Cabjatra helps me plan my trip, with cab rides.
Choose where to go, pick my travel dates and get ready to explore Odisha.
Plan your Odisha tour today and make your next road trip memorable.`;

  return (
    <TourPackageDetailPage
      title="Odisha Tour Package by Cab – Explore Odisha Your Way"
      subtitle="Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Travel at your pace with a private cab, experienced driver and flexible sightseeing options. These options cover Bhubaneswar, Puri, Konark, Chilika and popular destinations. Whether you are planning a family vacation, a temple visit, a weekend getaway or a multi‑day Odisha road trip enjoy a hassle‑free journey, with travel itineraries designed around your preferences."
      tagline="Travel at your pace with a private cab, experienced driver and flexible sightseeing options"
      badge="Golden Triangle &bull; 6 Destinations &bull; 100% Commercial Fleet"
      heroImage="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1920&auto=format&fit=crop"
      overview="Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Travel at your pace with a private cab, experienced driver and flexible sightseeing options. These options cover Bhubaneswar, Puri, Konark, Chilika and popular destinations. Whether you are planning a family vacation, a temple visit, a weekend getaway or a multi-day Odisha road trip enjoy a hassle-free journey, with travel itineraries designed around your preferences."
      durationBadge="3 to 5 Days • 100% Flexible"
      startingFromNote="Transparent Tariff • Instant Confirmation"
      heroCta1Label="Explore Odisha Tour Packages"
      heroCta1Href="#packages"
      heroCta2Label="Book Your Cab Tour"
      heroCta2Href="/book-tour?destination=golden-triangle"
      destinationsTitle="Popular Destinations Covered in Our Odisha Tour Packages"
      destinationsSubtitle="Odisha offers a mix of spirituality, heritage, coastline, culture and nature. Our cab tour packages can help you explore many of Odishas popular tourist destinations."
      destinations={destinations}
      packagesTitle="Popular Odisha Tour Packages by Cab"
      packagesSubtitle="Choose from Odisha travel routes and sightseeing packages that are made for comfortable road travel and unforgettable experiences."
      packages={packages}
      itineraryTitle="Plan Your Odisha Road Trip with a Flexible Itinerary"
      itinerarySubtitle="Are you looking for an Odisha tour package by cab for 3 days or 4 days? I know how important it is to have a well‑planned itinerary that lets you explore attractions without rushing your journey."
      itineraryFooterNote="Your Odisha tour package can be customised based on the number of days pickup point sightseeing preferences and travel pace."
      itineraryDays={itineraryDays}
      whyChooseTitle="Why Choose Cabjatra for Your Odisha Tour?"
      whyChooseSubtitle="Travelling through Odisha is more fun when your transportation is easy your plans are flexible and your trip is arranged to match what you want. Cabjatra helps you set up your sightseeing and travel between cities with a cab-based tour experience."
      whyChoosePoints={whyChoosePoints}
      fleetTitle="Choose the Right Cab for Your Odisha Trip"
      fleetSubtitle="The right vehicle can make a long-distance sightseeing trip more comfortable. Whether you are travelling as a couple with family or in a group choose a vehicle based on your passenger count, luggage and travel route."
      fleetFooterNote="Share your passenger count and travel plan to find a cab, for your Odisha tour."
      fleetVehicleDescriptions={fleetVehicleDescriptions}
      fleetPosition="after-why-choose"
      inclusions={inclusions}
      exclusions={exclusions}
      faqTitle="Frequently Asked Questions About Odisha Tour Packages by Cab"
      faqs={faqs}
      bookingTourSlug="golden-triangle"
      bottomCtaTitle="Plan Your Odisha Tour with Cabjatra"
      bottomCtaText={bottomCtaText}
      bottomCtaPrimaryLabel="Book Your Odisha Cab Tour"
      bottomCtaSecondaryLabel="Get a Customized Tour Quote"
    />
  );
}
