import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Compass,
  Clock,
  Car,
  Palmtree,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface DiscoveryCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  badge: string;
  actionText: string;
}

const CATEGORIES: DiscoveryCategory[] = [
  {
    title: "Airport Transfers",
    subtitle: "Punctual BBI airport pickups and drop-offs with flight tracking and zero wait anxiety.",
    icon: <Plane className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
    link: "/services/airport-transfers",
    badge: "BBI Flight Tracked",
    actionText: "Book Airport Cab",
  },
  {
    title: "Outstation Travel",
    subtitle: "One-way and round trips between Bhubaneswar, Puri, Cuttack, Konark, and Sambalpur.",
    icon: <Compass className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    link: "/services/outstation-cabs",
    badge: "Highway Specialists",
    actionText: "Plan Outstation Trip",
  },
  {
    title: "Hourly Rentals",
    subtitle: "Flexible 4, 8, or 12-hour packages. Cab and chauffeur remain on call for meetings and shopping.",
    icon: <Clock className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop",
    link: "/services/hourly-rentals",
    badge: "Flexible Multi-Stop",
    actionText: "Reserve Hourly",
  },
  {
    title: "Local City Rides",
    subtitle: "Clean, scheduled door-to-door city transit without sudden driver cancellations.",
    icon: <Car className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=600&auto=format&fit=crop",
    link: "/services/local-city-rides",
    badge: "Zero Surges",
    actionText: "Book City Ride",
  },
  {
    title: "Odisha Tour Packages",
    subtitle: "Curated heritage circuits covering Golden Triangle, Puri temple yatras & Chilika boat safaris.",
    icon: <Palmtree className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=600&auto=format&fit=crop",
    link: "/services/odisha-tours",
    badge: "Curated Heritage",
    actionText: "Explore Tour Circuits",
  },
];

export const ServiceDiscoverySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-sand-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Tailored Odisha Transit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-display tracking-tight">
              Book Your Journey
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Choose the travel format that fits your schedule. Every ride comes with a sanitized car and a courteous chauffeur.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-950 group"
          >
            <span>Explore All 6 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-950 shadow-xs">
                    {cat.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-brand-800/90 backdrop-blur-md flex items-center justify-center border border-white/20">
                    {cat.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-800 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <Link
                  href={cat.link}
                  className="w-full py-2.5 px-3 rounded-xl border border-brand-200 bg-brand-50/50 hover:bg-brand-800 hover:text-white text-brand-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 text-center group-hover:border-brand-800"
                >
                  <span>{cat.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

