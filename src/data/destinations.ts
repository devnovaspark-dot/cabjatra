export interface DestinationItem {
  id: string;
  name: string;
  odishaTitle: string;
  distanceFromBhubaneswar: string;
  driveTime: string;
  heroImage: string;
  thumbnail: string;
  tag: string;
  overview: string;
  keyAttractions: string[];
  suggestedDuration: string;
  recommendedTourSlug: string;
  indicativeTourPrice: string;
}

export const ODISHA_DESTINATIONS: DestinationItem[] = [
  {
    id: "puri",
    name: "Puri",
    odishaTitle: "The Sacred Abode of Lord Jagannath",
    distanceFromBhubaneswar: "60 km",
    driveTime: "1 hr 20 min via NH 316",
    heroImage: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=600&auto=format&fit=crop",
    tag: "Spiritual & Coastal",
    overview: "Puri is one of the four revered Char Dham pilgrimage sites, blessed with the ancient Sri Jagannath Temple, the pristine Golden Beach (Blue Flag certified), and vibrant culinary traditions.",
    keyAttractions: [
      "Sri Jagannath Temple & Bada Danda corridor",
      "Golden Beach & Swargadwar coastal promenade",
      "Gundicha Temple & Narendra Sacred Lake",
      "Raghurajpur Heritage Craft Village (Pattachitra art)"
    ],
    suggestedDuration: "1 to 2 Days",
    recommendedTourSlug: "puri-jagannath-pilgrimage-trail",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  },
  {
    id: "konark",
    name: "Konark",
    odishaTitle: "UNESCO World Heritage Sun Temple",
    distanceFromBhubaneswar: "65 km",
    driveTime: "1 hr 30 min via Marine Drive",
    heroImage: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=600&auto=format&fit=crop",
    tag: "Architectural Wonder",
    overview: "Home to the monumental 13th-century Sun Temple carved as a cosmic chariot with 24 colossal wheels and 7 horses. The coastal drive from Puri to Konark along Marine Drive is one of India's most scenic routes.",
    keyAttractions: [
      "Konark Sun Temple complex and ASI interpretation museum",
      "Chandrabhaga Beach (famous for sunrise and clean surf)",
      "Puri-Konark Marine Drive scenic coastal highway",
      "Suruchi Eco-Cottages and casuarina pine trails"
    ],
    suggestedDuration: "Half-Day to Full-Day",
    recommendedTourSlug: "konark-marine-drive-excursion",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  },
  {
    id: "chilika",
    name: "Chilika Lake",
    odishaTitle: "Asia's Largest Brackish Water Lagoon",
    distanceFromBhubaneswar: "105 km (Satapada) / 110 km (Barkul)",
    driveTime: "2 hr 15 min via NH 16",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop",
    tag: "Eco & Wildlife",
    overview: "A haven for nature enthusiasts, Chilika hosts rare Irrawaddy dolphins at Satapada, over a million migratory birds during winter at Nalabana, and the sacred island shrine of Maa Kalijai.",
    keyAttractions: [
      "Satapada boat safari & dolphin viewpoint",
      "Sea Mouth beach where Chilika joins the Bay of Bengal",
      "Maa Kalijai island temple excursion from Barkul",
      "Fresh Chilika prawn & crab local culinary stalls"
    ],
    suggestedDuration: "Full-Day Trip",
    recommendedTourSlug: "chilika-dolphin-lagoon-safari",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  },
  {
    id: "dhauli",
    name: "Dhauli & Pipili",
    odishaTitle: "Peace Pagoda & Applique Heritage",
    distanceFromBhubaneswar: "12 km (Dhauli) / 20 km (Pipili)",
    driveTime: "25 to 40 min",
    heroImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=600&auto=format&fit=crop",
    tag: "Buddhist History",
    overview: "Perched atop Dhauli Hills alongside the Daya River, where Emperor Ashoka renounced warfare for Dharma. Close by lies Pipili, the world-famous bazaar of colorful hand-stitched applique crafts.",
    keyAttractions: [
      "Dhauli Shanti Stupa (Peace Pagoda) & Ashokan Rock Edicts",
      "Daya River scenic banks & evening light-and-sound show",
      "Pipili artisan street with colorful lanterns, umbrellas & wall hangings",
      "Dhauli Giri Buddha Vihar monastery"
    ],
    suggestedDuration: "3 to 4 Hours",
    recommendedTourSlug: "dhauli-pipili-heritage-half-day",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    odishaTitle: "The Temple City of 1,000 Shrines",
    distanceFromBhubaneswar: "City Center",
    driveTime: "Local city transit",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop",
    tag: "Heritage & Modern Hub",
    overview: "A seamless synthesis of 7th-12th century Kalinga architecture and modern green urban planning. From the towering spires of Lingaraj to the ancient rock-cut Jain caves of Khandagiri, every street tells a tale.",
    keyAttractions: [
      "11th-century Lingaraj Temple & Bindusagar holy tank",
      "Mukteshwar Temple ('Gem of Odishan Architecture')",
      "Udayagiri and Khandagiri twin rock-cut caves",
      "Nandankanan Zoological Park (white tigers & botanical garden)",
      "Odisha State Tribal Museum (Museum of Man)"
    ],
    suggestedDuration: "1 to 2 Days",
    recommendedTourSlug: "bhubaneswar-temple-trail",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  },
  {
    id: "gopalpur",
    name: "Gopalpur-on-Sea",
    odishaTitle: "Colonial Charm & Tranquil Surfing Coast",
    distanceFromBhubaneswar: "165 km",
    driveTime: "3 hr 15 min via NH 16",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    tag: "Coastal Haven",
    overview: "A serene coastal retreat once bustling as an ancient seaport. Renowned for its calm sandy shores, colonial-era lighthouse, and nearby Tampara freshwater lake with water sports.",
    keyAttractions: [
      "Gopalpur Beach & heritage British sea-facing lighthouse",
      "Tampara Lake water sports & eco-resort trails",
      "Pati Sonapur virgin beach near Bahuda river mouth",
      "Berhampur silk-weaving & culinary street trails"
    ],
    suggestedDuration: "2 Days / 1 Night",
    recommendedTourSlug: "gopalpur-tampara-weekend",
    indicativeTourPrice: "Dedicated Chauffeur Circuit • Transparent Estimate"
  }
];

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  destinations: string[];
  startingCity: string;
  heroImage: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; title: string; desc: string }[];
  indicativePrice: {
    sedan: string;
    suv: string;
    traveller: string;
  };
  highlights: string[];
}

