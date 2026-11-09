export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  features: string[];
  startingFareNote: string;
  idealFor: string;
  popularRoutes: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers",
    shortDesc: "Punctual, stress-free pickups and drops to & from Biju Patnaik International Airport (BBI).",
    fullDesc: "Dedicated airport chauffeur service with flight tracking, zero wait anxiety, doorstep luggage assistance, and air-conditioned comfortable rides across Bhubaneswar, Cuttack, and Puri.",
    iconName: "Plane",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Flight arrival monitoring & buffer time",
      "Meet & Greet at BBI Airport Terminal gates",
      "Zero surge pricing guarantee during late hours",
      "Direct highway transfers to Puri & Cuttack"
    ],
    startingFareNote: "Guaranteed fixed tariff • Zero flight delay surcharge",
    idealFor: "Business delegates, inbound tourists, families arriving with heavy luggage",
    popularRoutes: ["BBI Airport ⇄ Master Canteen", "BBI Airport ⇄ Patia Infocity", "BBI Airport ⇄ Puri Beach", "BBI Airport ⇄ Cuttack CDA"]
  },
  {
    id: "outstation-cabs",
    slug: "outstation-cabs",
    title: "Outstation Cabs",
    shortDesc: "Reliable one-way and round-trip intercity cabs with seasoned highway chauffeurs.",
    fullDesc: "Travel across Odisha's cultural corridors, beaches, and historic towns with peace of mind. Experienced chauffeurs who know local terrain, transparent toll & tax clarity, and well-maintained vehicles.",
    iconName: "Compass",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    features: [
      "One-way & multi-day round trip packages",
      "Experienced highway chauffeurs with verified records",
      "Clean sanitized cars with active air-conditioning",
      "Flexible stopovers at authentic dhaba & temple sites"
    ],
    startingFareNote: "Custom highway quote • Zero hidden toll charges",
    idealFor: "Family vacations, spiritual pilgrimages, weekend getaways to Chilika & Gopalpur",
    popularRoutes: ["Bhubaneswar ⇄ Puri", "Bhubaneswar ⇄ Konark", "Bhubaneswar ⇄ Chilika Lake", "Bhubaneswar ⇄ Sambalpur"]
  },
  {
    id: "hourly-rentals",
    slug: "hourly-rentals",
    title: "Hourly & Day Rentals",
    shortDesc: "Dedicated car and chauffeur at your disposal for city meetings, shopping, or temple visits.",
    fullDesc: "Retain your cab as long as you need. Move between client meetings in Patia, shopping in Master Canteen, or temple hopping in Old Town without re-booking repeatedly.",
    iconName: "Clock",
    heroImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Flexible packages: 4 Hrs / 40 Km up to 12 Hrs / 120 Km",
      "Unlimited stops and wait-time within booked slot",
      "Ideal for multi-stop corporate appointments",
      "Chauffeur handles parking and navigation"
    ],
    startingFareNote: "Flexible block packages • Chauffeur on standby",
    idealFor: "Corporate executives, wedding guests, shoppers, day-long temple yatras",
    popularRoutes: ["Bhubaneswar City Tour (8h/80km)", "Puri Temple & Beach Crawl (6h/60km)", "Cuttack Heritage Loop (8h/80km)"]
  },
  {
    id: "local-city-rides",
    slug: "local-city-rides",
    title: "Local City Rides",
    shortDesc: "Comfortable pre-booked rides for everyday commutes, medical visits, and family outings.",
    fullDesc: "Avoid the frustration of last-minute app cancellations. Pre-book your city trip with CABJATRA for scheduled, dependable pickups on time every time.",
    iconName: "MapPin",
    heroImage: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Guaranteed vehicle assignment upon confirmation",
      "Zero last-minute driver cancellations",
      "Clean interiors with courteous chauffeurs",
      "Scheduled pickup right at your doorstep"
    ],
    startingFareNote: "Transparent distance tariffs • Zero surge multipliers",
    idealFor: "Early morning hospital visits, scheduled train connections, safe family commutes",
    popularRoutes: ["Patia ⇄ Old Town Bhubaneswar", "Saheed Nagar ⇄ Khandagiri", "Badambadi ⇄ CDA Cuttack"]
  },
  {
    id: "odisha-tours",
    slug: "odisha-tours",
    title: "Odisha Tour Packages",
    shortDesc: "Curated multi-destination heritage, beach, and wildlife itineraries across Odisha.",
    fullDesc: "Experience the Golden Triangle (Bhubaneswar - Puri - Konark), peaceful dolphin cruises at Chilika, and ancient Buddhist heritage at Dhauli & Ratnagiri with complete travel coordination.",
    iconName: "Palmtree",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Golden Triangle 2-Day & 3-Day Circuits",
      "Dedicated, cultured driver-guides with local insights",
      "Customizable stopovers at Pipili artisan village",
      "Luggage safe-keeping during temple visits"
    ],
    startingFareNote: "Curated itinerary packages • All permits & driver allowances included",
    idealFor: "Domestic and international travelers, heritage lovers, pilgrim groups",
    popularRoutes: ["Golden Triangle Circuit", "Chilika Dolphin & Coastal Trail", "Bhubaneswar Heritage & Cave Circuit"]
  },
  {
    id: "corporate-travel",
    slug: "corporate-travel",
    title: "Corporate & Event Mobility",
    shortDesc: "Standardized travel logistics for company executives, conferences, and institutional events.",
    fullDesc: "Professional fleet solutions for business hubs in Bhubaneswar & Cuttack, with consolidated billing estimates, executive sedans, and dedicated dispatch coordinators.",
    iconName: "Briefcase",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Executive sedans and luxury SUVs (Innova Crysta)",
      "Dedicated account coordinator for event bookings",
      "Transparent invoice breakdowns for expense reconciliation",
      "Airport delegate reception service"
    ],
    startingFareNote: "Custom corporate billing • Dedicated account manager",
    idealFor: "IT firms, academic conclaves, wedding guest logistics, government delegations",
    popularRoutes: ["Infocity Corridor Shuttles", "Conclave Delegate Transfers", "Port Corridor Executives"]
  }
];

