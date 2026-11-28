import React from "react";
import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cab Service in Bhubaneswar for Every Journey | CABJATRA",
  description:
    "Seamless BBI Airport drops, daily Infocity office rides, and weekend intercity temple tours with verified drivers and Zero surge charges.",
  keywords: [
    "Cab Service in Bhubaneswar",
    "Bhubaneswar taxi service",
    "BBI Airport cab",
    "Infocity cab Bhubaneswar",
    "Bhubaneswar to Puri cab",
    "CABJATRA Bhubaneswar",
  ],
};

export default function CabServiceInBhubaneswarPage() {
  return (
    <ServiceDetailPage
      title="Cab Service in Bhubaneswar"
      subtitle="Seamless BBI Airport drops, daily Infocity office rides, and weekend intercity temple tours with verified drivers and Zero surge charges."
      heroHeadline="Cab Service in Bhubaneswar for Every Journey"
      heroSubtitle="Seamless BBI Airport drops, daily Infocity office rides, and weekend intercity temple tours with verified drivers and Zero surge charges."
      tagline="Seamless BBI Airport drops, daily Infocity office rides, and weekend intercity temple tours with verified drivers and Zero surge charges."
      badge="Bhubaneswar City & Airport Hub"
      heroImage="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1920&auto=format&fit=crop"
      heroPills={[
        "100% Yellow Plate",
        "No surge charges",
        "Double Zone Air Conditioning",
        "Live flight tracking",
      ]}
      ctaBookButtonText="Book your Cab today!"
      secondaryCtaText="WhatsApp support available 24 hours a day"
      heroAssurances={[
        "Pre-Assigned Chauffeur",
        "Fixed Vehicle Allocation",
        "Zero Last-Minute Cancellation",
        "Transparent Rate",
      ]}
      overview="Experience seamless, hassle-free cab booking across the Temple City. Whether landing at Biju Patnaik International Airport (BBI), commuting to Infocity and Patia tech parks, or heading out on an intercity pilgrimage to Puri, CABJATRA delivers 100% yellow-board commercial AC vehicles, background-cleared local drivers, and zero surge pricing."
      routesSectionTitle="Preferred Routes and Approximate Pricing"
      routesSectionSubtitle="Clear indicative prices for regularly travelled routes. You can pre-book your car and receive Instant Confirmation. Furthermore, there is no uplift pricing."
      routeFares={[
        {
          route: "BBI Airport ⇄ Master Canteen / Old Town",
          distance: "12 km approx",
          approxDuration: "25–35 Mins",
          sedanEstimate: "₹450 - ₹550",
          suvEstimate: "₹750 - ₹900",
        },
        {
          route: "BBI Airport ⇄ Patia / Infocity / KIIT",
          distance: "18 km approx",
          approxDuration: "35–50 Mins",
          sedanEstimate: "₹550 - ₹700",
          suvEstimate: "₹950 - ₹1,150",
        },
        {
          route: "Bhubaneswar ⇄ Puri Golden Beach (One-Way)",
          distance: "60 km approx",
          approxDuration: "1 hr 20 min Direct",
          sedanEstimate: "₹1,650 - ₹1,950",
          suvEstimate: "₹2,600 - ₹3,000",
        },
        {
          route: "Bhubaneswar ⇄ Kataka Badambadi / CDA",
          distance: "28 km approx",
          approxDuration: "40 min via NH-16",
          sedanEstimate: "₹850 - ₹1,050",
          suvEstimate: "₹1,400 - ₹1,650",
        },
      ]}
      whyChooseTitle="Why Book with Us?"
      whyChooseSubtitle="Avoid last-minute app cancellations and last-minute uplifts. CABJATRA arrives on time and includes approved drivers and clean, well-air-conditioned cars – with no hidden uplift costs."
      whyUsPoints={[
        {
          title: "Live Flight Tracking BBI",
          desc: "If you are delayed in the air, your driver is able to adapt on the ground. We monitor Bhubaneswar flights in real time and will stand by at no extra charge.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=800&auto=format&fit=crop",
          tag: "BBI Flight Monitoring",
          badge: "Live Flight Tracking",
        },
        {
          title: "No Cancelling",
          desc: "Drivers do not cancel at the last minute, and therefore you are not left waiting outside. All CABJATRA bookings are individually allocated and are supported by our assured car allocation system.",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=85&w=800&auto=format&fit=crop",
          tag: "0% Cancellation",
          badge: "Already Allocated Drivers",
        },
        {
          title: "Clear Kilometre Charges",
          desc: "There are no uplifts. Assured car allocation secures your car. Charges are then clearly calculated and paid for on arrival back at your destination.",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop",
          tag: "Simple & Open Pricing",
          badge: "No Covert Uplifts",
        },
      ]}
      cabjatraTitle="CABJATRA Driver Service"
      cabjatraSubtitle="Our assured car service is supported by our round-the-clock dispatch control centre."
      cabjatraPoints={[
        {
          factor: "DRIVER CANCELLATION RATE",
          text: "0% (pre-Allocated)",
        },
        {
          factor: "PEAK & MIDNIGHT SURGE",
          text: "No uplift (Clear Kilometre Charges)",
        },
        {
          factor: "FLEET REGISTRATION",
          text: "100% Commercial Yellow Board Cars",
        },
        {
          factor: "AIR CONDITIONING",
          text: "100% Air-Conditioned Cars",
        },
        {
          factor: "ADVANCE BOOKING CERTAINTY",
          text: "Assured Car Allocation (Instant Confirmation)",
        },
        {
          factor: "SUPPORT & DISPATCH DESK",
          text: "24/7 Human Support (Phone and WhatsApp)",
        },
      ]}
      genericTitle="General Ride-hailing App Users"
      genericBadge="Fluctuating Gig Booking Apps"
      genericSubtitle="Whilst drivers are trustworthy, there are often high cancellation rates and variable uplifts."
      genericPoints={[
        {
          factor: "DRIVER CANCELLATION RATE",
          text: "Regular (between 30-40% at peak times)",
        },
        {
          factor: "PEAK & MIDNIGHT SURGE",
          text: "Up to 2.5x sudden uplifts",
        },
        {
          factor: "FLEET REGISTRATION",
          text: "Mixed and uncontrolled private cars",
        },
        {
          factor: "AIR CONDITIONING",
          text: "Regular driver non-attendance and further negotiation required",
        },
        {
          factor: "ADVANCE BOOKING CERTAINTY",
          text: "Uncertain (driver searched for 15 mins prior)",
        },
        {
          factor: "SUPPORT & DISPATCH DESK",
          text: "Prior mentioned chatbot ‘ghosting’",
        },
      ]}
      genericFooterNote="High cancellation levels and uncertain private cars at busy times."
      howItWorksTitle="How It Works"
      howItWorksSubtitle="We provide a fully open and seamless service. We also guarantee on-time collection for you."
      customSteps={[
        {
          num: "001",
          title: "Select Route & Vehicle",
          desc: "Input your pick-up location, date and preferred car type (Sedan, SUV or Tempo).",
          badge: "Select Route & Vehicle",
        },
        {
          num: "002",
          title: "Instant Booking Confirmation",
          desc: "Our booking staff confirm your booking and then assign your private hire car. An electronic booking voucher is then sent to you via WhatsApp.",
          badge: "Driver pre-allocated 2 hours previously",
        },
        {
          num: "003",
          title: "Experience assured and air-conditioned service",
          desc: "Your confirmed driver will be waiting 15 minutes before your appointed pick-up time and will have the air-con already switched on. Payment can be made either by UPI or in cash on return.",
          badge: "On-time door-to-door pickup and delivery • Complete clarity is provided",
        },
      ]}
      charterClarityTitle="Charter Openness"
      charterClaritySubtitle="We remove any unexpected costs and off-line negotiations prior to your travel."
      inclusionsBadge="100% Coverage"
      inclusionsTitle="Full Inclusion"
      inclusionsSubtitle="Zero hidden additions on your basic quote"
      inclusions={[
        "Private commercial air-conditioned car (Dzire, Etios or Innova Crysta SUV)",
        "Capable driver, with detailed knowledge of Puri Dham temple guidelines.",
        "Additional waiting time for both temple darshan and beach sightseeing.",
        "Collection from hotel, resort or ashram within Bhubaneswar.",
      ]}
      inclusionsFooter="Clear Kilometre Charges • Specialised Air-Conuted Cottage"
      exclusionsBadge="PAY ON USAGE"
      exclusionsTitle="Open Non-charges (Receipts)"
      exclusionsSubtitle="Calculated and paid for using tangible receipts for tax and/or parking."
      exclusions={[
        "Puri Municipality temple car park fee (actual payment at gate)",
        "OTDC Chilika/Satapada boat fare",
        "Individual guide and/or temple donations",
      ]}
      exclusionsFooter="UPI or cash on drop-off"
      bookingCategoryKey="bhubaneswar"
      faqSectionTitle="Frequently Asked Questions Regarding Cab Service in Bhubaneswar"
      serviceFaq={[
        {
          q: "When should I book an airport BBI car?",
          a: "Whilst ideally you should book 2-4 hours in advance, if necessary, you can contact our Bhubaneswar Operations Desk (WhatsApp) for rapid access to a car.",
        },
        {
          q: "Can I book a Bhubaneswar car for temple sightseeing?",
          a: "Yes. We provide 4 Hr/40km and 8 Hr/80km packages for touring the Lingaraj Temple, Rajarani, Mukteshwar, Dhauli Peace Pagoda and Khandagiri Caves.",
        },
        {
          q: "How do I make payments?",
          a: "Booking can easily be carried out on our website, where payment can be made by UPI, GPay, PhonePe and Card. Cash or UPI can also be used for payment on collection. There are no uplift fees.",
        },
      ]}
      readyToConfirmTitle="Ready to Confirm Your Cab Service in Bhubaneswar?"
      readyToConfirmSubtitle="Submit your travel route and date. Our dispatch team allocates a certified commercial yellow-board car and sends your verified driver voucher with instant confirmation."
      readyToConfirmBadge="Dedicated Dispatch Desk Active 24/7"
    />
  );
}