export const ODISHA_TOURS: TourPackage[] = [
  {
    id: "golden-triangle-3d",
    slug: "golden-triangle-odisha",
    title: "Odisha Golden Triangle Classic",
    tagline: "The definitive cultural circuit of Bhubaneswar, Puri & Konark",
    duration: "3 Days / 2 Nights",
    destinations: ["Bhubaneswar", "Dhauli", "Pipili", "Puri", "Konark", "Chandrabhaga"],
    startingCity: "Bhubaneswar",
    heroImage: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=80&w=1200&auto=format&fit=crop",
    inclusions: [
      "Private air-conditioned cab for entire 3-day itinerary",
      "Dedicated chauffeur with verified background and local route expertise",
      "All fuel costs, driver allowances, toll taxes, and parking fees",
      "Doorstep pickup and airport/railway station drop-off"
    ],
    exclusions: [
      "Hotel accommodations (available as custom booking assistance upon request)",
      "Temple entry / darshan priority tickets or monument entry fees",
      "Boating tickets, guide service fees, meals and beverages",
      "GST (5%) calculated at final billing"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Bhubaneswar Heritage & Arrival to Puri",
        desc: "Morning pickup from BBI Airport / Station. Tour Lingaraj, Mukteshwar Temple, and Dhauli Peace Pagoda. Stop at Pipili applique handicraft bazaar en route to Puri. Check-in at Puri hotel and enjoy evening breeze at Golden Beach."
      },
      {
        day: "Day 2",
        title: "Puri Temple Darshan & Raghurajpur Craft Village",
        desc: "Early morning darshan at Sri Jagannath Temple. Visit Gundicha Temple and Lokanath shrine. Afternoon excursion to Raghurajpur heritage village to witness live Pattachitra scroll painting by master artisans."
      },
      {
        day: "Day 3",
        title: "Puri Marine Drive, Konark Sun Temple & Departure",
        desc: "Breathtaking drive along Marine Drive to Chandrabhaga Beach. Guided visit to the monumental Konark Sun Temple complex. Return transfer to Bhubaneswar Airport / Station for your onward journey."
      }
    ],
    indicativePrice: {
      sedan: "Chauffeur & Fuel Included • Custom Quote",
      suv: "Innova Crysta Option • Custom Quote",
      traveller: "Group Van Option • Custom Quote"
    },
    highlights: ["2 UNESCO/National Heritage sites", "Scenic Marine Drive coastal cruising", "Artisan village interaction"]
  },
  {
    id: "puri-day-excursion",
    slug: "puri-konark-same-day",
    title: "Puri & Konark Same-Day Splendor",
    tagline: "Full-day express private tour connecting Jagannath Dham and the Sun Temple",
    duration: "1 Day (10 to 12 Hours)",
    destinations: ["Bhubaneswar", "Dhauli", "Puri", "Marine Drive", "Konark"],
    startingCity: "Bhubaneswar",
    heroImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop",
    inclusions: [
      "Dedicated AC cab with chauffeur for 12 hours / 180 km",
      "Fuel, interstate / toll taxes, parking fees",
      "Flexible stopovers for breakfast and coconut water along highway"
    ],
    exclusions: [
      "Temple VIP darshan tickets",
      "Guide fees & monument entry charges",
      "Personal expenses and meals"
    ],
    itinerary: [
      {
        day: "Full Day",
        title: "Dawn to Dusk Cultural Circuit",
        desc: "07:30 AM pickup from Bhubaneswar. Stop at Dhauli Pagoda, arrive in Puri for temple visit and beach stroll. Lunch in Puri, drive along Marine Drive to Konark Sun Temple by 03:30 PM. Sunset at Chandrabhaga Beach and return to Bhubaneswar by 08:30 PM."
      }
    ],
    indicativePrice: {
      sedan: "Chauffeur & Fuel Included • Custom Quote",
      suv: "Innova Crysta Option • Custom Quote",
      traveller: "Group Van Option • Custom Quote"
    },
    highlights: ["Compact same-day tour", "Zero night halt required", "Ideal for business travelers on weekend"]
  },
  {
    id: "chilika-dolphin-safari",
    slug: "chilika-lake-nature-trail",
    title: "Chilika Dolphin & Coastal Eco-Trail",
    tagline: "Encounter rare Irrawaddy dolphins and vast wetland vistas",
    duration: "1 Day (8 to 10 Hours)",
    destinations: ["Bhubaneswar / Puri", "Satapada", "Sea Mouth", "Rajhans Island"],
    startingCity: "Bhubaneswar or Puri",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    inclusions: [
      "Chauffeur-driven AC cab round-trip to Satapada / Barkul",
      "Assistance with OTDC certified boat hire counters",
      "Luggage and bag safety while on boat safari"
    ],
    exclusions: [
      "OTDC boat ticket fare (paid directly at jetty)",
      "Meals, snacks & seafood tastings"
    ],
    itinerary: [
      {
        day: "Full Day",
        title: "Satapada Dolphin Point & Sea Mouth Cruise",
        desc: "Morning pickup from Bhubaneswar (07:00 AM) or Puri (08:30 AM). Scenic drive to Satapada on the shores of Chilika. Board a motorized boat for a 2-hour cruise to spot Irrawaddy dolphins, visit the Sea Mouth where lake meets Bay of Bengal, and relish fresh catch lunch before returning."
      }
    ],
    indicativePrice: {
      sedan: "Chauffeur & Fuel Included • Custom Quote",
      suv: "Innova Crysta Option • Custom Quote",
      traveller: "Group Van Option • Custom Quote"
    },
    highlights: ["Rare wildlife sighting", "Scenic water cruise", "Authentic coastal fresh seafood stop"]
  }
];

