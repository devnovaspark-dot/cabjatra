import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function KonarkTourPackagesPage() {
  const destinations = [
    {
      title: "Konark Sun Temple (Black Pagoda)",
      desc: "UNESCO World Heritage Site built in the 13th century by King Narasimhadeva I. Conceived as a colossal celestial chariot with 24 carved stone wheels and 7 spirited horses.",
      tag: "UNESCO World Heritage Site",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["24 Colossal Chariot Wheels", "Intricate Erotic Sculptures", "Natya Mandapa Dance Hall", "ASI Interpretation Museum"],
    },
    {
      title: "Chandrabhaga Beach (Sunrise Point)",
      desc: "Famous for spectacular golden sunrises over the Bay of Bengal, clean surf, lighthouse views, and the sacred Chandrabhaga river confluence associated with Lord Samba.",
      tag: "Blue Flag Sunrise Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Spectacular Sunrise View", "Clean Beach Promenade", "Chandrabhaga Lighthouse", "Tender Coconut Stalls"],
    },
    {
      title: "Ramachandi Beach & River Confluence",
      desc: "Tranquil estuarine beach where the Kushabhadra River joins the Bay of Bengal, surrounded by casuarina pine groves and the ancient goddess Ramachandi shrine.",
      tag: "River-Ocean Confluence",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Goddess Ramachandi Temple", "Quiet Estuary Waters", "Casuarina Pine Forest", "Water Boating Sports"],
    },
    {
      title: "Puri-Konark Marine Drive Highway",
      desc: "One of India's most scenic coastal expressways. Smooth 35-km coastal road with whispering ocean breeze, casuarina canopy, and tender coconut stalls.",
      tag: "Scenic Ocean Expressway",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Casuarina Canopy Highway", "Ocean Vista Lookouts", "Coastal Dhaba Stops", "Sunset Photography"],
    },
    {
      title: "ASI Archaeological Museum Konark",
      desc: "Located outside the temple complex, housing over 260 fallen sculptural masterworks, celestial nymphs (Apsaras), and intricate architectural fragments.",
      tag: "Archaeological Museum",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Celestial Musician Sculptures", "Surya Deva Stone Statues", "Navagraha Nine Planets Slab", "Historical Exhibits"],
    },
    {
      title: "Kuruma Buddhist Excavation Site",
      desc: "Historic 9th-century Buddhist monastery site situated 8 km from Konark, featuring excavated brick architecture and an ancient carved statue of Buddha.",
      tag: "Ancient Buddhist Monastery",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Excavated Brick Vihara", "Carved Buddha in Bhumisparsha", "Quiet Countryside Trail", "Rare Archaeological Artifacts"],
    },
  ];

  const packages = [
    {
      title: "Bhubaneswar to Konark Same-Day Tour",
      subtitle: "Bhubaneswar ⇄ Dhauli ⇄ Pipili ⇄ Konark ⇄ Return",
      duration: "8 Hours / 140 Km RT",
      badge: "Most Popular",
      approxPrice: "From ₹2,450 (Sedan)",
      highlights: [
        "Doorstep pickup from Bhubaneswar hotel or BBI Airport",
        "Stop at Dhauli Peace Pagoda & Pipili appliqué village",
        "UNESCO Sun Temple & Chandrabhaga Beach halts",
        "Return highway drop to Bhubaneswar with zero surge",
      ],
    },
    {
      title: "Puri to Konark Marine Drive Excursion",
      subtitle: "Puri ⇄ Ramachandi ⇄ Chandrabhaga ⇄ Konark",
      duration: "5–6 Hours / 75 Km RT",
      badge: "Coastal Classic",
      approxPrice: "From ₹1,850 (Sedan)",
      highlights: [
        "Scenic drive along the picturesque Puri-Konark Marine Drive",
        "Leisurely halt at Ramachandi Beach & river confluence",
        "UNESCO Sun Temple guided visit & Chandrabhaga sunset",
        "Return drop at your Puri beach hotel or railway station",
      ],
    },
    {
      title: "Konark Sunrise & Marine Drive Special",
      subtitle: "Early Morning Chandrabhaga Sunrise & Sun Temple",
      duration: "6 Hours (05:00 AM Departure)",
      badge: "Photographers Special",
      approxPrice: "From ₹2,150 (Sedan)",
      highlights: [
        "Early morning pickup to witness sunrise over Chandrabhaga surf",
        "Be the first into Konark Sun Temple before day crowds arrive",
        "Fresh tender coconut & coastal breakfast halts",
        "Chilled dual-zone AC return ride to Puri or Bhubaneswar",
      ],
    },
    {
      title: "Golden Triangle: Bhubaneswar + Puri + Konark",
      subtitle: "The Ultimate 3-Day Odisha Cultural Circuit",
      duration: "3 Days / 2 Nights",
      badge: "Complete Heritage Tour",
      approxPrice: "From ₹6,850 (Sedan)",
      highlights: [
        "Private AC cab dedicated exclusively for 3 full days",
        "All major temples of Bhubaneswar, Puri & Konark",
        "Dhauli Peace Pagoda & Raghurajpur heritage craft village",
        "Complimentary airport/railway transfers included",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Morning (08:00 AM – 11:30 AM)",
      title: "Scenic Coastal Drive & Ramachandi Beach",
      desc: "Pickup from your hotel in Puri or Bhubaneswar in your private AC cab. Cruise along the spectacular Puri-Konark Marine Drive expressway. Stop at Ramachandi Beach where the Kushabhadra river joins the ocean. Savor fresh tender coconut water beneath swaying casuarina pines.",
      highlights: ["Marine Drive Highway", "Ramachandi River Confluence", "Casuarina Pine Groves", "Tender Coconut"],
    },
    {
      day: "Mid-Day (11:45 AM – 02:30 PM)",
      title: "UNESCO World Heritage Konark Sun Temple",
      desc: "Arrive at the monumental 13th-century Sun Temple complex. Walk past the grand Natya Mandapa (Hall of Dance) adorned with celestial musicians. Marvel at the 24 colossal chariot wheels carved with astronomical sundial precision and examine the intricate stone sculptures. Visit the ASI Museum.",
      highlights: ["Sun Temple Chariot Wheels", "Natya Mandapa", "ASI Archaeological Museum", "Sundial Demonstrations"],
    },
    {
      day: "Afternoon & Sunset (03:00 PM – 06:30 PM)",
      title: "Chandrabhaga Beach & Golden Sunset",
      desc: "Enjoy fresh seafood or an authentic Odia thali lunch at a recommended beach restaurant. Spend the late afternoon at Chandrabhaga Beach. Walk along the golden sand dunes, watch the ocean surf, and capture spectacular sunset hues before your comfortable return drive.",
      highlights: ["Chandrabhaga Surf", "Beachside Stalls", "Golden Sunset", "Comfortable Return Drop"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Leisurely Marine Drive Halts",
      desc: "Unlike hurried tourist buses, stop as often as you want along the coastal expressway for photography, river boating, or fresh coconuts.",
    },
    {
      title: "Chilled AC Cab on Standby",
      desc: "Konark temple grounds can be sunny and warm. Your air-conditioned vehicle remains cooled and waiting right outside the gate.",
    },
    {
      title: "No Parking or Toll Haggling",
      desc: "Our verified commercial drivers handle all parking bay logistics near the ASI entrance so your family walks minimal distances.",
    },
    {
      title: "Safe Belongings Custody",
      desc: "Leave heavy bags and extra luggage safely locked inside your private vehicle while you tour the monument at your own pace.",
    },
    {
      title: "Fixed Transparent Tariffs",
      desc: "Transparent upfront pricing. No hidden kilometer surcharges or peak hour surge traps.",
    },
    {
      title: "100% Yellow-Board Commercial Fleet",
      desc: "Strictly commercial registered sedans, SUVs, and tempos driven by background-verified local chauffeurs.",
    },
  ];

  const inclusions = [
    "Private commercial yellow-board vehicle (Sedan, SUV, or Tempo)",
    "Dedicated driver allowances, fuel costs, and state road taxes",
    "Doorstep pickup & drop at Puri or Bhubaneswar hotel/airport",
    "Safe custody of luggage inside the cab during monument visit",
    "Chilled dual-zone air conditioning and complimentary bottled water",
  ];

  const exclusions = [
    "Konark Sun Temple ASI monument entry tickets (₹40 for Indians, ₹600 for foreigners)",
    "ASI Archaeological Museum entry ticket (₹5)",
    "Authorized ASI tourist guide fees (available at the monument ticket counter)",
    "Parking receipts (settled at actuals)",
    "Personal meals and refreshments",
  ];

  const faqs = [
    {
      q: "What are the visiting hours for the Konark Sun Temple?",
      a: "The Konark Sun Temple complex is open daily from sunrise to sunset (approximately 06:00 AM to 06:30 PM). An evening Light and Sound show is also held in the monument grounds after sunset.",
    },
    {
      q: "How far is Konark Sun Temple from Puri and Bhubaneswar?",
      a: "Konark is 35 km from Puri along the scenic Marine Drive (approx. 45–60 mins) and 65 km from Bhubaneswar via NH-316 (approx. 1 hr 30 mins). Both routes are smooth, well-paved national expressways.",
    },
    {
      q: "Can we hire an official ASI guide at Konark Sun Temple?",
      a: "Yes! Government-approved ASI tourist guides wearing official badges are readily available near the main entrance ticket counter. Your CABJATRA driver can assist you in finding an authorized guide.",
    },
    {
      q: "Is wheel-chair access available at Konark Sun Temple for senior citizens?",
      a: "Yes, the ASI has paved accessible ramps leading into the main temple viewing gardens, and wheelchairs are available at the entrance counter upon request.",
    },
    {
      q: "How do I book a Konark cab tour with Cabjatra?",
      a: "Select your preferred tour package on our website, receive instant confirmation, and get your driver's contact details and vehicle confirmation voucher instantly via WhatsApp.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Konark Tour Packages"
      subtitle="Discover the UNESCO World Heritage Sun Temple, scenic Marine Drive highway, and Chandrabhaga Beach by private AC cab"
      tagline="Curated coastal heritage circuits with verified drivers and 100% commercial yellow-board fleet"
      badge="UNESCO World Heritage &bull; Marine Drive Coastal Trail"
      heroImage="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=1600&auto=format&fit=crop"
      overview="Behold the architectural wonder of the 13th-century Konark Sun Temple, a UNESCO World Heritage Site sculpted as a cosmic stone chariot with 24 colossal sundial wheels and 7 galloping horses. Combined with the scenic ocean expressway along the Puri-Konark Marine Drive and the golden sands of Chandrabhaga Beach, a private cab tour with CABJATRA delivers an unforgettable, unhurried coastal journey."
      durationBadge="Half Day to Full Day • 100% Flexible"
      startingFromNote="From ₹1,850 • Instant Confirmation"
      destinations={destinations}
      packages={packages}
      itineraryDays={itineraryDays}
      whyChoosePoints={whyChoosePoints}
      inclusions={inclusions}
      exclusions={exclusions}
      faqs={faqs}
      bookingTourSlug="konark"
    />
  );
}
