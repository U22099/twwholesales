import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const siteUrl = "https://twwholesales.cv";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TW Wholesales Store | Wholesale Footwear & Designer Handbags Lagos",
    template: "%s | TW Wholesales Store",
  },
  description:
    "TW Wholesales Store is Lagos' premier wholesale supplier for luxury men's footwear, Fernando Melo half-shoes, chunky lug-sole loafers, Versse braided dumpling bags, and Chrisbella 2-in-1 dome handbags. Visit us at 5, Folashade Abiodun Street, Joke Ayo Busstop, A.I.T. Estate, Alagbado, Lagos.",
  keywords: [
    "TW Wholesales Store",
    "TW Wholesales",
    "TW Wholesale",
    "wholesale footwear Lagos",
    "wholesale designer bags Nigeria",
    "wholesale shoes Alagbado",
    "Fernando Melo half shoes wholesale",
    "Versse Braided Top-Handle Dumpling Bag",
    "Chrisbella 2-in-1 Dome Handbag",
    "Men Breathable Strip Slip-On Shoes",
    "men designer chunky lug sole loafers",
    "female designer bags wholesale Lagos",
    "wholesale footwears Joke Ayo Busstop",
    "New Ipaja Residential Scheme wholesale",
    "designer handbags supplier Nigeria",
    "footwear wholesaler Lagos State",
    "luxury shoes distributor Lagos",
    "designer handbags",
    "female handbags",
    "luxury handbags",
    "designer shoes",
    "luxury shoes",
    "bags",
    "shoes",
    "footwears",
    "handbags",
    "wholesale shoes",
    "wholesale bags",
    "wholesale footwears",
    "wholesale handbags",
    "wholesale designer shoes",
    "wholesale designer bags",
    "wholesale designer footwears",
    "wholesale designer handbags",
    "wholesale luxury shoes",
    "wholesale luxury bags",
    "wholesale luxury footwears",
    "wholesale luxury handbags",
    "wholesale designer shoes",
    "wholesale designer bags",
    "wholesale designer footwears",
    "wholesale designer handbags",
    "wholesale luxury shoes",
    "wholesale luxury bags",
    "wholesale luxury footwears",
    "wholesale luxury handbags",
    "wholesale designer shoes",
    "wholesale designer bags",
    "wholesale designer footwears",
    "wholesale designer handbags",
    "wholesale luxury shoes",
    "wholesale luxury bags",
    "wholesale luxury footwears",
    "wholesale luxury handbags"
  ],
  authors: [{ name: "TW Wholesales Store" }],
  creator: "TW Wholesales Store",
  publisher: "TW Wholesales Store",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TW Wholesales Store | Wholesale Footwear & Designer Handbags Lagos",
    description:
      "Direct wholesale supplier for luxury footwear, Fernando Melo half-shoes, Versse dumpling bags, and Chrisbella handbags in Alagbado, Lagos State.",
    url: siteUrl,
    siteName: "TW Wholesales Store",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "TW Wholesales Store Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TW Wholesales Store | Luxury Wholesale Footwear & Handbags",
    description:
      "Top supplier of female designer bags and luxury footwear in Lagos, Nigeria.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: `${siteUrl}/logo.png`,
    shortcut: `${siteUrl}/logo.png`,
    apple: `${siteUrl}/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "TW Wholesales Store",
    image: `${siteUrl}/logo.png`,
    "@id": `${siteUrl}/#store`,
    url: siteUrl,
    telephone: "08034883697",
    priceRange: "₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "5, Folashade Abiodun Street, New Ipaja Residential Scheme, Joke Ayo Busstop, A.I.T. Estate.",
      addressLocality: "Alagbado",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.6101037,
      longitude: 3.2206451,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-cream-light text-charcoal">
        {children}
      </body>
    </html>
  );
}
