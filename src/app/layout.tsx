import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/common/FloatingWhatsAppButton";
import { COMPANY_CONFIG } from "@/data/company";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "CABJATRA — Premium Cab Booking & Odisha Travel Platform",
  description:
    "Explore Odisha with reliable pre-booked cabs, comfortable journeys, airport transfers to BBI, outstation cabs, hourly rentals, and curated Golden Triangle tour packages.",
  keywords: [
    "Cab booking Odisha",
    "Bhubaneswar taxi service",
    "BBI airport cab",
    "Puri cab booking",
    "Konark travel taxi",
    "Chilika Lake tour",
    "Odisha outstation cabs",
    "CABJATRA",
  ],
  authors: [{ name: "NovaSpark Digital Marketing Pvt. Ltd." }],
  creator: "NovaSpark Digital Marketing Pvt. Ltd.",
  publisher: "NovaSpark Digital Marketing Pvt. Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: COMPANY_CONFIG.brandName,
    description: COMPANY_CONFIG.subTagline,
    url: "https://www.cabjatra.com",
    telephone: COMPANY_CONFIG.contact.phoneRaw,
    priceRange: "₹₹",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Odisha, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONFIG.contact.registeredAddress,
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751024",
      addressCountry: "IN",
    },
    serviceType: [
      "Airport Transfers",
      "Outstation Cabs",
      "Hourly Rentals",
      "Odisha Tour Packages",
      "Local City Rides",
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Strip browser extension injected attributes (e.g. McAfee, Bitwarden, LastPass fdprocessedid) before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && window.MutationObserver) {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'fdprocessedid') {
                        m.target.removeAttribute('fdprocessedid');
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['fdprocessedid']
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-sand-50/50 text-navy-800 antialiased flex flex-col font-sans selection:bg-brand-200 selection:text-brand-950 max-w-full overflow-x-hidden"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
