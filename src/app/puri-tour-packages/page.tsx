import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function PuriTourPackagesPage() {
  const destinations = [
    {
      title: "Sri Jagannath Temple & Bada Danda",
      desc: "One of India's revered Char Dham pilgrimages. Behold the 12th-century Kalinga temple spire, Nilachakra flag ritual, and taste authentic Anand Bazaar Mahaprasad.",
      tag: "Char Dham Sacred Shrine",
      image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lord Jagannath Sanctum", "Singhadwara Lion Gate", "Anand Bazaar Mahaprasad", "Patitapavana Shrine"],
    },
    {
      title: "Puri Golden Beach (Blue Flag Certified)",
      desc: "Asia's premier eco-friendly certified beach, famous for pristine golden sands, clean bathing zones, lifeguards, and vibrant evening sea food and shell markets.",
      tag: "Blue Flag Certified Beach",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Clean Golden Sands", "Sunrise & Sunset Promenade", "Swargadwar Beach Market", "Camel & Horse Rides"],
    },
    {
      title: "Gundicha Temple & Narendra Sacred Lake",
      desc: "The sacred Garden House of Lord Jagannath during the annual Ratha Yatra festival, alongside Narendra Sarovar where the Chandan Yatra boat festival takes place.",
      tag: "Ratha Yatra Garden Palace",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Gundicha Temple Gardens", "Narendra Lake Chandan Mandapa", "Holy Water Sprinkling", "Quiet Shrines"],
    },
    {
      title: "Raghurajpur Heritage Craft Village",
      desc: "World-famous heritage artisan village where every household preserves ancient Pattachitra scroll paintings, palm-leaf engravings, and traditional Gotipua dance.",
      tag: "UNESCO Craft Heritage",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Pattachitra Scroll Painting", "Palm Leaf Engraving", "Tussar Silk Painting", "Gotipua Dance Academy"],
    },
    {
      title: "Puri – Konark Marine Drive Highway",
      desc: "A breathtaking 35 km coastal expressway bordered by the Bay of Bengal on one side and whispering casuarina pine forests on the other.",
      tag: "Scenic Coastal Highway",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Ramachandi River Confluence", "Casuarina Pine Groves", "Tender Coconut Shacks", "Chandrabhaga Beach"],
    },
    {
      title: "Lokanath Temple & Alarnath Shrine",
      desc: "Revered Shiva shrine at Lokanath where the Shivalinga remains submerged under natural spring water, and Brahmagiri Alarnath temple visited during Anavasara.",
      tag: "Ancient Spiritual Sites",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Submerged Shivalinga", "Sacred Spring", "Brahmagiri Alarnath Temple", "Kheer Bhog Offering"],
    },
  ];

  const packages = [
    {
      title: "Puri Complete City & Temple Darshan",
      subtitle: "Jagannath Temple • Golden Beach • Gundicha • Lokanath",
      duration: "Half-Day or Full-Day",
      badge: "Most Popular",
      approxPrice: "From ₹1,450 (Sedan)",
      highlights: [
        "Doorstep hotel or railway station pickup",
        "Police-approved parking access near Singhadwara",
        "Anand Bazaar Mahaprasad collection assistance",
        "Safe custody of mobiles and leather items inside AC cab",
      ],
    },
    {
      title: "Puri – Konark Marine Drive Day Excursion",
      subtitle: "Sun Temple, Chandrabhaga Beach & Ramachandi",
      duration: "Full-Day (6–8 Hours)",
      badge: "Coastal Classic",
      approxPrice: "From ₹2,250 (Sedan)",
      highlights: [
        "Leisurely drive along scenic Puri-Konark Marine Drive",
        "UNESCO World Heritage Konark Sun Temple visit",
        "Chandrabhaga Beach surf and Ramachandi river mouth",
        "Return drop to your Puri beachside resort",
      ],
    },
    {
      title: "Puri – Chilika Satapada Dolphin Cruise Tour",
      subtitle: "Lagoon Safari & Irrawaddy Dolphin Sanctuary",
      duration: "Full-Day (6–7 Hours)",
      badge: "Eco Wildlife Safari",
      approxPrice: "From ₹2,850 (Sedan)",
      highlights: [
        "Direct highway drive to Satapada on Chilika Lake",
        "OTDC motorized boat coordination for dolphin sightings",
        "Visit Rajhans Island sea-mouth sandbar",
        "Fresh coastal seafood and crab curry lunch stop",
      ],
    },
    {
      title: "Puri Heritage Artisan Village Trail",
      subtitle: "Raghurajpur Crafts & Pipili Appliqué",
      duration: "5 Hours / 50 Km",
      badge: "Culture & Art",
      approxPrice: "From ₹1,650 (Sedan)",
      highlights: [
        "Meet national award-winning Pattachitra master painters",
        "Direct interaction with craft artisans at their ancestral homes",
        "Pipili village appliqué market for lanterns and umbrellas",
        "Comfortable AC ride with verified local driver",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Morning (06:00 AM – 11:30 AM)",
      title: "Sacred Mahaprabhu Jagannath Darshan & Mahaprasad",
      desc: "Early morning pickup from your hotel. Proceed to Singhadwara along the Grand Road (Bada Danda). Experience the sacred darshan of the Holy Trinity: Lord Jagannath, Balabhadra, and Devi Subhadra. Walk through the Anand Bazaar to taste sacred earthen pot Mahaprasad. Visit Gundicha Temple and sacred Narendra Lake.",
      highlights: ["Lord Jagannath Temple", "Singhadwara Lion Gate", "Anand Bazaar Mahaprasad", "Gundicha Temple"],
    },
    {
      day: "Afternoon (12:30 PM – 04:30 PM)",
      title: "Raghurajpur Heritage Craft Village & Coastal Drive",
      desc: "Enjoy an authentic Odia coastal lunch. Drive to the tranquil heritage artisan village of Raghurajpur. Walk through the quiet village lanes where every house is an open art gallery. Watch master artists demonstrate ancient palm-leaf etching with iron styluses.",
      highlights: ["Raghurajpur Artisan Village", "Pattachitra Scroll Painting", "Palm-Leaf Etching", "Gotipua Dance"],
    },
    {
      day: "Evening (05:00 PM – 07:30 PM)",
      title: "Blue Flag Golden Beach Sunset Promenade",
      desc: "Return to Puri's pristine Golden Beach. Stroll along the clean sand dunes, watch local fishing catamarans returning through the evening surf, shop for sea shells at Swargadwar, and enjoy fresh fried fish and tender coconut.",
      highlights: ["Golden Beach Sunset", "Swargadwar Beach Market", "Chilled Sea Breeze", "Local Food Shacks"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Temple Corridor & Parking Mastery",
      desc: "Our drivers know approved police parking zones near Singhadwara and the Grand Road, saving your family long exhausting walks.",
    },
    {
      title: "Senior Citizen & Pilgrim Friendly",
      desc: "Spacious vehicles with easy ingress, comfortable legroom, and patient drivers who wait calmly during extended temple rituals.",
    },
    {
      title: "Safe Custody of Valuables",
      desc: "Leather belts, purses, cameras, and mobile phones are prohibited inside the temple. Leave them securely locked inside your private AC cab.",
    },
    {
      title: "Bespoke Marine Drive Coastal Halts",
      desc: "Enjoy leisurely ocean drives from Puri to Konark with unhurried halts at Ramachandi Beach and tender coconut stalls.",
    },
    {
      title: "Fixed Transparent Tariffs",
      desc: "No peak-season surge traps or arbitrary pricing haggling during Rath Yatra or festival weekends. Guaranteed fixed transparent tariffs.",
    },
    {
      title: "Guaranteed Commercial Fleet",
      desc: "100% yellow-board commercial registered vehicles with comprehensive passenger insurance and verified drivers.",
    },
  ];

  const inclusions = [
    "Private commercial yellow-board AC vehicle (Sedan, SUV, or Tempo)",
    "Dedicated local driver acting as route advisor and parking coordinator",
    "All vehicle fuel costs, parking charges, and driver allowances",
    "Doorstep pickup & drop at Puri hotels, resorts, or Railway Station",
    "Safe custody of leather items and mobile phones during temple visits",
    "Chilled dual-zone air conditioning and complimentary bottled water",
  ];

  const exclusions = [
    "Temple priest / Panda offerings, VIP darshan passes, and puja fees",
    "OTDC motorboat cruise tickets at Chilika Lake Satapada",
    "Monument entry tickets (e.g. Konark Sun Temple ASI entry)",
    "Personal meals, prasad purchases, and shopping expenses",
  ];

  const faqs = [
    {
      q: "Can the cab take us close to the Jagannath Temple entrance?",
      a: "Vehicular traffic along the Grand Road (Bada Danda) is regulated by Puri Traffic Police. Our drivers drop you at the closest authorized passenger disembarkation point near the Municipal Market or Medical Square, minimizing the walking distance for senior citizens.",
    },
    {
      q: "Where can we safely keep our mobile phones and shoes during temple darshan?",
      a: "Mobile phones, cameras, leather belts, and leather bags are strictly forbidden inside the temple. When you travel with CABJATRA, you can safely leave all prohibited items locked inside your private AC cab under your driver's custody.",
    },
    {
      q: "Can we include Konark Sun Temple and Chilika Lake in our Puri cab tour?",
      a: "Yes! Konark is just 35 km away along the scenic Marine Drive highway (1 hour drive), and Satapada on Chilika Lake is 50 km away (1.5 hours). You can easily combine both or book our 2-day Puri-Konark-Chilika circuit.",
    },
    {
      q: "Are the cabs air-conditioned during waiting times near the beach?",
      a: "Yes, our drivers keep the cabin comfortably cooled for your arrival. Your private vehicle remains dedicated exclusively to your group for the entire booked duration.",
    },
    {
      q: "How do I book a Puri cab tour package with Cabjatra?",
      a: "Choose your preferred Puri tour package on our website, receive instant confirmation, and get your driver's contact details and vehicle confirmation voucher instantly via WhatsApp.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Puri Tour Packages"
      subtitle="Experience holy Jagannath Dham, Blue Flag Golden Beach, and scenic Marine Drive coastal drives by private AC cab"
      tagline="Curated sacred pilgrimage and coastal sightseeing tours with verified local chauffeurs"
      badge="Puri Jagannath Dham & Coastal Marine Drive Trail"
      heroImage="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=1920&auto=format&fit=crop"
      overview="Visit the sacred abode of Mahaprabhu Jagannath with total peace of mind. As one of India's revered Char Dham pilgrimages, Puri is blessed with ancient spiritual energy, the vibrant Grand Road, the pristine Blue Flag Golden Beach, and the breathtaking coastal expressway to Konark. CABJATRA delivers 100% yellow-board commercial AC cabs, verified drivers who know every temple corridor bypass, and safe custody of your belongings during darshan."
      durationBadge="1 to 3 Days • 100% Flexible"
      startingFromNote="From ₹1,450 • Guaranteed Fixed Tariffs"
      destinations={destinations}
      packages={packages}
      itineraryDays={itineraryDays}
      whyChoosePoints={whyChoosePoints}
      inclusions={inclusions}
      exclusions={exclusions}
      faqs={faqs}
      bookingTourSlug="puri"
    />
  );
}
