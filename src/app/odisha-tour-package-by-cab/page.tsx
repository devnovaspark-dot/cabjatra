import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function OdishaTourPackageByCabPage() {
  const destinations = [
    {
      title: "Bhubaneswar – The Temple City",
      desc: "Explore ancient Kalinga architectural landmarks including Lingaraj Temple, Mukteswar, Rajarani, and Dhauli Peace Pagoda. The premier starting gateway for all Odisha tours.",
      tag: "Capital & Temple City",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lingaraj Temple", "Mukteswar Temple", "Dhauli Shanti Stupa", "Khandagiri Caves"],
    },
    {
      title: "Puri – The Spiritual Destination",
      desc: "Visit the sacred Jagannath Temple, walk through the vibrant Grand Road (Bada Danda), and enjoy the pristine coastline of the Blue Flag Golden Beach.",
      tag: "Jagannath Dham & Beach",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lord Jagannath Temple", "Puri Golden Beach", "Gundicha Temple", "Raghurajpur Village"],
    },
    {
      title: "Konark – Heritage & Architecture",
      desc: "Discover the 13th-century Sun Temple of Konark, a UNESCO World Heritage Site renowned for its 24 colossal chariot stone wheels and coastal Chandrabhaga beach.",
      tag: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Konark Sun Temple", "Chandrabhaga Beach", "Puri-Konark Marine Drive", "ASI Museum"],
    },
    {
      title: "Chilika Lake – Nature & Scenic Beauty",
      desc: "Experience Asia's largest brackish water lagoon. Enjoy scenic motorboat cruises across the open waters, tranquil island surroundings, and migratory birdwatching.",
      tag: "Asia's Largest Lagoon",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Satapada Boat Jetty", "Irrawaddy Dolphins", "Rajhans Island", "Sea-Mouth Sandbar"],
    },
    {
      title: "Dhauli – History & Peace",
      desc: "Explore Dhauli Shanti Stupa (Peace Pagoda) perched on the river Daya, the historic battleground associated with the Kalinga War and Emperor Ashoka's enlightenment.",
      tag: "Peace Pagoda & Kalinga War",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Dhauli White Stupa", "Ashokan Rock Edicts", "Daya River Viewpoint", "Light & Sound Show"],
    },
    {
      title: "Satapada – Dolphin & Lake Experience",
      desc: "Explore the Satapada sector of Chilika, famous for OTDC motorized boat safaris, playful Irrawaddy dolphin sightings, and fresh coastal seafood delicacies.",
      tag: "Irrawaddy Dolphin Sanctuary",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Dolphin Point", "OTDC Cruise Pier", "Crab & Prawn Stalls", "Chilika Sea Mouth"],
    },
  ];

  const packages = [
    {
      title: "Bhubaneswar – Puri – Konark Tour Package",
      subtitle: "The Celebrated Odisha Golden Triangle",
      duration: "3 Days / 2 Nights or 4 Days",
      badge: "Most Popular",
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
      subtitle: "Sacred Darshan & Scenic Marine Drive",
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
      subtitle: "Temple City Heritage Circuit",
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
      subtitle: "Lagoon Safari & Dolphin Watching",
      duration: "Full Day Excursion",
      badge: "Eco Wildlife Safari",
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
      subtitle: "Thoughtfully Paced for All Generations",
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
      subtitle: "Tailored Completely to Your Preferences",
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
      day: "Day 01",
      title: "Bhubaneswar Local Sightseeing & Heritage Exploration",
      desc: "Begin your journey with punctual pickup from BBI Airport or Master Canteen Railway Station. Explore ancient Kalinga architecture at Lingaraj Temple, Mukteswar, and Rajarani. Continue to Dhauli Shanti Stupa overlooking the historic Daya River. Optional extensions include the ancient rock-cut caves of Udayagiri & Khandagiri.",
      highlights: ["Lingaraj & Mukteswar Temples", "Dhauli Peace Pagoda", "Khandagiri Caves"],
    },
    {
      day: "Day 02",
      title: "Bhubaneswar to Puri via Pipili Appliqué Village",
      desc: "Enjoy a scenic drive along the smooth NH-316 highway. Stop at Pipili village to admire vibrant Odisha appliqué handicrafts. Check into your Puri beach hotel, take a holy dip at the Golden Beach, and proceed for sacred Mahaprabhu Jagannath Temple darshan with guidance on police-approved corridor access.",
      highlights: ["Pipili Craft Village", "Lord Jagannath Temple", "Puri Golden Beach"],
    },
    {
      day: "Day 03",
      title: "Puri to Konark via Marine Drive Coastal Highway & Return",
      desc: "Drive along the breathtaking Marine Drive coastal road. Visit the tranquil Ramachandi Temple and Chandrabhaga Beach. Arrive at the UNESCO World Heritage Konark Sun Temple to marvel at the 24 colossal chariot wheels and intricate stone carvings. Return to Puri or Bhubaneswar for your departure.",
      highlights: ["Marine Drive Highway", "Chandrabhaga Beach", "Konark Sun Temple"],
    },
    {
      day: "Optional Extension",
      title: "Chilika Lake & Satapada Dolphin Cruise",
      desc: "Add an extra day to visit Satapada on Chilika Lake. Board an OTDC motorboat to spot graceful Irrawaddy dolphins playfully surfacing in their natural sanctuary, visit Rajhans Island, and savor fresh coastal seafood delicacies.",
      highlights: ["Satapada Boat Cruise", "Irrawaddy Dolphin Spotting", "Rajhans Island"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Flexible Travel Plans",
      desc: "Pick the places you want to go, the travel dates you prefer, and the exact stops you want to make during your holiday without rigid tour bus timetables.",
    },
    {
      title: "Convenient Private Cab Travel",
      desc: "Explore Odisha with the ease of a private commercial AC cab for sightseeing trips between cities and journeys that last several days.",
    },
    {
      title: "Customised Tour Itineraries",
      desc: "Design your trip based on how you are travelling, what you like, how many people are in your group, and your preferred travel pace.",
    },
    {
      title: "Family & Senior Citizen Comfort",
      desc: "Clean, spacious vehicles with dual AC, patient drivers, and safe luggage custody so your family enjoys peaceful temple visits.",
    },
    {
      title: "Easy Tour Planning & Booking",
      desc: "Arrange your pickup point, route schedule, and dedicated vehicle in one place with a transparent 10% advance deposit.",
    },
    {
      title: "Explore More at Your Own Pace",
      desc: "Spend as much time as you want at iconic sights like the Konark Sun Temple or Puri Golden Beach without driver rush.",
    },
  ];

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
      q: "What is included in an Odisha tour package by cab?",
      a: "An Odisha tour package by cab generally includes private commercial AC vehicle transportation for all chosen destinations, dedicated driver allowances, fuel charges, doorstep pickup, and scheduled drops. Toll receipts and parking fees can be settled directly at actuals or bundled based on package preferences.",
    },
    {
      q: "Can I customise my Odisha tour package?",
      a: "Yes! You can completely customise your Odisha tour package. Choose your preferred pickup point (Bhubaneswar Airport, Railway Station, or Puri Hotel), select specific sightseeing spots, adjust the number of days, and pick the vehicle class that best fits your group.",
    },
    {
      q: "Which places can I visit on an Odisha cab tour?",
      a: "Popular destinations include Bhubaneswar (Lingaraj, Mukteswar, Dhauli), Puri (Jagannath Temple, Golden Beach), Konark (Sun Temple, Chandrabhaga), Chilika Lake (Satapada dolphin sanctuary), Raghurajpur heritage craft village, and Pipli appliqué market.",
    },
    {
      q: "Can I book an Odisha tour package by car for my family?",
      a: "Yes! A private cab tour is the safest and most comfortable option for families with senior citizens and young children. Our background-verified drivers drive patiently, accommodate frequent comfort stops, and assist with luggage custody during temple visits.",
    },
    {
      q: "How many days are required for an Odisha tour?",
      a: "A 2 to 3 day itinerary is ideal for exploring the famous Golden Triangle (Bhubaneswar, Puri, and Konark). If you wish to include Chilika Lake, Satapada dolphin safari, or Raghurajpur, a 4 to 5 day trip provides a relaxed, unhurried holiday.",
    },
    {
      q: "Can I start my Odisha tour from Bhubaneswar?",
      a: "Yes, Bhubaneswar (BBI Airport or Master Canteen Railway Station) is the primary gateway for Odisha travel. Our driver will meet you directly at the terminal with your name placard and begin your tour smoothly.",
    },
    {
      q: "Which cab is best for an Odisha tour?",
      a: "A Sedan (Dzire/Etios) works great for couples and small families (up to 4 passengers). An SUV (Innova Crysta/Ertiga) is best for 5 to 7 passengers wanting extra legroom and luggage space. For larger groups of 8 to 17, a Tempo Traveller or Force Urbania is ideal.",
    },
    {
      q: "How can I book an Odisha tour package with Cabjatra?",
      a: "You can book directly through our online Tour Planner on the website or reach our 24/7 WhatsApp Operations Desk with your travel dates, passenger count, and preferred route. Lock your reservation with a transparent 10% advance deposit, with the remaining 90% settled during your trip.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Odisha Tour Package by Cab"
      subtitle="Explore the beauty, culture, temples, beaches and heritage of Odisha with flexible private cab travel"
      tagline="Travel at your pace with a private cab, experienced driver and flexible sightseeing options"
      badge="Golden Triangle &bull; 6 Destinations &bull; 100% Commercial Fleet"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=1600&auto=format&fit=crop"
      overview="Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Travel at your pace with a private cab, experienced driver and flexible sightseeing options covering Bhubaneswar, Puri, Konark, Chilika and popular destinations. Whether you are planning a family vacation, a temple visit, a weekend getaway or a multi-day Odisha road trip, enjoy a hassle-free journey with travel itineraries designed around your preferences."
      durationBadge="3 to 5 Days • 100% Flexible"
      startingFromNote="Transparent Tariff • 10% Advance"
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
